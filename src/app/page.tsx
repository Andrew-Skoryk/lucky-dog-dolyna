import Image from "next/image";
import { Clock3, HeartPulse, MapPin, PawPrint, Phone, ShoppingBag } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="from-brand-900/10 to-accent-500/10 flex min-h-screen flex-col bg-gradient-to-br via-white text-zinc-900">
      <main
        id="top"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-8 sm:px-8 lg:px-12"
      >
        <SiteHeader />

        <section className="border-brand-900/15 mb-10 grid scroll-mt-32 gap-8 rounded-3xl border bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-brand-900 mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
              Магазин + допомога
            </p>
            <h2 className="font-heading text-brand-900 mb-4 text-3xl leading-tight font-bold sm:text-4xl">
              Зоокомплекс, де можна купити все необхідне і одразу отримати допомогу для тварини
            </h2>
            <p className="mb-6 max-w-xl text-zinc-700">
              Lucky Dog поєднує зоомагазин і базову ветеринарну підтримку. Підкажемо з харчуванням,
              доглядом, профілактикою та підберемо товари під ваш запит без зайвої складності.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+380000000000"
                className="bg-success-500 hover:bg-brand-700 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition"
              >
                Швидка консультація
              </a>
              <a
                href="#contacts"
                className="text-brand-900 hover:bg-brand-900/10 border-brand-900/30 rounded-full border px-5 py-2.5 text-sm font-semibold transition"
              >
                Маршрут і контакти
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border-brand-900/15 flex items-center gap-3 rounded-2xl border bg-white p-4">
              <ShoppingBag className="text-brand-900 h-5 w-5" />
              <div>
                <p className="font-heading text-brand-900 text-sm font-bold">Зоомагазин щодня</p>
                <p className="text-xs text-zinc-600">Корм, амуніція, гігієна, товари для догляду</p>
              </div>
            </div>
            <div className="border-brand-900/15 flex items-center gap-3 rounded-2xl border bg-white p-4">
              <HeartPulse className="text-success-500 h-5 w-5" />
              <div>
                <p className="font-heading text-brand-900 text-sm font-bold">Базова допомога</p>
                <p className="text-xs text-zinc-600">
                  Огляд, рекомендації, профілактика та супровід
                </p>
              </div>
            </div>
            <div className="from-brand-900 to-brand-700 border-brand-900/20 rounded-2xl border bg-gradient-to-r p-4 text-white sm:col-span-2 lg:col-span-1">
              <p className="font-heading mb-1 text-sm font-bold">Перший візит у Lucky Dog</p>
              <p className="text-xs text-white/90">
                Познайомимось, оцінимо стан улюбленця і дамо простий план дій.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mb-10 grid scroll-mt-32 gap-4 sm:grid-cols-3">
          <article className="border-brand-900/15 rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="font-heading text-brand-900 mb-2 text-lg font-bold">Швидка допомога</h3>
            <p className="text-sm text-zinc-700">
              Пояснюємо стан тварини, що робити зараз і коли потрібен повторний огляд.
            </p>
          </article>
          <article className="border-brand-900/15 rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="font-heading text-brand-900 mb-2 text-lg font-bold">
              Розумний підбір товарів
            </h3>
            <p className="text-sm text-zinc-700">
              Не просто продаємо, а підбираємо під вік, стан і щоденні звички улюбленця.
            </p>
          </article>
          <article className="border-brand-900/15 rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="font-heading text-brand-900 mb-2 text-lg font-bold">Людяний сервіс</h3>
            <p className="text-sm text-zinc-700">
              Пояснюємо просто, без складної термінології і зайвого стресу для власників.
            </p>
          </article>
        </section>

        <section
          id="products"
          className="border-brand-900/15 mb-10 scroll-mt-32 rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
        >
          <p className="text-brand-900 mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
            Топ категорії товарів
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl bg-zinc-50 p-4">
              <ShoppingBag className="text-brand-700 mb-2 h-5 w-5" />
              <h3 className="font-heading text-brand-900 mb-1 font-bold">Корм і ласощі</h3>
              <p className="text-sm text-zinc-700">
                Щоденні раціони, лікувальні лінійки та смаколики для заохочення.
              </p>
            </article>
            <article className="rounded-2xl bg-zinc-50 p-4">
              <PawPrint className="text-brand-700 mb-2 h-5 w-5" />
              <h3 className="font-heading text-brand-900 mb-1 font-bold">Амуніція</h3>
              <p className="text-sm text-zinc-700">
                Повідці, нашийники, шлеї, переноски та аксесуари для прогулянок.
              </p>
            </article>
            <article className="rounded-2xl bg-zinc-50 p-4">
              <HeartPulse className="text-success-500 mb-2 h-5 w-5" />
              <h3 className="font-heading text-brand-900 mb-1 font-bold">Гігієна і догляд</h3>
              <p className="text-sm text-zinc-700">
                Шампуні, засоби для лап і вух, базова профілактика і щоденний комфорт.
              </p>
            </article>
          </div>
        </section>

        <section
          id="how-we-work"
          className="border-brand-900/15 mb-10 scroll-mt-32 rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
        >
          <p className="text-brand-900 mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
            Як ми працюємо
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl bg-zinc-50 p-4">
              <PawPrint className="text-brand-700 mb-2 h-5 w-5" />
              <h3 className="font-heading text-brand-900 mb-1 font-bold">1. Звернення</h3>
              <p className="text-sm text-zinc-700">Телефонуєте або пишете, описуєте ситуацію.</p>
            </article>
            <article className="rounded-2xl bg-zinc-50 p-4">
              <HeartPulse className="text-success-500 mb-2 h-5 w-5" />
              <h3 className="font-heading text-brand-900 mb-1 font-bold">2. Допомога</h3>
              <p className="text-sm text-zinc-700">
                Огляд і чіткі рекомендації по наступних кроках.
              </p>
            </article>
            <article className="rounded-2xl bg-zinc-50 p-4">
              <ShoppingBag className="text-brand-700 mb-2 h-5 w-5" />
              <h3 className="font-heading text-brand-900 mb-1 font-bold">3. Підтримка</h3>
              <p className="text-sm text-zinc-700">
                Підбір потрібних товарів для щоденного догляду.
              </p>
            </article>
          </div>
        </section>

        <section
          id="contacts"
          className="border-brand-900/15 mb-4 grid scroll-mt-32 gap-4 rounded-3xl border bg-white p-6 shadow-sm sm:grid-cols-3"
        >
          <div className="flex items-start gap-3">
            <MapPin className="text-success-500 mt-0.5 h-5 w-5" />
            <div>
              <p className="text-sm text-zinc-600">Адреса</p>
              <p className="font-semibold text-zinc-900">м. Ваше місто, вул. Прикладна, 10</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-success-500 mt-0.5 h-5 w-5" />
            <div>
              <p className="text-sm text-zinc-600">Телефон</p>
              <p className="font-semibold text-zinc-900">+380 (00) 000 00 00</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock3 className="text-success-500 mt-0.5 h-5 w-5" />
            <div>
              <p className="text-sm text-zinc-600">Графік</p>
              <p className="font-semibold text-zinc-900">Пн-Сб: 09:00-19:00</p>
            </div>
          </div>
        </section>

        <section className="mb-10 flex justify-center">
          <Image
            src="/Luck_Dog_Logo.jpg"
            alt="Lucky Dog emblem"
            width={180}
            height={180}
            className="border-brand-900/20 rounded-3xl border object-cover shadow-lg"
          />
        </section>
      </main>
    </div>
  );
}
