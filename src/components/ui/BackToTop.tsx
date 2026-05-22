"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="backToTop"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-6 bottom-6 w-11 h-11 grid place-items-center bg-grad-primary text-white border-0 rounded-full shadow-soft opacity-0 pointer-events-none translate-y-2 transition-all z-40 hover:-translate-y-0.5 hover:brightness-110${
        show ? " show" : ""
      }`}
      aria-label="Back to top"
    >
      <ChevronUp size={18} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
