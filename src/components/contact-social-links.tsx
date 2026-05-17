import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  { href: "https://instagram.com/", label: "Instagram", icon: FaInstagram },
  { href: "https://facebook.com/", label: "Facebook", icon: FaFacebookF },
  { href: "https://t.me/", label: "Telegram", icon: FaTelegramPlane },
];

export function ContactSocialLinks() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/6 p-5 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.48)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-white/58 uppercase">
            Соцмережі
          </p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-white/74 sm:text-base">
            Слідкуйте за оновленнями або пишіть нам у зручному для вас каналі.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {socialLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="group flex items-center gap-3 rounded-[24px] border border-white/12 bg-white/8 px-4 py-4 text-white shadow-[0_18px_38px_-28px_rgba(0,0,0,0.56)] transition duration-300 hover:-translate-y-1 hover:border-white/22 hover:bg-white/13 hover:shadow-[0_24px_46px_-26px_rgba(0,0,0,0.62)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white transition duration-300 group-hover:border-white/24 group-hover:bg-white/16">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">{item.label}</span>
                <span className="block text-xs text-white/58">Відкрити профіль</span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
