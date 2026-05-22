"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Heart, Plus, Check } from "lucide-react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/site-data";

export default function ProductCard({ product }: { product: Product }) {
  const { image, name, category, price, oldPrice, rating, reviews, badge } = product;
  const { add } = useCart();
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1300);
  };

  return (
    <article
      data-reveal
      className="group flex flex-col bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-big hover:border-transparent"
    >
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-page-alt dark:bg-page-dark-alt">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10.5px] font-bold uppercase tracking-[.06em] shadow-soft ${badge.className}`}>
            {badge.label}
          </span>
        )}
        <button
          type="button"
          onClick={() => setWished((w) => !w)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/85 dark:bg-page-dark/75 backdrop-blur-sm text-ink-soft dark:text-white/70 shadow-soft transition-all hover:scale-110 hover:text-pink-500"
        >
          <Heart size={16} strokeWidth={2} className={wished ? "fill-pink-500 text-pink-500" : ""} aria-hidden="true" />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <span className="text-[11.5px] font-semibold uppercase tracking-[.06em] text-ink-mute">{category}</span>
        <h3 className="font-display font-bold text-[15px] leading-snug text-ink dark:text-white line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 text-[12.5px] text-ink-soft dark:text-white/70">
          <Star size={13} className="text-amber-500 fill-amber-500" aria-hidden="true" />
          <span className="font-semibold text-ink dark:text-white">{rating.toFixed(1)}</span>
          <span className="text-ink-mute">({reviews})</span>
        </div>

        <div className="mt-auto pt-3 flex flex-col gap-2.5">
          <div className="flex items-baseline flex-wrap gap-x-2">
            <span className="font-display font-bold text-[17px] text-ink dark:text-white">${price.toFixed(2)}</span>
            {oldPrice && <span className="text-[13px] text-ink-mute line-through">${oldPrice.toFixed(2)}</span>}
          </div>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${name} to cart`}
            className={`w-full h-10 rounded-full flex items-center justify-center gap-1.5 text-[13.5px] font-semibold text-white transition-all shadow-[0_8px_24px_-10px_rgba(79,109,255,.6)] hover:-translate-y-0.5 active:translate-y-0 ${
              added ? "bg-emerald-500" : "bg-grad-primary hover:brightness-105"
            }`}
          >
            {added ? (
              <>
                <Check size={16} strokeWidth={3} aria-hidden="true" />
                Added
              </>
            ) : (
              <>
                <Plus size={16} strokeWidth={2.5} aria-hidden="true" />
                Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
