import { Metadata } from 'next'
import { InvolvementPageLayout } from '../involvement-page-layout'
import { GraduationCap, Briefcase, Users, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Internships | RevampIT',
  description: 'Gain hands-on experience in technology and sustainability through our internship program.'
}

const benefits = [
  {
    title: 'Hands-on Experience',
    description: 'Work on real projects that make a difference in the community.',
    icon: Briefcase
  },
  {
    title: 'Professional Development',
    description: 'Learn from experienced mentors and develop valuable skills.',
    icon: GraduationCap
  },
  {
    title: 'Team Collaboration',
    description: 'Work with a diverse team of professionals and volunteers.',
    icon: Users
  },
  {
    title: 'Learning Opportunities',
    description: 'Access to training resources and workshops.',
    icon: BookOpen
  }
]

export default function InternshipsPage() {
  return (
    <InvolvementPageLayout
      title="Internship Opportunities"
      description="Gain valuable experience in technology and sustainability while making a real impact."
      ctaText="Apply for Internship"
      ctaHref="mailto:empfang@revamp-it.ch"
    >
      <div className="space-y-16">
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">About Our Internship Program</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our internship program offers a unique opportunity to gain hands-on experience in sustainable 
            technology while contributing to meaningful projects. Whether you're a student looking to 
            complement your studies or someone seeking to transition into the tech industry, our program 
            provides valuable learning and growth opportunities.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Program Benefits</h2>
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

        {/* Available Positions Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Available Positions</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Hardware Refurbishment and Repair</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Software Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">System Administration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Project Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Community Outreach</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technical Documentation</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">What You'll Learn</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Hardware and software troubleshooting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Project management and collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technical documentation and communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Community engagement and outreach</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Sustainable technology practices</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Requirements</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Be enrolled in or have completed relevant studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Have a passion for technology and sustainability</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Be able to commit to the program duration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Have basic computer skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Be willing to learn and contribute</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Flexible Arrangements Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Flexible Arrangements</h3>
          <p className="text-gray-600 leading-relaxed">
            We understand that students and professionals have different schedules. We offer flexible 
            arrangements to accommodate your academic or work commitments while ensuring you get the 
            most out of your internship experience.
          </p>
        </section>

        {/* How to Apply Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How to Apply</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">1.</span>
                <span className="text-gray-600">Send us your resume and a cover letter</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">2.</span>
                <span className="text-gray-600">Specify your area of interest and availability</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">3.</span>
                <span className="text-gray-600">Complete a brief interview</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">4.</span>
                <span className="text-gray-600">Start your internship journey!</span>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </InvolvementPageLayout>
  )
} 