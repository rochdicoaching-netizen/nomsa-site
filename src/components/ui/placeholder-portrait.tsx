import { UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Honest stand-in for photography the practice hasn't supplied yet
 * (headshots, office/therapy-room photos). Styled to look intentional
 * rather than broken. Swap for a real next/image once assets arrive.
 */
export function PlaceholderPortrait({
  label,
  className,
  aspect = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 via-teal-700 to-sage-600 p-8 text-center",
        aspect,
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
      >
        <pattern id="dot-grid" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
        </pattern>
        <rect width="200" height="200" fill="url(#dot-grid)" />
      </svg>
      <span className="relative inline-flex size-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
        <UserRound className="size-8 text-gold-100" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <p className="relative max-w-[16rem] text-sm font-medium text-white/90">{label}</p>
    </div>
  );
}
