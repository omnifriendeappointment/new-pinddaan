'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOm, faHandHoldingHeart, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';

const stats = [
  {
    icon: faUsers,
    number: '500000+',
    label: 'Families Served',
    description: 'Happy devotees'
  },
  {
    icon: faClock,
    number: '150+',
    label: 'Years Experience',
    description: 'Trusted service'
  },
  {
    icon: faHandHoldingHeart,
    number: '50+',
    label: 'Sacred Rituals',
    description: 'Traditional ceremonies'
  },
  {
    icon: faOm,
    number: '24/7',
    label: 'Spiritual Guidance',
    description: 'Always available'
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Floating Tulsi leaves decoration */}
      <div className="absolute top-10 left-10">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
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
      
      <div className="absolute top-32 right-16">
        <motion.div
          animate={{ 
            rotate: [0, -15, 15, 0],
            y: [0, 15, 0]
          }}
          transition={{ 
            duration: 8,
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

      <div className="absolute bottom-20 left-20">
        <motion.div
          animate={{ 
            rotate: [0, 20, -5, 0],
            x: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Image
            src="/tulsi-leaf.webp"
            alt="Tulsi Leaf"
            width={30}
            height={30}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="flex items-center space-x-2 text-orange-600 mb-4">
                <FontAwesomeIcon icon={faOm} className="w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider uppercase">About Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Preserving Sacred <span className="text-orange-600">Traditions</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  For over 150 years, we have been dedicated to preserving and conducting authentic 
                  spiritual ceremonies in the holy city of Gaya Ji. Our experienced team of learned 
                  pandits ensures that every ritual is performed with complete devotion and 
                  according to ancient Vedic traditions.
                </p>
                
                <p>
                  We understand the deep spiritual significance of Pinddaan and other sacred 
                  ceremonies. Our mission is to provide you with a peaceful and spiritually 
                  enriching experience, helping you connect with your ancestors and seek 
                  their eternal blessings.
                </p>
                
                <p>
                  From traditional Pinddaan to various other religious ceremonies, we handle 
                  every aspect with utmost care and respect, ensuring that your spiritual 
                  journey is both meaningful and memorable.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Our Seva
              </button>
              <button className="px-6 py-3 border-2 border-orange-500 text-orange-600 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    className="w-8 h-8 text-orange-600" 
                  />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </h3>
                
                <p className="text-lg font-semibold text-orange-600 mb-1">
                  {stat.label}
                </p>
                
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center justify-center space-x-4 text-6xl text-orange-200">
            <span>🕉️</span>
            <span>🪷</span>
            <span>🔱</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
