"use client"

import { motion } from 'framer-motion'
import { BarChart2, TrendingUp, Palette, Mic, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const services = [
  {
    icon: BarChart2,
    title: "Social Media Strategy & Management",
    description: "Social media is not posting. It's infrastructure. We build brand voice, craft strategic content calendars, and drive measurable audience growth.",
    tags: ["Content Planning", "Caption Writing", "Reel Scripting", "Analytics"],
  },
  {
    icon: TrendingUp,
    title: "SMEs Digital Growth Systems",
    description: "We don't just post. We build systems that sell — from business audits and competitor positioning to sales funnels and lead generation.",
    tags: ["Digital Audit", "Sales Funnel", "Lead Generation", "Campaigns"],
  },
  {
    icon: Palette,
    title: "Brand Identity Development",
    description: "Visibility without clarity is chaos. We articulate your mission, develop your visual language, and document a comprehensive brand guide.",
    tags: ["Mission & Vision", "Visual Identity", "Brand Voice", "Guidelines"],
  },
  {
    icon: Mic,
    title: "Podcast Production & Monetization",
    description: "Complete podcast systems from the ground up — concept, audio/video editing, multi-platform distribution, and revenue alignment.",
    tags: ["Audio Editing", "Video Podcast", "Distribution", "Monetization"],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-cream/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-charcoal">Our Services</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Strategic Solutions for{' '}
            <span className="text-gradient">Real Growth</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From social media infrastructure to complete brand systems, we provide
            end-to-end strategic services that convert your expertise into income.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-charcoal mb-3 leading-snug">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tag}
                        className="inline-block bg-cream text-charcoal text-xs px-3 py-1 rounded-full mr-2 mb-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + tagIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="text-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 p-0 h-auto font-semibold group"
                    asChild
                  >
                    <Link href="/services">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white"
            asChild
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
