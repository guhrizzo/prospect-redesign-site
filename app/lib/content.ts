/**
 * Verified content for the High Point Roofing Corp homepage concept.
 *
 * Everything here is drawn from the company's own public website
 * (highpointroofingcorp.com) and public Google reviews. No claims,
 * certifications, guarantees, review counts or statistics have been invented.
 */

export const company = {
  name: "High Point Roofing Corp",
  shortName: "High Point Roofing",
  since: 1989,
  yearsClaim: "over 35 years",
  phoneDisplay: "305-801-5332",
  phoneHref: "tel:+13058015332",
  email: "highpointroofingcorp@yahoo.com",
  address: "7105 SW 8th St, Suite #202, Miami, FL 33144",
  license: "CCC1326101",
  googleRating: "4.8",
  values: "honesty, trust and integrity",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#service-areas" },
] as const;

export const trustItems = [
  { stat: "35+ Years", label: "Serving Miami" },
  { stat: "Licensed & Insured", label: "Professional Roofing Services" },
  { stat: "Residential & Commercial", label: "Roofing Solutions" },
  { stat: "Free Roof Analysis", label: "No-Obligation Consultation" },
] as const;

export const services = [
  {
    id: "residential",
    title: "Residential Roofing",
    copy: "Reliable roofing solutions for homeowners, from repairs and maintenance to complete roof replacements.",
    cta: "Explore Residential Roofing",
    art: "residential" as const,
  },
  {
    id: "commercial",
    title: "Commercial Roofing",
    copy: "Professional roofing solutions designed to protect commercial properties and minimize disruption to your business.",
    cta: "Explore Commercial Roofing",
    art: "commercial" as const,
  },
  {
    id: "emergency",
    title: "Emergency Roof Repairs",
    copy: "Fast response for urgent roofing problems, leaks and damage that need immediate attention.",
    cta: "Get Emergency Help",
    art: "repair" as const,
  },
];

export const whyPoints = [
  {
    title: "35+ Years of Experience",
    copy: "Serving Miami with decades of roofing experience.",
  },
  {
    title: "Licensed & Insured",
    copy: "Professional roofing services with customer protection in mind.",
  },
  {
    title: "Quality Workmanship",
    copy: "Focused on completing projects properly without cutting corners.",
  },
  {
    title: "Honest Service",
    copy: "Built around honesty, trust and integrity.",
  },
];

/**
 * Real 5-star Google reviews for High Point Roofing Corp.
 * Long reviews are lightly trimmed with an ellipsis; wording is unchanged.
 */
export const reviews = [
  {
    quote:
      "From the point of the referral to the completion of the roof installation, Ben and his team were exceptional and I felt like family. They showed up when they said they would, answered each call instantly, and completed the installation in a timely manner. I could not be happier with my choice in hiring High Point Roofing Corp for my metal roof selection.",
    name: "Gigi Gonzalez",
    source: "Google Review",
  },
  {
    quote:
      "We hired Highpoint Roofing in preparation for the sale of our home. They were excellent! Highly efficient, very responsive, and did a beautiful job on installing a metal roof. We are extremely pleased and would strongly recommend their services.",
    name: "Akira Gutierrez Renzulli",
    source: "Google Review",
  },
  {
    quote:
      "We had gotten 4 quotes from different roofing companies including High Point Roofing. The quote was very clear and prices were very reasonable. All the workers were very polite and super careful not to leave any debris around the premises. They did a more than excellent job and we totally recommend this company.",
    name: "Zeanne Hernandez",
    source: "Google Review",
  },
];

export const projects = [
  {
    type: "Metal Roof Installation",
    copy: "Standing-seam metal roof completed for a South Florida home ahead of sale.",
    art: "residential" as const,
  },
  {
    type: "Commercial Flat Roof",
    copy: "Heat-reflective silicone coating applied to protect a flat commercial roof and reduce cooling load.",
    art: "commercial" as const,
  },
  {
    type: "Roof Leak Repair",
    copy: "Persistent leaks from prior contractors traced, corrected and sealed for good.",
    art: "repair" as const,
  },
  {
    type: "Full Roof Replacement",
    copy: "Aging residential roof stripped and rebuilt with new underlayment and tile.",
    art: "replacement" as const,
  },
];

export const serviceAreasPrimary = [
  "Miami",
  "Miami Beach",
  "Coral Gables",
  "Doral",
  "Hialeah",
  "Homestead",
  "Miami Gardens",
  "North Miami",
  "South Miami",
  "Aventura",
];

export const serviceAreasAll = [
  ...serviceAreasPrimary,
  "Hialeah Gardens",
  "Miami Springs",
  "North Miami Beach",
  "Sunny Isles Beach",
  "Sweetwater",
  "West Miami",
  "Florida City",
  "Opa-locka",
  "North Bay Village",
];
