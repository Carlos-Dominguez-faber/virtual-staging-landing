'use client';

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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div
        className={`
          bg-white/70 backdrop-blur-xl rounded-2xl border border-white/40
          shadow-lg shadow-black/5 transition-all duration-300
          ${scrolled ? 'bg-white/85 shadow-xl shadow-black/10' : ''}
        `}
      >
        <div className="px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <Box size={22} strokeWidth={3} />
            </div>
            <h2 className="text-gray-900 text-lg font-bold tracking-tight">Virtual Staging AI</h2>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <a href="#features" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a
                href="https://virtual-staging.systemizemybiz.com/login"
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors px-3 py-2"
              >
                Sign In
              </a>
              <a
                href="https://virtual-staging.systemizemybiz.com/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
