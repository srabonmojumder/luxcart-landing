import { PRODUCTS, FAQS, SOCIALS } from "@/lib/site-data";

/** Public site origin — used for canonical URLs and structured data. */
export const SITE_URL = "https://www.luxcart.com";
export const SITE_NAME = "LuxCart";

/** Build the JSON-LD @graph (Organization, WebSite, ItemList of products, FAQPage). */
export function buildStructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description:
      "LuxCart is a modern online store for curated fashion, footwear, watches, audio, home and beauty.",
    sameAs: SOCIALS.map((s) => s.href),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@luxcart.com",
      telephone: "+1-800-589-1234",
      availableLanguage: ["English"],
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
    name: "Best selling products",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        category: p.category,
        image: `${SITE_URL}${p.image}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: p.rating,
          reviewCount: p.reviews,
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

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, itemList, faqPage],
  };
}
