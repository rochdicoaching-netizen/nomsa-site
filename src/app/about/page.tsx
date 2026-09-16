import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { IconCircle } from "@/components/ui/icon-circle";
import { Portrait } from "@/components/ui/portrait";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ApproachBand } from "@/components/sections/approach-band";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About Dr Nomsa Ntshingila",
  description:
    "Clinical Psychologist, Life Coach, Christian Counsellor and retired HR Executive with nearly three decades of experience helping individuals, families, leaders and organizations thrive.",
};

const credentials = [
  "Clinical Psychologist",
  "Certified Life & NLP Coach",
  "Christian Counsellor",
  "Retired Senior Human Resources Executive",
  "Author, Speaker & Leadership Development Facilitator",
];

const impactAreas = [
  {
    icon: "person",
    title: "Clinical Psychology",
    body: "Evidence-based psychotherapy for individuals, couples and families, grounded in CBT, IPT, trauma-informed care and solution-focused practice.",
  },
  {
    icon: "compass",
    title: "Life & NLP Coaching",
    body: "Future-focused coaching that draws on Neuro Linguistic Programming to help clients break through limiting patterns and take confident action.",
  },
  {
    icon: "cross",
    title: "Christian Counselling",
    body: "For clients who request it, faith is integrated into the therapeutic process with sensitivity, always guided by the client's own values.",
  },
  {
    icon: "briefcase",
    title: "Organizational & HR Leadership",
    body: "Nearly three decades in senior human resources leadership inform a practical, business-literate approach to executive coaching and workplace consulting.",
  },
];

const values = [
  {
    title: "Person-centred, never one-size-fits-all",
    body: "Every client's context, culture and values shape the therapeutic approach, not a fixed protocol.",
  },
  {
    title: "Evidence-based, always",
    body: "Interventions are grounded in recognised clinical frameworks and current psychological research.",
  },
  {
    title: "Whole-person, whole-system care",
    body: "Healing extends beyond symptoms to relationships, leadership, and the organizations people work within.",
  },
  {
    title: "Confidential and ethically bound",
    body: "Practice is conducted in line with HPCSA ethical guidelines and POPIA data protection principles.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Dr Nomsa"
        title="Experience. Compassion. Excellence."
        lead="Dr Nomsa Ntshingila is a Clinical Psychologist, Life Coach, Christian Counsellor, and retired Human Resources Executive with nearly three decades of experience helping individuals, families, leaders, and organizations thrive."
        breadcrumb="About"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <Portrait
              src="/images/dr-nomsa/dr-nomsa-06.jpg"
              alt="Dr Nomsa Ntshingila, arms crossed, wearing a white floral jacket"
            />
            <ul className="mt-6 space-y-2.5 rounded-2xl border border-grey-200 bg-white p-5">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                  <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-sage-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="space-y-6 text-base leading-relaxed text-charcoal/80">
            <SectionHeading
              eyebrow="Her Story"
              title="A rare, integrated perspective"
              className="mb-2"
            />
            <p>
              She combines evidence-based psychotherapy with coaching, leadership
              development, and organizational consulting to support emotional
              wellbeing, personal transformation, healthy relationships, resilient
              leadership, and psychologically healthy workplaces.
            </p>
            <p>
              Her therapeutic approach integrates Cognitive Behavioral Therapy (CBT),
              Interpersonal Therapy (IPT), trauma-informed care, solution-focused
              interventions, Neuro Linguistic Programming (NLP) life coaching, and
              Christian counselling where appropriate, ensuring that care is
              tailored to each client&apos;s unique needs and values.
            </p>
            <p>
              What differentiates Dr Nomsa is her rare combination of expertise
              across clinical psychology, executive coaching, Christian counselling,
              and senior human resources leadership. With nearly three decades of
              professional experience spanning mental health, organizational
              development, and employee wellbeing, she understands both the
              psychological needs of individuals and the strategic challenges faced
              by modern organizations.
            </p>
            <p>
              This integrated perspective enables her to deliver evidence-based
              psychotherapy, transformative coaching, and workplace wellbeing
              solutions that foster resilience, healthy relationships, effective
              leadership, and sustainable organizational performance for
              individuals, families, leaders, and organizations alike.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Where Her Expertise Meets Your Needs"
            title="Four disciplines, one integrated practice"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 80}>
                <Card className="h-full">
                  <IconCircle icon={area.icon} tone="teal" />
                  <h3 className="mt-5 font-heading text-lg text-teal-900">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{area.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ApproachBand />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Practice Philosophy"
            title="What guides every session"
            align="center"
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80} className="flex gap-4">
                <span className="mt-1 font-heading text-2xl text-gold-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-lg text-teal-900">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Ready to work with Dr Nomsa?"
        lead="Book a discovery call to discuss what you're navigating and find the right starting point: therapy, coaching, or organizational support."
      />
    </>
  );
}
