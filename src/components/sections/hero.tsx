import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Portrait } from "@/components/ui/portrait";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-canvas to-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-[28rem] rounded-full bg-sage-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-16 size-[22rem] rounded-full bg-gold-100/60 blur-3xl"
      />
      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 ring-1 ring-teal-100">
            Promoting psychological wellbeing worldwide
          </p>
          <h1 className="font-heading text-4xl leading-[1.08] text-teal-900 sm:text-5xl lg:text-[3.4rem]">
            Healing Minds.
            <br />
            Empowering Lives.
            <br />
            <span className="text-sage-600">Transforming Organizations.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">
            {siteConfig.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact#book" variant="primary" className="text-base">
              Book an Appointment
            </Button>
            <Button href="/services/individual-therapy" variant="secondary" className="text-base">
              Explore Services
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-teal-900/10 pt-8 sm:max-w-md">
            <div>
              <dt className="sr-only">Years of experience</dt>
              <dd className="font-heading text-2xl text-teal-800 sm:text-3xl">27+</dd>
              <p className="mt-1 text-xs text-charcoal/60">Years of experience</p>
            </div>
            <div>
              <dt className="sr-only">Approach</dt>
              <dd className="font-heading text-2xl text-teal-800 sm:text-3xl">CBT · IPT</dd>
              <p className="mt-1 text-xs text-charcoal/60">Evidence-based care</p>
            </div>
            <div>
              <dt className="sr-only">Availability</dt>
              <dd className="font-heading text-2xl text-teal-800 sm:text-3xl">In-person &amp; online</dd>
              <p className="mt-1 text-xs text-charcoal/60">Worldwide telehealth</p>
            </div>
          </dl>
        </div>

        <div className="relative animate-fade-in [animation-delay:150ms]">
          <Portrait
            src="/images/dr-nomsa/dr-nomsa-04.jpg"
            alt="Dr Nomsa Ntshingila smiling warmly, wearing a red floral blazer"
            priority
            className="shadow-2xl shadow-teal-900/15"
          />
          <div className="absolute -bottom-6 -left-6 hidden max-w-[15rem] rounded-2xl bg-white p-5 shadow-xl shadow-teal-900/10 ring-1 ring-grey-200 sm:block">
            <p className="font-heading text-sm text-teal-900">
              &ldquo;Healing extends beyond symptoms to empowering people.&rdquo;
            </p>
            <p className="mt-2 text-xs font-medium text-charcoal/55">Dr Nomsa Ntshingila</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
