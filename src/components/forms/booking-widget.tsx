"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Loader2, ChevronLeft, ChevronRight, Video, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Field, Input } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

const bookableServices = services.filter((s) => s.category !== "Corporate");
const timeSlots = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
const steps = ["Service", "Mode", "Date & Time", "Your Details", "Confirm"];

function tomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export function BookingWidget() {
  const [step, setStep] = useState(0);
  const [serviceSlug, setServiceSlug] = useState<string>("");
  const [mode, setMode] = useState<"online" | "in-person" | "">("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const minDate = useMemo(() => tomorrowISO(), []);
  const selectedService = bookableServices.find((s) => s.slug === serviceSlug);

  const canContinue = [
    Boolean(serviceSlug),
    Boolean(mode),
    Boolean(date && time),
    Boolean(name && email),
    true,
  ][step];

  function next() {
    if (step < steps.length - 1) setStep((s) => s + 1);
  }
  function back() {
    if (step > 0) setStep((s) => s - 1);
  }

  function confirmBooking() {
    setSubmitting(true);
    // TODO: wire to real scheduling backend + confirmation email/SMS reminders
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1000);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-sage-200 bg-sage-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-sage-600" aria-hidden="true" />
        <h3 className="font-heading text-xl text-teal-900">Appointment request received</h3>
        <p className="max-w-md text-sm leading-relaxed text-charcoal/70">
          Thank you, {name.split(" ")[0] || "there"}. We&apos;ve received your request for{" "}
          <strong>{selectedService?.name}</strong> on <strong>{date}</strong> at{" "}
          <strong>{time}</strong> ({mode === "online" ? "online" : "in-person"}). A member
          of the team will confirm by email or phone within one business day.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-grey-200 bg-white p-6 shadow-sm sm:p-8">
      <ol className="mb-8 flex items-center gap-2" aria-label="Booking progress">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2">
            <span
              className={cn(
                "flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300",
                i < step
                  ? "bg-sage-600 text-white"
                  : i === step
                    ? "bg-teal-800 text-white"
                    : "bg-grey-200 text-charcoal/50",
              )}
              aria-current={i === step ? "step" : undefined}
            >
              {i < step ? <CheckCircle2 className="size-4" aria-hidden="true" /> : i + 1}
            </span>
            <span className={cn("hidden text-xs font-medium sm:block", i === step ? "text-teal-900" : "text-charcoal/45")}>
              {label}
            </span>
            {i < steps.length - 1 ? <span className="h-px flex-1 bg-grey-200" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <fieldset>
          <legend className="mb-4 font-heading text-lg text-teal-900">Which service would you like to book?</legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {bookableServices.map((s) => (
              <label
                key={s.slug}
                className={cn(
                  "cursor-pointer rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200",
                  serviceSlug === s.slug
                    ? "border-teal-700 bg-teal-50 text-teal-900 ring-1 ring-teal-700"
                    : "border-grey-200 text-charcoal/75 hover:border-teal-300",
                )}
              >
                <input
                  type="radio"
                  name="service"
                  value={s.slug}
                  checked={serviceSlug === s.slug}
                  onChange={() => setServiceSlug(s.slug)}
                  className="sr-only"
                />
                {s.name}
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 1 ? (
        <fieldset>
          <legend className="mb-4 font-heading text-lg text-teal-900">In-person or online?</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: "online" as const, label: "Online / Telehealth", icon: Video, hint: "Secure video session, from anywhere" },
              { value: "in-person" as const, label: "In-person", icon: MapPin, hint: "At the Johannesburg practice" },
            ].map(({ value, label, icon: Icon, hint }) => (
              <label
                key={value}
                className={cn(
                  "flex cursor-pointer flex-col gap-2 rounded-xl border px-5 py-4 transition-all duration-200",
                  mode === value
                    ? "border-teal-700 bg-teal-50 ring-1 ring-teal-700"
                    : "border-grey-200 hover:border-teal-300",
                )}
              >
                <input
                  type="radio"
                  name="mode"
                  value={value}
                  checked={mode === value}
                  onChange={() => setMode(value)}
                  className="sr-only"
                />
                <Icon className="size-5 text-teal-700" aria-hidden="true" />
                <span className="font-semibold text-teal-900">{label}</span>
                <span className="text-xs text-charcoal/60">{hint}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      {step === 2 ? (
        <div>
          <h3 className="mb-4 font-heading text-lg text-teal-900">Pick a date and time</h3>
          <Field id="booking-date" label="Preferred date" required>
            <Input
              id="booking-date"
              type="date"
              min={minDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Field>
          <p className="mb-2 mt-5 text-sm font-medium text-teal-900">Preferred time</p>
          <div className="flex flex-wrap gap-2.5">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                  time === slot
                    ? "border-teal-700 bg-teal-800 text-white"
                    : "border-grey-200 text-charcoal/75 hover:border-teal-300",
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div>
          <h3 className="mb-4 font-heading text-lg text-teal-900">Your details</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="booking-name" label="Full name" required>
              <Input id="booking-name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" />
            </Field>
            <Field id="booking-email" label="Email address" required>
              <Input id="booking-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            </Field>
            <Field id="booking-phone" label="Phone number" className="sm:col-span-2">
              <Input id="booking-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" />
            </Field>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div>
          <h3 className="mb-4 font-heading text-lg text-teal-900">Review your request</h3>
          <dl className="grid gap-3 rounded-xl bg-teal-50 p-5 text-sm sm:grid-cols-2">
            {[
              ["Service", selectedService?.name ?? "Not set"],
              ["Mode", mode === "online" ? "Online / Telehealth" : "In-person"],
              ["Date", date || "Not set"],
              ["Time", time || "Not set"],
              ["Name", name || "Not set"],
              ["Email", email || "Not set"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-teal-700/70">{label}</dt>
                <dd className="font-medium text-teal-900">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-charcoal/55">
            This confirms your request only. A team member will confirm final
            availability by email or phone before the appointment is scheduled.
          </p>
        </div>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4">
        <Button
          type="button"
          variant="secondary"
          onClick={back}
          className={cn(step === 0 && "invisible")}
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
          Back
        </Button>

        {step < steps.length - 1 ? (
          <Button type="button" variant="primary" onClick={next} disabled={!canContinue}>
            Continue
            <ChevronRight className="size-4" aria-hidden="true" />
          </Button>
        ) : (
          <Button type="button" variant="gold" onClick={confirmBooking} disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Confirming…
              </>
            ) : (
              "Confirm Booking Request"
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
