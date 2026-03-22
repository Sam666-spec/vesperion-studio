"use client";

import { useState } from "react";
import LeadModal from "@/components/ui/LeadModal";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <section id="top" className="lx-section lx-hero">
      <video
        className="lx-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/vesperion-hero.mp4" type="video/mp4" />
      </video>

      <div className="lx-hero__overlay" aria-hidden="true" />

      <div className="lx-container lx-hero__content">
        <div className="lx-hero-grid">
          <div className="lx-hero-inner">
            <Reveal delayMs={0}>
              <div className="lx-chip lx-chip-hero">
                <span className="lx-chip-hero-accent">
                  Premium web <span className="lx-sep" />
                </span>
                UX/UI <span className="lx-sep" />
                výkon <span className="lx-sep" />
                SEO
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <h1 className="lx-h1">
                Moderní weby,
                <br />
                které <span className="lx-accent">prodávají</span> a budují důvěru.
              </h1>
            </Reveal>

            <Reveal delayMs={170}>
              <p className="lx-lead">
                Navrhujeme a stavíme rychlé, elegantní weby pro malé firmy v Česku.
                     Design systém, čistý kód a struktura zaměřená na konverze.
                                    Bez šablonového feelu.
              </p>
            </Reveal>

            <Reveal delayMs={240}>
              <div className="lx-hero-cta">
                <button
                  className="lx-btn lx-btn--gold lx-shine"
                  type="button"
                  onClick={() => setLeadOpen(true)}
                >
                  Nezávazná konzultace
                </button>

                <a className="lx-btn lx-btn--ghost lx-btn--hero-dark" href="#proces">
                  Jak probíhá spolupráce
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={320}>
              <div className="lx-hero-badges">
                <span className="lx-chip">
                  <span className="lx-dot lx-dot--good" aria-hidden="true" />
                  Rychlé načítání
                </span>

                <span className="lx-chip">
                  <span className="lx-dot lx-dot--good" aria-hidden="true" />
                  SEO základy
                </span>

                <span className="lx-chip">
                  <span className="lx-dot lx-dot--good" aria-hidden="true" />
                  Design systém
                </span>

                <span className="lx-chip">
                  <span className="lx-dot lx-dot--good" aria-hidden="true" />
                  Bezpečný základ
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={220}>
            <aside className="lx-hero-card lx-card lx-card-soft">
              <div className="lx-hero-card-top">
                <div className="lx-hero-card-title">Rychlý start • Pevný základ</div>
                <div className="lx-hero-card-pill">7–14 dní</div>
              </div>

              <div className="lx-hero-metrics">
                <div className="lx-metric">
                  <div className="lx-metric-kpi">90+</div>
                  <div className="lx-metric-label">Lighthouse</div>
                </div>

                <div className="lx-metric">
                  <div className="lx-metric-kpi">A+</div>
                  <div className="lx-metric-label">Core Web Vitals</div>
                </div>

                <div className="lx-metric">
                  <div className="lx-metric-kpi">SEO</div>
                  <div className="lx-metric-label">sitemap & robots</div>
                </div>
              </div>

              <div className="lx-hero-stack"><span className="lx-chip">Next.js</span>
                <span className="lx-chip">React</span>
                <span className="lx-chip">TypeScript</span>
                <span className="lx-chip">JavaScript</span>
                <span className="lx-chip">CSS</span>
                <span className="lx-chip">UI/UX</span>
              </div>

              <div className="lx-hero-card-btn">
                <a className="lx-btn lx-btn--ghost lx-btn--hero-dark lx-shine" href="#cenik">
                  Porovnat balíčky →
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>

      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        serviceId={null}
      />

      <div className="lx-divider lx-divider--hero" aria-hidden="true" />
    </section>
  );
}