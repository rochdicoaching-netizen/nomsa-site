import Link from "next/link";
import { Container } from "@/components/ui/container";
import { IconCircle } from "@/components/ui/icon-circle";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/lib/services";

const featured = [
  "individual-therapy",
  "couples-marriage-counselling",
  "life-coaching",
  "christian-counselling",
  "executive-coaching",
  "workshops-training",
];

export function ServicesStrip() {
  const items = featured
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="border-y border-grey-200 bg-white py-12 sm:py-14" aria-label="Core services">
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((service, i) => (
            <Reveal key={service!.slug} delay={i * 60}>
              <li>
                <Link
                  href={`/services/${service!.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-2xl p-2 text-center transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
                >
                  <IconCircle icon={service!.icon} size="lg" className="transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-teal-900/10" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-charcoal/75 transition-colors group-hover:text-teal-800 sm:text-[0.8rem]">
                    {service!.name}
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
