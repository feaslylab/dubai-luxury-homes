import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Award, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Investment categories with proper descriptions
  const investmentCategories = [
    {
      title: t('residential'),
      description: t('residentialDesc'),
      icon: '🏠',
      properties: '150+ Properties',
      avgROI: '8-12% ROI',
    },
    {
      title: t('commercial'),
      description: t('commercialDesc'),
      icon: '🏢',
      properties: '50+ Properties',
      avgROI: '10-15% ROI',
    },
    {
      title: t('offPlan'),
      description: t('offPlanDesc'),
      icon: '🏗️',
      properties: '75+ Projects',
      avgROI: '15-25% ROI',
    },
    {
      title: t('holidayHomes'),
      description: t('holidayHomesDesc'),
      icon: '🏖️',
      properties: '25+ Properties',
      avgROI: '12-18% ROI',
    },
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: MapPin, label: 'Properties Sold', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: TrendingUp, label: 'Average ROI', value: '12%' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background with reduced opacity */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/dubai-luxury-homes/videos/dubai-skyline.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            {t('heroTitle')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-4"
          >
            {t('heroSubtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            {t('heroDescription')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/properties" className="btn-gold-solid">
              {t('exploreProperties')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn-gold"
            >
              {t('getInTouch')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-3xl font-serif font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Categories Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">{t('investmentTitle')}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover premium investment opportunities across Dubai's most prestigious locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury p-6 text-center group"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-serif font-bold text-gold mb-3">
                  {category.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="text-sm text-text-secondary">
                    {category.properties}
                  </div>
                  <div className="text-sm font-semibold text-gold">
                    {category.avgROI}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="btn-gold-solid"
            >
              {t('schedule')}
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                {t('aboutDescription')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-text-secondary">Premium Business Bay Location</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-text-secondary">10+ Years Dubai Market Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-text-secondary">Comprehensive Golden Visa Support</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-gold">
                  {t('learnMore')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/dubai-luxury-homes/images/business-bay-luxury.jpg"
                alt="Dubai Business Bay Luxury Properties"
                className="luxury-image w-full h-[500px] rounded-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Golden Visa CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
              {t('goldenVisaTitle')}
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              {t('goldenVisaDescription')}
            </p>
            <Link to="/golden-visa" className="btn-gold-solid">
              Learn About Golden Visa
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
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

export default Home;