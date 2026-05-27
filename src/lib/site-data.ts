import type { IconType } from "react-icons";
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaGooglePay } from "react-icons/fa6";

/* =============================================================
   LuxeCart — marketplace homepage data
   Currency: USD ($) · Region: United Arab Emirates (Dubai)
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
  { title: "Mobiles", image: "/images/emox/electronics/iphone.jpg" },
  { title: "Laptops", image: "/images/emox/electronics/macbook.jpg" },
  { title: "Audio", image: "/images/emox/electronics/earbuds.jpg" },
  { title: "Watches", image: "/images/emox/categories/watches.jpg" },
  { title: "Jewelry", image: "/images/emox/deals/earrings.jpg" },
  { title: "Toys", image: "/images/emox/categories/toys.jpg" },
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
  {
    image: "/images/emox/products/speaker.jpg",
    name: "Bose SoundLink Bluetooth Speaker",
    price: 89.0,
    oldPrice: 119.0,
    rating: 4.5,
    reviews: "1.2k",
  },
  {
    image: "/images/emox/products/backpack.jpg",
    name: "Anker Travel Backpack 30L",
    price: 145.0,
    rating: 4,
    reviews: "320",
  },
  {
    image: "/images/emox/electronics/earbuds.jpg",
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 349.0,
    rating: 4.5,
    reviews: "8k",
  },
  {
    image: "/images/emox/categories/luxury.jpg",
    name: "Ray-Ban Aviator Classic Sunglasses",
    price: 119.0,
    rating: 4,
    reviews: "1.5k",
  },
  {
    image: "/images/emox/categories/sneakers.jpg",
    name: "Adidas Ultraboost 23 Running Shoes",
    price: 425.0,
    rating: 4.5,
    reviews: "1.2k",
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
  {
    image: "/images/emox/winter/sweater.jpg",
    name: "Cashmere Wool Scarf Premium",
    price: 80.0,
    oldPrice: 110.0,
    rating: 4.5,
    reviews: "542",
  },
  {
    image: "/images/emox/winter/jacket.jpg",
    name: "Insulated Puffer Vest",
    price: 175.0,
    rating: 4,
    reviews: "98",
  },
  {
    image: "/images/emox/categories/sneakers.jpg",
    name: "Thermal Snow Boots Waterproof",
    price: 199.0,
    oldPrice: 259.0,
    rating: 4.5,
    reviews: "1.1k",
  },
  {
    image: "/images/emox/winter/hoodie-dark.jpg",
    name: "Knitted Beanie Hat 3-Pack",
    price: 25.0,
    rating: 4,
    reviews: "456",
  },
  {
    image: "/images/emox/beauty/serum.jpg",
    name: "Winter Lip Balm & Hand Cream Set",
    price: 22.0,
    oldPrice: 35.0,
    rating: 4.5,
    reviews: "230",
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
  {
    image: "/images/emox/products/smartwatch.jpg",
    name: "Apple Watch Ultra 2 49mm Titanium",
    price: 1399.0,
    rating: 4.5,
    reviews: "892",
  },
  {
    image: "/images/emox/products/keyboard.jpg",
    name: "Logitech MX Master Mechanical Keyboard",
    price: 199.0,
    oldPrice: 249.0,
    rating: 4.5,
    reviews: "850",
  },
  {
    image: "/images/emox/electronics/macbook.jpg",
    name: "Samsung Galaxy Tab S10+ 12.4\" 256GB",
    price: 749.0,
    rating: 4,
    reviews: "318",
  },
  {
    image: "/images/emox/electronics/ssd.jpg",
    name: "WD My Passport 4TB Portable Drive",
    price: 159.0,
    oldPrice: 189.0,
    rating: 4,
    reviews: "212",
  },
  {
    image: "/images/emox/electronics/earbuds.jpg",
    name: "Bose QuietComfort 45 Headphones",
    price: 449.0,
    rating: 4.5,
    reviews: "1.8k",
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
  {
    image: "/images/emox/products/hairdryer.jpg",
    name: "Dyson Supersonic Hair Dryer",
    price: 1599.0,
    oldPrice: 1799.0,
    rating: 4.5,
    reviews: "1.4k",
  },
  {
    image: "/images/emox/products/toothbrush.jpg",
    name: "Oral-B iO Series 9 Electric Toothbrush",
    price: 489.0,
    oldPrice: 599.0,
    rating: 4.5,
    reviews: "623",
  },
  {
    image: "/images/emox/beauty/serum.jpg",
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    price: 28.0,
    rating: 4.5,
    reviews: "5.2k",
  },
  {
    image: "/images/emox/beauty/perfume.jpg",
    name: "Estée Lauder Advanced Night Repair Serum",
    price: 290.0,
    rating: 4.5,
    reviews: "892",
  },
  {
    image: "/images/emox/beauty/foundation.jpg",
    name: "La Mer The Treatment Lotion 150ml",
    price: 535.0,
    rating: 4.5,
    reviews: "318",
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
