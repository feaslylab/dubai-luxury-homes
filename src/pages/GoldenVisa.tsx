import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactModal from '../components/ContactModal';

const GoldenVisa = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const benefits = [
    {
      icon: Clock,
      title: '10-Year Visa',
      description: 'Long-term residency with automatic renewal options'
    },
    {
      icon: Users,
      title: 'Family Inclusion',
      description: 'Visa extends to spouse and unmarried children under 25'
    },
    {
      icon: Shield,
      title: 'No Sponsor Required',
      description: 'Complete independence from traditional UAE sponsorship'
    },
    {
      icon: Globe,
      title: 'Multiple Entry',
      description: 'Unlimited entry and exit with 6-month validity outside UAE'
    },
    {
      icon: Briefcase,
      title: 'Work Freedom',
      description: 'Ability to work, study, and conduct business in the UAE'
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Access to world-class healthcare system in the UAE'
    }
  ];

  const eligibilityOptions = [
    {
      icon: Home,
      title: 'Real Estate Investment',
      amount: 'AED 2 Million+',
      description: 'Purchase property worth AED 2 million or more',
      requirements: [
        'Minimum property value of AED 2 million',
        'Property can be residential or commercial',
        'Multiple properties can be combined',
        'Retain ownership for at least 3 years'
      ],
      recommended: true
    },
    {
      icon: Briefcase,
      title: 'Business Investment',
      amount: 'AED 10 Million+',
      description: 'Invest in existing or new UAE business',
      requirements: [
        'Minimum capital investment of AED 10 million',
        'Partnership with UAE national or business',
        'Business must be profitable',
        'Create employment opportunities'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Exceptional Talents',
      amount: 'Skills Based',
      description: 'For exceptional professionals and specialists',
      requirements: [
        'Recognized expertise in specific fields',
        'Recommendation from government entity',
        'Proof of achievements and contributions',
        'Meet specific salary requirements'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Assessment of eligibility and requirements',
      duration: '1-2 days'
    },
    {
      step: '02',
      title: 'Property Selection',
      description: 'Identify and evaluate suitable properties',
      duration: '1-2 weeks'
    },
    {
      step: '03',
      title: 'Property Purchase',
      description: 'Complete property acquisition and registration',
      duration: '2-4 weeks'
    },
    {
      step: '04',
      title: 'Document Preparation',
      description: 'Compile and authenticate all required documents',
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Visa Application',
      description: 'Submit Golden Visa application to authorities',
      duration: '2-3 weeks'
    },
    {
      step: '06',
      title: 'Visa Issuance',
      description: 'Receive Golden Visa and Emirates ID',
      duration: '1-2 weeks'
    }
  ];

  const documents = [
    'Valid passport with minimum 6 months validity',
    'Property purchase agreement and title deed',
    'Property valuation certificate',
    'No-objection certificate from developer',
    'Bank statements and financial documents',
    'Educational certificates (attested)',
    'Medical fitness certificate',
    'Good conduct certificate',
    'Passport-sized photographs',
    'Application forms and fees'
  ];

  const faqs = [
    {
      question: 'What is the minimum property value for Golden Visa eligibility?',
      answer: 'The minimum property value is AED 2 million. This can be a single property or multiple properties combined to reach the threshold amount.'
    },
    {
      question: 'Can I include my family in the Golden Visa application?',
      answer: 'Yes, the Golden Visa includes your spouse and unmarried children under the age of 25. Each family member will receive their own visa with the same validity period.'
    },
    {
      question: 'How long does the Golden Visa application process take?',
      answer: 'The complete process typically takes 6-12 weeks from property purchase to visa issuance, depending on document preparation and government processing times.'
    },
    {
      question: 'Do I need to maintain the property investment?',
      answer: 'Yes, you must retain ownership of the property for a minimum of 3 years. Selling before this period may affect your visa status.'
    },
    {
      question: 'Can I work in the UAE with a Golden Visa?',
      answer: 'Yes, Golden Visa holders can work, study, and conduct business in the UAE without requiring a traditional employment visa or sponsor.'
    },
    {
      question: 'Is the Golden Visa renewable?',
      answer: 'Yes, the Golden Visa can be renewed for another 10-year period, provided you continue to meet the eligibility requirements.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <Award className="w-16 h-16 text-gold mr-4" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold">
              UAE Golden Visa
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Secure your 10-year UAE residency through strategic real estate investment. 
            Your gateway to long-term residency in the world's most dynamic city.
          </motion.p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Golden Visa Benefits</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Discover the exclusive advantages of UAE Golden Visa residency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-luxury p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gold mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Options */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Eligibility Pathways</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Multiple routes to qualify for your UAE Golden Visa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eligibilityOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-background border rounded-xl p-8 relative ${
                  option.recommended 
                    ? 'border-gold shadow-2xl transform scale-105' 
                    : 'border-white/10'
                }`}
              >
                {option.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-background px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 ${
                    option.recommended ? 'bg-gold/30' : 'bg-gold/20'
                  }`}>
                    <option.icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gold mb-2">
                    {option.title}
                  </h3>
                  <div className="text-xl font-bold text-text-primary mb-4">
                    {option.amount}
                  </div>
                  <p className="text-text-secondary">
                    {option.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {option.requirements.map((requirement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Application Process</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Step-by-step guide to securing your UAE Golden Visa
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gold/30 hidden lg:block"></div>
            
            <div className="space-y-12 lg:space-y-16">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="w-full lg:w-5/12 mb-6 lg:mb-0">
                    <div className={`bg-card p-6 rounded-xl border border-white/10 ${
                      index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-serif font-bold text-gold">
                          {step.title}
                        </div>
                        <span className="text-sm text-text-secondary bg-gold/10 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-16 h-16 bg-gold rounded-full border-4 border-card items-center justify-center flex-shrink-0 z-10">
                    <span className="text-background font-bold text-lg">{step.step}</span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8">
                Required Documents
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Ensure you have all necessary documentation prepared for a smooth Golden Visa application process. 
                Our team will assist you in obtaining and verifying all required documents.
              </p>
              
              <div className="bg-background border border-white/10 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-serif font-bold text-gold">
                    Professional Support
                  </h3>
                </div>
                <p className="text-text-secondary text-sm">
                  Our expert team provides comprehensive document preparation and verification services 
                  to ensure your application meets all requirements.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-background border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif font-bold text-gold mb-6">
                  Document Checklist
                </h3>
                <div className="space-y-4">
                  {documents.map((document, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">
                        {document}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Common questions about the UAE Golden Visa process
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-serif font-bold text-gold mb-4">
                  {faq.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
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
              Start Your Golden Visa Journey Today
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let our Golden Visa specialists guide you through the entire process, from property selection to visa issuance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="btn-gold-solid"
              >
                Free Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <a
                href="tel:+971545535505"
                className="btn-gold"
              >
                Call Expert: +971 54 553 5505
              </a>
            </div>
            <p className="text-xs text-text-secondary mt-4">
              Expert consultation • No obligation • Confidential
            </p>
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

export default GoldenVisa;