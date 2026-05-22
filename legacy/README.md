# Trust-IT (BD) Ltd — Junior Frontend Developer Assessment

A fully responsive, production-quality landing page for **Trust-IT (BD) Ltd**, built as part of the Junior Frontend Developer technical assessment.

Built with **only** HTML5, CSS3, and Vanilla JavaScript — no frameworks, no build step, no external CSS/JS dependencies (just web fonts).

![HTML5](https://img.shields.io/badge/HTML5-orange) ![CSS3](https://img.shields.io/badge/CSS3-blue) ![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-yellow) ![Responsive](https://img.shields.io/badge/Responsive-✓-success)

---

## 1. Project Overview

A single-page marketing website for a fictional IT company headquartered in Uttara, Dhaka. The page demonstrates the full spectrum of modern frontend fundamentals: semantic HTML, mobile-first responsive CSS, theme switching, scroll-driven animations, form validation, and live REST API integration — all in plain Vanilla JS.

The design intentionally feels custom rather than template-driven, with a strong visual hierarchy, soft shadows, gradient accents, glass-morphism touches, and considered micro-interactions.

---

## 2. Technologies Used

| Layer    | Tools                                                                                  |
| -------- | -------------------------------------------------------------------------------------- |
| Markup   | HTML5 — semantic landmarks, ARIA attributes, OpenGraph & SEO meta tags                |
| Styling  | **Tailwind CSS v3** (via Play CDN) — utility-first styling, custom theme config (brand colors, shadows, gradients, keyframes, animations), `dark:` variant for theme switching. A small custom `style.css` (~130 lines) layers in the few effects Tailwind can't easily express (marquee fade-mask, hero grid mask, hamburger morph, validation checkmark) |
| Scripts  | Vanilla JavaScript (ES6+) — `IntersectionObserver`, `localStorage`, custom form validation |
| Fonts    | Google Fonts — *Inter* (UI), *Space Grotesk* (display), *JetBrains Mono* (code preview) |
| Iconography | Inline SVG (no external icon library)                                              |

---

## 3. Features

### Required sections (per brief)

- **Responsive Navbar** — sticky, glass-blur background, with a logo, links, theme toggle, and CTA. Collapses to an animated hamburger menu on mobile, with ESC + outside-click dismissal.
- **Hero Section** — strong headline, gradient orb backgrounds, animated grid overlay, glass-morphism code preview card, floating credibility chips, and dual CTAs.
- **Services Section** — 6 service cards (Cloud, Cybersecurity, Custom Dev, AI, DevOps, Strategy) with color-tinted icons, hover lift, and gradient overlay. Three-column on desktop, two on tablet, single on mobile.
- **About Section** — two-column layout with a layered visual stack (avatar card + floating credentials) and a benefits checklist.
- **Contact Form** — Name, Email, Message fields with **real-time JavaScript validation** (empty checks, min length, regex email) and dynamic inline error messages. Shows a success state after a valid submission.

### Bonus features delivered

- ✅ **Dark / light mode toggle** — persisted in `localStorage`, also respects `prefers-color-scheme`
- ✅ **Smooth scrolling** — with offset compensation for the sticky header
- ✅ **Animations & transitions** — scroll reveals via `IntersectionObserver`, hover lifts, animated bars, floating chips, hamburger morph
- ✅ **Bonus *Insights* section** — three blog-post cards with custom inline-SVG cover graphics (no external assets, no broken image links)
- ✅ **SEO-friendly structure** — semantic landmarks, descriptive `<title>`, meta description/keywords, OpenGraph tags, `lang` attribute
- ✅ **Accessibility improvements** — skip-to-content link, focus-visible rings, ARIA attributes (`aria-expanded`, `aria-live`, `aria-invalid`, `aria-busy`), decorative SVGs marked `aria-hidden`, full keyboard navigation, `prefers-reduced-motion` support, WCAG AA contrast in both themes
- ✅ **Active nav-link highlighting** based on scroll position
- ✅ **Back-to-top button** that fades in after scroll

### Performance & quality

- No JavaScript frameworks — entire JS bundle is ~9 KB unminified
- Tailwind CSS via Play CDN for development simplicity (zero install). For production, swap to the Tailwind CLI to generate a tree-shaken ~10 KB stylesheet
- Web fonts preconnected
- No layout shifts (explicit aspect ratios on cards/images)
- Zero network calls beyond fonts — fully self-contained

---

## 4. Project Structure

```
project/
│
├── index.html          # Single-page semantic markup
├── css/
│   └── style.css       # Tokens → utilities → components → layouts → responsive
├── js/
│   └── app.js          # Theme, menu, scroll, reveals, form validation
├── assets/
│   ├── images/         # (Reserved — all visuals are inline SVG / CSS gradients)
│   └── icons/          # (Reserved — icons are inline SVG)
└── README.md
```

---

## 5. Instructions to Run the Project

This project has **zero build steps** and **zero install steps**. You can run it three ways:

### Option A — Open directly in a browser

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Option B — Serve with a local web server (recommended)

```bash
# Using Python (pre-installed on most systems)
python3 -m http.server 8080

# Or using Node.js
npx serve .
```

Then open **http://localhost:8080** in your browser.

### Option C — VS Code Live Server

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

---

## 6. Deployment

The project is fully static and can be deployed in seconds to any of the following:

### GitHub Pages

```bash
# Push to a GitHub repository, then in repo Settings → Pages:
# Source: Deploy from branch → main → / (root) → Save
```

### Netlify

```bash
# Drag-and-drop the project folder onto https://app.netlify.com/drop
# OR connect the repo and Netlify will auto-detect the static site
```

### Vercel

```bash
npx vercel --prod
```

No build configuration is needed — Vercel/Netlify will serve `index.html` directly.

---

## 7. Browser Support

Tested on the latest two versions of Chrome, Edge, Safari (incl. iOS), and Firefox. Uses widely-supported modern features (`color-mix()`, `backdrop-filter`, CSS custom properties, IntersectionObserver, fetch). Graceful fallbacks are applied where needed.

---

## 8. Evaluation Criteria — Self-Assessment

| Criteria                    | Notes                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| HTML Structure & Semantics  | Semantic landmarks, ARIA, OG/SEO meta, skip link                                              |
| CSS Design & Responsiveness | Token-driven, mobile-first, three breakpoints (1024 / 768 / 480), fluid type via `clamp()`    |
| JavaScript Functionality    | Validation, theme toggle, mobile menu, scroll reveals, smooth scroll, active nav highlighting  |
| Code Quality & Organization | Sectioned modules, IIFE scope, defensive coding, no global pollution                          |
| UI/UX & Creativity          | Custom palette, glass code card, floating chips, layered visual stack — not template-based   |
| Performance & Optimization  | No frameworks, no network calls, web fonts preconnected, ~7 KB JS                             |

---

## Submission

Built by the candidate as a submission for:

> **Junior Frontend Developer – Technical Assessment Task**
> Trust-IT (BD) Ltd · Uttara, Dhaka, Bangladesh
> Submission deadline: 5 May 2026
