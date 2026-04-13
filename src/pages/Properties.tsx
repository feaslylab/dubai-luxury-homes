import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Bed,
  Bath,
  Maximize,
  Heart,
  Share2,
  Filter,
  ArrowRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

function assetPath(path: string) {
  return `/dubai-luxury-homes/${path.startsWith('/') ? path.slice(1) : path}`;
}

const Properties = () => {
  const { t } = useTranslation();
  const [typeFilter, setTypeFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Villa de Lujo en Palm Jumeirah',
      location: 'Palm Jumeirah',
      price: 'USD 4,200,000',
      priceValue: 15500000,
      type: 'villa',
      bedrooms: 6,
      bathrooms: 7,
      sqft: '8,500',
      image: assetPath('images/WhatsApp-Image-2025-10-06-at-1.22.20-PM.jpeg'),
      featured: true,
      description: t('whatsapp.hc.propVilla1'),
    },
    {
      id: 2,
      title: 'Penthouse Downtown Dubai',
      location: 'Downtown Dubai',
      price: 'USD 3,500,000',
      priceValue: 12800000,
      type: 'apartment',
      bedrooms: 4,
      bathrooms: 5,
      sqft: '4,200',
      image: assetPath('images/The-Palace-Downtown-Dubai-006168-04-hotel-grounds-walkway.jpg'),
      featured: true,
      description: 'Penthouse de lujo con vistas al Burj Khalifa y Dubai Fountain.',
    },
    {
      id: 3,
      title: 'Apartamento Dubai Marina',
      location: 'Dubai Marina',
      price: 'USD 870,000',
      priceValue: 3200000,
      type: 'apartment',
      bedrooms: 2,
      bathrooms: 3,
      sqft: '1,800',
      image: assetPath('images/7-Things-You-Need-to-Know-About-Commercial-Real-Estate-1024x683.jpg'),
      featured: false,
      description: 'Moderno apartamento con vistas al puerto deportivo y el mar.',
    },
    {
      id: 4,
      title: 'Villa Emirates Hills',
      location: 'Emirates Hills',
      price: 'USD 7,600,000',
      priceValue: 28000000,
      type: 'villa',
      bedrooms: 7,
      bathrooms: 9,
      sqft: '12,000',
      image: assetPath('images/1680684458222.png'),
      featured: true,
      description: t('whatsapp.hc.propVilla2'),
    },
    {
      id: 5,
      title: 'Oficina Business Bay',
      location: 'Business Bay',
      price: 'USD 2,300,000',
      priceValue: 8500000,
      type: 'commercial',
      bedrooms: 0,
      bathrooms: 4,
      sqft: '3,500',
      image: assetPath('images/how-to-buy-commercial-realstate.jpeg'),
      featured: false,
      description: t('whatsapp.hc.propCommercial'),
    },
    {
      id: 6,
      title: 'Townhouse Arabian Ranches',
      location: 'Arabian Ranches',
      price: 'USD 1,300,000',
      priceValue: 4800000,
      type: 'townhouse',
      bedrooms: 4,
      bathrooms: 5,
      sqft: '3,200',
      image: assetPath('images/queenstown-property-management-home-1024x683.jpg'),
      featured: false,
      description: 'Elegante townhouse en comunidad familiar premium.',
    },
  ];

  const typeOptions = [
    { value: 'all', label: t('properties.filters.all') },
    { value: 'villa', label: 'Villas' },
    { value: 'apartment', label: 'Apartamentos' },
    { value: 'townhouse', label: 'Townhouses' },
    { value: 'commercial', label: 'Comercial' },
  ];

  const priceOptions = [
    { value: 'all', label: t('properties.filters.all') },
    { value: '0-5', label: t('whatsapp.hc.priceUnder5') },
    { value: '5-15', label: t('whatsapp.hc.price5to15') },
    { value: '15+', label: t('whatsapp.hc.aedValue') },
  ];

  const locationOptions = [
    { value: 'all', label: t('properties.filters.all') },
    { value: 'downtown', label: 'Downtown Dubai' },
    { value: 'marina', label: 'Dubai Marina' },
    { value: 'palm', label: 'Palm Jumeirah' },
    { value: 'business', label: 'Business Bay' },
    { value: 'emirates', label: 'Emirates Hills' },
  ];

  const filteredProperties = properties.filter((p) => {
    const typeMatch = typeFilter === 'all' || p.type === typeFilter;
    const priceMatch =
      priceFilter === 'all' ||
      (priceFilter === '0-5' && p.priceValue < 5000000) ||
      (priceFilter === '5-15' && p.priceValue >= 5000000 && p.priceValue < 15000000) ||
      (priceFilter === '15+' && p.priceValue >= 15000000);
    const locMatch =
      locationFilter === 'all' || p.location.toLowerCase().includes(locationFilter);
    return typeMatch && priceMatch && locMatch;
  });

  const investmentCategories = [
    {
      title: t('whatsapp.hc.catEntry'),
      description: t('whatsapp.hc.catEntryDesc'),
      areas: t('whatsapp.hc.catEntryAreas'),
      price: 'Under USD 250K',
      yield: '7-9%',
      image: assetPath('images/cat-under250k.jpg'),
      tag: 'Under USD 250K',
    },
    {
      title: t('whatsapp.hc.catPremium'),
      description: t('whatsapp.hc.catPremiumDesc'),
      areas: t('whatsapp.hc.catPremiumAreas'),
      price: 'USD 250K \u2014 2M',
      yield: '5-7%',
      image: assetPath('images/cat-under2m.jpg'),
      tag: 'USD 250K \u2014 2M',
    },
    {
      title: t('whatsapp.hc.catLuxury'),
      description: t('whatsapp.hc.catLuxuryDesc'),
      areas: t('whatsapp.hc.catLuxuryAreas'),
      price: 'USD 2M \u2014 6M',
      yield: '4-6%',
      image: assetPath('images/cat-2to6m.jpg'),
      tag: 'USD 2M \u2014 6M',
    },
    {
      title: t('whatsapp.hc.catUltra'),
      description: t('whatsapp.hc.catUltraDesc'),
      areas: t('whatsapp.hc.catUltraAreas'),
      price: 'USD 6M+',
      yield: '3-5%',
      image: assetPath('images/cat-over6m.jpg'),
      tag: 'USD 6M+',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={assetPath('images/The-Palace-Downtown-Dubai-006168-04-hotel-grounds-walkway.jpg')}
            alt="Luxury Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-bold text-gold mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            {t('properties.hero.title')}
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t('properties.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-elevated border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <Filter className="text-gold" size={20} />
              <span className="text-text-primary font-medium">
                {t('whatsapp.hc.filters')}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-card border border-gold/20 text-text-primary px-4 py-2 rounded-lg focus:outline-none focus:border-gold transition-colors"
              >
                {typeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-card">
                    {opt.label}
                  </option>
                ))}
              </select>

              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="bg-card border border-gold/20 text-text-primary px-4 py-2 rounded-lg focus:outline-none focus:border-gold transition-colors"
              >
                {priceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-card">
                    {opt.label}
                  </option>
                ))}
              </select>

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="bg-card border border-gold/20 text-text-primary px-4 py-2 rounded-lg focus:outline-none focus:border-gold transition-colors"
              >
                {locationOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-card">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                className="card-luxury overflow-hidden group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gold text-background px-3 py-1 rounded-full text-sm font-bold z-10">
                    {t('whatsapp.hc.featuredBadge')}
                  </div>
                )}

                <div className="absolute top-4 right-4 flex space-x-2 z-10">
                  <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-background transition-all duration-300">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-background transition-all duration-300">
                    <Share2 size={18} />
                  </button>
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 luxury-image group-hover:scale-110 transition-transform duration-500 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                      {property.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-text-secondary mb-2">
                      <MapPin size={16} className="text-gold" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Bed size={16} className="text-gold" />
                      <span>{property.bedrooms || 'N/A'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath size={16} className="text-gold" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Maximize size={16} className="text-gold" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-serif font-bold text-gold">
                      {property.price}
                    </div>
                    <Link
                      to="/contacto"
                      className="text-gold hover:text-gold-light transition-colors duration-300 inline-flex items-center space-x-1 text-sm font-medium"
                    >
                      <span>{t('whatsapp.hc.viewDetails')}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProperties.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-text-secondary mb-4">
                {t('whatsapp.hc.noProps')}
              </p>
              <p className="text-text-secondary">{t('whatsapp.hc.adjustFilters')}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Investment Categories */}
      <section className="py-16 md:py-24 lg:py-32 bg-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">{t('properties.hero.title')}</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t('properties.hero.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentCategories.map((cat, index) => (
              <motion.div
                key={index}
                className="card-luxury overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-gold text-background px-3 py-1 rounded-full text-xs font-bold">
                    {cat.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-gold px-3 py-1 rounded-lg text-sm font-bold">
                    {cat.yield}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gold mb-3">{cat.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <p className="text-text-secondary/60 text-xs">{cat.areas}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
            {t('properties.cta.title')}
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('properties.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-gold-solid text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>{t('whatsapp.hc.contactNow')}</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/971585821144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-lg px-8 py-4"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Properties;
