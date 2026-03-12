"use client"

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ExternalLink, Headphones, Music2, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// ─── Portfolio data ───────────────────────────────────────────────────────────

const initialPortfolioItems = [
  {
    id: 'romantic-dimension',
    title: "Romantic Dimension Podcast",
    category: "Podcast & Content Strategy",
    description: "A relationship-focused platform designed to strengthen marriages and promote healthy, faith-centered partnerships. We built the complete content ecosystem — episode frameworks, audio editing, short-form repurposing, and thematic storytelling.",
    stats: [
      { label: "Podcast Strategy" },
      { label: "Faith & Relationships" },
      { label: "Audio Production" },
      { label: "Short-form Content" },
    ],
    Icon: Headphones,
    accentColor: '#B54808',
  },
  {
    id: 'maendeleo-dancers',
    title: "Maendeleo Traditional Dancers",
    category: "Branding & Social Media",
    description: "A cultural preservation group promoting African heritage through traditional dance. We built a storytelling content ecosystem with behind-the-scenes footage, costume education posts, and an event booking funnel.",
    stats: [
      { label: "Cultural Branding" },
      { label: "Social Media" },
      { label: "Event Promotion" },
      { label: "Video Content" },
    ],
    Icon: Music2,
    accentColor: '#4A4939',
  },
  {
    id: 'elevate-media',
    title: "Elevate Media Hub",
    category: "Brand Identity & Social",
    description: "A digital media brand targeting young entrepreneurs and creatives. We built a full multi-platform presence across Instagram, TikTok, and LinkedIn — focused on business education content, reel production, and community growth.",
    stats: [
      { label: "Brand Identity" },
      { label: "Multi-Platform" },
      { label: "Reel Production" },
      { label: "Growth Strategy" },
    ],
    Icon: Zap,
    accentColor: '#1E3A5F',
  },
]

// ─── Stack geometry ───────────────────────────────────────────────────────────
//
// Card anchor: 420 × 500 px.
//
// STACKED (image 1 reference):
//   Front card fills anchor at x=0.
//   Middle peeks ~130 px from left of front (31 %).
//   Back peeks ~90 px from left of middle (21 %).
//   Behind cards lift slightly upward (negative y) giving the fan depth.
//
// ROW (image 2 reference):
//   As section exits, cards spread into a flat side-by-side row.
//   Step = 420 + 10 = 430 px between card left-edges.
//   All y values normalise to 0, all scales to 1.

const STACKED = [
  { x: 0,    y: 0,   scale: 1.00, opacity: 1.00 },
  { x: -130, y: -18, scale: 0.93, opacity: 0.78 },
  { x: -220, y: -32, scale: 0.86, opacity: 0.58 },
]

const ROW = [
  { x:  430, y: 0, scale: 1.0, opacity: 1.0 },
  { x:    0, y: 0, scale: 1.0, opacity: 1.0 },
  { x: -430, y: 0, scale: 1.0, opacity: 1.0 },
]

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

function getZIndex(si: number, hovered: boolean) {
  if (si === 0) return 10
  if (hovered) return 9
  return 10 - si * 2
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PortfolioHighlights() {
  const sectionRef    = useRef<HTMLElement>(null)
  const [items, setItems]     = useState(initialPortfolioItems)
  const [hovered, setHovered] = useState<number | null>(null)
  const [spread, setSpread]   = useState(0)

  // spread: 0 = stacked, 1 = row. Fires as section bottom leaves viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end 0.7", "end 0.0"],
  })
  useMotionValueEvent(scrollYProgress, "change", v =>
    setSpread(Math.max(0, Math.min(1, v)))
  )

  const bringForward = (i: number) => {
    if (i === 0) return
    setItems(prev => {
      const next = [...prev]
      const [card] = next.splice(i, 1)
      next.unshift(card)
      return next
    })
    setHovered(null)
  }

  const active = items[0]

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-olive-dark text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header ──────────────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
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
            From faith-based platforms to cultural storytelling, discover how we&apos;ve helped
            our clients build authority and convert attention into meaningful outcomes.
          </motion.p>
        </motion.div>

        {/* Cards + info panel ────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/*
            Card stack — 420 × 500 px anchor.
            Behind cards extend LEFT (negative x) and lift UP (negative y).
            Section overflow:hidden clips at viewport edge — harmless on desktop.
          */}
          <div className="relative flex-shrink-0" style={{ width: 420, height: 500 }}>
            {[...items].reverse().map((item, ri) => {
              const si  = items.length - 1 - ri   // 0 = front
              const isActive  = si === 0
              const isHovered = hovered === si

              const s = STACKED[Math.min(si, STACKED.length - 1)]
              const r = ROW[Math.min(si, ROW.length - 1)]

              // Hover nudge: shift toward viewer (less negative x, slightly less lift)
              const bx = isHovered && !isActive ? s.x + 22 : s.x
              const by = isHovered && !isActive ? s.y + 6  : s.y
              const bo = isHovered && !isActive ? Math.min(s.opacity + 0.22, 1) : s.opacity

              return (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden bg-olive-mid"
                  style={{
                    zIndex: getZIndex(si, isHovered),
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                  animate={{
                    x:       lerp(bx, r.x,     spread),
                    y:       lerp(by, r.y,     spread),
                    scale:   lerp(s.scale,  r.scale,   spread),
                    opacity: lerp(bo, r.opacity, spread),
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                  onClick={() => bringForward(si)}
                  onMouseEnter={() => !isActive && setHovered(si)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center px-10">
                      <div
                        className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-5"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <item.Icon className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-brand-cream font-semibold text-xl">{item.title}</p>
                      <p className="text-brand-cream/55 text-sm mt-2">{item.category}</p>

                      {!isActive && isHovered && spread < 0.25 && (
                        <motion.p
                          className="text-brand-orange text-xs mt-4 font-medium"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.18 }}
                        >
                          Click to bring forward
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Info panel ────────────────────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="w-full max-w-sm lg:w-64 flex-shrink-0"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.38 }}
            >
              <div className="bg-olive-mid/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <span className="inline-block bg-brand-orange text-white text-xs px-3 py-1 rounded-full mb-4">
                  {active.category}
                </span>

                <h3 className="text-brand-cream font-serif font-bold text-xl mb-3 leading-snug">
                  {active.title}
                </h3>

                <p className="text-brand-cream/70 text-sm leading-relaxed mb-5">
                  {active.description}
                </p>

                <p className="text-brand-cream/40 text-[11px] uppercase tracking-widest mb-3">
                  Highlights
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {active.stats.map(s => (
                    <span
                      key={s.label}
                      className="bg-white/10 text-brand-cream text-xs px-3 py-1.5 rounded-full"
                    >
                      {s.label}
                    </span>
                  ))}
                </div>

                <Button
                  size="sm"
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                  asChild
                >
                  <Link href="/portfolio">
                    View Case Study
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots ─────────────────────────────────────────────────── */}
        <div className="flex justify-center gap-2 mt-10">
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => bringForward(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === 0
                  ? 'bg-brand-orange w-6'
                  : 'bg-white/30 hover:bg-white/60 w-2'
              }`}
              aria-label={`View ${item.title}`}
            />
          ))}
        </div>

        {/* CTA ─────────────────────────────────────────────────────────────── */}
        <motion.div
          className="text-center mt-12"
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
