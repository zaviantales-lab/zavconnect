'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { BlogCard } from '@/components/blog/BlogCard'
import { blogPosts, categories, popularTags } from '@/data/blog'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Professional Insights
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover expert insights, career tips, and industry trends to accelerate your professional growth
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="space-y-6">
              {/* Search */}
              <GlassCard className="p-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </GlassCard>

              {/* Categories */}
              <GlassCard className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </GlassCard>

              {/* Popular Tags */}
              <GlassCard className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-sm rounded-full hover:bg-secondary-200 dark:hover:bg-secondary-800/50 transition-colors duration-200"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Featured Articles
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <BlogCard key={post.id} post={post} featured />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {filteredPosts.length === 0 && (
              <GlassCard className="p-12 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search criteria or browse all categories
                </p>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}