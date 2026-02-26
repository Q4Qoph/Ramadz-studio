// src/app/about/page.tsx - Full rewrite with new brand theme
"use client"

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, Zap, CheckCircle, Search, Layers, Rocket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

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

const team = [
  {
    name: "Daudi Ndong'a",
    role: "Creative Director & Brand Strategist",
    photo: "/team-daudi.jpg",
    initials: "DN",
  },
  {
    name: "Halima Rahamy Twalib",
    role: "Social Media Strategist & UGC Creator",
    photo: "/team-halima.jpg",
    initials: "HT",
  },
  {
    name: "Fredie Obiero",
    role: "Full-Stack Developer",
    photo: "/team-fredie.jpg",
    initials: "FO",
  },
]

const targetClients = [
  "Coaches",
  "Counselors",
  "Pastors & ministry leaders",
  "Podcasters",
  "Real estate brands",
  "SMEs & service providers",
  "Thought leaders building digital authority",
]

const howWeWork = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Audit",
    description: "We deep-dive into your brand, audience, and goals to understand where you are and where you need to go.",
  },
  {
    step: "02",
    icon: Layers,
    title: "Strategy & Structure",
    description: "We build a clear strategic framework — messaging architecture, content systems, and growth roadmap.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Execute & Scale",
    description: "We implement, produce, and iterate — turning strategy into measurable results and sustainable growth.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-olive-dark relative overflow-hidden">
        {/* Decorative circles */}
        <div
          className="circle-deco w-80 h-80 top-[-3rem] right-[-3rem]"
          style={{ backgroundColor: '#B54808', opacity: 0.2 }}
        />
        <div
          className="circle-deco w-48 h-48 bottom-[-2rem] left-[-2rem]"
          style={{ backgroundColor: '#E5D9B6', opacity: 0.1 }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-sm font-medium text-brand-cream">About RMDZ Studios</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-brand-cream mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From Experts to{' '}
              <span className="text-brand-orange">Visible Authorities</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-brand-cream/70 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              We transform experts into visible authorities by building structured, strategic,
              and scalable digital ecosystems that convert influence into income.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-charcoal">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-brand-orange pl-6">
                To transform experts into visible authorities by building structured, strategic,
                and scalable digital ecosystems that convert influence into income.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-olive-dark rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-brand-cream" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-charcoal">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-olive-dark pl-6">
                To become Africa's leading authority-building digital studio for professionals
                and service-based brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-olive-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-brand-cream">
              Our <span className="text-brand-orange">Story</span>
            </h2>
            <p className="text-lg text-brand-cream/70 leading-relaxed mb-6">
              RMDZ Studios was born from a simple but radical belief: content is not just media, it is movement.
              What started as a one-mic, one-camera setup evolved into a full-fledged studio dedicated to shaping
              digital narratives with heart, strategy, and creative precision.
            </p>
            <p className="text-lg text-brand-cream/70 leading-relaxed">
              We've grown with our clients — podcasts that began as passion projects are now platforms of influence.
              Social feeds that once blended in are now setting trends. Our story is a blend of hustle, humanity,
              and the relentless pursuit of creative clarity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Specialize In */}
      <section className="py-16 sm:py-24 bg-cream/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
              Who We Specialize{' '}
              <span className="text-gradient">In Helping</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work with purpose-driven professionals and brands ready to build real digital authority.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {targetClients.map((client, index) => (
              <motion.div
                key={client}
                className="bg-white rounded-xl p-5 flex items-start space-x-3 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="text-charcoal font-medium text-sm leading-snug">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A clear, proven 3-step process that takes you from where you are to where you need to be.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howWeWork.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-olive-dark rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-9 h-9 text-brand-cream" />
                  </div>
                  <span className="absolute -top-3 -right-3 bg-brand-orange text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-cream/30">
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
                    <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-white" />
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
                <div className="text-4xl sm:text-5xl font-bold text-brand-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-cream/30">
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

          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative w-32 h-32 mx-auto mb-5">
                  {/* Circular image with orange border */}
                  <div className="w-32 h-32 rounded-full border-4 border-brand-orange overflow-hidden bg-olive-mid flex items-center justify-center">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                      onError={() => {}}
                    />
                    {/* Fallback initials shown behind image */}
                    <span className="absolute text-2xl font-bold text-brand-cream z-0">
                      {member.initials}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-1">{member.name}</h3>
                <p className="text-brand-orange font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-500 text-sm mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Team photos will appear once placed at <code>/public/team-daudi.jpg</code>, <code>/public/team-halima.jpg</code>, and <code>/public/team-fredie.jpg</code>.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-olive-dark text-white relative overflow-hidden">
        <div
          className="circle-deco w-72 h-72 top-[-2rem] right-[-2rem]"
          style={{ backgroundColor: '#B54808', opacity: 0.18 }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 text-brand-cream">
              Ready to Build Your{' '}
              <span className="text-brand-orange">Authority?</span>
            </h2>
            <p className="text-lg text-brand-cream/70 mb-8 leading-relaxed">
              Let's transform your expertise into a visible, scalable digital presence.
              Join professionals and service-based brands who trust RMDZ Studios.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold px-8 py-3"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-olive-dark transition-all duration-300 px-8 py-3"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
