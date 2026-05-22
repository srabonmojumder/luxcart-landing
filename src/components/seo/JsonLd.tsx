import { buildStructuredData } from "@/lib/seo";

/** Renders the page's structured data as a JSON-LD script for rich results. */
export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
    />
  );
}
