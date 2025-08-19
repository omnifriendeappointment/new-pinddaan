'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

  // Only include social links that are available in config
  const socialLinks = [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...((siteConfig.links as any).facebook ? [{ icon: faFacebook, href: (siteConfig.links as any).facebook, hoverColor: 'hover:text-orange-400' }] : []),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...((siteConfig.links as any).twitter ? [{ icon: faTwitter, href: (siteConfig.links as any).twitter, hoverColor: 'hover:text-orange-400' }] : []),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...((siteConfig.links as any).instagram ? [{ icon: faInstagram, href: (siteConfig.links as any).instagram, hoverColor: 'hover:text-orange-400' }] : []),
    { icon: faWhatsapp, href: `https://wa.me/${siteConfig.contact.whatsapp}`, hoverColor: 'hover:text-green-400' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Floating Tulsi leaves decoration */}
      <div className="absolute top-6 left-16">
        <motion.div
          animate={{ 
            rotate: [0, 15, -10, 0],
            y: [0, -8, 12, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/tulsi-leaf.png"
            alt="Tulsi Leaf"
            width={35}
            height={35}
          />
        </motion.div>
      </div>

      <div className="absolute top-32 right-20">
        <motion.div
          animate={{ 
            rotate: [0, -18, 12, 0],
            x: [0, 8, -6, 0]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Image
            src="/tulsi-leaf.webp"
            alt="Tulsi Leaf"
            width={40}
            height={40}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-28 left-1/3">
        <motion.div
          animate={{ 
            rotate: [0, 12, -15, 0],
            y: [0, 10, -5, 0],
            x: [0, -4, 8, 0]
          }}
          transition={{ 
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        >
          <Image
            src="/tulsi-leaf.png"
            alt="Tulsi Leaf"
            width={32}
            height={32}
          />
        </motion.div>
      </div>

      <div className="absolute top-20 left-1/2">
        <motion.div
          animate={{ 
            rotate: [0, -8, 20, 0],
            y: [0, -12, 6, 0]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Image
            src="/tulsi-leaf.webp"
            alt="Tulsi Leaf"
            width={28}
            height={28}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-16 right-1/4">
        <motion.div
          animate={{ 
            rotate: [0, 25, -12, 0],
            x: [0, 6, -10, 0],
            y: [0, 8, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        >
          <Image
            src="/tulsi-leaf.png"
            alt="Tulsi Leaf"
            width={30}
            height={30}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faOm} className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-orange-400">
                  {siteConfig.name} 
                  <br />
                  <span className='text-base'>{siteConfig.tagline}</span>
                </h3>
                <p className="text-sm text-orange-500 font-semibold italic">{siteConfig.subTagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Preserving ancient traditions and providing authentic spiritual services 
              in the holy city of Gaya Ji for your complete peace of mind.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className={`text-gray-400 ${social.hoverColor} transition-colors`}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © {currentYear} {siteConfig.name}. Made with{' '}
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-red-500 mx-1" />
            for spiritual devotees.
          </p>
          <p className="text-gray-500 text-xs">
            Designed & Developed by{' '}
            <a 
              href="https://adshere.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              AdsHere
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
