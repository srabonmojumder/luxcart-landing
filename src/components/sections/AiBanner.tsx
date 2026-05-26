"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Sparkles, Mic, Search as SearchIcon, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { BEST_DEALS, WINTER_WEAR, TOP_ELECTRONICS, BEST_BEAUTY, type Product } from "@/lib/site-data";

/* All searchable products + the section anchor each belongs to. */
const ALL_PRODUCTS: { product: Product; section: string }[] = [
  ...BEST_DEALS.map((p) => ({ product: p, section: "#deals" })),
  ...WINTER_WEAR.map((p) => ({ product: p, section: "#winter" })),
  ...TOP_ELECTRONICS.map((p) => ({ product: p, section: "#electronics" })),
  ...BEST_BEAUTY.map((p) => ({ product: p, section: "#beauty" })),
];

/* Three columns that fill the card, scrolling vertically (alternating up/down)
   on a seamless loop. */
type Col = { images: string[]; dir: "up" | "down"; duration: string };

const COLUMNS: Col[] = [
  {
    images: [
      "/images/emox/categories/fashion.jpg",
      "/images/emox/electronics/earbuds.jpg",
      "/images/emox/categories/beauty.jpg",
      "/images/emox/deals/hoodie-blue.jpg",
      "/images/emox/categories/luxury.jpg",
      "/images/emox/winter/jacket.jpg",
    ],
    dir: "up",
    duration: "34s",
  },
  {
    images: [
      "/images/emox/deals/earrings.jpg",
      "/images/emox/electronics/macbook.jpg",
      "/images/emox/categories/sneakers.jpg",
      "/images/emox/beauty/perfume.jpg",
      "/images/emox/electronics/ssd.jpg",
      "/images/emox/deals/galaxy-ultra.jpg",
    ],
    dir: "down",
    duration: "40s",
  },
  {
    images: [
      "/images/emox/deals/nike.jpg",
      "/images/emox/beauty/foundation.jpg",
      "/images/emox/electronics/tv.jpg",
      "/images/emox/winter/sweater.jpg",
      "/images/emox/categories/groceries.jpg",
      "/images/emox/electronics/iphone.jpg",
    ],
    dir: "up",
    duration: "37s",
  },
];

export default function AiBanner() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return [];
    return ALL_PRODUCTS.filter(({ product }) => product.name.toLowerCase().includes(q)).slice(0, 8);
  }, [q]);

  const showPanel = q.length > 0;

  return (
    <section
      id="emox-ai"
      className="py-[clamp(48px,8vw,96px)] bg-page dark:bg-page-dark scroll-mt-32"
      aria-label="AI-powered product search"
    >
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6" data-reveal>
        {/* Gradient border wrapper */}
        <div className="p-[2px] rounded-[28px] bg-gradient-to-r from-brand-accent via-brand to-amber-400 shadow-big">
          <div className="relative h-[clamp(460px,56vw,600px)] overflow-hidden rounded-[26px] bg-page dark:bg-page-dark">
            {/* Three auto-scrolling columns filling the card */}
            <div className="absolute inset-0 flex gap-3 sm:gap-4 p-3 sm:p-4" aria-hidden="true">
              {COLUMNS.map((col, c) => (
                <div key={c} className="flex-1 min-w-0">
                  <div
                    className={`flex flex-col gap-3 sm:gap-4 ${col.dir === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}
                    style={{ animationDuration: col.duration }}
                  >
                    {[...col.images, ...col.images].map((src, i) => (
                      <div key={`${src}-${i}`} className="relative aspect-square rounded-2xl overflow-hidden bg-page-alt dark:bg-page-dark-alt">
                        <Image src={src} alt="" fill sizes="(max-width: 1024px) 34vw, 380px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Soft veil + radial fade to the centre */}
            <div className="absolute inset-0 bg-white/25 dark:bg-page-dark/35 pointer-events-none" aria-hidden="true" />
            <div
              className="absolute inset-0 pointer-events-none dark:hidden"
              style={{
                background:
                  "radial-gradient(ellipse 62% 70% at 50% 50%, #ffffff 0%, #ffffff 34%, rgba(255,255,255,0.8) 52%, rgba(255,255,255,0) 80%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 pointer-events-none hidden dark:block"
              style={{
                background:
                  "radial-gradient(ellipse 62% 70% at 50% 50%, #0a0d1a 0%, #0a0d1a 34%, rgba(10,13,26,0.8) 52%, rgba(10,13,26,0) 80%)",
              }}
              aria-hidden="true"
            />

            {/* Centre content */}
            <div className="absolute inset-0 grid place-items-center px-5">
              <div className="w-full max-w-[640px] text-center">
                {/* Logo */}
                <div className="inline-flex items-center gap-2.5 mb-3">
                  <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#5b8dff]/15 to-[#8a5bff]/15">
                    <BrandLogo className="w-[26px] h-[26px]" gradientId="logoAi" />
                  </span>
                  <span className="font-display font-bold tracking-tight text-[clamp(26px,4.5vw,40px)] leading-none text-ink dark:text-white">
                    Luxe<span className="bg-grad-text bg-clip-text text-transparent">Cart AI</span>
                  </span>
                  <Sparkles size={22} className="text-brand-accent" aria-hidden="true" />
                </div>

                {/* Tagline */}
                <p className="text-[14px] sm:text-[15px] font-medium text-ink-soft dark:text-white/70 mb-7">
                  AI-Powered Shopping Experience
                </p>

                {/* Search bar */}
                <div className="relative w-full">
                  <div className="absolute -inset-1.5 rounded-full bg-grad-primary opacity-30 blur-xl pointer-events-none" aria-hidden="true" />
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    role="search"
                    className="relative p-[2px] rounded-full bg-gradient-to-r from-brand via-brand-accent to-brand-cyan shadow-[0_12px_40px_-12px_rgba(79,109,255,.55)]"
                  >
                    <div className="search-field flex items-center gap-3 h-14 pl-4 pr-2.5 rounded-full bg-white dark:bg-surface-dark">
                      <Sparkles size={20} strokeWidth={2} className="text-brand flex-none" aria-hidden="true" />
                      <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Search products with AI"
                        placeholder="Search Product…"
                        className="flex-1 min-w-0 bg-transparent outline-none border-0 text-[15px] text-ink dark:text-white placeholder:text-ink-mute [&::-webkit-search-cancel-button]:appearance-none text-left"
                      />
                      {query && (
                        <button
                          type="button"
                          onClick={() => setQuery("")}
                          aria-label="Clear search"
                          className="grid place-items-center w-8 h-8 rounded-full text-ink-mute hover:text-brand hover:bg-page-alt dark:hover:bg-white/10 transition-colors flex-none"
                        >
                          <X size={16} strokeWidth={2.4} aria-hidden="true" />
                        </button>
                      )}
                      <button
                        type="button"
                        aria-label="Search by voice"
                        className="grid place-items-center w-10 h-10 rounded-full text-ink-soft dark:text-white/70 transition-all hover:text-brand hover:bg-page-alt dark:hover:bg-white/10 flex-none"
                      >
                        <Mic size={19} strokeWidth={2} aria-hidden="true" />
                      </button>
                    </div>
                  </form>

                  {/* Results dropdown */}
                  {showPanel && (
                    <div className="absolute left-0 right-0 top-full mt-3 z-30 rounded-2xl bg-white dark:bg-surface-dark ring-1 ring-line dark:ring-line-dark shadow-big overflow-hidden text-left">
                      {results.length === 0 ? (
                        <div className="flex items-center gap-3 px-4 py-6 text-[13px] text-ink-soft dark:text-white/70">
                          <SearchIcon size={16} className="text-ink-mute flex-none" aria-hidden="true" />
                          No products found for <span className="font-semibold text-ink dark:text-white">&ldquo;{query}&rdquo;</span>
                        </div>
                      ) : (
                        <>
                          <p className="px-4 pt-3 pb-2 text-[11px] font-bold uppercase tracking-[.1em] text-ink-mute">
                            {results.length} {results.length === 1 ? "result" : "results"}
                          </p>
                          <ul className="max-h-[320px] overflow-y-auto">
                            {results.map(({ product, section }) => (
                              <li key={product.name}>
                                <a
                                  href={section}
                                  onClick={() => setQuery("")}
                                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-page-alt dark:hover:bg-white/5 transition-colors"
                                >
                                  <span className="relative h-11 w-11 flex-none overflow-hidden rounded-lg bg-page-alt dark:bg-white/[0.04]">
                                    <Image src={product.image} alt="" fill sizes="44px" className="object-cover" />
                                  </span>
                                  <span className="flex-1 min-w-0">
                                    <span className="block text-[13px] leading-snug text-ink dark:text-white line-clamp-1">
                                      {product.name}
                                    </span>
                                    <span className="text-[11.5px] text-ink-mute">
                                      ★ {product.rating.toFixed(1)} ({product.reviews})
                                    </span>
                                  </span>
                                  <span className="font-display font-bold text-[14px] text-ink dark:text-white whitespace-nowrap">
                                    {product.price.toFixed(2)}
                                    <sup className="ml-0.5 text-[9px] font-semibold text-ink-mute align-super">AED</sup>
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Quick suggestions */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  <span className="text-[12.5px] text-ink-mute">Try:</span>
                  {["iPhone", "Samsung", "Hoodie", "Skincare"].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuery(q)}
                      className="px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-sm border border-line dark:border-line-dark text-[12.5px] font-medium text-ink-soft dark:text-white/70 hover:text-brand hover:border-brand transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
