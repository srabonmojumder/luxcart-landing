import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LuxCart — Curated Essentials, Delivered | Fashion, Tech & Home",
    template: "%s | LuxCart",
  },
  description:
    "Shop LuxCart for curated fashion, footwear, watches, audio, home & beauty. Free shipping over $50, easy 30-day returns, secure checkout and worldwide delivery.",
  applicationName: SITE_NAME,
  keywords: [
    "LuxCart",
    "online store",
    "ecommerce",
    "buy fashion online",
    "footwear",
    "watches",
    "wireless headphones",
    "home & living",
    "beauty products",
    "free shipping",
    "online shopping",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "shopping",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "LuxCart — Curated Essentials, Delivered",
    description:
      "Shop curated fashion, footwear, watches, audio, home & beauty. Free shipping over $50 and easy 30-day returns.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/lifestyle/hero.jpg", width: 1000, height: 1100, alt: "LuxCart curated collection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxCart — Curated Essentials, Delivered",
    description: "Curated fashion, tech, home & beauty. Free shipping over $50, easy 30-day returns.",
    images: ["/images/lifestyle/hero.jpg"],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234f6dff' d='M5 7h14a1 1 0 0 1 1 .94l.93 11.99A2 2 0 0 1 18.94 22H5.06a2 2 0 0 1-1.99-2.07L4 7.94A1 1 0 0 1 5 7z'/%3E%3Cpath fill='none' stroke='%23fff' stroke-width='1.6' stroke-linecap='round' d='M8.5 9V7a3.5 3.5 0 0 1 7 0v2'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1020",
  width: "device-width",
  initialScale: 1,
};

// Applied before paint to avoid a light/dark flash on first load.
const themeBootstrap = `
try {
  var t = localStorage.getItem('luxcart-theme');
  if (t === 'dark') document.documentElement.classList.add('dark');
  else if (!t && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body
        className="font-sans text-ink dark:text-white bg-page dark:bg-page-dark antialiased transition-colors duration-300"
        suppressHydrationWarning
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
