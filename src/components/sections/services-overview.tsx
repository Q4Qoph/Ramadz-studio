"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    slug: "social-media",
    image: "/background2.jpg",
    title: "Social Media Strategy & Management",
    description: "Social media is not posting. It's infrastructure. We build brand voice, craft strategic content calendars, and drive measurable audience growth.",
  },
  {
    slug: "sme-growth",
    image: "/background3.jpg",
    title: "SMEs Digital Growth Systems",
    description: "We don't just post. We build systems that sell — from business audits and competitor positioning to sales funnels and lead generation.",
  },
  {
    slug: "brand-identity",
    image: "/background1.jpg",
    title: "Brand Identity Development",
    description: "Visibility without clarity is chaos. We articulate your mission, develop your visual language, and document a comprehensive brand guide.",
  },
  {
    slug: "podcast",
    image: "/background2.jpg",
    title: "Podcast Production & Monetization",
    description: "Complete podcast systems from the ground up — concept, audio/video editing, multi-platform distribution, and revenue alignment.",
  },
]

function ServiceCard({
  service,
  index,
  scrollYProgress,
}: {
  service: { slug: string; image: string; title: string; description: string }
  index: number
  scrollYProgress: MotionValue<number>
}) {
  // Start revealing after 15% scroll to allow the "What We Do" watermark to be fully visible first
  const start = 0.15 + index * 0.17
  const end = start + 0.20
  
  const y = useTransform(scrollYProgress, [start, end], [320, 0])
  const opacity = useTransform(scrollYProgress, [start, start + 0.08], [0, 1])
  const scale = useTransform(scrollYProgress, [start, end], [0.88, 1])

  return (
    <motion.div 
      style={{ y, opacity, scale, zIndex: index }} 
      className="absolute lg:relative w-full max-w-sm sm:max-w-md lg:max-w-none h-full"
    >
      <Link href={`/services#${service.slug}`} aria-label={`Learn more about ${service.title}`} className="block h-full">
        <Card className="h-full group hover:shadow-xl transition-all duration-500 border-0 bg-white relative overflow-hidden">
          {/* Diagonal arrow — top-right */}
          <ArrowUpRight className="absolute top-4 right-4 z-10 w-5 h-5 text-charcoal/40 group-hover:text-brand-orange transition-colors duration-300" />

          {/* Image — flush top */}
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-cream">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <CardContent className="p-5">
            <h3 className="text-base font-semibold text-charcoal mb-2 leading-snug pr-4">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

            {/* Learn More with sliding arrow */}
            <div className="flex items-center justify-between text-brand-orange font-semibold text-sm">
              <span>Learn More</span>
              <span className="inline-flex -translate-x-[180px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export default function ServicesOverview() {
  const outerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  })
  
  // Fade out watermark as cards fill the screen
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.4, 0.85], [1, 0.5, 0])

  return (
    <section className="bg-cream/40">
      {/* ── Scroll-driven card reveal (Responsive Sticky Stack) ── */}
      <div ref={outerRef} className="relative min-h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

          {/* Watermark in background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none"
            style={{ opacity: bgTextOpacity }}
          >
            <span
              className="text-[5rem] sm:text-[9rem] md:text-[11rem] lg:text-[13rem] xl:text-[16rem] font-serif font-bold whitespace-nowrap leading-none"
              style={{ color: 'rgba(45,45,45,0.08)' }}
            >
              What We Do
            </span>
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center items-center">
            {/* 
              Desktop: standard horizontal 4-column grid.
              Mobile/Tablet: Stack of absolute-positioned cards in center of screen.
            */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-[440px] sm:h-[460px] lg:h-auto flex items-center justify-center lg:grid lg:grid-cols-4 lg:gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA (normal flow) ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-10 py-6 text-base sm:text-lg rounded-full"
            asChild
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
