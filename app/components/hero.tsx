import { company } from "../lib/content";
import { RoofArt } from "./roof-art";
import { ArrowRight, Container, Cta } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative bg-warm pt-12 sm:pt-16">
      <Container>
        <div className="grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-600">
              Miami Roofing Experts • Serving South Florida
            </p>
            <h1 className="text-[2.5rem] font-bold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
              Miami Roofing Experts. Trusted Since 1989.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
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
                className="text-base"
              >
                Call {company.phoneDisplay}
              </Cta>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-navy/10 pt-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink">
                  Experience
                </dt>
                <dd className="text-lg font-bold text-navy">35+ Years</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink">
                  Credentials
                </dt>
                <dd className="text-lg font-bold text-navy">Licensed &amp; Insured</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-ink">
                  Coverage
                </dt>
                <dd className="text-lg font-bold text-navy">Miami-Dade County</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy shadow-[var(--shadow-card)] sm:aspect-square lg:aspect-[4/5]">
              <RoofArt
                variant="hero"
                className="h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-xl bg-white px-5 py-4 shadow-[var(--shadow-float)] sm:-left-8">
              <p className="text-2xl font-bold leading-none text-navy">35+ Years</p>
              <p className="mt-1 text-sm text-ink">Experience in Miami</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
