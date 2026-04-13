import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import LoadingSpinner from './components/LoadingSpinner';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Properties = React.lazy(() => import('./pages/Properties'));
const GoldenVisa = React.lazy(() => import('./pages/GoldenVisa'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);
  return null;
};

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App bg-background min-h-screen">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/propiedades" element={<Properties />} />
            <Route path="/golden-visa" element={<GoldenVisa />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ContactPopup />
      <ScrollToTop />
    </div>
  );
}

export default App;
