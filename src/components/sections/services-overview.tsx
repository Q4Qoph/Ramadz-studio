"use client"

import { motion } from 'framer-motion'
import { Camera, Mic, MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const services = [
  {
    icon: Camera,
    title: "Social Media Content Creation",
    description: "UGC video production, content planning, design, analytics, and social marketing across all major platforms.",
    platforms: ["YouTube", "Instagram", "Facebook", "TikTok"],
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Mic,
    title: "Podcast Production",
    description: "End-to-end podcast services from recording and editing to branding, distribution, and marketing.",
    platforms: ["Recording", "Editing", "Branding", "Distribution"],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: MessageSquare,
    title: "Creative Consulting",
    description: "Strategic guidance for UGC, social media strategy, audience growth, branding, and creative brainstorming.",
    platforms: ["Strategy", "Growth", "Branding", "Innovation"],
    color: "from-orange-500 to-red-600"
  }
]

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-beige/30 to-white">
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
            className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-charcoal">Our Services</span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive Creative Solutions
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            From concept to distribution, we provide end-to-end creative services that amplify your voice 
            and maximize your impact across all digital platforms.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-charcoal mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.platforms.map((platform, platformIndex) => (
                      <motion.div
                        key={platform}
                        className="inline-block bg-beige text-charcoal text-sm px-3 py-1 rounded-full mr-2 mb-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + platformIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {platform}
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-gold hover:text-gold hover:bg-gold/10 p-0 h-auto font-semibold group"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
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
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
