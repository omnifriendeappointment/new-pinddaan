'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faOm,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { siteConfig } from '@/config/site';
import { services } from '@/config/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faOm} className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-400">{siteConfig.name}</h3>
                <p className="text-xs text-gray-400">Sacred Rituals</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Preserving ancient traditions and providing authentic spiritual services 
              in the holy city of Gaya for your complete peace of mind.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.links.facebook} className="text-gray-400 hover:text-orange-400 transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.twitter} className="text-gray-400 hover:text-orange-400 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href={siteConfig.links.instagram} className="text-gray-400 hover:text-orange-400 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="text-gray-400 hover:text-green-400 transition-colors">
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Our Seva</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Seva
                </Link>
              </li>
              <li>
                <Link href="/pindvedis" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Pindvedis
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-orange-400 mt-1" />
                <p className="text-gray-300 text-sm">{siteConfig.contact.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 text-orange-400" />
                <a 
                  href={`tel:${siteConfig.contact.phone}`} 
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-orange-400" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. Made with{' '}
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-500 mx-1" />
            for spiritual devotees.
          </p>
        </div>
      </div>
    </footer>
  );
}
