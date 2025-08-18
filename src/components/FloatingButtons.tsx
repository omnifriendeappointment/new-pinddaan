'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

export default function FloatingButtons() {
  const whatsappNumber = siteConfig.contact.phone.replace(/\D/g, ''); // Remove non-digits
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hello! I need information about Pinddaan services.`;
  const phoneLink = `tel:${siteConfig.contact.phone}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <FontAwesomeIcon 
          icon={faWhatsappBrand} 
          className="w-7 h-7 text-white group-hover:scale-110 transition-transform" 
        />
        
        {/* Tooltip */}
        <div className="absolute right-16 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-black rotate-45 transform -translate-y-1/2"></div>
        </div>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={phoneLink}
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <FontAwesomeIcon 
          icon={faPhone} 
          className="w-6 h-6 text-white group-hover:scale-110 transition-transform" 
        />
        
        {/* Tooltip */}
        <div className="absolute right-16 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-black rotate-45 transform -translate-y-1/2"></div>
        </div>
      </motion.a>

      {/* Pulse Animation for WhatsApp */}
      <motion.div
        className="absolute top-0 w-14 h-14 bg-green-500 rounded-full opacity-20 pointer-events-none"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
