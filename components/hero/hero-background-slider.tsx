"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type HeroBackgroundSlide = {
  src: string;
  alt: string;
};

type HeroBackgroundSliderProps = {
  slides: HeroBackgroundSlide[];
  intervalMs?: number;
};

export function HeroBackgroundSlider({ slides, intervalMs = 5000 }: HeroBackgroundSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (slides.length <= 1 || prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [intervalMs, prefersReducedMotion, slides.length]);

  if (!slides.length) {
    return null;
  }

  const currentSlide = slides[activeIndex];

  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 1.2, ease: "easeInOut" }}
          loading="eager"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/10" />

      <motion.img
        src={slides[(activeIndex + 1) % slides.length].src}
        alt=""
        className="absolute -left-8 top-8 hidden h-40 w-64 rounded-2xl border border-white/40 object-cover shadow-2xl md:block"
        animate={prefersReducedMotion ? { opacity: 0.35 } : { y: [0, -18, 0], rotate: [-2, 0, -2], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        loading="lazy"
      />

      <motion.img
        src={slides[(activeIndex + 2) % slides.length].src}
        alt=""
        className="absolute -right-6 bottom-10 hidden h-36 w-56 rounded-2xl border border-white/40 object-cover shadow-2xl md:block"
        animate={prefersReducedMotion ? { opacity: 0.35 } : { y: [0, 16, 0], rotate: [1.5, 0, 1.5], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        loading="lazy"
      />
    </div>
  );
}
