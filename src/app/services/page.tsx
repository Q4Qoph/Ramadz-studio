"use client"

import { motion } from 'framer-motion'
import { Camera, Mic, MessageSquare, Check, ArrowRight, Play, Users, TrendingUp, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BackgroundGradient } from '@/components/acenternity/background-gradient'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const services = [
  {
    id: "social-media",
    icon: Camera,
    title: "Social Media Content Creation & Strategy",
    subtitle: "Amplify your brand across all platforms",
    description: "Transform your social presence with compelling UGC videos, strategic content planning, and data-driven growth strategies that engage audiences and drive results.",
    color: "from-blue-500 to-purple-600",
    platforms: ["YouTube", "Instagram", "Facebook", "TikTok", "LinkedIn", "Twitter"],
    features: [
      "UGC Video Production",
      "Content Planning & Strategy",
      "Graphic Design & Branding",
      "Social Media Management",
      "Analytics & Reporting",
      "Influencer Collaboration",
      "Paid Social Campaigns",
      "Community Management"
    ],
    process: [
      "Discovery & Brand Analysis",
      "Content Strategy Development",
      "Content Creation & Production",
      "Scheduling & Publishing",
      "Monitoring & Optimization"
    ],
    pricing: "Starting from $500/month"
  },
  {
    id: "podcast",
    icon: Mic,
    title: "Podcast Production",
    subtitle: "From concept to distribution",
    description: "Complete end-to-end podcast services that transform your ideas into professional audio content that captivates listeners and builds loyal audiences.",
    color: "from-green-500 to-teal-600",
    platforms: ["Spotify", "Apple Podcasts", "Google Podcasts", "YouTube", "Anchor", "Buzzsprout"],
    features: [
      "Professional Recording",
      "Audio Editing & Mixing",
      "Show Branding & Artwork",
      "Distribution Setup",
      "Episode Promotion",
      "Transcript Services",
      "Guest Coordination",
      "Analytics & Growth Strategy"
    ],
    process: [
      "Concept Development",
      "Recording Session Setup",
      "Professional Production",
      "Distribution & Launch",
      "Ongoing Support & Growth"
    ],
    pricing: "Starting from $200/episode"
  },
  {
    id: "consulting",
    icon: MessageSquare,
    title: "Creative Consulting",
    subtitle: "Strategic guidance for creative growth",
    description: "Expert consulting services that help you develop winning strategies, optimize your creative processes, and achieve sustainable growth across all platforms.",
    color: "from-orange-500 to-red-600",
    platforms: ["Strategy Sessions", "Workshops", "1-on-1 Coaching", "Team Training"],
    features: [
      "Brand Strategy Development",
      "Content Strategy Planning",
      "Audience Growth Tactics",
      "Creative Process Optimization",
      "Platform-Specific Strategies",
      "Performance Analysis",
      "Competitive Research",
      "Long-term Planning"
    ],
    process: [
      "Initial Assessment",
      "Strategy Development",
      "Implementation Planning",
      "Execution Support",
      "Results Tracking & Optimization"
    ],
    pricing: "Starting from $150/hour"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    content: "RMDZ Studios transformed my social media presence. My engagement increased by 300% in just 3 months!",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Podcast Host",
    content: "The podcast production quality is outstanding. They handled everything from recording to distribution seamlessly.",
    rating: 5
  },
  {
    name: "Lisa Rodriguez",
    role: "Brand Manager",
    content: "Their creative consulting helped us develop a winning content strategy that boosted our brand awareness significantly.",
    rating: 5
  }
]

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Results vary by service and goals, but most clients see improvements within 30-60 days. Social media growth typically shows initial results within 2-4 weeks, while podcast audience building may take 2-3 months."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes! We work with individual creators, small businesses, and larger corporations. Our services are scalable and can be customized to fit any budget and requirement."
  },
  {
    question: "What platforms do you specialize in?",
    answer: "We specialize in all major social media platforms including Instagram, TikTok, YouTube, Facebook, LinkedIn, and Twitter. For podcasts, we distribute to all major platforms including Spotify, Apple Podcasts, and Google Podcasts."
  },
  {
    question: "Can I choose just one service or do I need a package?",
    answer: "You can absolutely choose individual services based on your needs. We also offer bundled packages that provide better value when combining multiple services."
  }
]

export default function ServicesPage() {
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
              <span className="text-sm font-medium text-charcoal">Our Services</span>
            </motion.div>

            <TextGenerateEffect
              words="Comprehensive Creative Solutions for Every Platform"
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-charcoal mb-6"
            />

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              From concept to distribution, we provide end-to-end creative services that amplify your voice 
              and maximize your impact across all digital platforms.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    className={`inline-block bg-gradient-to-r ${service.color} text-white text-sm px-3 py-1 rounded-full mb-4`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Service #{index + 1}
                  </motion.div>

                  <motion.h2
                    className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h2>

                  <motion.p
                    className="text-xl text-gold font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.subtitle}
                  </motion.p>

                  <motion.p
                    className="text-gray-600 mb-8 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Platforms */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-charcoal mb-3">Platforms & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, platformIndex) => (
                        <span
                          key={platform}
                          className="bg-beige text-charcoal text-sm px-3 py-1 rounded-full"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Pricing */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-charcoal">{service.pricing}</div>
                    <div className="text-gray-600">Custom packages available</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      className={`bg-gradient-to-r ${service.color} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* Features & Process Cards */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    {/* Features Card */}
                    <BackgroundGradient className="p-6 bg-white rounded-2xl">
                      <div className="flex items-center space-x-3 mb-4">
                        <service.icon className="w-6 h-6 text-gold" />
                        <h4 className="font-semibold text-charcoal">What's Included</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </BackgroundGradient>

                    {/* Process Card */}
                    <Card className="bg-gradient-to-br from-gray-50 to-white border-0">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-charcoal mb-4">Our Process</h4>
                        <div className="space-y-3">
                          {service.process.map((step, stepIndex) => (
                            <motion.div
                              key={step}
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {stepIndex + 1}
                              </div>
                              <span className="text-sm text-gray-600">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with RMDZ Studios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our services? We've got answers to help you make the right decision.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-charcoal mb-3 text-lg">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's discuss your project and create a custom solution that fits your needs and budget. 
              Get in touch today for a free consultation.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
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
                Schedule Consultation
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="pt-8 border-t border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-4">
                Have questions? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                <a 
                  href="mailto:rmdstudios0@gmail.com" 
                  className="text-gold hover:text-white transition-colors duration-300 font-medium"
                >
                  rmdstudios0@gmail.com
                </a>
                <span className="hidden sm:block text-gray-500">|</span>
                <a 
                  href="tel:+254713464208" 
                  className="text-gold hover:text-white transition-colors duration-300 font-medium"
                >
                  +254 713 464 208
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}