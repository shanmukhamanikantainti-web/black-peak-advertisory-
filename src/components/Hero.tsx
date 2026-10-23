import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="studio" 
      className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-black select-none"
    >
      {/* 1. Fullscreen Background Video */}
      <video
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* 2. Blend Mode Overlay (mix-blend-difference automatically inverts text color on video glitches) */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between px-5 sm:px-10 lg:px-12 pb-8 sm:pb-12 pt-24 sm:pt-28 mix-blend-difference text-white pointer-events-none">
        
        {/* Top Minimal Strip */}
        <div className="w-full flex items-center justify-end font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase opacity-75">
          <span>EST. 2025</span>
        </div>

        {/* Central Monumental Inverting Title */}
        <div className="text-center flex flex-col items-center justify-center my-auto py-12 sm:py-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.75rem,13vw,14rem)] font-light leading-[0.9] tracking-[-0.03em] uppercase text-white"
          >
            BLACK PEAK
          </motion.h1>

          <p className="mt-4 sm:mt-6 font-mono text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white/90 text-center max-w-md sm:max-w-none">
            SOFTWARE STUDIO &amp; DIGITAL SYSTEMS
          </p>
        </div>

        {/* Bottom Direct CTA Only (Shortcuts removed as requested) */}
        <div className="w-full flex items-end justify-end pointer-events-auto">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-current bg-white text-black font-mono text-xs tracking-[0.2em] uppercase font-bold hover:bg-transparent hover:text-white transition-all duration-300"
          >
            <span>START PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
