"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Target, TrendingUp, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  { icon: Target, text: "Authority Building" },
  { icon: TrendingUp, text: "Measurable Growth" },
  { icon: Award, text: "Strategic Systems" }
]

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-olive-dark relative overflow-hidden">
      {/* Decorative circles */}
      <div
        className="circle-deco w-80 h-80 top-[-4rem] right-[-4rem]"
        style={{ backgroundColor: '#B54808', opacity: 0.15 }}
      />
      <div
        className="circle-deco w-48 h-48 bottom-[-3rem] left-[-3rem]"
        style={{ backgroundColor: '#E5D9B6', opacity: 0.08 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header pill */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Target className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-medium text-brand-cream">Ready to Start?</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Turn Your Expertise Into{' '}
            <span className="text-brand-orange">Visible Authority</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-brand-cream/70 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join professionals and service-based brands who trust RMDZ Studios to build
            their digital authority, structure their messaging, and convert online attention
            into measurable income.
          </motion.p>

          {/* Features */}
          <motion.div
            className="grid sm:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center justify-center space-x-3 text-brand-cream"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/contact">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-brand-cream hover:text-white hover:bg-olive-mid font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-brand-cream/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <p className="text-brand-cream/60 mb-4">
              Have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="mailto:rmdstudios0@gmail.com"
                className="text-brand-orange hover:text-brand-cream transition-colors duration-300 font-medium"
              >
                rmdstudios0@gmail.com
              </a>
              <span className="hidden sm:block text-brand-cream/30">|</span>
              <a
                href="tel:+254713464208"
                className="text-brand-orange hover:text-brand-cream transition-colors duration-300 font-medium"
              >
                +254 713 464 208
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
