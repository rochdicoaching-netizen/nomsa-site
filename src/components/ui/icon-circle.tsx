import {
  User,
  Users,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Leaf,
  Compass,
  Cross,
  Briefcase,
  ClipboardList,
  Sparkles,
  Mic,
  Puzzle,
  GraduationCap,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const iconMap: Record<string, LucideIcon> = {
  person: User,
  users: Users,
  heart: Heart,
  family: HeartHandshake,
  shield: ShieldCheck,
  leaf: Leaf,
  compass: Compass,
  cross: Cross,
  briefcase: Briefcase,
  clipboard: ClipboardList,
  spark: Sparkles,
  mic: Mic,
  puzzle: Puzzle,
  grad: GraduationCap,
  care: HandHeart,
};

export function IconCircle({
  icon,
  size = "md",
  tone = "teal",
  className,
}: {
  icon: string;
  size?: "sm" | "md" | "lg";
  tone?: "teal" | "sage" | "gold" | "white";
  className?: string;
}) {
  const Icon = iconMap[icon] ?? Sparkles;
  const sizes = {
    sm: "size-10",
    md: "size-14",
    lg: "size-16",
  };
  const iconSizes = {
    sm: "size-4.5",
    md: "size-6",
    lg: "size-7",
  };
  const tones = {
    teal: "bg-teal-50 text-teal-700 ring-1 ring-teal-100",
    sage: "bg-sage-50 text-sage-700 ring-1 ring-sage-100",
    gold: "bg-gold-50 text-gold-700 ring-1 ring-gold-100",
    white: "bg-white/15 text-white ring-1 ring-white/25",
  };

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full transition-colors duration-300",
        sizes[size],
        tones[tone],
        className,
      )}
    >
      <Icon className={iconSizes[size]} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
