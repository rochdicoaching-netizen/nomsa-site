import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services, type ServiceCategory } from "@/lib/services";

export const metadata: Metadata = {
  title: "Therapy & Coaching Services",
  description:
    "Individual therapy, couples counselling, family therapy, trauma recovery, life coaching, Christian counselling and more with Dr Nomsa Ntshingila.",
};

const categories: { key: ServiceCategory; label: string; blurb: string }[] = [
  {
    key: "Therapy",
    label: "Clinical Therapy",
    blurb: "Evidence-based psychotherapy for individuals, couples, families and young people.",
  },
  {
    key: "Coaching",
    label: "Coaching & Christian Counselling",
    blurb: "Future-focused, values-aligned support for growth, direction and faith integration.",
  },
  {
    key: "Corporate",
    label: "Organizational Services",
    blurb: "Executive coaching, assessments and training designed for teams and leaders.",
  },
];

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Therapy & Coaching"
        title="Care tailored to where you are, and where you're going"
        lead="From clinical therapy to coaching and organizational consulting, every service is grounded in evidence-based practice and shaped around your unique needs."
        breadcrumb="Services"
      />

      {categories.map((category) => {
        const items = services.filter((s) => s.category === category.key);
        return (
          <section key={category.key} className="border-b border-grey-200 py-16 last:border-none sm:py-20">
            <Container>
              <SectionHeading eyebrow={category.label} title={category.blurb} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, i) => (
                  <Reveal key={service.slug} delay={i * 70}>
                    <Link href={`/services/${service.slug}`} className="block h-full">
                      <Card className="flex h-full flex-col">
                        <IconCircle icon={service.icon} tone="teal" />
                        <h3 className="mt-5 font-heading text-xl text-teal-900">{service.name}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
                          {service.tagline}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition-transform duration-300 group-hover:translate-x-1">
                          Learn more
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </span>
                      </Card>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CtaBanner />
    </>
  );
}
