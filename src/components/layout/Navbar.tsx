"use client";

import { useEffect, useMemo, useState } from "react";
import MobileMenu from "./MobileMenu";
import LeadModal from "@/components/ui/LeadModal";

const links = [
  { href: "#sluzby", label: "Služby" },
  { href: "#proces", label: "Proces" },
  { href: "#reference", label: "Reference" },
  { href: "#cenik", label: "Ceník" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () => links.map((l) => l.href.replace("#", "")),
    []
  );

  useEffect(() => {
    document.body.classList.toggle("lx-lock", open);
    return () => document.body.classList.remove("lx-lock");
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...sectionIds];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const headerEl = document.querySelector(".lx-header") as HTMLElement | null;
    const headerH = headerEl?.offsetHeight ?? 72;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) -
              (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target) {
          const id = (visible.target as HTMLElement).id;
          setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: `-${headerH + 8}px 0px -55% 0px`,
        threshold: [0.12, 0.2, 0.28, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();

    const id = href.startsWith("#") ? href.slice(1) : href;
    const hash = `#${id}`;

    const el = document.getElementById(id);

    if (!el) {
      window.history.replaceState(null, "", hash);
      setOpen(false);
      return;
    }

    if (id === "top") {
      setActiveId("");
    } else {
      setActiveId(id);
    }

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.history.replaceState(null, "", hash);

    setOpen(false);
  };

  return (
    <>
      <header className={`lx-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="lx-header__inner">

          <a
            className="lx-brand"
            href="#top"
            onClick={(e) => handleClick(e, "#top")}
          >
            <span className="lx-brand__dot" />
            <span className="lx-brand_text">
              Vesperion <span className="lx-brand_sub">Studio</span>
            </span>
          </a>

          <nav className="lx-nav" aria-label="Primary">
            {links.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = activeId === id;

              return (
                <a
                  key={l.href}
                  className={`lx-nav__link ${isActive ? "is-active" : ""}`}
                  href={l.href}
                  onClick={(e) => handleClick(e, l.href)}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="lx-header__cta">
            <button
              type="button"
              className="lx-btn lx-btn--gold lx-btn--nav-gold lx-shine"
              onClick={() => setLeadOpen(true)}
            >
              Nezávazná poptávka
            </button>

            <a className="lx-btn lx-btn--ghost lx-btn--hero-dark"
              href="#cenik"
              onClick={(e) => handleClick(e, "#cenik")}
            >
              Zobrazit ceny
            </a>
          </div>

          <button
            className={`lx-burger ${open ? "is-open" : ""}`}
            type="button"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <LeadModal
        open={leadOpen}
        onClose={() => setLeadOpen(false)}
        serviceId={null}
      />

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        onOpenLead={() => {
          setOpen(false);
          setLeadOpen(true);
        }}
        links={links}
      />
    </>
  );
}