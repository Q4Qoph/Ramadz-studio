"use client"

import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const portfolioItems = [
  {
    id: "romantic-dimension",
    num: "01",
    title: "Romantic Dimension Podcast",
    category: "Podcast & Content Strategy",
    description: "A relationship-focused platform designed to strengthen marriages and promote healthy, faith-centered partnerships. We built the complete content ecosystem — episode frameworks, audio editing, short-form repurposing, and storytelling.",
    highlights: [
      "Podcast Strategy",
      "Faith & Relationships",
      "Audio Production",
      "Short-form Content"
    ],
    image: "/portfolio-romantic-dimension.png",
  },
  {
    id: "maendeleo-dancers",
    num: "02",
    title: "Maendeleo Traditional Dancers",
    category: "Branding & Social Media",
    description: "A cultural preservation group promoting African heritage through traditional dance. We built a storytelling content ecosystem with behind-the-scenes footage, costume education posts, and an event booking funnel.",
    highlights: [
      "Cultural Branding",
      "Social Media Strategy",
      "Event Promotion",
      "Video Storytelling"
    ],
    image: "/portfolio-maendeleo-dancers.png",
  },
  {
    id: "community-bf",
    num: "03",
    title: "Community Bible Study Fellowship",
    category: "Brand Identity & Social",
    description: "A digital media brand targeting young entrepreneurs and creatives. We built a full multi-platform presence across Instagram, TikTok, and LinkedIn — focused on business education content, reel production, and community growth.",
    highlights: [
      "Brand Identity Design",
      "Multi-Platform Strategy",
      "Reel Production",
      "Growth Strategy"
    ],
    image: "/portfolio-community-bf.png",
  }
]

export default function PortfolioHighlights() {
  return (
    <section className="py-24 bg-olive-dark text-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange block mb-3">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-cream">
            Real Clients. <span className="text-brand-orange">Real Results.</span>
          </h2>
        </div>

        {/* 
          CSS Sticky Stack Rows:
          - Each row has `sticky` position and a solid background.
          - On scroll, Row 1 sticks. Row 2 slides up, overlapping Row 1, and sticks at its offset. Row 3 overlaps Row 2.
          - Once all are stacked, they slide up together as the user scrolls to the next section.
        */}
        <div className="flex flex-col relative">
          {portfolioItems.map((item, index) => {
            // Responsive top offsets:
            // Desktop: Row 1 sticks at 10rem (160px), Row 2 at 14rem (224px), Row 3 at 18rem (288px)
            // Mobile: Row 1 sticks at 6rem (96px), Row 2 at 9rem (144px), Row 3 at 12rem (192px)
            const stickyTopClass = index === 0 
              ? "sticky top-[6rem] lg:top-[10rem]" 
              : index === 1 
                ? "sticky top-[9rem] lg:top-[14rem]" 
                : "sticky top-[12rem] lg:top-[18rem]"
            
            const zIndexClass = index === 0 ? "z-10" : index === 1 ? "z-20" : "z-30"

            return (
              <div
                key={item.id}
                className={`w-full bg-olive-dark border-t border-white/15 pt-10 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${stickyTopClass} ${zIndexClass}`}
              >
                {/* Column 1: Image (col-span-3) */}
                <div className="col-span-1 lg:col-span-3 relative aspect-[4/3] lg:aspect-[2/2.3] w-full rounded-2xl overflow-hidden shadow-2xl bg-olive-mid group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                {/* Column 2: Number (col-span-1) */}
                <div className="col-span-1 lg:col-span-1 text-3xl lg:text-4xl font-bold text-brand-orange font-mono">
                  {item.num}
                </div>

                {/* Column 3: Title & Category (col-span-4) */}
                <div className="col-span-1 lg:col-span-4 flex flex-col gap-3 pt-1">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-cream leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-sm font-semibold tracking-wider uppercase text-brand-cream/60">
                    {item.category}
                  </span>
                  <p className="text-sm sm:text-base text-brand-cream/75 leading-relaxed mt-2 hidden sm:block">
                    {item.description}
                  </p>
                </div>

                {/* Column 4: Highlights & CTA (col-span-4) */}
                <div className="col-span-1 lg:col-span-4 flex flex-col justify-between h-full min-h-[140px] pt-1">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold block mb-3">
                      Highlights
                    </span>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="bg-white/5 border border-white/10 text-brand-cream/90 text-xs px-3 py-1.5 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-fit bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-6 py-5"
                    asChild
                  >
                    <Link href={`/portfolio#${item.id}`} className="inline-flex items-center gap-2">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 border-t border-white/10 pt-16">
          <Button
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 hover:shadow-brand transform hover:-translate-y-1 transition-all duration-300 text-white rounded-full px-8 py-6 text-lg"
            asChild
          >
            <Link href="/portfolio">
              View Full Portfolio
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  )
}
