"use client";

import { useEffect, useState } from "react";
import { company } from "../lib/content";

export function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a
          href={company.phoneHref}
          className="inline-flex items-center justify-center rounded-lg py-3 text-sm font-semibold text-navy ring-1 ring-navy/20"
        >
          Call Now
        </a>
        <a
          href="#free-analysis"
          className="inline-flex items-center justify-center rounded-lg bg-accent py-3 text-sm font-semibold text-navy"
        >
          Free Roof Analysis
        </a>
      </div>
    </div>
  );
}
