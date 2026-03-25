import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tvorba webů Praha | Web na míru pro firmy | Vesperion Studio",
  description:
    "Tvorba webů na míru v Praze. Moderní webdesign, rychlý vývoj, SEO základy a weby, které pomáhají firmám růst.",
};

export default function PrahaPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Praha · Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tvorba webů Praha
        </h1>

        <p className="text-lg text-neutral-300 mb-10 leading-8">
          Navrhujeme a vytváříme moderní weby na míru pro firmy v Praze.
          Zaměřujeme se na design, výkon a strukturu, která pomáhá získávat zákazníky.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Weby, které fungují v praxi
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Web není jen vizitka. Kvalitní web musí budovat důvěru,
          být rychlý a vést návštěvníka k akci. Proto navrhujeme weby,
          které dávají smysl jak vizuálně, tak obchodně.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co nabízíme v Praze
        </h2>

        <ul className="text-neutral-300 leading-8 mb-10 space-y-2">
          <li>• tvorba webů na míru</li>
          <li>• moderní webdesign</li>
          <li>• rychlý a čistý vývoj</li>
          <li>• SEO základy pro Google</li>
          <li>• weby zaměřené na konverze</li>
        </ul>

        <div className="border border-white/10 rounded-2xl p-8 mt-10">
          <h3 className="text-xl font-semibold mb-3">
            Hledáte tvorbu webu v Praze?
          </h3>

          <p className="text-neutral-400 mb-6">
            Navrhneme vám web, který bude vypadat profesionálně,
            rychle fungovat a přinášet výsledky.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/#kontakt" className="lx-btn lx-btn--gold">
              Nezávazná poptávka
            </Link>

            <Link href="/services/web-design" className="lx-btn lx-btn--ghost">
              Webdesign
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}