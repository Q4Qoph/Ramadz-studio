"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  { icon: Sparkles, text: "Creative Excellence" },
  { icon: Zap, text: "Fast Turnaround" },
  { icon: Heart, text: "Personalized Service" }
]

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-beige via-white to-beige relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-light/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-charcoal">Ready to Start?</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's Create Something{' '}
            <span className="text-gradient">Extraordinary</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to amplify your voice and transform your vision into impact? 
            Join the creators, podcasters, and brands who trust RMDZ Studios to bring their stories to life.
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
                className="flex items-center justify-center space-x-3 text-charcoal"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
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
              className="bg-gradient-brand hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-4 text-lg"
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
              className="text-charcoal hover:text-gold font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link href="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">
              Have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a 
                href="mailto:rmdstudios0@gmail.com" 
                className="text-gold hover:text-charcoal transition-colors duration-300 font-medium"
              >
                rmdstudios0@gmail.com
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a 
                href="tel:+254713464208" 
                className="text-gold hover:text-charcoal transition-colors duration-300 font-medium"
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