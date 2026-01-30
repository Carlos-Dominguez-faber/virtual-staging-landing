import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform opacity based on scroll.
  // We want the "after" image to fade in as we scroll down the hero section.
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  const beforeImage = "https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f05d0f4e6bc075c834.png";
  const afterImage = "https://storage.googleapis.com/msgsndr/9WsKwTMFwsyqE4fExicP/media/68f7e4f0ec31a1dcb57ddff8.png";

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            style={{ y: yText }}
            className="flex flex-col gap-8 lg:w-1/2"
          >
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 w-fit rounded-full text-xs font-bold text-blue-600 tracking-wider uppercase border border-blue-100"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span> 
                New AI Engine v4.0
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-900 text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
              >
                Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Empty Rooms</span> Into Stunning Spaces
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-[540px]"
              >
                The future of real estate is here. Scroll to see the magic. AI-powered virtual staging that converts listings in seconds.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://virtual-staging.systemizemybiz.com/signup" className="flex items-center justify-center gap-2 rounded-full h-14 px-8 bg-blue-600 text-white text-lg font-bold shadow-xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
                Start Free Trial <ArrowRight size={20} />
              </a>
              <a href="#video" className="flex items-center justify-center gap-2 rounded-full h-14 px-8 text-slate-700 bg-white border border-slate-200 text-lg font-bold hover:bg-slate-50 transition-all">
                <PlayCircle size={20} /> Watch Demo
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Scroll Animation */}
          <div className="w-full lg:w-1/2 relative perspective-1000">
             {/* Decor */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-purple-50 rounded-[2rem] blur-3xl opacity-60"></div>
            
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 transform rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Background: Empty Room */}
              <img 
                src={beforeImage}
                alt="Empty Room" 
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Foreground: Furnished Room (Controlled by scroll) */}
              <motion.div 
                style={{ opacity }}
                className="absolute inset-0 w-full h-full"
              >
                <img 
                  src={afterImage}
                  alt="Furnished Room" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50">
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Style</p>
                   <p className="text-sm font-bold text-slate-900">Scandi Modern</p>
                </div>
              </motion.div>

              {/* Mobile hint */}
              <div className="absolute top-4 right-4 lg:hidden bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
                Scroll to furnish
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;