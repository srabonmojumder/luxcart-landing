import { BEST_DEALS, SOCIALS } from "@/lib/site-data";

/** Public site origin — used for canonical URLs and structured data. */
export const SITE_URL = "https://www.luxecart.ae";
export const SITE_NAME = "LuxeCart";

/** "12k" -> 12000, "2.6k" -> 2600, "569" -> 569 */
function reviewsToNumber(s: string): number {
  const t = s.trim().toLowerCase();
  return t.endsWith("k") ? Math.round(parseFloat(t) * 1000) : parseInt(t, 10) || 0;
}

/** Build the JSON-LD @graph (Organization, WebSite, ItemList of products). */
export function buildStructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "LuxeCart is the Middle East's everyday online marketplace for electronics, fashion, beauty, groceries and more — with fast delivery across the UAE.",
    sameAs: SOCIALS.map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@luxecart.ae",
      telephone: "+971-4-000-0000",
      availableLanguage: ["English", "Arabic"],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const itemList = {
    "@type": "ItemList",
    name: "Today's best deals",
    itemListElement: BEST_DEALS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: `${SITE_URL}${p.image}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: p.rating,
          reviewCount: Math.max(1, reviewsToNumber(p.reviews)),
        },
        offers: {
          "@type": "Offer",
          price: p.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, itemList],
  };
}
