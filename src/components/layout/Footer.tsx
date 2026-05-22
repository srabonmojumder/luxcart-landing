import { Mail, Phone, Globe } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { SOCIALS, PAYMENTS, FOOTER_NAV } from "@/lib/site-data";

const GROUP_HREF: Record<string, string> = {
  Shop: "#products",
  Help: "#contact",
  Company: "#about",
  Legal: "#",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 bg-page-alt dark:bg-page-dark-alt border-t border-line dark:border-line-dark overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60vw] h-72 rounded-full blur-[120px] bg-brand/10 dark:bg-brand-accent/10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container max-w-[1200px] mx-auto px-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-line dark:border-line-dark">
          {/* Brand + contact + socials */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5 font-display font-bold text-lg text-ink dark:text-white mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#5b8dff]/15 to-[#8a5bff]/15">
                <BrandLogo className="w-6 h-6" gradientId="logoFooter" />
              </span>
              <span>
                Lux<span className="bg-grad-primary bg-clip-text text-transparent">Cart</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-ink-soft dark:text-white/70 mb-5 max-w-sm">
              Curated fashion, tech, home and beauty — thoughtfully sourced and delivered fast. Shopping made simple since 2019.
            </p>

            <div className="flex flex-col gap-2 mb-5 text-sm">
              <a href="mailto:support@luxcart.com" className="inline-flex items-center gap-2 text-ink-soft dark:text-white/70 hover:text-brand transition-colors">
                <Mail size={15} strokeWidth={2} aria-hidden="true" /> support@luxcart.com
              </a>
              <a href="tel:+18005891234" className="inline-flex items-center gap-2 text-ink-soft dark:text-white/70 hover:text-brand transition-colors">
                <Phone size={15} strokeWidth={2} aria-hidden="true" /> +1 (800) 589-1234
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ label, href, icon: Icon, iconSize }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center w-9 h-9 rounded-full border border-line dark:border-line-dark bg-white dark:bg-surface-dark text-ink-soft dark:text-white/70 transition-all hover:text-brand hover:border-brand hover:-translate-y-0.5"
                >
                  <Icon className={iconSize} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(Object.keys(FOOTER_NAV) as (keyof typeof FOOTER_NAV)[]).map((group) => (
            <nav key={group} aria-label={group} className="lg:col-span-2">
              <h4 className="text-[12px] font-bold uppercase tracking-[.1em] text-ink dark:text-white mb-4">{group}</h4>
              <ul className="flex flex-col gap-2.5 text-sm">
                {FOOTER_NAV[group].map((label) => (
                  <li key={label}>
                    <a href={GROUP_HREF[group]} className="text-ink-soft dark:text-white/70 hover:text-brand transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 pt-6 text-[13px] text-ink-mute">
          <p>© {year} LuxCart Inc. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {/* Payment icons */}
            <div className="flex items-center gap-2" aria-label="Accepted payment methods">
              {PAYMENTS.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  title={label}
                  className="grid place-items-center h-7 w-10 rounded-md bg-white dark:bg-surface-dark border border-line dark:border-line-dark text-ink-soft dark:text-white/80"
                >
                  <Icon className="h-4 w-5" aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </span>
              ))}
            </div>
            <span className="hidden sm:inline w-px h-4 bg-line dark:bg-line-dark" />
            <button type="button" className="inline-flex items-center gap-1.5 hover:text-brand transition-colors" aria-label="Region and currency">
              <Globe size={14} strokeWidth={2} aria-hidden="true" />
              United States · USD $
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
