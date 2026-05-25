import type { IconType } from "react-icons";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaGooglePay } from "react-icons/fa6";

/* =============================================================
   LuxeCart — marketplace homepage data
   Currency: AED · Region: United Arab Emirates (Dubai)
   ============================================================= */

/* ---------- Top category navigation (under the search bar) ---------- */
export const TOP_CATEGORIES: string[] = [
  "Electronics",
  "Fashion",
  "Women's Fashion",
  "Kids' Fashion",
  "Healthy & Beauty",
  "Pharmacy",
  "Groceries",
  "Luxury Item",
];

/* ---------- "All Categories" mega-menu list ---------- */
export const ALL_CATEGORIES: string[] = [
  "Electronics",
  "Fashion",
  "Women's Fashion",
  "Kids' Fashion",
  "Health & Beauty",
  "Home & Kitchen",
  "Pharmacy",
  "Groceries",
  "Sports & Outdoors",
  "Luxury Item",
  "Toys & Baby",
  "Automotive",
];

/* ---------- Explore Popular Categories (circular) ---------- */
export type Circle = { title: string; image: string };

export const POPULAR_CATEGORIES: Circle[] = [
  { title: "Electronics", image: "/images/emox/categories/electronics.jpg" },
  { title: "Fashion", image: "/images/emox/categories/fashion.jpg" },
  { title: "Luxury", image: "/images/emox/categories/luxury.jpg" },
  { title: "Home Decor", image: "/images/emox/categories/home-decor.jpg" },
  { title: "Health & Beauty", image: "/images/emox/categories/beauty.jpg" },
  { title: "Groceries", image: "/images/emox/categories/groceries.jpg" },
  { title: "Sneakers", image: "/images/emox/categories/sneakers.jpg" },
];

/* ---------- Product ---------- */
export type Product = {
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number; // 0–5
  reviews: string; // e.g. "12k", "569"
};

/* ---------- A horizontal/grid row of products ---------- */
export type DealRow = { id: string; title: string; products: Product[] };

export const BEST_DEALS: Product[] = [
  {
    image: "/images/emox/deals/galaxy-ultra.jpg",
    name: "Samsung Galaxy S24 Ultra 12+GB Titanium Gray, 512GB",
    price: 999.99,
    rating: 4.5,
    reviews: "12k",
  },
  {
    image: "/images/emox/deals/hoodie-blue.jpg",
    name: "Nike Jordan Brooklyn Fleece Men's Pullover Hoodie",
    price: 45.0,
    rating: 3,
    reviews: "569",
  },
  {
    image: "/images/emox/deals/beanbag.jpg",
    name: "Beanless Bag Inflatable Lounge Chair Grey",
    price: 32.0,
    oldPrice: 48.0,
    rating: 4,
    reviews: "100",
  },
  {
    image: "/images/emox/deals/earrings.jpg",
    name: "Diamond Stud Earrings (1/3 ct. t.w.) in 14K White, Yellow or Rose Gold",
    price: 299.0,
    rating: 4.5,
    reviews: "11k",
  },
  {
    image: "/images/emox/deals/nike.jpg",
    name: "Nike Invincible 3 Premium",
    price: 190.0,
    rating: 4,
    reviews: "157",
  },
];

export const WINTER_WEAR: Product[] = [
  {
    image: "/images/emox/winter/face-mask.jpg",
    name: "Pumpkin Enzyme Mask",
    price: 50.0,
    rating: 3,
    reviews: "2.6k",
  },
  {
    image: "/images/emox/winter/hoodie-dark.jpg",
    name: "Cloud Zip Hoodie",
    price: 65.0,
    oldPrice: 130.0,
    rating: 4.5,
    reviews: "3.1k",
  },
  {
    image: "/images/emox/winter/gloves.jpg",
    name: "Deerskin Premium Leather Winter Gloves with 3M Thinsulate - Tan",
    price: 41.99,
    oldPrice: 59.99,
    rating: 3,
    reviews: "13k",
  },
  {
    image: "/images/emox/winter/jacket.jpg",
    name: "Hayward 3 Season Float Jacket",
    price: 230.0,
    rating: 4,
    reviews: "21",
  },
  {
    image: "/images/emox/winter/sweater.jpg",
    name: "Wardrobe Essentials",
    price: 90.0,
    rating: 4.5,
    reviews: "20",
  },
];

export const TOP_ELECTRONICS: Product[] = [
  {
    image: "/images/emox/electronics/tv.jpg",
    name: "Samsung Smart TV, Crystal UHD, DU7000, 65 Inch",
    price: 409.75,
    oldPrice: 680.37,
    rating: 3,
    reviews: "70",
  },
  {
    image: "/images/emox/electronics/iphone.jpg",
    name: "Apple iPhone 16 Pro Max, 256GB, Desert Titanium",
    price: 1747.06,
    rating: 4,
    reviews: "3.6k",
  },
  {
    image: "/images/emox/electronics/earbuds.jpg",
    name: "HUAWEI FreeClip, Ground breaking Aesthetic Design",
    price: 135.58,
    oldPrice: 190.31,
    rating: 4,
    reviews: "32",
  },
  {
    image: "/images/emox/electronics/macbook.jpg",
    name: "Apple MacBook Air A1466, 2017- 7.2 – 13\", 1.8GHz i5",
    price: 500.0,
    rating: 4.5,
    reviews: "300",
  },
  {
    image: "/images/emox/electronics/ssd.jpg",
    name: "SanDisk 2TB Extreme Portable Ssd - Up To 1050MB/s",
    price: 132.05,
    oldPrice: 138.85,
    rating: 4,
    reviews: "587",
  },
];

export const BEST_BEAUTY: Product[] = [
  {
    image: "/images/emox/beauty/serum.jpg",
    name: "ANUA Heartleaf Pore Control Cleansing Oil Korean",
    price: 32.0,
    rating: 4.5,
    reviews: "2.6k",
  },
  {
    image: "/images/emox/beauty/handwash.jpg",
    name: "Himalaya Since 1930 Himalaya Purehands Hand Sanitizer",
    price: 6.26,
    rating: 4.5,
    reviews: "100",
  },
  {
    image: "/images/emox/beauty/monitor.jpg",
    name: "A&D Medical Simple Upper Arm Blood Pressure Monitor",
    price: 40.02,
    rating: 4,
    reviews: "241",
  },
  {
    image: "/images/emox/beauty/perfume.jpg",
    name: "Yardley London Yardley Gentleman Legacy Luxury EDP",
    price: 10.35,
    rating: 2,
    reviews: "3.2k",
  },
  {
    image: "/images/emox/beauty/foundation.jpg",
    name: "Dual Set of Liquid Foundation and Compact Powder",
    price: 24.0,
    rating: 4.5,
    reviews: "321",
  },
];

/* ---------- AI collage thumbnails (LuxeCart AI banner) ---------- */
export const AI_COLLAGE: string[] = [
  "/images/emox/categories/fashion.jpg",
  "/images/emox/electronics/earbuds.jpg",
  "/images/emox/deals/hoodie-blue.jpg",
  "/images/emox/categories/sneakers.jpg",
  "/images/emox/beauty/perfume.jpg",
  "/images/emox/deals/nike.jpg",
  "/images/emox/electronics/macbook.jpg",
  "/images/emox/winter/jacket.jpg",
  "/images/emox/deals/earrings.jpg",
  "/images/emox/beauty/foundation.jpg",
  "/images/emox/categories/luxury.jpg",
  "/images/emox/electronics/ssd.jpg",
];

/* ---------- Social links ---------- */
export type Social = { label: string; href: string; icon: IconType };

export const SOCIALS: Social[] = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "X (Twitter)", href: "https://twitter.com", icon: FaXTwitter },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "TikTok", href: "https://tiktok.com", icon: FaTiktok },
];

/* ---------- Accepted payments (footer) ---------- */
export const PAYMENTS: { label: string; icon: IconType }[] = [
  { label: "Visa", icon: FaCcVisa },
  { label: "Mastercard", icon: FaCcMastercard },
  { label: "PayPal", icon: FaCcPaypal },
  { label: "Apple Pay", icon: FaCcApplePay },
  { label: "Google Pay", icon: FaGooglePay },
];

/* ---------- Footer link groups ---------- */
export const FOOTER_NAV: Record<string, string[]> = {
  "Shop With Us": ["Today's Deals", "Best Sellers", "New Arrivals", "Gift Cards", "LuxeCart Live"],
  "Customer Service": ["Track Your Order", "Shipping & Delivery", "Returns & Refunds", "Help Center", "Contact Us"],
  "About LuxeCart": ["Our Story", "Careers", "Sell on LuxeCart", "Press", "Sustainability"],
  "Quick Links": ["Privacy Policy", "Terms of Use", "Cookie Settings", "Affiliate Program"],
};
