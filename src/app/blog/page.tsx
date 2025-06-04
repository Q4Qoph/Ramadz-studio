// src/app/blog/page.tsx
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const blogCategories = [
  { name: "All", value: "all" },
  { name: "Podcasting", value: "podcasting" },
  { name: "Social Media", value: "social-media" },
  { name: "Creative Tips", value: "creative-tips" },
  { name: "Industry News", value: "industry-news" },
  { name: "Case Studies", value: "case-studies" }
]

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Starting Your First Podcast",
    excerpt: "Ready to dive into podcasting? Here are the fundamental tips every new podcaster needs to know to create engaging content and build a loyal audience.",
    category: "podcasting",
    author: "RMDZ Studios Team",
    date: "2025-01-15",
    readTime: "8 min read",
    image: "/api/placeholder/600/400",
    tags: ["Podcasting", "Beginner Tips", "Audio Production"]
  },
  {
    id: 2,
    title: "The Psychology Behind Viral Social Media Content",
    excerpt: "What makes content go viral? Explore the psychological triggers and strategic elements that can transform your social media posts into shareable sensations.",
    category: "social-media",
    author: "RMDZ Studios Team",
    date: "2025-01-10",
    readTime: "6 min read",
    image: "/api/placeholder/600/400",
    tags: ["Social Media", "Viral Content", "Psychology"]
  },
  {
    id: 3,
    title: "How We Helped a Local Business Achieve 500% Growth",
    excerpt: "A deep dive into our strategic approach that transformed a small local business into a digital powerhouse, complete with tactics you can implement.",
    category: "case-studies",
    author: "RMDZ Studios Team",
    date: "2025-01-05",
    readTime: "12 min read",
    image: "/api/placeholder/600/400",
    tags: ["Case Study", "Business Growth", "Strategy"]
  },
  {
    id: 4,
    title: "2025 Content Creation Trends You Can't Ignore",
    excerpt: "Stay ahead of the curve with these emerging content creation trends that are reshaping how audiences consume and engage with digital media.",
    category: "industry-news",
    author: "RMDZ Studios Team",
    date: "2025-01-01",
    readTime: "10 min read",
    image: "/api/placeholder/600/400",
    tags: ["Trends", "Content Creation", "2025"]
  },
  {
    id: 5,
    title: "Creative Block? 15 Techniques to Spark Your Inspiration",
    excerpt: "Every creator faces creative blocks. Discover proven techniques and exercises to reignite your creativity and maintain consistent creative output.",
    category: "creative-tips",
    author: "RMDZ Studios Team",
    date: "2024-12-28",
    readTime: "7 min read",
    image: "/api/placeholder/600/400",
    tags: ["Creativity", "Inspiration", "Creative Process"]
  },
  {
    id: 6,
    title: "Building Authentic Connections Through Storytelling",
    excerpt: "Learn how authentic storytelling can transform your brand's relationship with its audience and create lasting emotional connections.",
    category: "creative-tips",
    author: "RMDZ Studios Team",
    date: "2024-12-20",
    readTime: "9 min read",
    image: "/api/placeholder/600/400",
    tags: ["Storytelling", "Brand Building", "Authenticity"]
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
              <span className="text-sm font-medium text-charcoal">Our Blog</span>
            </motion.div>

            <TextGenerateEffect
              words="Insights, Tips & Creative Inspiration"
              className="text-3xl sm:text-4xl lg:text-6xl font-serif font-bold text-charcoal mb-6"
            />

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Stay updated with the latest trends, strategies, and insights from the world of content creation, 
              podcasting, and digital marketing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <motion.div
              className="relative flex-grow max-w-md"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {blogCategories.map((category, index) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-brand text-white'
                      : 'hover:border-gold hover:text-gold'
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold-light/30 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-2">
                              <Calendar className="w-6 h-6 text-gold" />
                            </div>
                            <p className="text-gray-600 font-medium text-sm">Blog Post</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-brand text-white text-xs px-3 py-1 rounded-full">
                        {blogCategories.find(cat => cat.value === post.category)?.name || post.category}
                      </div>
                    </div>

                    <CardContent className="p-6 flex flex-col flex-grow">
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="bg-beige text-charcoal text-xs px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Read More */}
                      <Button 
                        variant="ghost" 
                        className="text-gold hover:text-gold hover:bg-gold/10 p-0 h-auto font-semibold group/btn self-start"
                      >
                        Read More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 bg-charcoal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
              Stay <span className="text-gradient">Inspired</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the latest insights, creative tips, and industry updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-grow"
              />
              <Button className="bg-gradient-brand hover:shadow-lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, just quality content. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-beige/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal mb-6">
              Popular <span className="text-gradient">Topics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most popular content categories and discover the topics our readers love most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogCategories.slice(1).map((category, index) => {
              const postCount = blogPosts.filter(post => post.category === category.value).length
              return (
                <motion.div
                  key={category.value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white"
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                        <Filter className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-charcoal mb-2">{category.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {postCount} article{postCount !== 1 ? 's' : ''}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}