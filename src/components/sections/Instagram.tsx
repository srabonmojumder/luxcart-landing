import Image from "next/image";
import { Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { INSTAGRAM } from "@/lib/site-data";

export default function Instagram() {
  return (
    <section className="py-[clamp(64px,9vw,112px)] bg-page dark:bg-page-dark" aria-label="LuxCart on Instagram">
      <div className="container max-w-[1200px] mx-auto px-6">
        <header className="text-center max-w-[640px] mx-auto mb-12" data-reveal>
          <span className="eyebrow eyebrow-line">#LuxCartStyle</span>
          <h2 className="font-display font-bold tracking-tight text-[clamp(28px,3.6vw,44px)] mt-4 mb-3.5">
            Tag us for a chance to be featured
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-brand hover:gap-3 transition-all"
          >
            <FaInstagram className="h-5 w-5" aria-hidden="true" />
            @luxcart
          </a>
        </header>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3" data-reveal>
          {INSTAGRAM.map((post, i) => (
            <a
              key={post.image}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden"
              aria-label="View on Instagram"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/45 transition-colors">
                <div className="flex items-center gap-1.5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={16} className="fill-white" aria-hidden="true" />
                  <span className="text-sm font-semibold">{(i + 3) * 217}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
