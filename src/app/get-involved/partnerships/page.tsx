import { Metadata } from 'next'
import { InvolvementPageLayout } from '../involvement-page-layout'
import { Globe, Users, Share2, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnerships | RevampIT',
  description: 'Join forces with RevampIT to create sustainable technology solutions and make a lasting impact.'
}

const benefits = [
  {
    title: 'Shared Impact',
    description: "Amplify your organization's impact through collaborative initiatives.",
    icon: Target
  },
  {
    title: 'Global Network',
    description: 'Connect with like-minded organizations and expand your reach.',
    icon: Globe
  },
  {
    title: 'Resource Sharing',
    description: 'Access shared resources and expertise for greater efficiency.',
    icon: Share2
  },
  {
    title: 'Strategic Collaboration',
    description: 'Develop innovative solutions through joint efforts.',
    icon: Users
  }
]

export default function PartnershipsPage() {
  return (
    <InvolvementPageLayout
      title="Partnership Opportunities"
      description="Join forces with RevampIT to create sustainable technology solutions and make a lasting impact."
      ctaText="Become a Partner"
      ctaHref="mailto:empfang@revamp-it.ch"
    >
      <div className="space-y-16">
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Why Partner With Us?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At RevampIT, we believe in the power of collaboration to drive meaningful change. Our 
            partnerships combine expertise, resources, and shared values to create sustainable 
            technology solutions that benefit communities and the environment.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-green-200 transition-colors duration-300">
                <div className="text-green-600 mb-4">
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Models Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Partnership Models</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Corporate Partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Educational Institution Collaborations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Non-Profit Organization Alliances</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technology Provider Partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Community Organization Collaborations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Collaboration Areas Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Areas of Collaboration</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technology Refurbishment Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Educational Initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Research and Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Community Outreach Programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Sustainability Projects</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How We Work Together</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">1.</span>
                <span className="text-gray-600">Initial consultation to understand goals and opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">2.</span>
                <span className="text-gray-600">Development of partnership framework and objectives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">3.</span>
                <span className="text-gray-600">Implementation of collaborative initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">4.</span>
                <span className="text-gray-600">Regular progress reviews and impact assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">5.</span>
                <span className="text-gray-600">Continuous improvement and expansion of partnership</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Customized Programs Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Customized Partnership Programs</h3>
          <p className="text-gray-600 leading-relaxed">
            We understand that each organization has unique needs and goals. Our partnership programs 
            are tailored to align with your organization's objectives while maximizing the impact of 
            our collaborative efforts.
          </p>
        </section>

        {/* How to Get Started Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How to Get Started</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">1.</span>
                <span className="text-gray-600">Contact us to discuss partnership opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">2.</span>
                <span className="text-gray-600">Share your organization's goals and interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">3.</span>
                <span className="text-gray-600">Explore potential collaboration areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">4.</span>
                <span className="text-gray-600">Develop a partnership agreement</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">5.</span>
                <span className="text-gray-600">Begin your partnership journey</span>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </InvolvementPageLayout>
  )
} 