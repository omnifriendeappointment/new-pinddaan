'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faOm, faPrayingHands } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    id: 1,
    title: "Sacred Pinddaan Services",
    subtitle: "Complete spiritual rituals for your ancestors",
    description: "Experience authentic Pinddaan ceremonies in the holy city of Gaya with complete devotion and traditional practices.",
    image: "/images/slider-1.jpg", // Placeholder
    cta: "Book Service"
  },
  {
    id: 2,
    title: "Traditional Gaya Rituals",
    subtitle: "Preserving ancient spiritual traditions",
    description: "Our experienced pandits perform all traditional ceremonies with proper Vedic mantras and complete dedication.",
    image: "/images/slider-2.jpg", // Placeholder
    cta: "Learn More"
  },
  {
    id: 3,
    title: "Complete Spiritual Guidance",
    subtitle: "Your spiritual journey starts here",
    description: "Get complete guidance on all religious ceremonies, rituals, and spiritual practices from our experienced team.",
    image: "/images/slider-3.jpg", // Placeholder
    cta: "Contact Us"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-orange-900 to-red-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-red-900/80"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl text-white">🕉️</div>
            <div className="absolute top-32 right-20 text-4xl text-white">🪷</div>
            <div className="absolute bottom-20 left-20 text-5xl text-white">🔱</div>
            <div className="absolute bottom-32 right-32 text-3xl text-white">🕉️</div>
          </div>

          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-2 text-orange-300 mb-4">
                  <FontAwesomeIcon icon={faOm} className="w-6 h-6" />
                  <span className="text-sm font-medium tracking-wider uppercase">Sacred Services</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <h2 className="text-xl md:text-2xl text-orange-200 mb-6 font-medium">
                  {slides[currentSlide].subtitle}
                </h2>
                
                <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <FontAwesomeIcon icon={faPrayingHands} className="w-4 h-4 mr-2" />
                  {slides[currentSlide].cta}
                </button>
                
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                  View Seva
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
