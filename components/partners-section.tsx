import Link from 'next/link'
import { ShieldCheck, ExternalLink } from 'lucide-react'
import { partners } from '@/lib/events-data'

const partnerTypeLabels: Record<string, string> = {
  'Jegy.hu': 'Elsődleges forrás',
  'Eventim HU': 'Viszonteladó',
  'StubHub': 'Viszonteladó',
  'Viagogo': 'Viszonteladó',
  'Tixa': 'Elsődleges forrás',
  'Jegymester': 'Elsődleges forrás',
}

export function PartnersSection() {
  return (
    <section
      className="py-16 md:py-20 bg-slate-50 border-y border-slate-200/80"
      aria-labelledby="partner-sources-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            Megbízható források
          </div>
          <h2 id="partner-sources-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Partnereink – 8 ellenőrzött jegyforrás
          </h2>
          <p className="text-slate-600 leading-relaxed">
            A jegyossze kizárólag ellenőrzött, hazai és nemzetközi jegyértékesítő platformok árait jeleníti meg.
            Teljes átláthatóság minden ajánlatnál – nálunk nem vásárolsz, a partnernél kötsz üzletet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-200/50 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-slate-900 text-lg">{p.name}</h3>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-600 transition-colors shrink-0"
                  aria-label={`${p.name} weboldal – új ablak`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">{p.description}</p>
              <span
                className={`inline-flex w-fit text-xs font-medium px-2.5 py-1 rounded-lg ${
                  partnerTypeLabels[p.name]?.includes('Elsődleges')
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {partnerTypeLabels[p.name] || 'Partner'}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/partnerek"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm"
          >
            Részletesen a partnerekről
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
