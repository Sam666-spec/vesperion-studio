"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./LeadModal.module.css";

type LeadModalProps = {
  open: boolean;
  onClose: () => void;
  serviceId: string | null;
};

type Status = "idle" | "loading" | "success" | "error";

type ApiResponse =
  | { ok: true }
  | { ok: false; error?: string };

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

const SERVICE_MODAL_CONTENT: Record<
  string,
  {
    title: string;
    subtitle: string;
    placeholder: string;
  }
> = {
  landing: {
    title: "Landing page, která konvertuje",
    subtitle:
      "Navrhneme strukturu, copy a CTA tak, aby stránka přinášela reálné poptávky.",
    placeholder:
      "Popište cíl landing page, cílovou skupinu a hlavní nabídku...",
  },
  design: {
    title: "Design systém (lux feel)",
    subtitle:
      "Vytvoříme vizuální identitu a UI, které působí prémiově a konzistentně.",
    placeholder:
      "Jaký styl hledáte? Minimal, dark, luxusní, moderní?",
  },
  dev: {
    title: "Čistý kód a výkon",
    subtitle: "Postavíme rychlý, optimalizovaný a škálovatelný web.",
    placeholder: "Máte existující web nebo začínáme od nuly?",
  },
  seo: {
    title: "SEO základy",
    subtitle:
      "Technické SEO, struktura a optimalizace pro lepší viditelnost.",
    placeholder: "Na jaké klíčové slova se chcete zaměřit?",
  },
  growth: {
    title: "Měření & CRO",
    subtitle:
      "Implementujeme analytiku a optimalizaci konverzí.",
    placeholder: "Používáte GA4 / jiné nástroje?",
  },
  pricingStart: {
    title: "Balíček Start",
    subtitle:
      "Rychlý konverzní základ pro menší službu nebo jednu hlavní nabídku.",
    placeholder:
      "Popište stručně svůj projekt, službu a hlavní cíl webu...",
  },
  pricingGrowth: {
    title: "Balíček Growth",
    subtitle:
      "Nejlepší poměr výkon / cena pro firmy, které chtějí web jako obchodní nástroj.",
    placeholder:
      "Popište svůj projekt, více služeb, cíle webu a co má návštěvník udělat...",
  },
  pricingPlatinum: {
    title: "Balíček Premium",
    subtitle:
      "Prémiové řešení pro značky, které chtějí výrazný výstup, výkon a strategii.",
    placeholder:
      "Popište značku, ambici projektu, očekávání od webu a požadovaný výsledek...",
  },
};

const DEFAULT_CONTENT = {
  title: "Nezávazná poptávka",
  subtitle: "Popište stručně svůj projekt.",
  placeholder: "Co prodáváte? Pro koho? Jaký je cíl webu?",
};

export default function LeadModal({
  open,
  onClose,
  serviceId,
}: LeadModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const lastActiveElRef = useRef<HTMLElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const content = useMemo(() => {
    if (serviceId && serviceId in SERVICE_MODAL_CONTENT) {
      return SERVICE_MODAL_CONTENT[serviceId];
    }
    return DEFAULT_CONTENT;
  }, [serviceId]);

  const canSubmit = useMemo(() => {
    const n = name.trim();
    const e = email.trim();
    const m = message.trim();

    return (
      n.length >= 2 &&
      isEmail(e) &&
      m.length >= 10 &&
      company.trim().length === 0
    );
  }, [name, email, message, company]);

  function resetHoverState() {
    document.body.style.pointerEvents = "none";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.style.pointerEvents = "";
      });
    });
  }

  function handleClose() {
  onClose();

  // 🔥 Сброс hover через reflow
  document.body.style.pointerEvents = "none";

  // форсим перерисовку
  document.body.offsetHeight;

  requestAnimationFrame(() => {
    document.body.style.pointerEvents = "";
  });
}

  useEffect(() => {
    if (!open) return;

    lastActiveElRef.current = document.activeElement as HTMLElement | null;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
      lastActiveElRef.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    if (serviceId && serviceId in SERVICE_MODAL_CONTENT) {
      const service = SERVICE_MODAL_CONTENT[serviceId];
      const cleanTitle = service.title.replace("Balíček ", "");

      setMessage(
        `Mám zájem o balíček ${cleanTitle}.\n\nStručné zadání projektu:\n`
      );
    } else {
      setMessage("");
    }
  }, [open, serviceId]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key !== "Tab") return;

      const root = dialogRef.current;
      if (!root) return;

      const focusables = root.querySelectorAll<HTMLElement>(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusables.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!canSubmit || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          company: company.trim(),
          service: serviceId,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as Partial<ApiResponse>;

      if (!res.ok || !data || ("ok" in data && data.ok === false)) {
        const msg =
          (data as { error?: string })?.error ||
          (res.status === 429
            ? "Příliš mnoho pokusů. Zkus to za chvíli."
            : "Nepodařilo se odeslat. Zkus to prosím znovu.");

        setErrorMsg(msg);
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setCompany("");

      window.setTimeout(() => {
        handleClose();
        setStatus("idle");
        setErrorMsg("");
      }, 900);
    } catch {
      setErrorMsg("Chyba sítě. Zkus to prosím znovu.");
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onMouseDown={handleClose}
    >
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        aria-describedby="lead-desc"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.noise} aria-hidden="true" />
        <div className={styles.glow} aria-hidden="true" />

        <header className={styles.header}>
          <div className={styles.kicker}>Nezávazná poptávka</div>

          <h2 className={styles.title} id="lead-title">
            {content.title}
          </h2>

          <p className={styles.desc} id="lead-desc">
            {content.subtitle}
            <br />
            <span className={styles.responseNote}>
              Bez závazků • odpověď do 24 hodin
            </span>
          </p>

          <button
            className={styles.close}
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <span className={styles.closeIcon}>×</span>
          </button></header>

        <div className={styles.content}>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.grid}>
              <label className={styles.field}>
                <span className={styles.label}>Jméno</span>
                <input
                  ref={firstInputRef}
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Např. Semen"
                  autoComplete="name"
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>E-mail</span>
                <input
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="např. hello@domena.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </label>
            </div>

            <div className={styles.hpWrap} aria-hidden="true">
              <label className={styles.hpLabel}>
                Company
                <input
                  className={styles.hpInput}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Zpráva</span>
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={content.placeholder}
              />
            </label>

            <div className={styles.footer}>
              <div className={styles.hint}>
                <span className={styles.dot} aria-hidden="true" />
                Odpovíme e-mailem co nejdříve.
              </div>

              <button
                className={styles.submit}
                type="submit"
                disabled={!canSubmit || status === "loading"}
              >
                <span className={styles.submitText}>
                  {status === "loading" ? "Odesílám…" : "Odeslat poptávku"}
                </span>
                <span className={styles.submitArrow} aria-hidden="true">
                  →
                </span>
              </button>
            </div>

            {status === "success" && (
              <div className={styles.toastOk} role="status">
                Děkujeme! Odpovíme do 24 hodin.
              </div>
            )}

            {status === "error" && (
              <div className={styles.toastErr} role="status">
                ❌ {errorMsg || "Nepodařilo se odeslat. Zkus to prosím znovu."}
              </div>
            )}
          </form>

          <aside className={styles.side}>
            <div className={styles.sideCard}>
              <div className={styles.sideTitle}>CO NÁM POŠLETE</div>
              <ul className={styles.sideList}>
                <li>co prodáváte / pro koho</li>
                <li>cíl webu + CTA</li>
                <li>1–2 weby jako inspiraci</li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <div className={styles.sideTitle}>Garance</div>
              <div className={styles.sideText}>
                Jasná cena před startem. Bez překvapení.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}