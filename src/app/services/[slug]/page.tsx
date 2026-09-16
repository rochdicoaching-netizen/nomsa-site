import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { IconCircle } from "@/components/ui/icon-circle";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={service.category === "Corporate" ? "Organizational Services" : service.category}
        title={service.name}
        lead={service.tagline}
        breadcrumb={service.name}
        tone="teal"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal className="space-y-8">
            <p className="text-lg leading-relaxed text-charcoal/80">{service.summary}</p>

            <div>
              <h2 className="font-heading text-2xl text-teal-900">Who this is for</h2>
              <ul className="mt-4 space-y-3">
                {service.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-sage-600" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-charcoal/80 sm:text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-teal-900">What to expect</h2>
              <ol className="mt-4 space-y-5">
                {service.whatToExpect.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-teal-50 font-heading text-sm text-teal-800 ring-1 ring-teal-100">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-teal-900">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-teal-900">Frequently asked questions</h2>
              <div className="mt-4">
                <FaqAccordion items={service.faqs} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(min-width: 1024px) 32vw, 90vw"
                className="object-cover"
              />
            </div>

            <Card>
              <h3 className="font-heading text-lg text-teal-900">Approaches used</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.approaches.map((approach) => (
                  <li
                    key={approach}
                    className="rounded-full bg-sage-50 px-3.5 py-1.5 text-xs font-medium text-sage-700 ring-1 ring-sage-100"
                  >
                    {approach}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact#book" variant="primary" className="w-full">
                  Book an Appointment
                </Button>
                <Button href="/contact" variant="secondary" className="w-full">
                  Ask a Question
                </Button>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <SectionHeading eyebrow="Related" title="You may also find helpful" />
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 80}>
                  <Link href={`/services/${r.slug}`} className="block h-full">
                    <Card className="flex h-full flex-col">
                      <IconCircle icon={r.icon} tone="gold" />
                      <h3 className="mt-5 font-heading text-lg text-teal-900">{r.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">{r.tagline}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                        Learn more <ArrowRight className="size-4" aria-hidden="true" />
                      </span>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBanner />
    </>
  );
}
