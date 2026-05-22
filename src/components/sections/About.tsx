import { Check, ShieldCheck, Star } from "lucide-react";
import AboutImage from "@/components/ui/AboutImage";

const POINTS = [
  "Hand-picked products — never drop-shipped filler",
  "Free shipping over $50 & easy 30-day returns",
  "Secure checkout with full buyer protection",
  "Real human support, 7 days a week",
];

export default function About() {
  return (
    <section id="about" className="py-[clamp(64px,9vw,112px)] bg-page dark:bg-page-dark">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-center gap-14 lg:gap-[72px]">
          {/* Visual */}
          <div className="relative w-full max-w-[520px] mx-auto" data-reveal>
            <div
              className="absolute -inset-4 -z-10 rounded-[32px] bg-gradient-to-br from-brand/15 via-brand-accent/15 to-brand-cyan/10 blur-2xl opacity-60"
              aria-hidden="true"
            />

            <AboutImage />

            {/* Floating badge: secure checkout */}
            <div
              className="absolute -top-4 -right-4 sm:-right-6 flex items-center gap-3 pl-3 pr-4 py-2.5 bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-full shadow-soft animate-float-y z-20"
              style={{ animationDelay: "-1s" }}
            >
              <span className="grid place-items-center w-9 h-9 rounded-full bg-emerald-500/12 text-emerald-500 flex-none">
                <ShieldCheck size={18} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-[14px]">Secure checkout</div>
                <div className="text-[11.5px] text-ink-mute">Buyer protected</div>
              </div>
            </div>

            {/* Stats card: rating */}
            <div className="absolute -bottom-5 -left-4 sm:-left-6 flex items-center gap-3 px-4 py-3 bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-2xl shadow-soft z-20">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-500 fill-amber-500" aria-hidden="true" />
                ))}
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-[14px]">4.9 / 5 rating</div>
                <div className="text-[11.5px] text-ink-mute">from 50k+ reviews</div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div data-reveal>
            <span className="eyebrow eyebrow-line">Why LuxCart</span>
            <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3.5">
              More than a store — a promise on every order.
            </h2>
            <p className="text-base leading-[1.75] text-ink-soft dark:text-white/70 mb-4">
              We started LuxCart in 2019 with one rule: only sell things we&apos;d happily buy ourselves. Every product is
              tested, every supplier vetted, and every order packed like it&apos;s going to a friend.
            </p>
            <p className="text-base leading-[1.75] text-ink-soft dark:text-white/70 mb-4">
              Today over 200,000 shoppers across 30+ countries trust us for fashion, tech, home and beauty — without the
              guesswork, markups, or sketchy returns policies.
            </p>

            <ul className="my-7 flex flex-col gap-3 list-none p-0">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[15px]">
                  <Check size={22} strokeWidth={3} className="flex-none p-1 bg-emerald-500/12 text-emerald-500 rounded-full" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            <a href="#products" className="btn btn-primary">
              Start shopping
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
