import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { type Event, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'

interface EventCardProps {
  event: Event
  priority?: boolean
}

export function EventCard({ event, priority = false }: EventCardProps) {
  const minPrice = getMinPrice(event.offers)
  const availableCount = event.offers.filter((o) => o.available).length

  return (
    <Link
      href={`/esemenyek/${event.id}`}
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300"
      aria-label={`${event.title} – ${event.city}, ${event.date}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm ${getCategoryColor(event.category)}`}
          >
            {event.category}
          </span>
          {event.featured && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-500 text-slate-900">
              Kiemelt
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          {minPrice > 0 ? (
            <span className="text-lg font-bold text-white drop-shadow-lg">{formatPrice(minPrice)}</span>
          ) : (
            <span className="text-sm text-white/90">Nem elérhető</span>
          )}
          <span className="flex items-center gap-1 text-xs text-white/90 font-medium">
            Összehasonlítás
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
          {event.title}
        </h3>
        <div className="flex flex-col gap-2 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            <span>
              {new Date(event.date).toLocaleDateString('hu-HU', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}{' '}
              · {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            <span className="truncate">{event.venue}, {event.city}</span>
          </div>
        </div>
        <div className="mt-auto pt-3 flex items-center justify-between text-xs">
          <span className="text-slate-500">{availableCount} partner ajánlata</span>
          <span className="font-semibold text-amber-600 group-hover:underline">Részletek →</span>
        </div>
      </div>
    </Link>
  )
}
