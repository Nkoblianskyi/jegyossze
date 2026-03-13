import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'jegyossze – Jegyárak összehasonlítása egy helyen',
  description:
    'A jegyossze független jegyár-összehasonlító platform. Egy helyen lásd a Jegy.hu, Eventim és további megbízható partnerek árait – válaszd a legjobb ajánlatot.',
  keywords: 'jegy, esemény, koncert, sport, színház, fesztivál, árösszehasonlítás, jegyossze, Magyarország',
  authors: [{ name: 'jegyossze', url: 'https://jegyossze.com' }],
  metadataBase: new URL('https://jegyossze.com'),
  openGraph: {
    title: 'jegyossze – Jegyárak összehasonlítása',
    description:
      'Összehasonlítjuk a jegyárakat 8 megbízható partnertől. Egyszerű, átlátható, ingyenes.',
    url: 'https://jegyossze.com',
    siteName: 'jegyossze',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
