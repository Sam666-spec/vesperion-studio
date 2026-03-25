import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tvorba webů Tábor | Web na míru | Vesperion Studio",
  description:
    "Tvorba webů na míru v Táboře. Moderní design, rychlý vývoj a weby, které pomáhají firmám růst.",
};

export default function TaborPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Tábor · Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Tvorba webů Tábor
        </h1>

        <p className="text-lg text-neutral-300 mb-10 leading-8">
          Pomáháme firmám v Táboře vytvářet moderní weby,
          které působí profesionálně a podporují růst podnikání.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Moderní weby pro lokální firmy
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Lokální podnikání potřebuje kvalitní online prezentaci.
          Web musí být rychlý, přehledný a důvěryhodný,
          aby zákazník udělal další krok.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co zahrnuje služba
        </h2>

        <ul className="text-neutral-300 leading-8 mb-10 space-y-2">
          <li>• web na míru</li>
          <li>• moderní design</li>
          <li>• responzivní řešení</li>
          <li>• SEO základy</li>
          <li>• výkon a rychlost</li>
        </ul>

        <div className="border border-white/10 rounded-2xl p-8 mt-10">
          <h3 className="text-xl font-semibold mb-3">
            Potřebujete web v Táboře?
          </h3>

          <p className="text-neutral-400 mb-6">
            Vytvoříme vám web, který bude reprezentovat vaši firmu
            a pomůže vám získat nové zákazníky.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/#kontakt" className="lx-btn lx-btn--gold">
              Nezávazná poptávka
            </Link>

            <Link href="/services/web-development" className="lx-btn lx-btn--ghost">
              Vývoj webu
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}