// src/components/sections/hero.tsx - Dark olive brand theme
"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const preloadImages = ['/background1.jpg', '/background2.jpg', '/background3.jpg']
    let loadedCount = 0

    preloadImages.forEach(src => {
      const img = new Image()
      img.onload = () => {
        loadedCount++
        if (loadedCount === preloadImages.length) setImagesLoaded(true)
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === preloadImages.length) setImagesLoaded(true)
      }
      img.src = src
    })

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-olive-dark">
      {/* Decorative Circles */}
      {/* Top-right: large burnt orange circle (partial, overflowing) */}
      <div
        className="circle-deco w-96 h-96 top-[-6rem] right-[-6rem]"
        style={{ backgroundColor: '#B54808', opacity: 0.25 }}
      />
      {/* Bottom-left: medium cream circle */}
      <div
        className="circle-deco w-64 h-64 bottom-[-4rem] left-[-4rem]"
        style={{ backgroundColor: '#E5D9B6', opacity: 0.12 }}
      />
      {/* Top-center: small dark olive-gray circle */}
      <div
        className="circle-deco w-32 h-32 top-24 left-1/2 -translate-x-1/2"
        style={{ backgroundColor: '#636255', opacity: 0.3 }}
      />
      {/* Bottom-right: small burnt orange circle */}
      <div
        className="circle-deco w-24 h-24 bottom-24 right-24"
        style={{ backgroundColor: '#B54808', opacity: 0.35 }}
      />

      <div className="container mx-auto py-14 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-cream mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Build Authority.{' '}
              <span className="text-brand-orange">Structure</span>{' '}
              Your Message.{' '}
              <span className="text-gradient">Convert Attention Into Income.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-brand-cream/75 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              RMDZ Studios is a strategic content and digital growth studio that helps professionals
              and service-based brands build authority, structure their messaging, and convert online
              attention into measurable income.
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
                className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-3"
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
                className="border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-olive-dark transition-all duration-300 px-8 py-3"
                asChild
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-brand-cream/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-brand-cream">50+</div>
                <div className="text-sm text-brand-cream/60">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-brand-cream">25+</div>
                <div className="text-sm text-brand-cream/60">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-brand-cream">100K+</div>
                <div className="text-sm text-brand-cream/60">Content Views</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Gallery */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Loading Skeleton */}
            <AnimatePresence>
              {!imagesLoaded && (
                <motion.div
                  className="gallery-container-skeleton"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-2 w-4/5 max-w-80 mx-auto">
                    {[...Array(3)].map((_, colIndex) => (
                      <div key={colIndex} className="flex flex-col gap-2 w-full">
                        {[...Array(3)].map((_, itemIndex) => {
                          const heights = [
                            ['h-16', 'h-24', 'h-12'],
                            ['h-16', 'h-36', 'h-12'],
                            ['h-24', 'h-20', 'h-12']
                          ]
                          return (
                            <motion.div
                              key={itemIndex}
                              className={`${heights[colIndex][itemIndex]} bg-olive-mid rounded-lg`}
                              initial={{ opacity: 0.3 }}
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: (colIndex * 3 + itemIndex) * 0.1
                              }}
                            />
                          )
                        })}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gallery Container */}
            <motion.div
              className={`gallery-container ${isPaused ? 'paused' : ''}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: imagesLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="column column-1">
                <motion.div className="item item-1 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
                <motion.div className="item item-2 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
                <motion.div className="item item-3 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
              </div>
              <div className="column column-2">
                <motion.div className="item item-1 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
                <motion.div className="item item-2 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
                <motion.div className="item item-3 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
              </div>
              <div className="column column-3">
                <motion.div className="item item-1 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
                <motion.div className="item item-2 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
                <motion.div className="item item-3 gallery-item-hover" whileHover={!isMobile ? { scale: 1.02, zIndex: 10 } : {}} transition={{ duration: 0.2 }} />
              </div>
            </motion.div>

            {/* Pause Indicator */}
            {!isMobile && (
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isPaused ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-olive-dark/70 text-brand-cream px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  Paused
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --image-1: url("/background1.jpg");
          --image-2: url("/background2.jpg");
          --image-3: url("/background3.jpg");
        }

        .gallery-container {
          display: flex;
          flex-direction: row;
          width: 80%;
          max-width: 20rem;
          gap: 0.5rem;
          margin: 0 auto;
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .gallery-container:hover {
          filter: brightness(1.05) contrast(1.02);
        }

        .gallery-container.paused .column .item {
          animation-play-state: paused;
        }

        .gallery-container .column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: inherit;
          width: 100%;
        }

        .gallery-item-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .gallery-item-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(181, 72, 8, 0.15), rgba(139, 54, 6, 0.15));
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .gallery-item-hover:hover::before {
          opacity: 1;
        }

        .gallery-container .column-1 .item-1 {
          height: 4rem;
          animation: background 5s 150ms infinite ease-in-out;
          background-position: 0% 0%;
        }

        .gallery-container .column-1 .item-2 {
          height: 6rem;
          animation: background 5s 274ms infinite ease-in-out;
          background-position: 0% 50%;
        }

        .gallery-container .column-1 .item-3 {
          height: 3rem;
          animation: background 5s 350ms infinite ease-in-out;
          background-position: 0% 100%;
        }

        .gallery-container .column-2 .item-1 {
          height: 4rem;
          animation: background 5s 150ms infinite ease-in-out;
          background-position: 50% 0%;
        }

        .gallery-container .column-2 .item-2 {
          height: 9rem;
          animation: background 5s 274ms infinite ease-in-out;
          background-position: 50% 50%;
        }

        .gallery-container .column-2 .item-3 {
          height: 3rem;
          animation: background 5s 350ms infinite ease-in-out;
          background-position: 50% 100%;
        }

        .gallery-container .column-3 .item-1 {
          height: 6rem;
          animation: background 5s 280ms infinite ease-in-out;
          background-position: 100% 0%;
        }

        .gallery-container .column-3 .item-2 {
          height: 5rem;
          animation: background 5s 95ms infinite ease-in-out;
          background-position: 100% 50%;
        }

        .gallery-container .column-3 .item-3 {
          height: 3rem;
          animation: background 5s 350ms infinite ease-in-out;
          background-position: 100% 100%;
        }

        .gallery-container .column .item {
          width: inherit;
          border-radius: 0.5rem;
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: 800px 600px;
          position: relative;
          will-change: transform;
          backface-visibility: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .gallery-container .column .item:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        @keyframes background {
          0% { background-image: var(--image-1); filter: brightness(1) contrast(1); }
          30% { background-image: var(--image-1); filter: brightness(1.02) contrast(1.02); }
          33% { background-image: var(--image-2); filter: brightness(1) contrast(1); }
          63% { background-image: var(--image-2); filter: brightness(1.02) contrast(1.02); }
          66% { background-image: var(--image-3); filter: brightness(1) contrast(1); }
          96% { background-image: var(--image-3); filter: brightness(1.02) contrast(1.02); }
          100% { background-image: var(--image-1); filter: brightness(1) contrast(1); }
        }

        @media (max-width: 768px) {
          .gallery-container {
            max-width: 16rem;
            gap: 0.25rem;
          }

          .gallery-container .column .item {
            background-size: 600px 450px;
          }

          .gallery-item-hover:hover::before {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-container .column .item {
            animation-duration: 10s;
          }

          .gallery-item-hover {
            transition: none;
          }
        }

        @media (prefers-contrast: high) {
          .gallery-container .column .item {
            border: 2px solid currentColor;
          }
        }
      `}</style>
    </section>
  )
}
