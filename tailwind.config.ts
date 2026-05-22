import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      // The original markup uses 4.5 (e.g. mb-4.5 / gap-4.5), which isn't in
      // Tailwind's default scale — add it so the intended spacing renders.
      spacing: {
        "4.5": "1.125rem",
      },
      colors: {
        brand: {
          DEFAULT: "#4f6dff",
          strong: "#3a55e6",
          soft: "#eaeeff",
          accent: "#8a5bff",
          cyan: "#22d3ee",
        },
        ink: {
          DEFAULT: "#0b1020",
          soft: "#4a5266",
          mute: "#7b8194",
        },
        page: {
          DEFAULT: "#ffffff",
          alt: "#f6f8fc",
          dark: "#0a0d1a",
          "dark-alt": "#0f1326",
        },
        surface: {
          DEFAULT: "#ffffff",
          dark: "#161b36",
        },
        line: {
          DEFAULT: "#e6e9f2",
          strong: "#d3d8e6",
          dark: "#232a4a",
          "dark-strong": "#2e3760",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 16px rgba(15,23,42,.07), 0 2px 4px rgba(15,23,42,.04)",
        big: "0 24px 60px -20px rgba(15,23,42,.25), 0 10px 24px -12px rgba(15,23,42,.15)",
        glow: "0 30px 80px -30px rgba(79,109,255,.55)",
        "big-dark": "0 30px 70px -20px rgba(0,0,0,.65), 0 12px 28px -10px rgba(0,0,0,.5)",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #5b8dff 0%, #8a5bff 100%)",
        "grad-text": "linear-gradient(135deg, #5b8dff 0%, #8a5bff 60%, #22d3ee 100%)",
        "grad-hero-light":
          "radial-gradient(ellipse at top right, rgba(138,91,255,.14), transparent 55%), radial-gradient(ellipse at bottom left, rgba(79,109,255,.12), transparent 55%)",
        "grad-hero-dark":
          "radial-gradient(ellipse at top right, rgba(138,91,255,.25), transparent 55%), radial-gradient(ellipse at bottom left, rgba(34,211,238,.14), transparent 55%)",
      },
      animation: {
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        float: "float 12s ease-in-out infinite",
        "float-y": "floatY 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        reveal: "revealIn .8s cubic-bezier(.16,1,.3,1) both",
        "bar-grow": "barGrow 1.6s cubic-bezier(.16,1,.3,1) forwards",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.15)", opacity: ".65" },
        },
        float: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-20px)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        revealIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        barGrow: {
          from: { width: "0" },
          to: { width: "var(--w)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
