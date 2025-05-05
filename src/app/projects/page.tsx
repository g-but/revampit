import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects | RevampIT',
  description: 'Discover our diverse range of projects from open-source contributions to community initiatives and hardware development.'
}

const projects = [
  {
    title: 'Kivitendo Modus CH',
    description: 'Since July 2015 revamp-it is premium partner of the kivitendo project. Starting in 2005 - initially for our own purposes but soon afterwards to satisfy the needs of our customers- we searched for a software solution for accounting, resource and customer management.',
    readMoreLink: '/projects/kivitendo',
    icon: '📊'
  },
  {
    title: 'Verein Linuxola',
    description: 'Verein Linuxola was founded on December 2, 2005 by eight people from different regions of Switzerland. The purpose of the organization is to provide access to information technology and a connection to the global digital commons for our partners in Africa.',
    readMoreLink: '/projects/linuxola',
    icon: '🌍'
  },
  {
    title: 'FreieComputer.ch',
    description: 'The Swiss label for computers with preinstalled free software and guaranteed support! revamp-it have, together with the support of the dedicated open source community, contributed to the creation of this label.',
    readMoreLink: '/projects/freiecomputer',
    icon: '💻'
  },
  {
    title: 'Compirat',
    description: 'Compirat is a collaborative effort by Caritas Zürich and revamp-it. Thanks to the assistance of Compirat, people of limited means living in the canton of Zürich are afforded the opportunity to start learning about computers close to their own domicile.',
    readMoreLink: '/projects/compirat',
    icon: '👥'
  },
  {
    title: 'Hardware Development',
    description: 'Hardware development work at revamp-it is concentrated around discovering new possibilities of decommissioned computer hardware, optimizing energy and resource usage, and creating guides for open source hardware assembly.',
    readMoreLink: '/projects/hardware',
    icon: '🔧'
  },
  {
    title: 'LTSP - Linux Terminal Server Project',
    description: 'The Linux Terminal Server Project is focused on utilizing the power of a fast, high-capacity server connected through a network to older, slower computers. This allows multiple users to work simultaneously on their clients connected to the same server.',
    readMoreLink: '/projects/ltsp',
    icon: '🖥️'
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Our Projects</h1>
            <p className="text-xl text-green-100">
              Discover our diverse range of projects, from open-source contributions to community initiatives and hardware development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href={project.readMoreLink}
                  className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 