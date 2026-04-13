import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const logoSrc = '/dubai-luxury-homes/images/logo-full.png';

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/sobre-nosotros', label: t('nav.about') },
    { path: '/propiedades', label: t('nav.properties') },
    { path: '/golden-visa', label: t('nav.goldenVisa') },
  ];

  const services = [
    t('services.list.residentialSales.title'),
    t('services.list.commercialSales.title'),
    t('services.list.offPlan.title'),
    t('services.list.advisory.title'),
  ];

  return (
    <footer className="bg-elevated border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src={logoSrc}
                alt="Puerta del Sol Real Estate"
                className="h-10 w-auto"
              />
              <span className="text-gold font-serif text-xl font-bold">
                {t('footer.company')}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-text-secondary">
                <Phone size={16} className="text-gold" />
                <span className="text-sm">+971 58 582 1144</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <Mail size={16} className="text-gold" />
                <span className="text-sm">info@dubailuxuryhomes.net</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary">
                <MapPin size={16} className="text-gold" />
                <span className="text-sm">Business Bay, Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold">
              {t('footer.quickLinks')}
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-text-secondary hover:text-gold transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold">
              {t('footer.services')}
            </h4>
            <div className="space-y-3">
              {services.slice(0, 4).map((service, index) => (
                <div key={index} className="text-text-secondary text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us + Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gold">
              {t('footer.followUs')}
            </h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1EPNQP5KMc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-gold/20 rounded-lg flex items-center justify-center hover:bg-gold hover:text-background transition-all duration-300"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/puertadelsolrealestate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-gold/20 rounded-lg flex items-center justify-center hover:bg-gold hover:text-background transition-all duration-300"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/971585821144"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card border border-gold/20 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <Link to="/contacto" className="btn-gold block text-center">
              {t('nav.contactUs')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 bg-background">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-secondary text-sm">
              &copy; 2026 Puerta del Sol Real Estate. {t('footer.rights')}.
            </div>
            <div className="text-text-secondary text-sm">
              {t('footer.poweredBy')}{' '}
              <span className="text-gold">Puerta Del Sol Real Estate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
