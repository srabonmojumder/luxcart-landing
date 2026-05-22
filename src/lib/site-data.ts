import type { LucideIcon } from "lucide-react";
import {
  Home,
  LayoutGrid,
  ShoppingBag,
  Tag,
  Newspaper,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headset,
  Shirt,
  Footprints,
  Watch,
  Headphones,
  Sofa,
  Sparkles,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaCcAmex } from "react-icons/fa6";

/* ---------- Primary navigation ---------- */
export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  iconWrap: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home", icon: Home, iconWrap: "bg-brand-soft dark:bg-brand/10 text-brand" },
  { label: "Categories", href: "#categories", icon: LayoutGrid, iconWrap: "bg-emerald-500/12 text-emerald-500" },
  { label: "Shop", href: "#products", icon: ShoppingBag, iconWrap: "bg-amber-500/12 text-amber-500" },
  { label: "Deals", href: "#deals", icon: Tag, iconWrap: "bg-pink-500/12 text-pink-500" },
  { label: "Journal", href: "#journal", icon: Newspaper, iconWrap: "bg-cyan-500/12 text-cyan-500" },
];

/* IDs used for the active-link scroll spy */
export const SECTION_IDS = ["home", "categories", "products", "deals", "journal"] as const;

/* ---------- Store-wide promises (feature bar) ---------- */
export type Feature = { icon: LucideIcon; title: string; desc: string; iconClass: string };

export const FEATURES: Feature[] = [
  { icon: Truck, title: "Free shipping", desc: "On all orders over $50", iconClass: "bg-brand-soft dark:bg-brand/15 text-brand" },
  { icon: ShieldCheck, title: "Secure payment", desc: "100% protected checkout", iconClass: "bg-emerald-500/12 text-emerald-500" },
  { icon: RotateCcw, title: "Easy returns", desc: "30-day money back", iconClass: "bg-amber-500/12 text-amber-500" },
  { icon: Headset, title: "24/7 support", desc: "Dedicated help anytime", iconClass: "bg-pink-500/12 text-pink-500" },
];

/* ---------- Marketing stats ---------- */
export const STATS: { value: string; label: string }[] = [
  { value: "200K+", label: "Happy customers" },
  { value: "10,000+", label: "Products curated" },
  { value: "30+", label: "Countries shipped" },
  { value: "4.9/5", label: "Average rating" },
];

/* ---------- Shop categories ---------- */
export type Category = { icon: LucideIcon; image: string; title: string; count: string };

export const CATEGORIES: Category[] = [
  { icon: Shirt, image: "/images/categories/fashion.jpg", title: "Fashion & Apparel", count: "320+ items" },
  { icon: Footprints, image: "/images/categories/footwear.jpg", title: "Footwear", count: "140+ items" },
  { icon: Watch, image: "/images/categories/watches.jpg", title: "Watches", count: "85+ items" },
  { icon: Headphones, image: "/images/categories/audio.jpg", title: "Audio & Tech", count: "210+ items" },
  { icon: Sofa, image: "/images/categories/home.jpg", title: "Home & Living", count: "260+ items" },
  { icon: Sparkles, image: "/images/categories/beauty.jpg", title: "Beauty", count: "175+ items" },
];

/* ---------- Products (best sellers) ---------- */
export type Product = {
  image: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: { label: string; className: string };
};

export const PRODUCTS: Product[] = [
  {
    image: "/images/products/aurora-headphones.jpg",
    name: "Aurora Wireless Headphones",
    category: "Audio & Tech",
    price: 129,
    oldPrice: 179,
    rating: 4.9,
    reviews: 412,
    badge: { label: "-28%", className: "bg-pink-500 text-white" },
  },
  {
    image: "/images/products/heritage-watch.jpg",
    name: "Heritage Leather Watch",
    category: "Watches",
    price: 89,
    rating: 4.8,
    reviews: 158,
    badge: { label: "New", className: "bg-brand text-white" },
  },
  {
    image: "/images/products/cloudstep-sneakers.jpg",
    name: "Cloudstep Runner Sneakers",
    category: "Footwear",
    price: 74.5,
    rating: 4.7,
    reviews: 326,
    badge: { label: "Best seller", className: "bg-emerald-500 text-white" },
  },
  {
    image: "/images/products/leather-tote.jpg",
    name: "Minimalist Leather Tote",
    category: "Fashion",
    price: 59,
    rating: 4.6,
    reviews: 91,
  },
  {
    image: "/images/products/linen-shirt.jpg",
    name: "Linen Oversized Shirt",
    category: "Apparel",
    price: 42,
    oldPrice: 56,
    rating: 4.5,
    reviews: 73,
    badge: { label: "-25%", className: "bg-pink-500 text-white" },
  },
  {
    image: "/images/products/polarized-sunglasses.jpg",
    name: "Polarized Sunglasses",
    category: "Accessories",
    price: 38,
    rating: 4.7,
    reviews: 204,
  },
  {
    image: "/images/products/pourover-set.jpg",
    name: "Ceramic Pour-Over Set",
    category: "Home & Living",
    price: 48,
    rating: 4.9,
    reviews: 119,
    badge: { label: "New", className: "bg-brand text-white" },
  },
  {
    image: "/images/products/skincare-bundle.jpg",
    name: "Glow Skincare Bundle",
    category: "Beauty",
    price: 65,
    oldPrice: 84,
    rating: 4.8,
    reviews: 287,
    badge: { label: "-22%", className: "bg-pink-500 text-white" },
  },
];

/* ---------- Collections / lookbook ---------- */
export type Collection = {
  image: string;
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
};

export const COLLECTIONS: Collection[] = [
  {
    image: "/images/lifestyle/lookbook-women.jpg",
    eyebrow: "Women's edit",
    title: "The Spring Capsule",
    desc: "Effortless layers in breathable linen and organic cotton.",
    cta: "Shop women",
  },
  {
    image: "/images/lifestyle/lookbook-men.jpg",
    eyebrow: "Men's edit",
    title: "Modern Essentials",
    desc: "Refined staples engineered for everyday wear.",
    cta: "Shop men",
  },
];

/* ---------- Journal / blog (SEO content) ---------- */
export type BlogPost = {
  image: string;
  category: string;
  categoryClass: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    image: "/images/blog/blog-1.jpg",
    category: "Style guide",
    categoryClass: "text-brand bg-brand-soft dark:bg-brand/15",
    title: "How to build a capsule wardrobe that lasts for years",
    excerpt:
      "Fewer pieces, more outfits. Our stylists break down the 12 timeless essentials every wardrobe needs — and how to mix them.",
    author: "Aisha Rahman",
    date: "May 12, 2026",
    read: "6 min read",
  },
  {
    image: "/images/blog/blog-2.jpg",
    category: "Buying guide",
    categoryClass: "text-cyan-500 bg-cyan-500/12",
    title: "The 2026 headphone buying guide: ANC, codecs & battery",
    excerpt:
      "Active noise cancelling, aptX vs LDAC, and real-world battery life explained — so you buy the right pair the first time.",
    author: "Marcus Thorne",
    date: "Apr 28, 2026",
    read: "8 min read",
  },
  {
    image: "/images/blog/blog-3.jpg",
    category: "Sustainability",
    categoryClass: "text-emerald-500 bg-emerald-500/12",
    title: "What “ethically sourced” actually means at LuxCart",
    excerpt:
      "From factory audits to carbon-neutral delivery, here's exactly how we vet every product and partner we work with.",
    author: "Lina Kovač",
    date: "Apr 15, 2026",
    read: "5 min read",
  },
];

/* ---------- Testimonials ---------- */
export type Testimonial = {
  name: string;
  rating: number;
  quote: string;
  avatar: string;
  date: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Aisha Rahman",
    rating: 5,
    quote:
      "The quality blew me away — packaging felt premium and delivery was faster than promised. LuxCart is honestly my new go-to for gifts and everyday finds.",
    avatar: "/images/lifestyle/lookbook-women.jpg",
    date: "11 Jun, 2025",
  },
  {
    name: "Marcus Thorne",
    rating: 5,
    quote:
      "Easy checkout, real product photos, and a return I never even needed. Everything just works the way you'd hope an online store would. Total game changer!",
    avatar: "/images/lifestyle/lookbook-men.jpg",
    date: "03 Jun, 2025",
  },
  {
    name: "Lina Kovač",
    rating: 5,
    quote:
      "I've ordered four times now and every single piece looks exactly like the listing. Beautiful curation, fair prices and genuinely helpful support.",
    avatar: "/images/instagram/ig-2.jpg",
    date: "22 May, 2025",
  },
  {
    name: "Diego Martín",
    rating: 5,
    quote:
      "Fast worldwide shipping and the customer service actually replied within minutes. Rare these days — I'm a customer for life now.",
    avatar: "/images/instagram/ig-1.jpg",
    date: "15 May, 2025",
  },
];

/* ---------- FAQ (SEO — also rendered as FAQPage JSON-LD) ---------- */
export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How long does shipping take?",
    a: "Most orders ship the same business day and arrive within 2–4 days in the US. International delivery typically takes 5–10 business days. Shipping is free on every order over $50.",
  },
  {
    q: "What is your return policy?",
    a: "You have 30 days from delivery to return any unworn item for a full refund or exchange — no questions asked. Returns are free for orders within the US.",
  },
  {
    q: "Are my payment details secure?",
    a: "Absolutely. Checkout is encrypted end-to-end and we never store card details. We accept Visa, Mastercard, American Express, PayPal and Apple Pay, all with full buyer protection.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we ship to over 30 countries worldwide. Duties and taxes are calculated transparently at checkout so there are no surprises on delivery.",
  },
  {
    q: "How can I track my order?",
    a: "As soon as your order ships you'll get an email with a live tracking link. You can also track any order from your account dashboard at any time.",
  },
];

/* ---------- Instagram / UGC gallery ---------- */
export const INSTAGRAM: { image: string; alt: string }[] = [
  { image: "/images/instagram/ig-1.jpg", alt: "Customer outfit of the day featuring LuxCart apparel" },
  { image: "/images/instagram/ig-2.jpg", alt: "Street style look styled with LuxCart pieces" },
  { image: "/images/instagram/ig-3.jpg", alt: "Flat lay of LuxCart accessories" },
  { image: "/images/instagram/ig-4.jpg", alt: "LuxCart footwear in the wild" },
  { image: "/images/instagram/ig-5.jpg", alt: "LuxCart leather handbag styled outdoors" },
  { image: "/images/instagram/ig-6.jpg", alt: "LuxCart jewelry close-up" },
];

/* ---------- Social links ---------- */
export type Social = { label: string; href: string; icon: IconType; iconSize: string };

export const SOCIALS: Social[] = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram, iconSize: "h-4 w-4" },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF, iconSize: "h-4 w-4" },
  { label: "X (Twitter)", href: "https://twitter.com", icon: FaXTwitter, iconSize: "h-3.5 w-3.5" },
  { label: "TikTok", href: "https://tiktok.com", icon: FaTiktok, iconSize: "h-4 w-4" },
];

/* ---------- Accepted payments (footer) ---------- */
export const PAYMENTS: { label: string; icon: IconType }[] = [
  { label: "Visa", icon: FaCcVisa },
  { label: "Mastercard", icon: FaCcMastercard },
  { label: "PayPal", icon: FaCcPaypal },
  { label: "Apple Pay", icon: FaCcApplePay },
  { label: "American Express", icon: FaCcAmex },
];

/* ---------- Footer link groups ---------- */
export const FOOTER_NAV = {
  Shop: ["Fashion & Apparel", "Footwear", "Watches", "Audio & Tech", "Home & Living", "Beauty"],
  Help: ["Track your order", "Shipping & delivery", "Returns & refunds", "Size guide", "FAQ"],
  Company: ["About LuxCart", "Careers", "Our stores", "Sustainability", "Affiliates"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};
