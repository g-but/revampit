import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  href?: string
  showText?: boolean
}

export function Logo({ className, href = '/', showText = true }: LogoProps) {
  return (
    <Link href={href} className={cn('flex items-center gap-2', className)}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-600">
        <span className="text-white font-bold text-xl">R</span>
      </div>
      {showText && (
        <span className="text-xl font-bold text-gray-900">RevampIT</span>
      )}
    </Link>
  )
} 