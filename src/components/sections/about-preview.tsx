"use client"

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const clientTypes = [
  ['Coaches', 'Counselors'],
  ['Pastors & ministry leaders', 'Podcasters'],
  ['Real estate brands', 'SMEs & service providers'],
  ['Thought leaders', ''],
]

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-cream rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-charcoal">Who We Are</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Strategic Content.{' '}
              <span className="text-gradient">Real Growth.</span>{' '}
              Measurable Income.
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              RMDZ Studios is a strategic content and digital growth studio that helps professionals
              and service-based brands build authority, structure their messaging, and convert online
              attention into measurable income.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We've grown with our clients — podcasts that began as passion projects are now
              platforms of influence. Social feeds that once blended in are now setting trends.
              Our story is a blend of hustle, humanity, and the relentless pursuit of creative clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Client Types */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-xl font-semibold text-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We specialize in serving:
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Coaches',
                'Counselors',
                'Pastors & ministry leaders',
                'Podcasters',
                'Real estate brands',
                'SMEs & service providers',
                'Thought leaders building digital authority',
              ].map((client, index) => (
                <motion.div
                  key={client}
                  className="flex items-start space-x-3 bg-cream/60 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal font-medium text-sm leading-snug">{client}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
