'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOm } from '@fortawesome/free-solid-svg-icons';

export default function SacredQuoteSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Floating Tulsi leaves decoration */}
      <div className="absolute top-16 left-12">
        <motion.div
          animate={{ 
            rotate: [0, -10, 12, 0],
            y: [0, -8, 6, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/tulsi-leaf.webp"
            alt="Tulsi Leaf"
            width={42}
            height={42}
          />
        </motion.div>
      </div>

      <div className="absolute top-32 right-16">
        <motion.div
          animate={{ 
            rotate: [0, 15, -8, 0],
            x: [0, -6, 10, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        >
          <Image
            src="/tulsi-leaf.png"
            alt="Tulsi Leaf"
            width={38}
            height={38}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-1/4">
        <motion.div
          animate={{ 
            rotate: [0, 8, -18, 0],
            y: [0, 12, -4, 0]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        >
          <Image
            src="/tulsi-leaf.webp"
            alt="Tulsi Leaf"
            width={35}
            height={35}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Om Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <FontAwesomeIcon 
              icon={faOm} 
              className="w-16 h-16 text-orange-600 mx-auto animate-pulse"
            />
          </motion.div>

          {/* Sacred Mantra */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6 leading-relaxed">
              ॐ नमो भगवते वासुदेवाय नमः
            </h2>
            
            <div className="mb-8">
              <p className="text-2xl font-semibold text-orange-700 italic">
                "हे वासुदेव भगवान, मैं आपको नमन करता हूँ।"
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">मंत्र का अर्थ</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-left">
                    <span className="text-2xl font-bold text-orange-600">ॐ</span>
                    <div>
                      <span className="font-semibold text-gray-800">(Om):</span>
                      <span className="text-gray-700"> ब्रह्मांडीय ध्वनि, सर्वोच्च सत्य का प्रतीक।</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 text-left">
                    <span className="text-xl font-bold text-orange-600">नमो</span>
                    <div>
                      <span className="font-semibold text-gray-800">(Namo):</span>
                      <span className="text-gray-700"> नमस्कार, प्रणाम।</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 text-left">
                    <span className="text-xl font-bold text-orange-600">भगवते</span>
                    <div>
                      <span className="font-semibold text-gray-800">(Bhagavate):</span>
                      <span className="text-gray-700"> भगवान, परमात्मा।</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-left">
                    <span className="text-xl font-bold text-orange-600">वासुदेवाय</span>
                    <div>
                      <span className="font-semibold text-gray-800">(Vasudevaya):</span>
                      <span className="text-gray-700"> भगवान वासुदेव (विष्णु या कृष्ण)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 text-left">
                    <span className="text-xl font-bold text-orange-600">नमः</span>
                    <div>
                      <span className="font-semibold text-gray-800">(Namah):</span>
                      <span className="text-gray-700"> विनम्रता से समर्पण।</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-8 text-4xl text-orange-400"
          >
            <span>🕉️</span>
            <span>🪷</span>
            <span>🔱</span>
            <span>🪷</span>
            <span>🕉️</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
