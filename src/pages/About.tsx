import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, MapPin, Clock, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We build lasting relationships through honest communication and transparent dealings in every transaction.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in service delivery and property selection for our discerning clients.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We tailor our services to meet your unique investment goals and requirements.'
    },
    {
      icon: TrendingUp,
      title: 'Market Expertise',
      description: 'Deep local knowledge and market insights ensure you make informed investment decisions in Dubai real estate.'
    }
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'Established in Business Bay with a vision to serve international investors' },
    { year: '2018', title: '500+ Happy Clients', description: 'Reached our first major milestone in client satisfaction' },
    { year: '2020', title: 'Golden Visa Specialists', description: 'Became certified Golden Visa consultation specialists' },
    { year: '2024', title: '1000+ Properties', description: 'Successfully facilitated over 1000 property transactions' }
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
            {t('aboutTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Your trusted partner for luxury real estate investments in Dubai, specializing in premium properties and Golden Visa services for international clients.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Founded in 2014 in the heart of Business Bay, Puerta del Sol Real Estate was born from a simple vision: 
                  to provide exceptional real estate investment opportunities to international clients seeking to 
                  establish their presence in the UAE.
                </p>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  With over a decade of experience in Dubai's dynamic property market, we have built our reputation 
                  on trust, expertise, and personalized service. Our deep understanding of both local market 
                  dynamics and international investor needs sets us apart in the luxury real estate sector.
                </p>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Today, we are proud to be one of Dubai's leading luxury real estate agencies, having facilitated 
                  over 1000 successful property transactions and helped hundreds of clients secure their UAE Golden 
                  Visa through strategic real estate investments.
                </p>
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
                src="/dubai-luxury-homes/images/about-team.jpg"
                alt="Puerta del Sol Real Estate Team"
                className="luxury-image w-full h-[600px] rounded-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Values</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The principles that guide our commitment to excellence in luxury real estate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '1000+', label: 'Properties Sold' },
              { number: '500+', label: 'Happy Clients' },
              { number: '12%', label: 'Average ROI' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-8"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Journey</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Key milestones in our growth as Dubai's premier luxury real estate agency
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gold/30 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-5/12 mb-6 md:mb-0">
                    <div className={`bg-background p-6 rounded-xl border border-white/10 ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}>
                      <div className="text-2xl font-serif font-bold text-gold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-text-primary mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-text-secondary">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block w-4 h-4 bg-gold rounded-full border-4 border-card flex-shrink-0 z-10"></div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
                Our Location
              </h2>
              <div className="prose">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Strategically located in Business Bay, one of Dubai's most prestigious business districts, 
                  our office provides the perfect base to serve clients across the emirate's luxury property market.
                </p>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Business Bay's central location offers unparalleled access to Downtown Dubai, DIFC, Dubai Marina, 
                  and other prime real estate destinations, enabling us to provide comprehensive market coverage 
                  and on-ground expertise.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Business Bay</div>
                    <div className="text-text-secondary">Dubai, United Arab Emirates</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Office Hours</div>
                    <div className="text-text-secondary">Sunday - Thursday, 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
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
                src="/dubai-luxury-homes/images/business-bay-view.jpg"
                alt="Business Bay Dubai"
                className="luxury-image w-full h-[500px] rounded-xl"
              />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;