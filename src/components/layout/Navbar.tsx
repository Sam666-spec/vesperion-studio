"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import LeadModal from "@/components/ui/LeadModal";

const links = [
  { id: "sluzby", label: "Služby" },
  { id: "proces", label: "Proces" },
  { id: "reference", label: "Reference" },
  { id: "cenik", label: "Ceník" },
  { id: "faq", label: "FAQ" },
  { id: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(() => links.map((l) => l.id), []);

  const isHome = pathname === "/";

  const buildHref = (id: string) => {
    return isHome ? `#${id}` : `/#${id}`;
  };

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
    if (!isHome) {
      setActiveId("");
      return;
    }

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
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target) {
          const id = (visible.target as HTMLElement).id;
          setActiveId(id === "top" ? "" : id);
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
  }, [isHome, sectionIds]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    id: string
  ) => {
    if (!isHome) {
      setOpen(false);
      return;
    }

    e.preventDefault();

    const hash = `#${id}`;
    const el = document.getElementById(id);

    if (!el) {
      window.history.replaceState(null, "", hash);
      setOpen(false);
      return;
    }

    setActiveId(id === "top" ? "" : id);

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
            href={isHome ? "#top" : "/#top"}
            onClick={(e) => handleClick(e, "top")}
          >
            <span className="lx-brand__dot" />
            <span className="lx-brand_text">
              Vesperion <span className="lx-brand_sub">Studio</span>
            </span>
          </a>

          <nav className="lx-nav" aria-label="Primary">
            {links.map((l) => {
              const isActive = isHome && activeId === l.id;

              return (
                <a
                  key={l.id}
                  className={`lx-nav__link ${isActive ? "is-active" : ""}`}
                  href={buildHref(l.id)}
                  onClick={(e) => handleClick(e, l.id)}
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

            <a
              className="lx-btn lx-btn--ghost lx-btn--hero-dark"
              href={buildHref("cenik")}
              onClick={(e) => handleClick(e, "cenik")}
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
        links={links.map((l) => ({
          href: buildHref(l.id),
          label: l.label,
        }))}
      />
    </>
  );
}