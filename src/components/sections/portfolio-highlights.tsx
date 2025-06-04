"use client"

import { motion } from 'framer-motion'
import { Play, ExternalLink, TrendingUp, Users, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const portfolioItems = [
  {
    title: "Navigating Opinion Podcast",
    category: "Podcast Production",
    description: "A thought-provoking podcast exploring diverse perspectives on current events and social issues.",
    metrics: [
      { icon: Users, value: "15K+", label: "Monthly Listeners" },
      { icon: TrendingUp, value: "120%", label: "Growth Rate" },
      { icon: Eye, value: "50+", label: "Episodes" }
    ],
    image: "/api/placeholder/600/400",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "After Church Content Series",
    category: "Social Media Campaign",
    description: "Engaging social media content that sparked meaningful conversations about faith and community.",
    metrics: [
      { icon: Eye, value: "250K+", label: "Total Views" },
      { icon: Users, value: "5K+", label: "New Followers" },
      { icon: TrendingUp, value: "300%", label: "Engagement Boost" }
    ],
    image: "/api/placeholder/600/400",
    color: "from-blue-500 to-teal-600"
  }
]

export default function PortfolioHighlights() {
  return (
    <section className="py-16 sm:py-24 bg-charcoal text-white overflow-hidden">
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
            <span className="text-sm font-medium text-white">Featured Work</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Stories That <span className="text-gradient">Resonate</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From viral social campaigns to influential podcasts, discover how we've helped our clients 
            amplify their voices and create meaningful connections with their audiences.
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
                  className={`inline-block bg-gradient-to-r ${item.color} text-white text-sm px-3 py-1 rounded-full mb-4`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.category}
                </motion.div>

                <motion.h3
                  className="text-2xl sm:text-3xl font-serif font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>

                {/* Metrics */}
                <motion.div
                  className="grid grid-cols-3 gap-6 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metric.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <metric.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
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
                    className="border-2 border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative group">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                    <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-20 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-white font-medium">{item.category} Preview</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      View Project
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
            className="bg-gradient-brand hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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