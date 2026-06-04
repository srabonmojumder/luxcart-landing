import Image from "next/image";
import { ArrowRight, Sparkles, Star, ShieldCheck, Truck } from "lucide-react";
import { STORE_URL } from "@/lib/store";

/* Three vertical marquee columns. The outer two scroll up, the middle
   one scrolls down — a living product wall behind the hero copy. */
const COLUMNS: string[][] = [
  [
    "/images/emox/electronics/iphone.jpg",
    "/images/emox/categories/sneakers.jpg",
    "/images/emox/beauty/perfume.jpg",
    "/images/emox/winter/jacket.jpg",
    "/images/emox/electronics/macbook.jpg",
  ],
  [
    "/images/emox/categories/watches.jpg",
    "/images/emox/deals/galaxy-ultra.jpg",
    "/images/emox/beauty/serum.jpg",
    "/images/emox/deals/nike.jpg",
    "/images/emox/electronics/tv.jpg",
  ],
  [
    "/images/emox/categories/luxury.jpg",
    "/images/emox/electronics/earbuds.jpg",
    "/images/emox/beauty/foundation.jpg",
    "/images/emox/deals/hoodie-blue.jpg",
    "/images/emox/deals/earrings.jpg",
  ],
];

/**
 * Marketing hero — adopts the LuxeCart store's bold design language
 * (font-black, tracking-tighter headline, accent eyebrow, black CTA).
 * The primary CTA drives straight to the live storefront.
 */
export default function MarketingHero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white dark:bg-page-dark">
      {/* Soft brand glow + masked grid, matching the store's ambient backdrops */}
      <div className="pointer-events-none absolute inset-0 bg-grad-hero-light dark:bg-grad-hero-dark" aria-hidden="true" />
      {/* <div className="pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" /> */}

      <div className="container relative max-w-[1280px] mx-auto px-4 sm:px-6 py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-[1fr_1.15fr]">
          {/* ===== Copy ===== */}
          <div data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-brand">
              <Sparkles size={13} strokeWidth={2.5} aria-hidden="true" />
              UAE&apos;s Premium Marketplace
            </span>

            <h1 className="mt-6 font-display text-[44px] sm:text-[60px] lg:text-[72px] font-black leading-[0.95] tracking-tighter text-ink dark:text-white">
              Everything you love.
              <br />
              <span className="bg-grad-text bg-clip-text text-transparent">Delivered fast.</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-[15px] sm:text-[17px] leading-relaxed font-medium text-ink-soft dark:text-white/70">
              Millions of products across electronics, fashion, beauty, groceries &amp; home —
              with AI-powered search, unbeatable deals, and lightning delivery across the UAE.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href={STORE_URL}
                className="group inline-flex items-center gap-3 rounded-2xl bg-ink dark:bg-brand px-8 py-4 text-[13px] font-black uppercase tracking-[0.18em] text-white shadow-xl transition-all hover:scale-[1.03] hover:bg-black dark:hover:bg-brand-strong active:scale-95"
              >
                Start Shopping
                <ArrowRight size={17} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#deals"
                className="inline-flex items-center gap-2 rounded-2xl border border-line-strong dark:border-line-dark-strong px-7 py-4 text-[13px] font-black uppercase tracking-[0.18em] text-ink dark:text-white transition-all hover:border-brand hover:text-brand"
              >
                Explore Deals
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12.5px] font-semibold text-ink-soft dark:text-white/60">
              <span className="inline-flex items-center gap-1.5">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </span>
                4.9/5 from 50k+ shoppers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Truck size={16} strokeWidth={2.2} className="text-brand" aria-hidden="true" /> Free shipping over $75
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} strokeWidth={2.2} className="text-brand" aria-hidden="true" /> Secure checkout
              </span>
            </div>
          </div>

          {/* ===== Vertical marquee collage ===== */}
          <div data-reveal className="relative hidden sm:block">
            <div className="relative flex items-start gap-3.5 h-[460px] lg:h-[560px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_10%,#000_90%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,#000_10%,#000_90%,transparent)]">
              {COLUMNS.map((imgs, col) => (
                <div
                  key={col}
                  className={`flex-1 flex flex-col gap-3 ${col === 1 ? "animate-scroll-down" : "animate-scroll-up"}`}
                >
                  {/* Doubled list so the translateY(-50%) loop is seamless */}
                  {[...imgs, ...imgs].map((src, i) => (
                    <div
                      key={`${col}-${i}`}
                      className="relative shrink-0 aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-line dark:ring-line-dark shadow-soft"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 30vw, 150px"
                        priority={col === 0 && i === 0}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Floating deal badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-ink dark:bg-surface-dark px-5 py-3.5 shadow-big">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Up to</p>
              <p className="font-display text-3xl font-black leading-none tracking-tighter text-white">70% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
