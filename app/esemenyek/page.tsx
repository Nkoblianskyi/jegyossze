'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, X } from 'lucide-react'
import { events, type EventCategory } from '@/lib/events-data'
import { EventCard } from '@/components/event-card'

const ALL_CATS: EventCategory[] = ['Koncert', 'Sport', 'Színház', 'Fesztivál', 'Komédia']

export default function EsemenyekPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<EventCategory | null>(null)

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCat = activeCategory ? e.category === activeCategory : true
      const q = query.toLowerCase()
      const matchQ =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        (e.artist?.toLowerCase().includes(q) ?? false)
      return matchCat && matchQ
    })
  }, [query, activeCategory])

  return (
    <>
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,158,11,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Események</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Összes esemény
          </h1>
          <p className="text-slate-300 text-lg">
            Hasonlítsd össze a jegyárakat {events.length} eseményre 8 partnertől – egy helyen.
          </p>
        </div>
      </section>

      <section className="sticky top-[4.5rem] z-40 bg-white border-b border-slate-200 shadow-sm" aria-label="Szűrők">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Esemény, előadó, helyszín..."
              className="w-full pl-10 pr-10 py-2.5 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              aria-label="Esemény keresése"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Keresés törlése"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Kategória szűrők">
            <Filter className="w-4 h-4 text-slate-500 hidden sm:block shrink-0" aria-hidden="true" />
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              aria-pressed={activeCategory === null}
            >
              Összes
            </button>
            {ALL_CATS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-10 min-h-[50vh]" aria-live="polite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600 mb-6">
            {filtered.length} esemény találva
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <p className="text-xl font-semibold text-slate-900 mb-2">Nem találtunk eseményt</p>
              <p className="text-slate-600 text-sm mb-4">Próbálj más keresési feltételekkel vagy kategóriával.</p>
              <button
                onClick={() => {
                  setQuery('')
                  setActiveCategory(null)
                }}
                className="text-sm text-amber-600 font-semibold hover:underline"
              >
                Szűrők törlése
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
