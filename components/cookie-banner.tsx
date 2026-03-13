'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X, Check } from 'lucide-react'

const CONSENT_KEY = 'ek_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Süti hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5"
    >
      <div className="max-w-2xl mx-auto rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 md:p-6">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <Cookie className="w-6 h-6 text-amber-600" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-slate-900 font-bold text-base mb-1">Sütiket használunk</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                A jegyossze sütiket használ a működéshez és a látogatási statisztikákhoz. Az „Elfogadom”
                gombra kattintva hozzájárulsz az analitikai sütikhez is. Részletek:{' '}
                <Link
                  href="/suti-tajekoztato"
                  className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
                  onClick={() => setVisible(false)}
                >
                  Süti tájékoztató
                </Link>
                {' · '}
                <Link
                  href="/adatvedelmi-szabalyzat"
                  className="text-amber-600 hover:text-amber-700 font-medium underline underline-offset-2"
                  onClick={() => setVisible(false)}
                >
                  Adatvédelmi szabályzat
                </Link>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 sm:flex-col sm:items-stretch">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors"
              aria-label="Csak szükséges sütik"
            >
              <X className="w-4 h-4" aria-hidden="true" />
              Csak szükséges
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 text-sm font-bold transition-colors"
              aria-label="Összes süti elfogadása"
            >
              <Check className="w-4 h-4" aria-hidden="true" />
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
