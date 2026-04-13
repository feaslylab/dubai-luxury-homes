import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  Settings, 
  Shield, 
  FileText, 
  Calculator,
  Users,
  Award,
  ArrowRight 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactModal from '../components/ContactModal';

const Services = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const services = [
    {
      icon: Search,
      title: t('propertyConsultation'),
      description: 'Expert guidance in selecting the perfect luxury property that aligns with your investment goals and lifestyle preferences.',
      features: [
        'Market Analysis & Research',
        'Property Viewing & Tours',
        'Location Assessment',
        'Price Negotiation Support'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: t('investmentAnalysis'),
      description: 'Comprehensive financial analysis to ensure your Dubai real estate investment delivers optimal returns.',
      features: [
        'ROI Calculations',
        'Market Trend Analysis',
        'Risk Assessment',
        'Portfolio Diversification'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      title: t('propertyManagement'),
      description: 'End-to-end property management services to maximize your rental income and maintain your investment.',
      features: [
        'Tenant Management',
        'Maintenance Coordination',
        'Rental Collection',
        'Property Marketing'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: t('legalSupport'),
      description: 'Complete legal assistance throughout your property transaction and Golden Visa application process.',
      features: [
        'Contract Review',
        'Legal Documentation',
        'Visa Application Support',
        'Compliance Guidance'
      ],
      color: 'from-gold to-gold-light'
    }
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: 'Golden Visa Services',
      description: 'Comprehensive support for UAE Golden Visa applications through real estate investment',
      link: '/golden-visa'
    },
    {
      icon: Calculator,
      title: 'Mortgage Advisory',
      description: 'Expert guidance on financing options and mortgage solutions for property purchases'
    },
    {
      icon: Users,
      title: 'Relocation Services',
      description: 'Complete relocation assistance for international clients moving to Dubai'
    },
    {
      icon: Award,
      title: 'VIP Client Services',
      description: 'Exclusive concierge services for high-net-worth individuals and VIP clients'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understanding your investment goals, budget, and preferences through detailed consultation.'
    },
    {
      step: '02', 
      title: 'Market Research',
      description: 'Comprehensive market analysis and property selection based on your specific requirements.'
    },
    {
      step: '03',
      title: 'Property Tours',
      description: 'Guided property viewings and detailed inspections of shortlisted investment opportunities.'
    },
    {
      step: '04',
      title: 'Transaction Support',
      description: 'End-to-end support through negotiation, legal processes, and property acquisition.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-gold mb-6"
          >
            {t('servicesTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Comprehensive luxury real estate services designed to maximize your investment success in Dubai's premium property market.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Core Services</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our comprehensive suite of services covers every aspect of luxury real estate investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury p-8 group"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-gold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Process</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              A systematic approach to ensure your real estate investment success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gold to-transparent transform translate-x-4 -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gold text-background font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Additional Services</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Complementary services to enhance your Dubai real estate investment experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-white/10 rounded-xl p-6 text-center group hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gold mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let our experts guide you through Dubai's luxury real estate market and help you achieve your investment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn-gold-solid"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <a
                href="tel:+971545535505"
                className="btn-gold"
              >
                Call Now
              </a>
            </div>
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

export default Services;