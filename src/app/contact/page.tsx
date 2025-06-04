"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Instagram, Facebook, Youtube, Music } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { BackgroundGradient } from '@/components/ui/background-gradient'

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "rmdstudios0@gmail.com",
    link: "mailto:rmdstudios0@gmail.com",
    description: "Drop us a line anytime"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+254 713 464 208",
    link: "tel:+254713464208",
    description: "Call us during business hours"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Mombasa, Kenya",
    link: "#",
    description: "East Africa timezone"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 9AM-6PM EAT",
    link: "#",
    description: "Weekend support available"
  }
]

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/RMDStudios', icon: Instagram, color: 'from-pink-500 to-purple-600' },
  { name: 'Facebook', href: 'https://facebook.com/RMDStudios', icon: Facebook, color: 'from-blue-600 to-blue-700' },
  { name: 'YouTube', href: 'https://youtube.com/RMDStudios', icon: Youtube, color: 'from-red-500 to-red-600' },
  { name: 'TikTok', href: 'https://tiktok.com/@RMDStudios', icon: Music, color: 'from-gray-800 to-black' },
]

const serviceOptions = [
  "Social Media Content Creation",
  "Podcast Production",
  "Creative Consulting",
  "Brand Strategy",
  "Content Planning",
  "Other"
]

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  timeline: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      })
    }, 3000)
  }

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
              <span className="text-sm font-medium text-charcoal">Get In Touch</span>
            </motion.div>

            <TextGenerateEffect
              words="Let's Create Something Extraordinary Together"
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-charcoal mb-6"
            />

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ready to amplify your voice and transform your vision into impact? 
              We're here to help bring your creative projects to life. Let's start the conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="p-8 bg-white rounded-3xl">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Start Your Project
                </h2>
                
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Service */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+254 xxx xxx xxx"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-charcoal mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-1000">Under $1,000</option>
                          <option value="1000-5000">$1,000 - $5,000</option>
                          <option value="5000-10000">$5,000 - $10,000</option>
                          <option value="over-10000">Over $10,000</option>
                          <option value="discuss">Let's discuss</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-brand hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </BackgroundGradient>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Ready to start your creative journey? We're here to help bring your vision to life. 
                  Reach out through any of the channels below, and let's create something amazing together.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-beige/50 to-white">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-charcoal mb-1">{info.title}</h3>
                            <p className="text-gray-600 text-sm mb-1">{info.description}</p>
                            {info.link !== "#" ? (
                              <a 
                                href={info.link}
                                className="text-gold hover:text-charcoal transition-colors duration-300 font-medium"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-charcoal font-medium">{info.details}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-charcoal mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Response Promise */}
              <motion.div
                className="bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-charcoal mb-2">Quick Response Guarantee</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We understand that timing is crucial for creative projects. That's why we guarantee 
                  a response within 24 hours during business days, and often much sooner.
                </p>
              </motion.div>
            </motion.div>
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
              Common <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to questions you might have before reaching out.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can we start?",
                answer: "Most projects can begin within 1-2 weeks after our initial consultation and agreement."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment options for larger projects to make our services accessible."
              },
              {
                question: "Can you work with my existing team?",
                answer: "Absolutely! We collaborate seamlessly with in-house teams and other agencies."
              },
              {
                question: "What's included in the consultation?",
                answer: "A free 30-minute strategy session to discuss your goals, challenges, and potential solutions."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-charcoal mb-3">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}