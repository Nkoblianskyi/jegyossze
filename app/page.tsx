import Link from 'next/link'
import Image from 'next/image'
import { Search, Shield, TrendingDown, Users, Info, ChevronRight, Ticket } from 'lucide-react'
import { events } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'
import { PartnersSection } from '@/components/partners-section'

const featuredEvents = events.filter((e) => e.featured)

const faqItems = [
  {
    q: 'Hogyan működik a jegyossze?',
    a: 'A jegyossze egy helyen gyűjti össze a jegyárakat 8 megbízható partnertől. Nem kell minden oldalt külön böngésznöd – mi összehasonlítjuk helyetted, és te a legjobb ajánlatra kattintva a partner oldalára jutsz, ahol vásárolhatsz.',
  },
  {
    q: 'Közvetlenül a jegyossze-n vásárolhatok?',
    a: 'Nem. A jegyossze független összehasonlító platform. A jegyvásárlás mindig a kiválasztott partner weboldalán történik. Az „Ajánlat megtekintése” gombra kattintva oda irányítunk.',
  },
  {
    q: 'Mennyire naprakészek az árak?',
    a: 'Az árakat rendszeresen frissítjük. Tájékoztató jellegűek – a pontos, aktuális ár és elérhetőség mindig a partner oldalán ellenőrizendő.',
  },
  {
    q: 'Miért más az ár partnernként?',
    a: 'Minden partner saját árszabályzattal és díjstruktúrával rendelkezik. Egyesek kezelési díjat számítanak, mások akciókat futtatnak. Ezért éri meg összehasonlítani az árakat egy helyen.',
  },
  {
    q: 'Ingyenes a szolgáltatás?',
    a: 'Igen. A jegyossze teljesen ingyenes. Nem kell regisztrálnod, és nem számítunk fel díjat az árösszehasonlításért.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero – new structure: disclaimer on top, then split layout */}
      <section className="relative min-h-[90vh] flex flex-col bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-concert.jpg"
            alt="Koncert hangulat"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900" />
        </div>

        <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
          {/* Disclaimer – unchanged position */}
          <div
            className="max-w-2xl w-full mb-8 md:mb-10 bg-slate-800/90 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-5 text-left"
            role="note"
            aria-label="Fontos információ"
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-white font-semibold text-sm mb-2">Fontos – Kérjük, olvassa el</p>
                <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-px shrink-0">•</span>
                    A <strong className="text-white">jegyossze.com</strong> független jegyár-összehasonlító (aggregátor).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-px shrink-0">•</span>
                    <strong className="text-white">Nem értékesítünk jegyeket</strong> – átirányítunk a partnerekhez.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-px shrink-0">•</span>
                    <strong className="text-white">Partnerek:</strong> Jegy.hu, Eventim HU, StubHub, Viagogo, Tixa, Jegymester
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-px shrink-0">•</span>
                    <strong className="text-white">Árak meghaladhatják a névértéket</strong> – minden ár átláthatóan megjelenik.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-14 pb-16 md:pb-20">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance mb-5">
                Egy helyen minden <span className="text-amber-400">jegyár</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                Összehasonlítjuk a Jegy.hu, Eventim és további partnerek árait. Keress eseményt, válaszd a legjobb
                ajánlatot – egyszerűen és ingyenesen.
              </p>
              <Link
                href="/esemenyek"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3.5 rounded-xl transition-colors text-base"
              >
                <Ticket className="w-5 h-5" aria-hidden="true" />
                Események böngészése
              </Link>
            </div>
            <div className="w-full lg:max-w-md shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-white font-semibold mb-3">Keresés eseményre vagy előadóra</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/20">
                    <Search className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                    <input
                      type="text"
                      placeholder="Esemény, előadó, helyszín..."
                      className="w-full bg-transparent text-white placeholder:text-slate-400 text-sm outline-none"
                      aria-label="Esemény keresése"
                    />
                  </div>
                  <Link
                    href="/esemenyek"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
                  >
                    Keresés
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats – new layout: horizontal strip with icons and large numbers */}
      <section className="bg-slate-100 border-y border-slate-200" aria-label="Statisztikák">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '8', label: 'Megbízható partner', icon: Shield },
              { value: '15+', label: 'Aktív esemény', icon: Ticket },
              { value: '100%', label: 'Ingyenes használat', icon: Users },
              { value: '24/7', label: 'Frissített árak', icon: TrendingDown },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-1">
                  <stat.icon className="w-6 h-6 text-amber-600" aria-hidden="true" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-slate-900">{stat.value}</span>
                <span className="text-sm text-slate-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured events – new section layout and heading */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="featured-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 id="featured-title" className="text-2xl md:text-3xl font-bold text-slate-900">
                Kiemelt események
              </h2>
              <p className="text-slate-600 mt-1">A legnépszerűbb rendezvények és a legjobb ajánlatok</p>
            </div>
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-semibold text-sm"
            >
              Összes esemény
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} priority={index < 2} />
            ))}
          </div>
          <div className="mt-8 sm:hidden text-center">
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm"
            >
              Összes esemény megtekintése
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works – new design: numbered steps with connecting line */}
      <section className="py-16 md:py-20 bg-slate-50" aria-labelledby="how-it-works-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 id="how-it-works-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Hogyan működik?
            </h2>
            <p className="text-slate-600">
              Három lépésben megtalálod a legjobb jegyárat – egyszerűen és átláthatóan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {[
              {
                step: '1',
                icon: Search,
                title: 'Keress eseményt',
                desc: 'Böngészd a koncerteket, sportot, színházat vagy fesztiválokat, vagy keress rá a kedvenc előadódra vagy helyszínre.',
              },
              {
                step: '2',
                icon: TrendingDown,
                title: 'Hasonlítsd össze az árakat',
                desc: 'Egy oldalon látod az összes partnertől érkező árat – kezelési díjakkal együtt, átláthatóan.',
              },
              {
                step: '3',
                icon: ChevronRight,
                title: 'Vásárolj a partnernél',
                desc: 'A legjobb ajánlatra kattintva a partner weboldalára kerülsz, ahol biztonságosan megvásárolhatod a jegyed.',
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center mb-4 relative z-10">
                  <item.icon className="w-8 h-8" aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-500 text-slate-900 font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-slate-200 z-0" aria-hidden="true" />
                )}
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us – new card design */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="why-us-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="why-us-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Miért a jegyossze?
            </h2>
            <p className="text-slate-600">
              Függetlenek vagyunk, átláthatóak az árak, és mindig a te megtakarításod számít.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Független és objektív',
                desc: 'Nem állunk egyetlen partner mögött sem. Minden ajánlatot ugyanúgy jelenítünk meg – te döntöd el, hol vásárolsz.',
              },
              {
                icon: TrendingDown,
                title: 'Valódi megtakarítás',
                desc: 'Az árösszehasonlítással gyakran 15–30%-ot spórolhatsz a legdrágább lehetőséghez képest.',
              },
              {
                icon: Users,
                title: '8 ellenőrzött partner',
                desc: 'Csak megbízható, hazai és nemzetközi jegyplatformokkal dolgozunk – mindegyikről tájékoztatunk.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border border-slate-200 bg-slate-50/50 hover:border-amber-200 hover:bg-amber-50/30 transition-colors flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-amber-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />

      {/* FAQ – new layout: cards with expand */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="faq-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="faq-title" className="text-2xl md:text-3xl font-bold text-slate-900">
              Gyakori kérdések
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-slate-900 px-5 py-4 hover:bg-slate-100/80 transition-colors">
                  {item.q}
                  <ChevronRight className="w-5 h-5 text-slate-500 group-open:rotate-90 transition-transform shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <p className="px-5 pb-4 pt-0 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – new section design */}
      <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.15),transparent)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-2xl md:text-3xl font-bold text-white mb-3">
            Készen állsz a legjobb árra?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Böngészd az eseményeket és hasonlítsd össze az árakat egy helyen – ingyen.
          </p>
          <Link
            href="/esemenyek"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
            Események böngészése
          </Link>
        </div>
      </section>
    </>
  )
}
