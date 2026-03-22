import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // nodemailer requires node runtime (not edge)

/**
 * Lead payload coming from LeadModal.
 * company = honeypot (MUST stay empty)
 */
type LeadPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

// -------------------------
// Config (tune if needed)
// -------------------------
const MAX_BODY_BYTES = 8 * 1024; // 8KB is enough for a lead form
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQ_PER_WINDOW = 6; // per IP per window
const BAN_MS = 10 * 60_000; // 10 min ban after abuse
const COOLDOWN_MS = 10_000; // 10 sec between successful sends per IP

const SERVICE_LABELS: Record<string, string> = {
  landing: "Landing page, která konvertuje",
  design: "Design systém (lux feel)",
  dev: "Čistý kód a výkon",
  seo: "SEO základy",
  growth: "Měření & CRO (rust)",
};

// In-memory limiter (OK for dev; on serverless it resets sometimes)
type Bucket = { count: number; resetAt: number; banUntil: number; lastOkAt: number };
const buckets = new Map<string, Bucket>();


function escapeHtml(input: string): string {
  // minimal safe HTML escaping for emails
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function now() {
  return Date.now();
}

function getHeader(req: Request, name: string) {
  return req.headers.get(name) || "";
}

function getIP(req: Request) {
  // Vercel / proxies often set x-forwarded-for
  const xff = getHeader(req, "x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  const cf = getHeader(req, "cf-connecting-ip");
  if (cf) return cf.trim();

  return "unknown";
}

function getBucket(ip: string) {
  const t = now();
  const b = buckets.get(ip);
  if (!b) {
    const fresh: Bucket = { count: 0, resetAt: t + WINDOW_MS, banUntil: 0, lastOkAt: 0 };
    buckets.set(ip, fresh);
    return fresh;
  }
  // window reset
  if (t > b.resetAt) {
    b.count = 0;
    b.resetAt = t + WINDOW_MS;
  }
  return b;
}

function cleanupMemory() {
  // avoid unbounded growth (best-effort)
  if (buckets.size < 1500) return;
  const t = now();
  for (const [ip, b] of buckets.entries()) {
    if (t > b.resetAt + 5 * WINDOW_MS && t > b.banUntil) {
      buckets.delete(ip);
    }
  }
}

function jsonFail(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

// -------------------------
// Origin allowlist
// -------------------------
// Put comma-separated origins in env: ALLOWED_ORIGINS="https://vesperionstudio.com,http://localhost:3000"
const ALLOWED_ORIGINS: readonly string[] = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

function isAllowedOrigin(req: Request) {
  if (ALLOWED_ORIGINS.length === 0) return true; // allow all if not set (dev mode)
  const origin = getHeader(req, "origin");
  if (!origin) return false;
  return ALLOWED_ORIGINS.includes(origin);
}

// -------------------------
// Small helpers / validation
// -------------------------
function normalize(s: unknown) {
  if (typeof s !== "string") return "";
  return s.replace(/\s+/g, " ").trim();
}

function clamp(s: string, max: number) {
  if (s.length <= max) return s;
  return s.slice(0, max);
}

// pragmatic email check (not perfect by design)
function isValidEmail(email: string) {
  if (email.length < 6 || email.length > 120) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return re.test(email);
}

function looksLikeBot(req: Request) {
  const ua = getHeader(req, "user-agent").toLowerCase();
  const accept = getHeader(req, "accept").toLowerCase();
  const referer = getHeader(req, "referer").toLowerCase();

  // Very naive heuristics, keep it gentle to avoid blocking real users
  if (!ua || ua.length < 8) return true;
  if (ua.includes("curl") || ua.includes("wget") || ua.includes("python-requests")) return true;

  // If browser-like: accept often includes text/html or */*
  if (!accept) return true;

  // referer can be empty in some legit cases; don't hard-block
  // but we can use it as a soft signal:
  if (referer.includes("localhost") || referer.includes("vesperion")) return false;

  return false;
}

function bodyTooLarge(req: Request) {
  const len = Number(getHeader(req, "content-length") || "0");
  if (!Number.isFinite(len)) return false;
  return len > MAX_BODY_BYTES;
}

// SMTP (env required)// -------------------------
type SmtpEnv = {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  brand: string;
  siteUrl: string;
  contactEmail: string; // ✅ добавили
};

function getSmtpEnv(): SmtpEnv | null {
  const host = process.env.SMTP_HOST || "";
  const portRaw = process.env.SMTP_PORT || "";
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const to = process.env.LEAD_TO || "";

  const brand = process.env.BRAND_NAME || process.env.PUBLIC_BRAND || "Vesperion Studio";
  const siteUrl = process.env.PUBLIC_SITE_URL || "";
  const contactEmail = process.env.PUBLIC_CONTACT_EMAIL || ""; // ✅ добавили

  const port = Number(portRaw);

  if (!host || !Number.isFinite(port) || !user || !pass || !to) return null;

  return { host, port, user, pass, to, brand, siteUrl, contactEmail };
}

function makeTransporter(env: NonNullable<ReturnType<typeof getSmtpEnv>>) {
  const secure = env.port === 465; // 465 SSL, 587 STARTTLS
  return nodemailer.createTransport({
    host: env.host,
    port: env.port,
    secure,
    auth: { user: env.user, pass: env.pass },
    // Extra safety for STARTTLS
    ...(env.port === 587
      ? {
          requireTLS: true,
          tls: { rejectUnauthorized: true },
        }
      : {}),
  });
}

// -------------------------
// CORS preflight (optional)
// -------------------------
export async function OPTIONS(req: Request) {
  // If you don't need cross-origin, you can delete OPTIONS entirely.
  const origin = getHeader(req, "origin");
  if (ALLOWED_ORIGINS.length > 0 && origin && !ALLOWED_ORIGINS.includes(origin)) {
    return new NextResponse(null, { status: 403 });
  }

  const res = new NextResponse(null, { status: 204 });
  if (origin) res.headers.set("Access-Control-Allow-Origin", origin);
  res.headers.set("Vary", "Origin");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  res.headers.set("Access-Control-Max-Age", "86400");
  return res;
}



function buildClientReplyEmailNoTicks(args: {
  brand: string;
  siteUrl?: string;
  contactEmail?: string;
  name: string;
  safeClientEmail: string;
  message: string;
}) {
  const brand = args.brand;
  const siteUrl = args.siteUrl || "";
  const contactEmail = args.contactEmail || "";
  const name = args.name;
  const safeClientEmail = args.safeClientEmail;
  const message = args.message;

  const subject = "Díky za poptávku — " + brand;

  const textLines: string[] = [
    "Ahoj " + name + ",",
    "",
    "díky za poptávku — dorazila v pořádku.",
    "Odpovíme do 24 hodin. Obvykle mnohem dříve.",
    "",
    "Shrnutí:",
    "- Jméno: " + name,
    "- E-mail: " + safeClientEmail,
    "- Zpráva: " + message,
  ];

  if (siteUrl) textLines.push("", "Web: " + siteUrl);
  if (contactEmail) textLines.push("Kontakt: " + contactEmail);

  textLines.push("", brand);

  const text = textLines.join("\n");

  // HTML тоже собираем массивом строк
  const htmlLines: string[] = [];

  htmlLines.push("<div style=\"background:#0b0f14;padding:24px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.55;\">");
  htmlLines.push("  <div style=\"max-width:640px;margin:0 auto;border:1px solid rgba(255,255,255,.10);border-radius:18px;overflow:hidden;background:linear-gradient(180deg, rgba(245,203,92,.10), rgba(12,16,22,.96));\">");

  htmlLines.push("    <div style=\"padding:18px 18px 10px 18px;border-bottom:1px solid rgba(255,255,255,.08);\">");
  htmlLines.push("      <div style=\"letter-spacing:.14em;text-transform:uppercase;font-size:12px;color:rgba(245,203,92,.95);\">Nezávazná poptávka</div>");
  htmlLines.push("      <div style=\"margin-top:8px;font-size:22px;font-weight:700;color:rgba(255,255,255,.92);\">Díky, " + name + " — máme to.</div>");
  htmlLines.push("      <div style=\"margin-top:6px;font-size:13px;color:rgba(255,255,255,.65);\">Odpovíme do 24 hodin. Obvykle mnohem dříve.</div>");
  htmlLines.push("    </div>");

  htmlLines.push("    <div style=\"padding:16px 18px;\">");
  htmlLines.push("      <div style=\"border:1px solid rgba(255,255,255,.10);border-radius:14px;background:rgba(0,0,0,.18);padding:12px 14px;margin-bottom:12px;\">");
  htmlLines.push("        <div style=\"font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:rgba(245,203,92,.85);margin-bottom:8px;\">Shrnutí</div>");
  htmlLines.push("        <div style=\"font-size:13px;color:rgba(255,255,255,.78);\"><b>Jméno:</b> " + name + "</div>");
  htmlLines.push("        <div style=\"font-size:13px;color:rgba(255,255,255,.78);\"><b>E-mail:</b> " + safeClientEmail + "</div>");
  htmlLines.push("        <div style=\"margin-top:10px;font-size:13px;color:rgba(255,255,255,.78);\"><b>Zpráva:</b></div>");
  htmlLines.push("        <div style=\"margin-top:6px;white-space:pre-wrap;color:rgba(255,255,255,.72);font-size:13px;\">" + message + "</div>");
  htmlLines.push("      </div>");

  if (siteUrl) {
    htmlLines.push("      <a href=\"" + siteUrl + "\" style=\"display:inline-block;text-decoration:none;background:rgba(245,203,92,.95);color:#0b0f14;font-weight:700;border-radius:12px;padding:10px 14px;font-size:13px;margin-right:8px;\">Otevřít web</a>");
  }
  if (contactEmail) {
    htmlLines.push("      <a href=\"mailto:" + contactEmail + "\" style=\"display:inline-block;text-decoration:none;border:1px solid rgba(255,255,255,.18);color:rgba(255,255,255,.86);border-radius:12px;padding:10px 14px;font-size:13px;\">Kontaktovat</a>");
  }

  htmlLines.push("      <div style=\"margin-top:14px;font-size:12px;color:rgba(255,255,255,.55);\">Pokud tohle nebyla vaše poptávka, můžete tento email ignorovat.</div>");
  htmlLines.push("    </div>");

  htmlLines.push("    <div style=\"padding:14px 18px;border-top:1px solid rgba(255,255,255,.08);font-size:12px;color:rgba(255,255,255,.55);\">");
  htmlLines.push("      <b style=\"color:rgba(255,255,255,.75);\">" + brand + "</b>" + (siteUrl ? " · " + siteUrl : ""));
  htmlLines.push("    </div>");

  htmlLines.push("  </div>");
  htmlLines.push("</div>");const html = htmlLines.join("\n");

  return { subject, text, html };
}


// -------------------------
// POST /api/lead
// -------------------------
export async function POST(req: Request) {
  cleanupMemory();

  // 1) Origin allowlist
  if (!isAllowedOrigin(req)) {
    return jsonFail("Forbidden origin", 403);
  }

  // 2) Body size guard
  if (bodyTooLarge(req)) {
    return jsonFail("Payload too large", 413);
  }

  // 3) Basic bot heuristic (soft)
  // You can comment this out if it ever false-positives.
  if (looksLikeBot(req)) {
    return jsonFail("Bad request", 400);
  }

  const ip = getIP(req);
  const b = getBucket(ip);
  const t = now();

  // 4) Ban check
  if (b.banUntil && t < b.banUntil) {
    return jsonFail("Too many requests", 429);
  }

  // 5) Rate limit
  b.count += 1;
  if (b.count > MAX_REQ_PER_WINDOW) {
    b.banUntil = t + BAN_MS;
    return jsonFail("Too many requests", 429);
  }

  // 6) Cooldown (only after successful sends)
  if (b.lastOkAt && t - b.lastOkAt < COOLDOWN_MS) {
    return jsonFail("Please wait a bit", 429);
  }

  // 7) Parse JSON safely
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return jsonFail("Invalid JSON", 400);
  }

  const data = raw as Partial<LeadPayload>;
  const name = clamp(normalize(data.name), 60);
  const email = clamp(normalize(data.email).toLowerCase(), 120);
  const message = clamp(normalize(data.message), 1200);
  const company = normalize(data.company); // honeypot
  const nameSafe = escapeHtml(name);
  const emailSafe = escapeHtml(email);
  const messageSafe = escapeHtml(message);
 const serviceRaw = (data as any).service;
const service = typeof serviceRaw === "string" ? normalize(serviceRaw) : "";
const serviceLabel =
  service && SERVICE_LABELS[service]
    ? SERVICE_LABELS[service]
    : service;


  // 8) Honeypot: bots often fill hidden fields
  if (company) {
    // don't reveal why
    return jsonFail("Bad request", 400);
  }

  // 9) Validate
  if (name.length < 2) return jsonFail("Invalid data", 400);
  if (!isValidEmail(email)) return jsonFail("Invalid data", 400);
  if (message.length < 8) return jsonFail("Invalid data", 400);

  // 10) SMTP env
  const env = getSmtpEnv();
  if (!env) {
    return jsonFail("SMTP env missing", 500);
  }

  // 11) Compose lead mail (NO template literals)
  const subject = "New Lead - " + name;

  const textLines = [
  "New lead",
  "",
  "Name: " + name,
  "Email: " + email,
 serviceLabel ? "Service: " + serviceLabel : "",
  "",
  "Message:",
  message,
  "",
  "IP: " + ip,
  "UA: " + (getHeader(req, "user-agent") || "-"),
].filter(Boolean);

const text = textLines.join("\n");

 // 12) Send
try {
  const transporter = makeTransporter(env);

  // Send to you
  await transporter.sendMail({
    from: env.brand + " <" + env.user + ">",
    to: env.to,
    replyTo: email,
    subject: subject,
    text: text,
  });

  // Optional: auto-reply to client (toggle by env)
  const enableAutoReply = (process.env.AUTO_REPLY || "1") === "1";
  if (enableAutoReply) {
    const mail = buildClientReplyEmailNoTicks({
      brand: env.brand,
      siteUrl: env.siteUrl,
      contactEmail: env.contactEmail,
      name: nameSafe,
      safeClientEmail: emailSafe,
      message: messageSafe,
    });

    await transporter.sendMail({
      from: env.brand + " <" + env.user + ">",
      to: email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
  }

  b.lastOkAt = t;
  return NextResponse.json({ ok: true });
} catch (err) {
  // Don't leak details to client
  console.error("MAIL_ERROR", err);
  return jsonFail("Server error", 500);
}
}