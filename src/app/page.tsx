import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MarketingHero from "@/components/sections/MarketingHero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import StatsBar from "@/components/sections/StatsBar";
import HeroBanners from "@/components/sections/HeroBanners";
import PopularCategories from "@/components/sections/PopularCategories";
import DealRow from "@/components/sections/DealRow";
import PromoBanners from "@/components/sections/PromoBanners";
import AiBanner from "@/components/sections/AiBanner";
import Testimonials from "@/components/sections/Testimonials";
import FinalCta from "@/components/sections/FinalCta";
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
        {/* ── Lead: brand statement + trust ── */}
        <MarketingHero />
        <FeatureStrip />
        <StatsBar />

        {/* ── Discover: categories + featured deal carousel ── */}
        <PopularCategories />
        <HeroBanners />

        {/* ── Shop: curated product rows ── */}
        <DealRow id="deals" eyebrow="Today's Picks" title="Best Deals For You" products={BEST_DEALS} />
        <PromoBanners />
        <DealRow id="winter" eyebrow="Up to 60% Off" title="Winter-Wear Edit" products={WINTER_WEAR} />
        <AiBanner />
        <DealRow id="electronics" eyebrow="Tech Drop" title="Top Deals in Electronics" products={TOP_ELECTRONICS} />
        <DealRow id="beauty" eyebrow="Best Sellers" title="Beauty & Health" products={BEST_BEAUTY} />

        {/* ── Convert: social proof + closing CTA ── */}
        <Testimonials />
        <FinalCta />
      </main>

      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
}
