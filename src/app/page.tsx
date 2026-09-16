import { Hero } from "@/components/sections/hero";
import { ServicesStrip } from "@/components/sections/services-strip";
import { AboutSplit } from "@/components/sections/about-split";
import { ApproachBand } from "@/components/sections/approach-band";
import { CorporateCta } from "@/components/sections/corporate-cta";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { homeFaqs } from "@/lib/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <AboutSplit />
      <ApproachBand />
      <CorporateCta />
      <Testimonials />
      <FaqSection items={homeFaqs} />
      <CtaBanner />
    </>
  );
}
