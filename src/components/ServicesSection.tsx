'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { services } from '@/config/services';
import Link from 'next/link';

export default function ServicesSection() {
  const featuredServices = services.slice(0, 6); // Show first 6 services

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Floating Tulsi leaves decoration */}
      <div className="absolute top-16 right-24">
        <motion.div
          animate={{ 
            rotate: [0, 12, -8, 0],
            scale: [1, 1.1, 0.9, 1]
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
            width={42}
            height={42}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-24 left-32">
        <motion.div
          animate={{ 
            rotate: [0, -18, 22, 0],
            y: [0, -8, 12, 0]
          }}
          transition={{ 
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
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

      <div className="absolute top-1/3 left-16">
        <motion.div
          animate={{ 
            rotate: [0, 15, -12, 0],
            x: [0, 8, -5, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
            <span>🕉️</span>
            <span className="text-sm font-semibold tracking-wider uppercase">Our Seva</span>
            <span>🕉️</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sacred <span className="text-orange-600">Spiritual Seva</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience authentic spiritual ceremonies performed with complete devotion 
            and traditional Vedic practices in the holy city of Gaya Ji.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Service Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.includes.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">                
                <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold group-hover:translate-x-1 transition-all duration-300">
                  <span>Learn More</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Spiritual Seva?
            </h3>
            
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              We offer personalized spiritual guidance and custom ceremony packages 
              tailored to your specific spiritual needs and requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/services"
                className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
              >
                View All Seva
              </Link>
              
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
