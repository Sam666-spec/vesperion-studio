import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tvorba webů Tábor | Web na míru pro lokální firmy | Vesperion Studio",
  description:
    "Tvorba webů na míru v Táboře pro firmy, služby a podnikání. Moderní design, rychlý vývoj, SEO základy a weby, které budují důvěru a přivádějí poptávky.",
};

export default function TaborPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Tábor · Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Tvorba webů Tábor
        </h1>

        <p className="text-lg text-neutral-300 mb-8 leading-8">
          Pomáháme firmám v Táboře vytvářet moderní weby na míru, které působí
          profesionálně, dobře fungují a podporují růst podnikání.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Tvorba webových stránek Tábor pro lokální firmy a služby
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Lokální podnikání dnes potřebuje kvalitní online prezentaci. Pokud
          někdo hledá vaše služby, web často rozhoduje o prvním dojmu. Proto je
          důležité, aby působil důvěryhodně, byl přehledný a jasně vedl
          návštěvníka k další akci.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Vytváříme webové stránky v Táboře tak, aby nebyly jen hezké, ale i
          praktické. Spojujeme moderní design, technickou kvalitu a strukturu,
          která dává smysl jak uživateli, tak vyhledávačům.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Co zahrnuje tvorba webu v Táboře
        </h2>

        <ul className="text-neutral-300 leading-8 mb-10 space-y-2">
          <li>• web na míru pro lokální firmu nebo službu</li>
          <li>• moderní design a responzivní zobrazení</li>
          <li>• čistý a rychlý front-end</li>
          <li>• technický základ pro SEO</li>
          <li>• struktura zaměřená na důvěru a poptávky</li>
          <li>• připravenost na další růst webu</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Proč je kvalitní web důležitý i pro menší města
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          V menších městech, jako je Tábor, hraje důvěra ještě větší roli.
          Zákazník si často vybírá mezi několika lokálními možnostmi a web může
          rozhodnout, komu nakonec napíše nebo zavolá.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Proto stavíme weby, které působí profesionálně, nepůsobí levně ani
          šablonově a pomáhají firmě vyniknout nad lokální konkurencí.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Pro koho je tato služba vhodná
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Tvorba webu v Táboře je vhodná pro menší firmy, lokální služby,
          provozovny, řemesla, osobní značky i nové projekty, které chtějí od
          začátku působit důvěryhodně a profesionálně.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Související služby
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Web na míru funguje nejlépe tehdy, když design, vývoj a SEO tvoří jeden
          celek. Proto u nás na lokální tvorbu webů navazuje kvalitní webdesign,
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
            Potřebujete web v Táboře?
          </h2>

          <p className="text-neutral-300 leading-8 mb-6">
            Vesperion Studio vytváří weby pro firmy a služby v Táboře tak, aby
            působily profesionálně, dobře fungovaly a měly reálný přínos pro
            podnikání. Pokud chcete web, který bude reprezentovat vaši firmu a
            pomáhat získávat nové zákazníky, navrhneme řešení na míru.
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