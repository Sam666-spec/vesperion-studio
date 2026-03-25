"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LeadModal from "@/components/ui/LeadModal";
import styles from "./Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [leadOpen, setLeadOpen] = useState(false);

  const sectionHref = (id: string) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

  return (
    <>
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

              <Link href={sectionHref("sluzby")} className={styles.link}>
                Služby
              </Link>
              <Link href={sectionHref("proces")} className={styles.link}>
                Proces
              </Link>
              <Link href={sectionHref("reference")} className={styles.link}>
                Reference
              </Link>
              <Link href={sectionHref("cenik")} className={styles.link}>
                Ceník
              </Link>
              <Link href={sectionHref("faq")} className={styles.link}>
                FAQ
              </Link>
              <Link href={sectionHref("kontakt")} className={styles.link}>
                Kontakt
              </Link>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <div className={styles.colTitle}>Služby</div>

              <Link href="/tvorba-webu" className={styles.link}>
                Tvorba webů
              </Link>

              {/* 🔥 ЛОКАЛЬНЫЕ СТРАНИЦЫ (SEO) */}
              <Link href="/tvorba-webu-praha" className={styles.link}>
                Tvorba webů Praha
              </Link>
              <Link href="/tvorba-webu-tabor" className={styles.link}>
                Tvorba webů Tábor
              </Link>

              <Link href="/services/web-design" className={styles.link}>
                Webdesign
              </Link>
              <Link href="/services/web-development" className={styles.link}>
                Vývoj webu
              </Link>
              <Link href="/services/seo" className={styles.link}>
                SEO služby
              </Link>
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
                href="https://www.instagram.com/vesperionstudio.cz"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                instagram
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

              <button
                type="button"
                className="lx-btn lx-btn--gold"
                onClick={() => setLeadOpen(true)}
              >
                Napsat zprávu →
              </button>
            </div>
          </div>

          {/* bottom */}
          <div className={styles.bottom}>
            <div className={styles.copy}>
              © {new Date().getFullYear()} Vesperion Studio ·
              IČO: XXXXXXXX · Tábor, Česká republika
            </div>

            <div className={styles.legal}>
              <Link href="/privacy">Ochrana osobních údajů</Link>
              <Link href="/cookies">Používání cookies</Link>
              <span>Moderní weby pro Česko</span>
            </div>
          </div>
        </div>
      </footer>

      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        serviceId={null}
      />
    </>
  );
}