import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const items = [
  "Employee Wellbeing Programmes",
  "Executive & Leadership Coaching",
  "Change Management Support",
  "Workplace Mediation & Conflict Resolution",
  "Psychological Assessments",
  "DEI Strategy & Implementation",
];

export function CorporateCta() {
  return (
    <section className="bg-teal-900 py-20 text-white sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            For HR Leaders &amp; Organizations
          </p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">
            Building Psychologically Healthy Workplaces
          </h2>
          <p className="mt-4 max-w-lg text-white/75">
            Dr Nomsa partners with organizations to design customized wellbeing and
            leadership solutions, grounded in psychology and informed by nearly three
            decades of real HR leadership experience.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-gold-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href="/corporate-wellness" variant="gold">
              Discover Corporate Wellness
            </Button>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200&q=80"
            alt="Modern boardroom with panoramic city views, prepared for a leadership session"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}
