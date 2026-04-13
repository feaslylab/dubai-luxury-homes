import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, springUp, staggerContainer, hoverLift, viewportOnce } from '../utils/animations';
import { ArrowRight, Tag, Clock, User, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BASE = '/dubai-luxury-homes';
const img = (name: string) => `${BASE}/images/${name}`;

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  readTime: number;
  category: string;
  author: string;
  date: string;
}

const Blog = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const posts: BlogPost[] = [
    {
      title: t('whatsapp.hc.nbTitle1'),
      excerpt: t('whatsapp.hc.nbExcerpt1'),
      image: img('dubai-skyline-night.jpg'),
      slug: 'por-que-invertir-dubai-2026',
      readTime: 5,
      category: t('whatsapp.hc.nbCat1'),
      author: t('whatsapp.hc.blogAuthor'),
      date: t('whatsapp.hc.nbDate1'),
    },
    {
      title: t('whatsapp.hc.nbTitle2'),
      excerpt: t('whatsapp.hc.nbExcerpt2'),
      image: img('golden-visa-premium.jpg'),
      slug: 'golden-visa-dubai-guia-completa',
      readTime: 6,
      category: t('whatsapp.hc.nbCat2'),
      author: t('whatsapp.hc.blogAuthor'),
      date: t('whatsapp.hc.nbDate2'),
    },
    {
      title: t('whatsapp.hc.nbTitle3'),
      excerpt: t('whatsapp.hc.nbExcerpt3'),
      image: img('dubai-marina.jpg'),
      slug: 'mejores-zonas-inversion-dubai',
      readTime: 6,
      category: t('whatsapp.hc.nbCat3'),
      author: t('whatsapp.hc.blogAuthor'),
      date: t('whatsapp.hc.nbDate3'),
    },
    {
      title: t('whatsapp.hc.nbTitle4'),
      excerpt: t('whatsapp.hc.nbExcerpt4'),
      image: img('dubai-downtown.jpg'),
      slug: 'ventajas-fiscales-dubai',
      readTime: 5,
      category: t('whatsapp.hc.nbCat4'),
      author: t('whatsapp.hc.blogAuthor'),
      date: t('whatsapp.hc.nbDate4'),
    },
    {
      title: t('whatsapp.hc.nbTitle5'),
      excerpt: t('whatsapp.hc.nbExcerpt5'),
      image: img('luxury-villa-pool.jpg'),
      slug: 'rendimientos-alquiler-dubai-vs-mundo',
      readTime: 5,
      category: t('whatsapp.hc.nbCat5'),
      author: t('whatsapp.hc.blogAuthor'),
      date: t('whatsapp.hc.nbDate5'),
    },
    {
      title: t('whatsapp.hc.nbTitle6'),
      excerpt: t('whatsapp.hc.nbExcerpt6'),
      image: img('how-to-buy-commercial-realstate.jpeg'),
      slug: 'como-comprar-propiedad-dubai-extranjero',
      readTime: 6,
      category: t('whatsapp.hc.nbCat6'),
      author: t('whatsapp.hc.blogAuthor'),
      date: t('whatsapp.hc.nbDate6'),
    },
  ];

  const categories = [
    t('whatsapp.hc.filterAll'),
    t('whatsapp.hc.nbCat1'),
    t('whatsapp.hc.nbCat2'),
    t('whatsapp.hc.nbCat3'),
    t('whatsapp.hc.nbCat4'),
    t('whatsapp.hc.nbCat5'),
    t('whatsapp.hc.nbCat6'),
  ];

  const filteredPosts =
    activeFilter && activeFilter !== t('whatsapp.hc.filterAll')
      ? posts.filter((p) => p.category === activeFilter)
      : posts;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={img('dubai-skyline-night.jpg')}
            alt="Dubai skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#c4a265]/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
          <div
            className="absolute bottom-0 left-0 right-0 h-32 backdrop-blur-[2px]"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            }}
          />
        </div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.1 }}
            className="font-serif font-bold text-gold mb-6"
          >
            {t('blog.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            {t('blog.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-elevated border-b border-gold/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setActiveFilter(
                    cat === t('whatsapp.hc.filterAll') ? null : cat
                  )
                }
                className={`px-6 py-2 border rounded-full font-medium transition-all duration-300 ${
                  (cat === t('whatsapp.hc.filterAll') && !activeFilter) ||
                  activeFilter === cat
                    ? 'bg-gold text-background border-gold'
                    : 'bg-card border-gold/20 text-text-secondary hover:bg-gold hover:text-background hover:border-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16"
            variants={springUp}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-8 text-center">
              {t('whatsapp.hc.featuredArticle')}
            </h2>
            <div className="card-luxury overflow-hidden group max-w-4xl mx-auto">
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img
                    src={filteredPosts[0]?.image}
                    alt={filteredPosts[0]?.title}
                    className="w-full h-64 md:h-full luxury-image group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-background px-4 py-2 rounded-full text-sm font-bold">
                    {t('whatsapp.hc.featuredTag')}
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-text-secondary text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <Tag size={14} className="text-gold" />
                      <span>{filteredPosts[0]?.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} className="text-gold" />
                      <span>
                        {filteredPosts[0]?.readTime} {t('blog.readTime')}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-primary mb-4 leading-tight">
                    {filteredPosts[0]?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {filteredPosts[0]?.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-text-secondary text-sm">
                      <User size={14} className="text-gold" />
                      <span>{filteredPosts[0]?.author}</span>
                      <Calendar size={14} className="text-gold" />
                      <span>{filteredPosts[0]?.date}</span>
                    </div>
                    <Link
                      to={`/blog/${filteredPosts[0]?.slug}`}
                      className="text-gold hover:text-gold-light transition-colors duration-300 inline-flex items-center space-x-1 font-medium"
                    >
                      <span>{t('whatsapp.hc.readArticle')}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 bg-elevated">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={viewportOnce}
          >
            {filteredPosts.slice(1).map((post, idx) => (
              <motion.article
                key={post.slug}
                className="card-luxury overflow-hidden group"
                variants={fadeUp}
                whileHover={hoverLift}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 luxury-image group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-background px-3 py-1 rounded-full text-sm font-medium">
                    {post.readTime} {t('blog.readTime')}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-text-secondary text-xs mb-3">
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-gold hover:text-gold-light transition-colors duration-300 inline-flex items-center space-x-1 font-medium"
                  >
                    <span>{t('whatsapp.hc.readMore')}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <motion.section
        className="py-20 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-6">
            {t('whatsapp.hc.stayInformed')}
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {t('whatsapp.hc.newsletter')}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder={t('whatsapp.hc.emailPlaceholder') as string}
              className="flex-1 bg-background border border-gold/20 text-text-primary px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors"
            />
            <button className="btn-gold-solid px-6 py-3">
              {t('whatsapp.hc.subscribe')}
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
