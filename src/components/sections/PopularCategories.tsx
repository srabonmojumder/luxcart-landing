import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { POPULAR_CATEGORIES } from "@/lib/site-data";

export default function PopularCategories() {
  return (
    <section id="categories" className="bg-white dark:bg-page-dark py-8">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-ink dark:text-white">
            Explore Popular Categories
          </h2>
          <a href="#categories" className="flex items-center gap-1 text-[13px] font-semibold text-brand hover:underline">
            View All <ChevronRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="flex justify-between gap-4 lg:gap-6 overflow-x-auto scrollbar-none pb-2">
          {POPULAR_CATEGORIES.map((c) => (
            <a key={c.title} href="#deals" className="group flex flex-col items-center gap-2.5 flex-none" data-reveal>
              <span className="relative aspect-square w-[80px] sm:w-[96px] lg:w-[112px] overflow-hidden rounded-full ring-1 ring-line transition-all group-hover:ring-2 group-hover:ring-brand">
                <Image src={c.image} alt={c.title} fill sizes="112px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </span>
              <span className="text-[12.5px] sm:text-[13px] font-medium text-center text-ink-soft dark:text-white/80 group-hover:text-brand transition-colors">
                {c.title}
              </span>
            </a>
          ))}

          {/* Next arrow */}
          <div className="flex flex-col items-center justify-center flex-none">
            <button
              type="button"
              aria-label="More categories"
              className="grid place-items-center aspect-square w-11 rounded-full bg-page-alt dark:bg-white/5 ring-1 ring-line text-ink-soft hover:bg-brand hover:text-white transition-colors"
            >
              <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
