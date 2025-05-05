import { Metadata } from 'next'
import { InvolvementPageLayout } from '../involvement-page-layout'
import { Briefcase, Users, GraduationCap, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work Reintegration | RevampIT',
  description: 'Join our work reintegration program to gain valuable skills and experience in technology while rebuilding your career.'
}

const benefits = [
  {
    title: 'Skill Development',
    description: 'Learn practical skills in technology and sustainability.',
    icon: GraduationCap
  },
  {
    title: 'Professional Growth',
    description: 'Build your resume with real-world experience.',
    icon: Briefcase
  },
  {
    title: 'Supportive Environment',
    description: 'Work in a supportive and understanding team.',
    icon: Users
  },
  {
    title: 'Meaningful Work',
    description: 'Contribute to projects that make a difference.',
    icon: Heart
  }
]

export default function WorkReintegrationPage() {
  return (
    <InvolvementPageLayout
      title="Work Reintegration Program"
      description="Join our supportive program to rebuild your career in technology and sustainability."
      ctaText="Start Your Journey"
      ctaHref="mailto:empfang@revamp-it.ch"
    >
      <div className="space-y-16">
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">About Our Program</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our work reintegration program is designed to help individuals rebuild their careers in a 
            supportive and understanding environment. We focus on providing practical experience in 
            technology and sustainability while helping you develop the skills and confidence needed 
            for long-term employment.
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

        {/* Features Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Program Features</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Structured work experience in technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Professional development and training</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Individual support and mentoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Flexible scheduling options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Gradual workload increase</span>
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
                <span className="text-gray-600">Computer hardware and software</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technical troubleshooting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Customer service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Team collaboration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Project management</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Support Services Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Support Services</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Regular check-ins and progress reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Access to counseling services</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Workplace accommodations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Career guidance and planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Networking opportunities</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Individualized Approach Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Individualized Approach</h3>
          <p className="text-gray-600 leading-relaxed">
            We understand that everyone's journey is unique. Our program is flexible and can be 
            tailored to your specific needs and goals. We work with you to create a plan that 
            supports your successful reintegration into the workforce.
          </p>
        </section>

        {/* Success Stories Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Many of our participants have successfully transitioned to full-time employment in 
            technology and related fields. Their success is a testament to the effectiveness of 
            our program and the dedication of our team.
          </p>
        </section>

        {/* How to Get Started Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How to Get Started</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">1.</span>
                <span className="text-gray-600">Contact us to discuss your situation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">2.</span>
                <span className="text-gray-600">Meet with our team for an assessment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">3.</span>
                <span className="text-gray-600">Develop your personalized plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">4.</span>
                <span className="text-gray-600">Begin your work reintegration journey</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Confidentiality Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Confidentiality</h3>
          <p className="text-gray-600 leading-relaxed">
            We maintain strict confidentiality throughout the program. Your privacy and dignity are 
            our top priorities, and we ensure that all information is handled with the utmost care 
            and respect.
          </p>
        </section>
      </div>
    </InvolvementPageLayout>
  )
} 