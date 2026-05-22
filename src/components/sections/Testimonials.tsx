import { Star, Quote, Check, ShoppingBag, CircleCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

const RATING_BARS = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

export default function Testimonials() {
  return (
    <section className="py-[clamp(64px,9vw,112px)] bg-page-alt dark:bg-page-dark-alt" aria-label="Customer reviews">
      <div className="container max-w-[1200px] mx-auto px-6">
        <header className="text-center max-w-[680px] mx-auto mb-12" data-reveal>
          <span className="eyebrow eyebrow-line justify-center">Loved by shoppers</span>
          <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3.5">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-[16px] leading-[1.7] text-ink-soft dark:text-white/70">
            Real, verified reviews from shoppers in 30+ countries — here&apos;s why they keep coming back.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 items-start">
          {/* Rating summary */}
          <aside
            data-reveal
            className="lg:sticky lg:top-32 rounded-3xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark shadow-soft p-7"
          >
            <div className="flex items-end gap-3">
              <span className="font-display font-bold text-[56px] leading-[0.9] bg-grad-text bg-clip-text text-transparent">4.9</span>
              <div className="pb-1.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[13px] text-ink-mute mt-1">Based on 50,000+ reviews</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {RATING_BARS.map((b) => (
                <div key={b.stars} className="flex items-center gap-2.5 text-[12.5px]">
                  <span className="inline-flex items-center gap-0.5 w-7 text-ink-soft dark:text-white/70">
                    {b.stars}
                    <Star size={11} className="text-amber-500 fill-amber-500" aria-hidden="true" />
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-page-alt dark:bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-amber-400" style={{ width: `${b.pct}%` }} />
                  </div>
                  <span className="w-9 text-right text-ink-mute tabular-nums">{b.pct}%</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-line dark:border-line-dark flex items-center gap-2 text-[13.5px] text-ink-soft dark:text-white/70">
              <CircleCheck size={18} strokeWidth={2} className="text-emerald-500 flex-none" aria-hidden="true" />
              Verified by real customers
            </div>

            <a href="#products" className="btn btn-primary w-full mt-5">
              Shop best sellers
            </a>
          </aside>

          {/* Review cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                data-reveal
                className="group relative flex flex-col p-6 rounded-2xl bg-white dark:bg-surface-dark border border-line dark:border-line-dark shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-big overflow-hidden"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-grad-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <Quote size={32} strokeWidth={1.5} className="absolute top-5 right-5 text-brand/15" aria-hidden="true" />

                <div className="flex items-center gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-amber-500 fill-amber-500" aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="text-[15px] leading-[1.7] text-ink-soft dark:text-white/80 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-4 inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-page-alt dark:bg-white/5 text-[11.5px] font-medium text-ink-soft dark:text-white/70">
                  <ShoppingBag size={12} strokeWidth={2} className="text-brand" aria-hidden="true" />
                  {t.product}
                </div>

                <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-line dark:border-line-dark">
                  <div className="relative flex-none">
                    <span className={`grid place-items-center w-11 h-11 rounded-full text-white font-display font-bold text-[15px] ${t.avatarClass}`}>
                      {t.name.charAt(0)}
                    </span>
                    <span className="absolute -bottom-1 -right-1 grid place-items-center w-[18px] h-[18px] rounded-full bg-emerald-500 ring-2 ring-white dark:ring-surface-dark">
                      <Check size={11} strokeWidth={3} className="text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="leading-tight">
                    <div className="font-display font-bold text-[14.5px] text-ink dark:text-white">{t.name}</div>
                    <div className="text-[12.5px] text-ink-mute">{t.location} · Verified buyer</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
