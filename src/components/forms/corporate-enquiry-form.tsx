"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, Input, Textarea, Checkbox } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const interestOptions = [
  "Employee Wellness Programmes",
  "Executive Coaching",
  "Leadership Development",
  "Team Interventions",
  "Workplace Mediation",
  "Psychological Assessments",
  "Wellness Days",
  "Organizational Transformation",
];

type Status = "idle" | "submitting" | "success";

export function CorporateEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);

  function toggleInterest(option: string) {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // TODO: wire to real backend (e.g. serverless function emailing corporate@drnomsa.co.za)
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sage-200 bg-sage-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-sage-600" aria-hidden="true" />
        <h3 className="font-heading text-xl text-teal-900">Enquiry received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal/70">
          Thank you for reaching out. A member of the team will respond within one
          business day to discuss your organization&apos;s needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-busy={status === "submitting"}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="org-name" label="Organization name" required>
          <Input id="org-name" name="organization" required autoComplete="organization" />
        </Field>
        <Field id="contact-name" label="Contact person" required>
          <Input id="contact-name" name="contactName" required autoComplete="name" />
        </Field>
        <Field id="corp-email" label="Work email" required>
          <Input id="corp-email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field id="corp-phone" label="Phone number">
          <Input id="corp-phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-teal-900">
          Which services are you interested in?
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {interestOptions.map((option) => (
            <Checkbox
              key={option}
              id={`interest-${option}`}
              label={option}
              checked={selected.includes(option)}
              onChange={() => toggleInterest(option)}
            />
          ))}
        </div>
      </fieldset>

      <Field id="corp-message" label="Tell us about your organization's needs" required>
        <Textarea
          id="corp-message"
          name="message"
          required
          placeholder="Team size, current challenges, timelines, or anything else that will help us prepare..."
        />
      </Field>

      <Checkbox
        id="corp-consent"
        required
        label={
          <>
            I consent to {siteConfig.name} processing this information to respond to
            my enquiry, in line with the{" "}
            <Link href="/legal/privacy-policy" className="underline hover:text-teal-800">
              Privacy Policy (POPIA)
            </Link>
            .
          </>
        }
      />

      <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending enquiry…
          </>
        ) : (
          "Submit Corporate Enquiry"
        )}
      </Button>
    </form>
  );
}
