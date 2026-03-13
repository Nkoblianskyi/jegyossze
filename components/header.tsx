'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Ticket, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/esemenyek', label: 'Események' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/partnerek', label: 'Partnerek' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

const OFFICE_ADDRESS = '1134 Budapest, Váci út 45., Irodaközpont'

export function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="jegyossze főoldal"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-amber-400 group-hover:bg-slate-800 transition-colors">
              <Ticket className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              jegy<span className="text-amber-500">ossze</span>
            </span>
          </Link>

          {/* Desktop: address strip (optional, compact) */}
          <div className="hidden lg:flex items-center gap-2 text-slate-500 text-sm">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
            <span>{OFFICE_ADDRESS}</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Főmenü">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              Jegyek keresése
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-slate-200 bg-white px-4 pb-5 pt-2"
          role="navigation"
          aria-label="Mobil menü"
        >
          <div className="flex flex-col gap-1 pt-2">
            <div className="flex items-center gap-2 text-sm text-slate-500 px-3 py-2">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{OFFICE_ADDRESS}</span>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.href ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/esemenyek"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-amber-500 text-slate-900 font-bold text-sm px-4 py-3 rounded-xl"
            >
              Jegyek keresése
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
