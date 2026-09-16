import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Client Reflections"
          title="Trusted by clients and organizations alike"
          lead="Shared with permission and kept anonymous in line with HPCSA confidentiality standards."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.quote} delay={i * 100}>
              <Card className="flex h-full flex-col">
                <Quote className="size-7 text-gold-500" aria-hidden="true" />
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-charcoal/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-teal-800">{t.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
