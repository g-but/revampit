import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Workshops | RevampIT',
  description: 'Join our expert-led workshops on Linux, Open Source Software, Bitcoin, Artificial Intelligence, Vibe Coding, and Computer Repair.'
}

const workshops = [
  {
    title: 'Linux Workshop',
    description: 'Master the Linux operating system from basics to advanced topics. Learn about system administration, command line tools, and open-source software management.',
    icon: '🐧',
    duration: '2 days',
    level: 'Beginner to Intermediate'
  },
  {
    title: 'Open Source Software',
    description: 'Explore the world of open-source software development. Learn about contributing to open-source projects, licensing, and community collaboration.',
    icon: '🔓',
    duration: '1 day',
    level: 'All Levels'
  },
  {
    title: 'Bitcoin & Blockchain',
    description: 'Understand the fundamentals of Bitcoin, blockchain technology, and cryptocurrency. Learn about wallets, transactions, and the future of digital currencies.',
    icon: '₿',
    duration: '1 day',
    level: 'Beginner'
  },
  {
    title: 'Artificial Intelligence',
    description: 'Dive into the world of AI and machine learning. Learn about neural networks, data processing, and practical applications of AI technology.',
    icon: '🤖',
    duration: '2 days',
    level: 'Intermediate'
  },
  {
    title: 'Vibe Coding',
    description: 'Experience a unique approach to coding that combines creativity with technical skills. Learn how to create engaging and interactive digital experiences.',
    icon: '🎨',
    duration: '1 day',
    level: 'All Levels'
  },
  {
    title: 'Computer Repair',
    description: 'Learn essential hardware repair and maintenance skills. From basic troubleshooting to component replacement, become confident in fixing computer issues.',
    icon: '🔧',
    duration: '2 days',
    level: 'Beginner'
  }
]

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Workshops</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join our expert-led workshops and expand your knowledge in technology and digital skills.
          </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{workshop.icon}</div>
                  <div className="text-sm text-gray-500">
                    <span className="block">{workshop.duration}</span>
                    <span className="block">{workshop.level}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{workshop.title}</h3>
                <p className="text-gray-600 mb-6">{workshop.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Register Now
                  </button>
                  <span className="text-sm text-gray-500">Next session: Coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Our Workshops?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay updated with our upcoming workshop schedules and special events.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Subscribe to Updates
          </button>
        </div>
      </section>
    </main>
  )
} 