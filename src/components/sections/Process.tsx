"use client";

import { useState } from "react";
import LeadModal from "@/components/ui/LeadModal";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import styles from "./services/Process.module.css";

type Step = {
  n: string;
  time: string;
  title: string;
  desc: string;
  bullets: string[];
  do: string;
  get: string;
  unlock: string;
  accent: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    time: "30–45 min",
    title: "Kickoff & strategie",
    desc: "Srovnáme cíl, publikum a nabídku. Bez dohadů — jasný směr, priority a rámec projektu.",
    bullets: ["Cíl + KPI", "Scope & priority", "Mapa obsahu + CTA logika"],
    do: "Z projektu vytěžíme podstatu: co prodáváte, komu a proč právě teď.",
    get: "Strukturu stránky, roadmapu sekcí a jasně určené priority.",
    unlock: "Jasný plán: víte, co se bude dělat, proč a v jakém sledu.",
    accent: "#991B1B",
  },
  {
    n: "02",
    time: "1–2 dny",
    title: "UX struktura & copy",
    desc: "Navrhneme flow, hierarchii a text tak, aby návštěvník došel k akci bez tření.",
    bullets: ["Wireframe", "Draft textů", "Důvěra + argumenty"],
    do: "Postavíme logiku webu: headline → důkaz → nabídka → CTA. Bez balastu, jen jasno.",
    get: "Wireframe, draft copy a návrh CTA umístění s konverzní logikou.",
    unlock: "Čitelný web, který vede k akci — ne jen dobře vypadá.",
    accent: "#34D399",
  },
  {
    n: "03",
    time: "3–7 dní",
    title: "Build & performance",
    desc: "Postavíme web v Next.js, doladíme výkon a připravíme měření pro další růst.",
    bullets: ["Next.js komponenty", "Core Web Vitals", "SEO + tracking"],
    do: "Stavíme čistě: rychlost, přístupnost a škálovatelnost. Každý prvek má své místo a smysl.",
    get: "Funkční verzi webu a analytiku připravenou pro další iterace.",
    unlock: "Rychlost, stabilitu a měřitelnost — základ pro růst i další rozhodování.",
    accent: "#A78BFA",
  },
  {
    n: "04",
    time: "1–3 dny",
    title: "Launch & iterace",
    desc: "Nasazení, QA, metriky a první úpravy podle dat. Kontrolovaný start bez chaosu.",
    bullets: ["Deploy + doména", "QA checklist", "1. optimalizace"],
    do: "Zkontrolujeme detaily, chyby a chování uživatelů. Pak web doladíme podle reality.",
    get: "Live web a první iterace po reálném provozu.",
    unlock: "Stabilní start bez prodlev a prostor pro další zlepšování.",
    accent: "#60A5FA",
  },
];

export default function Process() {
  const [leadOpen, setLeadOpen] = useState(false);
  return (
    <Section
      id="proces"
      className="lx-section--process"
      eyebrow="Proces"
      desc="Žádné natahování. Jasné kroky, konkrétní výstupy a měřitelný dopad."
    >
      <div className={styles.topRow}>
        <Reveal delayMs={0}>
          <div className={styles.topCard}>
            <div className={styles.topKicker}>Režim</div>
            <div className={styles.topTitle}>Řízený postup</div>
            <div className={styles.topDesc}>milníky, scope, kontrola</div>
          </div>
        </Reveal>

        <Reveal delayMs={70}>
          <div className={styles.topCard}>
            <div className={styles.topKicker}>Komunikace</div>
            <div className={styles.topTitle}>Krátké iterace</div>
            <div className={styles.topDesc}>rychlý feedback, žádné ticho</div>
          </div>
        </Reveal>

        <Reveal delayMs={140}>
          <div className={styles.topCard}>
            <div className={styles.topKicker}>Výsledek</div>
            <div className={styles.topTitle}>Měřitelné výstupy</div>
            <div className={styles.topDesc}>víte, co dostanete a proč</div>
          </div>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delayMs={80 + i * 90}>
            <article
              className={styles.card}
              style={{ ["--accent" as any]: s.accent }}
            >
              <div className={styles.topline} aria-hidden="true" />

              <header className={styles.head}>
                <div className={styles.meta}>
                  <span className={styles.num}>{s.n}</span>
                  <span className={styles.time}>{s.time}</span></div>
                <div className={styles.stepOf}>Krok {s.n} / 04</div>
              </header>

              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>

              <ul className={styles.list}>
                {s.bullets.map((b) => (
                  <li key={b} className={styles.li}>
                    <span className={styles.dot} aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.blocks}>
                <div className={styles.block}>
                  <div className={styles.blockLabel}>Co uděláme</div>
                  <div className={styles.blockText}>{s.do}</div>
                </div>

                <div className={styles.block}>
                  <div className={styles.blockLabel}>Co získáte</div>
                  <div className={styles.blockText}>{s.get}</div>
                </div>

                <div className={styles.block}>
                  <div className={styles.blockLabel}>Co to odemkne</div>
                  <div className={styles.blockText}>{s.unlock}</div>
                </div>
              </div>

              <footer className={styles.footer}>
                <a className={styles.cta} href="#kontakt">
                  Poptat spolupráci <span aria-hidden="true">→</span>
                </a>
                <span className={styles.krokMini}>Krok {s.n} / 04</span>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>

      <div className={styles.bottomWrap}>
        <Reveal delayMs={120}>
          <div className={styles.bottomCard}>
            <div className={styles.bottomText}>
              <div className={styles.bottomTitle}>Chcete to rozjet rychle a čistě?</div>
              <div className={styles.bottomSub}>
                Pošlete krátký popis projektu — navrhneme nejlepší variantu a další krok.
              </div>

              <div className={styles.pills}>
                <span className={styles.pill}>Bez vaty</span>
                <span className={styles.pill}>Jasné milníky</span>
                <span className={styles.pill}>Měřitelný výsledek</span>
              </div>
            </div>

            <div className={styles.bottomCtas}>
             <button
             className="lx-btn lx-btn--gold lx-btn--nav-gold lx-shine"
               onClick={() => setLeadOpen(true)}
                 >
                   Probrat projekt
            <span className="lx-btn__arrow" aria-hidden="true">→</span>
                  </button>
              <a className="lx-btn lx-btn--ghost lx-btn--hero-dark lx-shine" href="#cenik">
                Ceník <span className="lx-btn__arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className={styles.microNote}>
            Transparentní rámec. Víte, co se děje a proč — bez prodlev a improvizací.
          </div>
        </Reveal>
      </div>

      <div className="lx-divider" aria-hidden="true" />
      <LeadModal
  open={leadOpen}
  onClose={() => setLeadOpen(false)}
  serviceId={null}
/>
    </Section>
  );
}