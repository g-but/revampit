'use client'

import { useState, useRef } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { mainNavigation } from '@/config/navigation'
import { Logo } from '@/components/ui/Logo'
import { useDetectScroll } from '@/lib/hooks/useDetectScroll'
import { useClickOutside } from '@/lib/hooks/useClickOutside'
import { useEscapeKey } from '@/lib/hooks/useEscapeKey'
import { MobileMenu } from './MobileMenu'
import { WelcomeModal } from '@/components/ui/WelcomeModal'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>()
  const headerRef = useRef<HTMLElement>(null)
  const isScrolled = useDetectScroll(20)

  useClickOutside(headerRef, () => {
    if (openDropdown) {
      setOpenDropdown(null)
    }
  })

  useEscapeKey(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
    if (openDropdown) {
      setOpenDropdown(null)
    }
  })

  const handleOpenMobileMenu = () => {
    setMobileMenuOpen(true)
  }

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const clearDropdownTimeout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = undefined
    }
  }

  const handleMouseEnter = (itemName: string) => {
    clearDropdownTimeout()
    setOpenDropdown(itemName)
  }

  const handleMouseLeave = () => {
    clearDropdownTimeout()
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 300)
  }

  const handleDropdownMouseEnter = () => {
    clearDropdownTimeout()
  }

  const handleDropdownMouseLeave = () => {
    clearDropdownTimeout()
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 300)
  }

  // Helper function to render services dropdown
  const renderServicesDropdown = (subItems: any[]) => {
    const sections: { [key: string]: any[] } = {}
    let currentSection = ''
    
    subItems.forEach(item => {
      if (item.isSection) {
        currentSection = item.name
        sections[currentSection] = []
      } else if (currentSection) {
        sections[currentSection].push(item)
      }
    })

    return (
      <div className="grid grid-cols-3 gap-8 w-[720px]">
        {Object.entries(sections).map(([sectionName, sectionItems]) => (
          <div key={sectionName} className="space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              {sectionName}
            </div>
            <div className="space-y-1">
              {sectionItems.map((subItem) => {
                if (subItem.href === '#') {
                  return (
                    <div
                      key={subItem.name}
                      className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-400 cursor-not-allowed"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{subItem.name}</div>
                          {subItem.description && (
                            <div className="text-xs text-gray-400 mt-1">{subItem.description}</div>
                          )}
                        </div>
                        {subItem.badge && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                            {subItem.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  )
                }

                return subItem.external ? (
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{subItem.name}</div>
                        {subItem.description && (
                          <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                        )}
                      </div>
                      {subItem.badge && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {subItem.badge}
                        </span>
                      )}
                    </div>
                  </a>
                ) : (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
                    onClick={() => setOpenDropdown(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{subItem.name}</div>
                        {subItem.description && (
                          <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                        )}
                      </div>
                      {subItem.badge && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {subItem.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <WelcomeModal />
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              ref={mobileMenuTriggerRef}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              onClick={handleOpenMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu-panel"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {mainNavigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.subItems && item.subItems.length > 0 ? (
                  <div className="flex items-center gap-x-1">
                    <Link
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                    />
                    {openDropdown === item.name && (
                      <div 
                        className="absolute left-0 top-full pt-3"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        <div className="relative">
                          <div className="absolute -top-3 left-0 h-3 w-full" />
                          <div className="relative rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                            {item.name === 'Services' ? (
                              renderServicesDropdown(item.subItems)
                            ) : (
                              <div className="w-80">
                                {item.subItems.map((subItem, index) => {
                                  if (subItem.isSection) {
                                    return (
                                      <div key={subItem.name} className={`${index > 0 ? 'mt-6 pt-6 border-t border-gray-100' : 'mb-3'}`}>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                          {subItem.name}
                                        </div>
                                      </div>
                                    )
                                  }
                                  
                                  if (subItem.href === '#') {
                                    return (
                                      <div
                                        key={subItem.name}
                                        className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-400 cursor-not-allowed"
                                      >
                                        <div className="flex items-center justify-between">
                                          <div>
                                            <div className="font-semibold">{subItem.name}</div>
                                            {subItem.description && (
                                              <div className="text-xs text-gray-400 mt-1">{subItem.description}</div>
                                            )}
                                          </div>
                                          {subItem.badge && (
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    )
                                  }

                                  return subItem.external ? (
                                    <a
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <div className="font-semibold">{subItem.name}</div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                                      )}
                                    </a>
                                  ) : (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block rounded-lg px-3 py-2 text-sm leading-6 text-gray-900 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      <div className="font-semibold">{subItem.name}</div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                                      )}
                                    </Link>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-semibold leading-6 ${
                      item.highlight 
                        ? 'bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700' 
                        : 'text-gray-900 hover:text-green-600'
                    } transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={handleCloseMobileMenu} 
        navigationItems={mainNavigation}
        triggerRef={mobileMenuTriggerRef}
      />
    </>
  )
} 