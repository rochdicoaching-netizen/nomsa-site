import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CorporateEnquiryForm } from "@/components/forms/corporate-enquiry-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Corporate Wellness & Executive Coaching",
  description:
    "Employee wellness programmes, executive coaching, leadership development and organizational transformation grounded in psychology and nearly three decades of HR leadership.",
};

const offerings = [
  { icon: "care", title: "Employee Wellness Programmes", body: "Ongoing initiatives that build emotional resilience and prevent burnout across your workforce." },
  { icon: "briefcase", title: "Executive Coaching", body: "One-on-one coaching for senior leaders navigating high-stakes, high-pressure roles." },
  { icon: "grad", title: "Leadership Development", body: "Psychologically-informed programmes that build emotionally intelligent, resilient leaders." },
  { icon: "users", title: "Team Interventions", body: "Facilitated sessions that resolve dysfunction and rebuild trust within teams." },
  { icon: "puzzle", title: "Workplace Mediation", body: "Neutral, structured mediation for conflict between employees, teams, or departments." },
  { icon: "clipboard", title: "Psychological Assessments", body: "Evidence-based assessments to support hiring, development, and role-fit decisions." },
  { icon: "leaf", title: "Wellness Days", body: "On-site or virtual wellness days combining education, screening, and practical tools." },
  { icon: "spark", title: "Organizational Transformation", body: "Change-management support grounded in the psychology of how people actually adapt." },
];

const process = [
  { title: "Discovery call", detail: "A conversation to understand your organization's context, culture, and current challenges." },
  { title: "Proposal & scoping", detail: "A tailored proposal outlining approach, timeline, and investment: no off-the-shelf packages." },
  { title: "Delivery", detail: "Coaching, workshops, or consulting delivered on-site, virtually, or in a hybrid format." },
  { title: "Impact review", detail: "Outcomes measured against the goals agreed at the outset, with recommendations for what's next." },
];

export default function CorporateWellnessPage() {
  return (
    <>
      <PageHero
        tone="teal"
        eyebrow="For HR Leaders & Organizations"
        title="Building Psychologically Healthy Workplaces"
        lead="Dr Nomsa partners with organizations to design customised wellbeing and leadership solutions, grounded in psychology and informed by nearly three decades of real HR leadership experience."
        breadcrumb="Corporate Wellness"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Comprehensive organizational wellbeing services"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 60}>
                <Card className="h-full">
                  <IconCircle icon={offer.icon} tone="teal" />
                  <h3 className="mt-5 font-heading text-base text-teal-900">{offer.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{offer.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services/executive-coaching"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Read more about Executive Coaching <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-teal-900 py-20 text-white sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80"
              alt="Colleagues stacking hands together in a show of team unity"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Why Organizations Choose Dr Nomsa
            </p>
            <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
              Psychological insight meets business fluency
            </h2>
            <p className="mt-4 text-white/75">
              What differentiates Dr Nomsa is her rare combination of expertise across
              clinical psychology, executive coaching, and senior human resources
              leadership. This integrated perspective enables her to deliver
              solutions that foster resilience, healthy relationships, effective
              leadership, and sustainable organizational performance.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Nearly 30 years of combined HR leadership and clinical experience",
                "Evidence-based frameworks, not generic corporate training",
                "Confidential, ethically-bound practice aligned with HPCSA standards",
                "Engagements scoped to your organization, never off-the-shelf",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-gold-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sage-50 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="How It Works" title="A straightforward engagement process" align="center" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="text-center">
                  <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-white font-heading text-lg text-teal-800 shadow-sm ring-1 ring-sage-200">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-base text-teal-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="enquire" className="py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Corporate Enquiry"
            title="Tell us about your organization"
            lead={`Complete the form below and our team will respond within one business day. You can also reach us directly at ${siteConfig.corporateEmail}.`}
          />
          <Reveal className="mt-10 rounded-3xl border border-grey-200 bg-white p-6 shadow-sm sm:p-10">
            <CorporateEnquiryForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
