import { Mail, Phone, MapPin } from "lucide-react";
import { SOCIALS, PAYMENTS, FOOTER_NAV } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1020] text-white/70 pt-14 pb-8">
      <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <span className="font-display font-extrabold text-[26px] text-white">
              Luxe<span className="text-brand">Cart</span>
            </span>
            <p className="text-sm leading-relaxed mt-4 max-w-sm">
              The Middle East&apos;s everyday marketplace — millions of products, fast delivery across the UAE, and AI-powered shopping.
            </p>
            <div className="flex flex-col gap-2 mt-5 text-sm">
              <a href="mailto:hello@luxecart.com" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={15} aria-hidden="true" /> hello@luxecart.com
              </a>
              <a href="tel:+971501234567" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={15} aria-hidden="true" /> +971 50 123 4567
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={15} aria-hidden="true" /> Dubai, United Arab Emirates
              </span>
            </div>
            <div className="flex items-center gap-2.5 mt-5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-brand transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_NAV).map(([group, links]) => (
            <div key={group} className="lg:col-span-2">
              <h3 className="font-display font-bold text-white text-[14px] mb-4">{group}</h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-[13px] text-white/55">© {year} LuxeCart. All rights reserved.</p>
          <div className="flex items-center gap-2.5">
            {PAYMENTS.map(({ label, icon: Icon }) => (
              <Icon key={label} className="h-7 w-7 text-white/80" aria-label={label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
