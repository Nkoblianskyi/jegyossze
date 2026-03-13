import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Süti tájékoztató | jegyossze',
  description: 'A jegyossze süti (cookie) tájékoztatója – milyen sütiket használunk és mire.',
}

export default function SutiTajekoztato() {
  return (
    <>
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,158,11,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Süti tájékoztató</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Süti tájékoztató</h1>
          <p className="text-slate-400">Utolsó módosítás: 2025. január 1.</p>
        </div>
      </section>

      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 flex flex-col gap-10 text-slate-600 leading-relaxed text-sm">

            <section aria-labelledby="what-title">
              <h2 id="what-title" className="text-xl font-bold text-slate-900 mb-3">1. Mi az a süti (cookie)?</h2>
              <p>
                A süti egy kis szöveges fájl, amelyet a böngésző a weboldal látogatásakor elment a eszközödre. A sütik
                segítik az oldal megfelelő működését és jobb felhasználói élményt biztosítanak.
              </p>
            </section>

            <section aria-labelledby="types-title">
              <h2 id="types-title" className="text-xl font-bold text-slate-900 mb-4">2. Általunk használt sütik</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse" aria-label="Sütik táblázata">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Süti neve</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Típus</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Cél</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-900 border border-slate-200">Lejárat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '_session', type: 'Szükséges', goal: 'Munkamenet fenntartása', expiry: 'Böngészés végén' },
                      { name: '_analytics', type: 'Analitika', goal: 'Látogatói statisztikák', expiry: '2 év' },
                      { name: '_preferences', type: 'Funkcionális', goal: 'Beállítások mentése', expiry: '1 év' },
                    ].map((row) => (
                      <tr key={row.name}>
                        <td className="px-4 py-3 border border-slate-200 font-mono text-xs text-slate-900">{row.name}</td>
                        <td className="px-4 py-3 border border-slate-200">{row.type}</td>
                        <td className="px-4 py-3 border border-slate-200">{row.goal}</td>
                        <td className="px-4 py-3 border border-slate-200">{row.expiry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section aria-labelledby="essential-title">
              <h2 id="essential-title" className="text-xl font-bold text-slate-900 mb-3">3. Szükséges sütik</h2>
              <p>
                A szükséges sütik nélkülözhetetlenek az oldal alapvető működéséhez. Nem gyűjtenek személyes
                azonosításra alkalmas adatot, és nem adják át harmadik félnek. Letiltásuk esetén egyes funkciók nem
                működnek megfelelően.
              </p>
            </section>

            <section aria-labelledby="analytics-title">
              <h2 id="analytics-title" className="text-xl font-bold text-slate-900 mb-3">4. Analitikai sütik</h2>
              <p>
                Az analitikai sütikkel névtelen statisztikákat gyűjtünk a használatról (pl. mely oldalakat látogatják,
                mennyi ideig). Ezeket kizárólag a szolgáltatás fejlesztésére használjuk.
              </p>
              <p className="mt-3">
                Analitikára a <strong className="text-slate-900">Vercel Analytics</strong> szolgáltatást használjuk,
                amely GDPR-kompatibilis és nem osztja meg az adatokat harmadik féllel.
              </p>
            </section>

            <section aria-labelledby="control-title">
              <h2 id="control-title" className="text-xl font-bold text-slate-900 mb-3">5. Sütik kezelése</h2>
              <p>
                A legtöbb böngésző alapból elfogadja a sütiket; beállíthatod azonban, hogy ne fogadja el őket, vagy
                minden alkalommal kérjen megerősítést.
              </p>
              <p className="mt-3">Főbb böngészőkben így kezelheted a sütiket:</p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>Chrome: Beállítások → Adatvédelem és biztonság → Sütik</li>
                <li>Firefox: Beállítások → Adatvédelem és biztonság</li>
                <li>Safari: Beállítások → Adatvédelem</li>
                <li>Edge: Beállítások → Sütik és webhelyadatok</li>
              </ul>
            </section>

            <section aria-labelledby="more-title">
              <h2 id="more-title" className="text-xl font-bold text-slate-900 mb-3">6. További információk</h2>
              <p>
                Részletes adatkezelési tájékoztató az{' '}
                <Link href="/adatvedelmi-szabalyzat" className="text-amber-600 hover:underline font-medium">
                  Adatvédelmi szabályzatban
                </Link>
                . Kérdéseiddel:{' '}
                <a href="mailto:info@jegyossze.com" className="text-amber-600 hover:underline font-medium">
                  info@jegyossze.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
