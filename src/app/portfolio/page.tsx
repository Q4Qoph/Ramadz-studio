"use client"

import { motion } from 'framer-motion'
import { Play, ExternalLink, TrendingUp, Users, Eye, Calendar, Tag, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { useState } from 'react'

const portfolioCategories = [
  { name: "All", value: "all" },
  { name: "Social Media", value: "social" },
  { name: "Podcasts", value: "podcast" },
  { name: "Consulting", value: "consulting" },
  { name: "Branding", value: "branding" }
]

const portfolioItems = [
  {
    id: 1,
    title: "Navigating Opinion Podcast",
    category: "podcast",
    type: "Podcast Production",
    description: "A thought-provoking podcast exploring diverse perspectives on current events, social issues, and cultural topics that matter to today's generation.",
    image: "/api/placeholder/600/400",
    metrics: [
      { icon: Users, value: "15K+", label: "Monthly Listeners" },
      { icon: TrendingUp, value: "120%", label: "Growth Rate" },
      { icon: Eye, value: "50+", label: "Episodes" }
    ],
    tags: ["Podcast", "Audio Production", "Distribution", "Marketing"],
    color: "from-purple-500 to-pink-600",
    date: "2024",
    client: "Independent Creator",
    challenge: "Launch a new podcast from scratch and build a loyal audience in a competitive market.",
    solution: "Developed compelling branding, optimized audio quality, and implemented strategic promotion across multiple platforms.",
    results: [
      "Reached 15K+ monthly listeners within 6 months",
      "Achieved 120% month-over-month growth",
      "Featured in top podcast charts",
      "Built engaged community of regular listeners"
    ]
  },
  {
    id: 2,
    title: "After Church Content Series",
    category: "social",
    type: "Social Media Campaign",
    description: "Engaging social media content series that sparked meaningful conversations about faith, community, and modern spirituality across multiple platforms.",
    image: "/api/placeholder/600/400",
    metrics: [
      { icon: Eye, value: "250K+", label: "Total Views" },
      { icon: Users, value: "5K+", label: "New Followers" },
      { icon: TrendingUp, value: "300%", label: "Engagement Boost" }
    ],
    tags: ["Social Media", "Content Creation", "Community Building", "Video"],
    color: "from-blue-500 to-teal-600",
    date: "2024",
    client: "Faith Community Organization",
    challenge: "Create content that resonates with younger audiences while maintaining authentic spiritual messaging.",
    solution: "Developed relatable, modern content format combining traditional values with contemporary presentation styles.",
    results: [
      "Generated 250K+ total views across platforms",
      "Gained 5K+ new followers",
      "Increased engagement by 300%",
      "Built strong community dialogue"
    ]
  },
  {
    id: 3,
    title: "Tech Startup Brand Strategy",
    category: "consulting",
    type: "Creative Consulting",
    description: "Comprehensive brand strategy and content framework development for a emerging fintech startup targeting Gen Z consumers.",
    image: "/api/placeholder/600/400",
    metrics: [
      { icon: TrendingUp, value: "400%", label: "Brand Awareness" },
      { icon: Users, value: "10K+", label: "Early Adopters" },
      { icon: Eye, value: "500K+", label: "Impressions" }
    ],
    tags: ["Strategy", "Branding", "Consulting", "Fintech"],
    color: "from-orange-500 to-red-600",
    date: "2024",
    client: "Fintech Startup",
    challenge: "Establish brand identity and content strategy for a new fintech app targeting young professionals.",
    solution: "Created comprehensive brand guidelines, content strategy, and go-to-market campaign framework.",
    results: [
      "Increased brand awareness by 400%",
      "Attracted 10K+ early adopters",
      "Generated 500K+ impressions",
      "Successful product launch"
    ]
  },
  {
    id: 4,
    title: "E-commerce Brand Transformation",
    category: "branding",
    type: "Brand & Content Overhaul",
    description: "Complete brand transformation and content strategy redesign for a struggling e-commerce fashion brand.",
    image: "/api/placeholder/600/400",
    metrics: [
      { icon: TrendingUp, value: "200%", label: "Sales Increase" },
      { icon: Users, value: "25K+", label: "New Customers" },
      { icon: Eye, value: "1M+", label: "Content Views" }
    ],
    tags: ["Branding", "E-commerce", "Content Strategy", "Fashion"],
    color: "from-pink-500 to-rose-600",
    date: "2023",
    client: "Fashion E-commerce Brand",
    challenge: "Revitalize a declining fashion brand with outdated messaging and poor social media presence.",
    solution: "Complete rebrand with modern aesthetic, influencer partnerships, and strategic content calendar.",
    results: [
      "200% increase in sales",
      "Gained 25K+ new customers",
      "Achieved 1M+ content views",
      "Transformed brand perception"
    ]
  },
  {
    id: 5,
    title: "Wellness Influencer Growth",
    category: "social",
    type: "Influencer Development",
    description: "Strategic content creation and audience development for a wellness coach transitioning to digital influence.",
    image: "/api/placeholder/600/400",
    metrics: [
      { icon: Users, value: "50K+", label: "Followers Gained" },
      { icon: TrendingUp, value: "800%", label: "Engagement Rate" },
      { icon: Eye, value: "2M+", label: "Total Reach" }
    ],
    tags: ["Influencer Marketing", "Wellness", "Content Creation", "Growth"],
    color: "from-green-500 to-emerald-600",
    date: "2023",
    client: "Wellness Coach",
    challenge: "Transform a local wellness coach into a recognized digital influencer in the health and wellness space.",
    solution: "Developed authentic content strategy, optimized posting schedule, and created viral-worthy wellness content.",
    results: [
      "Gained 50K+ followers in 8 months",
      "Achieved 800% engagement rate increase",
      "Reached 2M+ people organically",
      "Secured brand partnerships"
    ]
  },
  {
    id: 6,
    title: "Business Podcast Launch",
    category: "podcast",
    type: "Podcast Strategy & Production",
    description: "Full-service podcast launch for a business consultant, including strategy, production, and growth marketing.",
    image: "/api/placeholder/600/400",
    metrics: [
      { icon: Users, value: "8K+", label: "Subscribers" },
      { icon: Eye, value: "30+", label: "Episodes" },
      { icon: TrendingUp, value: "150%", label: "Download Growth" }
    ],
    tags: ["Podcast", "Business", "Consulting", "Audio"],
    color: "from-indigo-500 to-purple-600",
    date: "2023",
    client: "Business Consultant",
    challenge: "Launch a business-focused podcast to establish thought leadership and attract high-value clients.",
    solution: "Created professional podcast setup, developed content calendar, and implemented strategic guest booking.",
    results: [
      "Gained 8K+ subscribers",
      "Published 30+ episodes",
      "150% month-over-month growth",
      "Generated qualified leads"
    ]
  }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = portfolioItems.filter(item => 
    selectedCategory === "all" || item.category === selectedCategory
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-beige via-white to-beige relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-charcoal">Our Portfolio</span>
            </motion.div>

            <TextGenerateEffect
              words="Stories That Resonate, Results That Speak"
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-charcoal mb-6"
            />

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Explore our collection of successful projects, from viral social campaigns to influential podcasts. 
              Each project represents our commitment to creative excellence and measurable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {portfolioCategories.map((category, index) => (
              <motion.button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-gradient-brand text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden">
                  <div className="relative">
                    {/* Image */}
                    <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-20 flex items-center justify-center relative`}>
                        <div className="text-center z-10">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-white font-medium">{item.type}</p>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${item.color} text-white text-xs px-3 py-1 rounded-full`}>
                      {item.type}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button 
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                        onClick={() => setSelectedItem(item)}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Case Study
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {item.metrics.map((metric, metricIndex) => (
                        <div key={metric.label} className="text-center">
                          <div className="flex justify-center mb-1">
                            <metric.icon className="w-4 h-4 text-gold" />
                          </div>
                          <div className="text-lg font-bold text-charcoal">{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="bg-beige text-charcoal text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal/Detail Section */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className={`inline-block bg-gradient-to-r ${selectedItem.color} text-white text-sm px-3 py-1 rounded-full mb-4`}>
                    {selectedItem.type}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-charcoal mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-600">Client: {selectedItem.client} • {selectedItem.date}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Image */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-8 overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${selectedItem.color} opacity-20 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-medium">{selectedItem.type} Preview</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {selectedItem.metrics.map((metric, index) => (
                  <div key={metric.label} className="text-center">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="text-2xl font-bold text-charcoal">{metric.value}</div>
                    <div className="text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Case Study Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Challenge</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Solution</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Results</h3>
                  <ul className="space-y-2">
                    {selectedItem.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className="bg-beige text-charcoal text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Ready to Create Your <span className="text-gradient">Success Story?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join the creators, podcasters, and brands who have transformed their vision into impact with RMDZ Studios. 
              Let's create something extraordinary together.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-brand hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-4 text-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 px-8 py-4 text-lg"
              >
                Get Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}