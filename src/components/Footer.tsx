import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { href: 'https://instagram.com/dubai__luxuryhomes', label: 'Instagram' },
    { href: 'https://facebook.com/share/1EPNQP5KMc/', label: 'Facebook' },
  ];

  const quickLinks = [
    { path: '/about', label: t('about') },
    { path: '/properties', label: t('properties') },
    { path: '/services', label: t('services') },
    { path: '/golden-visa', label: t('goldenVisa') },
  ];

  const services = [
    t('propertyConsultation'),
    t('investmentAnalysis'),
    t('propertyManagement'),
    t('legalSupport'),
  ];

  return (
    <footer className="bg-card border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg">DLH</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-gold">
                  Puerta del Sol Real Estate
                </h3>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-elevated rounded-lg flex items-center justify-center text-text-secondary hover:text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-gold mb-6">
              {t('servicesTitle')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-text-secondary">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-gold mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <p className="text-text-secondary">
                  {t('footerLocation')}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+971545535505"
                  className="text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  {t('footerPhone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@dubailuxuryhomes.com"
                  className="text-text-secondary hover:text-gold transition-colors duration-300"
                >
                  {t('footerEmail')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2024 Puerta del Sol Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-text-secondary hover:text-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-text-secondary hover:text-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
