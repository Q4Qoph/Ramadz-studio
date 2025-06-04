// src/app/page.tsx
import Hero from '@/components/sections/hero'
import AboutPreview from '@/components/sections/about-preview'
import ServicesOverview from '@/components/sections/services-overview'
import PortfolioHighlights from '@/components/sections/portfolio-highlights'
import CTASection from '@/components/sections/cta-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <PortfolioHighlights />
      <CTASection />
    </>
  )
}