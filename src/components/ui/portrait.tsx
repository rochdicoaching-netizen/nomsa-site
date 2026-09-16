import Image from "next/image";
import { cn } from "@/lib/utils";

export function Portrait({
  src,
  alt,
  className,
  aspect = "aspect-[3/4]",
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl bg-canvas ring-1 ring-grey-200",
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}
