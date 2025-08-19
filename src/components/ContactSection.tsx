'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faOm 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { siteConfig } from '@/config/site';

const contactInfo = [
  {
    icon: faPhone,
    title: 'Phone Number',
    value: siteConfig.contact.phone,
    link: `tel:${siteConfig.contact.phone}`,
    color: 'text-blue-600'
  },
  {
    icon: faWhatsapp,
    title: 'WhatsApp',
    value: siteConfig.contact.phone,
    link: `https://wa.me/${siteConfig.contact.whatsapp}?text=Hello! I need information about Pinddaan services.`,
    color: 'text-green-600'
  },
  {
    icon: faEnvelope,
    title: 'Email Address',
    value: siteConfig.contact.email,
    link: `mailto:${siteConfig.contact.email}`,
    color: 'text-orange-600'
  },
  {
    icon: faMapMarkerAlt,
    title: 'Address',
    value: siteConfig.contact.address,
    link: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`,
    color: 'text-red-600'
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Floating Tulsi leaves decoration */}
      <div className="absolute top-20 left-12">
        <motion.div
          animate={{ 
            rotate: [0, -12, 15, 0],
            y: [0, -15, 8, 0]
          }}
          transition={{ 
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/tulsi-leaf.webp"
            alt="Tulsi Leaf"
            width={45}
            height={45}
          />
        </motion.div>
      </div>

      <div className="absolute top-40 right-20">
        <motion.div
          animate={{ 
            rotate: [0, 20, -8, 0],
            x: [0, -12, 6, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Image
            src="/tulsi-leaf.png"
            alt="Tulsi Leaf"
            width={40}
            height={40}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-32 left-1/4">
        <motion.div
          animate={{ 
            rotate: [0, 8, -20, 0],
            y: [0, 10, -5, 0],
            x: [0, 5, -8, 0]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
          }}
        >
          <Image
            src="/tulsi-leaf.webp"
            alt="Tulsi Leaf"
            width={38}
            height={38}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 text-orange-600 mb-4">
            <FontAwesomeIcon icon={faOm} className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">Contact Us</span>
            <FontAwesomeIcon icon={faOm} className="w-5 h-5" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to begin your spiritual journey? Contact us for personalized guidance 
            and to book your sacred ceremonies in Gaya Ji.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <FontAwesomeIcon icon={info.icon} className={`w-5 h-5 ${info.color}`} />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 group-hover:text-orange-600 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-2 mb-4">
                <FontAwesomeIcon icon={faClock} className="w-5 h-5" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              
              <div className="space-y-2">
                {siteConfig.businessHours.map((hours, index) => (
                  <div key={index} className="flex justify-between items-center py-1">
                    <span className="text-orange-100">{hours.day}</span>
                    <span className="font-semibold">{hours.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
                <h3 className="text-2xl font-bold mb-2">Find Us in Gaya Ji</h3>
                <p className="text-orange-100">
                  Located in the heart of the holy city for your convenience
                </p>
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
                    <h4 className="font-semibold text-gray-900 mb-1">Need Directions?</h4>
                    <p className="text-gray-600">We&apos;re located in the main temple area of Gaya Ji</p>
                  </div>
                  
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🆘</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Spiritual Services</h3>
            <p className="text-gray-600 mb-6">
              Need urgent spiritual guidance or last-minute ceremony arrangements? 
              We&apos;re available 24/7 for emergency spiritual services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Emergency Call
              </a>
              
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=EMERGENCY: I need immediate spiritual assistance.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
