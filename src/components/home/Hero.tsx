'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Briefcase, Calendar } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent leading-tight">
            Connect. Collaborate.<br />
            <span className="text-primary-700 dark:text-primary-400">Succeed.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ZavConnect is the premier professional networking platform where ambitious professionals build meaningful relationships, discover opportunities, and accelerate their careers.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Users, label: 'Active Professionals', value: '50K+' },
            { icon: Briefcase, label: 'Job Opportunities', value: '10K+' },
            { icon: Calendar, label: 'Events Monthly', value: '500+' },
          ].map((stat, index) => (
            <GlassCard key={index} className="p-6 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}