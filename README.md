# LuxCart — Ecommerce Landing Page

A modern ecommerce landing page built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v3**, **lucide-react** (UI icons) and **react-icons** (brand/payment icons). Dark mode, scroll-reveal animations, an interactive cart badge, and live wishlist / add-to-cart.

## Getting started

```bash
npm install      # if needed
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Project structure

```
src/
├─ app/                  # layout (fonts, metadata, theme bootstrap), page, globals.css
├─ components/
│  ├─ layout/            # Header (nav + drawer + cart), Footer
│  ├─ sections/          # Hero, FeatureBar, Categories, Products, PromoBanner,
│  │                     # About, Testimonials, Newsletter
│  └─ ui/                # BrandLogo, ProductCard, AboutImage, BackToTop, ScrollReveal
└─ lib/
   ├─ site-data.ts       # nav, categories, products, testimonials, payments, footer data
   └─ cart.tsx           # CartProvider / useCart (cart-count context)
```

## Sections

Hero · Feature bar · Categories · Best sellers · Lookbook · Deals banner · Why LuxCart ·
Stats band · Testimonials · Journal (blog) · Instagram (UGC) · FAQ · Newsletter · Footer.

## SEO

- Rich metadata with `metadataBase`, canonical, robots, Open Graph + Twitter cards.
- JSON-LD structured data (`Organization`, `WebSite` + `SearchAction`, `ItemList` of products
  with ratings/offers, `FAQPage`) in [`src/lib/seo.ts`](src/lib/seo.ts).
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.

## Notes

- Images are real photos under [`public/images/`](public/images) (rendered with `next/image`,
  served unoptimized so no `sharp` dependency is needed). Swap in your own product shots anytime.
- The original hand-coded HTML/CSS/JS design is preserved under [`legacy/`](./legacy) for
  reference and is excluded from linting/builds.
