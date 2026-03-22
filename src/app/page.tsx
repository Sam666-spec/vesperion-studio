import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/services/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Reference from "@/components/sections/Reference";

export default function Page() {
  return (
    <main id="top">
      <Hero />
      {/* Neon divider между секциями */}
      <Services />
      <Process />
      <Reference/>
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}

