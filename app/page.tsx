import { ConceptBanner } from "./components/concept-banner";
import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/hero";
import { TrustBar } from "./components/trust-bar";
import { ValueSection } from "./components/value-section";
import { Services } from "./components/services";
import { WhyUs } from "./components/why-us";
import { Reviews } from "./components/reviews";
import { Projects } from "./components/projects";
import { ServiceAreas } from "./components/service-areas";
import { LeadForm } from "./components/lead-form";
import { FinalCta } from "./components/final-cta";
import { SiteFooter } from "./components/site-footer";
import { MobileCtaBar } from "./components/mobile-cta-bar";
import { company } from "./lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: company.name,
  telephone: company.phoneDisplay,
  email: company.email,
  foundingDate: "1989",
  areaServed: "Miami-Dade County, Florida",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7105 SW 8th St, Suite #202",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33144",
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConceptBanner />
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ValueSection />
        <Services />
        <WhyUs />
        <Reviews />
        <Projects />
        <ServiceAreas />
        <LeadForm />
        <FinalCta />
      </main>
      <SiteFooter />
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <MobileCtaBar />
    </>
  );
}
