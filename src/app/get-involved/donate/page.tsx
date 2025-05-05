import { Metadata } from 'next'
import { InvolvementPageLayout } from '../involvement-page-layout'
import { Leaf, Heart, GraduationCap, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate | RevampIT',
  description: 'Support our mission to make technology sustainable and accessible for everyone.'
}

const impactAreas = [
  {
    title: 'Environmental Impact',
    description: 'Help reduce e-waste and promote sustainable technology practices.',
    icon: Leaf
  },
  {
    title: 'Community Support',
    description: 'Enable access to technology for those who need it most.',
    icon: Heart
  },
  {
    title: 'Education & Training',
    description: 'Support our educational programs and skill development initiatives.',
    icon: GraduationCap
  },
  {
    title: 'Sustainable Future',
    description: 'Contribute to building a more sustainable technology ecosystem.',
    icon: Globe
  }
]

export default function DonatePage() {
  return (
    <InvolvementPageLayout
      title="Support Our Mission"
      description="Your donation helps us make technology sustainable and accessible for everyone."
      ctaText="Make a Donation"
      ctaHref="mailto:empfang@revamp-it.ch"
    >
      <div className="space-y-16">
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Why Donate?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your support enables us to continue our mission of making technology sustainable and 
            accessible. Every donation, no matter the size, helps us refurbish more devices, 
            support more communities, and create a more sustainable future.
          </p>
        </section>

        {/* Impact Areas Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">How Your Donation Helps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-green-200 transition-colors duration-300">
                <div className="text-green-600 mb-4">
                  <area.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Donation Options Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Ways to Donate</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">One-time donations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Monthly recurring donations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Corporate matching programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">In-kind donations of technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Legacy giving</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Impact Details Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Your Donation Impact</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technology refurbishment and distribution</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Educational programs and workshops</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Community outreach initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Research and development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Operational support</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Transparency and Accountability</h3>
          <p className="text-gray-600 leading-relaxed">
            We are committed to using your donations effectively and transparently. You'll receive 
            regular updates on how your contribution is making an impact, and we maintain clear 
            financial records available for review.
          </p>
        </section>

        {/* How to Donate Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How to Donate</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">1.</span>
                <span className="text-gray-600">Contact us to discuss your donation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">2.</span>
                <span className="text-gray-600">Choose your preferred donation method</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">3.</span>
                <span className="text-gray-600">Complete your donation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-3">4.</span>
                <span className="text-gray-600">Receive confirmation and impact updates</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Corporate Giving Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Corporate Giving</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">
              We offer special programs for corporate donors, including:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Employee matching programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Corporate sponsorship opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Technology donation programs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Volunteer engagement initiatives</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="bg-green-50 rounded-xl p-8 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900">Thank You</h3>
          <p className="text-gray-600 leading-relaxed">
            Your generosity makes our work possible. Together, we can create a more sustainable and 
            accessible technology future for everyone.
          </p>
        </section>
      </div>
    </InvolvementPageLayout>
  )
} 