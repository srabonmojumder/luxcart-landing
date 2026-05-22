import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeatureBar from "@/components/sections/FeatureBar";
import AiSearch from "@/components/sections/AiSearch";
import Categories from "@/components/sections/Categories";
import Products from "@/components/sections/Products";
import Lookbook from "@/components/sections/Lookbook";
import PromoBanner from "@/components/sections/PromoBanner";
import About from "@/components/sections/About";
import StatsBand from "@/components/sections/StatsBand";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Instagram from "@/components/sections/Instagram";
import Faq from "@/components/sections/Faq";
import Newsletter from "@/components/sections/Newsletter";
import BackToTop from "@/components/ui/BackToTop";
import ScrollReveal from "@/components/ui/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";

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

      <main id="main">
        <Hero />
        <FeatureBar />
        <AiSearch />
        <Categories />
        <Products />
        <Lookbook />
        <PromoBanner />
        <About />
        <StatsBand />
        <Testimonials />
        <Blog />
        <Instagram />
        <Faq />
        <Newsletter />
      </main>

      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
}
