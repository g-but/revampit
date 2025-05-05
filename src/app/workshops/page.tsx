import { Metadata } from 'next'
import { Calendar, Clock, Users, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Our Workshops | RevampIT',
  description: 'Join our expert-led workshops on Linux, Open Source Software, and Computer Repair. More workshops coming soon!'
}

const workshops = [
  {
    title: 'Linux Workshop',
    description: 'Master the Linux operating system from basics to advanced topics. Learn about system administration, command line tools, and open-source software management.',
    icon: '🐧',
    duration: '2 days',
    level: 'Beginner to Intermediate',
    category: 'Operating Systems',
    isAvailable: true
  },
  {
    title: 'Open Source Software',
    description: 'Explore the world of open-source software development. Learn about contributing to open-source projects, licensing, and community collaboration.',
    icon: '🔓',
    duration: '1 day',
    level: 'All Levels',
    category: 'Development',
    isAvailable: true
  },
  {
    title: 'Computer Repair',
    description: 'Learn essential hardware repair and maintenance skills. From basic troubleshooting to component replacement, become confident in fixing computer issues.',
    icon: '🔧',
    duration: '2 days',
    level: 'Beginner',
    category: 'Hardware',
    isAvailable: true
  },
  {
    title: 'Bitcoin & Blockchain',
    description: 'Understand the fundamentals of Bitcoin, blockchain technology, and cryptocurrency. Learn about wallets, transactions, and the future of digital currencies.',
    icon: '₿',
    duration: '1 day',
    level: 'Beginner',
    category: 'Blockchain',
    isAvailable: false,
    comingSoon: true
  },
  {
    title: 'Artificial Intelligence',
    description: 'Dive into the world of AI and machine learning. Learn about neural networks, data processing, and practical applications of AI technology.',
    icon: '🤖',
    duration: '2 days',
    level: 'Intermediate',
    category: 'AI & ML',
    isAvailable: false,
    comingSoon: true
  },
  {
    title: 'Vibe Coding',
    description: 'Experience a unique approach to coding that combines creativity with technical skills. Learn how to create engaging and interactive digital experiences.',
    icon: '🎨',
    duration: '1 day',
    level: 'All Levels',
    category: 'Creative',
    isAvailable: false,
    comingSoon: true
  }
]

const WorkshopsPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Our Workshops</h1>
            <p className="text-xl text-green-100 mb-8">
              Join our expert-led workshops and expand your knowledge in technology and digital skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                <span>Flexible Schedules</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Regular Sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Workshops */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Currently Available Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.filter(w => w.isAvailable).map((workshop, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {workshop.icon}
                  </div>
                  <div className="text-sm">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {workshop.category}
                    </span>
                    <div className="text-gray-500">
                      <span className="block">{workshop.duration}</span>
                      <span className="block">{workshop.level}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 mb-6">{workshop.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <span className="text-sm text-gray-500">Next session: Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Workshops */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're constantly expanding our workshop offerings. Here's what we're working on next. Stay tuned for announcements!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.filter(w => w.comingSoon).map((workshop, index) => (
              <div 
                key={index} 
                className="group bg-gray-50 rounded-xl p-6 border border-gray-200 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Coming Soon
                  </span>
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl opacity-75">
                    {workshop.icon}
                  </div>
                  <div className="text-sm">
                    <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium mb-2">
                      {workshop.category}
                    </span>
                    <div className="text-gray-500">
                      <span className="block">{workshop.duration}</span>
                      <span className="block">{workshop.level}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-700">
                  {workshop.title}
                </h3>
                <p className="text-gray-500 mb-6">{workshop.description}</p>
                <div className="flex justify-between items-center">
                  <button 
                    className="inline-flex items-center text-gray-500 font-medium cursor-not-allowed"
                    disabled
                  >
                    Notify Me
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                  <span className="text-sm text-gray-400">Stay tuned for updates</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn Something New?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Join our community of learners and stay updated with our upcoming workshop schedules and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg"
            >
              Subscribe to Updates
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WorkshopsPage 