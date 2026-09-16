"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, Input, Textarea, Select, Checkbox } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // TODO: wire to real backend (e.g. serverless function emailing info@drnomsa.co.za)
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sage-200 bg-sage-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-sage-600" aria-hidden="true" />
        <h3 className="font-heading text-xl text-teal-900">Message sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-charcoal/70">
          Thank you for reaching out to {siteConfig.shortName}. We aim to respond to
          all enquiries within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-busy={status === "submitting"}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required>
          <Input id="name" name="name" required autoComplete="name" />
        </Field>
        <Field id="email" label="Email address" required>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field id="phone" label="Phone number">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field id="preferred" label="Preferred consultation">
          <Select id="preferred" name="preferred" defaultValue="no-preference">
            <option value="no-preference">No preference</option>
            <option value="in-person">In-person (Johannesburg)</option>
            <option value="online">Online / Telehealth</option>
          </Select>
        </Field>
      </div>

      <Field id="reason" label="Reason for enquiry" required>
        <Select id="reason" name="reason" required defaultValue="">
          <option value="" disabled>
            Select a reason
          </option>
          <option>Individual Therapy</option>
          <option>Couples & Marriage Counselling</option>
          <option>Family / Child & Adolescent Therapy</option>
          <option>Life Coaching</option>
          <option>Christian Counselling</option>
          <option>Corporate / Organizational Enquiry</option>
          <option>General Question</option>
        </Select>
      </Field>

      <Field id="message" label="Message" required>
        <Textarea id="message" name="message" required placeholder="Tell us a little about what you're looking for..." />
      </Field>

      <Checkbox
        id="contact-consent"
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
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
