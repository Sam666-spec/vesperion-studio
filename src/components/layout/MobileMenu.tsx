"use client";

import { useEffect } from "react";

type LinkItem = { href: string; label: string };

export default function MobileMenu({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: LinkItem[];
}) {
  // ESC close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`lx-mnav ${open ? "is-open" : ""}`}
      aria-hidden={!open}
      onMouseDown={(e) => {
        // click on backdrop closes
        if ((e.target as HTMLElement).dataset.backdrop === "1") onClose();
      }}
    >
      <div className="lx-mnav__backdrop" data-backdrop="1" />

      <div className="lx-mnav__panel" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="lx-mnav__top">
          <div className="lx-mnav__title">Menu</div>
          <button className="lx-mnav__close" type="button" onClick={onClose} aria-label="Zavřít">
            ×
          </button>
        </div>

        <div className="lx-mnav__links">
          {links.map((l) => (
            <a key={l.href} className="lx-mnav__link" href={l.href} onClick={onClose}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="lx-mnav__cta">
          <a className="lx-btn lx-btn--gold" href="#kontakt" onClick={onClose}>
            Nezávazná poptávka
          </a>
          <a className="lx-btn lx-btn--ghost" href="#ceny" onClick={onClose}>
            Zobrazit ceny
          </a>
        </div>
      </div>
    </div>
  );
}