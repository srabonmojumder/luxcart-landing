"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal: observes every [data-reveal] element and adds
 * `is-visible` (which triggers the CSS entrance animation) once it enters
 * the viewport. Mirrors the original app.js behaviour, including an immediate
 * reveal for above-the-fold content and a safety net for headless renderers.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    const reveal = (el: Element) => el.classList.add("is-visible");

    // Reveal anything already in the viewport on load (e.g. the hero).
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) reveal(el);
    });

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              const delay = Math.min(i * 80, 240);
              window.setTimeout(() => reveal(entry.target), delay);
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => {
        if (!el.classList.contains("is-visible")) io?.observe(el);
      });
    } else {
      els.forEach(reveal);
    }

    // Safety net: force-reveal anything still hidden after 1.8s.
    const t = window.setTimeout(() => els.forEach(reveal), 1800);

    return () => {
      io?.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return null;
}
