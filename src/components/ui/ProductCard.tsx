"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, StarHalf, Heart } from "lucide-react";
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
  const [wished, setWished] = useState(false);

  return (
    <article
      data-reveal
      className="group flex flex-col cursor-pointer rounded-2xl p-2.5 transition-all duration-300 hover:bg-white hover:shadow-big"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f2f3f5] dark:bg-white/[0.04]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setWished((w) => !w);
          }}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          className="absolute top-2.5 right-2.5 grid place-items-center w-8 h-8 rounded-full bg-white/90 text-ink-soft shadow-soft ring-1 ring-line/70 transition-all hover:scale-110 hover:text-pink-500"
        >
          <Heart size={15} strokeWidth={2} className={wished ? "fill-pink-500 text-pink-500" : ""} aria-hidden="true" />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 px-1 pt-3">
        <h3 className="text-[13px] leading-snug text-ink-soft dark:text-white/80 line-clamp-2 min-h-[34px] group-hover:text-ink dark:group-hover:text-white">
          {name}
        </h3>

        <div className="flex items-center gap-1.5">
          <Stars rating={rating} />
          <span className="text-[12px] text-ink-mute">({reviews})</span>
        </div>

        <div className="flex items-baseline flex-wrap gap-x-2 pt-0.5">
          <span className="font-display font-bold text-[16px] text-ink dark:text-white">
            {price.toFixed(2)}
            <sup className="ml-0.5 text-[9px] font-semibold text-ink-mute align-super">AED</sup>
          </span>
          {oldPrice && (
            <span className="text-[12px] text-ink-mute line-through">
              {oldPrice.toFixed(2)}
              <sup className="ml-0.5 text-[8px] align-super">AED</sup>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
