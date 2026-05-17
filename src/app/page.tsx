import Image from "next/image";
import {
  Clock3,
  HeartPulse,
  MapPin,
  PawPrint,
  Phone,
  ShoppingBag,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { BackToTopButton } from "@/components/back-to-top-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const heroImage =
  "https://images.unsplash.com/photo-1768084368558-0c4f68278309?auto=format&fit=crop&w=2400&q=80";

const serviceCards: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Stethoscope,
    title: "Швидка підтримка",
    description:
      "Підкажемо, що робити зараз, і коли вже потрібен глибший огляд або повторний візит.",
  },
  {
    icon: ShoppingBag,
    title: "Розумний підбір товарів",
    description: "Не просто продаємо, а радимо під вік, звички та комфорт конкретного улюбленця.",
  },
  {
    icon: HeartPulse,
    title: "Турбота без стресу",
    description:
      "Спокійна комунікація, прості пояснення і теплий сервіс для молодих сімей та зайнятих власників.",
  },
];

const productCards: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: ShoppingBag,
    title: "Корм і ласощі",
    description: "Щоденні раціони, лікувальні лінійки та смаколики для заохочення.",
  },
  {
    icon: PawPrint,
    title: "Амуніція",
    description: "Повідці, нашийники, шлеї, переноски та аксесуари для прогулянок.",
  },
  {
    icon: HeartPulse,
    title: "Гігієна і догляд",
    description: "Шампуні, засоби для лап і вух, базова профілактика і щоденний комфорт.",
  },
];

const workSteps: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Phone,
    title: "1. Звернення",
    description: "Пишете або телефонуєте, коротко описуєте стан тварини та ваш запит.",
  },
  {
    icon: HeartPulse,
    title: "2. Допомога",
    description: "Ми оцінюємо ситуацію, даємо чіткі рекомендації та план наступних кроків.",
  },
  {
    icon: ShoppingBag,
    title: "3. Підтримка",
    description:
      "За потреби одразу підбираємо товари для догляду, відновлення чи щоденного комфорту.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1745236782897-ad5ce0a3b9af?auto=format&fit=crop&w=1400&q=80",
    alt: "Пес дивиться на господаря на заході сонця",
  },
  {
    src: "https://images.unsplash.com/photo-1741764005023-0eb0c2389894?auto=format&fit=crop&w=1400&q=80",
    alt: "Домашній пес поруч із власником",
  },
  {
    src: "https://images.unsplash.com/photo-1747577672787-56218a6cbc87?auto=format&fit=crop&w=1400&q=80",
    alt: "Собака отримує смаколик під час тренування",
  },
  {
    src: "https://images.unsplash.com/photo-1768658773320-919944f76a0f?auto=format&fit=crop&w=1400&q=80",
    alt: "Портрет золотистого ретривера",
  },
  {
    src: "https://images.unsplash.com/photo-1765160602628-6a6296e1da4a?auto=format&fit=crop&w=1400&q=80",
    alt: "Щасливий ретривер на подвір'ї",
  },
  {
    src: "https://images.unsplash.com/photo-1763490538796-1cb248903457?auto=format&fit=crop&w=1400&q=80",
    alt: "Людина піклується про улюбленця на прогулянці",
  },
];

const storeAddress = "проспект Незалежності, 8, Долина, Івано-Франківська область, 77500";
const storePhone = "+380 (00) 000 00 00";
const storeHours = "Пн-Сб: 09:00-19:00";
const encodedMapAddress = encodeURIComponent(storeAddress);

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-[radial-gradient(circle_at_top_left,rgba(244,162,97,0.16),transparent_24%),radial-gradient(circle_at_top_right,rgba(39,51,91,0.12),transparent_22%),linear-gradient(180deg,#fffefc_0%,#fffefc_55%,#f7f8fb_100%)] text-zinc-900">
      <div className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-5 pt-4 sm:px-8 lg:px-12">
        <SiteHeader />
      </div>

      <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src={heroImage}
          alt="Щасливий собака на прогулянці"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,28,0.28)_0%,rgba(10,16,28,0.56)_32%,rgba(10,16,28,0.82)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold tracking-[0.26em] text-white/72 uppercase">
              Магазин + турбота + допомога
            </p>
            <h1 className="font-heading mb-5 text-4xl leading-[0.92] font-bold text-white sm:text-5xl lg:text-7xl">
              Зоокомплекс, де улюбленцю добре з першого кроку
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              Lucky Dog поєднує зоомагазин і базову ветеринарну підтримку. Ми підкажемо,
              зорієнтуємо, підберемо товари і створимо відчуття, що про вашого хвостика тут дійсно
              дбають.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+380000000000"
                className="text-brand-950 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold shadow-[0_20px_44px_-24px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.5)]"
              >
                Швидка консультація
              </a>
              <a
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/45 bg-white/8 px-6 text-sm font-semibold text-white shadow-[0_18px_40px_-26px_rgba(0,0,0,0.34)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/14 hover:shadow-[0_22px_46px_-24px_rgba(0,0,0,0.42)]"
              >
                Подивитися товари
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#fffefc]" />
      </section>

      <main className="relative z-10 -mt-8 sm:-mt-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
          <section id="services" className="mb-12 scroll-mt-32">
            <div className="border-brand-900/12 rounded-[32px] border bg-white p-6 shadow-[0_28px_80px_-42px_rgba(20,28,50,0.36)] sm:p-8 lg:p-10">
              <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-brand-700 mb-3 text-sm font-semibold tracking-[0.22em] uppercase">
                    Що ми робимо
                  </p>
                  <h2 className="font-heading text-brand-950 text-3xl font-bold sm:text-4xl">
                    Не просто красивий магазин, а точка спокою для власника і тварини
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
                  Ми вибудували сервіс навколо простого принципу: швидко зорієнтувати, безпечного
                  порадити і не перевантажити людину складною термінологією.
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {serviceCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="border-brand-900/10 rounded-[28px] border bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-sm"
                    >
                      <div className="bg-brand-900/6 text-brand-900 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-brand-950 mb-2 text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-zinc-600">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="products" className="mb-12 scroll-mt-32">
            <div className="border-brand-900/12 overflow-hidden rounded-[34px] border bg-[linear-gradient(180deg,#fff7ef_0%,#ffffff_100%)] p-6 shadow-[0_28px_80px_-44px_rgba(20,28,50,0.28)] sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
                <div className="max-w-lg">
                  <p className="text-brand-700 mb-3 text-sm font-semibold tracking-[0.22em] uppercase">
                    Товари
                  </p>
                  <h2 className="font-heading text-brand-950 mb-4 text-3xl font-bold sm:text-4xl">
                    Категорії, які закривають щоденні потреби без зайвого хаосу
                  </h2>
                  <p className="mb-6 text-sm leading-7 text-zinc-600 sm:text-base">
                    Ми не перетворюємо вибір на квест. Пояснюємо коротко, підказуємо адекватні
                    варіанти і допомагаємо підібрати те, що реально спрацює у вашому ритмі життя.
                  </p>
                  <div className="bg-brand-950 shadow-brand-950/15 rounded-[28px] px-5 py-5 text-white shadow-lg">
                    <p className="text-sm font-semibold tracking-[0.18em] text-white/62 uppercase">
                      Перший візит у Lucky Dog
                    </p>
                    <p className="font-heading mt-2 text-xl font-bold">
                      Познайомимось, оцінимо стан і дамо простий план дій без зайвої паніки.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2">
                  {productCards.map((item, index) => {
                    const Icon = item.icon;
                    const isWide = index === 0;

                    return (
                      <article
                        key={item.title}
                        className={`border-brand-900/10 rounded-[28px] border bg-white p-5 shadow-sm ${
                          isWide ? "sm:col-span-3 lg:col-span-2" : ""
                        }`}
                      >
                        <div className="bg-brand-900/6 text-brand-900 mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-heading text-brand-950 mb-2 text-xl font-bold">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-7 text-zinc-600">{item.description}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 scroll-mt-32">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-brand-700 mb-3 text-sm font-semibold tracking-[0.22em] uppercase">
                  Наші хвостики
                </p>
                <h2 className="font-heading text-brand-950 text-3xl font-bold sm:text-4xl">
                  Живі емоції, довіра і щоденна турбота
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                Тут можуть бути ваші реальні фото тваринок і клієнтів, а поки ми ставимо живу
                стилістичну підкладку, щоб зрозуміти атмосферу сайту.
              </p>
            </div>
            <div className="grid auto-rows-[15rem] gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image, index) => {
                const isHeroTile = index === 0;
                const isTallTile = index === 4;

                return (
                  <article
                    key={image.src}
                    className={`group border-brand-900/12 relative overflow-hidden rounded-[28px] border bg-zinc-100 shadow-sm ${
                      isHeroTile ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                    } ${isTallTile ? "lg:row-span-2" : ""}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/14 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-sm font-medium text-white/92">{image.alt}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="how-we-work" className="mb-12 scroll-mt-32">
            <div className="border-brand-900/12 rounded-[34px] border bg-[linear-gradient(180deg,#f7f8fb_0%,#ffffff_100%)] p-6 shadow-[0_28px_80px_-44px_rgba(20,28,50,0.22)] sm:p-8 lg:p-10">
              <div className="mb-8 max-w-2xl">
                <p className="text-brand-700 mb-3 text-sm font-semibold tracking-[0.22em] uppercase">
                  Як ми працюємо
                </p>
                <h2 className="font-heading text-brand-950 text-3xl font-bold sm:text-4xl">
                  Простий маршрут від запиту до спокою
                </h2>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {workSteps.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="border-brand-900/10 relative rounded-[28px] border bg-white p-5 shadow-sm"
                    >
                      {index < workSteps.length - 1 ? (
                        <div className="bg-brand-900/15 absolute top-10 right-[-0.9rem] hidden h-px w-8 lg:block" />
                      ) : null}
                      <div className="bg-brand-900/6 text-brand-900 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-brand-950 mb-2 text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-7 text-zinc-600">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section id="contacts" className="scroll-mt-32">
            <div className="border-brand-900/14 bg-brand-950 overflow-hidden rounded-[34px] border text-white shadow-[0_32px_90px_-48px_rgba(10,16,28,0.68)]">
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:p-10">
                <div>
                  <p className="mb-3 text-sm font-semibold tracking-[0.22em] text-white/58 uppercase">
                    Контакти
                  </p>
                  <h2 className="font-heading mb-4 text-3xl font-bold sm:text-4xl">
                    Приїжджайте, телефонуйте або просто напишіть нам
                  </h2>
                  <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                    Lucky Dog створений як локальне місце довіри: без зайвого пафосу, але з теплим
                    сервісом, зрозумілими діями та речами, які справді потрібні вашому улюбленцю.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <article className="rounded-[28px] border border-white/10 bg-white/7 p-5 backdrop-blur-sm">
                    <MapPin className="mb-3 h-5 w-5 text-white" />
                    <p className="mb-1 text-sm text-white/58">Адреса</p>
                    <p className="font-semibold text-white">{storeAddress}</p>
                  </article>
                  <article className="rounded-[28px] border border-white/10 bg-white/7 p-5 backdrop-blur-sm">
                    <Phone className="mb-3 h-5 w-5 text-white" />
                    <p className="mb-1 text-sm text-white/58">Телефон</p>
                    <p className="font-semibold text-white">{storePhone}</p>
                  </article>
                  <article className="rounded-[28px] border border-white/10 bg-white/7 p-5 backdrop-blur-sm">
                    <Clock3 className="mb-3 h-5 w-5 text-white" />
                    <p className="mb-1 text-sm text-white/58">Графік</p>
                    <p className="font-semibold text-white">{storeHours}</p>
                  </article>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 lg:px-10 lg:pb-10">
                <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/6 shadow-[0_28px_70px_-42px_rgba(0,0,0,0.42)]">
                  <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-[0.18em] text-white/56 uppercase">
                        Локація
                      </p>
                      <p className="mt-1 text-sm text-white/74 sm:text-base">
                        Подивитись, де саме знаходиться магазин і як зручно доїхати.
                      </p>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodedMapAddress}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-brand-950 inline-flex h-11 items-center justify-center rounded-full border border-white/16 bg-white px-5 text-sm font-semibold shadow-[0_18px_42px_-24px_rgba(0,0,0,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/92 hover:shadow-[0_22px_48px_-24px_rgba(0,0,0,0.46)]"
                    >
                      Відкрити маршрут
                    </a>
                  </div>

                  <div className="bg-brand-900/20 relative aspect-[16/8] min-h-[320px] w-full">
                    <iframe
                      title="Мапа розташування Lucky Dog"
                      src={`https://www.google.com/maps?q=${encodedMapAddress}&z=15&output=embed`}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
      <BackToTopButton />
    </div>
  );
}
