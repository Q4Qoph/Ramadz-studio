"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every piece of content we create has intention and impact behind it."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work hand-in-hand with our clients to bring their vision to life."
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "We stay ahead of trends and push creative boundaries in everything we do."
  }
]

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-beige rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-charcoal">About RMDZ Studios</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Content is Not Just Media,{' '}
              <span className="text-gradient">It's Movement</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              RMDZ Studios was born from a simple but radical belief: content is not just media, it is movement. 
              What started as a one-mic, one-camera setup evolved into a full-fledged studio dedicated to shaping 
              digital narratives with heart, strategy, and creative precision.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We've grown with our clients—podcasts that began as passion projects are now platforms of influence. 
              Social feeds that once blended in are now setting trends. Our story is a blend of hustle, humanity, 
              and the relentless pursuit of creative clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="outline" 
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Values Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-beige/50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-charcoal mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}