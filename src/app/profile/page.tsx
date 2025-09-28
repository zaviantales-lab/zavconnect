'use client'

import { useState } from 'react'
import { CreditCard as Edit, MapPin, Briefcase, Calendar, Mail, Phone, Globe, Github, Linkedin, Twitter, Plus } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import Image from 'next/image'

const userProfile = {
  name: 'John Doe',
  title: 'Senior Full Stack Developer',
  company: 'TechFlow Inc.',
  location: 'San Francisco, CA',
  avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400',
  coverImage: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?w=800',
  bio: 'Passionate full-stack developer with 8+ years of experience building scalable web applications. I love working with React, Node.js, and cloud technologies to create innovative solutions that make a real impact.',
  email: 'john.doe@email.com',
  phone: '+1 (555) 123-4567',
  website: 'https://johndoe.dev',
  joinDate: '2022-03-15',
  connections: 384,
  posts: 47,
  endorsements: 156,
  skills: [
    { name: 'React', level: 95, endorsements: 45 },
    { name: 'TypeScript', level: 90, endorsements: 38 },
    { name: 'Node.js', level: 88, endorsements: 42 },
    { name: 'AWS', level: 85, endorsements: 31 },
    { name: 'Python', level: 80, endorsements: 28 },
    { name: 'GraphQL', level: 75, endorsements: 22 }
  ],
  experience: [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      startDate: '2022-01',
      endDate: 'Present',
      description: 'Leading development of flagship SaaS platform serving 50K+ users. Built scalable microservices architecture and improved system performance by 40%.'
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      startDate: '2020-03',
      endDate: '2021-12',
      description: 'Developed MVP from scratch using React and Node.js. Implemented real-time features and helped secure Series A funding.'
    }
  ],
  projects: [
    {
      id: '1',
      name: 'E-commerce Platform',
      description: 'Built a modern e-commerce platform with React, Node.js, and PostgreSQL',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400',
      tags: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      id: '2',
      name: 'Task Management App',
      description: 'Real-time collaboration tool with drag-and-drop functionality',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?w=400',
      tags: ['React', 'Socket.io', 'MongoDB']
    }
  ]
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <GlassCard className="overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="relative h-48 md:h-64">
            <Image
              src={userProfile.coverImage}
              alt="Profile cover"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
              <Edit className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16 md:-mt-20">
              <div className="relative mb-4 md:mb-0">
                <Image
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                />
                <button className="absolute bottom-2 right-2 p-1 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200">
                  <Edit className="h-3 w-3" />
                </button>
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {userProfile.name}
                    </h1>
                    <div className="space-y-1 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{userProfile.title} at {userProfile.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{userProfile.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {new Date(userProfile.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    <Edit className="h-4 w-4 inline mr-2" />
                    Edit Profile
                  </button>
                </div>

                {/* Stats */}
                <div className="flex space-x-8 mt-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">{userProfile.connections}</div>
                    <div className="text-gray-600 dark:text-gray-300">Connections</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">{userProfile.posts}</div>
                    <div className="text-gray-600 dark:text-gray-300">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">{userProfile.endorsements}</div>
                    <div className="text-gray-600 dark:text-gray-300">Endorsements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <GlassCard className="p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{userProfile.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{userProfile.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                  <Globe className="h-4 w-4" />
                  <a href={userProfile.website} className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                    {userProfile.website}
                  </a>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200">
                  <Github className="h-4 w-4" />
                </button>
                <button className="p-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200">
                  <Twitter className="h-4 w-4" />
                </button>
              </div>
            </GlassCard>

            {/* Skills */}
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Skills & Expertise</h3>
                <button className="p-1 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-4">
                {userProfile.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.endorsements} endorsements</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Navigation Tabs */}
            <div className="mb-6">
              <div className="flex space-x-1 bg-white/20 dark:bg-white/10 p-1 rounded-lg">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'about' && (
              <GlassCard className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">About</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {userProfile.bio}
                </p>
              </GlassCard>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {userProfile.experience.map((exp) => (
                  <GlassCard key={exp.id} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                        <div className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{exp.location}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {exp.startDate} - {exp.endDate}
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </GlassCard>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userProfile.projects.map((project) => (
                  <GlassCard key={project.id} className="overflow-hidden hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
                    <div className="relative h-40">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}