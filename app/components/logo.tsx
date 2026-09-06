/**
 * Wordmark for the concept header. The company's real PNG logo is built for a
 * light background (it has white text baked in), so on the dark navy nav it
 * becomes unreadable — this clean lockup keeps the name legible and on-brand.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 210 48"
      className={className}
      role="img"
      aria-label="High Point Roofing Corp"
    >
      {/* roofline mark */}
      <path
        d="M6 27 24 11l18 16"
        fill="none"
        stroke="#18a9ad"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 29v9h26v-9"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="21" y="30" width="6" height="8" rx="0.6" fill="#18a9ad" />

      <text
        x="54"
        y="22"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="-0.2"
        fill="#ffffff"
      >
        HIGH POINT
      </text>
      <text
        x="54.5"
        y="38"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="600"
        letterSpacing="3.4"
        fill="#18a9ad"
      >
        ROOFING CORP
      </text>
    </svg>
  );
}
