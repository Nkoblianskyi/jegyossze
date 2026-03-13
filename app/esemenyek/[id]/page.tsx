import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ChevronLeft, ExternalLink, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { events, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'
import { PartnersSection } from '@/components/partners-section'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) return {}
  return {
    title: `${event.title} – Jegyár összehasonlítás | jegyossze`,
    description: `Hasonlítsd össze a(z) ${event.title} jegyárait ${event.offers.length} partnertől. Legjobb ár: ${formatPrice(getMinPrice(event.offers))}`,
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) notFound()

  const minPrice = getMinPrice(event.offers)
  const sortedOffers = [...event.offers].sort((a, b) => {
    if (a.available && !b.available) return -1
    if (!a.available && b.available) return 1
    return a.price - b.price
  })

  const relatedEvents = events
    .filter((e) => e.id !== event.id && e.category === event.category)
    .slice(0, 4)

  return (
    <>
      <nav className="bg-white border-b border-slate-200" aria-label="Navigációs útvonal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm">
          <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
            Főoldal
          </Link>
          <span className="text-slate-300">/</span>
          <Link href="/esemenyek" className="text-slate-500 hover:text-slate-900 transition-colors">
            Események
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-medium truncate">{event.title}</span>
        </div>
      </nav>

      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="relative aspect-video md:aspect-[2/1] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${getCategoryColor(event.category)}`}
                  >
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-5 text-balance">
                  {event.title}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-amber-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Dátum</p>
                      <p className="font-semibold text-slate-900 text-sm">
                        {new Date(event.date).toLocaleDateString('hu-HU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-amber-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Kezdés</p>
                      <p className="font-semibold text-slate-900 text-sm">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-amber-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Helyszín</p>
                      <p className="font-semibold text-slate-900 text-sm">{event.venue}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-amber-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Város</p>
                      <p className="font-semibold text-slate-900 text-sm">{event.city}</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
              </div>

              {/* Disclaimer – unchanged position */}
              <div
                className="rounded-2xl bg-amber-50 border border-amber-200/80 p-5 flex gap-3"
                role="note"
                aria-label="Fontos megfelelőségi nyilatkozat"
              >
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm flex flex-col gap-2">
                  <p className="font-bold text-amber-900">Fontos megfelelőségi nyilatkozat</p>
                  <p className="text-amber-800 leading-relaxed">
                    A <strong>jegyossze.com</strong> független árösszehasonlító platform (aggregátor). Nem értékesítünk
                    közvetlenül jegyeket, csak összehasonlítjuk az engedélyezett viszonteladók ajánlatait.
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    Az <strong>árak meghaladhatják a névértéket</strong>. Minden ár átláthatóan megjelenik. A vásárlást
                    a kiválasztott partnernél hajtja végre.
                  </p>
                  <p className="text-amber-800 leading-relaxed">
                    <strong>Partnereink:</strong> Jegy.hu, Eventim HU, StubHub, Viagogo, Tixa, Jegymester
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {minPrice > 0 && (
                <div className="rounded-2xl bg-slate-900 text-white p-6">
                  <p className="text-slate-400 text-sm mb-1">Legjobb elérhető ár</p>
                  <p className="text-3xl font-extrabold text-amber-400">{formatPrice(minPrice)}</p>
                  <p className="text-slate-500 text-xs mt-1">
                    {sortedOffers.filter((o) => o.available).length} ajánlatból
                  </p>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-200">
                  <h2 className="font-bold text-slate-900">Jegyajánlatok összehasonlítása</h2>
                  <p className="text-xs text-slate-500 mt-0.5">{sortedOffers.length} partner árazása</p>
                </div>
                <ul className="divide-y divide-slate-200" aria-label="Jegyajánlatok">
                  {sortedOffers.map((offer, i) => (
                    <li key={offer.partner} className="px-5 py-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        {offer.available ? (
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" aria-label="Elérhető" />
                        ) : (
                          <XCircle className="w-4 h-4 text-slate-300 shrink-0" aria-label="Nem elérhető" />
                        )}
                        <div className="min-w-0">
                          <p className="font-semibold text-sm text-slate-900 truncate">{offer.partner}</p>
                          {i === 0 && offer.available && (
                            <span className="text-xs text-emerald-600 font-medium">Legjobb ár</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`font-bold text-base ${
                            offer.available ? 'text-slate-900' : 'text-slate-400 line-through'
                          }`}
                        >
                          {formatPrice(offer.price)}
                        </span>
                        {offer.available && (
                          <a
                            href={offer.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                            aria-label={`${offer.partner} ajánlat – új ablak`}
                          >
                            Megtekintés
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/esemenyek"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                Vissza az eseményekhez
              </Link>
            </div>
          </div>

          <PartnersSection />

          {relatedEvents.length > 0 && (
            <section className="mt-14" aria-labelledby="related-title">
              <h2 id="related-title" className="text-xl font-bold text-slate-900 mb-6">
                Hasonló {event.category.toLowerCase()} események
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedEvents.map((e) => (
                  <EventCard key={e.id} event={e} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  )
}
