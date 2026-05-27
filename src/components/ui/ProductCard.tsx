"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, StarHalf, Heart, ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/site-data";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="inline-flex items-center" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full)
          return <Star key={i} size={13} className="fill-amber-400 text-amber-400" aria-hidden="true" />;
        if (i === full && half)
          return <StarHalf key={i} size={13} className="fill-amber-400 text-amber-400" aria-hidden="true" />;
        return <Star key={i} size={13} className="fill-gray-200 text-gray-200" aria-hidden="true" />;
      })}
    </span>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { image, name, price, oldPrice, rating, reviews } = product;
  const { add } = useCart();
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  const discount = oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0;

  return (
    <article
      data-reveal
      className="group relative flex flex-col cursor-pointer bg-white dark:bg-surface-dark transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Image + overlays */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f2f3f5] dark:bg-white/[0.04] ring-1 ring-line/60 dark:ring-line-dark/60 transition-all duration-300 group-hover:ring-2 group-hover:ring-brand/50">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 230px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Discount badge */}
        {discount > 0 && (
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-pink-500 text-white text-[10.5px] font-bold uppercase tracking-wide shadow-soft">
            −{discount}%
          </span>
        )}

        {/* Wishlist heart — fades in on hover, sticks once wished */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setWished((w) => !w);
          }}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          className={`absolute top-2.5 right-2.5 grid place-items-center w-9 h-9 rounded-full bg-white/95 dark:bg-page-dark/85 backdrop-blur-sm text-ink-soft dark:text-white/70 shadow-soft transition-all duration-300 hover:scale-110 hover:text-pink-500 ${
            wished ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          <Heart
            size={16}
            strokeWidth={2}
            className={wished ? "fill-pink-500 text-pink-500" : ""}
            aria-hidden="true"
          />
        </button>

        {/* Add-to-cart pill — slides up from the bottom of the image on hover */}
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${name} to cart`}
          className={`absolute left-2.5 right-2.5 bottom-2.5 flex items-center justify-center gap-1.5 h-10 rounded-full text-[12.5px] font-semibold text-white transition-all duration-300 ease-out ${
            added
              ? "bg-emerald-500 translate-y-0 opacity-100"
              : "bg-grad-primary translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:brightness-110"
          }`}
        >
          {added ? (
            <>
              <Check size={16} strokeWidth={3} aria-hidden="true" />
              Added
            </>
          ) : (
            <>
              <ShoppingBag size={15} strokeWidth={2.5} aria-hidden="true" />
              Add to Cart
            </>
          )}
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-1 pt-3">
        <h3 className="text-[13px] leading-snug text-ink-soft dark:text-white/80 line-clamp-2 min-h-[34px] transition-colors group-hover:text-ink dark:group-hover:text-white">
          {name}
        </h3>

        <div className="flex items-center gap-1.5">
          <Stars rating={rating} />
          <span className="text-[12px] text-ink-mute">({reviews})</span>
        </div>

        <div className="flex items-baseline flex-wrap gap-x-2 pt-0.5">
          <span className="font-display font-bold text-[16px] text-ink dark:text-white">
            ${price.toFixed(2)}
          </span>
          {oldPrice && (
            <span className="text-[12px] text-ink-mute line-through">${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </article>
  );
}
