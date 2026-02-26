import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'RMDZ Studios — Strategic Content & Digital Growth',
  description: 'We help professionals and service-based brands build authority, structure their messaging, and convert online attention into measurable income.',
  keywords: 'strategic content, digital growth, brand authority, social media strategy, podcast production, brand identity, SME growth, content studio, Mombasa, Kenya',
  authors: [{ name: 'RMDZ Studios' }],
  openGraph: {
    title: 'RMDZ Studios — Strategic Content & Digital Growth',
    description: 'We help professionals and service-based brands build authority, structure their messaging, and convert online attention into measurable income.',
    url: 'https://rmdstudios.com',
    siteName: 'RMDZ Studios',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMDZ Studios — Strategic Content & Digital Growth',
    description: 'We help professionals and service-based brands build authority, structure their messaging, and convert online attention into measurable income.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}