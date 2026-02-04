'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play, Star, CheckCircle2, Sparkles } from 'lucide-react';
import ScrollExpandMedia from './ui/scroll-expansion-hero';
import { PulseBeams } from './ui/pulse-beams';

// Before/After images
const BEFORE_IMAGE = 'https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f05d0f4e6bc075c834.png';
const AFTER_IMAGE = 'https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f0ec31a1dcb57ddff8.png';

// Beam configuration for PulseBeams animation
const ctaBeams = [
  {
    path: 'M200 180H50C44.477 180 40 184.477 40 190V280',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['0%', '0%', '200%'],
        x2: ['0%', '0%', '180%'],
        y1: ['80%', '0%', '0%'],
        y2: ['100%', '20%', '20%'],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 0 },
    },
    connectionPoints: [{ cx: 40, cy: 280, r: 4 }],
  },
  {
    path: 'M400 180H550C555.523 180 560 184.477 560 190V280',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['20%', '100%', '100%'],
        x2: ['0%', '90%', '90%'],
        y1: ['80%', '80%', '-20%'],
        y2: ['100%', '100%', '0%'],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 0.5 },
    },
    connectionPoints: [{ cx: 560, cy: 280, r: 4 }],
  },
  {
    path: 'M300 200V260C300 265.523 295.523 270 290 270H120C114.477 270 110 274.477 110 280V340',
    gradientConfig: {
      initial: { x1: '0%', x2: '0%', y1: '80%', y2: '100%' },
      animate: {
        x1: ['20%', '100%', '100%'],
        x2: ['0%', '90%', '90%'],
        y1: ['80%', '80%', '-20%'],
        y2: ['100%', '100%', '0%'],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 1 },
    },
    connectionPoints: [{ cx: 110, cy: 340, r: 4 }],
  },
  {
    path: 'M300 200V260C300 265.523 304.477 270 310 270H480C485.523 270 490 274.477 490 280V340',
    gradientConfig: {
      initial: { x1: '40%', x2: '50%', y1: '160%', y2: '180%' },
      animate: { x1: '0%', x2: '10%', y1: '-40%', y2: '-20%' },
      transition: { duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 2, delay: 1.5 },
    },
    connectionPoints: [{ cx: 490, cy: 340, r: 4 }],
  },
];

const gradientColors = {
  start: '#18CCFC',
  middle: '#6344F5',
  end: '#AE48FF',
};

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return { count, ref };
}

// Stats Component - White style
function AnimatedStats() {
  const rooms = useCounter(10000, 2000);
  const seconds = useCounter(30, 1500);
  const satisfaction = useCounter(98, 1800);

  const stats = [
    { value: rooms.count, suffix: '+', label: 'Rooms Staged', ref: rooms.ref },
    { value: seconds.count, suffix: 's', label: 'Average Time', ref: seconds.ref },
    { value: satisfaction.count, suffix: '%', label: 'Satisfaction', ref: satisfaction.ref },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-12 md:gap-20">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.1 }}
          className="text-center"
        >
          <div className="text-4xl md:text-6xl font-black text-gray-900">
            <span ref={stat.ref}>{stat.value.toLocaleString()}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{stat.suffix}</span>
          </div>
          <div className="text-sm md:text-base text-gray-500 font-medium mt-2">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// Social Proof Avatars
function SocialProof() {
  const avatars = [
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/women/68.jpg',
    'https://randomuser.me/api/portraits/men/75.jpg',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex items-center justify-center gap-4"
    >
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Customer"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover"
          />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm font-bold text-gray-900 ml-1">4.9</span>
        </div>
        <span className="text-sm text-gray-500">from 2,000+ agents</span>
      </div>
    </motion.div>
  );
}

// Hero Content (appears after scroll expansion) - White Design with PulseBeams
function HeroContent() {
  return (
    <div className="bg-white">
      {/* Main Content Section with PulseBeams */}
      <div className="relative">
        <PulseBeams
          beams={ctaBeams}
          gradientColors={gradientColors}
          width={600}
          height={400}
          baseColor="#e2e8f0"
          accentColor="#cbd5e1"
          className="min-h-[600px]"
        >
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              AI-Powered Virtual Staging
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight"
            >
              Stage Any Room in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                30 Seconds
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Transform empty listings into stunning, fully-furnished spaces.
              Increase buyer interest by <strong className="text-gray-900">73%</strong> with AI-powered virtual staging.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-10"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Results in seconds</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href="https://virtual-staging.systemizemybiz.com/signup"
                className="group relative flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-bold shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all overflow-hidden"
              >
                {/* Glow effect */}
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-2">
                  Stage Your First Room Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#video"
                className="flex items-center justify-center gap-2 rounded-full h-14 px-8 text-gray-700 bg-white border-2 border-gray-200 text-lg font-bold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-lg"
              >
                <Play className="w-5 h-5" /> Watch Demo
              </a>
            </motion.div>

            {/* Social Proof */}
            <SocialProof />
          </div>
        </PulseBeams>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedStats />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Main Hero Component
const Hero: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={AFTER_IMAGE}
      bgImageSrc={BEFORE_IMAGE}
      title="Transform Empty Spaces"
      scrollToExpand="↓ Scroll to stage this room"
      textBlend
    >
      <HeroContent />
    </ScrollExpandMedia>
  );
};

export default Hero;
