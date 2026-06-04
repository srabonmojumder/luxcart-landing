import { Star, BadgeCheck, Quote } from "lucide-react";

type Review = { author: string; product: string; rating: number; comment: string };

const REVIEWS: Review[] = [
  { author: "Aisha R.", product: "iPhone 16 Pro Max", rating: 5, comment: "Ordered at night, delivered next morning in Dubai. The AI search found exactly the variant I wanted. Flawless." },
  { author: "Daniel K.", product: "Sony WH-1000XM5", rating: 5, comment: "Best prices I've found in the UAE, and the checkout felt genuinely secure. My new go-to store." },
  { author: "Fatima Z.", product: "La Mer Treatment Lotion", rating: 5, comment: "Authentic products, beautiful packaging, and returns were effortless. Customer service replied in minutes." },
  { author: "Omar S.", product: "MacBook Air", rating: 4, comment: "Great deal during the flash sale. Tracking was accurate to the hour. Will definitely shop again." },
  { author: "Layla M.", product: "Dyson Supersonic", rating: 5, comment: "I was nervous buying high-value items online, but LuxeCart made it feel safe and premium the whole way." },
  { author: "Yusuf A.", product: "Adidas Ultraboost", rating: 5, comment: "Lightning fast delivery and the loyalty points add up quickly. The whole experience just feels modern." },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="group relative overflow-hidden flex flex-col gap-5 w-[300px] sm:w-[360px] shrink-0 mr-5 bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-3xl p-7 transition-all duration-300 hover:border-brand/40 hover:shadow-xl">
      <Quote className="absolute -top-3 -right-3 w-24 h-24 rotate-180 text-brand/[0.06] dark:text-brand/10 pointer-events-none" aria-hidden="true" />
      <div className="relative flex gap-0.5">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} className={`w-4 h-4 ${s < r.rating ? "fill-amber-400 text-amber-400" : "text-line-strong dark:text-line-dark-strong"}`} aria-hidden="true" />
        ))}
      </div>
      <p className="relative text-ink dark:text-gray-200 leading-relaxed text-[15px] flex-1">&ldquo;{r.comment}&rdquo;</p>
      <div className="relative flex items-center gap-3 pt-5 border-t border-line dark:border-line-dark">
        <div className="grid place-items-center w-11 h-11 rounded-full bg-gradient-to-br from-brand to-brand-strong text-white font-black text-sm flex-shrink-0">
          {r.author.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-ink dark:text-white text-sm truncate flex items-center gap-1.5">
            {r.author}
            <BadgeCheck className="w-3.5 h-3.5 text-brand flex-shrink-0" aria-hidden="true" />
          </p>
          <p className="text-xs text-ink-mute truncate">on {r.product}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const rowA = REVIEWS.slice(0, 3);
  const rowB = REVIEWS.slice(3);

  return (
    <section className="py-16 md:py-24 bg-page-alt dark:bg-page-dark-alt">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="text-brand font-black tracking-[0.3em] text-xs uppercase">Loved by Customers</span>
            <h2 className="font-display text-4xl md:text-6xl font-black text-ink dark:text-white tracking-tighter">What People Say</h2>
          </div>
          <div className="flex items-center gap-4 bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-2xl px-6 py-4 shadow-soft self-start">
            <span className="font-display text-5xl font-black text-ink dark:text-white tracking-tighter leading-none">4.9</span>
            <div className="space-y-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-xs text-ink-soft dark:text-gray-400 font-medium">Based on 50,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Two marquee rows scrolling in opposite directions */}
      <div className="space-y-5">
        <div className="marquee flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee">{[...rowA, ...rowA].map((r, i) => <ReviewCard key={i} r={r} />)}</div>
          <div className="flex shrink-0 animate-marquee" aria-hidden="true">{[...rowA, ...rowA].map((r, i) => <ReviewCard key={i} r={r} />)}</div>
        </div>
        <div className="marquee flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee" style={{ animationDirection: "reverse" }}>{[...rowB, ...rowB].map((r, i) => <ReviewCard key={i} r={r} />)}</div>
          <div className="flex shrink-0 animate-marquee" style={{ animationDirection: "reverse" }} aria-hidden="true">{[...rowB, ...rowB].map((r, i) => <ReviewCard key={i} r={r} />)}</div>
        </div>
      </div>
    </section>
  );
}
