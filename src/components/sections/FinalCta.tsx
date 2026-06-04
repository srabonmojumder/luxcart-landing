import { ArrowRight, ShoppingBag } from "lucide-react";
import { STORE_URL } from "@/lib/store";

/**
 * Closing call-to-action — a bold, store-styled banner that sends
 * visitors to the live storefront. Mirrors the ecommerce promo block.
 */
export default function FinalCta() {
  return (
    <section className="py-12 md:py-20">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#16344a] via-[#245371] to-[#2575a6] px-7 py-14 md:px-16 md:py-20 text-center">
          {/* Glow orbs */}
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-brand/30 blur-[90px]" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-brand-cyan/20 blur-[90px]" aria-hidden="true" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
            aria-hidden="true"
          />

          <div className="relative max-w-2xl mx-auto" data-reveal>
            <span className="inline-flex items-center gap-2 text-brand-cyan font-black tracking-[0.3em] text-[10px] md:text-xs uppercase">
              <ShoppingBag size={14} aria-hidden="true" /> Start Today
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.98]">
              Ready to upgrade
              <br />
              your shopping?
            </h2>
            <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed font-medium">
              Join 50,000+ shoppers enjoying the best deals, AI-powered search, and fast UAE delivery.
              Your next favorite thing is one click away.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <a
                href={STORE_URL}
                className="group inline-flex items-center gap-3 rounded-2xl bg-white px-9 py-4.5 text-[13px] font-black uppercase tracking-[0.18em] text-ink shadow-2xl transition-all hover:scale-[1.03] hover:bg-brand hover:text-white active:scale-95"
              >
                Shop LuxeCart Now
                <ArrowRight size={17} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#deals"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-8 py-4.5 text-[13px] font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10"
              >
                Browse Deals
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
