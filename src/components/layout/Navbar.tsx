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
  const [open, setOpen] = useState(false); // mobile menu
  const [leadOpen, setLeadOpen] = useState(false); // modal
  const [activeId, setActiveId] = useState<string>(""); // scroll-spy active section
  const [scrolled, setScrolled] = useState(false); // header state

  const sectionIds = useMemo(
    () => links.map((l) => l.href.replace("#", "")),
    []
  );

  // body lock for mobile menu
  useEffect(() => {
    document.body.classList.toggle("lx-lock", open);
    return () => document.body.classList.remove("lx-lock");
  }, [open]);

  // "level up" on scroll (header look)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy: detect current section
 useEffect(() => {
  const ids = ["top", ...sectionIds]; // важно: top тоже участвует
  const sections = ids
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => Boolean(el));

  if (!sections.length) return;

  // высота sticky хедера (чтобы зона наблюдения начиналась под ним)
  const headerEl = document.querySelector(".lx-header") as HTMLElement | null;
  const headerH = headerEl?.offsetHeight ?? 72;

  const observer = new IntersectionObserver(
    (entries) => {
      // берём пересечения и сортируем по intersectionRatio
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

      if (visible?.target) {
        const id = (visible.target as HTMLElement).id;
        setActiveId(id);
      }
    },
    {
      root: null,
      // верхняя граница ниже хедера, нижняя - чтобы секция считалась активной, когда она реально “в центре”
      rootMargin: `-${headerH + 8}px 0px -55% 0px`,
      threshold: [0.12, 0.2, 0.28, 0.35, 0.5, 0.65],
    }
  );

  sections.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}, [sectionIds]);

  // smooth scroll + close mobile menu
const handleClick = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  href: string
) => {
  e.preventDefault();

  const id = href.startsWith("#") ? href.slice(1) : href; // "#top" -> "top"
  const hash = `#${id}`;

  const el = document.getElementById(id);

  // если элемент не найден — просто обновим hash и выйдем
  if (!el) {
    window.history.replaceState(null, "", hash);
    setOpen(false);
    return;
  }

  // подсветка сразу (до IntersectionObserver)
  // для top можешь либо сбрасывать, либо ставить "top" — выбирай
  if (id === "top") {
    setActiveId(""); // чтобы не светилось ничего на hero
  } else {
    setActiveId(id);
  }

  // скроллим к секции (работает и если скролл-контейнер НЕ window)
  el.scrollIntoView({ behavior: "smooth", block: "start" });

  // обновляем URL без перезагрузки
  window.history.replaceState(null, "", hash);

  // закрываем моб. меню
  setOpen(false);
};

  return (
    <>
      <header className={`lx-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="lx-header__inner">
          {/* Logo */}
          <a className="lx-brand" href="#top" onClick={(e) => handleClick(e, "#top")} 
          >
            <span className="lx-brand__dot" />
            <span className="lx-brand_text">
  Vesperion <span className="lx-brand_sub">Studio</span>
           </span>
          </a>

          {/* Desktop Nav */}
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

          {/* CTA */}
          <div className="lx-header__cta">
            <button
              type="button"
              className="lx-btn lx-btn--gold lx-btn--nav-gold lx-shine"onClick={() => setLeadOpen(true)}
            >
              Nezávazná poptávka
            </button>

            <a
              className="lx-btn lx-btn--ghost lx-btn--hero-dark"
              href="#cenik"
              onClick={(e) => handleClick(e, "#cenik")}
            >
              Zobrazit ceny
            </a>
          </div>

          {/* Burger */}
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

      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} serviceId={null} />

      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  );
}