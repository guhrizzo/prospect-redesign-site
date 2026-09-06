import { company, nav } from "../lib/content";
import { Container, Cta } from "./ui";
import { Logo } from "./logo";

const serviceLinks = [
  "Residential Roofing",
  "Commercial Roofing",
  "Emergency Repairs",
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-base font-bold">High Point Roofing Corp</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              A fully licensed and insured Miami roofing company serving South
              Florida since 1989.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-accent">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {nav
                .filter((n) => n.label !== "Services")
                .map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-accent">
                      {n.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a href={company.phoneHref} className="font-semibold text-white hover:text-accent">
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
              </li>
              <li>{company.address}</li>
            </ul>
            <Cta href="#free-analysis" className="mt-5 w-full sm:w-auto">
              Get a Free Roof Analysis
            </Cta>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            License {company.license} · Serving Miami-Dade County, Florida
          </p>
          <p>
            Redesign concept created independently by Gustavo Rizzo. Not
            affiliated with High Point Roofing Corp.
          </p>
        </div>
      </Container>
    </footer>
  );
}
