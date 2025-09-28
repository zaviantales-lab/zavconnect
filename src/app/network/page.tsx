'use client'

import { useState } from 'react'
import { Search, Filter, Users, MapPin, Briefcase } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import Image from 'next/image'

const networkUsers = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    skills: ['React', 'TypeScript', 'Node.js'],
    connections: 245,
    mutualConnections: 12
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    title: 'Product Manager',
    company: 'InnovateLab',
    location: 'New York, NY',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400',
    skills: ['Product Strategy', 'Analytics', 'Leadership'],
    connections: 387,
    mutualConnections: 8
  },
  {
    id: '3',
    name: 'Alex Rivera',
    title: 'UX Designer',
    company: 'DesignStudio',
    location: 'Austin, TX',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    skills: ['Figma', 'User Research', 'Prototyping'],
    connections: 156,
    mutualConnections: 5
  },
  {
    id: '4',
    name: 'Jessica Wong',
    title: 'Data Scientist',
    company: 'AI Innovations',
    location: 'Seattle, WA',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=400',
    skills: ['Python', 'Machine Learning', 'Statistics'],
    connections: 298,
    mutualConnections: 15
  },
  {
    id: '5',
    name: 'Dr. Raj Patel',
    title: 'AI Research Scientist',
    company: 'Future Labs',
    location: 'Boston, MA',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400',
    skills: ['AI', 'Research', 'Publications'],
    connections: 432,
    mutualConnections: 22
  },
  {
    id: '6',
    name: 'Maria Gonzalez',
    title: 'Marketing Director',
    company: 'GrowthCo',
    location: 'Miami, FL',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    skills: ['Digital Marketing', 'Strategy', 'Analytics'],
    connections: 512,
    mutualConnections: 18
  }
]

export default function NetworkPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredUsers = networkUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.company.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Your Professional Network
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with industry professionals, expand your network, and discover new opportunities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <GlassCard className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search professionals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="All">All Professionals</option>
                  <option value="Engineers">Engineers</option>
                  <option value="Designers">Designers</option>
                  <option value="Managers">Managers</option>
                </select>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Network Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <GlassCard key={user.id} className="p-6 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto border-4 border-white/30 dark:border-gray-700"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {user.name}
                </h3>

                <div className="flex items-center justify-center text-primary-600 dark:text-primary-400 mb-1">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span className="text-sm">{user.title}</span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {user.company}
                </p>

                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{user.location}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {user.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-center space-x-6 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="text-center">
                    <div className="font-semibold">{user.connections}</div>
                    <div>Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{user.mutualConnections}</div>
                    <div>Mutual</div>
                  </div>
                </div>

                {/* Connect Button */}
                <button className="w-full py-2 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 group-hover:scale-105">
                  Connect
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <GlassCard className="p-12 text-center">
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No professionals found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search criteria or browse all professionals
            </p>
          </GlassCard>
        )}
      </div>
    </div>
  )
}