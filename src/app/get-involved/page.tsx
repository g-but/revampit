import { Metadata } from 'next'
import { Users, Code, Building2, GraduationCap, Handshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Involved | RevampIT',
  description: 'Join our mission to reduce electronic waste and make technology accessible to everyone. Volunteer, intern, or partner with us.'
}

const involvementOptions = [
  {
    title: 'Volunteer',
    description: 'Join our team of dedicated volunteers. No previous expertise required - just bring your interest and enthusiasm for our mission.',
    icon: Users,
    features: [
      'Work with hardware and software',
      'Learn new skills',
      'Make a difference in your community',
      'Meet like-minded people'
    ]
  },
  {
    title: 'Technical Experts',
    description: 'If you have experience in open source software, hardware, or electronics, we\'d love to have you join our team or help realize your own ideas.',
    icon: Code,
    features: [
      'Work on meaningful projects',
      'Share your expertise',
      'Collaborate with the community',
      'Develop new solutions'
    ]
  },
  {
    title: 'Internships',
    description: 'We offer internship opportunities for those looking to gain experience in technology and sustainability.',
    icon: GraduationCap,
    features: [
      'Hands-on experience',
      'Professional development',
      'Mentorship opportunities',
      'Flexible arrangements'
    ]
  },
  {
    title: 'Work Reintegration',
    description: 'We collaborate with institutions to provide work reintegration opportunities for people looking to re-enter the workforce.',
    icon: Handshake,
    features: [
      'Skill development',
      'Social integration',
      'Professional support',
      'Meaningful work'
    ]
  },
  {
    title: 'Partnerships',
    description: 'We work with educational institutions and organizations to create meaningful programs and opportunities.',
    icon: Building2,
    features: [
      'Educational programs',
      'Work experience placements',
      'Community initiatives',
      'Sustainable solutions'
    ]
  }
]

const partnerInstitutions = [
  'Verein für berufliche und soziale Integration Bezirk Uster',
  'Arbeitsintegrationsstelle der Gemeinde Rüti',
  'Heks Visite'
]

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join our mission to reduce electronic waste and make technology accessible to everyone.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              revamp-it is a registered non-profit organization. We welcome people who would like to contribute to our cause in any manner. Whether you're a technical expert, a volunteer, or looking for an internship, we have opportunities for you.
            </p>
          </div>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {involvementOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-blue-600 mb-4">
                  <option.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partner Institutions</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {partnerInstitutions.map((institution, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {institution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Andreas Rudin to discuss how you can get involved with revamp-it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@revamp-it.ch"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </a>
            <a
              href="/workshops"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
            >
              View Workshops
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 