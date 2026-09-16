import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-gold-700" : "text-gold-500",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-teal-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-charcoal/70" : "text-white/75",
          )}
        >
          {lead}
        </p>
      ) : null}
      <span
        className={cn(
          "mt-5 block h-1 w-16 rounded-full",
          align === "center" && "mx-auto",
          tone === "dark" ? "bg-gold-500" : "bg-gold-400",
        )}
      />
    </div>
  );
}
