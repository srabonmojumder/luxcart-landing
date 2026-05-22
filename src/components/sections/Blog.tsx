import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/site-data";

export default function Blog() {
  return (
    <section id="journal" className="py-[clamp(64px,9vw,112px)] bg-page dark:bg-page-dark">
      <div className="container max-w-[1200px] mx-auto px-6">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12" data-reveal>
          <div className="max-w-[620px]">
            <span className="eyebrow eyebrow-line">The LuxCart journal</span>
            <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3">
              Guides, edits & buying advice
            </h2>
            <p className="text-[16px] leading-[1.7] text-ink-soft dark:text-white/70">
              Practical reads from our stylists and product experts to help you shop smarter.
            </p>
          </div>
          <a href="#journal" className="hidden sm:inline-flex items-center gap-1.5 hover:gap-2.5 transition-all font-semibold text-sm text-brand">
            Read the journal
            <ArrowRight size={15} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.title}
              data-reveal
              className="group flex flex-col bg-white dark:bg-surface-dark border border-line dark:border-line-dark rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-big hover:border-transparent"
            >
              <a href="#journal" className="relative aspect-[16/10] overflow-hidden block" aria-label={post.title}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-3 left-3 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.06em] rounded-full ${post.categoryClass}`}>
                  {post.category}
                </span>
              </a>
              <div className="p-6 flex flex-col gap-2.5 flex-1">
                <h3 className="font-display text-[17px] font-bold leading-[1.4] text-ink dark:text-white line-clamp-2">
                  <a href="#journal" className="hover:text-brand transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-sm leading-[1.6] text-ink-soft dark:text-white/70 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto pt-3 flex flex-wrap items-center gap-2 text-[12.5px] text-ink-mute border-t border-line dark:border-line-dark">
                  <span className="font-semibold text-ink dark:text-white pt-3">{post.author}</span>
                  <span className="pt-3 text-line-strong dark:text-line-dark-strong">·</span>
                  <span className="pt-3">{post.date}</span>
                  <span className="pt-3 text-line-strong dark:text-line-dark-strong">·</span>
                  <span className="pt-3">{post.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
