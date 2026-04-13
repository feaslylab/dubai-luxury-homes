import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Building2,
  Clock,
  TrendingUp,
  Shield,
  Palmtree,
  Globe,
  Award,
  Wrench,
  Armchair,
  ArrowRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

function assetPath(path: string) {
  return `/dubai-luxury-homes/${path.startsWith('/') ? path.slice(1) : path}`;
}

const Services = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('services.categories.sales'),
      description: t('whatsapp.hc.catSales'),
      services: [
        {
          icon: <Home className="w-8 h-8" />,
          title: t('services.list.residentialSales.title'),
          description: t('services.list.residentialSales.description'),
          image: assetPath('images/WhatsApp-Image-2025-10-06-at-1.22.20-PM.jpeg'),
        },
        {
          icon: <Building2 className="w-8 h-8" />,
          title: t('services.list.commercialSales.title'),
          description: t('services.list.commercialSales.description'),
          image: assetPath('images/7-Things-You-Need-to-Know-About-Commercial-Real-Estate-1024x683.jpg'),
        },
        {
          icon: <Clock className="w-8 h-8" />,
          title: t('services.list.offPlan.title'),
          description: t('services.list.offPlan.description'),
          image: assetPath('images/1680684458222.png'),
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: t('services.list.advisory.title'),
          description: t('services.list.advisory.description'),
          image: assetPath('images/two-business-partnership-coworkers-analysis-strategy-with-discussing-picture-id1215053535.jpg'),
        },
      ],
    },
    {
      title: t('services.categories.leasing'),
      description: t('whatsapp.hc.catLeasing'),
      services: [
        {
          icon: <Building2 className="w-8 h-8" />,
          title: t('services.list.leasing.title'),
          description: t('services.list.leasing.description'),
          image: assetPath('images/what-is-a-lease-agreement-for-a-house-1024x643.jpg'),
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: t('services.list.management.title'),
          description: t('services.list.management.description'),
          image: assetPath('images/queenstown-property-management-home-1024x683.jpg'),
        },
        {
          icon: <Palmtree className="w-8 h-8" />,
          title: t('services.list.holidayHomes.title'),
          description: t('services.list.holidayHomes.description'),
          image: assetPath('images/The-Palace-Downtown-Dubai-006168-04-hotel-grounds-walkway.jpg'),
        },
      ],
    },
    {
      title: t('services.categories.lifestyle'),
      description: t('whatsapp.hc.catLifestyle'),
      services: [
        {
          icon: <Globe className="w-8 h-8" />,
          title: t('services.list.relocation.title'),
          description: t('services.list.relocation.description'),
          image: assetPath('images/1708062446_Relocation-Assistance-1024x682.jpg'),
        },
        {
          icon: <Award className="w-8 h-8" />,
          title: t('services.list.goldenVisa.title'),
          description: t('services.list.goldenVisa.description'),
          image: assetPath('images/golden-visa-premium.jpg'),
        },
        {
          icon: <Wrench className="w-8 h-8" />,
          title: t('services.list.renovation.title'),
          description: t('services.list.renovation.description'),
          image: assetPath('images/before-and-after-harwick.jpg'),
        },
        {
          icon: <Armchair className="w-8 h-8" />,
          title: t('services.list.furnishing.title'),
          description: t('services.list.furnishing.description'),
          image: assetPath('images/how-to-furnish-rental-property.jpg'),
        },
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: t('whatsapp.hc.procAnalyse'),
    },
    {
      step: '02',
      title: 'Estrategia Personalizada',
      description: t('whatsapp.hc.procPlan'),
    },
    {
      step: '03',
      title: t('whatsapp.hc.searchSelect'),
      description: t('whatsapp.hc.procSearch'),
    },
    {
      step: '04',
      title: 'Cierre y Soporte',
      description: t('whatsapp.hc.procClose'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={assetPath('images/The-Palace-Downtown-Dubai-006168-04-hotel-grounds-walkway.jpg')}
            alt="Dubai Services"
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
            {t('services.hero.title')}
          </motion.h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {categories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`py-20 ${catIndex % 2 === 0 ? 'bg-background' : 'bg-elevated'}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">
                {category.title}
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                {category.description}
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              viewport={{ once: true }}
            >
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  className="card-luxury overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 luxury-image group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-gold bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      {service.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-gold mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      to="/contacto"
                      className="text-gold hover:text-gold-light transition-colors duration-300 inline-flex items-center space-x-1 font-medium"
                    >
                      <span>{t('whatsapp.hc.moreInfo')}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">{t('whatsapp.hc.ourProcess')}</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              {t('whatsapp.hc.ourProcessDesc')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gold text-background rounded-full text-2xl font-serif font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-serif font-bold text-gold mb-4">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
            {t('whatsapp.hc.readyStart')}
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('whatsapp.hc.readyStartDesc')}
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

export default Services;
