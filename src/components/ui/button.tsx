import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-teal-800 text-white shadow-sm hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-900/20 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-transparent text-teal-800 ring-1 ring-inset ring-teal-800/40 hover:bg-teal-800 hover:text-white hover:-translate-y-0.5 active:translate-y-0",
  gold:
    "bg-gold-600 text-white shadow-sm hover:bg-gold-700 hover:shadow-lg hover:shadow-gold-700/25 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-white/10 text-white ring-1 ring-inset ring-white/40 hover:bg-white hover:text-teal-900 hover:-translate-y-0.5 active:translate-y-0",
} as const;

type CommonProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps &
  (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as Omit<React.ComponentProps<typeof Link>, "href">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
