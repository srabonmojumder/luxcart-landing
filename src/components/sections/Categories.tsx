import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/site-data";

export default function Categories() {
  return (
    <section id="categories" className="py-[clamp(64px,9vw,112px)] bg-page dark:bg-page-dark">
      <div className="container max-w-[1200px] mx-auto px-6">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12" data-reveal>
          <div className="max-w-[620px]">
            <span className="eyebrow eyebrow-line">Shop by category</span>
            <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3">
              Find exactly what you&apos;re looking for
            </h2>
            <p className="text-[16px] leading-[1.7] text-ink-soft dark:text-white/70">
              Six curated departments, thousands of hand-picked products — all in one place.
            </p>
          </div>
          <a href="#products" className="hidden sm:inline-flex items-center gap-1.5 hover:gap-2.5 transition-all font-semibold text-sm text-brand">
            View all products
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map(({ icon: Icon, image, title, count }) => (
            <a
              key={title}
              href="#products"
              data-reveal
              className="group relative aspect-[4/5] sm:aspect-[5/4] rounded-2xl overflow-hidden border border-line dark:border-line-dark shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-big"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" aria-hidden="true" />

              <span className="absolute top-3.5 left-3.5 grid place-items-center w-10 h-10 rounded-xl bg-white/85 dark:bg-page-dark/70 backdrop-blur-sm text-brand shadow-soft">
                <Icon size={20} strokeWidth={2} aria-hidden="true" />
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
                <h3 className="font-display text-[16px] sm:text-[18px] font-bold leading-tight">{title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[12.5px] text-white/80">{count}</span>
                  <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Shop <ArrowRight size={13} strokeWidth={2.5} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
