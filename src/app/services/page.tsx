import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | RevampIT',
  description: 'Discover our comprehensive range of refurbishment and recycling services. We help reduce electronic waste and make technology accessible to everyone.'
}

const services = {
  hero: {
    title: 'Refurbishment and Recycling Services',
    description: 'We provide comprehensive solutions to reduce electronic waste and make technology accessible to everyone through our refurbishment and recycling services.'
  },
  services: [
    {
      title: 'Device Refurbishment',
      description: 'Professional refurbishment of computers, laptops, and other electronic devices to extend their lifespan.'
    },
    {
      title: 'Data Security',
      description: 'Secure data wiping and destruction services to ensure your sensitive information is completely removed.'
    },
    {
      title: 'Component Recycling',
      description: 'Environmentally responsible recycling of electronic components and materials.'
    },
    {
      title: 'Device Testing',
      description: 'Comprehensive testing and quality assurance for all refurbished devices.'
    },
    {
      title: 'Warranty Services',
      description: 'Extended warranty options for refurbished devices to ensure peace of mind.'
    },
    {
      title: 'Bulk Collection',
      description: 'Convenient collection services for businesses and organizations with large quantities of electronic waste.'
    }
  ],
  cta: {
    title: 'Ready to Make a Difference?',
    description: 'Let\'s work together to reduce electronic waste and make technology accessible to everyone.',
    button: 'Get Started'
  }
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{services.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">{services.hero.description}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600 mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{services.cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{services.cta.description}</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
            {services.cta.button}
          </button>
        </div>
      </section>
    </main>
  )
} 