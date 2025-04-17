'use client'

import { mainNavigation } from '@/config/navigation'
import { Logo } from '@/components/ui/Logo'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="relative z-20">
            <Logo className="mb-4" showText={true} />
            <p className="mt-4 text-sm text-gray-300">
              Transforming the future of IT through sustainable refurbishment and recycling.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="relative z-20">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="relative z-20">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Birmensdorferstr. 379</p>
                  <p className="text-sm text-gray-300">8055 Zürich</p>
                  <p className="text-sm text-gray-300 mt-2">Lager: Badenerstr. 816</p>
                  <p className="text-sm text-gray-300">8048 Zürich</p>
                  <p className="text-xs text-gray-400 italic">Nur nach vorheriger Anmeldung</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <a href="tel:+41439603264" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                    +41 (0)43 960 32 64
                  </a>
                  <p className="text-xs text-gray-400">Mo-Fr 10-12 und 13-17</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gray-300 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Mo 9 - 12 Uhr</p>
                  <p className="text-sm text-gray-300">Di - Fr 13 - 17 Uhr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} RevampIT. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 