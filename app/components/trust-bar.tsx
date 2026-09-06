import { trustItems } from "../lib/content";
import { Container } from "./ui";

export function TrustBar() {
  return (
    <section className="border-y border-navy/10 bg-white">
      <Container>
        <dl className="grid grid-cols-2 divide-navy/10 lg:grid-cols-4 lg:divide-x">
          {trustItems.map((item, i) => (
            <div
              key={item.stat}
              className={`px-2 py-6 lg:px-6 lg:py-8 ${
                i < 2 ? "border-b border-navy/10 lg:border-b-0" : ""
              } ${i % 2 === 1 ? "border-l border-navy/10 lg:border-l-0" : ""} ${
                i === 0 ? "lg:border-l-0" : ""
              }`}
            >
              <dt className="text-base font-bold text-navy sm:text-lg">
                {item.stat}
              </dt>
              <dd className="mt-1 text-sm text-ink">{item.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
