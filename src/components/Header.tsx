'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faTimes, 
  faPhone, 
  faEnvelope, 
  faOm,
  faChevronDown,
  faHome,
  faWater,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import { siteConfig } from '@/config/site';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Seva', href: '/services' },
  { 
    name: 'Pindvedis', 
    href: '/pindvedis',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Important Vedis', href: '/pindvedis#important-vedis', icon: faHome },
      { name: 'Pind Vedis', href: '/pindvedis#pind-vedis', icon: faOm },
      { name: 'Tarpan Vedis', href: '/pindvedis#tarpan-vedis', icon: faWater },
      { name: 'Darshan Vedis', href: '/pindvedis#darshan-vedis', icon: faSun },
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="relative">
      {/* Top ribbon bar - Modernized */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${siteConfig.contact.phone}`} 
              className="flex items-center space-x-2 hover:text-yellow-200 transition-all duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faPhone} className="w-3.5 h-3.5" />
              <span className="font-medium">{siteConfig.contact.phone}</span>
            </a>
            <a 
              href={`mailto:${siteConfig.contact.email}`} 
              className="flex items-center space-x-2 hover:text-yellow-200 transition-all duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
              <span className="font-medium">{siteConfig.contact.email}</span>
            </a>
          </div>
          <div className="hidden lg:flex items-center space-x-3">
            <FontAwesomeIcon icon={faOm} className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-yellow-100 font-medium">Sacred Services in Gaya</span>
          </div>
        </div>
      </div>

      {/* Main navigation - Completely modernized */}
      <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Enhanced */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 via-red-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <FontAwesomeIcon icon={faOm} className="w-7 h-7 text-white group-hover:animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
                  {siteConfig.name}
                </h1>
                <p className="text-sm text-gray-600 font-medium">Sacred Rituals & Spiritual Services</p>
              </div>
            </Link>

            {/* Desktop navigation - Enhanced with dropdowns */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:text-orange-600 font-semibold transition-all duration-300 relative group rounded-lg hover:bg-orange-50"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`w-3 h-3 transition-transform duration-300 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>

                  {/* Dropdown menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-orange-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 group"
                              >
                                <FontAwesomeIcon 
                                  icon={dropdownItem.icon} 
                                  className="w-4 h-4 text-orange-500 group-hover:text-orange-600" 
                                />
                                <span className="font-medium">{dropdownItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Book Seva
              </Link>
            </div>

            {/* Mobile menu button - Enhanced */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-gray-700 hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            >
              <FontAwesomeIcon 
                icon={mobileMenuOpen ? faTimes : faBars} 
                className="w-6 h-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile navigation - Completely redesigned */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-orange-100"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
                      onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4" />
                      )}
                    </Link>
                    
                    {/* Mobile dropdown items */}
                    {item.hasDropdown && (
                      <div className="ml-4 space-y-1 border-l-2 border-orange-200 pl-4">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <FontAwesomeIcon 
                              icon={dropdownItem.icon} 
                              className="w-3.5 h-3.5 text-orange-500" 
                            />
                            <span className="text-sm font-medium">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-orange-100">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full text-center hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Seva
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
