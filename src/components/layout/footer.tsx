"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Music } from 'lucide-react'

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/RMDStudios', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/RMDStudios', icon: Facebook },
  { name: 'YouTube', href: 'https://youtube.com/RMDStudios', icon: Youtube },
  { name: 'TikTok', href: 'https://tiktok.com/@RMDStudios', icon: Music },
]

const footerLinks = {
  Services: [
    { name: 'Social Media Strategy & Management', href: '/services#social-media' },
    { name: 'SMEs Digital Growth Systems', href: '/services#sme-growth' },
    { name: 'Brand Identity Development', href: '/services#brand-identity' },
    { name: 'Podcast Production & Monetization', href: '/services#podcast' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  Connect: [
    { name: 'rmdstudios0@gmail.com', href: 'mailto:rmdstudios0@gmail.com' },
    { name: '+254 713 464 208', href: 'tel:+254713464208' },
    { name: 'P.O. Box 00100, Utange, Mombasa, Kenya', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-olive-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-serif font-bold text-xl text-brand-cream">RMDZ Studios</span>
            </div>
            <p className="text-brand-cream/70 mb-6 leading-relaxed">
              A strategic content and digital growth studio that helps professionals and service-based brands build authority, structure their messaging, and convert online attention into measurable income.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-olive-mid rounded-lg flex items-center justify-center hover:bg-brand-orange transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-5 w-5 text-brand-cream" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg mb-4 text-brand-cream">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + linkIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-brand-cream/60 hover:text-brand-cream transition-colors duration-300 text-sm leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-olive-mid">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.p
              className="text-brand-cream/50 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2026 RMDZ Studios. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-6 mt-4 sm:mt-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/privacy" className="text-brand-cream/50 hover:text-brand-cream text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brand-cream/50 hover:text-brand-cream text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
