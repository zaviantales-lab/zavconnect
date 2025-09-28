import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Heart, MessageCircle } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { formatDate } from '@/lib/utils'
import { blogPosts } from '@/data/blog'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.id)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        <GlassCard className="overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 bg-primary-600/90 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Title and Meta */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center justify-between border-t border-b border-white/20 dark:border-gray-700 py-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200">
                    <Heart className="h-4 w-4" />
                    <span>24</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                    <MessageCircle className="h-4 w-4" />
                    <span>12</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-green-500 transition-colors duration-200">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </GlassCard>

        {/* Author Bio */}
        <GlassCard className="mt-8 p-6">
          <div className="flex items-start space-x-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                About {post.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {post.author.bio}
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <GlassCard key={relatedPost.id} className="overflow-hidden hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                  <Link href={`/blog/${relatedPost.id}`}>
                    <div className="relative h-32">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(relatedPost.publishDate)}
                      </p>
                    </div>
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}