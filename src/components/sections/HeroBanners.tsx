"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  eyebrow: string;
  title: string;
  sub: string;
  note?: string;
  image: string;
  bg: string;
  clock?: boolean;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "iPhone 16 Pro Max",
    title: "From $ 50,769*",
    sub: "A18 chip. Superfast. Supersmart. History, Biggest Price Drop",
    note: "*Incl. All Offers",
    image: "/images/emox/hero/phone.jpg",
    bg: "from-[#5b4bd6] via-[#6d4bd1] to-[#3b3a8f]",
    clock: true,
  },
  {
    eyebrow: "Apple MacBook Air",
    title: "Only 500.00 AED",
    sub: "Lightweight power meets all-day battery. Work, play, create anywhere.",
    image: "/images/emox/electronics/macbook.jpg",
    bg: "from-[#1f2b4d] via-[#243a6b] to-[#0f1a33]",
  },
  {
    eyebrow: "Samsung Galaxy S24 Ultra",
    title: "999.99 AED",
    sub: "Galaxy AI is here. 512GB · Titanium Gray. Biggest deal of the season.",
    image: "/images/emox/deals/galaxy-ultra.jpg",
    bg: "from-[#0f766e] via-[#0d9488] to-[#115e59]",
  },
  {
    eyebrow: "Crystal UHD Smart TV",
    title: "Up to 40% Off",
    sub: "Upgrade your living room with the Samsung 65\" Crystal UHD experience.",
    image: "/images/emox/electronics/tv.jpg",
    bg: "from-[#b45309] via-[#d97706] to-[#92400e]",
  },
];

export default function HeroBanners() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);
  const n = SLIDES.length;

  // Auto-advance every 5s, paused on hover.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % n);
    }, 5000);
    return () => window.clearInterval(id);
  }, [n]);

  const go = (i: number) => setActive(((i % n) + n) % n);

  return (
    <section id="home" className="bg-white dark:bg-page-dark pt-5">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.95fr_1fr] gap-4">
          {/* ===== Slider ===== */}
          <div
            className="group relative overflow-hidden rounded-2xl"
            onMouseEnter={() => (paused.current = true)}
            onMouseLeave={() => (paused.current = false)}
            aria-roledescription="carousel"
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {SLIDES.map((s, i) => (
                <div
                  key={i}
                  className={`relative w-full flex-none min-h-[260px] sm:min-h-[300px] bg-gradient-to-br ${s.bg}`}
                  aria-hidden={active !== i}
                >
                  <div className="relative z-10 flex h-full flex-col justify-center p-6 sm:p-9 max-w-[60%]">
                    <p className="text-white/90 text-[15px] sm:text-[17px] font-medium">{s.eyebrow}</p>
                    <p className="font-display font-extrabold text-white text-[26px] sm:text-[36px] leading-tight mt-1">
                      {s.title}
                    </p>
                    <p className="text-white/75 text-[12px] sm:text-[13px] leading-relaxed mt-2 max-w-[280px]">{s.sub}</p>
                    <a
                      href="#deals"
                      className="mt-5 inline-flex w-fit items-center rounded-full bg-[#1a1740] px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-black transition-colors"
                    >
                      Shop Now
                    </a>
                    {s.note && <p className="text-white/55 text-[10px] mt-4">{s.note}</p>}
                  </div>

                  {/* Product visual */}
                  <div className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-[34%] max-w-[200px] aspect-[3/4]">
                    {s.clock && (
                      <span className="absolute -top-1 right-0 z-10 text-white/85 text-[10px] text-right leading-tight">
                        Monday September 9<br />
                        <span className="text-white font-display font-bold text-[20px]">9:41</span>
                      </span>
                    )}
                    <Image
                      src={s.image}
                      alt={s.eyebrow}
                      fill
                      priority={i === 0}
                      sizes="220px"
                      className="object-contain object-bottom drop-shadow-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows (desktop, on hover) */}
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous slide"
              className="hidden sm:grid place-items-center absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-all"
            >
              <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next slide"
              className="hidden sm:grid place-items-center absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/25 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-all"
            >
              <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>

          {/* ===== Small banner: Puma sale (static) ===== */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2aa9e0] to-[#1f6fb2] min-h-[200px] sm:min-h-[300px]">
            <div className="relative z-10 p-6">
              <p className="text-white/90 text-[12px] font-semibold tracking-wide">SALE</p>
              <p className="text-white text-[12px] font-medium uppercase tracking-[.18em] mt-1">Up To</p>
              <p className="font-display font-extrabold text-white text-[44px] sm:text-[52px] leading-none">50%</p>
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
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-5 bg-brand" : "w-2 bg-line-strong dark:bg-line-dark-strong hover:bg-ink-mute"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
