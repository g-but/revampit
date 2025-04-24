'use client'

import Link from 'next/link'
import { mainNavigation, socialLinks } from '@/config/navigation'
import { Logo } from '@/components/ui/Logo'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Logo className="mb-4" showText={true} />
            <p className="text-sm text-gray-300">
              Transforming the future of IT through sustainable refurbishment and recycling.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Retail Location</p>
                  <p className="text-gray-300">Birmensdorferstr. 379</p>
                  <p className="text-gray-300">8055 Zürich</p>
                  <p className="text-gray-300">Schweiz</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Warehouse</p>
                  <p className="text-gray-300">Badenerstr. 816</p>
                  <p className="text-gray-300">8048 Zürich</p>
                  <p className="text-gray-300 text-sm">(by appointment only)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+41439603264" className="text-gray-300 hover:text-white transition-colors">
                  +41 (0)43 960 32 64
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:empfang@revamp-it.ch" className="text-gray-300 hover:text-white transition-colors">
                  empfang@revamp-it.ch
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="flex items-start">
              <Clock className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-gray-300">Monday: 9:00 - 12:00</p>
                <p className="text-gray-300">Tuesday - Friday: 13:00 - 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social.name}</span>
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RevampIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 