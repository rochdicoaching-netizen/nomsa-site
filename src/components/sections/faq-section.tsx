import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaqAccordion, type FaqItem } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";

export function FaqSection({
  items,
  eyebrow = "Common Questions",
  title = "Frequently asked questions",
}: {
  items: readonly FaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="bg-canvas py-20 sm:py-24">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <Reveal className="mt-10">
          <FaqAccordion items={items} />
        </Reveal>
      </Container>
    </section>
  );
}
