"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Headphones, Music2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const portfolioItems = [
  {
    title: "Romantic Dimension Podcast",
    category: "Podcast & Content Strategy",
    description: "A relationship-focused platform designed to strengthen marriages and promote healthy, faith-centered partnerships. We built the complete content ecosystem — from episode frameworks and audio editing to short-form repurposing and thematic storytelling.",
    tags: ["Podcast", "Content Strategy", "Relationship", "Faith"],
    Icon: Headphones,
    accentColor: '#B54808',
  },
  {
    title: "Maendeleo Traditional Dancers",
    category: "Branding & Social Media",
    description: "A cultural preservation and performance group promoting African heritage through traditional dance and artistic expression. We created a cultural storytelling content ecosystem, behind-the-scenes footage, costume/tradition education posts, and an event booking funnel.",
    tags: ["Branding", "Cultural", "Social Media", "Events"],
    Icon: Music2,
    accentColor: '#4A4939',
  },
]

export default function PortfolioHighlights() {
  return (
    <section className="py-16 sm:py-24 bg-olive-dark text-white overflow-hidden">
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
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-brand-cream">Featured Work</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-brand-cream"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Real Clients.{' '}
            <span className="text-brand-orange">Real Results.</span>
          </motion.h2>

          <motion.p
            className="text-lg text-brand-cream/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From faith-based platforms to cultural storytelling, discover how we've helped
            our clients build authority and convert attention into meaningful outcomes.
          </motion.p>
        </motion.div>

        {/* Portfolio Items */}
        <div className="space-y-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  className="inline-block bg-brand-orange text-white text-sm px-3 py-1 rounded-full mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.category}
                </motion.div>

                <motion.h3
                  className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-brand-cream"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-brand-cream/70 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-olive-mid text-brand-cream/80 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Button
                    variant="outline"
                    className="border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-olive-dark transition-all duration-300"
                    asChild
                  >
                    <Link href="/portfolio">
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Visual Card */}
              <motion.div
                className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <div className="w-full h-80 bg-olive-mid rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <item.Icon className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-brand-cream font-semibold text-lg">{item.title}</p>
                      <p className="text-brand-cream/60 text-sm mt-1">{item.category}</p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-end justify-center pb-8">
                    <Button
                      size="sm"
                      className="bg-brand-orange hover:bg-brand-orange/90 text-white"
                      asChild
                    >
                      <Link href="/portfolio">View Project</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
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
            <Link href="/portfolio">
              View Full Portfolio
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
