"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./services/Reference.module.css";
import { createPortal } from "react-dom";

type Accent = "gold" | "green" | "cyan" | "violet" | "orange" | "blue";

type DemoShot = {
  src: string;
  alt: string;
  w: number;
  h: number;
};

type RefItem = {
  key: string;
  badge: string;
  accent: Accent;
  title: string;
  desc: string;
  bullets: string[];
  cover: DemoShot;
  shots: DemoShot[];
  cta?: { label: string; href: string };
};

const PAGE_SIZE = 2;

export default function Reference() {
  const items = useMemo<RefItem[]>(
    () => [
      {
        key: "hotel",
        badge: "Hotel",
        accent: "cyan",
        title: "Hotel &  Apartman",
        desc: "Důvěra, výkon a jasné služby. Rezervace + poptávka bez tření.",
        bullets: ["Ceník služeb", "Rezervace termínu", "FAQ + reference + fotky"],
        cover: { src: "/demos/hotel/hoteldemo.webp", alt: "Hotel demo – cover", w: 1600, h: 900 },
        shots: [
          { src: "/demos/hotel/hotel-hero.webp", alt: "Hotel demo – hero", w: 1600, h: 900 },
          { src: "/demos/hotel/hotel-services.webp", alt: "Hotel demo – services", w: 1600, h: 900 },
        ],
        cta: { label: "Detail", href: "#" },
      },
      {
        key: "tattoo",
        badge: "TATTOO",
        accent: "gold",
        title: "Tattoo studio",
        desc: "Portfolio, dostupnost a rychlá konzultace. Vše na pár kliků.",
        bullets: ["Galerie prací", "Book konzultace", "FAQ + péče po tetování"],
        cover: { src: "/demos/tattoo/avatattoo.webp", alt: "Tattoo demo – cover", w: 1600, h: 900 },
        shots: [
          { src: "/demos/tattoo/herotattoo.webp", alt: "Tattoo demo – hero", w: 1600, h: 900 },
          { src: "/demos/tattoo/galerytattoo.webp", alt: "Tattoo demo – gallery", w: 1600, h: 900 },
        ],
        cta: { label: "Detail", href: "#" },
      },
      {
        key: "barber",
        badge: "BARBER",
        accent: "green",
        title: "Barbershop",
        desc: "Silný brand, rychlé termíny a přímý kontakt. Lokální business web ready.",
        bullets: ["Ceník + služby", "Termíny / kontakt", "Recenze + sociální důvěra"],
        cover: { src: "/demos/barber/barberava.webp", alt: "Barber demo – cover", w: 1600, h: 900 },
        shots: [{ src: "/demos/barber/barberhero.webp", alt: "Barber demo – hero", w: 1600, h: 900 }],
        cta: { label: "Detail", href: "#" },
      },
      {
        key: "restaurace",
        badge: "Restaurace",
        accent: "orange",
        title: "Restaurace",
        desc: "Menu, lokace a rychlá akce. Web, který vede zákazníka bez zdržení.",
        bullets: ["Menu + alergeny", "Mapa + rozvoz", "Akce / kombo nabídky"],
        cover: { src: "/demos/restaurace/resava.webp", alt: "Restaurace – cover", w: 1600, h: 900 },
        shots: [{ src: "/demos/restaurace/resdemo1.webp", alt: "Restaurace – hero", w: 1600, h: 900 }],
        cta: { label: "Detail", href: "#" },
      },
    ],
    []
  );

  const pageCount = Math.ceil(items.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const pageItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return items.slice(start, start + PAGE_SIZE);
  }, [items, page]);

  const [openKey, setOpenKey] = useState<string | null>(null);
  const openItem = useMemo(() => items.find((x) => x.key === openKey) ?? null, [items, openKey]);
  const [shotIndex, setShotIndex] = useState(0);

  const openModal = useCallback((key: string) => {
    setOpenKey(key);
    setShotIndex(0);
  }, []);

  const closeModal = useCallback(() => {
    setOpenKey(null);
    setShotIndex(0);
  }, []);

  const prevPage = useCallback(() => {
    setPage((p) => (p - 1 + pageCount) % pageCount);
  }, [pageCount]);

  const nextPage = useCallback(() => {
    setPage((p) => (p + 1) % pageCount);
  }, [pageCount]);

  const prevShot = useCallback(() => {
    if (!openItem) return;
    setShotIndex((i) => (i - 1 + openItem.shots.length) % openItem.shots.length);
  }, [openItem]);

  const nextShot = useCallback(() => {
    if (!openItem) return;
    setShotIndex((i) => (i + 1) % openItem.shots.length);
  }, [openItem]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!openItem) return;

      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevShot();
      if (e.key === "ArrowRight") nextShot();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openItem, closeModal, prevShot, nextShot]);

  useEffect(() => {
    if (!openItem) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [openItem]);

  return (
    <section
      id="reference"
      className={`${styles.section} lx-section--reference`}
      aria-labelledby="reference-title"
    >
      <div className="lx-container">
        <div className={styles.wrap}>
          <Reveal delayMs={0}>
            <header className={styles.head}>
              <div className="lx-eyebrow">Reference</div>

                 <h2 id="reference-title" className={styles.title}>
  Ukázkové koncepty webů pro různé typy podnikání
  <span className={styles.subtitle}>
    Vyberete směr — připravíme strukturu.
  </span>
</h2>

<p className={styles.desc}>
  Navrhujeme strukturu, UX a design podle konkrétního typu podnikání.
  Každý koncept ukazuje, jak může moderní web fungovat v praxi —
  od návrhu ve Figmě až po finální realizaci.
</p>

              <div className={styles.controls} aria-label="Reference navigation">
                <button
                  className={styles.navBtn}
                  onClick={prevPage}
                  aria-label="Previous examples"
                  type="button"
                >
                  <span aria-hidden="true">←</span>
                </button>

                <div className={styles.dots} aria-label="Pages">
                  {Array.from({ length: pageCount }).map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${i === page ? styles.dotActive : ""}`}
                      onClick={() => setPage(i)}
                      aria-label={`Go to page ${i + 1}`}
                      aria-current={i === page ? "page" : undefined}
                      type="button"
                    />
                  ))}
                </div>

                <button
                  className={styles.navBtn}
                  onClick={nextPage}
                  aria-label="Next examples"
                  type="button"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </header>
          </Reveal>

          <div className={styles.grid} role="list" aria-label="Reference cards">
            {pageItems.map((it, i) => (
              <Reveal key={it.key} delayMs={100 + i * 90}>
                <article
                  className={styles.card}
                  data-accent={it.accent}
                  role="listitem"
                  onClick={() => openModal(it.key)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(it.key);
                    }
                  }}
                >
                  <div className={styles.media}>
                    <Image
                      src={it.cover.src}
                      alt={it.cover.alt}
                      width={it.cover.w}
                      height={it.cover.h}
                      className={styles.cover}
                      priority={page === 0}
                    />
                    <span className={styles.corner} aria-hidden="true" /></div>

                  <div className={styles.body}>
                    <div className={styles.topRow}>
                      <span className={`${styles.cardBadge} ${styles[`badge_${it.accent}`]}`}>
                        {it.badge}
                      </span>
                    </div>

                    <h3 className={styles.cardTitle}>{it.title}</h3>
                    <p className={styles.cardDesc}>{it.desc}</p>

                    <ul className={styles.list}>
                      {it.bullets.map((b) => (
                        <li key={b} className={styles.li}>
                          <span className={styles.check} aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.cardFoot}>
                      <span className={styles.mini}>Demo ve Figmě → následně web</span>

                      <span className={styles.detailHint}>
                        <span>Detail</span>
                        <span className={styles.detailArrowMuted} aria-hidden="true">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {openItem &&
  createPortal(
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Demo preview"
    >
      <button
        className={styles.modalBackdrop}
        onClick={closeModal}
        aria-label="Close preview"
        type="button"
      />

      <div className={styles.modal} data-accent={openItem.accent}>
        <div className={styles.modalHead}>
          <div className={styles.modalTitleRow}>
            <span className={`${styles.cardBadge} ${styles[`badge_${openItem.accent}`]}`}>
              {openItem.badge}
            </span>
            <h3 className={styles.modalTitle}>{openItem.title}</h3>
          </div>

          <button
            className={styles.modalClose}
            onClick={closeModal}
            aria-label="Close"
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className={styles.viewer}>
          <button
            className={styles.viewerNav}
            onClick={prevShot}
            aria-label="Previous screen"
            type="button"
          >
            ←
          </button>

          <div className={styles.viewerFrame}>
            <div
              className={styles.frame}
              onClick={() =>
                window.open(openItem.shots[shotIndex].src, "_blank")
              }
            >
              <Image
                key={openItem.shots[shotIndex]?.src}
                src={openItem.shots[shotIndex].src}
                alt={openItem.shots[shotIndex].alt}
                width={openItem.shots[shotIndex].w}
                height={openItem.shots[shotIndex].h}
                className={styles.shot}
                unoptimized
              />
            </div>
          </div>

          <button
            className={styles.viewerNav}
            onClick={nextShot}
            aria-label="Next screen"
            type="button"
          >
            →
          </button>
        </div>

        <div className={styles.modalFoot}>
          <div className={styles.counter}>
            {shotIndex + 1} / {openItem.shots.length}
          </div>

          {openItem.cta?.href && openItem.cta.href !== "#" ? (
            <a
              className={styles.detail}
              href={openItem.cta.href}
              target="_blank"
              rel="noreferrer"
            >
              {openItem.cta.label} →
            </a>
          ) : (
            <span className={styles.detailMuted}>
              Prezentace demo projektů ve Figmě
            </span>
          )}
        </div>
      </div>
    </div>,
    document.body
  )}

      <div className="lx-divider" aria-hidden="true" />
    </section>
  );
}