'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faOm, 
  faPhone, 
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import { serviceCategories } from '@/config/services';
import { siteConfig } from '@/config/site';

export default function ServicesPage() {
  const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello! I need information about Pinddaan services.`;

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
              <span className="text-xl font-semibold">Sacred Seva</span>
              <FontAwesomeIcon icon={faOm} className="w-8 h-8" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Complete Spiritual Seva in Gaya Ji
            </h1>
            
            <p className="text-xl text-orange-100 leading-relaxed">
              Experience authentic spiritual ceremonies performed with complete devotion 
              and traditional Vedic practices. Our expert pandits ensure every ritual 
              is conducted with utmost sanctity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20 last:mb-0"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-gray-600">
                  {category.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Service Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{service.icon}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mt-4 mb-2">
                        {service.title}
                      </h3>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* What's Included */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <FontAwesomeIcon 
                                icon={faCheckCircle} 
                                className="w-4 h-4 text-green-500 flex-shrink-0" 
                              />
                              <span className="text-gray-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col space-y-3">
                        <a
                          href={`${whatsappLink}&text=I'm interested in ${service.title}. Please provide more information.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
                        >
                          <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                          <span>Get Guidance</span>
                        </a>
                        
                        <a
                          href={`${whatsappLink}&text=I'm interested in ${service.title}. Please provide more information.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                        >
                          <FontAwesomeIcon icon={faWhatsappBrand} className="w-4 h-4" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
              Need Custom Spiritual Guidance?
            </h2>
            
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              We offer personalized spiritual consultations and custom ceremony packages 
              tailored to your specific needs. Our experienced pandits are here to guide 
              you through your spiritual journey.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                <span>Call for Consultation</span>
              </a>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsappBrand} className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Seva?
            </h2>              <div className="space-y-6">
                {[
                  {
                    title: "Authentic Vedic Traditions",
                    description: "All ceremonies are performed according to ancient Vedic scriptures with proper mantras and rituals."
                  },
                  {
                    title: "Experienced Pandits",
                    description: "Our learned pandits have decades of experience in conducting traditional ceremonies."
                  },
                  {
                    title: "Complete Arrangements",
                    description: "We handle all arrangements including materials, location, and ceremonial requirements."
                  },
                  {
                    title: "24/7 Support",
                    description: "Available round the clock for emergency spiritual services and guidance."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white"
            >
              <div className="text-center">
                <div className="text-5xl mb-6">📞</div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Ready for Your Seva?
                </h3>
                
                <p className="text-orange-100 mb-8">
                  Contact us today to discuss your spiritual needs and arrange 
                  your preferred ceremony. We&apos;re here to guide you every step of the way.
                </p>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{siteConfig.contact.phone}</div>
                    <div className="text-orange-200">Available 24/7</div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex-1 px-4 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
