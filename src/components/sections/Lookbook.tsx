import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/lib/site-data";

export default function Lookbook() {
  return (
    <section className="py-[clamp(64px,9vw,112px)] bg-page-alt dark:bg-page-dark-alt" aria-label="Featured collections">
      <div className="container max-w-[1200px] mx-auto px-6">
        <header className="text-center max-w-[680px] mx-auto mb-12" data-reveal>
          <span className="eyebrow eyebrow-line">The lookbook</span>
          <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3.5">
            Shop the seasonal edits
          </h2>
          <p className="text-[16px] leading-[1.7] text-ink-soft dark:text-white/70">
            Curated capsules styled by our team — everything you need to refresh your look this spring.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLLECTIONS.map(({ image, eyebrow, title, desc, cta }) => (
            <a
              key={title}
              href="#products"
              data-reveal
              className="group relative aspect-[16/11] rounded-3xl overflow-hidden border border-line dark:border-line-dark shadow-soft transition-all duration-300 hover:shadow-big"
            >
              <Image
                src={image}
                alt={`${title} — ${eyebrow}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 p-7 sm:p-9 flex flex-col justify-end text-white max-w-[80%]">
                <span className="text-[12px] font-semibold uppercase tracking-[.14em] text-white/80 mb-2">{eyebrow}</span>
                <h3 className="font-display font-bold text-[clamp(22px,2.6vw,30px)] leading-tight mb-2">{title}</h3>
                <p className="text-[14px] text-white/80 leading-[1.6] mb-4 max-w-[320px]">{desc}</p>
                <span className="inline-flex items-center gap-2 self-start px-4 py-2.5 rounded-full bg-white text-ink text-[13.5px] font-semibold transition-all group-hover:gap-3">
                  {cta}
                  <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
