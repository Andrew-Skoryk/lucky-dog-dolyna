"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPinned, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "Послуги" },
  { href: "#products", label: "Товари" },
  { href: "#how-we-work", label: "Як працюємо" },
  { href: "#contacts", label: "Контакти" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("services");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen]);

  return (
    <div className="sticky top-3 z-50 mb-8">
      <motion.header
        initial={false}
        animate={{
          y: isScrolled ? 0 : 2,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={[
          "rounded-2xl border bg-white/85 px-4 shadow-sm backdrop-blur-xl sm:px-6",
          "border-brand-900/15",
          isScrolled ? "py-2.5" : "py-3.5",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/Luck_Dog_Logo.jpg"
              alt="Lucky Dog logo"
              width={52}
              height={52}
              className="rounded-xl object-cover"
              priority
            />
            <div>
              <p className="text-brand-700 text-xs font-semibold tracking-[0.16em] uppercase">
                Зоокомплекс
              </p>
              <p className="font-heading text-brand-900 text-lg leading-tight font-bold sm:text-xl">
                Lucky Dog
              </p>
              <p className="text-xs text-zinc-600">Магазин + швидка допомога</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative py-1 text-sm font-semibold transition",
                    isActive ? "text-brand-900" : "hover:text-brand-900 text-zinc-600",
                  ].join(" ")}
                >
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="active-nav"
                      className="bg-brand-900 absolute inset-x-0 -bottom-1.5 h-0.5 rounded-full"
                    />
                  ) : null}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#contacts"
              className="hover:bg-brand-900/10 text-brand-900 border-brand-900/30 rounded-full border px-4 py-2 text-sm font-semibold transition"
            >
              <span className="inline-flex items-center gap-2">
                <MapPinned className="h-4 w-4" />
                Маршрут
              </span>
            </a>
            <a
              href="tel:+380000000000"
              className="bg-brand-900 hover:bg-brand-700 rounded-full px-4 py-2 text-sm font-semibold text-white transition"
            >
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Консультація
              </span>
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-brand-900 hover:bg-brand-900/10 border-brand-900/20 inline-flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              aria-label="Закрити меню"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] md:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="border-brand-900/20 fixed inset-x-4 top-24 z-50 rounded-3xl border bg-white p-5 shadow-2xl md:hidden"
            >
              <div className="mb-4 space-y-2">
                {navItems.map((item) => {
                  const sectionId = item.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={[
                        "block rounded-xl px-3 py-2 text-base font-semibold transition",
                        isActive
                          ? "bg-brand-900 text-white"
                          : "text-brand-900 hover:bg-brand-900/10",
                      ].join(" ")}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#contacts"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-900 hover:bg-brand-900/10 border-brand-900/30 rounded-full border px-4 py-2 text-center text-sm font-semibold transition"
                >
                  Маршрут
                </a>
                <a
                  href="tel:+380000000000"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-brand-900 hover:bg-brand-700 rounded-full px-4 py-2 text-center text-sm font-semibold text-white transition"
                >
                  Подзвонити
                </a>
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
