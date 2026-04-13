import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Bed, Bath, Square } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactModal from '../components/ContactModal';

const Properties = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const propertyTypes = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: t('residential') },
    { id: 'commercial', label: t('commercial') },
    { id: 'off-plan', label: t('offPlan') },
    { id: 'holiday', label: t('holidayHomes') },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-gold mb-6"
          >
            {t('properties')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Discover exceptional investment opportunities in Dubai's most prestigious locations
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full pl-12 pr-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {propertyTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveFilter(type.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === type.id
                      ? 'bg-gold text-background'
                      : 'bg-card text-text-secondary hover:text-gold border border-white/10'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-12 h-12 text-gold" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
                Exclusive Properties Coming Soon
              </h2>
              
              <p className="text-text-secondary mb-8 leading-relaxed">
                We are currently curating an exceptional portfolio of luxury properties in Business Bay, Downtown Dubai, 
                and other prime locations. Our team is working exclusively with top developers and property owners to 
                bring you the finest investment opportunities in the Dubai real estate market.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-card border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-2xl font-serif font-bold text-gold mb-2">50+</div>
                  <div className="text-text-secondary">Properties in Pipeline</div>
                </div>
                <div className="bg-card border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-2xl font-serif font-bold text-gold mb-2">5+</div>
                  <div className="text-text-secondary">Prime Locations</div>
                </div>
                <div className="bg-card border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-2xl font-serif font-bold text-gold mb-2">Q2 2024</div>
                  <div className="text-text-secondary">Launch Timeline</div>
                </div>
              </div>

              <p className="text-lg text-text-secondary mb-8">
                Get early access to our exclusive property listings and investment opportunities
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn-gold-solid"
                >
                  Get Early Access
                </button>
                <a
                  href="tel:+971545535505"
                  className="btn-gold"
                >
                  Call for Details
                </a>
              </div>
            </div>
          </motion.div>

          {/* Property Categories Preview */}
          <div className="border-t border-white/10 pt-16">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gold text-center mb-12">
              What We're Preparing For You
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Luxury Apartments',
                  location: 'Business Bay',
                  description: 'Premium 1-3 bedroom apartments with stunning views',
                  features: ['1-3 Bedrooms', 'Premium Finishes', 'Burj Khalifa Views'],
                  image: '/dubai-luxury-homes/images/business-bay-apartment.jpg'
                },
                {
                  title: 'Commercial Offices',
                  location: 'DIFC',
                  description: 'High-yield office spaces in Dubai\'s financial district',
                  features: ['Premium Locations', 'High ROI', 'Modern Facilities'],
                  image: '/dubai-luxury-homes/images/difc-office.jpg'
                },
                {
                  title: 'Off-Plan Projects',
                  location: 'Dubai Marina',
                  description: 'Exclusive pre-construction investment opportunities',
                  features: ['Payment Plans', 'Early Bird Pricing', 'Developer Direct'],
                  image: '/dubai-luxury-homes/images/marina-development.jpg'
                },
                {
                  title: 'Holiday Rentals',
                  location: 'Palm Jumeirah',
                  description: 'Luxury vacation homes with exceptional rental yields',
                  features: ['Tourist Hot Spots', 'High Occupancy', 'Luxury Amenities'],
                  image: '/dubai-luxury-homes/images/palm-villa.jpg'
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-white/10 rounded-xl overflow-hidden group hover:border-gold/30 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏗️</div>
                      <div className="text-gold font-medium">Coming Soon</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-serif font-bold text-gold">
                        {category.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center text-sm text-text-secondary mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {category.location}
                    </div>
                    
                    <p className="text-text-secondary text-sm mb-4">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-text-secondary">
                          <div className="w-1 h-1 bg-gold rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Properties;