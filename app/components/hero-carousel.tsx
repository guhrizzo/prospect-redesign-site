"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  { src: "/hero/slide-1.jpg", alt: "High Point Roofing crew on a Miami roof" },
  {
    src: "/hero/slide-2.jpg",
    alt: "Commercial and residential roofing project in South Florida",
  },
  {
    src: "/hero/slide-3.jpg",
    alt: "Completed roof by High Point Roofing Corp in Miami-Dade",
  },
];

const INTERVAL = 3500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const paused = useRef(false);

  const clear = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const start = useCallback(() => {
    clear();
    if (
      slides.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    timer.current = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL);
  }, [clear]);

  useEffect(() => {
    start();
    return clear;
  }, [start, clear]);

  const go = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length);
      start(); // restart the countdown after a manual change
    },
    [start],
  );

  return (
    <>
      <div
        className="absolute inset-0 -z-20 bg-navy"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-[900ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-navy/35 text-white backdrop-blur-sm transition-colors hover:border-accent hover:bg-navy/70 sm:left-4 sm:h-11 sm:w-11"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
          <path
            d="M12.5 4 7 10l5.5 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-navy/35 text-white backdrop-blur-sm transition-colors hover:border-accent hover:bg-navy/70 sm:right-4 sm:h-11 sm:w-11"
      >
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
          <path
            d="M7.5 4 13 10l-5.5 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="absolute bottom-6 right-5 z-10 flex items-center gap-2 sm:right-8">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-accent" : "w-3 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </>
  );
}
