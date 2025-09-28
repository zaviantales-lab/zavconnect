'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Users, BookOpen, Briefcase, Calendar, MessageCircle, User, Settings } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { GlassCard } from '@/components/ui/GlassCard'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: Users },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Network', href: '/network', icon: Users },
  { name: 'Jobs', href: '/jobs', icon: Briefcase },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Messages', href: '/messages', icon: MessageCircle },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <GlassCard className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
              ZavConnect
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/20",
                      pathname === item.href 
                        ? "bg-white/20 text-primary-600 dark:text-primary-400" 
                        : "text-gray-600 dark:text-gray-300"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/profile"
                className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 transition-all duration-200"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                        pathname === item.href 
                          ? "bg-white/20 text-primary-600 dark:text-primary-400" 
                          : "text-gray-600 dark:text-gray-300 hover:bg-white/10"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </div>
            </div>
          )}
        </GlassCard>
      </nav>
      <div className="h-24" /> {/* Spacer for fixed navigation */}
    </>
  )
}