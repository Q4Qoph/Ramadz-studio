// src/app/portfolio/page.tsx - Full rewrite with 3 real case studies
"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X, Headphones, BookOpen, Music2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import Link from 'next/link'

const portfolioCategories = [
  { name: "All", value: "all" },
  { name: "Podcast", value: "podcast" },
  { name: "Social Media", value: "social" },
  { name: "Branding", value: "branding" },
]

const portfolioItems = [
  {
    id: 1,
    title: "Romantic Dimension Podcast",
    categories: ["podcast"],
    type: "Podcast & Content Strategy",
    Icon: Headphones,
    accentColor: '#B54808',
    description:
      "A relationship-focused platform designed to strengthen marriages and promote healthy, faith-centered partnerships.",
    whatWeDid: [
      "Relationship-centered platform setup and branding",
      "Sermon-based content architecture",
      "Episode repurposing into short-form clips",
      "Quote graphics and visual storytelling",
      "Thematic episode breakdown for audience retention",
    ],
    tags: ["Podcast", "Content Strategy", "Relationship", "Faith"],
    challenge:
      "The client had deep relationship expertise but no structured digital presence. Content was scattered with no strategic arc across episodes.",
    solution:
      "We built a complete podcast infrastructure — episode framework, brand identity, and a content repurposing system that extended each episode's reach across platforms.",
    results: [
      "Structured episode library with clear thematic arcs",
      "Active short-form content pipeline from each episode",
      "Faith community engagement and consistent following",
    ],
  },
  {
    id: 2,
    title: "Community Bible Study Fellowship",
    categories: ["podcast", "social"],
    type: "Content Strategy & Social Media",
    Icon: BookOpen,
    accentColor: '#4A4939',
    description:
      "A structured faith-learning platform focused on deep biblical engagement and community spiritual growth.",
    whatWeDid: [
      "Weekly scripture breakdown posts",
      "Devotional content clips for social platforms",
      "Live session promotion and audience prep content",
      "Community engagement systems and response frameworks",
    ],
    tags: ["Content Strategy", "Community", "Faith", "Social Media"],
    challenge:
      "A growing faith community with rich teaching content but limited digital reach. Members were engaged in-person but scattered online.",
    solution:
      "We built a social-first content strategy that brought the weekly teachings online — turning each session into a multi-platform content moment that deepened community connection.",
    results: [
      "Consistent digital touchpoints between weekly sessions",
      "Expanded online community engagement",
      "Systematic content calendar serving both new and existing members",
    ],
  },
  {
    id: 3,
    title: "Maendeleo Traditional Dancers",
    categories: ["social", "branding"],
    type: "Branding & Social Media",
    Icon: Music2,
    accentColor: '#636255',
    description:
      "A cultural preservation and performance group promoting African heritage through traditional dance and artistic expression.",
    whatWeDid: [
      "Cultural storytelling content ecosystem",
      "Behind-the-scenes footage and performance documentation",
      "Costume and tradition education posts",
      "Event booking funnel design",
    ],
    tags: ["Branding", "Cultural", "Social Media", "Events"],
    challenge:
      "A talented performance group with powerful cultural stories to tell, but no strategic digital narrative or booking infrastructure.",
    solution:
      "We built a content ecosystem rooted in cultural storytelling — educating audiences on African traditions while positioning the group for event bookings and partnerships.",
    results: [
      "Defined brand identity centered on cultural heritage",
      "Content framework that educates and entertains",
      "Event booking funnel converting social traffic to inquiries",
    ],
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filtered = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.categories.includes(activeCategory))

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-olive-dark relative overflow-hidden">
        <div
          className="circle-deco w-80 h-80 top-[-4rem] right-[-4rem]"
          style={{ backgroundColor: '#B54808', opacity: 0.2 }}
        />
        <div
          className="circle-deco w-48 h-48 bottom-[-2rem] left-[-2rem]"
          style={{ backgroundColor: '#E5D9B6', opacity: 0.08 }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-brand-cream">Our Work</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-brand-cream mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Real Clients.{' '}
              <span className="text-brand-orange">Real Results.</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-brand-cream/70 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Three case studies from real client engagements — each one a story of strategy,
              structure, and measurable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 sm:py-24 bg-cream/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolioCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-brand-orange text-white shadow-brand'
                    : 'bg-white text-charcoal hover:bg-brand-orange/10 hover:text-brand-orange'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Visual */}
                  <div
                    className="h-48 flex items-center justify-center relative"
                    style={{ backgroundColor: '#3D3C2A' }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      <item.Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs px-3 py-1 rounded-full">
                      {item.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{item.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-cream text-charcoal text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="text-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 p-0 h-auto font-semibold group"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Modal Header */}
              <div
                className="p-8 flex items-center justify-between"
                style={{ backgroundColor: '#3D3C2A' }}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: selectedItem.accentColor }}
                  >
                    <selectedItem.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-bold text-brand-cream">{selectedItem.title}</h2>
                    <p className="text-brand-cream/60 text-sm">{selectedItem.type}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-brand-cream/60 hover:text-brand-cream transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 space-y-6">
                <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>

                {/* The Challenge */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.challenge}</p>
                </div>

                {/* The Solution */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-2">Our Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.solution}</p>
                </div>

                {/* What We Did */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">What We Did</h3>
                  <ul className="space-y-2">
                    {selectedItem.whatWeDid.map((item) => (
                      <li key={item} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">Results</h3>
                  <ul className="space-y-2">
                    {selectedItem.results.map((result) => (
                      <li key={result} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-charcoal text-xs px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-6">
              Ready to Be Our Next{' '}
              <span className="text-gradient">Success Story?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s start with a conversation about your goals and build a strategy that converts
              your expertise into measurable growth.
            </p>
            <Button
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-4"
              asChild
            >
              <Link href="/contact">
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
