import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      about: 'About',
      properties: 'Properties',
      services: 'Services',
      goldenVisa: 'Golden Visa',
      contact: 'Contact',

      // Hero Section
      heroTitle: 'Puerta del Sol Real Estate',
      heroSubtitle: 'Your trusted partner for exclusive real estate investments in Dubai',
      heroDescription: 'Specializing in luxury properties, Golden Visa services, and personalized real estate solutions for international investors in the UAE.',
      exploreProperties: 'Explore Properties',
      learnMore: 'Learn More',

      // About Section
      aboutTitle: 'About Puerta del Sol Real Estate',
      aboutDescription: 'We are Dubai\'s premier luxury real estate agency, specializing in high-end properties and investment opportunities in Business Bay and across the UAE.',

      // Investment Categories
      investmentTitle: 'Investment Categories',
      residential: 'Residential',
      commercial: 'Commercial',
      offPlan: 'Off-Plan',
      holidayHomes: 'Holiday Homes',
      
      residentialDesc: 'Premium apartments, villas, and penthouses in Dubai\'s most prestigious locations including Business Bay, Downtown Dubai, and Palm Jumeirah.',
      commercialDesc: 'High-yield commercial properties including office spaces, retail units, and mixed-use developments in prime business districts.',
      offPlanDesc: 'Exclusive pre-construction properties with attractive payment plans and guaranteed returns from Dubai\'s top developers.',
      holidayHomesDesc: 'Luxury vacation rentals and short-term investment properties in Dubai\'s most sought-after tourist destinations.',

      // Services
      servicesTitle: 'Our Services',
      propertyConsultation: 'Property Consultation',
      investmentAnalysis: 'Investment Analysis',
      propertyManagement: 'Property Management',
      legalSupport: 'Legal Support',

      // Golden Visa
      goldenVisaTitle: 'UAE Golden Visa',
      goldenVisaDescription: 'Secure your UAE Golden Visa through real estate investment. Our expert team will guide you through the entire process.',

      // Contact
      contactTitle: 'Contact Us',
      contactDescription: 'Ready to invest in Dubai\'s luxury real estate market? Get in touch with our expert team.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      sendMessage: 'Send Message',

      // Footer
      footerCompany: 'Puerta del Sol Real Estate',
      footerDescription: 'Your trusted partner for luxury real estate investments in Dubai and the UAE.',
      footerLocation: 'Business Bay, Dubai, UAE',
      footerPhone: '+971 54 553 5505',
      footerEmail: 'info@dubailuxuryhomes.com',

      // Common
      viewMore: 'View More',
      getInTouch: 'Get In Touch',
      schedule: 'Schedule Consultation',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;