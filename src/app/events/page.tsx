'use client'

import { useState } from 'react'
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

const events = [
  {
    id: '1',
    title: 'AI in Healthcare Summit 2025',
    date: '2025-02-15',
    time: '9:00 AM - 5:00 PM PST',
    location: 'Virtual Event',
    type: 'Conference',
    attendees: 1250,
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?w=400',
    description: 'Join leading healthcare professionals and AI researchers to explore the future of medical technology and patient care.',
    speakers: ['Dr. Sarah Chen', 'Prof. Marcus Johnson', 'Dr. Lisa Wang'],
    tags: ['AI', 'Healthcare', 'Technology', 'Innovation']
  },
  {
    id: '2',
    title: 'Startup Pitch Night',
    date: '2025-01-25',
    time: '6:00 PM - 9:00 PM EST',
    location: 'New York, NY',
    type: 'Networking',
    attendees: 150,
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?w=400',
    description: 'Watch promising startups pitch to investors and network with entrepreneurs, VCs, and industry leaders.',
    speakers: ['Jessica Wong', 'Alex Rivera', 'Maria Gonzalez'],
    tags: ['Startup', 'Entrepreneurship', 'Funding', 'Networking']
  },
  {
    id: '3',
    title: 'Women in Tech Leadership Workshop',
    date: '2025-02-08',
    time: '2:00 PM - 5:00 PM PST',
    location: 'San Francisco, CA',
    type: 'Workshop',
    attendees: 80,
    image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?w=400',
    description: 'Empowering women in technology with leadership skills, career advancement strategies, and networking opportunities.',
    speakers: ['Rachel Davis', 'Amanda Foster', 'Jennifer Kim'],
    tags: ['Women in Tech', 'Leadership', 'Career Growth', 'Mentorship']
  },
  {
    id: '4',
    title: 'Remote Work Best Practices',
    date: '2025-01-30',
    time: '11:00 AM - 1:00 PM EST',
    location: 'Virtual Event',
    type: 'Webinar',
    attendees: 500,
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?w=400',
    description: 'Learn proven strategies for effective remote work, team collaboration, and maintaining work-life balance.',
    speakers: ['David Park', 'Emily Chen', 'Michael Torres'],
    tags: ['Remote Work', 'Productivity', 'Collaboration', 'Work-Life Balance']
  },
  {
    id: '5',
    title: 'Blockchain & Crypto Meetup',
    date: '2025-02-12',
    time: '7:00 PM - 10:00 PM EST',
    location: 'Miami, FL',
    type: 'Meetup',
    attendees: 200,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400',
    description: 'Explore the latest trends in blockchain technology, cryptocurrency, and decentralized finance with industry experts.',
    speakers: ['Kevin Liu', 'Priya Sharma', 'James Anderson'],
    tags: ['Blockchain', 'Cryptocurrency', 'DeFi', 'Technology']
  },
  {
    id: '6',
    title: 'Product Management Masterclass',
    date: '2025-02-20',
    time: '10:00 AM - 4:00 PM PST',
    location: 'Seattle, WA',
    type: 'Workshop',
    attendees: 120,
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=400',
    description: 'Master product strategy, user research, roadmapping, and stakeholder management with seasoned product leaders.',
    speakers: ['Tom Wilson', 'Nina Rodriguez', 'Chris Taylor'],
    tags: ['Product Management', 'Strategy', 'User Research', 'Leadership']
  }
]

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState('All')

  const filteredEvents = events.filter(event => 
    selectedType === 'All' || event.type === selectedType
  )

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Professional Events
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover networking events, workshops, conferences, and meetups to advance your career and expand your network
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <GlassCard className="p-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {['All', 'Conference', 'Workshop', 'Networking', 'Webinar', 'Meetup'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <GlassCard key={event.id} className="overflow-hidden hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600/90 text-white text-sm font-medium rounded-full">
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white text-sm font-medium rounded-full">
                    {formatDate(event.date)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {event.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Users className="h-4 w-4 mr-2 text-primary-600 dark:text-primary-400" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                {/* Speakers */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Featured Speakers:</h4>
                  <div className="flex flex-wrap gap-1">
                    {event.speakers.map((speaker) => (
                      <span
                        key={speaker}
                        className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-xs rounded-md"
                      >
                        {speaker}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200">
                    Register Now
                  </button>
                  <button className="px-4 py-2 bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-200">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}