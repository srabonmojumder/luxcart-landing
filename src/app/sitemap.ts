import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#categories", "#products", "#deals", "#journal", "#faq", "#contact"];

  return sections.map((hash) => ({
    url: `${SITE_URL}/${hash}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: hash === "" ? 1 : 0.7,
  }));
}
