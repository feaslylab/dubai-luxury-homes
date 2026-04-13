import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Properties = React.lazy(() => import('./pages/Properties'));
const Services = React.lazy(() => import('./pages/Services'));
const GoldenVisa = React.lazy(() => import('./pages/GoldenVisa'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/services" element={<Services />} />
            <Route path="/golden-visa" element={<GoldenVisa />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;