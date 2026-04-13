import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const logoSrc = '/dubai-luxury-homes/images/logo-full.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/sobre-nosotros', label: t('nav.about') },
    { path: '/servicios', label: t('nav.services') },
    { path: '/propiedades', label: t('nav.properties') },
    { path: '/golden-visa', label: t('nav.goldenVisa') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contacto', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoSrc}
              alt="Puerta del Sol Real Estate"
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-gold font-serif text-xl md:text-2xl font-bold">
              Puerta del Sol Real Estate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  location.pathname === item.path
                    ? 'text-gold'
                    : 'text-text-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Language Toggle + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-text-secondary hover:text-gold transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">
                {i18n.language === 'es' ? 'EN' : 'ES'}
              </span>
            </button>
            <Link to="/contacto" className="btn-gold-solid">
              {t('nav.contactUs')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-gold/20"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-lg font-medium transition-colors duration-300 hover:text-gold ${
                    location.pathname === item.path
                      ? 'text-gold'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gold/20">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-text-secondary hover:text-gold transition-colors"
                >
                  <Globe size={18} />
                  <span className="font-medium">
                    {i18n.language === 'es' ? 'English' : 'Español'}
                  </span>
                </button>
                <Link
                  to="/contacto"
                  className="btn-gold-solid"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.contactUs')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
