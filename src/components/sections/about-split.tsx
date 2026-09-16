import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconCircle } from "@/components/ui/icon-circle";
import { Portrait } from "@/components/ui/portrait";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const credentials = [
  "Board-Certified Clinical Psychologist",
  "Certified Life & NLP Coach",
  "Nearly 30 Years in HR Leadership & Organizational Development",
  "Author, Speaker & Leadership Development Facilitator",
];

const focusAreas = [
  { icon: "mic", label: "Keynote & Conference Speaking" },
  { icon: "family", label: "Couples & Family Therapy" },
  { icon: "briefcase", label: "Executive & Leadership Coaching" },
  { icon: "puzzle", label: "Organizational Consulting" },
];

export function AboutSplit({
  eyebrow = "About Dr Nomsa",
  title = "Clinical Insight. Compassion. Corporate Fluency.",
  lead = "With nearly three decades spanning clinical psychology, coaching, and senior human resources leadership, Dr Nomsa Ntshingila helps individuals and organizations move from surviving to thriving.",
  ctaHref = "/about",
  ctaLabel = "Learn more about Dr Nomsa",
  showCta = true,
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  ctaHref?: string;
  ctaLabel?: string;
  showCta?: boolean;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr_0.85fr] lg:items-center">
        <Reveal>
          <Portrait
            src="/images/dr-nomsa/dr-nomsa-03.jpg"
            alt="Dr Nomsa Ntshingila, wearing a red floral blazer"
          />
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
          <ul className="mt-7 space-y-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sage-600" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-charcoal/80 sm:text-[0.95rem]">{item}</span>
              </li>
            ))}
          </ul>
          {showCta ? (
            <div className="mt-8">
              <Button href={ctaHref} variant="secondary">
                {ctaLabel}
              </Button>
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={200}>
          <ul className="grid gap-4 border-t border-grey-200 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {focusAreas.map((area) => (
              <li key={area.label} className="flex items-center gap-4">
                <IconCircle icon={area.icon} size="sm" tone="sage" />
                <span className="text-sm font-medium leading-snug text-teal-900">{area.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
