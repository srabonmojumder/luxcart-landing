import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import type { Product } from "@/lib/site-data";

export default function DealRow({
  id,
  title,
  products,
}: {
  id?: string;
  title: string;
  products: Product[];
}) {
  return (
    <section id={id} className="bg-white dark:bg-page-dark py-8 scroll-mt-32">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display font-bold text-[20px] sm:text-[22px] text-ink dark:text-white">{title}</h2>
          <a href="#deals" className="flex items-center gap-1 text-[13px] font-semibold text-brand hover:underline">
            View All <ChevronRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
