import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tvorba webů Praha | Web na míru pro firmy | Vesperion Studio",
  description:
    "Tvorba webů na míru v Praze pro firmy, služby a značky. Moderní webdesign, rychlý vývoj, SEO základy a struktura zaměřená na důvěru i konverze.",
};

export default function PrahaPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Praha · Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Tvorba webů Praha
        </h1>

        <p className="text-lg text-neutral-300 mb-8 leading-8">
          Navrhujeme a vytváříme moderní weby na míru pro firmy v Praze.
          Zaměřujeme se na prémiový vzhled, čistý UX/UI, výkon a strukturu,
          která pomáhá budovat důvěru a získávat poptávky.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Tvorba webových stránek Praha pro firmy, které chtějí růst
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Pokud hledáte tvorbu webových stránek v Praze, nestačí mít jen hezký
          web. Kvalitní firemní web musí být rychlý, přehledný a obchodně
          funkční. Návštěvník musí během několika sekund pochopit, co nabízíte,
          proč vám má věřit a jak vás může kontaktovat.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Proto navrhujeme weby, které kombinují moderní design, logickou
          strukturu a technickou kvalitu. Výsledkem není jen vizuálně silná
          prezentace, ale i web, který podporuje růst podnikání a lépe funguje
          v Google.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co zahrnuje tvorba webu v Praze
        </h2>

        <ul className="text-neutral-300 leading-8 mb-10 space-y-2">
          <li>• návrh struktury a obsahu webu</li>
          <li>• moderní webdesign na míru</li>
          <li>• responzivní zobrazení pro mobil i desktop</li>
          <li>• rychlý a čistý vývoj</li>
          <li>• SEO základy a technická připravenost pro Google</li>
          <li>• důraz na důvěru, výkon a konverze</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Webdesign Praha a technická kvalita v jednom
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Mnoho webů vypadá na první pohled dobře, ale po technické stránce
          nefungují správně. Proto spojujeme design a vývoj do jednoho řešení.
          Web musí být nejen estetický, ale i rychlý, stabilní a připravený na
          další rozvoj.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Díky tomu vzniká profesionální web, který reprezentuje firmu, působí
          důvěryhodně a vytváří lepší základ pro dlouhodobé SEO i získávání
          klientů z online prostředí.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Pro koho je řešení vhodné
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Tvorba webu na míru v Praze je vhodná pro menší a střední firmy,
          lokální služby, osobní značky i nové projekty, které chtějí působit
          profesionálně od začátku. Pokud nechcete generický web z builderu a
          hledáte kvalitní řešení s přesahem do výkonu a SEO, je to správná
          cesta.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Související služby
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Tvorba webu v Praze je nejefektivnější, když design, vývoj a SEO
          fungují společně. Proto na tuto službu přirozeně navazuje webdesign,
          technický vývoj a SEO připravenost pro Google.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Link
            href="/services/web-design"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-white hover:bg-white/5 transition"
          >
            Webdesign
          </Link>

          <Link
            href="/services/web-development"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-white hover:bg-white/5 transition"
          >
            Vývoj webu
          </Link>

          <Link
            href="/services/seo"
            className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-white hover:bg-white/5 transition"
          >
            SEO služby
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Hledáte tvorbu webu v Praze?
          </h2>

          <p className="text-neutral-300 leading-8 mb-6">
            Vesperion Studio navrhuje a vytváří moderní weby pro firmy v Praze,
            které spojují prémiový vizuál, výkon a promyšlenou strukturu.
            Pokud chcete web, který bude reprezentovat vaši značku a zároveň
            fungovat obchodně, navrhneme řešení přesně podle vašich cílů.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="inline-flex items-center rounded-full bg-[#D4AF37] px-6 py-3 text-black font-medium hover:opacity-90 transition"
            >
              Nezávazná poptávka
            </Link>

            <Link
              href="/tvorba-webu"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition"
            >
              Tvorba webů v Česku
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}