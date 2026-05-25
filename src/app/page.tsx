import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanners from "@/components/sections/HeroBanners";
import PopularCategories from "@/components/sections/PopularCategories";
import DealRow from "@/components/sections/DealRow";
import PromoBanners from "@/components/sections/PromoBanners";
import AiBanner from "@/components/sections/AiBanner";
import BackToTop from "@/components/ui/BackToTop";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import { BEST_DEALS, WINTER_WEAR, TOP_ELECTRONICS, BEST_BEAUTY } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <JsonLd />

      <a
        href="#main"
        className="absolute -top-10 left-3 z-[999] px-3.5 py-2 bg-brand text-white rounded-lg transition-all focus:top-3"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="bg-white dark:bg-page-dark">
        <HeroBanners />
        <PopularCategories />
        <DealRow id="deals" title="Todays Best Deals For You!" products={BEST_DEALS} />
        <PromoBanners />
        <DealRow id="winter" title="60% Off Or More  On Winter-Wear" products={WINTER_WEAR} />
        <AiBanner />
        <DealRow id="electronics" title="Top Deals In Electronics" products={TOP_ELECTRONICS} />
        <DealRow id="beauty" title="Best Sellers In Beauty & Health" products={BEST_BEAUTY} />
      </main>

      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
}
