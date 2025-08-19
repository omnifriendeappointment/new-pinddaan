'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faOm,
  faDirections
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { siteConfig } from '@/config/site';

const contactMethods = [
  {
    icon: faPhone,
    title: 'Phone',
    value: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
    description: 'Call us directly for immediate assistance',
    color: 'text-blue-600',
    bgColor: 'from-blue-100 to-blue-200'
  },
  {
    icon: faWhatsapp,
    title: 'WhatsApp',
    value: siteConfig.contact.phone,
    link: `https://wa.me/91${siteConfig.contact.phone.replace(/\D/g, '')}?text=Hello! I need information about Pinddaan services.`,
    description: 'Message us on WhatsApp for quick responses',
    color: 'text-green-600',
    bgColor: 'from-green-100 to-green-200'
  },
  {
    icon: faEnvelope,
    title: 'Email',
    value: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
    description: 'Send us detailed inquiries via email',
    color: 'text-orange-600',
    bgColor: 'from-orange-100 to-orange-200'
  },
  {
    icon: faMapMarkerAlt,
    title: 'Address',
    value: siteConfig.contact.address,
    link: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`,
    description: 'Visit our location in Gaya Ji',
    color: 'text-red-600',
    bgColor: 'from-red-100 to-red-200'
  }
];

const socialLinks = [
  ...((siteConfig.links as any).facebook ? [{ icon: faFacebook, name: 'Facebook', link: (siteConfig.links as any).facebook, color: 'text-blue-600' }] : []),
  ...((siteConfig.links as any).twitter ? [{ icon: faTwitter, name: 'Twitter', link: (siteConfig.links as any).twitter, color: 'text-sky-600' }] : []),
  ...((siteConfig.links as any).instagram ? [{ icon: faInstagram, name: 'Instagram', link: (siteConfig.links as any).instagram, color: 'text-pink-600' }] : []),
  { icon: faWhatsapp, name: 'WhatsApp', link: `https://wa.me/91${siteConfig.contact.phone.replace(/\D/g, '')}`, color: 'text-green-600' }
];

export default function ContactPage() {
  const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, '');

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <FontAwesomeIcon icon={faOm} className="w-8 h-8" />
              <span className="text-xl font-semibold">Contact Us</span>
              <FontAwesomeIcon icon={faOm} className="w-8 h-8" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in Touch
            </h1>
            
            <p className="text-xl text-orange-100 leading-relaxed">
              Ready to begin your spiritual journey? We&apos;re here to guide you through 
              every step of your sacred pilgrimage in Gaya Ji. Contact us today for 
              personalized assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Multiple Ways to <span className="text-orange-600">Reach Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient method to get in touch with our team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={method.icon} className={`w-8 h-8 ${method.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-gray-700 font-medium mb-2 break-words">
                  {method.value}
                </p>
                
                <p className="text-gray-500 text-sm">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <FontAwesomeIcon icon={faClock} className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                
                <div className="space-y-3">
                  {siteConfig.businessHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-orange-100 text-sm">{hours.day}</span>
                      <span className="font-semibold text-sm">{hours.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              {socialLinks.length > 0 && <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <FontAwesomeIcon icon={social.icon} className={`w-5 h-5 ${social.color}`} />
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 text-sm">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>}

              {/* Quick Actions */}
              <div className="space-y-3">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="block w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                
                <a
                  href={`https://wa.me/91${whatsappNumber}?text=Hello! I need information about Pinddaan services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-orange-500 to-red-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Find Us in Gaya Ji</h3>
                      <p className="text-orange-100">
                        Located in the heart of the holy city
                      </p>
                    </div>
                    
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faDirections} className="w-4 h-4" />
                      <span className="text-sm font-medium">Directions</span>
                    </a>
                  </div>
                </div>
                
                <div className="aspect-video">
                  <iframe
                    src={siteConfig.googleMaps.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Gaya Ji Location Map"
                  />
                </div>
                
                <div className="p-6 bg-gray-50">
                  <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
                      <p className="text-gray-600 text-sm">{siteConfig.contact.address}</p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm"
                      >
                        Open in Maps
                      </a>
                      
                      <a
                        href={`https://maps.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.contact.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-colors text-sm"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="text-6xl mb-6">🚨</div>
            
            <h2 className="text-4xl font-bold mb-6">
              Emergency Spiritual Services
            </h2>
            
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Need urgent spiritual guidance or last-minute ceremony arrangements? 
              We&apos;re available 24/7 for emergency spiritual services and immediate assistance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="font-bold mb-2">24/7 Available</h3>
                <p className="text-red-100 text-sm">Round the clock emergency services</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">🏃‍♂️</div>
                <h3 className="font-bold mb-2">Immediate Response</h3>
                <p className="text-red-100 text-sm">Quick arrangements and guidance</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl mb-3">🕉️</div>
                <h3 className="font-bold mb-2">All Ceremonies</h3>
                <p className="text-red-100 text-sm">Complete spiritual services available</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                <span>Emergency Call</span>
              </a>
              
              <a
                href={`https://wa.me/91${whatsappNumber}?text=EMERGENCY: I need immediate spiritual assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                <span>WhatsApp Emergency</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <FontAwesomeIcon icon={faOm} className="w-12 h-12 text-orange-600 mb-4" />
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Om Shanti Shanti Shanti
              </h3>
              
              <p className="text-gray-600 mb-6">
                May peace be with you on your spiritual journey. We are here to serve 
                and guide you through every sacred moment of your pilgrimage in Gaya Ji.
              </p>
              
              <div className="text-orange-600 font-semibold">
                🙏 Blessed be your sacred journey 🙏
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
