"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company, nav } from "../lib/content";
import { Cta } from "./ui";
import { Logo } from "./logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/95 backdrop-blur-md"
          : "border-b border-white/10 bg-navy"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${company.name} home`}
        >
          <Logo className="h-11 w-24 shrink-0 sm:h-14 sm:w-32" />
          <span className="text-[15px] font-bold leading-tight tracking-tight text-navy sm:text-base">
            High Point<span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
              Roofing Corp
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-navy hover:text-accent-600"
          >
            {company.phoneDisplay}
          </a>
          <Cta href="#free-analysis" className="px-5 py-2.5">
            Get a Free Roof Analysis
          </Cta>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={company.phoneHref}
            className="rounded-lg px-3 py-2 text-sm font-semibold text-navy ring-1 ring-navy/15"
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy ring-1 ring-navy/15"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              {open ? (
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 pb-6 pt-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy hover:bg-navy/5"
              >
                {item.label}
              </a>
            ))}
            <Cta
              href="#free-analysis"
              onClick={() => setOpen(false)}
              className="mt-3 w-full"
            >
              Get a Free Roof Analysis
            </Cta>
          </nav>
        </div>
      )}
    </header>
  );
}
