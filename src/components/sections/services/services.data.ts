// src/components/sections/services/services.data.ts

export type ServiceId = "landing" | "design" | "dev" | "seo" | "growth";

export type ServiceItem = {
  id: ServiceId;
  title: string;
  description: string;
  bullets: string[];
  badge?: string;
  featured?: boolean;
  icon: "layout" | "sparkles" | "code" | "search" | "barchart";
  footerText: string;
  cta?: { label: string; href: string };
};

export const SERVICES: ServiceItem[] = [
  {
    id: "landing",
    icon: "layout",
    title: "Landing page, která konvertuje",
    badge: "Nejčastější volba",
    featured: true,
    description:
      "Struktura, copy a UI navržené pro konverze. Jasná nabídka, silné CTA a důvěryhodný výstup — bez šablonového feelu.",
    bullets: [
      "Zacílení na poptávky",
      "Jasná hierarchie obsahu",
      "CTA bez tření",
      "Konkrétní výstupy bez balastu",
    ],
    footerText: "Konkrétní výstupy bez balastu",
    cta: { label: "Detail", href: "modal" },
  },

  {
    id: "design",
    icon: "sparkles",
    title: "Design systém (prémiový styl)",
    description:
      "Typografie, spacing a komponenty navržené pro konzistentní a prémiový výstup. Méně chaosu, více důvěry a elegance.",
    bullets: [
      "Konzistentní UI systém",
      "Rychlejší iterace",
      "Prémiový vizuální dojem",
      "Čistota bez balastu",
    ],
    footerText: "UI systém + spacing + typografie",
    cta: { label: "Detail", href: "modal" },
  },

  {
    id: "dev",
    icon: "code",
    title: "Čistý kód a výkon",
    description:
      "Next.js, přístupnost, rychlé načítání a škálovatelná struktura. Web postavený na měřitelném výkonu, ne na domněnkách.",
    bullets: [
      "Core Web Vitals",
      "A11y baseline",
      "Udržovatelný základ",
      "Bez zbytečností",
    ],
    footerText: "Core Web Vitals + přístupnost",
    cta: { label: "Detail", href: "modal" },
  },

  {
    id: "seo",
    icon: "search",
    title: "SEO základy",
    description:
      "Metadata, sitemap, robots, struktura nadpisů a interní odkazy. Technický základ, který pomáhá viditelnosti ve vyhledávání.",
    bullets: [
      "Metadata",
      "Sitemap + robots",
      "Struktura H1–H3",
      "Interní odkazy",
    ],
    footerText: "Metadata + struktura + interní odkazy",
    cta: { label: "Detail", href: "modal" },
  },

  {
    id: "growth",
    icon: "barchart",
    title: "Měření & CRO",
    description:
      "Analytika, event tracking a A/B testy, aby web reálně zvyšoval poptávky. Přehledná data, jasné signály a další iterace.",
    bullets: [
      "GA4 / Plausible / Matomo",
      "Event tracking (CTA, scroll, formuláře)",
      "A/B testy a rychlé iterace",
      "CRO doporučení na základě dat",
    ],
    footerText: "Analytika + eventy + A/B testy",
    cta: { label: "Detail", href: "modal" },
  },
];