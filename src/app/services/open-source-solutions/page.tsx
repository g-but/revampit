import { Metadata } from 'next'
import { 
  Code, 
  Shield, 
  Users, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Zap,
  Database,
  Server,
  Terminal,
  Lock,
  Globe,
  Heart,
  DollarSign,
  FileSpreadsheet,
  FileImage,
  FileVideo,
  FileCode,
  FileCheck,
  FileX,
  FileText,
  Chrome,
  Image,
  Video,
  Cloud,
  Paintbrush,
  Film,
  Coins,
  Wallet,
  Banknote,
  Brain,
  Network,
  Monitor,
  Box,
  GitBranch,
  MessageSquare,
  Activity,
  Share2
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Open Source Solutions | RevampIT',
  description: 'Expert open source software implementation, support, and training services for businesses and individuals.',
}

const benefits = [
  {
    title: 'Cost-Effective',
    description: 'No licensing fees and lower total cost of ownership compared to proprietary solutions.',
    icon: DollarSign
  },
  {
    title: 'Enhanced Security',
    description: 'Transparent code that can be audited by anyone, leading to faster vulnerability detection and fixes.',
    icon: Shield
  },
  {
    title: 'Freedom & Flexibility',
    description: 'No vendor lock-in. You own your data and can customize the software to your needs.',
    icon: Globe
  },
  {
    title: 'Community Support',
    description: 'Access to a global community of developers and users for support and innovation.',
    icon: Users
  }
]

const popularApps = [
  {
    name: 'LibreOffice',
    description: 'Professional office suite that rivals Microsoft Office, with full compatibility and advanced features.',
    icon: BookOpen,
    comparison: 'Microsoft Office alternative'
  },
  {
    name: 'Nextcloud',
    description: 'Secure file sharing and collaboration platform that competes with Dropbox and Google Drive.',
    icon: Server,
    comparison: 'Dropbox/Google Drive alternative'
  },
  {
    name: 'GIMP',
    description: 'Professional image editing software with capabilities matching Adobe Photoshop.',
    icon: Code,
    comparison: 'Photoshop alternative'
  },
  {
    name: 'PostgreSQL',
    description: 'Enterprise-grade database system that rivals Oracle and SQL Server in performance and features.',
    icon: Database,
    comparison: 'Oracle/SQL Server alternative'
  }
]

const features = [
  {
    title: 'Open Source Consulting',
    description: 'Strategic guidance on open source software selection and implementation for your specific needs.',
    icon: Code
  },
  {
    title: 'Custom Development',
    description: 'Tailored open source solutions and modifications to meet your unique requirements.',
    icon: Terminal
  },
  {
    title: 'Community Integration',
    description: 'Help you become an active part of the open source community and leverage its benefits.',
    icon: Users
  },
  {
    title: 'Security & Compliance',
    description: 'Ensure your open source solutions meet security standards and compliance requirements.',
    icon: Shield
  }
]

const consumerComparisons = [
  {
    category: 'Office Suite',
    openSource: {
      name: 'LibreOffice',
      icon: FileSpreadsheet,
      cost: 'Free, no subscriptions',
      comparisons: [
        'Full feature set matching Microsoft Office',
        'Export to any document format',
        'No forced upgrades or telemetry',
        'Community-driven development',
        'Available in multiple languages',
        'Complete control over your documents'
      ]
    },
    proprietary: {
      name: 'Microsoft 365',
      icon: FileText,
      cost: 'From CHF 69/year per user',
      comparisons: [
        'Full feature set with cloud integration',
        'Native Microsoft format support',
        'Regular updates and new features',
        'Corporate-driven development',
        'Available in multiple languages',
        'Subscription required for full features'
      ]
    }
  },
  {
    category: 'Operating System',
    openSource: {
      name: 'Linux',
      icon: Terminal,
      cost: 'Free, no licenses',
      comparisons: [
        'Fully customizable and inspectable',
        'No forced updates or telemetry',
        'Thousands of free applications',
        'Community-driven security updates',
        'Available in multiple distributions',
        'Complete control over your system'
      ]
    },
    proprietary: {
      name: 'Windows/macOS',
      icon: Monitor,
      cost: 'License fees and subscriptions',
      comparisons: [
        'Pre-installed on most hardware',
        'Built-in telemetry and updates',
        'Official app stores and support',
        'Corporate-driven updates',
        'Limited customization options',
        'Regular license renewals needed'
      ]
    }
  },
  {
    category: 'File Sync & Share',
    openSource: {
      name: 'Nextcloud',
      icon: Cloud,
      cost: 'Free, self-hosted',
      comparisons: [
        'Complete control over your data',
        'Hundreds of integrated apps',
        'GDPR and privacy compliant',
        'Community-driven development',
        'Available in multiple languages',
        'No storage limits or fees'
      ]
    },
    proprietary: {
      name: 'Dropbox/Google Drive',
      icon: Cloud,
      cost: 'From CHF 10/month',
      comparisons: [
        'Easy to use and set up',
        'Integrated with other services',
        'Automatic sync and backup',
        'Corporate-driven development',
        'Available in multiple languages',
        'Storage limits and fees apply'
      ]
    }
  },
  {
    category: 'Web Browser',
    openSource: {
      name: 'Firefox/Brave',
      icon: Globe,
      cost: 'Free',
      comparisons: [
        'Privacy-focused with no tracking',
        'Works with all web standards',
        'Regular security updates',
        'Community-driven development',
        'Available in multiple languages',
        'No data collection'
      ]
    },
    proprietary: {
      name: 'Chrome/Edge',
      icon: Chrome,
      cost: 'Free with data collection',
      comparisons: [
        'Extensive data collection and tracking',
        'Works with all web standards',
        'Regular security updates',
        'Corporate-driven development',
        'Available in multiple languages',
        'Data collection required'
      ]
    }
  },
  {
    category: 'Graphics Editing',
    openSource: {
      name: 'GIMP/Inkscape',
      icon: Paintbrush,
      cost: 'Free',
      comparisons: [
        'Professional-grade tools',
        'Works with all image formats',
        'Regular security updates',
        'Community-driven development',
        'Available in multiple languages',
        'No watermarks or limitations'
      ]
    },
    proprietary: {
      name: 'Adobe Photoshop/Illustrator',
      icon: Image,
      cost: 'CHF 24/month',
      comparisons: [
        'Industry standard tools',
        'Works with all image formats',
        'Regular security updates',
        'Corporate-driven development',
        'Available in multiple languages',
        'Subscription required'
      ]
    }
  },
  {
    category: '3D & Video',
    openSource: {
      name: 'Blender',
      icon: Film,
      cost: 'Free',
      comparisons: [
        'Studio-quality 3D/VFX/animation',
        'Massive plugin ecosystem',
        'Regular security updates',
        'Community-driven development',
        'Available in multiple languages',
        'No watermarks or limitations'
      ]
    },
    proprietary: {
      name: 'Autodesk Maya/3ds Max',
      icon: Video,
      cost: 'Complex licensing fees',
      comparisons: [
        'Industry standard tools',
        'Works with all formats',
        'Regular security updates',
        'Corporate-driven development',
        'Available in multiple languages',
        'License and support required'
      ]
    }
  },
  {
    category: 'Social Media',
    openSource: {
      name: 'Mastodon/Pixelfed',
      icon: Users,
      cost: 'Free, self-hosted or join a server',
      comparisons: [
        'Decentralized network (Fediverse)',
        'No algorithm manipulation',
        'No data collection or ads',
        'Community-driven moderation',
        'Available in multiple languages',
        'Export your data anytime'
      ]
    },
    proprietary: {
      name: 'Twitter/Instagram',
      icon: Share2,
      cost: 'Free with ads and data collection',
      comparisons: [
        'Centralized platform control',
        'Algorithm-driven content',
        'Extensive data collection',
        'Corporate moderation',
        'Available in multiple languages',
        'Limited data portability'
      ]
    }
  }
]

const businessComparisons = [
  {
    category: 'Database',
    openSource: {
      name: 'PostgreSQL/MariaDB',
      icon: Database,
      cost: 'Free, no seat fees',
      comparisons: [
        'Enterprise-grade performance',
        'Unlimited extensions and plugins',
        'Strong ACID compliance',
        'Community-driven security',
        'Available for all platforms',
        'Complete control over data'
      ]
    },
    proprietary: {
      name: 'Oracle DB',
      icon: Database,
      cost: 'Complex licensing fees',
      comparisons: [
        'Enterprise-grade features',
        'Official support and training',
        'Strong security features',
        'Corporate-driven updates',
        'Available for all platforms',
        'License and support required'
      ]
    }
  },
  {
    category: 'Virtualization',
    openSource: {
      name: 'KVM/QEMU',
      icon: Server,
      cost: 'Free, no licenses',
      comparisons: [
        'Fully open hypervisor',
        'Integrates with any toolchain',
        'Enterprise-grade features',
        'Community-driven security',
        'Available for all platforms',
        'Complete control over VMs'
      ]
    },
    proprietary: {
      name: 'VMware vSphere',
      icon: Server,
      cost: 'Per-CPU/socket licenses',
      comparisons: [
        'Enterprise-grade features',
        'Official support and training',
        'Strong security features',
        'Corporate-driven updates',
        'Available for all platforms',
        'License and support required'
      ]
    }
  },
  {
    category: 'Container Platform',
    openSource: {
      name: 'Kubernetes',
      icon: Box,
      cost: 'Free, no lock-in',
      comparisons: [
        'Run anywhere, no cloud lock',
        'Fork and customize as needed',
        'Enterprise-grade features',
        'Community-driven security',
        'Available for all platforms',
        'Complete control over containers'
      ]
    },
    proprietary: {
      name: 'AWS ECS/EKS',
      icon: Cloud,
      cost: 'Complex pricing model',
      comparisons: [
        'Managed service with support',
        'Integrated with AWS ecosystem',
        'Enterprise-grade features',
        'Corporate-driven updates',
        'Available on AWS platform',
        'Vendor lock-in potential'
      ]
    }
  },
  {
    category: 'CI/CD',
    openSource: {
      name: 'Jenkins/GitLab CI',
      icon: GitBranch,
      cost: 'Free, self-hosted',
      comparisons: [
        'Infinite plugins and extensions',
        'Self-host or cloud deployment',
        'Enterprise-grade features',
        'Community-driven security',
        'Available for all platforms',
        'Complete control over pipeline'
      ]
    },
    proprietary: {
      name: 'TeamCity/CircleCI',
      icon: GitBranch,
      cost: 'Per-user or per-build fees',
      comparisons: [
        'Managed service with support',
        'Integrated with other tools',
        'Enterprise-grade features',
        'Corporate-driven updates',
        'Available for all platforms',
        'Usage-based pricing'
      ]
    }
  },
  {
    category: 'Monitoring',
    openSource: {
      name: 'Prometheus + Grafana',
      icon: Activity,
      cost: 'Free, self-hosted',
      comparisons: [
        'Pull-model metrics collection',
        'Flexible query language',
        'Extensive plugin ecosystem',
        'Community-driven security',
        'Available for all platforms',
        'Complete control over monitoring'
      ]
    },
    proprietary: {
      name: 'Datadog/New Relic',
      icon: Activity,
      cost: 'Per-host/per-metric fees',
      comparisons: [
        'Managed service with support',
        'Integrated with other tools',
        'Enterprise-grade features',
        'Corporate-driven updates',
        'Available for all platforms',
        'Usage-based pricing'
      ]
    }
  },
  {
    category: 'Collaboration',
    openSource: {
      name: 'Mattermost/Rocket.Chat',
      icon: MessageSquare,
      cost: 'Free, self-hosted',
      comparisons: [
        'Self-hosted Slack alternative',
        'No data collection',
        'Export data at any time',
        'Community-driven security',
        'Available for all platforms',
        'Complete control over data'
      ]
    },
    proprietary: {
      name: 'Slack/Teams',
      icon: MessageSquare,
      cost: 'Per-user subscription',
      comparisons: [
        'Easy to use and set up',
        'Integrated with other services',
        'Enterprise-grade features',
        'Corporate-driven updates',
        'Available for all platforms',
        'Data retention policies apply'
      ]
    }
  }
]

const emergingTechComparisons = [
  {
    category: 'Digital Currency',
    openSource: {
      name: 'Bitcoin',
      icon: Coins,
      cost: 'Transparent network fees',
      comparisons: [
        'Open-source protocol with public audit trail',
        'Predictable supply with 21 million cap',
        'Self-custody: full control of funds',
        'Global network with 24/7 availability',
        'Permissionless transactions',
        'No central authority'
      ]
    },
    proprietary: {
      name: 'Traditional Banking',
      icon: Banknote,
      cost: 'Multiple fees and charges',
      comparisons: [
        'Centralized control and regulation',
        'Unlimited supply by central banks',
        'Custodial: banks control funds',
        'Limited by banking hours',
        'Permissioned transactions',
        'Central authority required'
      ]
    }
  },
  {
    category: 'Artificial Intelligence',
    openSource: {
      name: 'Open Source AI',
      icon: Brain,
      cost: 'Free to use, pay for compute',
      examples: [
        'LLaMA 2 (Meta) - Powerful language model',
        'Stable Diffusion - Image generation',
        'Whisper - Speech recognition',
        'BERT - Natural language processing',
        'TensorFlow/PyTorch - ML frameworks'
      ],
      comparisons: [
        'Fully inspectable code and models',
        'No forced telemetry or tracking',
        'Run on any compatible hardware',
        'Community-driven security',
        'Democratized development',
        'Full customization possible'
      ]
    },
    proprietary: {
      name: 'Proprietary AI',
      icon: Network,
      cost: 'Pay-per-use or subscription',
      examples: [
        'ChatGPT (OpenAI)',
        'DALL-E (OpenAI)',
        'Claude (Anthropic)',
        'Midjourney',
        'Google Bard'
      ],
      comparisons: [
        'Closed-source with restrictions',
        'Built-in usage tracking',
        'Cloud-only deployment',
        'Corporate-controlled updates',
        'Single-company roadmap',
        'Limited customization'
      ]
    }
  }
]

export default function OpenSourceSolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Open Source Solutions</h1>
            <p className="text-xl text-green-100">
              Professional open source software implementation that matches or exceeds proprietary alternatives.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Choose Open Source?</h2>
            <p className="text-lg text-gray-600">
              Open source software offers superior value, security, and flexibility compared to proprietary alternatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <benefit.icon className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="p-3 bg-green-100 rounded-lg text-green-600 mr-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace Open Source?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Join thousands of individuals and businesses who have successfully transitioned to open source solutions.
            Our team of experts is ready to help you make the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300 text-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-lg"
            >
              Explore All Services
            </Link>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Why Choose RevampIT?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Expert Guidance</h4>
                <p className="text-green-100">Professional support for your open source journey</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Custom Solutions</h4>
                <p className="text-green-100">Tailored to your specific needs and requirements</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Ongoing Support</h4>
                <p className="text-green-100">Continuous assistance and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Note */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            All information provided is accurate as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}.
            We regularly update our content to reflect the latest developments in open source software.
          </p>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Open Source Solutions</h2>
            <p className="text-lg text-gray-600">
              Discover powerful open-source alternatives to expensive proprietary software.
              All these solutions are free, regularly updated, and community-driven.
            </p>
          </div>

          {/* Consumer Solutions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Consumer Solutions</h3>
            <div className="space-y-12">
              {consumerComparisons.map((comparison, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold mb-8 text-center">{comparison.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Open Source Solution */}
                    <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-green-100 rounded-lg text-green-600 mr-4">
                          <comparison.openSource.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold">{comparison.openSource.name}</h5>
                          <p className="text-green-600 font-medium">Open Source • {comparison.openSource.cost}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {comparison.openSource.comparisons.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 bg-green-100 rounded-full mr-3 mt-0.5">
                              <FileCheck className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Proprietary Solution */}
                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gray-100 rounded-lg text-gray-600 mr-4">
                          <comparison.proprietary.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold">{comparison.proprietary.name}</h5>
                          <p className="text-gray-600 font-medium">Proprietary • {comparison.proprietary.cost}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {comparison.proprietary.comparisons.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 bg-gray-100 rounded-full mr-3 mt-0.5">
                              <FileX className="w-4 h-4 text-gray-500" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Solutions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Business Solutions</h3>
            <div className="space-y-12">
              {businessComparisons.map((comparison, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold mb-8 text-center">{comparison.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Open Source Solution */}
                    <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-green-100 rounded-lg text-green-600 mr-4">
                          <comparison.openSource.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold">{comparison.openSource.name}</h5>
                          <p className="text-green-600 font-medium">Open Source • {comparison.openSource.cost}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {comparison.openSource.comparisons.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 bg-green-100 rounded-full mr-3 mt-0.5">
                              <FileCheck className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Proprietary Solution */}
                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gray-100 rounded-lg text-gray-600 mr-4">
                          <comparison.proprietary.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold">{comparison.proprietary.name}</h5>
                          <p className="text-gray-600 font-medium">Proprietary • {comparison.proprietary.cost}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {comparison.proprietary.comparisons.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 bg-gray-100 rounded-full mr-3 mt-0.5">
                              <FileX className="w-4 h-4 text-gray-500" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emerging Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Emerging Technologies</h3>
            <div className="space-y-12">
              {emergingTechComparisons.map((comparison, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold mb-8 text-center">{comparison.category}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Open Source Solution */}
                    <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-green-100 rounded-lg text-green-600 mr-4">
                          <comparison.openSource.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold">{comparison.openSource.name}</h5>
                          <p className="text-green-600 font-medium">Open Source • {comparison.openSource.cost}</p>
                        </div>
                      </div>
                      {comparison.openSource.examples && (
                        <div className="mb-6">
                          <h6 className="text-lg font-semibold mb-3">Popular Examples:</h6>
                          <ul className="space-y-2">
                            {comparison.openSource.examples.map((example, i) => (
                              <li key={i} className="flex items-start">
                                <div className="p-1 bg-green-100 rounded-full mr-3 mt-0.5">
                                  <FileCheck className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-gray-600">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="space-y-4">
                        <h6 className="text-lg font-semibold mb-3">Key Advantages:</h6>
                        {comparison.openSource.comparisons.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 bg-green-100 rounded-full mr-3 mt-0.5">
                              <FileCheck className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Proprietary Solution */}
                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gray-100 rounded-lg text-gray-600 mr-4">
                          <comparison.proprietary.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold">{comparison.proprietary.name}</h5>
                          <p className="text-gray-600 font-medium">Proprietary • {comparison.proprietary.cost}</p>
                        </div>
                      </div>
                      {comparison.proprietary.examples && (
                        <div className="mb-6">
                          <h6 className="text-lg font-semibold mb-3">Popular Examples:</h6>
                          <ul className="space-y-2">
                            {comparison.proprietary.examples.map((example, i) => (
                              <li key={i} className="flex items-start">
                                <div className="p-1 bg-gray-100 rounded-full mr-3 mt-0.5">
                                  <FileX className="w-4 h-4 text-gray-500" />
                                </div>
                                <span className="text-gray-600">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="space-y-4">
                        <h6 className="text-lg font-semibold mb-3">Key Characteristics:</h6>
                        {comparison.proprietary.comparisons.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="p-1 bg-gray-100 rounded-full mr-3 mt-0.5">
                              <FileX className="w-4 h-4 text-gray-500" />
                            </div>
                            <span className="text-gray-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 