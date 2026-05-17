import Image from "next/image";
import { Clock3, MapPin, Phone } from "lucide-react";

const footerNavItems = [
  { href: "#services", label: "Послуги" },
  { href: "#products", label: "Товари" },
  { href: "#how-we-work", label: "Як працюємо" },
  { href: "#contacts", label: "Контакти" },
];

const storeAddress = "проспект Незалежності, 8, Долина, Івано-Франківська область, 77500";
const storePhone = "+380 (00) 000 00 00";
const storeHours = "Пн-Сб: 09:00-19:00";
const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-brand-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)_minmax(0,0.9fr)]">
          <div className="max-w-lg">
            <a
              href="#top"
              className="group inline-flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image
                src="/Luck_Dog_Logo.jpg"
                alt="Lucky Dog logo"
                width={52}
                height={52}
                className="rounded-2xl object-cover shadow-lg shadow-black/20 transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_16px_34px_-18px_rgba(0,0,0,0.6)]"
              />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-white/48 uppercase transition group-hover:text-white/66">
                  Зоокомплекс
                </p>
                <p className="font-heading text-xl font-bold text-white transition duration-300 group-hover:text-white/84">
                  Lucky Dog
                </p>
              </div>
            </a>

            <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">
              Магазин зоотоварів і базова допомога для тварин у теплому, спокійному форматі без
              зайвого стресу для власника.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/44 uppercase">
              Навігація
            </p>
            <nav className="mt-4 space-y-2.5">
              {footerNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium text-white/70 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/44 uppercase">
              Контакти
            </p>
            <div className="mt-4 space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/64" />
                <div>
                  <p className="text-xs text-white/42 uppercase">Адреса</p>
                  <p className="text-sm font-medium text-white/84">{storeAddress}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/64" />
                <div>
                  <p className="text-xs text-white/42 uppercase">Телефон</p>
                  <a
                    href="tel:+380000000000"
                    className="text-sm font-medium text-white/84 transition hover:text-white"
                  >
                    {storePhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-white/64" />
                <div>
                  <p className="text-xs text-white/42 uppercase">Графік</p>
                  <p className="text-sm font-medium text-white/84">{storeHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>{currentYear} Lucky Dog. Усі права захищено.</p>
          <p>Односторінковий сайт з фокусом на довіру, простоту і швидкий контакт.</p>
        </div>
      </div>
    </footer>
  );
}
