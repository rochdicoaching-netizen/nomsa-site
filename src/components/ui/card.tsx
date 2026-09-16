import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  hoverLift = true,
}: {
  className?: string;
  children: React.ReactNode;
  hoverLift?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-grey-200 bg-white p-6 shadow-[0_1px_2px_rgba(10,53,54,0.06)] transition-all duration-300 ease-out sm:p-8",
        hoverLift &&
          "hover:-translate-y-1.5 hover:border-teal-100 hover:shadow-[0_20px_40px_-16px_rgba(10,53,54,0.22)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
