import Image from "next/image";

type Variant = "hero" | "residential" | "commercial" | "repair" | "replacement";

/**
 * Project photography from High Point Roofing Corp's own website, downloaded
 * into /public/roofing so the concept has no external image dependencies.
 *
 * Renders a fill <Image>, so the parent element must be positioned
 * (e.g. `relative`) and give the image its size (usually via `aspect-*`).
 */
const imageByVariant: Record<Variant, string> = {
  hero: "/hero/slide-2.jpg",
  residential: "/roofing/residential.jpg",
  commercial: "/roofing/commercial.jpg",
  repair: "/roofing/repair.jpg",
  replacement: "/roofing/replacement.jpg",
};

export function RoofArt({
  variant = "residential",
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
}: {
  variant?: Variant;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={imageByVariant[variant]}
      alt="High Point Roofing Corp project"
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
