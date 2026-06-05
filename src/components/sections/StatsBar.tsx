"use client";

import { useEffect, useRef, useState } from "react";
import { Package, Users, ShoppingBag, Star, Sparkles } from "lucide-react";

type Stat = {
  icon: typeof Package;
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { icon: Package, value: 250000, suffix: "+", label: "Products" },
  { icon: Users, value: 50000, suffix: "+", label: "Happy Customers" },
  { icon: ShoppingBag, value: 180000, suffix: "+", label: "Orders Delivered" },
  { icon: Star, value: 4.9, decimals: 1, suffix: "★", label: "Average Rating" },
];

/** Counts up from 0 to `value` once it scrolls into view. */
function Counter({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1600;
        let startTs: number | null = null;
        const step = (ts: number) => {
          if (startTs === null) startTs = ts;
          const p = Math.min((ts - startTs) / duration, 1);
          // easeOutCubic for a snappy finish
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(value * eased);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-US");

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="mt-4 mx-4 md:mx-8">
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#1d4e6e] via-[#143049] to-[#0a1d2e] px-6 py-14 md:py-20">
        {/* Decorative glow orbs */}
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-brand/40 blur-[110px]" aria-hidden="true" />
        <div className="absolute -bottom-32 -right-24 w-96 h-96 rounded-full bg-brand-cyan/25 blur-[110px]" aria-hidden="true" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          aria-hidden="true"
        />

        <div className="relative max-w-[1100px] mx-auto">
          <div className="text-center mb-12 md:mb-14 space-y-3">
            <span className="inline-flex items-center gap-2 text-brand-cyan font-black tracking-[0.3em] text-[10px] md:text-xs uppercase">
              <Sparkles size={14} aria-hidden="true" /> Trusted Worldwide
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tighter">The Numbers Speak</h2>
          </div>

          {/* Clean inline bar — 4 stats in a row, separated by thin dividers */}
          <div className="grid grid-cols-2 gap-y-12 md:flex md:items-stretch md:gap-0">
            {STATS.map((s) => (
              <div
                key={s.label}
                data-reveal
                className="group flex flex-1 flex-col items-center text-center px-4 md:px-6 md:border-l md:border-white/15 md:first:border-l-0"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 ring-1 ring-white/15 mb-5 transition-colors duration-300 group-hover:bg-brand/20 group-hover:ring-brand/40">
                  <s.icon className="w-[22px] h-[22px] text-brand-cyan" aria-hidden="true" />
                </span>
                <span className="font-display text-5xl md:text-[64px] font-black leading-none tracking-tighter text-white [text-shadow:0_2px_24px_rgba(70,174,232,0.45)]">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </span>
                <p className="mt-3.5 text-white/65 text-[11px] font-black tracking-[0.22em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
