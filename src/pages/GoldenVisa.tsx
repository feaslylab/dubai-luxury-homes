import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Clock,
  Users,
  Shield,
  Globe,
  Heart,
  CheckCircle,
  Home,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* ------------------------------------------------------------------ */
/*  Base path helper                                                   */
/* ------------------------------------------------------------------ */
const BASE = '/dubai-luxury-homes';
const img = (name: string) => `${BASE}/images/${name}`;

/* ------------------------------------------------------------------ */
/*  Golden Visa Page                                                   */
/* ------------------------------------------------------------------ */
const GoldenVisa = () => {
  const { t } = useTranslation();

  /* ---------- Investment Routes ---------- */
  const investmentRoutes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t('whatsapp.hc.realEstateProp'),
      amount: t('whatsapp.hc.visaAmount2m'),
      duration: t('whatsapp.hc.visaDuration10'),
      description: t('whatsapp.hc.visaProp'),
      color: 'from-gold to-gold-light',
    },
  ];

  /* ---------- Benefits ---------- */
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('goldenVisa.benefits.items.0'),
      description: t('whatsapp.hc.visaNoRenewal'),
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t('goldenVisa.benefits.items.1'),
      description: t('whatsapp.hc.visaSimple'),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('goldenVisa.benefits.items.2'),
      description: t('whatsapp.hc.visaFamily'),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('goldenVisa.benefits.items.3'),
      description: t('whatsapp.hc.gvBenefitFreedom'),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('goldenVisa.benefits.items.4'),
      description: t('whatsapp.hc.gvBenefitTravel'),
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('goldenVisa.benefits.items.5'),
      description: t('whatsapp.hc.visaLifestyle'),
    },
  ];

  /* ---------- Process Steps ---------- */
  const processSteps = [
    {
      step: '01',
      title: t('goldenVisa.process.step1.title'),
      description: t('goldenVisa.process.step1.description'),
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: '02',
      title: t('goldenVisa.process.step2.title'),
      description: t('goldenVisa.process.step2.description'),
      icon: <Home className="w-8 h-8" />,
    },
    {
      step: '03',
      title: t('goldenVisa.process.step3.title'),
      description: t('goldenVisa.process.step3.description'),
      icon: <Shield className="w-8 h-8" />,
    },
    {
      step: '04',
      title: t('goldenVisa.process.step4.title'),
      description: t('goldenVisa.process.step4.description'),
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ========== HERO ========== */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={img('golden-visa-premium.jpg')}
            alt="UAE Golden Visa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          style={{
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '0.75rem',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '2rem 2.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.1 }}
            className="font-serif font-bold text-gold mb-6"
          >
            {t('goldenVisa.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t('goldenVisa.hero.subtitle')}
          </p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a
              href="#investment-types"
              className="btn-gold-solid text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>{t('whatsapp.hc.knowReqs')}</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== INVESTMENT THRESHOLDS ========== */}
      <section id="investment-types" className="py-16 md:py-24 lg:py-32 bg-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">
              {t('goldenVisa.investment.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t('whatsapp.hc.investRoutes')}
            </p>
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {investmentRoutes.map((route, index) => (
              <motion.div
                key={index}
                className="card-luxury p-8 text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${route.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-card border border-gold/20 rounded-full text-gold mb-6 group-hover:bg-gold group-hover:text-background transition-all duration-300">
                    {route.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-2">
                    {route.title}
                  </h3>
                  <div className="text-3xl font-serif font-bold text-text-primary mb-2">
                    {route.amount}
                  </div>
                  <div className="text-sm font-medium text-gold mb-4 bg-gold/10 rounded-full px-4 py-2 inline-block">
                    {t('whatsapp.hc.gvVisaPrefix')}{route.duration} Visa
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {route.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== BENEFITS ========== */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">
              {t('goldenVisa.benefits.title')}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t('whatsapp.hc.visaAdvantages')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card border border-gold/20 rounded-lg hover:border-gold transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center text-gold">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== FAMILY COVERAGE ========== */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">
              {t('whatsapp.hc.gvFamilyTitle')}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t('whatsapp.hc.gvFamilySubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: t('whatsapp.hc.gvFamilyChildren'),
                desc: t('whatsapp.hc.gvFamilyChildrenDesc'),
                hl: true,
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: t('whatsapp.hc.gvFamilySpouse'),
                desc: t('whatsapp.hc.gvFamilySpouseDesc'),
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: t('whatsapp.hc.gvFamilyParents'),
                desc: t('whatsapp.hc.gvFamilyParentsDesc'),
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: t('whatsapp.hc.gvFamilyHelpers'),
                desc: t('whatsapp.hc.gvFamilyHelpersDesc'),
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: t('whatsapp.hc.gvFamilyProtection'),
                desc: t('whatsapp.hc.gvFamilyProtectionDesc'),
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: t('whatsapp.hc.gvFamilyNoSalary'),
                desc: t('whatsapp.hc.gvFamilyNoSalaryDesc'),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg border transition-all duration-300 hover:border-gold ${
                  item.hl
                    ? 'bg-gold/10 border-gold shadow-lg shadow-gold/10'
                    : 'bg-card border-gold/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-gold mb-4 ${
                    item.hl ? 'bg-gold/20' : 'bg-gold/10'
                  }`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-lg font-serif font-bold mb-2 ${
                    item.hl ? 'text-gold' : 'text-text-primary'
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS TIMELINE ========== */}
      <section className="py-16 md:py-24 lg:py-32 bg-elevated">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-4"
              style={{ letterSpacing: '0.15em' }}
            >
              {t('goldenVisa.process.title')}
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {t('goldenVisa.process.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            <div className="relative">
              {/* Vertical gold line */}
              <div
                className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
                style={{
                  background:
                    'linear-gradient(to bottom, #c9a96e, rgba(201,169,110,0.3))',
                }}
              />

              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start mb-12 last:mb-0"
                  style={{ paddingLeft: '4.5rem' }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {/* Numbered circle */}
                  <div
                    className="absolute left-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold z-10"
                    style={{
                      background: index === 0 ? '#c9a96e' : '#1a1a2e',
                      border: index === 0 ? 'none' : '2px solid #c9a96e',
                      color: index === 0 ? '#1a1a2e' : '#c9a96e',
                      boxShadow:
                        index === 0
                          ? '0 0 20px rgba(201,169,110,0.3)'
                          : '',
                    }}
                  >
                    {step.step}
                  </div>

                  {/* Step content */}
                  <div
                    className="flex-1 rounded-xl p-6"
                    style={{
                      background: 'rgba(201,169,110,0.05)',
                      border: '1px solid rgba(201,169,110,0.15)',
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: 'rgba(201,169,110,0.1)',
                          color: '#c9a96e',
                        }}
                      >
                        {step.icon}
                      </div>
                      <h3
                        className="text-xl font-serif font-bold"
                        style={{ color: '#c9a96e' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
            {t('goldenVisa.cta.title')}
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('goldenVisa.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="btn-gold-solid text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>{t('goldenVisa.cta.button')}</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/971585821144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GoldenVisa;
