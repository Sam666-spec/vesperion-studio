import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign na míru v Česku | Vesperion Studio",
  description:
    "Navrhujeme moderní weby na míru pro firmy v Česku. Prémiový design, UX/UI, rychlost a struktura zaměřená na konverze.",
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Webdesign na míru v Česku
        </h1>

        <p className="text-lg text-neutral-300 mb-10 leading-8">
          Navrhujeme moderní webové stránky pro firmy, značky a služby v Česku.
          Důraz klademe na vizuální kvalitu, důvěru a strukturu,
          která podporuje konverze.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Design, který podporuje business
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Kvalitní webdesign není jen o vzhledu. Dobrý web musí být přehledný,
          rychlý a jasně komunikovat hodnotu služby. Navrhujeme rozhraní,
          které působí profesionálně a zároveň vede návštěvníka k akci.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Každé rozhodnutí v designu děláme s ohledem na UX,
          vizuální rovnováhu a konverzní logiku.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co obsahuje webdesign
        </h2>

        <ul className="text-neutral-300 leading-8 mb-10 space-y-2">
          <li>• moderní UI/UX struktura</li>
          <li>• prémiový vizuální styl</li>
          <li>• responzivní design (mobile + desktop)</li>
          <li>• struktura zaměřená na konverze</li>
          <li>• konzistence designu napříč webem</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Pro koho je tato služba
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Pro firmy, podnikatele a značky, které chtějí kvalitní web bez
          šablonového vzhledu. Pokud je pro vás důležitý první dojem,
          důvěra a profesionální prezentace, web na míru je správná volba.
        </p>

        <div className="border border-white/10 rounded-2xl p-8 mt-10">
          <h3 className="text-xl font-semibold mb-3">
            Hledáte webdesign v Česku?
          </h3>

          <p className="text-neutral-400 mb-6">
            Vytváříme weby s moderním designem, jasnou strukturou
            a reálným přínosem pro váš business.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="#kontakt" className="lx-btn lx-btn--gold">
              Nezávazná poptávka
            </a>

            <a href="/services/web-development" className="lx-btn lx-btn--ghost">
              Vývoj webu
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}