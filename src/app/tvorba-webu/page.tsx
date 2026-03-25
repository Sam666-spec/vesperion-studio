import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tvorba webů na míru v Česku | Vesperion Studio",
  description:
    "Navrhujeme a vytváříme moderní weby na míru pro firmy v Česku. Prémiový design, UX/UI, rychlost, výkon a SEO základy pro lepší viditelnost i konverze.",
};

export default function TvorbaWebuPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Tvorba webů na míru v Česku
        </h1>

        <p className="text-lg text-neutral-300 mb-8 leading-8">
          Vytváříme moderní webové stránky na míru pro firmy, značky a služby v
          Česku. Zaměřujeme se na prémiový vzhled, čistý UX/UI, rychlé načítání
          a strukturu, která podporuje důvěru i konverze.
        </p>

       <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Moderní weby, které vypadají profesionálně a fungují
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Nestačí, aby web jen existoval. Kvalitní firemní web musí dobře
          vypadat, rychle fungovat a jasně komunikovat hodnotu služby nebo
          produktu. Proto navrhujeme weby na míru bez šablonového dojmu a s
          důrazem na detaily.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Každý projekt stavíme tak, aby byl přehledný, responzivní a připravený
          na další růst. Důležitou součástí je také technický základ pro SEO,
          správná struktura obsahu a promyšlené rozvržení jednotlivých sekcí.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co zahrnuje tvorba webu na míru
        </h2>

        <ul className="text-neutral-400 space-y-3 mb-10 leading-8">
          <li>• návrh struktury a obsahu webu</li>
          <li>• moderní UX/UI design</li>
          <li>• responzivní zobrazení pro mobil i desktop</li>
          <li>• čistý a rychlý front-end</li>
          <li>• SEO základy a technická připravenost pro Google</li>
          <li>• důraz na výkon, důvěru a konverze</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Pro koho je řešení vhodné
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Web na míru je vhodný pro menší firmy, lokální podnikání, osobní značky
          i nové projekty, které chtějí působit profesionálně od začátku. Pokud
          nechcete generický web z builderu a hledáte čisté, moderní a důvěryhodné
          řešení, tvorba na míru je správná cesta.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Hledáte moderní web v Česku?
          </h2>

          <p className="text-neutral-300 leading-8 mb-6">
            Vesperion Studio navrhuje a vytváří weby, které kombinují prémiový
            vizuál, výkon a promyšlenou strukturu. Pokud chcete web na míru pro
            svou firmu nebo službu, můžeme navrhnout řešení přesně podle vašich cílů.
          </p>

          <a
            href="/#kontakt"
            className="inline-flex items-center rounded-full bg-[#D4AF37] px-6 py-3 text-black font-medium hover:opacity-90 transition"
          >
            Nezávazná poptávka
          </a>
        </div>
      </div>
    </main>
  );
}