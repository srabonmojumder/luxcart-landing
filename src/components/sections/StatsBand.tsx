import { STATS } from "@/lib/site-data";

export default function StatsBand() {
  return (
    <section className="py-[clamp(48px,7vw,88px)] bg-page dark:bg-page-dark" aria-label="LuxCart by the numbers">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div
          className="relative rounded-[28px] overflow-hidden shadow-big px-8 sm:px-12 py-12 sm:py-14"
          data-reveal
          style={{ background: "linear-gradient(135deg, #1a1f3d 0%, #0e1124 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 10% 10%, rgba(91,141,255,.28), transparent 45%), radial-gradient(circle at 90% 90%, rgba(138,91,255,.22), transparent 45%)",
            }}
          />
          <div className="relative z-10">
            <div className="text-center max-w-[640px] mx-auto mb-10">
              <span className="eyebrow eyebrow-line text-white/90 [&::before]:bg-white/50">By the numbers</span>
              <h2 className="font-display font-bold tracking-tight text-[clamp(24px,3.2vw,38px)] mt-3 text-white">
                A store thousands keep coming back to
              </h2>
            </div>
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display font-bold text-[clamp(30px,4.5vw,48px)] leading-none bg-grad-text bg-clip-text text-transparent">
                    {s.value}
                  </dd>
                  <p className="mt-2 text-[13.5px] text-white/65">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
