// src/app/services/page.tsx - Full rewrite with 4 services
"use client"

import { motion } from 'framer-motion'
import { BarChart2, TrendingUp, Palette, Mic, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    id: "social-media",
    icon: BarChart2,
    title: "Social Media Strategy & Management",
    tagline: "Social media is not posting. It's infrastructure.",
    description:
      "We build the strategic foundation that turns your social presence into a lead-generating machine — from brand voice to performance analytics.",
    features: [
      "Brand Voice & Messaging Architecture",
      "Monthly Strategic Content Planning",
      "Caption Writing & Reel Scripting",
      "Carousel Storytelling",
      "Audience Retention Analysis",
      "Monthly Performance Reviews",
    ],
    process: [
      { step: "Brand Audit", desc: "We assess your current digital footprint and audience." },
      { step: "Messaging Architecture", desc: "We define your brand voice, tone, and key messages." },
      { step: "Content Calendar", desc: "We build a month-by-month strategic content plan." },
      { step: "Creation", desc: "We produce, write, and design all content assets." },
      { step: "Performance Review", desc: "We analyze results and refine the strategy monthly." },
    ],
  },
  {
    id: "sme-growth",
    icon: TrendingUp,
    title: "SMEs Digital Growth Systems",
    tagline: "We don't just post. We build systems that sell.",
    description:
      "A comprehensive digital growth approach for small and medium businesses — from auditing your current position to building funnels that convert.",
    features: [
      "Full Business Digital Audit",
      "Competitor Positioning Analysis",
      "Value Proposition Structuring",
      "Sales Funnel Design",
      "Lead Generation Systems",
      "WhatsApp & Instagram DM Conversion Flows",
      "Promotional Campaigns",
    ],
    process: [
      { step: "Audit", desc: "We assess your current digital ecosystem and gaps." },
      { step: "Position", desc: "We define your competitive advantage and messaging." },
      { step: "Structure", desc: "We build your value proposition and content pillars." },
      { step: "Build Funnel", desc: "We design lead capture and conversion systems." },
      { step: "Launch & Convert", desc: "We execute campaigns and optimize for sales." },
    ],
  },
  {
    id: "brand-identity",
    icon: Palette,
    title: "Brand Identity Development",
    tagline: "Visibility without clarity is chaos.",
    description:
      "We help you define who you are, what you stand for, and how you communicate it — then document it all in a comprehensive brand guide.",
    features: [
      "Mission & Vision Articulation",
      "Color, Typography & Design Language",
      "Brand Voice Development",
      "Comprehensive Brand Guideline Document",
    ],
    process: [
      { step: "Discovery", desc: "We uncover your values, audience, and competitive position." },
      { step: "Define", desc: "We articulate your mission, vision, and brand promise." },
      { step: "Design", desc: "We create your visual identity — colors, fonts, imagery." },
      { step: "Document", desc: "We compile everything into a brand guideline document." },
      { step: "Deploy", desc: "We ensure consistent rollout across all platforms." },
    ],
  },
  {
    id: "podcast",
    icon: Mic,
    title: "Podcast Production & Monetization",
    tagline: "Complete podcast systems from the ground up.",
    description:
      "From concept clarity to multi-platform distribution and revenue alignment — we handle every aspect of your podcast journey.",
    features: [
      "Concept Clarity Development",
      "Episode Frameworks",
      "Audio Editing & Mastering",
      "Video Podcast Editing",
      "Short-form Content Repurposing",
      "Multi-platform Distribution",
      "Revenue Alignment",
    ],
    process: [
      { step: "Concept", desc: "We clarify your podcast's niche, audience, and format." },
      { step: "Setup", desc: "We handle technical setup, branding, and episode structure." },
      { step: "Produce", desc: "We edit audio and video to broadcast quality." },
      { step: "Repurpose", desc: "We create short clips, graphics, and social content." },
      { step: "Monetize", desc: "We build sponsorship, affiliate, and audience revenue systems." },
    ],
  },
]

const faqs = [
  {
    question: "What types of clients do you work with?",
    answer:
      "We work with coaches, counselors, pastors, podcasters, real estate brands, SMEs, and thought leaders — anyone looking to build digital authority and convert their expertise into income.",
  },
  {
    question: "Do you offer custom packages?",
    answer:
      "Yes. Every client engagement starts with a discovery call where we understand your goals, current position, and desired outcomes. We then design a scope that fits your needs.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Brand identity work typically delivers within 2–4 weeks. Social media and growth systems typically show meaningful traction within 60–90 days of consistent execution.",
  },
  {
    question: "Do you handle everything or do I need a team?",
    answer:
      "We're a full-service studio — we handle strategy, content creation, editing, and distribution. You focus on your expertise; we handle the digital infrastructure.",
  },
]

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              <span className="text-sm font-medium text-brand-cream">Our Services</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-brand-cream mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Strategic Systems for{' '}
              <span className="text-brand-orange">Real Growth</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-brand-cream/70 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Four focused service areas designed to build authority, structure your messaging,
              and convert online attention into measurable income.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, serviceIndex) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 sm:py-24 ${serviceIndex % 2 === 0 ? 'bg-white' : 'bg-cream/30'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Info */}
              <motion.div
                className={serviceIndex % 2 === 1 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-2 block">
                  {service.tagline}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-charcoal mb-4">
                  {service.title}
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                <h3 className="text-lg font-semibold text-charcoal mb-4">What&apos;s Included</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-0.5 transition-all duration-300 text-white"
                  asChild
                >
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Right: Process */}
              <motion.div
                className={serviceIndex % 2 === 1 ? 'lg:order-1' : ''}
                initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-charcoal mb-6">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, stepIndex) => (
                    <motion.div
                      key={step.step}
                      className="flex items-start space-x-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + stepIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        {stepIndex + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal">{step.step}</h4>
                        <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-olive-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-cream mb-4">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-olive-mid rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-brand-cream">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-orange transition-transform duration-300 flex-shrink-0 ml-4 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-brand-cream/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-6">
              Ready to Build Your{' '}
              <span className="text-gradient">Digital Authority?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s have a conversation about your goals. We&apos;ll figure out the best
              strategic path forward together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-4"
                asChild
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 px-8 py-4"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
