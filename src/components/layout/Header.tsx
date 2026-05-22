"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Sun, Moon, X, ChevronRight, ArrowRight, Menu, Search, User, Heart, ShoppingBag, Truck } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";
import { NAV_LINKS, SECTION_IDS } from "@/lib/site-data";
import { useCart } from "@/lib/cart";

/** Rounded search field — defined at module scope so it never remounts
 *  (and loses input focus) when the header re-renders on scroll. */
function SearchField({
  id,
  autoFocus = false,
  onSubmitted,
}: {
  id: string;
  autoFocus?: boolean;
  onSubmitted?: () => void;
}) {
  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitted?.();
      }}
      className="search-field group flex items-center gap-2.5 w-full px-4 h-11 rounded-full bg-page-alt dark:bg-white/[0.06] ring-1 ring-line/60 dark:ring-line-dark/80 focus-within:ring-2 focus-within:ring-brand/45 focus-within:bg-white dark:focus-within:bg-surface-dark transition-all duration-200"
    >
      <Search
        size={17}
        strokeWidth={2}
        className="text-ink-mute group-focus-within:text-brand transition-colors flex-none"
        aria-hidden="true"
      />
      <input
        id={id}
        type="search"
        autoFocus={autoFocus}
        placeholder="Search products, brands…"
        aria-label="Search products"
        className="flex-1 min-w-0 bg-transparent outline-none border-0 text-sm text-ink dark:text-white placeholder:text-ink-mute [&::-webkit-search-cancel-button]:appearance-none"
      />
    </form>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [announce, setAnnounce] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const { count } = useCart();

  /* ---------- Scroll: navbar shadow + active-link spy ---------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const headerH = headerRef.current?.offsetHeight ?? 64;
      const y = window.scrollY + headerH + 40;
      let current = SECTION_IDS[0] as string;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Theme toggle (DOM + localStorage, icon swap via CSS) ---------- */
  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("luxcart-theme", next);
    } catch {}
  }, []);

  /* ---------- Drawer open/close ---------- */
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (!drawerOpen) return;
    const sbWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--scrollbar-w", `${sbWidth}px`);
    document.body.classList.add("drawer-open");
    closeBtnRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) closeDrawer();
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.classList.remove("drawer-open");
      document.documentElement.style.removeProperty("--scrollbar-w");
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [drawerOpen, closeDrawer]);

  const cartBadge =
    count > 0 ? (
      <span className="absolute -top-1.5 -right-1.5 grid place-items-center min-w-[18px] h-[18px] px-1 rounded-full bg-grad-primary text-white text-[10px] font-bold leading-none ring-2 ring-white dark:ring-page-dark">
        {count}
      </span>
    ) : null;

  const iconBtn =
    "grid place-items-center w-[38px] h-[38px] rounded-full text-ink-soft dark:text-white/70 transition-all hover:text-brand hover:bg-page-alt dark:hover:bg-white/5";

  return (
    <>
      {/* ========== ANNOUNCEMENT BAR ========== */}
      {announce && (
        <div className="relative bg-grad-primary text-white text-center text-[12.5px] sm:text-[13px] font-medium py-2 px-9">
          <span className="inline-flex items-center gap-2">
            <Truck size={15} strokeWidth={2} aria-hidden="true" />
            Free shipping over <strong className="font-semibold">$50</strong>
            <span className="hidden sm:inline opacity-70">·</span>
            <span className="hidden sm:inline opacity-90">Easy 30-day returns</span>
          </span>
          <button
            type="button"
            onClick={() => setAnnounce(false)}
            aria-label="Dismiss announcement"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 grid place-items-center w-6 h-6 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors"
          >
            <X size={14} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* ========== HEADER ========== */}
      <header
        id="navbar"
        ref={headerRef}
        className={`sticky top-0 z-50 backdrop-blur-md backdrop-saturate-[180%] bg-white/85 dark:bg-page-dark/85 border-b border-transparent transition-all${
          scrolled ? " scrolled" : ""
        }`}
      >
        {/* Main row */}
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-4 h-16">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 font-display font-bold text-[19px] text-ink dark:text-white flex-none"
              aria-label="LuxCart — Home"
            >
              <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#5b8dff]/15 to-[#8a5bff]/15">
                <BrandLogo className="w-[26px] h-[26px]" gradientId="logoNav" />
              </span>
              <span>
                Lux<span className="bg-grad-primary bg-clip-text text-transparent">Cart</span>
              </span>
            </a>

            {/* Inline search (desktop) */}
            <div className="hidden lg:flex flex-1 max-w-md mx-auto">
              <SearchField id="search-desktop" />
            </div>

            {/* Right cluster */}
            <div className="flex items-center gap-0.5 sm:gap-1 flex-none ml-auto lg:ml-0">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className={`${iconBtn} lg:hidden`}
                aria-label="Search"
                aria-expanded={searchOpen}
              >
                {searchOpen ? <X size={19} strokeWidth={2.2} aria-hidden="true" /> : <Search size={19} strokeWidth={2} aria-hidden="true" />}
              </button>

              <button id="themeToggle" type="button" onClick={toggleTheme} className={iconBtn} aria-label="Toggle dark mode">
                <Sun className="icon-sun" size={19} strokeWidth={2} aria-hidden="true" />
                <Moon className="icon-moon hidden" size={19} strokeWidth={2} aria-hidden="true" />
              </button>

              <button type="button" className={`${iconBtn} hidden sm:grid`} aria-label="Account">
                <User size={19} strokeWidth={2} aria-hidden="true" />
              </button>

              <button type="button" className={`${iconBtn} hidden sm:grid`} aria-label="Wishlist">
                <Heart size={19} strokeWidth={2} aria-hidden="true" />
              </button>

              <a
                href="#products"
                className="relative grid place-items-center w-[38px] h-[38px] rounded-full text-ink dark:text-white transition-all hover:text-brand hover:bg-page-alt dark:hover:bg-white/5"
                aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
              >
                <ShoppingBag size={20} strokeWidth={2} aria-hidden="true" />
                {cartBadge}
              </a>

              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="hamburger lg:hidden grid place-items-center w-10 h-10 border border-line dark:border-line-dark bg-white dark:bg-surface-dark rounded-[10px] text-ink dark:text-white ml-0.5"
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                aria-controls="mobileMenu"
              >
                <Menu size={20} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Collapsible search (mobile/tablet) */}
          {searchOpen && (
            <div className="lg:hidden pb-3 -mt-0.5">
              <SearchField id="search-mobile" autoFocus onSubmitted={() => setSearchOpen(false)} />
            </div>
          )}
        </div>

        {/* Category nav row (desktop) */}
        <div className="hidden lg:block border-t border-line/70 dark:border-line-dark/70">
          <div className="container max-w-[1200px] mx-auto px-6">
            <nav className="flex items-center justify-center gap-7 xl:gap-9 h-12" aria-label="Primary">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative flex items-center h-full text-[14px] font-medium tracking-tight transition-colors ${
                      isActive
                        ? "text-ink dark:text-white"
                        : "text-ink-soft dark:text-white/65 hover:text-ink dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`pointer-events-none absolute inset-x-0 -bottom-px h-[2.5px] rounded-full bg-grad-primary origin-center transition-all duration-300 ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* ========== MOBILE DRAWER ========== */}
      <div
        className={`drawer-backdrop fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300${
          drawerOpen ? " open" : ""
        }`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      <aside
        id="mobileMenu"
        className={`drawer fixed top-0 right-0 z-[70] h-[100dvh] w-[88vw] max-w-[340px] bg-page dark:bg-page-dark border-l border-line dark:border-line-dark shadow-2xl translate-x-full transition-transform duration-300 ease-out flex flex-col${
          drawerOpen ? " open" : ""
        }`}
        aria-hidden={!drawerOpen}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-line dark:border-line-dark">
          <a
            href="#home"
            onClick={closeDrawer}
            className="inline-flex items-center gap-2.5 font-display font-bold text-[17px] text-ink dark:text-white"
          >
            <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-to-br from-[#5b8dff]/15 to-[#8a5bff]/15">
              <BrandLogo className="w-6 h-6" gradientId="logoDrawer" />
            </span>
            <span>
              Lux<span className="bg-grad-primary bg-clip-text text-transparent">Cart</span>
            </span>
          </a>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={closeDrawer}
            className="grid place-items-center w-9 h-9 rounded-full border border-line dark:border-line-dark bg-white dark:bg-surface-dark text-ink-soft dark:text-white/70 transition-all hover:text-brand hover:border-brand hover:rotate-90"
            aria-label="Close menu"
          >
            <X size={16} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile primary">
          {/* Search inside drawer */}
          <div className="px-1 mb-3">
            <SearchField id="search-drawer" />
          </div>

          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href, icon: Icon, iconWrap }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeDrawer}
                  className="group flex items-center gap-3 px-3 py-3 text-[15px] font-medium text-ink dark:text-white rounded-xl transition-colors hover:bg-page-alt dark:hover:bg-white/5"
                >
                  <span className={`grid place-items-center w-9 h-9 rounded-lg transition-colors ${iconWrap}`}>
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="flex-1">{label}</span>
                  <ChevronRight
                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-ink-mute"
                    size={14}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Account / wishlist quick row */}
          <div className="mt-5 mx-1 grid grid-cols-2 gap-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-line dark:border-line-dark text-sm font-medium text-ink dark:text-white hover:border-brand hover:text-brand transition-colors"
            >
              <User size={16} strokeWidth={2} aria-hidden="true" /> Account
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-line dark:border-line-dark text-sm font-medium text-ink dark:text-white hover:border-brand hover:text-brand transition-colors"
            >
              <Heart size={16} strokeWidth={2} aria-hidden="true" /> Wishlist
            </button>
          </div>

          <div className="mt-5 mx-1 p-4 rounded-2xl border border-line dark:border-line-dark bg-page-alt dark:bg-page-dark-alt">
            <p className="text-[12px] font-bold uppercase tracking-[.1em] text-ink-mute mb-2">Need help?</p>
            <a
              href="mailto:support@luxcart.com"
              className="block text-sm font-semibold text-ink dark:text-white hover:text-brand transition-colors break-all"
            >
              support@luxcart.com
            </a>
            <a href="tel:+18005891234" className="block text-sm text-ink-soft dark:text-white/70 hover:text-brand transition-colors mt-1">
              +1 (800) 589-1234
            </a>
          </div>
        </nav>

        <div className="border-t border-line dark:border-line-dark p-4">
          <a href="#products" onClick={closeDrawer} className="btn btn-primary w-full py-3.5">
            Shop now
            <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </aside>
    </>
  );
}
