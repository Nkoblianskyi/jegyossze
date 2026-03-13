import type { Metadata } from 'next'
import { ExternalLink, ShieldCheck } from 'lucide-react'
import { partners } from '@/lib/events-data'

export const metadata: Metadata = {
  title: 'Partnereink | jegyossze',
  description: 'Ismerd meg a jegyossze 8 megbízható jegypartnerét: Jegy.hu, Eventim, StubHub, Viagogo, Tixa, Jegymester és mások.',
}

const partnerDetails: Record<string, { country: string; type: string; founded?: string }> = {
  'Jegy.hu': { country: 'Magyarország', type: 'Elsődleges forrás', founded: '2001' },
  'Eventim HU': { country: 'Magyarország / Európa', type: 'Elsődleges forrás', founded: '1989' },
  'StubHub': { country: 'USA / Globális', type: 'Viszonteladó', founded: '2000' },
  'Viagogo': { country: 'Svájc / Globális', type: 'Viszonteladó', founded: '2006' },
  'Tixa': { country: 'Magyarország', type: 'Elsődleges forrás', founded: '2010' },
  'Jegymester': { country: 'Magyarország', type: 'Elsődleges forrás', founded: '2008' },
}

export default function PartnerekPage() {
  return (
    <>
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,158,11,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Partnereink</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 max-w-2xl">
            Megbízható jegyforrások egy helyen
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            A jegyossze kizárólag ellenőrzött, hazai és nemzetközi jegyértékesítő platformok árait gyűjti össze –
            így mindig átlátható és megbízható az összehasonlítás.
          </p>
        </div>
      </section>

      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-amber-50 border border-amber-200/80 max-w-3xl mb-12">
            <ShieldCheck className="w-8 h-8 text-amber-600 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-bold text-amber-900 mb-1">Fontos tudnivaló</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                A jegyossze <strong>független összehasonlító platform</strong>. A partnerekkel való együttműködésünk
                kizárólag az árösszehasonlítás céljából történik. A jegyvásárlás kizárólag a partner weboldalán
                lehetséges; a vásárlás a partner és te között jön létre.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Partnerek listája">
            {partners.map((partner) => {
              const details = partnerDetails[partner.name]
              return (
                <div
                  key={partner.name}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:border-amber-200/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold text-slate-900">{partner.name}</h2>
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-amber-600 transition-colors shrink-0"
                      aria-label={`${partner.name} weboldal – új ablak`}
                    >
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{partner.description}</p>
                  {details && (
                    <div className="pt-4 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Ország / régió</span>
                        <span className="font-medium text-slate-900">{details.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Típus</span>
                        <span className="font-medium text-slate-900">{details.type}</span>
                      </div>
                      {details.founded && (
                        <div className="flex justify-between">
                          <span>Alapítva</span>
                          <span className="font-medium text-slate-900">{details.founded}</span>
                        </div>
                      )}
                    </div>
                  )}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold text-sm px-4 py-3 rounded-xl transition-colors"
                    aria-label={`${partner.name} weboldal meglátogatása`}
                  >
                    Weboldal felkeresése
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              )
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-slate-900 p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Jegyértékesítő platformot üzemeltetsz?</h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Ha megbízható jegyértékesítő platformod van és szeretnél megjelenni a jegyossze összehasonlítójában,
              vedd fel velünk a kapcsolatot.
            </p>
            <a
              href="mailto:info@jegyossze.com"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-3 rounded-xl transition-colors"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
