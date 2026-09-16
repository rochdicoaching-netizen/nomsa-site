import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner({
  eyebrow = "Take the First Step",
  title = "Ready to begin your journey toward healing and growth?",
  lead = "Whether you're seeking individual support or exploring solutions for your organization, Dr Nomsa is here to help you find the right path forward.",
  primaryHref = "/contact#book",
  primaryLabel = "Book a Discovery Call",
  secondaryHref = "/contact",
  secondaryLabel = "Send an Enquiry",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-600 via-teal-700 to-teal-900 py-20 text-white sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-10 size-72 rounded-full bg-white/10 blur-3xl"
      />
      <Container className="relative max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {eyebrow}
          </p>
          <h2 className="font-heading text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-white/80">{lead}</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="gold">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
