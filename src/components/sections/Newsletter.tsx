"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck, Mail, Phone, MapPin, Check } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const CONTACT_INFO = [
  { icon: Mail, label: "Support", value: "support@luxcart.com", href: "mailto:support@luxcart.com" },
  { icon: Phone, label: "Call us", value: "+1 (800) 589-1234", href: "tel:+18005891234" },
  { icon: MapPin, label: "Flagship store", value: "21 Market Street · New York, NY", href: null },
] as const;

const PERKS = ["10% off your first order", "Early access to new drops", "Members-only deals & events"];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return setError("Please enter your email.");
    if (!EMAIL_RE.test(value)) return setError("Please enter a valid email address.");
    setError("");
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setDone(true);
      setEmail("");
    }, 700);
  };

  return (
    <section id="contact" className="py-[clamp(64px,9vw,112px)] bg-page dark:bg-page-dark">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] rounded-[28px] overflow-hidden shadow-big"
          data-reveal
          style={{ background: "linear-gradient(135deg, #1a1f3d 0%, #0e1124 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(138,91,255,.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(34,211,238,.15), transparent 50%)",
            }}
          />

          {/* Left: pitch + contact info */}
          <div className="relative p-10 sm:p-12 text-white z-10">
            <span className="eyebrow eyebrow-line text-white/90 [&::before]:bg-white/50">Join the club</span>
            <h2 className="font-display font-bold tracking-tight text-[clamp(26px,3.4vw,40px)] mt-4 mb-3.5 text-white">
              Get 10% off your first order.
            </h2>
            <p className="text-white/75 text-[15.5px] leading-[1.7] mb-7">
              Subscribe for early access to new arrivals, members-only sales, and a welcome discount — straight to your inbox.
            </p>

            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 mb-9">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-2.5 text-[14.5px] text-white/85">
                  <Check size={18} strokeWidth={3} className="flex-none p-0.5 bg-white/10 text-emerald-400 rounded-full" aria-hidden="true" />
                  {perk}
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-4 list-none p-0 m-0 pt-7 border-t border-white/10">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-3.5">
                  <span className="grid place-items-center w-[42px] h-[42px] rounded-xl text-white flex-none" style={{ backgroundColor: "rgba(255,255,255,.08)" }}>
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block text-[12px] font-semibold tracking-[.08em] uppercase text-white/55 mb-0.5">{label}</span>
                    {href ? (
                      <a href={href} className="text-white font-medium text-[15px] hover:text-[#b0c5ff]">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-[15px]">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: signup card */}
          <div className="relative z-10 p-10 sm:p-12 bg-white dark:bg-surface-dark rounded-t-[28px] lg:rounded-l-[28px] lg:rounded-tr-none flex flex-col justify-center">
            {done ? (
              <div className="text-center py-6">
                <span className="grid place-items-center w-16 h-16 mx-auto mb-5 rounded-full bg-emerald-500/12 text-emerald-500">
                  <CircleCheck size={32} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="font-display font-bold text-2xl mb-2">You&apos;re in! 🎉</h3>
                <p className="text-ink-soft dark:text-white/70 text-[15px] leading-[1.7] max-w-[360px] mx-auto">
                  Check your inbox for a confirmation and your <span className="font-semibold text-brand">10% off</span> welcome
                  code.
                </p>
                <button
                  type="button"
                  onClick={() => setDone(false)}
                  className="mt-6 text-sm font-semibold text-brand hover:underline"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit}>
                <h3 className="font-display font-bold text-2xl mb-1.5">Unlock your discount</h3>
                <p className="text-ink-soft dark:text-white/70 text-[14.5px] mb-6">No spam — just the good stuff. Unsubscribe anytime.</p>

                <label htmlFor="newsletterEmail" className="block text-[13px] font-semibold mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletterEmail"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className={`field-input${error ? " has-error" : ""}`}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={error ? "true" : undefined}
                />
                <span className={`field-error block min-h-[18px] mt-1.5 text-[12.5px] text-red-500 opacity-0 -translate-y-1 transition-all${error ? " show" : ""}`} aria-live="polite">
                  {error}
                </span>

                <button type="submit" disabled={busy} className="btn btn-primary w-full group mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  <span>{busy ? "Subscribing…" : "Get 10% off"}</span>
                  <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>

                <p className="text-[12px] text-ink-mute text-center mt-4 leading-relaxed">
                  By subscribing you agree to our Privacy Policy and consent to receive updates from LuxCart.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
