"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPinned, Menu, Phone, X } from "lucide-react";
import { type MouseEvent, useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "Послуги" },
  { href: "#products", label: "Товари" },
  { href: "#how-we-work", label: "Як працюємо" },
  { href: "#contacts", label: "Контакти" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const getScrollOffset = () => (window.innerWidth >= 768 ? 124 : 108);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 56);
      setScrollProgress(Math.min(scrollY / 180, 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      const offset = getScrollOffset();
      const marker = offset + 12;
      let current = "";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const start = rect.top;
        const end = rect.bottom;

        if (start <= marker && end > marker) {
          current = section.id;
          break;
        }
      }

      if (!current) {
        const nextVisibleSection = sections.find(
          (section) => section.getBoundingClientRect().top > marker
        );
        current = nextVisibleSection?.id ?? sections.at(-1)?.id ?? "";
      }

      if (window.scrollY < 120) {
        current = "";
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (typeof window === "undefined") return;

    if (sectionId === "top") {
      setActiveSection("");
      setIsMenuOpen(false);
      window.history.replaceState(null, "", "#top");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) return;

    const offset = getScrollOffset();
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    setActiveSection(sectionId);
    setIsMenuOpen(false);
    window.history.replaceState(null, "", `#${sectionId}`);
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  const shellClasses = isScrolled
    ? "border-brand-900/12 bg-white/78 text-brand-950 shadow-[0_20px_65px_-28px_rgba(16,24,40,0.34)] backdrop-blur-2xl"
    : "border-white/16 bg-white/8 text-white shadow-[0_24px_70px_-34px_rgba(10,15,30,0.5)] backdrop-blur-md";
  const navShellClasses = isScrolled
    ? "border-brand-900/10 bg-brand-950/3"
    : "border-white/14 bg-white/8";
  const ghostButtonClasses = isScrolled
    ? "border-brand-900/18 bg-white/70 text-brand-900 hover:bg-brand-900/6"
    : "border-white/20 bg-white/8 text-white hover:bg-white/14";
  const primaryButtonClasses = isScrolled
    ? "bg-brand-900 text-white hover:bg-brand-700"
    : "bg-white text-brand-950 hover:bg-white/88";
  const activeItemClasses = isScrolled ? "text-brand-950" : "text-white";
  const idleItemClasses = isScrolled
    ? "text-zinc-600 hover:text-brand-900"
    : "text-white/72 hover:text-white";
  const shellStyle = {
    backgroundColor: `rgba(255,255,255,${0.08 + scrollProgress * 0.7})`,
    borderColor:
      scrollProgress > 0.45
        ? `rgba(39,51,91,${0.08 + scrollProgress * 0.08})`
        : `rgba(255,255,255,${0.16 - scrollProgress * 0.06})`,
    boxShadow:
      scrollProgress > 0.08
        ? `0 20px 65px -28px rgba(16,24,40,${0.12 + scrollProgress * 0.22})`
        : "0 24px 70px -34px rgba(10,15,30,0.5)",
  };
  const navShellStyle = {
    backgroundColor:
      scrollProgress > 0.45
        ? "rgba(31,42,74,0.03)"
        : `rgba(255,255,255,${0.08 + scrollProgress * 0.04})`,
    borderColor:
      scrollProgress > 0.45
        ? "rgba(39,51,91,0.1)"
        : `rgba(255,255,255,${0.14 - scrollProgress * 0.04})`,
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: isScrolled ? 0 : 3 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className={`rounded-[28px] border px-4 sm:px-5 ${shellClasses}`}
        style={shellStyle}
      >
        <div className={`flex items-center justify-between gap-4 ${isScrolled ? "py-3" : "py-4"}`}>
          <a
            href="#top"
            onClick={(event) => handleNavClick(event, "top")}
            className="group flex min-w-0 items-center gap-3"
          >
            <Image
              src="/Luck_Dog_Logo.jpg"
              alt="Lucky Dog logo"
              width={isScrolled ? 46 : 54}
              height={isScrolled ? 46 : 54}
              className="rounded-2xl object-cover shadow-lg shadow-black/15 transition-all duration-300"
              priority
            />
            <div className="min-w-0">
              <p
                className={`text-[11px] font-semibold tracking-[0.24em] uppercase transition ${
                  isScrolled ? "text-brand-700" : "text-white/70"
                }`}
              >
                Зоокомплекс
              </p>
              <p
                className={`font-heading truncate text-lg leading-tight font-bold transition sm:text-xl ${
                  isScrolled ? "text-brand-950 group-hover:text-brand-700" : "text-white"
                }`}
              >
                Lucky Dog
              </p>
            </div>
          </a>

          <nav
            className={`hidden items-center gap-1 rounded-full border px-2 py-1.5 md:flex ${navShellClasses}`}
            style={navShellStyle}
          >
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, sectionId)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm leading-none font-semibold transition ${
                    isActive ? activeItemClasses : idleItemClasses
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className={`absolute inset-0 rounded-full ${
                        isScrolled ? "bg-brand-900/8" : "bg-white/12"
                      }`}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#contacts"
              onClick={(event) => handleNavClick(event, "contacts")}
              className={`focus-visible:ring-brand-700 inline-flex h-11 items-center justify-center gap-2 rounded-full border px-4 text-sm leading-none font-semibold transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${ghostButtonClasses}`}
            >
              <MapPinned className="h-4 w-4 shrink-0" />
              Маршрут
            </a>
            <a
              href="tel:+380000000000"
              className={`focus-visible:ring-brand-700 inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm leading-none font-semibold transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${primaryButtonClasses}`}
            >
              <Phone className="h-4 w-4 shrink-0" />
              Консультація
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`focus-visible:ring-brand-700 inline-flex h-11 w-11 items-center justify-center rounded-full border transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden ${
              isScrolled
                ? "border-brand-900/16 text-brand-950 hover:bg-brand-900/6 bg-white/72"
                : "border-white/20 bg-white/8 text-white hover:bg-white/14"
            }`}
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
              className="bg-brand-950/35 fixed inset-0 z-40 backdrop-blur-[3px] md:hidden"
            />
            <motion.nav
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-brand-950/94 shadow-brand-950/40 fixed inset-x-4 top-24 z-50 rounded-[28px] border border-white/15 p-5 text-white shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="mb-5">
                <p className="text-[11px] font-semibold tracking-[0.24em] text-white/60 uppercase">
                  Навігація
                </p>
              </div>
              <div className="mb-5 space-y-2">
                {navItems.map((item) => {
                  const sectionId = item.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => handleNavClick(event, sectionId)}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-base leading-none font-semibold transition ${
                        isActive
                          ? "text-brand-950 bg-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="#contacts"
                  onClick={(event) => handleNavClick(event, "contacts")}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/8 px-4 text-center text-sm leading-none font-semibold text-white transition hover:bg-white/14 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  Маршрут
                </a>
                <a
                  href="tel:+380000000000"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-950 inline-flex h-11 items-center justify-center rounded-full bg-white px-4 text-center text-sm leading-none font-semibold transition hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  Подзвонити
                </a>
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
