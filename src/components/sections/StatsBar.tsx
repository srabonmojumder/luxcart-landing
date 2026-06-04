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
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#245371] via-[#256288] to-[#16344a] px-6 py-14 md:py-20">
        {/* Decorative glow orbs */}
        <div className="absolute -top-28 -left-20 w-80 h-80 rounded-full bg-brand/30 blur-[100px]" aria-hidden="true" />
        <div className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full bg-brand/20 blur-[100px]" aria-hidden="true" />
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {STATS.map((s) => (
              <div
                key={s.label}
                data-reveal
                className="group relative rounded-3xl bg-white/[0.04] backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/[0.07] hover:border-brand/40 hover:-translate-y-1"
              >
                <div className="grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-brand to-brand-strong mx-auto mb-5 shadow-lg shadow-brand/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="block font-display text-4xl md:text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-brand-cyan bg-clip-text text-transparent">
                  <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                </span>
                <p className="text-white/50 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mt-3">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
