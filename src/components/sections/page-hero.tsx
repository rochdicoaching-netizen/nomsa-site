import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumb,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumb?: string;
  tone?: "light" | "teal";
}) {
  return (
    <section
      className={
        tone === "teal"
          ? "bg-gradient-to-br from-teal-900 via-teal-800 to-sage-700 py-16 text-white sm:py-20"
          : "bg-gradient-to-b from-teal-50 to-canvas py-16 sm:py-20"
      }
    >
      <Container className="max-w-3xl">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className={tone === "teal" ? "mb-5 text-xs text-white/60" : "mb-5 text-xs text-charcoal/50"}>
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
              <li aria-current="page" className="font-medium">{breadcrumb}</li>
            </ol>
          </nav>
        ) : null}
        <p
          className={
            tone === "teal"
              ? "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300"
              : "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-700"
          }
        >
          {eyebrow}
        </p>
        <h1 className={tone === "teal" ? "font-heading text-4xl leading-tight sm:text-5xl" : "font-heading text-4xl leading-tight text-teal-900 sm:text-5xl"}>
          {title}
        </h1>
        {lead ? (
          <p className={tone === "teal" ? "mt-5 text-lg leading-relaxed text-white/80" : "mt-5 text-lg leading-relaxed text-charcoal/70"}>
            {lead}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
