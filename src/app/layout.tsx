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
  title: 'RMDZ Studios - Empowering Creativity Across Every Platform',
  description: 'Professional content creation, podcast production, and creative consulting services. We create purpose-driven media that fuels thought, drives engagement, and inspires action.',
  keywords: 'content creation, podcast production, social media management, creative consulting, UGC, video production',
  authors: [{ name: 'RMDZ Studios' }],
  openGraph: {
    title: 'RMDZ Studios - Empowering Creativity Across Every Platform',
    description: 'Professional content creation, podcast production, and creative consulting services.',
    url: 'https://rmdstudios.com',
    siteName: 'RMDZ Studios',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RMDZ Studios - Empowering Creativity Across Every Platform',
    description: 'Professional content creation, podcast production, and creative consulting services.',
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