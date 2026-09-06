import type { CSSProperties } from "react";

type Variant = "hero" | "residential" | "commercial" | "repair" | "replacement";

/**
 * Clean architectural illustration used in place of stock photography for this
 * concept. Rendered as inline SVG so it stays sharp, themeable and weightless.
 */
export function RoofArt({
  variant = "residential",
  className = "",
  style,
}: {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
}) {
  const commercial = variant === "commercial";

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of a South Florida roof"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="ra-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdf3e0" />
          <stop offset="0.55" stopColor="#f5e9d6" />
          <stop offset="1" stopColor="#e9edf1" />
        </linearGradient>
        <linearGradient id="ra-roof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22304a" />
          <stop offset="1" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id="ra-roof-lit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="800" height="600" fill="url(#ra-sky)" />

      {/* sun */}
      <circle cx="648" cy="132" r="56" fill="#f59e0b" opacity="0.14" />
      <circle cx="648" cy="132" r="30" fill="#f59e0b" opacity="0.26" />

      {/* palm silhouette */}
      <g fill="#0b1220" opacity="0.12">
        <rect x="82" y="250" width="8" height="200" rx="4" />
        <path d="M86 252c-32-8-54-28-64-54 28 8 50 24 64 46Z" />
        <path d="M86 252c26-18 40-44 42-76-22 20-36 46-42 76Z" />
        <path d="M86 252c32-6 62 4 84 30-26 2-56-4-84-30Z" />
        <path d="M86 252c-10-32-6-62 10-90-14 30-16 60-10 90Z" />
      </g>

      {commercial ? (
        <g>
          <rect x="110" y="300" width="580" height="230" fill="#eef1f4" />
          <rect x="150" y="232" width="200" height="70" fill="#e3e7ec" />
          {/* parapet caps */}
          <rect x="110" y="288" width="580" height="16" fill="url(#ra-roof)" />
          <rect x="150" y="222" width="200" height="12" fill="#22304a" />
          {/* accent trim line */}
          <rect x="110" y="304" width="580" height="4" fill="#f59e0b" />
          {/* rooftop units */}
          <rect x="392" y="250" width="74" height="40" fill="#cfd6dd" />
          <rect x="486" y="262" width="52" height="28" fill="#cfd6dd" />
          <rect x="556" y="256" width="60" height="34" fill="#cfd6dd" />
          {/* window grid */}
          <g fill="#c6ced7">
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2, 3, 4, 5, 6].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={140 + c * 78}
                  y={328 + r * 46}
                  width="48"
                  height="26"
                />
              )),
            )}
          </g>
        </g>
      ) : (
        <g>
          {/* house body */}
          <rect x="230" y="336" width="340" height="196" fill="#eef1f4" />
          <rect x="252" y="404" width="66" height="128" fill="#dbe1e7" />
          <rect x="356" y="404" width="64" height="66" fill="#cdd6de" />
          <rect x="460" y="404" width="64" height="66" fill="#cdd6de" />

          {/* main gable roof */}
          <path d="M198 342 400 190 602 342 Z" fill="url(#ra-roof)" />
          {/* sunlit left face */}
          <path d="M198 342 400 190 400 342 Z" fill="url(#ra-roof-lit)" />
          {/* shingle courses */}
          <g stroke="#0b1220" strokeOpacity="0.28" strokeWidth="2" fill="none">
            <path d="M232 316 400 224 568 316" />
            <path d="M263 293 400 216 537 293" />
            <path d="M294 270 400 208 506 270" />
            <path d="M325 247 400 200 475 247" />
          </g>
          {/* eave accent trim */}
          <path
            d="M198 342 H602"
            stroke="#f59e0b"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* side wing */}
          <rect x="560" y="398" width="120" height="134" fill="#e5e9ee" />
          <path d="M544 402 620 344 696 402 Z" fill="#1a2436" />

          {variant === "repair" && (
            <g stroke="#f59e0b" strokeWidth="6" strokeLinecap="round">
              <line x1="600" y1="528" x2="566" y2="360" />
              <line x1="626" y1="528" x2="592" y2="360" />
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1={578 - i * 7}
                  y1={512 - i * 34}
                  x2={618 - i * 7}
                  y2={512 - i * 34}
                />
              ))}
            </g>
          )}
        </g>
      )}

      {/* ground */}
      <rect x="0" y="524" width="800" height="76" fill="#e2e7ec" />
      <rect x="0" y="524" width="800" height="3" fill="#0b1220" opacity="0.1" />
    </svg>
  );
}
