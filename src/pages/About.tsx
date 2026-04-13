import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Globe, Shield, Settings, Star, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function assetPath(path: string) {
  return `/dubai-luxury-homes/${path.startsWith('/') ? path.slice(1) : path}`;
}

const About = () => {
  const { t } = useTranslation();

  const whyUsItems = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t('about.whyUs.experience.title'),
      description: t('about.whyUs.experience.description'),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('about.whyUs.trust.title'),
      description: t('about.whyUs.trust.description'),
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: t('about.whyUs.service.title'),
      description: t('about.whyUs.service.description'),
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('about.whyUs.spanish.title'),
      description: t('about.whyUs.spanish.description'),
    },
  ];

  const stats = [
    { icon: <Globe className="w-6 h-6" />, value: '3', label: t('whatsapp.hc.aboutStat1') },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: t('whatsapp.hc.aboutStat2') },
    { icon: <Star className="w-6 h-6" />, value: '98%', label: t('whatsapp.hc.aboutStat3') },
    { icon: <ArrowRight className="w-6 h-6" />, value: '48h', label: t('whatsapp.hc.aboutStat4') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={assetPath('images/about-mission.jpg')}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-bold text-gold mb-6 font-serif font-bold mb-6 text-gold"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            {t('about.hero.title')}
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section — Image left, text right */}
      <section className="py-24 bg-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={assetPath('images/about-mission.jpg')}
                alt="Our Mission"
                className="w-full h-[500px] object-cover rounded-xl"
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '-16px',
                  width: '120px',
                  height: '120px',
                  background: 'rgba(196,162,101,0.15)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(196,162,101,0.3)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#c4a265',
                    fontFamily: 'Cormorant Garamond,serif',
                  }}
                >
                  12+
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {t('whatsapp.hc.yearsExcellence')}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading !text-left">{t('about.mission.title')}</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {t('about.mission.content')}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {t('whatsapp.hc.aboutLong')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">{t('about.whyUs.title')}</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {whyUsItems.map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card border border-gold/20 rounded-full text-gold mb-6 group-hover:bg-gold group-hover:text-background transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gold mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-full text-gold mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 lg:py-32 bg-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">{t('whatsapp.hc.ourValues')}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('whatsapp.hc.aboutLong')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* International Experience */}
            <motion.div
              style={{
                background: 'rgba(196,162,101,0.05)',
                border: '1px solid rgba(196,162,101,0.2)',
                borderRadius: '16px',
                padding: '48px 32px',
                textAlign: 'center',
              }}
              whileHover={{ y: -8, borderColor: 'rgba(196,162,101,0.5)' }}
              transition={{ duration: 0.3 }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(196,162,101,0.2), rgba(196,162,101,0.05))',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Star className="w-10 h-10 text-gold" />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Cormorant Garamond,serif',
                  fontWeight: 700,
                  color: '#c4a265',
                  marginBottom: '16px',
                }}
              >
                {t('whatsapp.hc.valExperience')}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {t('whatsapp.hc.valExperienceDesc')}
              </p>
            </motion.div>

            {/* Personalised Service */}
            <motion.div
              style={{
                background: 'rgba(196,162,101,0.05)',
                border: '1px solid rgba(196,162,101,0.2)',
                borderRadius: '16px',
                padding: '48px 32px',
                textAlign: 'center',
              }}
              whileHover={{ y: -8, borderColor: 'rgba(196,162,101,0.5)' }}
              transition={{ duration: 0.3 }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(196,162,101,0.2), rgba(196,162,101,0.05))',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Globe className="w-10 h-10 text-gold" />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Cormorant Garamond,serif',
                  fontWeight: 700,
                  color: '#c4a265',
                  marginBottom: '16px',
                }}
              >
                {t('whatsapp.hc.valService')}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {t('whatsapp.hc.valServiceDesc')}
              </p>
            </motion.div>

            {/* Total Transparency */}
            <motion.div
              style={{
                background: 'rgba(196,162,101,0.05)',
                border: '1px solid rgba(196,162,101,0.2)',
                borderRadius: '16px',
                padding: '48px 32px',
                textAlign: 'center',
              }}
              whileHover={{ y: -8, borderColor: 'rgba(196,162,101,0.5)' }}
              transition={{ duration: 0.3 }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, rgba(196,162,101,0.2), rgba(196,162,101,0.05))',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Shield className="w-10 h-10 text-gold" />
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'Cormorant Garamond,serif',
                  fontWeight: 700,
                  color: '#c4a265',
                  marginBottom: '16px',
                }}
              >
                {t('whatsapp.hc.valTrust')}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {t('whatsapp.hc.valTrustDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
            {t('whatsapp.hc.readyInvest')}
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('whatsapp.hc.readyInvestDesc')}
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

export default About;
