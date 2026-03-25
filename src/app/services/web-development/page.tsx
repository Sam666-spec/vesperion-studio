import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vývoj webů na míru | Vesperion Studio",
  description:
    "Vyvíjíme moderní weby na míru v Česku. Rychlost, čistý kód, SEO základy a spolehlivý výkon.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Vývoj webů na míru
        </h1>

        <p className="text-lg text-neutral-300 mb-10 leading-8">
          Stavíme rychlé, moderní a technicky čisté weby,
          které fungují spolehlivě a bez kompromisů.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Výkon a kvalita
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Každý web stavíme s důrazem na rychlost, optimalizaci
          a čistou strukturu kódu. Výsledkem je stabilní web,
          který dobře funguje na všech zařízeních.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co obsahuje vývoj
        </h2>

        <ul className="text-neutral-300 leading-8 mb-10 space-y-2">
          <li>• moderní technologie (Next.js, React)</li>
          <li>• optimalizace výkonu</li>
          <li>• SEO-ready struktura</li>
          <li>• responzivní layout</li>
          <li>• bezpečnost a stabilita</li>
        </ul>

        <div className="border border-white/10 rounded-2xl p-8 mt-10">
          <h3 className="text-xl font-semibold mb-3">
            Potřebujete kvalitní web?
          </h3>

          <p className="text-neutral-400 mb-6">
            Postavíme vám web, který bude rychlý, moderní a připravený růst.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/#kontakt" className="lx-btn lx-btn--gold">
              Nezávazná poptávka
            </Link>

            <Link href="/services/seo" className="lx-btn lx-btn--ghost">
              SEO služby
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}