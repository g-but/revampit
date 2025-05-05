import { Metadata } from 'next'
import { InvolvementPageLayout } from '../involvement-page-layout'
import { Code, Cpu, Users, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technical Experts | RevampIT',
  description: 'Share your technical expertise and help us develop innovative solutions for sustainable technology.'
}

const opportunities = [
  {
    title: 'Open Source Development',
    description: 'Contribute to our open source projects and help improve our software solutions.',
    icon: Code
  },
  {
    title: 'Hardware Innovation',
    description: 'Work on hardware projects that make technology more sustainable and accessible.',
    icon: Cpu
  },
  {
    title: 'Knowledge Sharing',
    description: 'Share your expertise through workshops, documentation, and mentorship.',
    icon: Users
  },
  {
    title: 'Project Leadership',
    description: 'Lead technical initiatives and help shape the future of sustainable technology.',
    icon: Lightbulb
  }
]

export default function TechnicalExpertsPage() {
  return (
    <InvolvementPageLayout
      title="Technical Experts"
      description="Share your expertise and help us develop innovative solutions for sustainable technology."
      ctaText="Share Your Expertise"
      ctaHref="mailto:empfang@revamp-it.ch"
    >
      <div className="space-y-16">
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Join Our Technical Team</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're always looking for technical experts who share our passion for sustainable technology 
            and open source solutions. Whether you're a software developer, hardware engineer, or systems 
            administrator, your expertise can help us make a greater impact.
          </p>
        </section>

        {/* Opportunities Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Opportunities for Technical Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-green-200 transition-colors duration-300">
                <div className="text-green-600 mb-4">
                  <opportunity.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{opportunity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Areas of Expertise</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Software Development (Python, JavaScript, Linux)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Hardware Engineering and Repair</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">System Administration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Network Engineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Database Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Security and Privacy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technical Documentation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Current Projects Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Current Projects</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Open source accounting software development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Hardware refurbishment automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Educational platform development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">System administration tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Documentation and knowledge base</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Benefits of Joining</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Work on meaningful projects that make a real impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Collaborate with a diverse team of experts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Access to our workshop and testing facilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Opportunities to lead and mentor others</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Flexible contribution options</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Open Source Focus Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Open Source Focus</h3>
          <p className="text-gray-600 leading-relaxed">
            We believe in the power of open source software and hardware. As a technical expert, 
            you'll have the opportunity to contribute to open source projects and help make technology 
            more accessible to everyone.
          </p>
        </section>

        {/* How to Get Started Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How to Get Started</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">1.</span>
                <span className="text-gray-600">Contact us with your area of expertise and interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">2.</span>
                <span className="text-gray-600">Discuss potential projects and contributions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">3.</span>
                <span className="text-gray-600">Review our development guidelines and processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">4.</span>
                <span className="text-gray-600">Start contributing to our projects</span>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </InvolvementPageLayout>
  )
} 