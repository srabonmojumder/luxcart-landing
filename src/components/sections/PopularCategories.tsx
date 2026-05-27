"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { POPULAR_CATEGORIES } from "@/lib/site-data";

export default function PopularCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  /* Track scroll position so we can dim arrows at the ends. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="categories" className="bg-white dark:bg-page-dark py-8">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-ink dark:text-white">
            Explore Popular Categories
          </h2>
          <a href="#categories" className="flex items-center gap-1 text-[13px] font-semibold text-brand hover:underline">
            View All <ChevronRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="relative">
          {/* Prev arrow — centered on the circle row */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll categories left"
            className={`hidden lg:grid place-items-center absolute -left-3 lg:-left-5 top-[48px] lg:top-[56px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white ring-1 ring-line shadow-soft text-ink-soft hover:text-brand hover:bg-page-alt transition-all ${
              canPrev ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>

          {/* Scrollable row */}
          <div ref={ref} className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-2">
            {POPULAR_CATEGORIES.map((c) => (
              <a
                key={c.title}
                href="#deals"
                className="group flex flex-col items-center gap-2.5 flex-none"
                data-reveal
              >
                <span className="relative aspect-square w-[80px] sm:w-[96px] lg:w-[112px] overflow-hidden rounded-full ring-1 ring-line transition-all group-hover:ring-2 group-hover:ring-brand">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-medium text-center text-ink-soft dark:text-white/80 group-hover:text-brand transition-colors whitespace-nowrap">
                  {c.title}
                </span>
              </a>
            ))}
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll categories right"
            className={`hidden lg:grid place-items-center absolute -right-3 lg:-right-5 top-[48px] lg:top-[56px] -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white ring-1 ring-line shadow-soft text-ink-soft hover:text-brand hover:bg-page-alt transition-all ${
              canNext ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
