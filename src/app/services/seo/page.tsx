import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Foundations for Websites",
  description:
    "SEO foundations for modern websites: metadata, structure, performance and Google-ready setup for better visibility in search.",
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37] mb-4">
          Vesperion Studio
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          SEO Foundations for Websites
        </h1>

        <p className="text-lg text-neutral-300 mb-8 leading-8">
          We prepare websites for Google with proper metadata, technical
          structure, crawlability and performance foundations that support
          visibility in search.
        </p>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-10" />

        <h2 className="text-2xl font-semibold mb-4">
          SEO starts with technical quality
        </h2>

        <p className="text-neutral-400 leading-8 mb-6">
          Search visibility is not only about keywords. A website also needs
          correct metadata, clean structure, accessible pages, sitemap, robots,
          canonical setup and a fast technical foundation. These elements help
          Google understand and process the site more effectively.
        </p>

        <p className="text-neutral-400 leading-8 mb-10">
          Good SEO foundations make future growth easier. They help search engines
          index the site correctly and improve the overall quality of the web
          presence from the start.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          What is included in SEO foundations
        </h2>

        <ul className="text-neutral-400 space-y-3 mb-10 leading-8">
          <li>• metadata and page titles</li>
          <li>• description and canonical setup</li>
          <li>• sitemap and robots configuration</li>
          <li>• crawlable page structure</li>
          <li>• technical readiness for indexing</li>
          <li>• performance-aware implementation</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Why this matters for business websites
        </h2>

        <p className="text-neutral-400 leading-8 mb-10">
          Without strong SEO foundations, even a visually good website may stay
          weak in search. Proper setup helps the site become visible, easier to
          understand for Google and more ready for long-term organic growth.
        </p>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Want a website prepared for Google?
          </h2>

          <p className="text-neutral-300 leading-8 mb-6">
            Vesperion Studio builds websites with design, performance and SEO
            foundations aligned from the beginning.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#kontakt"
              className="inline-flex items-center rounded-full bg-[#D4AF37] px-6 py-3 text-black font-medium hover:opacity-90 transition"
            >
              Nezávazná poptávka
            </Link>

            <Link
              href="/services/web-design"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition"
            >
              View design service
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}