import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/sections/page-hero";
import { legalPages, getLegalPageBySlug } from "@/lib/legal";

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPageBySlug(slug);
  if (!page) return {};
  return { title: page.title };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLegalPageBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} breadcrumb={page.title} />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-5">
            <Info className="mt-0.5 size-5 shrink-0 text-gold-700" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal/75">
              Last updated {page.updated}. This page provides a general summary and
              is pending final review by the practice&apos;s legal advisor before
              publication.
            </p>
          </div>
          <div className="space-y-10">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-xl text-teal-900">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-charcoal/75 sm:text-[0.95rem]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
