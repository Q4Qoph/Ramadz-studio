"use client"
import { motion } from 'framer-motion'

export default function QuoteBanner() {
  return (
    <section className="py-16 sm:py-20 bg-olive-dark relative overflow-hidden">
      {/* Decorative circle */}
      <div
        className="circle-deco w-64 h-64 top-[-3rem] right-[-3rem]"
        style={{ backgroundColor: '#B54808', opacity: 0.12 }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.p
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-cream text-center leading-snug max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We don&apos;t just create content — we build{' '}
          <span className="text-brand-orange">strategy, clarity, and lasting authority</span>
          {' '}that turns your expertise into income.
        </motion.p>
      </div>
    </section>
  )
}
