import { Metadata } from 'next'
import { InvolvementPageLayout } from '../involvement-page-layout'
import { Users, Wrench, BookOpen, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer | RevampIT',
  description: 'Join our team of dedicated volunteers and make a difference in your community through technology and sustainability.'
}

const benefits = [
  {
    title: 'Hands-on Experience',
    description: 'Work directly with hardware and software, gaining practical experience in technology and sustainability.',
    icon: Wrench
  },
  {
    title: 'Learn New Skills',
    description: 'Develop technical and soft skills through our training programs and mentorship opportunities.',
    icon: BookOpen
  },
  {
    title: 'Community Impact',
    description: 'Make a real difference in your community by helping make technology accessible to everyone.',
    icon: Heart
  },
  {
    title: 'Join Our Team',
    description: 'Become part of a diverse and passionate team working towards a common goal.',
    icon: Users
  }
]

export default function VolunteerPage() {
  return (
    <InvolvementPageLayout
      title="Become a Volunteer"
      description="Join our team of dedicated volunteers and help make technology sustainable and accessible for everyone."
      ctaText="Start Volunteering"
      ctaHref="mailto:empfang@revamp-it.ch"
    >
      <div className="space-y-16">
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Why Volunteer with RevampIT?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At RevampIT, we believe that everyone should have access to technology and the skills to use it. 
            As a volunteer, you'll be part of a community that's making this vision a reality. Whether you're 
            passionate about technology, sustainability, or community service, there's a place for you in our team.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Benefits of Volunteering</h2>
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

        {/* Roles Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Volunteer Roles</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Help refurbish and repair computers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Assist in our workshops and training programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Support our community outreach initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Contribute to our documentation and knowledge base</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Help with administrative tasks and event organization</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Time Commitment Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Time Commitment</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that everyone has different schedules. We offer flexible volunteering opportunities 
              that can fit around your other commitments. Whether you can spare a few hours a week or more, 
              your contribution will make a difference.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Flexible scheduling options</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Regular and occasional opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Remote and on-site options</span>
              </li>
            </ul>
          </div>
        </section>

        {/* No Experience Required Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">No Experience Required</h3>
          <p className="text-gray-600 leading-relaxed">
            Don't worry if you don't have technical experience. We provide all the training you need, 
            and there are many ways to contribute beyond technical work. What matters most is your 
            enthusiasm and willingness to learn.
          </p>
        </section>

        {/* How to Get Started Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How to Get Started</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">1.</span>
                <span className="text-gray-600">Contact us to express your interest</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">2.</span>
                <span className="text-gray-600">Meet with our team to discuss your skills and interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">3.</span>
                <span className="text-gray-600">Complete a brief orientation session</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">4.</span>
                <span className="text-gray-600">Start making a difference!</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Your Impact</h3>
          <p className="text-gray-600 leading-relaxed">
            As a volunteer, you'll be part of a movement that's making technology more sustainable and 
            accessible. Your contribution helps us reduce e-waste, provide technology to those who need it, 
            and build a more inclusive digital future for our community.
          </p>
        </section>
      </div>
    </InvolvementPageLayout>
  )
} 