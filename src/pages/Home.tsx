import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

/* ------------------------------------------------------------------ */
/*  Base path helper                                                   */
/* ------------------------------------------------------------------ */
const BASE = '/dubai-luxury-homes';
const img = (name: string) => `${BASE}/images/${name}`;
const vid = (name: string) => `${BASE}/videos/${name}`;

/* ------------------------------------------------------------------ */
/*  Animated count-up hook                                             */
/* ------------------------------------------------------------------ */
function useCountUp(end: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);
  return value;
}

/* ------------------------------------------------------------------ */
/*  Fade-up animation variant                                          */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12 },
  }),
};

/* ------------------------------------------------------------------ */
/*  Home Page                                                          */
/* ------------------------------------------------------------------ */
const Home: React.FC = () => {
  const { t } = useTranslation();

  /* ---- Hero video crossfade ---- */
  const heroVideos = [vid('hero-downtown-night.mp4'), vid('hero-marina-night.mp4')];
  const [activeVideo, setActiveVideo] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % heroVideos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  /* ---- KPI count-up ---- */
  const kpiRef = useRef<HTMLDivElement>(null);
  const kpiInView = useInView(kpiRef, { once: true, margin: '-100px' });
  const countYears = useCountUp(12, 1800, kpiInView);
  const countAssets = useCountUp(500, 2000, kpiInView);
  const countInvestors = useCountUp(250, 2000, kpiInView);
  const countTransactions = useCountUp(2, 1600, kpiInView);

  /* ---- Dubai Carousel ---- */
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselSlides = [
    { heading: 'whatsapp.hc.carSlide1H', sub: 'whatsapp.hc.carSlide1S', stat: '0%', statLabel: 'whatsapp.hc.carStat1', image: 'carousel-downtown.jpg' },
    { heading: 'whatsapp.hc.carSlide2H', sub: 'whatsapp.hc.carSlide2S', stat: '10yr', statLabel: 'whatsapp.hc.carStat2', image: 'carousel-palm.jpg' },
    { heading: 'whatsapp.hc.carSlide3H', sub: 'whatsapp.hc.carSlide3S', stat: '10%+', statLabel: 'whatsapp.hc.carStat3', image: 'carousel-marina.jpg' },
    { heading: 'whatsapp.hc.carSlide4H', sub: 'whatsapp.hc.carSlide4S', stat: '#1', statLabel: 'whatsapp.hc.carStat4', image: 'carousel-businessbay.jpg' },
    { heading: 'whatsapp.hc.carSlide5H', sub: 'whatsapp.hc.carSlide5S', stat: '365', statLabel: 'whatsapp.hc.carStat5', image: 'carousel-beach.jpg' },
    { heading: 'whatsapp.hc.carSlide6H', sub: 'whatsapp.hc.carSlide6S', stat: '$2T', statLabel: 'whatsapp.hc.carStat6', image: 'carousel-skyline.jpg' },
  ];

  const prevSlide = useCallback(() => setCarouselIndex((i) => (i - 1 + carouselSlides.length) % carouselSlides.length), []);
  const nextSlide = useCallback(() => setCarouselIndex((i) => (i + 1) % carouselSlides.length), []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  /* ---- Investment categories ---- */
  const categories = [
    { key: 'catEntry', price: 'USD 250K', areas: 'whatsapp.hc.catEntryAreas', yield: '7-9%', image: 'cat-under250k.jpg' },
    { key: 'catPremium', price: 'USD 250K - 2M', areas: 'whatsapp.hc.catPremiumAreas', yield: '5-7%', image: 'cat-under2m.jpg' },
    { key: 'catLuxury', price: 'USD 2M - 6M', areas: 'whatsapp.hc.catLuxuryAreas', yield: '4-6%', image: 'cat-2to6m.jpg' },
    { key: 'catUltra', price: 'USD 6M+', areas: 'whatsapp.hc.catUltraAreas', yield: '3-5%', image: 'cat-over6m.jpg' },
  ];

  /* ---- Services (first 6) ---- */
  const serviceItems = [
    { key: 'residentialSales', image: 'luxury-interior-1.jpg' },
    { key: 'commercialSales', image: '7-Things-You-Need-to-Know-About-Commercial-Real-Estate-1024x683.jpg' },
    { key: 'offPlan', image: 'dubai-marina.jpg' },
    { key: 'leasing', image: 'what-is-a-lease-agreement-for-a-house-1024x643.jpg' },
    { key: 'management', image: 'queenstown-property-management-home-1024x683.jpg' },
    { key: 'advisory', image: 'two-business-partnership-coworkers-analysis-strategy-with-discussing-picture-id1215053535.jpg' },
  ];

  /* ---- Blog preview (3 articles) ---- */
  const blogArticles = [
    { titleKey: 'whatsapp.hc.nbTitle1', excerptKey: 'whatsapp.hc.nbExcerpt1', catKey: 'whatsapp.hc.nbCat1', dateKey: 'whatsapp.hc.nbDate1', readTime: 8, image: 'blog-invest2026.jpg' },
    { titleKey: 'whatsapp.hc.nbTitle2', excerptKey: 'whatsapp.hc.nbExcerpt2', catKey: 'whatsapp.hc.nbCat2', dateKey: 'whatsapp.hc.nbDate2', readTime: 10, image: 'blog-goldenvisa.jpg' },
    { titleKey: 'whatsapp.hc.nbTitle3', excerptKey: 'whatsapp.hc.nbExcerpt3', catKey: 'whatsapp.hc.nbCat3', dateKey: 'whatsapp.hc.nbDate3', readTime: 7, image: 'blog-areas.jpg' },
  ];

  return (
    <div>
      {/* ================================================================ */}
      {/* 1. HERO — Video Background with Crossfade                        */}
      {/* ================================================================ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroVideos.map((src, idx) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
              idx === activeVideo ? 'opacity-40' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            {t('home.hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/propiedades" className="btn-gold-solid">
              {t('whatsapp.hc.viewProps')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/971585821144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. KPI COUNT-UP STRIP                                            */}
      {/* ================================================================ */}
      <section ref={kpiRef} className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: countYears, suffix: '+', label: t('whatsapp.hc.yearsExcellence') },
              { value: countAssets, suffix: '+', label: t('whatsapp.hc.statAssets') },
              { value: countInvestors, suffix: '+', label: t('whatsapp.hc.statInvestors') },
              { value: countTransactions, suffix: '', prefix: 'USD ', suffixText: 'B+', label: t('whatsapp.hc.statTransactions') },
            ].map((kpi, idx) => (
              <motion.div
                key={kpi.label}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {kpi.prefix || ''}
                  {kpi.value}
                  {kpi.suffixText || kpi.suffix}
                </div>
                <div className="text-text-secondary text-sm">{kpi.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. ABOUT PREVIEW                                                 */}
      {/* ================================================================ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={img('cropped-WhatsApp_Image_2025-10-06_at_11.40.19_AM-removebg-preview.png')}
                alt="Puerta del Sol Real Estate"
                className="w-48 mb-6"
              />
              <img
                src={img('luxury-interior-2.jpg')}
                alt="Luxury Interior"
                className="luxury-image w-full h-[420px] rounded-xl object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">
                {t('home.about.title')}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t('home.about.content')}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                {t('whatsapp.hc.aboutLong')}
              </p>
              <Link to="/sobre-nosotros" className="btn-gold inline-flex items-center">
                {t('whatsapp.hc.learnMore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. INVESTMENT CATEGORIES                                         */}
      {/* ================================================================ */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">{t('whatsapp.hc.luxInvTitle')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.key}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-luxury overflow-hidden group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img(cat.image)}
                    alt={String(t(`whatsapp.hc.${cat.key}`))}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-gold/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {cat.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-gold mb-2">
                    {t(`whatsapp.hc.${cat.key}`)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    {t(`whatsapp.hc.${cat.key}Desc`)}
                  </p>
                  <p className="text-xs text-text-secondary/70 mb-3">
                    {t(`whatsapp.hc.${cat.key}Areas`)}
                  </p>
                  <div className="flex items-center gap-1 text-gold text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" />
                    {cat.yield} ROI
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. SERVICES GRID                                                 */}
      {/* ================================================================ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">{t('home.services.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((svc, idx) => (
              <motion.div
                key={svc.key}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-luxury overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={img(svc.image)}
                    alt={String(t(`services.list.${svc.key}.title`))}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-gold mb-2">
                    {t(`services.list.${svc.key}.title`)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {t(`services.list.${svc.key}.description`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/servicios" className="btn-gold inline-flex items-center">
              {t('home.services.viewAll')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. DUBAI CAROUSEL                                                */}
      {/* ================================================================ */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">{t('whatsapp.hc.dubaiDest')}</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {t('whatsapp.hc.dubaiDestDesc')}
            </p>
          </motion.div>

          <div className="relative overflow-hidden rounded-2xl">
            {/* Slides */}
            <div className="relative h-[500px] md:h-[550px]">
              {carouselSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    idx === carouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={img(slide.image)}
                    alt={String(t(slide.heading))}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Stat badge */}
                  <div className="absolute top-6 right-6 bg-gold/90 text-black rounded-xl px-5 py-3 text-center">
                    <div className="text-3xl font-bold">{slide.stat}</div>
                    <div className="text-xs font-semibold uppercase">{t(slide.statLabel)}</div>
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                      {t(slide.heading)}
                    </h3>
                    <p className="text-text-secondary text-base md:text-lg max-w-2xl">
                      {t(slide.sub)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-gold/80 text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-gold/80 text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === carouselIndex ? 'bg-gold' : 'bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. BLOG PREVIEW                                                  */}
      {/* ================================================================ */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">{t('home.blog.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogArticles.map((article, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card-luxury overflow-hidden group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img(article.image)}
                    alt={String(t(article.titleKey))}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-gold/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {t(article.catKey)}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {t(article.titleKey)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {t(article.excerptKey)}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-secondary/70">
                    <span>{t(article.dateKey)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime} {t('blog.readTime')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/blog" className="btn-gold inline-flex items-center">
              {t('home.blog.viewAll')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 8. CTA SECTION                                                   */}
      {/* ================================================================ */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={img('palm-jumeirah-aerial.jpg')}
          alt="Palm Jumeirah Aerial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gold mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/971585821144"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-solid flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t('home.cta.button')}
              </a>
              <Link to="/contacto" className="btn-gold inline-flex items-center">
                {t('whatsapp.hc.contactNow')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
