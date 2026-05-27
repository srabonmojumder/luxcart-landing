"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/lib/site-data";

export default function DealRow({
  id,
  title,
  products,
}: {
  id?: string;
  title: string;
  products: Product[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  /* Track scroll position so arrows can dim at the ends. */
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

  /* Auto-advance every 5s, pause on hover, loop at the end. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      const card = el.firstElementChild as HTMLElement | null;
      const step = (card?.offsetWidth ?? 220) + 16;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id={id} className="bg-white dark:bg-page-dark py-8 scroll-mt-32">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-ink dark:text-white">{title}</h2>
          <a href="#deals" className="flex items-center gap-1 text-[13px] font-semibold text-brand hover:underline">
            View All <ChevronRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div
          className="relative"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          {/* Prev arrow */}
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label={`Scroll ${title} left`}
            className={`hidden lg:grid place-items-center absolute -left-3 lg:-left-5 top-[110px] sm:top-[120px] lg:top-[135px] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white ring-1 ring-line shadow-soft text-ink hover:text-brand hover:bg-page-alt transition-all ${
              canPrev ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft size={22} strokeWidth={2.5} aria-hidden="true" />
          </button>

          {/* Scrollable track */}
          <div
            ref={ref}
            className="flex gap-3 lg:gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-2"
          >
            {products.map((p) => (
              <div
                key={p.name}
                className="snap-start flex-none w-[160px] sm:w-[200px] md:w-[218px] lg:w-[230px]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label={`Scroll ${title} right`}
            className={`hidden lg:grid place-items-center absolute -right-3 lg:-right-5 top-[110px] sm:top-[120px] lg:top-[135px] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white ring-1 ring-line shadow-soft text-ink hover:text-brand hover:bg-page-alt transition-all ${
              canNext ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight size={22} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
