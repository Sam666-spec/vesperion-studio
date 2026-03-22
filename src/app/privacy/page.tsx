import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="lx-legal">
      <div className="lx-legal__container">
        <div className="lx-legal__hero">
          <div className="lx-legal__eyebrow">Legal</div>
          <h1 className="lx-legal__title">Ochrana osobních údajů</h1>
          <p className="lx-legal__lead">
            Přehledně a bez zbytečné omáčky. Tato stránka vysvětluje,
            jak Vesperion Studio nakládá s osobními údaji návštěvníků webu.
          </p>
        </div>

        <div className="lx-legal__card">
          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">1. Správce údajů</h2>
            <p className="lx-legal__text">
              Správcem osobních údajů je Vesperion Studio. V případě dotazů nás
              můžete kontaktovat na e-mailu hello@vesperionstudio.com.
            </p>
          </section>

          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">2. Jaké údaje sbíráme</h2>
            <p className="lx-legal__text">
              Můžeme zpracovávat údaje, které nám dobrovolně poskytnete
              prostřednictvím kontaktního formuláře, e-mailu nebo při jiné
              přímé komunikaci.
            </p>
          </section>

          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">3. Jak údaje používáme</h2>
            <p className="lx-legal__text">
              Údaje používáme pouze za účelem komunikace s klienty,
              vyřízení poptávky, navázání spolupráce nebo poskytování služeb.
            </p>
          </section>

          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">4. Doba uchování</h2>
            <p className="lx-legal__text">
              Osobní údaje uchováváme pouze po dobu nezbytně nutnou
              k vyřízení komunikace nebo spolupráce, případně v rozsahu,
              který vyžadují právní předpisy.
            </p>
          </section>

          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">5. Kontakt</h2>
            <p className="lx-legal__text">
              Pokud máte jakékoliv dotazy ohledně ochrany osobních údajů,
              kontaktujte nás na hello@vesperionstudio.com.
            </p>
          </section>

          <div className="lx-legal__footer">
            <Link href="/" className="lx-legal__back">
              ← Zpět na hlavní stránku
            </Link>
            <div className="lx-legal__meta">Vesperion Studio · Moderní weby pro Česko</div>
          </div>
        </div>
      </div>
    </main>
  );
}