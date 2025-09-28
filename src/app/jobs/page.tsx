'use client'

import { useState } from 'react'
import { Search, Filter, MapPin, Building, Clock, DollarSign } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import Image from 'next/image'

const jobListings = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    company: 'TechFlow Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120K - $180K',
    posted: '2 days ago',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=100',
    description: 'Join our innovative team to build cutting-edge web applications using React, TypeScript, and modern frontend technologies.',
    skills: ['React', 'TypeScript', 'GraphQL', 'CSS'],
    remote: true
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateNow',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130K - $200K',
    posted: '1 week ago',
    logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?w=100',
    description: 'Lead product strategy and execution for our flagship SaaS platform serving thousands of customers worldwide.',
    skills: ['Product Strategy', 'Analytics', 'Roadmapping', 'Agile'],
    remote: false
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'DesignCraft',
    location: 'Remote',
    type: 'Contract',
    salary: '$80 - $120/hr',
    posted: '3 days ago',
    logo: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?w=100',
    description: 'Create beautiful and intuitive user experiences for mobile and web applications in a fast-paced startup environment.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    remote: true
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'AI Analytics Co.',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$140K - $220K',
    posted: '5 days ago',
    logo: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?w=100',
    description: 'Apply machine learning and statistical analysis to solve complex business problems and drive data-driven decisions.',
    skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
    remote: true
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'CloudScale',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110K - $170K',
    posted: '1 week ago',
    logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?w=100',
    description: 'Build and maintain scalable infrastructure on AWS, implement CI/CD pipelines, and ensure system reliability.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    remote: true
  },
  {
    id: '6',
    title: 'Marketing Director',
    company: 'GrowthHub',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    salary: '$120K - $180K',
    posted: '4 days ago',
    logo: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?w=100',
    description: 'Lead marketing strategy and execution across digital channels to drive user acquisition and brand awareness.',
    skills: ['Digital Marketing', 'SEO', 'Analytics', 'Content Strategy'],
    remote: false
  }
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesType = selectedType === 'All' || job.type === selectedType
    const matchesLocation = selectedLocation === 'All' || 
                           (selectedLocation === 'Remote' && job.remote) ||
                           job.location.includes(selectedLocation)
    return matchesSearch && matchesType && matchesLocation
  })

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover exciting career opportunities from top companies and startups worldwide
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
                  placeholder="Search jobs, companies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="All">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Part-time">Part-time</option>
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="All">All Locations</option>
                  <option value="Remote">Remote</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="New York">New York</option>
                  <option value="Seattle">Seattle</option>
                </select>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <GlassCard key={job.id} className="p-6 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={job.logo}
                        alt={job.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                          {job.title}
                        </h3>
                        {job.remote && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded-full">
                            Remote
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-2">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col items-end">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Posted {job.posted}
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-200">
                      Save
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <GlassCard className="p-12 text-center">
            <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search criteria or browse all available positions
            </p>
          </GlassCard>
        )}
      </div>
    </div>
  )
}