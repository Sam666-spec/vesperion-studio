import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Design in Czechia",
  description:
    "Premium web design for businesses in Czechia. Modern UI/UX, clear structure, strong visual identity and conversion-focused layouts by Vesperion Studio.",
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Web Design in Czechia
        </h1>

        <p className="text-lg text-neutral-300 mb-8 leading-8">
          We design premium websites for businesses in Czechia with a strong
          focus on clarity, visual quality, trust and conversion-ready structure.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Modern design that supports business goals
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Good web design is not only about aesthetics. A strong website needs a
          clean structure, consistent hierarchy, readable sections and a visual
          style that reflects the quality of the brand. We create layouts that
          feel modern, premium and easy to use.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Every design decision should support trust, clarity and action. That is
          why we focus on user flow, visual balance, mobile responsiveness and
          sections that help visitors understand the offer quickly.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          What is included in web design
        </h2>

        <ul className="text-neutral-400 space-y-3 mb-10 leading-8">
          <li>• modern UI/UX structure</li>
          <li>• premium visual direction</li>
          <li>• responsive layout for mobile and desktop</li>
          <li>• section planning for clarity and conversions</li>
          <li>• visual consistency across the website</li>
          <li>• design that supports trust and positioning</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Who this service is for
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          This service is suitable for businesses, personal brands, local
          companies and service providers that want a more professional website
          than a generic template can offer. If visual quality matters and first
          impression is part of your business value, custom web design is the
          right direction.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Looking for premium web design in Czechia?
          </h2>

          <p className="text-neutral-300 leading-8 mb-6">
            Vesperion Studio creates modern websites with strong visual identity,
            premium aesthetics and practical structure for real business use.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="inline-flex items-center rounded-full bg-[#D4AF37] px-6 py-3 text-black font-medium hover:opacity-90 transition"
            >
              Nezávazná poptávka
            </Link>

            <Link
              href="/services/web-development"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition"
            >
              View development service
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}