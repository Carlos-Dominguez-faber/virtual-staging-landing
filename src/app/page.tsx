'use client';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ComparisonSection from '../../components/ComparisonSection';
import VideoSection from '../../components/VideoSection';
import Features from '../../components/Features';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ComparisonSection />
      <VideoSection />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
