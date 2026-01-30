import React, { useState, useEffect } from 'react';
import { Box } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-600">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Box size={24} strokeWidth={3} />
          </div>
          <h2 className="text-slate-900 text-xl font-bold tracking-tight">Virtual Staging AI</h2>
        </div>

        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Pricing</a>
          </nav>
          <div className="flex gap-4">
            <a href="https://virtual-staging.systemizemybiz.com/login" className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors px-4 py-2">
              Sign In
            </a>
            <a href="https://virtual-staging.systemizemybiz.com/signup" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/20 transition-all hover:scale-105 active:scale-95">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;