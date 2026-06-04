/* =============================================================
   Single source of truth for the live LuxeCart store URL.
   The landing page is a marketing funnel that drives traffic
   to the actual storefront, so every primary CTA points here.
   ============================================================= */
export const STORE_URL = "https://luxecart-store.web.app/";

/** Build an absolute URL into the live store, e.g. storeLink("products"). */
export function storeLink(path = ""): string {
  return STORE_URL.replace(/\/$/, "") + (path ? `/${path.replace(/^\//, "")}` : "");
}

/** The store's product listing page. */
export const STORE_PRODUCTS = storeLink("products");

/** Deep-link into the store's product list filtered by a category title.
 *  Mirrors the storefront's own `?category=<slug>` convention. */
export function storeCategoryLink(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${STORE_PRODUCTS}?category=${slug}`;
}
