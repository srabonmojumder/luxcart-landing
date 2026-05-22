import Image from "next/image";
import { ArrowRight, Truck, Star, ShoppingBag } from "lucide-react";

const STATS = [
  { value: "10k+", label: "Products" },
  { value: "200k+", label: "Happy customers" },
  { value: "4.9★", label: "Average rating" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-[clamp(56px,9vw,104px)] bg-page dark:bg-page-dark">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-grad-hero-light dark:bg-grad-hero-dark" />
        <div
          className="absolute -top-20 -left-14 w-[380px] h-[380px] rounded-full blur-[70px] opacity-55 dark:opacity-35 animate-float"
          style={{ background: "radial-gradient(circle, rgba(91,141,255,.55), transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-24 w-[460px] h-[460px] rounded-full blur-[70px] opacity-55 dark:opacity-35 animate-float"
          style={{ background: "radial-gradient(circle, rgba(138,91,255,.45), transparent 70%)", animationDelay: "-4s" }}
        />
        <div className="hero-grid absolute inset-0 opacity-50 dark:opacity-25" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-14 lg:gap-16">
          {/* Hero copy */}
          <div data-reveal>
            <span className="eyebrow">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,.15)] animate-pulse-dot" />
              New season · Spring 2026 drop is live
            </span>
            <h1 className="font-display font-bold tracking-tight text-[clamp(34px,5.4vw,64px)] leading-[1.12] mt-5 mb-5">
              Shop curated essentials you&apos;ll{" "}
              <span className="bg-grad-text bg-clip-text text-transparent">actually love</span>.
            </h1>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.7] text-ink-soft dark:text-white/70 max-w-[560px] mb-8">
              From wardrobe staples to standout tech — thoughtfully sourced, fairly priced, and delivered fast. Free shipping
              on every order over $50.
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#products" className="btn btn-primary btn-lg group">
                Shop new arrivals
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#categories" className="btn btn-ghost btn-lg">
                Browse categories
              </a>
            </div>

            <ul className="grid grid-cols-3 gap-7 max-w-[480px] pt-6 border-t border-line dark:border-line-dark" aria-label="Store stats">
              {STATS.map((s) => (
                <li key={s.label} className="flex flex-col gap-1">
                  <strong className="font-display font-bold text-[clamp(20px,2.5vw,28px)]">{s.value}</strong>
                  <span className="text-[13px] text-ink-mute">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero visual: lifestyle photo + floating cards */}
          <div className="relative max-w-[520px] mx-auto w-full" data-reveal>
            <div
              className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand/25 via-brand-accent/20 to-brand-cyan/15 blur-3xl opacity-70"
              aria-hidden="true"
            />

            <figure className="relative rounded-[28px] overflow-hidden -rotate-[1.5deg] hover:rotate-0 hover:-translate-y-1 transition-transform duration-500 shadow-big shadow-glow dark:shadow-big-dark border border-line dark:border-line-dark">
              <Image
                src="/images/lifestyle/hero.jpg"
                alt="A curated LuxCart boutique flat lay of seasonal fashion and accessories"
                width={1000}
                height={1100}
                priority
                className="block w-full aspect-[5/5.5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/25 via-transparent to-brand-accent/20 mix-blend-multiply pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" aria-hidden="true" />

              <figcaption className="absolute left-5 sm:left-7 bottom-5 sm:bottom-6 right-5 sm:right-7 text-white">
                <div className="inline-flex items-center gap-2 mb-2 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-[11px] font-semibold uppercase tracking-[.12em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  Spring 2026
                </div>
                <div className="font-display font-bold text-lg sm:text-xl leading-snug">
                  The new arrivals
                  <br />
                  everyone&apos;s talking about.
                </div>
              </figcaption>
            </figure>

            {/* Floating card: free shipping */}
            <div
              className="absolute -top-5 -left-4 sm:-left-8 flex items-center gap-3 pl-2.5 pr-4 py-2.5 bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-2xl shadow-soft animate-float-y z-20"
              aria-hidden="true"
            >
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-500 flex-none">
                <Truck size={17} strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-[14px]">Free shipping</div>
                <div className="text-[11.5px] text-ink-mute">Ships today · 2–4 days</div>
              </div>
            </div>

            {/* Floating card: rating */}
            <div
              className="absolute top-1/3 -right-4 sm:-right-8 flex items-center gap-3 pl-3 pr-4 py-3 bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-2xl shadow-soft animate-float-y z-20"
              style={{ animationDelay: "-2s" }}
              aria-hidden="true"
            >
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-amber-500/15 text-amber-500 flex-none">
                <Star size={18} className="fill-amber-500" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-[15px]">4.9 / 5</div>
                <div className="text-[11.5px] text-ink-mute">12k+ reviews</div>
              </div>
            </div>

            {/* Floating card: cart pill */}
            <div
              className="absolute -bottom-4 -right-2 sm:right-8 flex items-center gap-2.5 pl-3 pr-4 py-2.5 bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-full text-[13px] font-semibold shadow-soft animate-float-y z-20"
              style={{ animationDelay: "-4s" }}
              aria-hidden="true"
            >
              <ShoppingBag size={16} strokeWidth={2.5} className="text-brand flex-none" aria-hidden="true" />
              <span className="whitespace-nowrap">
                10,000+ <span className="text-emerald-500">in stock</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
