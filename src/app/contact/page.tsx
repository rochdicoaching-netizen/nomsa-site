import type { Metadata } from "next";
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { BookingWidget } from "@/components/forms/booking-widget";
import { siteConfig, emergencyNotice } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment",
  description:
    "Get in touch with Dr Nomsa Ntshingila or book a therapy, coaching or corporate consultation online.",
};

const infoCards = [
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: Mail, label: "Email", value: siteConfig.email, href: siteConfig.emailHref },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's find the right starting point for you"
        lead="Whether you have a question, want to enquire about a service, or are ready to book, we're here to help."
        breadcrumb="Contact"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {infoCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-2xl border border-grey-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-teal-900/5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-charcoal/50">{card.label}</p>
                    {card.href ? (
                      <a href={card.href} className="mt-1 block font-medium text-teal-900 hover:underline">
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-teal-900">{card.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-gold-200 bg-gold-50 p-5">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-gold-700" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-charcoal/75">{emergencyNotice}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="Send an Enquiry" title="Send us a message" />
          <Reveal className="mt-10">
            <ContactForm />
          </Reveal>
        </Container>
      </section>

      <section id="book" className="scroll-mt-24 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Book an Appointment"
            title="Request your appointment online"
            lead="Choose a service, pick a time that works for you, and we'll confirm availability within one business day."
            align="center"
          />
          <div className="mt-10">
            <BookingWidget />
          </div>
        </Container>
      </section>
    </>
  );
}
