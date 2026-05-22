"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/lib/site-data";

function Card({ t, active = false }: { t: Testimonial; active?: boolean }) {
  return (
    <article
      className={`flex flex-col h-full min-h-[460px] rounded-[28px] bg-white dark:bg-surface-dark p-8 sm:p-9 transition-shadow duration-500 ${
        active ? "shadow-big" : "shadow-soft"
      }`}
    >
      <Quote size={42} className="fill-ink/15 text-ink/15 dark:fill-white/15 dark:text-white/15" aria-hidden="true" />

      <div className="relative mt-5 mb-6 w-16 h-16 rounded-2xl overflow-hidden bg-page-alt dark:bg-page-dark-alt flex-none">
        <Image src={t.avatar} alt={t.name} fill sizes="64px" className="object-cover" />
      </div>

      <blockquote className="text-[17px] sm:text-[19px] leading-[1.6] text-ink dark:text-white/90 flex-1">
        {t.quote}
      </blockquote>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <div className="font-display font-bold text-[17px] text-ink dark:text-white">{t.name}</div>
          <div className="text-[13.5px] text-ink-mute mt-1">{t.date}</div>
        </div>
        <div className="flex items-center gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={18} className="text-amber-500 fill-amber-500" aria-hidden="true" />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(() => Math.floor(TESTIMONIALS.length / 2));
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rafRef = useRef<number | null>(null);
  const n = TESTIMONIALS.length;

  /* Track which card is centred in the scroller. */
  const updateActive = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let nearest = 0;
    let min = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(cardCenter - center);
      if (d < min) {
        min = d;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  const onScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateActive();
    });
  }, [updateActive]);

  useEffect(() => {
    // Start centred on the middle card.
    const scroller = scrollerRef.current;
    const mid = Math.floor(n / 2);
    const el = cardRefs.current[mid];
    if (scroller && el) {
      scroller.scrollLeft = el.offsetLeft - (scroller.clientWidth - el.offsetWidth) / 2;
    }
    updateActive();
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("resize", updateActive);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateActive, n]);

  /* Smoothly centre a given card (used by Prev / Next). */
  const scrollToCard = useCallback((i: number) => {
    const scroller = scrollerRef.current;
    const el = cardRefs.current[i];
    if (!scroller || !el) return;
    const left = el.offsetLeft - (scroller.clientWidth - el.offsetWidth) / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }, []);

  return (
    <section className="py-[clamp(64px,9vw,112px)] bg-page-alt dark:bg-page-dark-alt overflow-hidden" aria-label="Customer reviews">
      <div className="container max-w-[1200px] mx-auto px-6">
        <header className="text-center" data-reveal>
          <p className="text-blue-600 font-semibold text-[15px] mb-3">Testimonials</p>
          <h2 className="font-display font-bold tracking-tight text-[clamp(32px,5vw,54px)] leading-[1.05]">
            <span className="block text-ink/30 dark:text-white/30">Real users.</span>
            <span className="block text-ink dark:text-white">
              Real <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">stories</span>.
            </span>
          </h2>
        </header>
      </div>

      {/* Swipeable / scrollable carousel */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="mt-12 sm:mt-16 flex items-stretch gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-6 px-[max(1.25rem,calc(50%-220px))]"
        data-reveal
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={`snap-center shrink-0 w-[min(86vw,440px)] transition-all duration-500 ${
              i === active ? "opacity-100 blur-0 scale-100 z-10" : "opacity-55 blur-[2px] scale-[0.94]"
            }`}
          >
            <Card t={t} active={i === active} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <button
          type="button"
          onClick={() => scrollToCard(Math.max(0, active - 1))}
          aria-label="Previous testimonial"
          className="inline-flex items-center gap-1.5 pl-3.5 pr-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-[0_8px_22px_-8px_rgba(37,99,235,.6)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 disabled:opacity-40 disabled:hover:translate-y-0"
          disabled={active === 0}
        >
          <ChevronLeft size={16} strokeWidth={2.5} aria-hidden="true" />
          Prev
        </button>
        <button
          type="button"
          onClick={() => scrollToCard(Math.min(n - 1, active + 1))}
          aria-label="Next testimonial"
          className="inline-flex items-center gap-1.5 pl-5 pr-3.5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-[0_8px_22px_-8px_rgba(37,99,235,.6)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 disabled:opacity-40 disabled:hover:translate-y-0"
          disabled={active === n - 1}
        >
          Next
          <ChevronRight size={16} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToCard(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-blue-600" : "w-2 bg-line-strong dark:bg-line-dark-strong hover:bg-blue-600/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
