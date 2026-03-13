import Link from 'next/link'
import { Mail, MapPin, Ticket } from 'lucide-react'
import Image from 'next/image'

const partnerNames = [
  'Jegy.hu',
  'Eventim HU',
  'StubHub',
  'Viagogo',
  'Tixa',
  'Jegymester',
]

const OFFICE_ADDRESS = '1134 Budapest, Váci út 45., Irodaközpont'
const EMAIL = 'info@jegyossze.com'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Compliance disclaimer – unchanged position, new styling */}
      <div
        className="border-t-4 border-amber-500 bg-slate-800/80 py-8 px-4"
        role="note"
        aria-label="Megfelelőségi nyilatkozat"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-amber-500 rounded-full shrink-0" aria-hidden="true" />
            <p className="text-white font-bold text-sm">Fontos megfelelőségi nyilatkozat</p>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            A <strong className="text-white">jegyossze.com</strong> független árösszehasonlító platform (aggregátor).
            Nem értékesítünk közvetlenül jegyeket, csak összehasonlítjuk az engedélyezett viszonteladók ajánlatait.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Az <strong className="text-white">árak meghaladhatják a névértéket</strong> (face value). Minden ár
            átláthatóan megjelenik, a névértékkel és az összes díjjal együtt. A vásárlást a kiválasztott partnernél
            hajtja végre.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed">
            <strong className="text-white">Partnereink:</strong> Jegy.hu, Eventim HU, StubHub, Viagogo, Tixa, Jegymester
          </p>
        </div>
      </div>

      {/* Main footer: pattern background, new structure */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(30, 58, 138, 0.12) 0%, transparent 45%)`,
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand + address */}
            <div className="lg:col-span-1 flex flex-col gap-5">
              <Link
                href="/"
                className="flex items-center gap-2.5 w-fit"
                aria-label="jegyossze főoldal"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500 text-slate-900">
                  <Ticket className="w-5 h-5" aria-hidden="true" />
                </span>
                <span className="text-white font-extrabold text-lg tracking-tight">
                  jegy<span className="text-amber-400">ossze</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                A jegyossze egy független jegyár-összehasonlító. Egy helyen látod a legnagyobb partnerek árait –
                egyszerűen és ingyen.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors w-fit"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
                <div className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{OFFICE_ADDRESS}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigáció</h3>
              <nav className="flex flex-col gap-2.5" aria-label="Lábléc navigáció">
                {[
                  { href: '/', label: 'Főoldal' },
                  { href: '/esemenyek', label: 'Események' },
                  { href: '/rolunk', label: 'Rólunk' },
                  { href: '/partnerek', label: 'Partnerek' },
                  { href: '/kapcsolat', label: 'Kapcsolat' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Partners */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Partnereink</h3>
              <ul className="flex flex-wrap gap-2" aria-label="Jegypartnerek listája">
                {partnerNames.map((p) => (
                  <li key={p}>
                    <span className="text-xs bg-slate-700/80 text-slate-300 px-2.5 py-1.5 rounded-lg">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Jogi információk</h3>
              <nav className="flex flex-col gap-2.5" aria-label="Jogi dokumentumok">
                <Link
                  href="/adatvedelmi-szabalyzat"
                  className="text-sm text-slate-400 hover:text-white transition-colors w-fit"
                >
                  Adatvédelmi szabályzat
                </Link>
                <Link
                  href="/suti-tajekoztato"
                  className="text-sm text-slate-400 hover:text-white transition-colors w-fit"
                >
                  Süti tájékoztató
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-slate-700/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} jegyossze – jegyossze.com. Minden jog fenntartva.
            </p>
            <p className="text-xs text-slate-500 text-center sm:text-right max-w-md">
              Az oldalon megjelenő árak tájékoztató jellegűek. A vásárlás a partner oldalán, annak feltételei szerint
              jön létre.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
