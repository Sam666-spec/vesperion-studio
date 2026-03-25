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
      <Process />
      <Reference />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}