import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="lx-legal">
      <div className="lx-legal__container">
        <div className="lx-legal__hero">
          <div className="lx-legal__eyebrow">Legal</div>
          <h1 className="lx-legal__title">Používání cookies</h1>
          <p className="lx-legal__lead">
            Stručně a srozumitelně. Tato stránka vysvětluje,
            jak web používá cookies a podobné technologie.
          </p>
        </div>

        <div className="lx-legal__card">
          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">1. Co jsou cookies</h2>
            <p className="lx-legal__text">
              Cookies jsou malé textové soubory, které se ukládají
              ve vašem prohlížeči při návštěvě webových stránek.
            </p>
          </section>

          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">2. Jak cookies používáme</h2>
            <p className="lx-legal__text">
              Cookies mohou být použity pro základní fungování webu,
              zlepšení uživatelského zážitku nebo analytické vyhodnocení návštěvnosti.
            </p>
          </section>

          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">3. Jak cookies kontrolovat</h2>
            <p className="lx-legal__text">
              Používání cookies můžete kdykoliv upravit nebo zablokovat
              v nastavení svého internetového prohlížeče.
            </p>
          </section>

          <section className="lx-legal__section">
            <h2 className="lx-legal__h2">4. Kontakt</h2>
            <p className="lx-legal__text">
              Pokud máte dotazy ohledně cookies nebo fungování tohoto webu,
              napište nám na hello@vesperionstudio.com.
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