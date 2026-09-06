import { company } from "../lib/content";
import { ArrowRight, Container, Cta } from "./ui";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      {/* subtle roofline texture */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="roofline" width="80" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 40 40 8 80 40" fill="none" stroke="#ffffff" strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#roofline)" />
      </svg>

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need a Roof Inspection?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/75">
            Get a professional assessment from an experienced Miami roofing
            company.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Cta href="#free-analysis" className="text-base">
              Get Your Free Roof Analysis
              <ArrowRight />
            </Cta>
            <Cta
              href={company.phoneHref}
              variant="outlineLight"
              className="text-base"
            >
              Call {company.phoneDisplay}
            </Cta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
