import { services } from "../lib/content";
import { RoofArt } from "./roof-art";
import { ArrowRight, Container, Cta, Eyebrow, Reveal, SectionHeading } from "./section-kit";

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Our Services</Eyebrow>
          <SectionHeading>Roofing Solutions for Every Property</SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              delay={i * 80}
              className="group flex flex-col overflow-hidden rounded-2xl bg-warm ring-1 ring-navy/10 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[16/10] overflow-hidden bg-navy">
                <RoofArt
                  variant={service.art}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink">
                  {service.copy}
                </p>
                <a
                  href="#free-analysis"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-navy"
                >
                  {service.cta}
                  <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Cta href="#free-analysis">
            Get a Free Roof Analysis
            <ArrowRight />
          </Cta>
        </Reveal>
      </Container>
    </section>
  );
}
