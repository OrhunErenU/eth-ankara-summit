import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — 23-24 Mayıs 2026`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['Ethereum', 'Ankara', 'blockchain', 'Web3', 'hackathon', 'conference', 'ETH'],
  openGraph: {
    title: `${SITE_NAME} — 23-24 Mayıs 2026`,
    description: SITE_DESCRIPTION,
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — 23-24 Mayıs 2026`,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="noise-overlay bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
