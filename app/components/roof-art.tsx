import type { CSSProperties } from "react";

type Variant = "hero" | "residential" | "commercial" | "repair" | "replacement";

const imageByVariant: Record<Variant, string> = {
  hero: "https://highpointroofingcorp.com/wp-content/uploads/2021/05/slider2.jpg",
  residential:
    "https://highpointroofingcorp.com/wp-content/uploads/2021/10/highpoint-Roofing-Corp.Miami-Roofing-Contractors-1-4.jpg",
  commercial: "https://highpointroofingcorp.com/wp-content/uploads/2020/03/service2.jpg",
  repair:
    "https://highpointroofingcorp.com/wp-content/uploads/2021/10/highpoint-Roofing-Corp.Miami-Roofing-Contractors-1.24.20-PM.jpg",
  replacement:
    "https://highpointroofingcorp.com/wp-content/uploads/2021/10/highpoint-Roofing-Corp.Miami-Roofing-Contractors-1.24.20-PM-1.26.23-PM-1.jpg",
};

export function RoofArt({
  variant = "residential",
  className = "",
  style,
}: {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={imageByVariant[variant]}
      alt="High Point Roofing Corp project"
      className={`object-cover ${className}`}
      style={style}
    />
  );
}
