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
    default: "LuxeCart — Online Shopping in UAE | Electronics, Fashion, Beauty & More",
    template: "%s | LuxeCart",
  },
  description:
    "Shop millions of products on LuxeCart — electronics, fashion, beauty, groceries & home. Best deals, fast delivery across the UAE, and an AI-powered shopping experience.",
  applicationName: SITE_NAME,
  keywords: [
    "LuxeCart",
    "online shopping UAE",
    "Dubai online store",
    "electronics",
    "fashion",
    "beauty",
    "groceries",
    "best deals",
    "iPhone 16 Pro Max",
    "AI shopping",
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
    title: "LuxeCart — Online Shopping in UAE",
    description:
      "Electronics, fashion, beauty, groceries & more. Best deals and fast delivery across the UAE.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_AE",
    images: [{ url: "/images/emox/promo/vegetables.jpg", width: 1000, height: 560, alt: "LuxeCart marketplace deals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxeCart — Online Shopping in UAE",
    description: "Electronics, fashion, beauty, groceries & more. Best deals, fast UAE delivery.",
    images: ["/images/emox/promo/vegetables.jpg"],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%234f6dff' d='M5 7h14a1 1 0 0 1 1 .94l.93 11.99A2 2 0 0 1 18.94 22H5.06a2 2 0 0 1-1.99-2.07L4 7.94A1 1 0 0 1 5 7z'/%3E%3Cpath fill='none' stroke='%23fff' stroke-width='1.6' stroke-linecap='round' d='M8.5 9V7a3.5 3.5 0 0 1 7 0v2'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// LuxeCart renders as a light marketplace; only honor an explicit dark preference.
const themeBootstrap = `
try {
  if (localStorage.getItem('luxecart-theme') === 'dark') document.documentElement.classList.add('dark');
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
