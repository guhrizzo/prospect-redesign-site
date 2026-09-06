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
  { stat: "Free Roof Analysis", label: "Call or Request Online" },
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
    copy: "A fully licensed and insured Miami roofing company (CCC1326101).",
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
 * The three customer reviews High Point Roofing Corp features on its own
 * homepage. Quoted verbatim; an ellipsis marks where a longer review is trimmed.
 */
export const reviews = [
  {
    quote:
      "We had gotten 4 quotes from different roofing companies including High Point Roofing… We also checked the quote and it was very clear and prices were very reasonable. Another thing was that all the workers were very polite and super careful not to leave any debris around the premises. They did a more than excellent job and we totally recommend this company.",
    name: "Zeanne Hernandez",
    source: "Google Review",
  },
  {
    quote:
      "This company are true professionals. Benny is friendly and a real gentleman. Excellent quality work. Good value, I can highly recommend for your next project.",
    name: "Jules Barraclough",
    source: "Google Review",
  },
  {
    quote:
      "High Point Roofing is an excellent company to work with and I would highly recommend using them for your roofing needs. They were very communicative with quotes and scheduling, and did such a great job on our home!",
    name: "Stafford Turnage",
    source: "Google Review",
  },
];

/**
 * The company's real portfolio page is an untitled photo gallery, so these
 * cards are labelled by the roofing services High Point Roofing actually
 * offers — no specific project details are claimed.
 */
export const projects = [
  {
    type: "Residential Roofing",
    copy: "Roof installation and replacement for homes across Miami-Dade.",
    art: "residential" as const,
  },
  {
    type: "Commercial Roofing",
    copy: "Roofing for commercial properties throughout South Florida.",
    art: "commercial" as const,
  },
  {
    type: "Roof Repair",
    copy: "Leak and storm-damage repairs for homes and businesses.",
    art: "repair" as const,
  },
  {
    type: "Roof Replacement",
    copy: "Full tear-off and replacement of aging or failing roofs.",
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
