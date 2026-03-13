import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adatvédelmi szabályzat | jegyossze',
  description: 'A jegyossze adatvédelmi szabályzata – milyen adatokat gyűjtünk, hogyan használjuk és milyen jogok illetnek meg.',
}

export default function AdatvedelmiPage() {
  return (
    <>
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(245,158,11,0.12),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Adatvédelmi szabályzat</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Adatvédelmi szabályzat</h1>
          <p className="text-slate-400">Utolsó módosítás: 2025. január 1.</p>
        </div>
      </section>

      <div className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10 flex flex-col gap-10 prose-sm text-slate-600 leading-relaxed">

            <section aria-labelledby="intro-title">
              <h2 id="intro-title" className="text-xl font-bold text-slate-900 mb-3">1. Bevezetés</h2>
              <p>
                A jegyossze (a továbbiakban: „mi”, „szolgáltatás”) elkötelezett a személyes adatok védelme mellett.
                Jelen szabályzat ismerteti, milyen adatokat gyűjtünk, hogyan használjuk őket, és milyen jogok illetnek meg.
              </p>
              <p className="mt-3">
                A jegyossze egy <strong className="text-slate-900">független összehasonlító platform</strong>. Nem
                értékesítünk jegyeket közvetlenül; a weboldalunkon keresztül nem jön létre jegyvásárlási tranzakció.
              </p>
            </section>

            <section aria-labelledby="data-title">
              <h2 id="data-title" className="text-xl font-bold text-slate-900 mb-3">2. Gyűjtött adatok</h2>
              <h3 className="font-semibold text-slate-900 mb-2">2.1 Automatikusan gyűjtött adatok</h3>
              <ul className="list-disc list-inside flex flex-col gap-1 mb-4">
                <li>IP-cím (anonimizálva)</li>
                <li>Böngésző típusa és verziója</li>
                <li>Látogatott oldalak és keresési kifejezések</li>
                <li>Látogatás időpontja és időtartama</li>
              </ul>
              <h3 className="font-semibold text-slate-900 mb-2">2.2 Kapcsolatfelvételkor megadott adatok</h3>
              <ul className="list-disc list-inside flex flex-col gap-1">
                <li>Név</li>
                <li>Email-cím</li>
                <li>Üzenet tartalma</li>
              </ul>
            </section>

            <section aria-labelledby="usage-title">
              <h2 id="usage-title" className="text-xl font-bold text-slate-900 mb-3">3. Az adatok felhasználása</h2>
              <p>Az adatokat a következő célokra használjuk:</p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>A szolgáltatás megfelelő működésének biztosítása</li>
                <li>Kapcsolatfelvételi üzenetek megválaszolása</li>
                <li>Tartalom és felhasználói élmény fejlesztése</li>
                <li>Statisztikai elemzések (kizárólag anonimizált formában)</li>
              </ul>
            </section>

            <section aria-labelledby="sharing-title">
              <h2 id="sharing-title" className="text-xl font-bold text-slate-900 mb-3">4. Adattovábbítás</h2>
              <p>
                Személyes adataidat harmadik félnek nem adjuk el vagy át, kivéve ha törvény ezt előírja. Az „Ajánlat
                megtekintése” gombra kattintva a partner weboldalára kerülsz, ahol a partner adatvédelmi szabályzata
                érvényes.
              </p>
            </section>

            <section aria-labelledby="cookies-title">
              <h2 id="cookies-title" className="text-xl font-bold text-slate-900 mb-3">5. Sütik (cookies)</h2>
              <p>
                Weboldalunk sütiket használ a felhasználói élmény javítása érdekében. Részletesen a{' '}
                <Link href="/suti-tajekoztato" className="text-amber-600 hover:underline font-medium">
                  Süti tájékoztatóban
                </Link>{' '}
                olvashatsz.
              </p>
            </section>

            <section aria-labelledby="rights-title">
              <h2 id="rights-title" className="text-xl font-bold text-slate-900 mb-3">6. Jogaid</h2>
              <p>GDPR alapján az alábbi jogok illetnek meg:</p>
              <ul className="list-disc list-inside flex flex-col gap-1 mt-2">
                <li>Hozzáférés joga – megismerheted a rólad tárolt adatokat</li>
                <li>Helyesbítés joga – kérheted a pontatlan adatok módosítását</li>
                <li>Törlés joga – kérheted adataid törlését</li>
                <li>Adathordozhatóság joga – kérheted adataid géppel olvasható formátumban</li>
                <li>Tiltakozás joga – tiltakozhatsz a feldolgozás ellen</li>
              </ul>
              <p className="mt-3">
                Jogaid gyakorlásához írj erre az email-címre:{' '}
                <a href="mailto:info@jegyossze.com" className="text-amber-600 hover:underline font-medium">
                  info@jegyossze.com
                </a>
              </p>
            </section>

            <section aria-labelledby="contact-data-title">
              <h2 id="contact-data-title" className="text-xl font-bold text-slate-900 mb-3">7. Kapcsolat</h2>
              <p>Adatvédelemmel kapcsolatos kérdéseiddel bátran fordulj hozzánk:</p>
              <p className="mt-2">
                <strong className="text-slate-900">jegyossze</strong><br />
                Email:{' '}
                <a href="mailto:info@jegyossze.com" className="text-amber-600 hover:underline">
                  info@jegyossze.com
                </a>
                <br />
                Web: jegyossze.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
