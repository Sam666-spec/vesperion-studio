import type { Metadata } from "next";
import Link from "next/link";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/services/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Reference from "@/components/sections/Reference";

export const metadata: Metadata = {
  title: "Tvorba webů na míru v Česku",
  description:
    "Vesperion Studio navrhuje a vytváří prémiové weby pro firmy v Česku. Moderní UX/UI, čistý kód, SEO základy, vysoký výkon a struktura zaměřená na konverze.",
};

export default function Page() {
  return (
    <main id="top">
      <Hero />
      <Services />

      <section className="lx-section">
  <div className="lx-shell">

    {/* 🔥 Divider сверху */}
    <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/40 to-transparent mb-12" />

    <div className="mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-black/60 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 relative overflow-hidden">

      {/* 🔥 subtle gold glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      <div className="relative z-10">

        <div className="mb-4 inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#D4AF37]">
          Detail služeb
        </div>

        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">
          Naše služby podrobně
        </h2>

        <p className="mb-8 max-w-2xl text-neutral-400 leading-7">
          Každá služba má vlastní detailní stránku, kde najdete více informací
          o přístupu, technickém řešení a přínosu pro váš web i business.
        </p>

        <div className="flex flex-wrap gap-4">

          <Link
            href="/services/web-design"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-[#D4AF37]/40 hover:bg-white/10"
          >
            Webdesign
          </Link>

          <Link
            href="/services/web-development"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-[#D4AF37]/40 hover:bg-white/10"
          >
            Vývoj webu
          </Link>

          <Link
            href="/services/seo"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition hover:border-[#D4AF37]/40 hover:bg-white/10"
          >
            SEO služby
          </Link>

        </div>
      </div>
    </div>
  </div>
</section>

      <Process />
      <Reference />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}