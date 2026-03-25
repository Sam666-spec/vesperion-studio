import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Development in Czechia",
  description:
    "Fast and modern web development in Czechia. Clean code, high performance, responsive websites and scalable solutions by Vesperion Studio.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Web Development in Czechia
        </h1>

        <p className="text-lg text-neutral-300 mb-8 leading-8">
          We build fast, modern and scalable websites with clean front-end
          structure, strong performance and a polished user experience.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          Development that supports speed and trust
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          A website should not only look good, it should also load quickly, work
          smoothly across devices and be easy to expand later. We develop modern
          websites with a focus on speed, structure and reliability.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Clean code and proper architecture matter for long-term quality. That
          includes responsive behaviour, readable structure, maintainability and
          performance foundations that improve both UX and SEO.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          What is included in web development
        </h2>

        <ul className="text-neutral-400 space-y-3 mb-10 leading-8">
          <li>• modern front-end implementation</li>
          <li>• responsive layouts for all devices</li>
          <li>• clean structure and maintainable code</li>
          <li>• performance-focused development</li>
          <li>• smooth section flow and interactions</li>
          <li>• technical foundation for further growth</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Why technical quality matters
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Slow or unstable websites reduce trust and conversions. Reliable web
          development helps the site feel premium, improves usability and creates
          a stronger base for SEO and future updates.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Need a modern website built properly?
          </h2>

          <p className="text-neutral-300 leading-8 mb-6">
            Vesperion Studio develops websites that combine premium design,
            performance and technical clarity for long-term business use.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="inline-flex items-center rounded-full bg-[#D4AF37] px-6 py-3 text-black font-medium hover:opacity-90 transition"
            >
              Nezávazná poptávka
            </Link>

            <Link
              href="/services/seo"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition"
            >
              View SEO service
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}