// src/components/sections/hero.tsx
"use client"

import { motion } from 'framer-motion'
import { Play, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige via-white to-beige">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gold/5 to-gold-light/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-charcoal">Creative Studio</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Empowering{' '}
              <span className="text-gradient">Creativity</span>
              <br />
              Across Every Platform
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We amplify voices, ideas, and brands through captivating content and culture-shifting conversations. 
              Transform your vision into impact with purpose-driven media.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-brand hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-3"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 px-8 py-3"
                asChild
              >
                <Link href="/portfolio">
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-charcoal">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-charcoal">25+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-charcoal">100K+</div>
                <div className="text-sm text-gray-600">Content Views</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold-light/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-12 h-12 text-gold" />
                    </div>
                    <p className="text-gray-600 font-medium">Studio Showcase Video</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold text-charcoal">4.9</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-center">
                  <div className="text-sm font-bold text-charcoal">24/7</div>
                  <div className="text-xs text-gray-500">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-charcoal/50 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}