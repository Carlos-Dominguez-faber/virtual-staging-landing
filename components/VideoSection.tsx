'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import ShaderBackground from './ui/shader-background';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video" className="relative py-24 overflow-hidden bg-slate-50">
      {/* Full-width Shader Background */}
      <div className="absolute inset-0 z-0">
        <ShaderBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            Watch the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Magic
            </span>{' '}
            Happen
          </h3>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See how our AI transforms empty rooms into beautifully staged spaces in seconds
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

          {/* Video Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
            <div className="aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://lh3.googleusercontent.com/aida-public/AB6AXuD1PMheIa_0XEFJRKpdk8mIERH0yJ986bmo1krwFLp4nbOZybc6uS1Y4OxXQ-4pROW9HAYxbk_JNZc459n-oq5DE6ebOVHG7TSJ15Fq-HMrRQebiPH4I3XLywl64ch-HAQR5dBYCFrnINXMQ8Tq9A29W05QDH2237qDe3mpFrHvFaI0X1dZwliyTdtKeYK1zreKPpwn8bXpO9bQvELiv64D8AwAmfMsBpJnKEodAu_N5jZl0bUVItFN7SffgoBv-mzXvfeLPc0Ts00"
              >
                <source src="https://storage.googleapis.com/msgsndr/bfilCH1kUaWjdh22WREh/media/6969259ae4cf742b9b12dc94.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Cinematic Overlay */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />

              {/* Custom Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </button>
              </div>

              {/* Bottom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest">
              Real-time AI rendering preview
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-blue-500/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-purple-500/10 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-indigo-500/10 rounded-full animate-pulse" />
    </section>
  );
};

export default VideoSection;
