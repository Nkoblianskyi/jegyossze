'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const OFFICE_ADDRESS = 'Debrecen, Csapó utca 40., Magyarország'
const EMAIL = 'info@jegyossze.com'

export default function KapcsolatPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,158,11,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Kapcsolat</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 max-w-2xl">
            Írj nekünk
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Kérdésed van, javaslatod vagy hiányzó eseményt találtál? Küldd el üzeneted – 1–2 munkanapon belül válaszolunk.
          </p>
        </div>
      </section>

      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-5">
                <h2 className="font-bold text-slate-900 text-lg">Elérhetőségeink</h2>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Email</p>
                    <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-slate-900 hover:text-amber-600 transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Cím</p>
                    <p className="text-sm font-semibold text-slate-900">{OFFICE_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Válaszidő</p>
                    <p className="text-sm font-semibold text-slate-900">1–2 munkanapon belül</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-amber-50 border border-amber-200/80 p-5 text-sm">
                <p className="font-semibold text-amber-900 mb-2">Emlékeztető</p>
                <p className="text-amber-800 leading-relaxed">
                  A jegyossze független összehasonlító platform. Jegyvásárlással kapcsolatos kérdésekkel
                  kérjük, közvetlenül a jegypartnerhez fordulj.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Üzeneted megérkezett!</h2>
                  <p className="text-slate-600 max-w-sm leading-relaxed">
                    Köszönjük! 1–2 munkanapon belül válaszolunk az általad megadott email-címre.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="mt-4 text-sm text-amber-600 font-semibold hover:underline"
                  >
                    Új üzenet küldése
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col gap-5"
                  aria-label="Kapcsolatfelvételi űrlap"
                >
                  <h2 className="font-bold text-slate-900 text-xl">Üzenet küldése</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Név <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="pl. Kovács János"
                        className="border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 placeholder:text-slate-400"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="pl. kovacs@email.hu"
                        className="border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                      Tárgy <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    >
                      <option value="">Válassz kategóriát...</option>
                      <option value="hiba">Hibás vagy elavult adat bejelentése</option>
                      <option value="hianyzó">Hiányzó esemény beküldése</option>
                      <option value="partner">Partneri együttműködés</option>
                      <option value="egyeb">Egyéb kérdés</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Üzenet <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Írd ide üzeneted..."
                      className="border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 placeholder:text-slate-400 resize-none"
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Az{' '}
                    <a href="/adatvedelmi-szabalyzat" className="text-amber-600 hover:underline">
                      adatvédelmi szabályzatunkat
                    </a>{' '}
                    itt olvashatod.
                  </p>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Üzenet küldése
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
