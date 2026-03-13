'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function ContactFormSection() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) {
      setSubmitted(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200" aria-labelledby="contact-section-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="contact-section-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
          Kérdésed van?
        </h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Hiányzó eseményt találtál, javaslatod van vagy partneri együttműködés érdekel? Írj nekünk – hamarosan válaszolunk.
        </p>

        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Kapcsolatfelvétel
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-2xl p-0 gap-0 overflow-hidden">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="text-xl font-bold text-slate-900 text-left">
                Üzenet küldése
              </DialogTitle>
            </DialogHeader>
            <div className="p-6 pt-4">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-emerald-600" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-slate-900">Üzeneted elküldve!</p>
                  <p className="text-sm text-slate-600">Hamarosan válaszolunk.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" aria-label="Kapcsolatfelvételi űrlap">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="cf-name" className="text-sm font-medium text-slate-700">Név *</label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Kovács János"
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="cf-email" className="text-sm font-medium text-slate-700">Email *</label>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@pelda.hu"
                        className="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="cf-subject" className="text-sm font-medium text-slate-700">Tárgy *</label>
                    <select
                      id="cf-subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30"
                    >
                      <option value="">Válassz...</option>
                      <option value="hiba">Hibás / elavult adat</option>
                      <option value="hianyzó">Hiányzó esemény</option>
                      <option value="partner">Partneri együttműködés</option>
                      <option value="egyeb">Egyéb</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="cf-message" className="text-sm font-medium text-slate-700">Üzenet *</label>
                    <textarea
                      id="cf-message"
                      name="message"
                      required
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Írd ide üzeneted..."
                      className="border border-slate-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-2.5 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Küldés
                  </button>
                </form>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
