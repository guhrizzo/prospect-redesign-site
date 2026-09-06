import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://highpointroofingcorp.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Miami Roofing Company | High Point Roofing Corp",
  description:
    "High Point Roofing Corp provides residential, commercial and emergency roofing services in Miami. Serving South Florida since 1989. Get a free roof analysis.",
  keywords: [
    "Miami roofing company",
    "Miami roofing contractor",
    "roofing company Miami FL",
    "residential roofing Miami",
    "commercial roofing Miami",
    "roof repair Miami",
    "roof replacement Miami",
    "emergency roof repair Miami",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Miami Roofing Company | High Point Roofing Corp",
    description:
      "Residential, commercial and emergency roofing in Miami-Dade. Fully licensed and insured. Serving South Florida since 1989.",
    url: SITE_URL,
    siteName: "High Point Roofing Corp",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-warm text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
