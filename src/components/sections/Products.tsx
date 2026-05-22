"use client";

import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/site-data";
import ProductCard from "@/components/ui/ProductCard";

export default function Products() {
  return (
    <section id="products" className="py-[clamp(64px,9vw,112px)] bg-page-alt dark:bg-page-dark-alt">
      <div className="container max-w-[1200px] mx-auto px-6">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12" data-reveal>
          <div className="max-w-[620px]">
            <span className="eyebrow eyebrow-line">Best sellers</span>
            <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3">
              Loved by thousands this season
            </h2>
            <p className="text-[16px] leading-[1.7] text-ink-soft dark:text-white/70">
              Our most-wanted pieces right now — restocked, reviewed, and ready to ship.
            </p>
          </div>
          <a href="#categories" className="hidden sm:inline-flex items-center gap-1.5 hover:gap-2.5 transition-all font-semibold text-sm text-brand">
            Shop all categories
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
