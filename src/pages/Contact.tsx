import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  Award
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We will contact you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      primary: 'Business Bay, Dubai',
      secondary: 'United Arab Emirates',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=Business+Bay+Dubai'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      primary: '+971 54 553 5505',
      secondary: 'Available 9 AM - 6 PM',
      action: 'Call Now',
      href: 'tel:+971545535505'
    },
    {
      icon: Mail,
      title: 'Email Address',
      primary: 'info@dubailuxuryhomes.com',
      secondary: 'Response within 24 hours',
      action: 'Send Email',
      href: 'mailto:info@dubailuxuryhomes.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      primary: 'Sunday - Thursday',
      secondary: '9:00 AM - 6:00 PM GST',
      action: 'Schedule Meeting',
      href: '#'
    }
  ];

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'property', label: 'Property Consultation' },
    { value: 'golden-visa', label: 'Golden Visa Services' },
    { value: 'investment', label: 'Investment Analysis' },
    { value: 'viewing', label: 'Property Viewing' },
    { value: 'management', label: 'Property Management' },
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Chat',
      description: 'Instant messaging support',
      action: 'Start Chat',
      href: 'https://wa.me/971545535505',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Book Consultation',
      description: 'Schedule a meeting',
      action: 'Book Now',
      href: '#',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Golden Visa Guide',
      description: 'Free consultation',
      action: 'Learn More',
      href: '/golden-visa',
      color: 'from-gold to-gold-light'
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
            {t('contactTitle')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-text-secondary max-w-3xl mx-auto"
          >
            Ready to invest in Dubai's luxury real estate market? Our expert team is here to guide you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : '_self'}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-6 text-center group block"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gold mb-3">
                  {action.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {action.description}
                </p>
                <span className="text-gold font-medium group-hover:text-gold-light transition-colors">
                  {action.action} →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-background border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-serif font-bold text-gold mb-6">
                  Send us a Message
                </h2>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and our experts will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-gold focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-gold focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-gold focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary focus:border-gold focus:outline-none transition-colors"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-secondary focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements and how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gold text-background py-4 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-6 p-4 bg-gold/10 border border-gold/20 rounded-lg">
                  <p className="text-sm text-text-secondary text-center">
                    <span className="text-gold font-medium">Guaranteed Response:</span> We'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-gold mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    Our experienced team is ready to assist you with all your Dubai real estate needs. 
                    From property selection to Golden Visa applications, we're here to guide you every step of the way.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-background border border-white/10 rounded-xl p-6 group hover:border-gold/30 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-colors duration-300">
                          <info.icon className="w-6 h-6 text-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-bold text-gold mb-2">
                            {info.title}
                          </h3>
                          <p className="text-text-primary font-medium mb-1">
                            {info.primary}
                          </p>
                          <p className="text-text-secondary text-sm mb-3">
                            {info.secondary}
                          </p>
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-gold hover:text-gold-light transition-colors text-sm font-medium"
                          >
                            {info.action} →
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Office Image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="/dubai-luxury-homes/images/business-bay-office.jpg"
                    alt="Puerta del Sol Real Estate Office in Business Bay"
                    className="luxury-image w-full h-64 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Our Office</p>
                    <p className="text-xs opacity-90">Business Bay, Dubai</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
              Visit Our Office
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Located in the heart of Business Bay, we're easily accessible from all major areas of Dubai
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="h-96 bg-gradient-to-br from-gold/20 to-gold-light/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-serif font-bold text-gold mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-text-secondary mb-4">
                  Business Bay, Dubai, UAE
                </p>
                <a
                  href="https://maps.google.com/?q=Business+Bay+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex items-center"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;