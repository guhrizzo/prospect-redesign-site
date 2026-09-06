import { serviceAreasAll, serviceAreasPrimary } from "../lib/content";
import { MiamiMap } from "./miami-map";
import { Container, Eyebrow, Reveal, SectionHeading } from "./section-kit";

export function ServiceAreas() {
  const extra = serviceAreasAll.filter((a) => !serviceAreasPrimary.includes(a));

  return (
    <section id="service-areas" className="bg-warm py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Eyebrow>Where We Serve</Eyebrow>
            <SectionHeading>Proudly Serving Miami-Dade County</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              Residential and commercial roofing across Miami-Dade, from the
              coast to the western suburbs.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {serviceAreasPrimary.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-[15px] text-navy"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {area}
                </li>
              ))}
            </ul>

            <details className="group mt-6">
              <summary className="cursor-pointer list-none text-sm font-semibold text-accent-600 hover:text-navy">
                <span className="group-open:hidden">View All Service Areas</span>
                <span className="hidden group-open:inline">Show Fewer</span>
              </summary>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                {extra.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-[15px] text-ink"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-navy/25" />
                    {area}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>

          <Reveal delay={80} className="flex items-center justify-center">
            <MiamiMap className="w-full max-w-sm" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
