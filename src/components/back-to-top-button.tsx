"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.history.replaceState(null, "", "#top");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Повернутися нагору"
      onClick={scrollToTop}
      className={`group border-brand-900/16 text-brand-950 focus-visible:ring-brand-700 fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border bg-white/92 shadow-[0_16px_40px_-18px_rgba(16,24,40,0.45)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_46px_-18px_rgba(16,24,40,0.54)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none sm:right-8 sm:bottom-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
