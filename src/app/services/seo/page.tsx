import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO služby v Česku | Vesperion Studio",
  description:
    "Základy SEO pro moderní weby. Struktura, rychlost a optimalizace pro lepší pozice ve vyhledávání.",
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          SEO služby v Česku
        </h1>

        <p className="text-lg text-neutral-300 mb-10 leading-8">
          Pomáháme webům být viditelné ve vyhledávání díky správné struktuře,
          rychlosti a technickým základům SEO.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Základy SEO
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          SEO není jen o klíčových slovech. Důležitá je struktura webu,
          rychlost načítání a správné technické nastavení.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co zahrnuje SEO
        </h2>

        <ul className="text-neutral-300 leading-8 mb-10 space-y-2">
          <li>• optimalizace struktury webu</li>
          <li>• rychlost a výkon</li>
          <li>• metadata a indexace</li>
          <li>• technické SEO základy</li>
          <li>• lepší viditelnost ve vyhledávání</li>
        </ul>

        <div className="border border-white/10 rounded-2xl p-8 mt-10">
          <h3 className="text-xl font-semibold mb-3">
            Chcete být vidět v Google?
          </h3>

          <p className="text-neutral-400 mb-6">
            Nastavíme váš web tak, aby měl lepší šanci růst ve vyhledávání.
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