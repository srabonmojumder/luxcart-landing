"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

/** Brand/lifestyle photo with a gradient fallback shown if the image fails to load. */
export default function AboutImage() {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={`relative rounded-3xl overflow-hidden shadow-big border border-line dark:border-line-dark bg-page-alt dark:bg-page-dark-alt${
        failed ? " img-failed" : ""
      }`}
    >
      {!failed && (
        <Image
          src="/images/lifestyle/about.jpg"
          alt="Inside the LuxCart boutique — curating new seasonal arrivals"
          width={900}
          height={1100}
          loading="lazy"
          onError={() => setFailed(true)}
          className="block w-full h-full object-cover aspect-[4/5] transition-transform duration-700 hover:scale-[1.03]"
        />
      )}

      {/* Fallback shown if the image fails to load */}
      <div
        className="img-fallback absolute inset-0 hidden grid-cols-1 place-items-center bg-gradient-to-br from-brand via-brand-accent to-brand-cyan text-white aspect-[4/5]"
        aria-hidden="true"
      >
        <div className="text-center px-8">
          <ShoppingBag size={56} strokeWidth={1.5} className="mx-auto mb-3 opacity-90" aria-hidden="true" />
          <div className="font-display font-bold text-xl mb-1">Curated with care</div>
          <div className="text-sm opacity-90">200k+ happy shoppers worldwide</div>
        </div>
      </div>

      {/* Bottom gradient for caption legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 via-black/25 to-transparent pointer-events-none" aria-hidden="true" />

      <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 sm:pb-[60px] pb-[30px] text-white">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span className="text-[11.5px] font-semibold tracking-[.12em] uppercase opacity-90">Our story</span>
        </div>
        <div className="font-display font-bold text-lg sm:text-xl leading-tight">Curating the good stuff since 2019</div>
        <div className="text-[13px] opacity-80">Independent · women-led · shipping worldwide</div>
      </figcaption>
    </figure>
  );
}
