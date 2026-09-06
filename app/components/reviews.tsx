import { company, reviews } from "../lib/content";
import { ArrowRight, Container, Eyebrow, Reveal, SectionHeading } from "./section-kit";

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-warm py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>Customer Reviews</Eyebrow>
          <SectionHeading>Don&apos;t Just Take Our Word For It.</SectionHeading>
          <p className="mt-4 text-[15px] text-ink">
            Rated {company.googleRating} out of 5 on Google Reviews.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 80}
              className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-navy/10"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/85">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer className="mt-5 border-t border-navy/10 pt-4">
                <p className="text-sm font-bold text-navy">{review.name}</p>
                <p className="text-xs text-ink">{review.source}</p>
              </footer>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="https://www.google.com/search?q=High+Point+Roofing+Corp+Miami+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-navy"
          >
            See More Reviews
            <ArrowRight />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
