import { ChevronDown, Headset } from "lucide-react";
import { FAQS } from "@/lib/site-data";

export default function Faq() {
  return (
    <section id="faq" className="py-[clamp(64px,9vw,112px)] bg-page-alt dark:bg-page-dark-alt">
      <div className="container max-w-[820px] mx-auto px-6">
        <header className="text-center mb-12" data-reveal>
          <span className="eyebrow eyebrow-line">Help center</span>
          <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3.5">
            Frequently asked questions
          </h2>
          <p className="text-[16px] leading-[1.7] text-ink-soft dark:text-white/70">
            Everything you need to know about shipping, returns, and shopping with LuxCart.
          </p>
        </header>

        <div className="flex flex-col gap-3" data-reveal>
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark px-5 sm:px-6 transition-shadow open:shadow-soft"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 font-display font-semibold text-[15.5px] sm:text-[16.5px] text-ink dark:text-white [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown
                  size={20}
                  strokeWidth={2.5}
                  className="flex-none text-ink-mute transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 -mt-1 text-[14.5px] leading-[1.7] text-ink-soft dark:text-white/70">{a}</p>
            </details>
          ))}
        </div>

        {/* Still need help */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center" data-reveal>
          <span className="inline-flex items-center gap-2 text-[15px] text-ink-soft dark:text-white/70">
            <Headset size={18} strokeWidth={2} className="text-brand" aria-hidden="true" />
            Still have a question?
          </span>
          <a href="mailto:support@luxcart.com" className="font-semibold text-brand hover:underline">
            Chat with our team →
          </a>
        </div>
      </div>
    </section>
  );
}
