"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="lx-container">

        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoRow}>
              <span className={styles.dot}></span>
              <span className={styles.logo}>Vesperion Studio</span>
            </div>

            <p className={styles.desc}>
              Moderní weby postavené na výkonu, designu a konverzi.
              Navržené pro reálné podnikání.
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <div className={styles.colTitle}>Navigace</div>

            <a href="#sluzby" className={styles.link}>Služby</a>
            <a href="#proces" className={styles.link}>Proces</a>
            <a href="#reference" className={styles.link}>Reference</a>
            <a href="#cenik" className={styles.link}>Ceník</a>
            <a href="#faq" className={styles.link}>FAQ</a>
            <a href="#kontakt" className={styles.link}>Kontakt</a>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <div className={styles.colTitle}>Kontakt</div>

            <a
              href="mailto:hello@vesperionstudio.com"
              className={styles.link}
            >
              hello@vesperionstudio.com
            </a>

            <a
              href="tel:+420722130094"
              className={styles.link}
            >
              +420 722 130 094
            </a>

            <a
              href="https://t.me/vesperionstudio"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Telegram
            </a>
          </div>

          {/* CTA */}
          <div className={styles.ctaCard}>
            <div className={styles.ctaTitle}>
              Rychlý kontakt
            </div>

            <p className={styles.ctaText}>
              Popište projekt v pár větách. Do 24 hodin
              navrhneme možné řešení.
            </p>

            <a href="#kontakt" className="lx-btn lx-btn--gold">
              Napsat zprávu →
            </a>
          </div>

        </div>

        {/* bottom */}
        <div className={styles.bottom}>

          <div className={styles.copy}>
            © {new Date().getFullYear()} Vesperion Studio ·
            IČO: XXXXXXXX · Tábor, Česká republika
          </div>

          <div className={styles.legal}>
            <a href="/privacy">Ochrana Osobních údajů</a>
            <a href="/cookies">Používání Cookies</a>
            <span>Moderní weby pro Česko</span>
          </div>

        </div>

      </div>
    </footer>
  );
}