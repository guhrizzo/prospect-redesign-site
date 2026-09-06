import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-accent-600" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <h2
      className={`text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl ${
        tone === "dark" ? "text-navy" : "text-white"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

type CtaProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outlineLight";
  className?: string;
} & ComponentProps<typeof Link>;

export function Cta({
  children,
  variant = "primary",
  className = "",
  ...props
}: CtaProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles = {
    primary:
      "bg-accent text-navy shadow-[0_10px_24px_-8px_rgba(24,169,173,0.42)] hover:bg-accent-600 hover:-translate-y-0.5",
    secondary:
      "bg-white text-navy ring-1 ring-navy/15 hover:ring-navy/30 hover:-translate-y-0.5",
    ghost:
      "text-navy ring-1 ring-navy/20 hover:bg-navy hover:text-white",
    outlineLight:
      "text-white ring-1 ring-white/35 hover:bg-white hover:text-navy hover:-translate-y-0.5",
  }[variant];

  return (
    <Link className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 ${className}`}
    >
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
