import Image from "next/image";

export default function PromoBanners() {
  return (
    <section className="bg-white dark:bg-page-dark py-6">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ===== Vegetables ===== */}
          <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#e0367d] to-[#b8246a] min-h-[230px] p-6" data-reveal>
            <div className="relative z-10">
              <p className="font-display font-semibold text-amber-300 text-[12px] tracking-wide">
                ✦ FRESH AND HEALTHY
              </p>
              <p className="font-display font-extrabold text-amber-300 text-[30px] leading-none drop-shadow">VEGETABLE</p>
              <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-md bg-white/20 text-white text-[10px] font-bold uppercase tracking-wide">
                🚚 Free Delivery
              </span>
            </div>
            <span className="absolute top-5 right-5 z-10 grid place-items-center w-14 h-14 rounded-full bg-amber-300 text-[#b8246a] text-center leading-none rotate-12">
              <span className="font-display font-extrabold text-[16px]">50%<br /><span className="text-[9px]">SAVE</span></span>
            </span>
            <Image
              src="/images/emox/promo/vegetables.jpg"
              alt="Fresh vegetables"
              width={400}
              height={260}
              className="absolute bottom-0 right-0 w-[62%] h-[55%] object-cover object-center opacity-95 [mask-image:linear-gradient(to_left,#000_70%,transparent)]"
            />
            <a href="#deals" className="absolute bottom-5 left-6 z-10 inline-flex items-center rounded-full bg-[#1a1740] px-5 py-2 text-[12px] font-semibold text-white hover:bg-black transition-colors">
              Shop now
            </a>
          </article>

          {/* ===== Samsung Galaxy ===== */}
          <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#cfe6f7] to-[#a9d2ef] min-h-[230px] p-6" data-reveal>
            <div className="relative z-10 text-center">
              <p className="font-display font-bold text-[#1a2740] text-[13px] tracking-[.18em]">SAMSUNG</p>
              <p className="font-display font-extrabold text-[#1a2740] text-[24px] leading-tight mt-1">Galaxy S24 FE</p>
              <p className="text-[#33507a] text-[13px] mt-0.5">
                Galaxy AI <span className="text-brand">✦</span> is here
              </p>
            </div>
            <Image
              src="/images/emox/deals/galaxy-ultra.jpg"
              alt="Samsung Galaxy S24 FE"
              width={260}
              height={200}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[58%] h-[48%] object-contain"
            />
            <a href="#electronics" className="absolute bottom-5 left-6 z-10 inline-flex items-center rounded-full bg-[#1a2740] px-5 py-2 text-[12px] font-semibold text-white hover:bg-black transition-colors">
              Shop now
            </a>
          </article>

          {/* ===== Arabic offer ===== */}
          <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#e02424] to-[#b01515] min-h-[230px] p-6" data-reveal>
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-md bg-amber-300 text-[#b01515] font-display font-extrabold text-[20px]" dir="rtl" lang="ar">
                عرض ايموكس
              </span>
              <p className="text-white/85 text-[11px] mt-2" dir="rtl" lang="ar">
                قبل نفاد المخزون · أفضل العروض على البقالة
              </p>
            </div>
            <Image
              src="/images/emox/promo/pantry.jpg"
              alt="Grocery offer"
              width={400}
              height={240}
              className="absolute bottom-0 left-0 right-0 w-full h-[52%] object-cover object-center [mask-image:linear-gradient(to_top,#000_75%,transparent)]"
            />
            <a href="#deals" className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center rounded-full bg-amber-300 px-5 py-2 text-[12px] font-semibold text-[#b01515] hover:brightness-105 transition-all">
              Shop now
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
