import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingSpinner from './components/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Properties = React.lazy(() => import('./pages/Properties'));
const GoldenVisa = React.lazy(() => import('./pages/GoldenVisa'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] } }}
    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
  >
    {children}
  </motion.div>
);

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);
  return null;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App bg-background min-h-screen">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/sobre-nosotros" element={<PageTransition><About /></PageTransition>} />
              <Route path="/servicios" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/propiedades" element={<PageTransition><Properties /></PageTransition>} />
              <Route path="/golden-visa" element={<PageTransition><GoldenVisa /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
              <Route path="/blog/:slug" element={<PageTransition><BlogDetail /></PageTransition>} />
              <Route path="/contacto" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
      <ContactPopup />
      <ScrollToTop />
    </div>
  );
}

export default App;
