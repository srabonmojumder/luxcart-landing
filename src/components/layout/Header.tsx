"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Search,
  MapPin,
  ChevronDown,
  ShoppingCart,
  User,
  Menu,
  X,
  LayoutGrid,
  Tag,
  Sparkles,
} from "lucide-react";
import { TOP_CATEGORIES, ALL_CATEGORIES } from "@/lib/site-data";
import { useCart } from "@/lib/cart";

/* LuxeCart wordmark */
function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-extrabold tracking-tight text-ink dark:text-white ${className}`}>
      Luxe<span className="text-brand">Cart</span>
    </span>
  );
}

/* Country flag — pulls real flag from flagcdn.com by ISO-2 code (e.g. "AE", "BD"). */
function Flag({ code }: { code: string }) {
  const c = code.trim().toLowerCase();
  return (
    <span className="relative inline-flex h-[18px] w-[18px] overflow-hidden rounded-full ring-1 ring-line bg-page-alt">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://flagcdn.com/w40/${c}.png`}
        srcSet={`https://flagcdn.com/w80/${c}.png 2x`}
        alt={code.toUpperCase()}
        width={18}
        height={18}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function SearchField({ id, autoFocus = false }: { id: string; autoFocus?: boolean }) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="search-field flex items-center w-full h-11 rounded-full bg-page-alt dark:bg-white/[0.06] ring-1 ring-line focus-within:ring-2 focus-within:ring-brand/50 transition-all"
    >
      <input
        id={id}
        type="search"
        autoFocus={autoFocus}
        placeholder="Search for any product or brand"
        aria-label="Search products"
        className="flex-1 min-w-0 h-full bg-transparent pl-5 pr-3 text-sm text-ink dark:text-white placeholder:text-ink-mute outline-none [&::-webkit-search-cancel-button]:appearance-none"
      />
      <button
        type="submit"
        aria-label="Search"
        className="grid place-items-center w-9 h-9 mr-1 rounded-full bg-brand text-white hover:bg-brand-strong transition-colors flex-none"
      >
        <Search size={17} strokeWidth={2.4} aria-hidden="true" />
      </button>
    </form>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [city, setCity] = useState("Dubai");
  const [countryCode, setCountryCode] = useState("AE");
  const [locBusy, setLocBusy] = useState(false);
  const { count } = useCart();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Initial city + country = IP-based lookup (no permission prompt). */
  useEffect(() => {
    let alive = true;
    const apply = (name?: string | null, code?: string | null) => {
      if (!alive) return;
      if (name) setCity(name);
      if (code) setCountryCode(code.toUpperCase());
    };
    fetch("https://ipwho.is/")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { success?: boolean; city?: string; country_code?: string } | null) => {
        if (d?.success && (d.city || d.country_code)) apply(d.city, d.country_code);
        else throw new Error("primary failed");
      })
      .catch(() =>
        // Fallback if ipwho.is is unavailable or blocked.
        fetch("https://get.geojs.io/v1/ip/geo.json")
          .then((r) => (r.ok ? r.json() : null))
          .then((d: { city?: string; country_code?: string } | null) => apply(d?.city, d?.country_code))
          .catch(() => {})
      );
    return () => {
      alive = false;
    };
  }, []);

  /* Click handler: ask the browser for a precise location, reverse-geocode it. */
  const detectPrecise = useCallback(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation || locBusy) return;
    setLocBusy(true);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const r = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`
          );
          const d: { city?: string; locality?: string; principalSubdivision?: string; countryCode?: string } = await r.json();
          const name = d.city || d.locality || d.principalSubdivision;
          if (name) setCity(name);
          if (d.countryCode) setCountryCode(d.countryCode.toUpperCase());
        } catch {}
        setLocBusy(false);
      },
      () => setLocBusy(false),
      { timeout: 10000, maximumAge: 60000 }
    );
  }, [locBusy]);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (!drawerOpen) return;
    document.body.classList.add("drawer-open");
    closeBtnRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeDrawer();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("drawer-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen, closeDrawer]);

  const cartBadge = (
    <span className="absolute -top-1.5 -right-1.5 grid place-items-center min-w-[18px] h-[18px] px-1 rounded-full bg-brand text-white text-[10px] font-bold leading-none ring-2 ring-white dark:ring-page-dark">
      {count}
    </span>
  );

  return (
    <>
      <header
        id="navbar"
        className={`sticky top-0 z-50 bg-white dark:bg-page-dark transition-shadow ${
          scrolled ? "shadow-soft" : ""
        }`}
      >
        {/* ===== Top row ===== */}
        <div className="container max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 sm:gap-5 h-[68px]">
            {/* Logo */}
            <a href="#home" aria-label="LuxeCart — Home" className="flex-none">
              <Logo className="text-[24px]" />
            </a>

            {/* Search (desktop) */}
            <div className="hidden md:flex flex-1 max-w-[460px]">
              <SearchField id="search-desktop" />
            </div>

            {/* Right cluster */}
            <div className="flex items-center gap-2 sm:gap-5 ml-auto">
              {/* Delivery location — IP-based on load, click to use precise geolocation */}
              <button
                type="button"
                onClick={detectPrecise}
                disabled={locBusy}
                aria-label="Detect my current location"
                className="hidden lg:flex items-center gap-2 text-left group disabled:opacity-60 disabled:cursor-wait"
              >
                <MapPin size={18} strokeWidth={2} className="text-ink-soft group-hover:text-brand transition-colors" aria-hidden="true" />
                <span className="leading-tight">
                  <span className="block text-[11px] text-ink-mute">Delivering to {city}</span>
                  <span className="block text-[12.5px] font-semibold text-ink dark:text-white group-hover:text-brand transition-colors">
                    {locBusy ? "Detecting…" : "Update Location"}
                  </span>
                </span>
              </button>

              {/* Country (dynamic — driven by IP / geolocation) */}
              <button type="button" className="hidden lg:flex items-center gap-1.5 text-[13px] font-semibold text-ink dark:text-white hover:text-brand transition-colors">
                <Flag code={countryCode} />
                {countryCode}
                <ChevronDown size={14} strokeWidth={2.5} aria-hidden="true" />
              </button>

              {/* Search toggle (mobile) */}
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                className="md:hidden grid place-items-center w-9 h-9 rounded-full text-ink-soft hover:text-brand hover:bg-page-alt transition-colors"
                aria-label="Search"
              >
                {searchOpen ? <X size={20} aria-hidden="true" /> : <Search size={20} aria-hidden="true" />}
              </button>

              {/* Cart */}
              <a href="#deals" className="relative flex items-center gap-2 text-ink dark:text-white hover:text-brand transition-colors" aria-label={`Cart, ${count} items`}>
                <span className="relative">
                  <ShoppingCart size={22} strokeWidth={2} aria-hidden="true" />
                  {cartBadge}
                </span>
                <span className="hidden sm:inline text-[13px] font-semibold">Cart</span>
              </a>

              {/* Sign in */}
              <a href="https://luxecart-store.web.app/" className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-ink dark:text-white hover:text-brand transition-colors">
                <User size={20} strokeWidth={2} aria-hidden="true" />
                Sign In
              </a>

              {/* Hamburger (mobile/tablet) */}
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="lg:hidden grid place-items-center w-9 h-9 rounded-lg text-ink dark:text-white hover:bg-page-alt transition-colors"
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Search (mobile collapsible) */}
          {searchOpen && (
            <div className="md:hidden pb-3">
              <SearchField id="search-mobile" autoFocus />
            </div>
          )}
        </div>

        {/* ===== Category nav row (desktop) ===== */}
        <div className="hidden lg:block border-t border-line/80 dark:border-line-dark/80">
          <div className="container max-w-[1280px] mx-auto px-6">
            <div className="flex items-center gap-6 h-11 text-[13px]">
              {/* All categories */}
              <div
                className="relative"
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
              >
                <button type="button" className="flex items-center gap-2 font-semibold text-ink dark:text-white">
                  <LayoutGrid size={16} strokeWidth={2.2} className="text-brand" aria-hidden="true" />
                  All Categories
                  <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
                {catOpen && (
                  <div className="absolute left-0 top-full pt-2 w-60 z-40">
                    <ul className="rounded-2xl border border-line bg-white dark:bg-surface-dark shadow-big py-2">
                      {ALL_CATEGORIES.map((c) => (
                        <li key={c}>
                          <a href="#categories" className="block px-4 py-2 text-[13px] text-ink-soft dark:text-white/80 hover:bg-page-alt dark:hover:bg-white/5 hover:text-brand transition-colors">
                            {c}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Top categories */}
              <nav className="flex items-center gap-5 overflow-x-auto scrollbar-none" aria-label="Categories">
                {TOP_CATEGORIES.map((c) => (
                  <a
                    key={c}
                    href="#categories"
                    className="whitespace-nowrap font-medium text-ink-soft dark:text-white/70 hover:text-brand transition-colors"
                  >
                    {c}
                  </a>
                ))}
              </nav>

              {/* Right shortcuts */}
              <div className="ml-auto flex items-center gap-5">
                <a href="#deals" className="flex items-center gap-1.5 font-semibold text-brand whitespace-nowrap">
                  <Tag size={15} strokeWidth={2.2} aria-hidden="true" />
                  Best Deals
                </a>
                <a href="#emox-ai" className="flex items-center gap-1.5 font-semibold text-ink dark:text-white whitespace-nowrap">
                  Luxe<span className="text-brand">Cart</span><span className="font-bold ml-1">Live</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-brand/10 text-brand text-[10px] font-bold">
                    <Sparkles size={10} strokeWidth={2.5} aria-hidden="true" /> AI
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Mobile drawer ===== */}
      <div
        className={`fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={closeDrawer}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] h-[100dvh] w-[86vw] max-w-[330px] bg-white dark:bg-page-dark shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-line dark:border-line-dark">
          <Logo className="text-[20px]" />
          <button
            ref={closeBtnRef}
            type="button"
            onClick={closeDrawer}
            className="grid place-items-center w-9 h-9 rounded-full border border-line dark:border-line-dark text-ink-soft hover:text-brand hover:border-brand transition-colors"
            aria-label="Close menu"
          >
            <X size={16} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <div className="flex gap-3 mb-5">
            <a href="https://luxecart-store.web.app/" onClick={closeDrawer} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand text-white text-sm font-semibold">
              <User size={16} aria-hidden="true" /> Sign In
            </a>
            <button type="button" className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-line text-sm font-semibold text-ink dark:text-white">
              <Flag code={countryCode} /> {countryCode}
            </button>
          </div>

          <p className="px-1 mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-ink-mute">Categories</p>
          <ul className="flex flex-col">
            {ALL_CATEGORIES.map((c) => (
              <li key={c}>
                <a
                  href="#categories"
                  onClick={closeDrawer}
                  className="block px-3 py-3 text-[15px] font-medium text-ink dark:text-white rounded-xl hover:bg-page-alt dark:hover:bg-white/5 transition-colors"
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <a href="#deals" onClick={closeDrawer} className="flex items-center gap-2 px-3 py-3 rounded-xl text-[15px] font-semibold text-brand bg-brand/5">
              <Tag size={17} aria-hidden="true" /> Best Deals
            </a>
            <a href="#emox-ai" onClick={closeDrawer} className="flex items-center gap-2 px-3 py-3 rounded-xl text-[15px] font-semibold text-ink dark:text-white bg-page-alt dark:bg-white/5">
              <Sparkles size={17} className="text-brand" aria-hidden="true" /> LuxeCart Live
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
