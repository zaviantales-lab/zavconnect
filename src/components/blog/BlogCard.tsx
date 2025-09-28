import Link from 'next/link'
import Image from 'next/image'
import { Clock, User } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { formatDate } from '@/lib/utils'
import type { BlogPost } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <GlassCard className={`overflow-hidden hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group ${featured ? 'col-span-full md:col-span-2' : ''}`}>
      <Link href={`/blog/${post.id}`}>
        <div className={`${featured ? 'md:flex' : ''}`}>
          <div className={`relative ${featured ? 'md:w-1/2' : 'w-full'} ${featured ? 'h-64 md:h-auto' : 'h-48'}`}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary-600/90 text-white text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-between' : ''}`}>
            <div>
              <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 ${featured ? 'text-2xl mb-4' : 'text-lg mb-3'}`}>
                {post.title}
              </h3>
              
              <p className={`text-gray-600 dark:text-gray-300 ${featured ? 'text-base mb-4' : 'text-sm mb-3'}`}>
                {post.excerpt}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(post.publishDate)}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-xs rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </GlassCard>
  )
}