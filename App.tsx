import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import ComparisonSection from './components/ComparisonSection';
import VideoSection from './components/VideoSection';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <ComparisonSection />
        <VideoSection />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;