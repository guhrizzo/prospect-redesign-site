import { company } from "../lib/content";
import { RoofArt } from "./roof-art";
import { ArrowRight, Container, Cta } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy pt-12 text-white sm:pt-16">
      <div className="absolute inset-0 -z-20">
        <RoofArt
          variant="hero"
          className="h-full w-full object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(5,5,5,0.82)_38%,rgba(5,5,5,0.28)_72%,rgba(5,5,5,0.52)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(5,5,5,0.72)_0%,transparent_42%,rgba(5,5,5,0.3)_100%)]" />

      <Container>
        <div className="grid min-h-[680px] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Miami Roofing Experts • Serving South Florida
            </p>
            <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Miami Roofing Experts. Trusted Since 1989.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Professional residential and commercial roofing services backed by
              more than 35 years of experience. Quality workmanship, honest
              service and dependable solutions for properties throughout
              Miami-Dade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta href="#free-analysis" className="text-base">
                Get Your Free Roof Analysis
                <ArrowRight />
              </Cta>
              <Cta
                href={company.phoneHref}
                variant="secondary"
                className="border-white/30 bg-white/10 text-base text-white backdrop-blur-sm hover:bg-white/20"
              >
                Call {company.phoneDisplay}
              </Cta>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-white/65">
                  Experience
                </dt>
                <dd className="text-lg font-bold text-white">35+ Years</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-white/65">
                  Credentials
                </dt>
                <dd className="text-lg font-bold text-white">Licensed &amp; Insured</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-white/65">
                  Coverage
                </dt>
                <dd className="text-lg font-bold text-white">Miami-Dade County</dd>
              </div>
            </dl>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
