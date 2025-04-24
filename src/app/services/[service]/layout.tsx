import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Details | RevampIT',
  description: 'Detailed information about our professional IT services.',
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
} 