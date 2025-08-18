'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faOm, 
  faMapMarkerAlt,
  faInfo,
  faEye,
  faStar,
  faWater,
  faPrayingHands
} from '@fortawesome/free-solid-svg-icons';
import { pindvedisData } from '@/config/pindvedis';

const sectionIcons = {
  importantVedis: faStar,
  pindVedis: faPrayingHands,
  tarpanVedis: faWater,
  darsanVedis: faEye
};

const sectionColors = {
  importantVedis: 'from-orange-500 to-red-600',
  pindVedis: 'from-red-500 to-pink-600',
  tarpanVedis: 'from-blue-500 to-cyan-600',
  darsanVedis: 'from-purple-500 to-indigo-600'
};

const sectionTitles = {
  importantVedis: 'Important Vedis',
  pindVedis: 'Pind Vedis',
  tarpanVedis: 'Tarpan Vedis',
  darsanVedis: 'Darsan Vedis'
};

const sectionDescriptions = {
  importantVedis: 'Most sacred and significant places in Gaya for spiritual rituals',
  pindVedis: 'Sacred locations specifically for Pinddaan ceremonies',
  tarpanVedis: 'Holy water bodies for Tarpan and ancestral offerings',
  darsanVedis: 'Divine darshan spots for spiritual blessings'
};

export default function PindvedisPage() {
  const sections = [
    { key: 'importantVedis', data: pindvedisData.importantVedis },
    { key: 'pindVedis', data: pindvedisData.pindVedis },
    { key: 'tarpanVedis', data: pindvedisData.tarpanVedis },
    { key: 'darsanVedis', data: pindvedisData.darsanVedis }
  ];

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
              <span className="text-xl font-semibold">Sacred Places</span>
              <FontAwesomeIcon icon={faOm} className="w-8 h-8" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Holy Pind Vedis of Gaya
            </h1>
            
            <p className="text-xl text-orange-100 leading-relaxed">
              Discover the sacred locations where spiritual ceremonies have been 
              performed for thousands of years. Each vedi holds unique significance 
              in the ancient tradition of ancestor worship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vedis Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.key}
              id={section.key === 'importantVedis' ? 'important-vedis' : 
                  section.key === 'pindVedis' ? 'pind-vedis' : 
                  section.key === 'tarpanVedis' ? 'tarpan-vedis' : 
                  section.key === 'darsanVedis' ? 'darshan-vedis' : section.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-20 last:mb-0 scroll-mt-24"
            >
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${sectionColors[section.key as keyof typeof sectionColors]} text-white rounded-full mb-6`}>
                  <FontAwesomeIcon 
                    icon={sectionIcons[section.key as keyof typeof sectionIcons]} 
                    className="w-6 h-6" 
                  />
                  <span className="text-xl font-bold">
                    {sectionTitles[section.key as keyof typeof sectionTitles]}
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {sectionTitles[section.key as keyof typeof sectionTitles]}
                </h2>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {sectionDescriptions[section.key as keyof typeof sectionDescriptions]}
                </p>
              </div>

              {/* Vedis Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.data.map((vedi, vediIndex) => (
                  <motion.div
                    key={vedi.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: vediIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                  >
                    {/* Vedi Header */}
                    <div className={`bg-gradient-to-r ${sectionColors[section.key as keyof typeof sectionColors]} p-6 text-white relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 opacity-10">
                        <div className="text-6xl">🕉️</div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon 
                              icon={sectionIcons[section.key as keyof typeof sectionIcons]} 
                              className="w-6 h-6" 
                            />
                          </div>
                          <div className="text-right flex-1">
                            <div className="text-sm opacity-80">Sacred Place</div>
                            <div className="font-bold">#{vedi.id}</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold leading-tight">
                          {vedi.name}
                        </h3>
                      </div>
                    </div>

                    {/* Vedi Content */}
                    <div className="p-6">
                      {/* Importance */}
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 text-orange-600 mb-2">
                          <FontAwesomeIcon icon={faInfo} className="w-4 h-4" />
                          <span className="font-semibold text-sm">Significance</span>
                        </div>
                        <p className="text-gray-800 font-medium">
                          {vedi.importance}
                        </p>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 text-gray-500 mb-2">
                          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                          <span className="font-semibold text-sm">Description</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {vedi.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Section Divider */}
              {sectionIndex < sections.length - 1 && (
                <div className="mt-16 text-center">
                  <div className="inline-flex items-center space-x-4 text-4xl text-orange-200">
                    <span>🕉️</span>
                    <span>🪷</span>
                    <span>🔱</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🙏</div>
            
            <h2 className="text-4xl font-bold mb-6">
              Plan Your Sacred Journey
            </h2>
            
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Let us guide you through the sacred vedis of Gaya with our experienced 
              pandits. We arrange complete tours covering all important spiritual 
              locations according to traditional practices.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-bold mb-2">All Vedis Covered</h3>
                <p className="text-orange-100 text-sm">Complete tour of all sacred locations</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">👨‍🏫</div>
                <h3 className="font-bold mb-2">Expert Guidance</h3>
                <p className="text-orange-100 text-sm">Experienced pandits accompany you</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-bold mb-2">Transportation</h3>
                <p className="text-orange-100 text-sm">Comfortable vehicle arrangements</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                Book Vedi Tour
              </button>
              
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                Get More Info
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traditional Blessing */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-5xl mb-4">🕉️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामया:
              </h3>
              <p className="text-gray-600 italic mb-2">
                &quot;May all beings be happy, may all beings be healthy&quot;
              </p>
              <p className="text-sm text-orange-600 font-semibold">
                - Traditional Sanskrit Blessing
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
