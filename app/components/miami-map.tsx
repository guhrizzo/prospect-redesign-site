/** Minimal, stylized Miami-Dade shape — decorative, not to scale. */
export function MiamiMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 360" className={className} aria-hidden="true">
      <path
        d="M60 20h150l40 34v70l16 24-10 40 14 30-22 46-40 10-30 26-56-4-18-40 8-52-14-38 12-44-14-38 24-6Z"
        fill="#ffffff"
        stroke="#0b1220"
        strokeOpacity="0.15"
        strokeWidth="2"
      />
      <path
        d="M240 60c-10 40-6 90 20 130"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 8"
      />
      {[
        [120, 90],
        [180, 130],
        [150, 180],
        [210, 200],
        [110, 230],
        [170, 270],
        [120, 300],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill="#f59e0b" opacity="0.14" />
          <circle cx={cx} cy={cy} r="4" fill="#f59e0b" />
        </g>
      ))}
      <text
        x="160"
        y="345"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fill="#667085"
      >
        Miami-Dade County
      </text>
    </svg>
  );
}
