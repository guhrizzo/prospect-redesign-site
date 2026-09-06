import { whyPoints } from "../lib/content";
import { Container, Eyebrow, Reveal, SectionHeading } from "./section-kit";

const icons = [ShieldIcon, BadgeIcon, HammerIcon, HandshakeIcon];

export function WhyUs() {
  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light">Why High Point</Eyebrow>
          <SectionHeading tone="light">
            Experience You Can Trust. Service You Can Count On.
          </SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {whyPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={point.title} delay={i * 70} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{point.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/70">
                    {point.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="m9 12 2 2 4-4M12 3l2.5 1.8 3-.2.5 3L20 10l-2 2.6L20 15l-2.5 2.4-.5 3-3-.2L12 21l-2.5-1.8-3 .2-.5-3L4 15l2-2.4L4 10l2.5-2.6-.5-3 3 .2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HammerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="m14 7 3 3M5 21l7-7M12.5 6.5l5 5 3-3-5-5-3 3ZM15 9 9 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="m8 12 3 3c.7.7 1.8.7 2.5 0M3 8l4-3 6 2 4-1 4 3-3 8-3-1-4 3-4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
