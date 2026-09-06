import { RoofArt } from "./roof-art";
import { Container, Eyebrow, Reveal, SectionHeading } from "./section-kit";

export function ValueSection() {
  return (
    <section id="about" className="bg-warm py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-navy shadow-[var(--shadow-card)]">
              <RoofArt
                variant="residential"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <Eyebrow>Roofing You Can Count On</Eyebrow>
            <SectionHeading>Protecting What Matters Most</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              Your roof is one of the most important parts of your property.
              Whether you need a repair, replacement or commercial roofing
              solution, High Point Roofing provides professional service built
              around quality, honesty and long-term relationships.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              A fully licensed and insured Miami roofing company since 1989,
              built around three core values: honesty, trust and integrity.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
