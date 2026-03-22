"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import LeadModal from "@/components/ui/LeadModal";
import styles from "./services/Pricing.module.css";

type PlanId = "start" | "growth" | "platinum";

type Plan = {
  id: PlanId;
  badge: string;
  eyebrow: string;
  name: string;
  price: string;
  description: string;
  delivery: string;
  fit: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    id: "start",
    badge: "Základ",
    eyebrow: "Rychlý vstup",
    name: "Start",
    price: "25 000 Kč",
    description:
      "Čistý konverzní základ pro menší službu nebo jednu hlavní nabídku. Rychlé dodání, jasná struktura a profesionální prezentace bez zbytečného balastu.",
    delivery: "7–14 dní",
    fit: "1 služba / 1 nabídka",
    features: [
      "Landing / one-page struktura",
      "Jasná CTA logika a hierarchie obsahu",
      "Responzivní zpracování pro mobil i desktop",
      "Základní SEO nastavení",
      "Nasazení a technický základ",
      "Rychlé načítání a čistá implementace",
    ],
    cta: "Chci Start",
  },
  {
    id: "growth",
    badge: "Nejčastější volba",
    eyebrow: "Nejlepší poměr výkon / cena",
    name: "Growth",
    price: "39 000 Kč",
    description:
      "Varianta pro firmy, které chtějí web jako reálný obchodní nástroj. Lepší UX, silnější struktura, kvalitnější copy a základ pro růst i měření výsledků.",
    delivery: "10–21 dní",
    fit: "více služeb / lead-gen",
    features: [
      "Vícestránkový web s jasnou strukturou",
      "UX návrh a konverzní logika sekcí",
      "Silnější copy orientované na důvěru a akci",
      "Pokročilejší SEO základ",
      "Core Web Vitals optimalizace",
      "Měření událostí a analytický základ",
      "Design systém pro konzistentní prezentaci",
    ],
    cta: "Chci Growth",
    featured: true,
  },
  {
    id: "platinum",
    badge: "Platinum",
    eyebrow: "Brand + výkon + strategie",
    name: "Premium",
    price: "65 000 Kč",
    description:
      "Prémiové řešení pro značky, které chtějí výrazný výstup, strategické vedení a web postavený na výkonu, důvěře a dlouhodobém růstu.",
    delivery: "3–5 týdnů",
    fit: "brand / high-end služby",
    features: [
      "Strategický workshop a prioritizace cíle",
      "Individuální UX architektura",
      "Konverzní copy a positioning",
      "Prémiový vizuální systém",
      "Pokročilé měření a tracking flow",
      "CRO-ready struktura pro další iterace",
      "Priority support po spuštění",
      "Důraz na detail, výkon a důvěru",
    ],
    cta: "Chci Premium",
  },
];

const getModalServiceId = (planId: string) => {
  if (planId === "start") return "pricingStart";
  if (planId === "growth") return "pricingGrowth";
  if (planId === "platinum") return "pricingPlatinum";
  return null;
};

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Pricing() {
  const [leadOpen, setLeadOpen] = useState(false);
  const [serviceId, setServiceId] = useState<string | null>(null);

  const items = useMemo(() => plans, []);

  const openLeadFor = (id: string) => {
    setServiceId(id);
    setLeadOpen(true);
  };

  return (
    <>
      <section
        id="cenik"
        className={`${styles.section} lx-section--pricing`}
      >
        <div className="lx-container">
          <Reveal delayMs={0}>
            <header className={styles.head}>
              <div className={styles.eyebrow}>Ceník</div>

              <h2 className={styles.title}>
                Investice do webu,
                <br />
                který působí draze
                <br />
                a prodává.
              </h2>

              <p className={styles.desc}>
                Každý projekt má jiný cíl, rozsah a ambici.
            Proto stavíme balíčky tak, aby odpovídaly realitě podnikání —
                od rychlého konverzního základu až po prémiové řešení
                  se strategií, výkonem a prostorem pro další růst.
              </p>
            </header>
          </Reveal><div className={styles.stage}>
            <div className={styles.grid}>
              {items.map((plan, i) => (
                <Reveal key={plan.id} delayMs={100 + i * 70}>
                  <article
                    className={cx(
                      styles.card,
                      styles[plan.id],
                      plan.featured && styles.featured
                    )}
                  >
                    <span className={styles.bg} aria-hidden="true" />
                    <span className={styles.innerBorder} aria-hidden="true" />
                    <span className={styles.topline} aria-hidden="true" />

                    <div className={styles.cardTop}>
                      <div className={styles.badge}>{plan.badge}</div>

                      <div className={styles.priceBox}>
                        <span className={styles.pricePrefix}>od</span>
                        <strong className={styles.price}>{plan.price}</strong>
                      </div>
                    </div>

                    <div className={styles.planEyebrow}>{plan.eyebrow}</div>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <p className={styles.planDesc}>{plan.description}</p>

                    <div className={styles.meta}>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Dodání</span>
                        <span className={styles.metaValue}>{plan.delivery}</span>
                      </div>

                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Vhodné pro</span>
                        <span className={styles.metaValue}>{plan.fit}</span>
                      </div>
                    </div>

                    <ul className={styles.list}>
                      {plan.features.map((item) => (
                        <li key={item} className={styles.listItem}>
                          <span className={styles.dot} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className={styles.cta}
                      onClick={() => {
                        const modalId = getModalServiceId(plan.id);
                        if (modalId) openLeadFor(modalId);
                      }}
                      aria-label={`Otevřít poptávku pro balíček ${plan.name}`}
                    >
                      <span>{plan.cta}</span>
                      <span className={styles.arrow} aria-hidden="true">
                        →
                      </span>
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delayMs={220}>
  <div className={styles.pricingNote}>
    Nejste si jistí, který balíček je správný?
    <br />
    Pošlete krátký popis projektu a doporučíme nejlepší variantu.
    <div className={styles.pricingNoteBtn}>
      <a className="lx-btn lx-btn--ghost lx-btn--hero-dark lx-shine" href="#kontakt">
        Konzultovat projekt →
      </a>
      <div className={styles.pricingMicro}>
  Odpovíme do 24 hodin. Obvykle mnohem dříve.
</div>
    </div>
  </div>
</Reveal>
          </div>
        </div>

        <div className="lx-divider" aria-hidden="true" />
      </section>

      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        serviceId={serviceId}
      />
    </>
  );
}