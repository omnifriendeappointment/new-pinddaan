'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faOm, faPrayingHands } from '@fortawesome/free-solid-svg-icons';

const slides = [
  {
    id: 1,
    title: "Sacred Pinddaan at Vishnupad Temple",
    subtitle: "Most holy pilgrimage site in Gaya Ji",
    description: "Experience authentic Pinddaan ceremonies at the sacred Vishnupad Temple, where Lord Vishnu's footprints are preserved for eternal blessings.",
    image: "/homepage/slider/vishnupad-temple.webp",
    cta: "Book Pinddaan",
    altText: "Sacred Vishnupad Temple in Gaya Ji"
  },
  {
    id: 2,
    title: "Expert Spiritual Guidance",
    subtitle: "With experienced Pandit Vishal Sijuar",
    description: "Get complete guidance and authentic rituals performed by our experienced pandit who has dedicated his life to serving devotees with traditional Vedic practices.",
    image: "/homepage/slider/vishalSijuar.webp",
    cta: "Meet Our Pandit",
    altText: "Pandit Vishal Sijuar - Spiritual Guide"
  },
  {
    id: 3,
    title: "Complete Ritual Services",
    subtitle: "Traditional ceremonies with devotion",
    description: "From Pinddaan to Asthi Visarjan, we provide complete spiritual services following ancient traditions with proper mantras and complete dedication.",
    image: "/homepage/slider/vishnupad.jpeg",
    cta: "View Services",
    altText: "Sacred rituals at Vishnupad Temple"
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-orange-800">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Pattern with Tulsi leaves */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl text-white">🕉️</div>
            <div className="absolute top-32 right-20 text-4xl text-white">🪷</div>
            <div className="absolute bottom-20 left-20 text-5xl text-white">🔱</div>
            <div className="absolute bottom-32 right-32 text-3xl text-white">🕉️</div>
          </div>

          {/* Floating Tulsi leaves for Hero Section */}
          <div className="absolute top-20 right-32">
            <motion.div
              animate={{ 
                rotate: [0, 15, -10, 0],
                y: [0, -20, 10, 0]
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
                width={50}
                height={50}
              />
            </motion.div>
          </div>

          <div className="absolute bottom-40 left-16">
            <motion.div
              animate={{ 
                rotate: [0, -20, 25, 0],
                x: [0, 10, -5, 0]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            >
              <Image
                src="/tulsi-leaf.png"
                alt="Tulsi Leaf"
                width={45}
                height={45}
              />
            </motion.div>
          </div>

                    <div className="absolute top-1/2 right-10">
            <motion.div
              animate={{ 
                rotate: [0, 10, -15, 0],
                y: [0, 15, -8, 0],
                x: [0, -5, 8, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6
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

          <div className="container mx-auto px-4 h-full min-h-screen">
            {/* Mobile Layout - Image on top, content below */}
            <div className="lg:hidden flex flex-col min-h-screen">
              {/* Mobile Image */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative h-64 sm:h-80 mt-20 mb-8 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].altText}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>

              {/* Mobile Content */}
              <div className="flex-1 flex items-center justify-center pb-20">
                <div className="text-center max-w-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-center space-x-2 text-orange-300 mb-4">
                      <FontAwesomeIcon icon={faOm} className="w-5 h-5" />
                      <span className="text-sm font-medium tracking-wider uppercase">Sacred Services</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                      {slides[currentSlide].title}
                    </h1>
                    
                    <h2 className="text-lg sm:text-xl text-orange-200 mb-4 font-medium">
                      {slides[currentSlide].subtitle}
                    </h2>
                    
                    <p className="text-base text-gray-100 mb-6 leading-relaxed">
                      {slides[currentSlide].description}
                    </p>
                    
                    <div className="flex flex-col space-y-3">
                      <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                        <FontAwesomeIcon icon={faPrayingHands} className="w-4 h-4 mr-2" />
                        {slides[currentSlide].cta}
                      </button>
                      
                      <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                        View All Seva
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Content on left, Image on right */}
            <div className="hidden lg:flex items-center min-h-screen py-20">
              {/* Desktop Content */}
              <div className="w-1/2 pr-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="flex items-center space-x-2 text-orange-300 mb-6">
                    <FontAwesomeIcon icon={faOm} className="w-6 h-6" />
                    <span className="text-sm font-medium tracking-wider uppercase">Sacred Services</span>
                  </div>
                  
                  <h1 className="text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  
                  <h2 className="text-xl xl:text-2xl text-orange-200 mb-6 font-medium">
                    {slides[currentSlide].subtitle}
                  </h2>
                  
                  <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      <FontAwesomeIcon icon={faPrayingHands} className="w-4 h-4 mr-2" />
                      {slides[currentSlide].cta}
                    </button>
                    
                    <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                      View All Seva
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Desktop Image */}
              <div className="w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].altText}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Image overlay content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {slides[currentSlide].altText}
                      </h3>
                      <p className="text-orange-200 text-sm">
                        Sacred place of devotion and spiritual awakening
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
      >
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          key={currentSlide}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-gradient-to-r from-orange-400 to-red-500"
        />
      </div>
    </section>
  );
}
