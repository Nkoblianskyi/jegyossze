import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { type Event, formatPrice, getMinPrice, getCategoryColor } from '@/lib/events-data'

interface EventCardPreviewProps {
  event: Event
  priority?: boolean
}

/** Компактні картки прев'ю для головної – горизонтальний layout: зображення зліва, контент справа */
export function EventCardPreview({ event, priority = false }: EventCardPreviewProps) {
  const minPrice = getMinPrice(event.offers)
  const availableCount = event.offers.filter((o) => o.available).length

  return (
    <Link
      href={`/esemenyek/${event.id}`}
      className="group flex flex-row h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300"
      aria-label={`${event.title} – ${event.city}, ${event.date}`}
    >
      <div className="relative w-28 sm:w-32 shrink-0 aspect-[3/4] overflow-hidden bg-slate-100">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 112px, 128px"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
        <div className="absolute top-2 left-2">
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        {event.featured && (
          <div className="absolute top-2 right-2">
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-500 text-slate-900">Kiemelt</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col min-w-0 p-3 sm:p-4 justify-between">
        <div>
          <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
            {event.title}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
            <span>
              {new Date(event.date).toLocaleDateString('hu-HU', { month: 'short', day: 'numeric', year: '2-digit' })}{' '}
              · {event.time}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-500 truncate">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
            <span>{event.venue}, {event.city}</span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          {minPrice > 0 ? (
            <span className="font-bold text-amber-600 text-sm">{formatPrice(minPrice)}</span>
          ) : (
            <span className="text-xs text-slate-400">Nem elérhető</span>
          )}
          <span className="flex items-center gap-0.5 text-xs text-slate-500 font-medium">
            {availableCount} partner
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  )
}
