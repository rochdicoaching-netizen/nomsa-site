import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const modalities = [
  "Cognitive Behavioral Therapy (CBT)",
  "Interpersonal Therapy (IPT)",
  "Trauma-Informed Care",
  "Solution-Focused Interventions",
  "Neuro Linguistic Programming (NLP)",
  "Christian Counselling (by request)",
];

export function ApproachBand() {
  return (
    <section className="bg-sage-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="A Tailored, Evidence-Based Approach"
          title="Care shaped around you, not a single method"
          lead="Every client's needs and values are different. Dr Nomsa draws from a blended toolkit of evidence-based modalities so your care is tailored, never generic."
          align="center"
        />
        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {modalities.map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <li className="rounded-full border border-sage-500/40 bg-white px-5 py-2.5 text-sm font-medium text-teal-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sage-600 hover:shadow-md">
                {item}
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
