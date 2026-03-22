"use client";

import { useId, useMemo, useState } from "react";
import styles from "./services/FAQ.module.css";
import Reveal from "@/components/ui/Reveal";

type FaqItem = {
  q: string;
  a: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Kolik stojí web a jak určujeme rozpočet?",
    a: "Rozpočet se odvíjí od rozsahu, cíle a ambice projektu. Před startem vždy dostanete jasně definovaný rámec — co je součástí, co má prioritu a jaký výstup bude na konci hotový. Bez nejasností, bez skrytých položek a bez chaosu během realizace.",
  },
  {
    q: "Jak rychle může být web hotový?",
    a: "Jednodušší konverzní web zvládneme typicky v horizontu 7–14 dní. Větší nebo škálovatelnější řešení bývá nejčastěji v rozmezí 10–21 dní. Reálný termín vždy upřesníme podle rozsahu, rychlosti schvalování a připravenosti podkladů.",
  },
  {
    q: "Co je potřeba dodat před startem?",
    a: "Na začátku stačí stručně popsat, co prodáváte, komu je nabídka určená, jaký má web splnit cíl a jaký výsledek očekáváte. Hodí se i 1–2 reference, které se vám líbí, případně ukázka směru, kterému se chcete vyhnout. Zbytek doplníme společně v krátké domluvě.",
  },
  {
    q: "Pomůžete i s texty, strukturou a obsahem?",
    a: "Ano. Neřešíme jen vzhled, ale i logiku obsahu. Pomůžeme postavit strukturu, hierarchii sekcí, CTA i směr textů tak, aby web nepůsobil jen hezky, ale hlavně fungoval obchodně. Kompletní branding nebo hlubší copywriting lze rozšířit podle potřeby.",
  },
  {
    q: "Bude web rychlý, technicky čistý a SEO ready?",
    a: "Ano. Důraz klademe na čistou implementaci, rychlost, technický základ SEO, správnou strukturu nadpisů, metadata, sitemapu, robots a celkovou čitelnost pro vyhledávače. Obsahovou SEO strategii nebo další růstové vrstvy lze navázat následně.",
  },
  {
    q: "Dá se web později rozšířit bez chaosu?",
    a: "Přesně tak web stavíme. Projekt má být připravený na další růst — nové landing pages, služby, reference, FAQ, články nebo další sekce. Komponenty a design systém drží konzistenci, takže se web dá rozvíjet bez toho, aby se rozpadl vizuálně i technicky.",
  },
];

export default function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = useMemo(() => FAQ_ITEMS, []);

  return (
    <section
      id="faq"
      className={`${styles.section} lx-section--faq`}
      aria-labelledby={`${baseId}-title`}
    >
      <div className="lx-container">
        <div className={styles.wrap}>
          <Reveal delayMs={0}>
            <header className={styles.head}>
              <div className={styles.eyebrow}>FAQ</div>

              <h2 id={`${baseId}-title`} className={styles.title}>
                Časté otázky.
                <span className={styles.subtitle}>
                  Přímé odpovědi. Jasný proces. Bez zbytečného balastu.
                </span>
              </h2>

              <p className={styles.desc}>
                Tohle jsou otázky, které zaznívají nejčastěji ještě před startem.
                Pokud tu nenajdete přesně to, co řešíte, napište nám — odpovíme
                rychle a konkrétně.
              </p>

              <div className={styles.mini}>
                <span className={styles.dot} aria-hidden="true" />
                Rychlá domluva · jasný rámec · měřitelný výsledek
              </div>
            </header>
          </Reveal>

          <Reveal delayMs={120}>
            <div className={styles.panel} role="list" aria-label="Časté otázky">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                const btnId = `${baseId}-q-${i}`;
                const panelId = `${baseId}-a-${i}`;

                return (
                  <div
                    key={item.q}
                    className={`${styles.item} ${isOpen ? styles.open : ""}`}
                    role="listitem"
                  >
                    <button
                      id={btnId}
                      type="button"
                      className={styles.q}aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className={styles.qMain}>
                        <span className={styles.qIndex}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.qText}>{item.q}</span>
                      </span>

                      <span className={styles.icon} aria-hidden="true">
                        <span className={styles.iconBar} />
                        <span className={`${styles.iconBar} ${styles.iconBarV}`} />
                      </span>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className={styles.aWrap}
                    >
                      <div className={styles.aInner}>
                        <p className={styles.a}>{item.a}</p>
                      </div>
                    </div>

                    <span className={styles.rowLine} aria-hidden="true" />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <div className={styles.tip}>
            <div className={styles.tipBadge}>TIP</div>
            <div className={styles.tipText}>
              Pošlete 1–2 weby, které se vám líbí, a 1 web, který se vám nelíbí.
              Výrazně to urychlí směr návrhu a pomůže trefit správný tón.
            </div>
          </div>
        </div>
      </div>

      <div className="lx-divider" aria-hidden="true" />
    </section>
  );
}