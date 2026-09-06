"use client";

import { useState, type FormEvent } from "react";
import { company } from "../lib/content";
import { Container, Eyebrow, SectionHeading } from "./ui";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-navy/15 bg-white px-3.5 py-2.5 text-[15px] text-navy shadow-sm outline-none transition-colors placeholder:text-ink/60 focus:border-accent focus:ring-2 focus:ring-accent/30";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Concept only — no backend. Demonstrates the intended flow.
    setSubmitted(true);
  }

  return (
    <section id="free-analysis" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>Free Roof Analysis</Eyebrow>
            <SectionHeading>Request a Free Roof Analysis</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              Tell us a little about your property and roofing needs. A no-
              obligation consultation with an experienced Miami roofing company.
            </p>
            <div className="mt-8 space-y-3 text-[15px]">
              <p className="font-semibold text-navy">
                Prefer to talk now?
              </p>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 text-lg font-bold text-navy hover:text-accent-600"
              >
                {company.phoneDisplay}
              </a>
              <p className="text-ink">{company.address}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-warm p-6 ring-1 ring-navy/10 sm:p-8">
            {submitted ? (
              <div className="flex h-full min-h-56 flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="m5 13 4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="mt-4 text-lg font-bold text-navy">
                  Thanks — request received.
                </p>
                <p className="mt-1 text-sm text-ink">
                  This is a concept demo, so nothing was actually sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-navy sm:col-span-1">
                  Name
                  <input name="name" required autoComplete="name" className={inputClass} />
                </label>
                <label className="text-sm font-medium text-navy sm:col-span-1">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClass}
                  />
                </label>
                <label className="text-sm font-medium text-navy sm:col-span-2">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                </label>
                <label className="text-sm font-medium text-navy sm:col-span-1">
                  Property Type
                  <select name="propertyType" className={inputClass} defaultValue="Residential">
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </label>
                <label className="text-sm font-medium text-navy sm:col-span-1">
                  Service Needed
                  <select name="service" className={inputClass} defaultValue="Inspection">
                    <option>Repair</option>
                    <option>Replacement</option>
                    <option>Inspection</option>
                    <option>Emergency</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="text-sm font-medium text-navy sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    rows={3}
                    className={inputClass}
                    placeholder="Optional — anything we should know about your roof?"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-navy shadow-[0_10px_24px_-8px_rgba(245,158,11,0.6)] transition-all hover:-translate-y-0.5 hover:bg-accent-600 sm:col-span-2"
                >
                  Request My Free Roof Analysis
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
