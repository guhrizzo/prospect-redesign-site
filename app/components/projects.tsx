import { projects } from "../lib/content";
import { RoofArt } from "./roof-art";
import { Container, Eyebrow, Reveal, SectionHeading } from "./section-kit";

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Our Work</Eyebrow>
          <SectionHeading>Built to Protect. Designed to Last.</SectionHeading>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.type}
              delay={(i % 2) * 80}
              className="group overflow-hidden rounded-2xl bg-navy ring-1 ring-navy/10"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <RoofArt
                  variant={project.art}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {project.type}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-white/80">
                  {project.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs text-ink">
            Project descriptions are based on work described in the company&apos;s
            public customer reviews. Photography would be supplied by High Point
            Roofing.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
