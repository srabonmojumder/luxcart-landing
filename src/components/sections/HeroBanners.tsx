"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroBanners() {
  const [active, setActive] = useState(0);

  return (
    <section id="home" className="bg-white dark:bg-page-dark pt-5">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.95fr_1fr] gap-4">
          {/* ===== Big banner: iPhone ===== */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5b4bd6] via-[#6d4bd1] to-[#3b3a8f] min-h-[260px] sm:min-h-[300px]">
            <div className="relative z-10 flex h-full flex-col justify-center p-6 sm:p-9 max-w-[60%]">
              <p className="text-white/90 text-[15px] sm:text-[17px] font-medium">iPhone 16 Pro Max</p>
              <p className="font-display font-extrabold text-white text-[26px] sm:text-[36px] leading-tight mt-1">
                From $ 50,769<span className="align-super text-[16px]">*</span>
              </p>
              <p className="text-white/75 text-[12px] sm:text-[13px] leading-relaxed mt-2 max-w-[260px]">
                A18 chip. Superfast. Supersmart. History, Biggest Price Drop
              </p>
              <a
                href="#deals"
                className="mt-5 inline-flex w-fit items-center rounded-full bg-[#1a1740] px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-black transition-colors"
              >
                Shop Now
              </a>
              <p className="text-white/55 text-[10px] mt-4">*Incl. All Offers</p>
            </div>

            {/* Phone visual */}
            <div className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-[34%] max-w-[200px] aspect-[3/4]">
              <span className="absolute -top-1 right-0 z-10 text-white/85 text-[10px] text-right leading-tight">
                Monday September 9<br />
                <span className="text-white font-display font-bold text-[20px]">9:41</span>
              </span>
              <Image
                src="/images/emox/hero/phone.jpg"
                alt="iPhone 16 Pro Max"
                fill
                priority
                sizes="220px"
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>

          {/* ===== Small banner: Puma sale ===== */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2aa9e0] to-[#1f6fb2] min-h-[200px] sm:min-h-[300px]">
            <div className="relative z-10 p-6">
              <p className="text-white/90 text-[12px] font-semibold tracking-wide">SALE</p>
              <p className="text-white text-[12px] font-medium uppercase tracking-[.18em] mt-1">Up To</p>
              <p className="font-display font-extrabold text-white text-[44px] sm:text-[52px] leading-none">
                50%
              </p>
              <p className="font-display font-bold text-white text-[20px] sm:text-[24px] leading-none">OFF</p>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-[55%]">
              <Image
                src="/images/emox/hero/shoe.jpg"
                alt="Puma sale sneaker"
                fill
                sizes="380px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-2 py-5">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-5 bg-brand" : "w-2 bg-line-strong dark:bg-line-dark-strong"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
