"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import LeadModal from "@/components/ui/LeadModal";
import styles from "./services/Contact.module.css";

type ContactType =
  | "mail"
  | "phone"
  | "linkedin"
  | "instagram"
  | "telegram"
  | "calendar";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  hint?: string;
  icon: "mail" | "phone" | "linkedin" | "instagram" | "telegram" | "calendar";
  tone?: "gold" | "ghost";
  type: ContactType;
};

const LINKS: ContactLink[] = [
  {
    label: "E-mail",
    value: "hello@vesperionstudio.com",
    href: "mailto:hello@vesperionstudio.com",
    hint: "Odpovíme obvykle do 24 hodin",
    icon: "mail",
    type: "mail",
    tone: "gold",
  },
  {
    label: "Telefon",
    value: "+420 722 130 094",
    href: "tel:+420722130094",
    hint: "Po–Pá 10:00–18:00",
    icon: "phone",
    type: "phone",
    tone: "ghost",
  },
  {
    label: "LinkedIn",
    value: "Vesperion Studio",
    href: "https://www.linkedin.com/in/vesperionstudio",
    hint: "Síť a reference",
    icon: "linkedin",
    type: "linkedin",
    tone: "ghost",
  },
  {
    label: "Instagram",
    value: "@vesperionstudio",
    href: "https://www.instagram.com/vesperionstudio.cz",
    hint: "Ukázky a backstage",
    icon: "instagram",
    type: "instagram",
    tone: "ghost",
  },
  {
    label: "Telegram",
    value: "@vesperionstudio",
    href: "https://t.me/vesperionstudio",
    hint: "Rychlá domluva",
    icon: "telegram",
    type: "telegram",
    tone: "ghost",
  },
  {
    label: "Kalendář",
    value: "15min call",
    href: "#cenik",
    hint: "Nejdřív mrkněte na balíčky",
    icon: "calendar",
    type: "calendar",
    tone: "ghost",
  },
];

export default function Contact() {
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <>
      <section
        id="kontakt"
        className={`${styles.section} lx-section--contact`}
        aria-labelledby="contact-title"
      >
        <div className="lx-container">
          <div className={styles.wrap}>
            <Reveal delayMs={0}>
              <header className={styles.head}>
                <div className={styles.eyebrow}>Kontakt</div>

                <h2 id="contact-title" className={styles.title}>
                  Pojďme probrat váš projekt.{" "}
                  <span className={styles.subtitle}>Navrhneme řešení do 24 hodin.</span>
                </h2>

                <p className={styles.desc}>
                  Pošlete nám pár vět: co prodáváte, kdo je cílová skupina a jaký je cíl webu.
                  Odpovíme s návrhem řešení, orientační cenou a odhadem času dodání.
                </p>

                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className="lx-btn lx-btn--gold lx-shine"
                    onClick={() => setLeadOpen(true)}
                  >
                    Napsat e-mail
                    <span className={styles.btnIcon} aria-hidden="true">
                      <Icon name="mail" />
                    </span>
                  </button>

                  <a className="lx-btn lx-btn--ghost lx-shine" href="tel:+420722130094">
                    Zavolat
                    <span className={styles.btnIcon} aria-hidden="true">
                      <Icon name="phone" />
                    </span>
                  </a>
                </div>

                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <span className={styles.dot} aria-hidden="true" />
                    Bez skrytých poplatků
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.dot} aria-hidden="true" />
                    Rychlá komunikace
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.dot} aria-hidden="true" />
                    Faktura / IČO (dle domluvy)
                  </div></div>
              </header>
            </Reveal>

            <div className={styles.grid} role="list" aria-label="Kontaktní možnosti">
              {LINKS.map((item) => (
                <a
                  key={item.label}
                  role="listitem"
                  className={`${styles.card} ${
                    item.tone === "gold" ? styles.cardGold : styles.cardGhost
                  }`}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className={styles.sheen} aria-hidden="true" />

                  <div className={styles.cardTop}>
                    <span className={`${styles.icon} ${styles[item.type]}`}>
                      <Icon name={item.icon} />
                    </span>

                    <span className={styles.label}>{item.label}</span>
                  </div>

                  <div className={styles.value}>{item.value}</div>

                  {item.hint ? <div className={styles.hint}>{item.hint}</div> : null}

                  <div className={styles.detail}>
                    Detail
                    <span className={styles.arrow} aria-hidden="true">
                      <Icon name="arrow" />
                    </span>
                  </div>
                </a>
              ))}

              <Reveal delayMs={220} className={styles.noteReveal}>
                <div className={styles.note}>
                  <div className={styles.noteTitle}>Tip pro rychlou poptávku</div>
                  <div className={styles.noteText}>
                    Pošlete odkaz na web konkurence + 3 věci, které se vám líbí
                    (a 3, které ne). Ušetříme si kolečko a web bude přesněji odpovídat vašemu směru.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <LeadModal
          open={leadOpen}
          onClose={() => setLeadOpen(false)}
          serviceId={null}
        />

        <div className="lx-divider" aria-hidden="true" />
      </section>
    </>
  );
}

/** Inline SVG icons: zero deps */
function Icon({ name }: { name: ContactLink["icon"] | "arrow" }) {
  switch (name) {
    case "mail":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M4.5 7.5h15v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m5.2 8.2 6.2 5a1 1 0 0 0 1.2 0l6.2-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "phone":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M7 3.5h3l1.2 5-2 1.5a13 13 0 0 0 5.8 5.8l1.5-2 5 1.2v3c0 1.1-.9 2-2 2A17.5 17.5 0 0 1 3.5 5.5c0-1.1.9-2 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M6.5 9.5V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M6.5 6.5h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
          <path
            d="M10 18v-5.2c0-1.8 1-3 2.8-3 1.7 0 2.7 1.2 2.7 3V18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3.8 3.8h16.4v16.4H3.8V3.8Z"
            stroke="currentColor"
            strokeWidth="1.2"
            opacity=".5"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M7.5 3.8h9A3.7 3.7 0 0 1 20.2 7.5v9a3.7 3.7 0 0 1-3.7 3.7h-9a3.7 3.7 0 0 1-3.7-3.7v-9A3.7 3.7 0 0 1 7.5 3.8Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 15.6A3.6 3.6 0 1 0 12 8.4a3.6 3.6 0 0 0 0 7.2Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M16.9 7.1h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "telegram":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M20.7 4.2 3.9 11.1c-.9.4-.9 1.7.1 2l4.2 1.3 1.6 5.2c.3 1 1.6 1.2 2.2.3l2.5-3.4 4.6 3.4c.8.6 2 .2 2.2-.8l2.6-13.4c.2-1.1-.9-2-2-1.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8.3 14.5 19 6.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "calendar":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M7 3.8v3M17 3.8v3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4.5 8h15v11a2.2 2.2 0 0 1-2.2 2.2H6.7A2.2 2.2 0 0 1 4.5 19V8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M7.2 12.2h3.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "arrow":
    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M5 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="m13 6 6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}