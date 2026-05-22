import { ArrowRight, Tag } from "lucide-react";

export default function PromoBanner() {
  return (
    <section id="deals" className="py-[clamp(40px,7vw,80px)] bg-page-alt dark:bg-page-dark-alt">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div
          className="relative grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center gap-8 rounded-[28px] overflow-hidden shadow-big px-8 sm:px-12 py-10 sm:py-14"
          data-reveal
          style={{ background: "linear-gradient(135deg, #1a1f3d 0%, #0e1124 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 15% 20%, rgba(138,91,255,.30), transparent 50%), radial-gradient(circle at 85% 90%, rgba(34,211,238,.18), transparent 50%)",
            }}
          />

          {/* Copy */}
          <div className="relative z-10 text-white">
            <span className="eyebrow eyebrow-line text-white/90 [&::before]:bg-white/50">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-dot" />
              Limited time
            </span>
            <h2 className="font-display font-bold tracking-tight text-[clamp(26px,3.4vw,40px)] mt-3 mb-3 text-white">
              Summer Sale — up to 40% off everything
            </h2>
            <p className="text-white/75 text-[15.5px] leading-[1.7] mb-7 max-w-[460px]">
              New markdowns added daily across fashion, tech, and home. Use code{" "}
              <span className="font-mono font-semibold text-white bg-white/10 px-2 py-0.5 rounded-md">LUX40</span> at checkout
              — ends Sunday.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#products" className="btn btn-lg group bg-white text-ink font-semibold shadow-soft hover:-translate-y-0.5 hover:bg-white/90 transition-all">
                Shop the sale
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a href="#categories" className="btn btn-lg border border-white/25 text-white hover:bg-white/10 transition-colors">
                Browse categories
              </a>
            </div>
          </div>

          {/* Badge visual */}
          <div className="relative z-10 hidden md:flex justify-center" aria-hidden="true">
            <div className="relative grid place-items-center w-44 h-44 rounded-full bg-gradient-to-br from-[#5b8dff] to-[#8a5bff] shadow-glow animate-float-y">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-white/40" />
              <div className="text-center text-white leading-none">
                <div className="text-[13px] font-semibold uppercase tracking-[.12em] opacity-90">Up to</div>
                <div className="font-display font-bold text-[44px] my-1">40%</div>
                <div className="inline-flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[.12em] opacity-90">
                  <Tag size={13} strokeWidth={2.5} /> Off
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
