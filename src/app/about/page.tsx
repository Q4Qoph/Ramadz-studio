// src/app/about/page.tsx
"use client"

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, Zap, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const values = [
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every piece of content we create has intention and impact behind it. We don't just fill feeds, we fuel thought and inspire action."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work hand-in-hand with our clients, ensuring their voice remains authentic while amplifying their reach and engagement."
  },
  {
    icon: Heart,
    title: "Passionate",
    description: "Our love for storytelling and creative expression drives everything we do. We bring enthusiasm to every project, big or small."
  },
  {
    icon: Award,
    title: "Quality-Focused",
    description: "We maintain the highest standards in production, from concept development to final delivery, ensuring exceptional results."
  },
  {
    icon: Zap,
    title: "Innovative",
    description: "We stay ahead of trends and push creative boundaries, experimenting with new formats and technologies to keep content fresh."
  },
  {
    icon: Eye,
    title: "Visionary",
    description: "We see the bigger picture and help our clients build long-term strategies that create lasting impact in their industries."
  }
]

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "25+", label: "Happy Clients" },
  { number: "100K+", label: "Content Views" },
  { number: "3+", label: "Years Experience" }
]

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description: "Started with a one-mic, one-camera setup and a vision to create meaningful content that makes a difference."
  },
  {
    year: "2022",
    title: "First Major Success",
    description: "Launched our first viral campaign, reaching over 50K views and establishing our reputation for quality content."
  },
  {
    year: "2023",
    title: "Studio Expansion",
    description: "Moved to a dedicated studio space and expanded our team to include specialists in video production and social media."
  },
  {
    year: "2024",
    title: "Full-Service Studio",
    description: "Became a comprehensive creative hub offering podcast production, social media management, and consulting services."
  },
  {
    year: "2025",
    title: "Industry Leaders",
    description: "Recognized as a leading creative studio, helping clients achieve unprecedented growth and engagement."
  }
]

export default function AboutPage() {
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
              <span className="text-sm font-medium text-charcoal">About RMDZ Studios</span>
            </motion.div>

            <TextGenerateEffect
              words="Content is Not Just Media, It's Movement"
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-charcoal mb-6"
            />

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We're not just a studio—we're storytellers, strategists, and your creative partners in building 
              content that doesn't just get seen, but remembered, shared, and acted upon.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="p-8 bg-white rounded-3xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-charcoal">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To amplify voices, ideas, and brands through captivating content and culture-shifting conversations. 
                  At RMDZ Studios, we're on a mission to create purpose-driven media that does not just fill feeds, 
                  it fuels thought, drives engagement, and inspires action.
                </p>
              </BackgroundGradient>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="p-8 bg-white rounded-3xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-charcoal">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the go-to creative hub for next-generation content creators, brands, and storytellers, 
                  where vision meets execution, and ideas are transformed into impact across platforms and audiences.
                </p>
              </BackgroundGradient>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              RMDZ Studios was born from a simple but radical belief: content is not just media, it is movement. 
              What started as a one-mic, one-camera setup and a small office space evolved into a full-fledged 
              studio dedicated to shaping digital narratives with heart, strategy, and creative precision.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex items-start space-x-6 mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We've grown with our clients—podcasts that began as passion projects are now platforms of influence. 
              Social feeds that once blended in are now setting trends. Our story is a blend of hustle, humanity, 
              and the relentless pursuit of creative clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-beige/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every piece of content we create.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Our <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that tell the story of our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-beige/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The creative minds behind RMDZ Studios, passionate about bringing your vision to life.
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-32 h-32 bg-gradient-brand rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">R</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">RMDZ Studios Team</h3>
              <p className="text-gray-600 mb-4">Creative Directors & Content Strategists</p>
              <p className="text-gray-600 leading-relaxed">
                Our diverse team brings together expertise in video production, podcast creation, 
                social media strategy, and creative consulting. We're united by our passion for 
                storytelling and commitment to helping our clients succeed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
              Ready to Create <span className="text-gradient">Together?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's turn your vision into reality. Join the creators, podcasters, and brands 
              who trust RMDZ Studios to amplify their voices and maximize their impact.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-gradient-brand hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-lg"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300 px-8 py-3 rounded-lg"
                asChild
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}