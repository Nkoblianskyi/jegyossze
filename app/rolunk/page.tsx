import type { Metadata } from 'next'
import { Shield, TrendingDown, Users, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rólunk | jegyossze',
  description: 'Ismerd meg a jegyossze-t: független jegyár-összehasonlító platform Magyarországon. Küldetésünk, értékeink és nyilatkozatunk.',
}

export default function RolunkPage() {
  return (
    <>
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,158,11,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Rólunk</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 max-w-2xl">
            Egy helyen a legjobb jegyárak
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            A jegyossze csapata azért dolgozik, hogy mindenki egyszerűen és átláthatóan megtalálja a legjobb jegyárat –
            koncertre, meccsre, színházra vagy fesztiválra.
          </p>
        </div>
      </section>

      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">

          <section aria-labelledby="mission-title">
            <h2 id="mission-title" className="text-2xl font-bold text-slate-900 mb-4">Küldetésünk</h2>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
              <p className="text-slate-600 leading-relaxed mb-4">
                A jegyossze azért jött létre, hogy a magyarországi jegyvásárlást átláthatóbbá és kedvezőbbé tegye.
                Ugyanaz a jegy koncertre vagy sportra akár 30–40%-kal többe kerülhet egyik oldalon, mint a másikon –
                a legtöbb vásárló viszont csak egy helyen nézi az árakat.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Mi összehasonlítjuk helyetted. Egy helyen látod a megbízható partnerektől érkező árakat, és te választod,
                hol vásárolsz. Mi nem értékesítünk jegyet – csak az összehasonlítást biztosítjuk, ingyen és függetlenül.
              </p>
            </div>
          </section>

          <section aria-labelledby="values-title">
            <h2 id="values-title" className="text-2xl font-bold text-slate-900 mb-6">Alapértékeink</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Függetlenség',
                  desc: 'Nem állunk egyetlen partner mögött sem. Minden platformot ugyanúgy, objektívan mutatunk be.',
                  color: 'bg-slate-100 text-slate-900',
                },
                {
                  icon: Eye,
                  title: 'Átláthatóság',
                  desc: 'Mindig világosan jelezzük, mikor kerülsz át a partner oldalára. Nincsenek rejtett díjak.',
                  color: 'bg-amber-100 text-amber-800',
                },
                {
                  icon: TrendingDown,
                  title: 'Megtakarítás',
                  desc: 'Az árösszehasonlítással valódi megtakarítást segítünk. Minden vásárlás előtt érdemes nálunk megnézni.',
                  color: 'bg-emerald-100 text-emerald-800',
                },
                {
                  icon: Users,
                  title: 'Közösség',
                  desc: 'Hiszünk abban, hogy az élő események összekötnek. Ezt a hozzáférést szeretnénk könnyebbé tenni.',
                  color: 'bg-slate-100 text-slate-900',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col gap-3 hover:border-amber-200 transition-colors"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="disclaimer-title">
            <h2 id="disclaimer-title" className="text-2xl font-bold text-slate-900 mb-4">Fontos nyilatkozat</h2>
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 text-white">
              <p className="font-semibold text-amber-400 mb-3 text-lg">Független összehasonlítás – nem értékesítünk jegyeket</p>
              <p className="text-slate-300 leading-relaxed mb-4">
                A jegyossze kizárólag tájékoztató jellegű árösszehasonlítást nyújt. A megjelenített árak a következő
                partnerektől származnak:
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-4">
                {['Jegy.hu', 'Eventim HU', 'StubHub', 'Viagogo', 'Tixa', 'Jegymester'].map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="w-2 h-2 bg-amber-400 rounded-full shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-slate-300 text-sm leading-relaxed">
                Az „Ajánlat megtekintése” gombra kattintva a partner weboldalára kerülsz. A vásárlás kizárólag
                közvetlenül a partnerrel és veled között jön létre; a jegyossze nem része az ügyletnek.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
