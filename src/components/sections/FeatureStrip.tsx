import { Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

/* The four trust pillars — mirrors the store's own features strip. */
const FEATURES = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
  { icon: ShieldCheck, title: "Secure Payment", desc: "100% protected checkout" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day money back" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
];

export default function FeatureStrip() {
  return (
    <section className="bg-white dark:bg-page-dark border-y border-line dark:border-line-dark">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6 py-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left"
            >
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-page-alt dark:bg-white/[0.06] text-ink dark:text-white transition-colors group-hover:bg-brand group-hover:text-white flex-none">
                <f.icon size={22} strokeWidth={2.2} aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-[13px] sm:text-[14px] text-ink dark:text-white">{f.title}</h4>
                <p className="text-[11px] sm:text-[12px] text-ink-mute">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
