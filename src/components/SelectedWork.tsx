import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { projects } from '../data/projects';
import greekCollageImg from '../assets/greek-collage.avif';
import { ArrowUpRight } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="relative py-24 sm:py-36 lg:py-48 border-b border-black/10 bg-[#ffffff] overflow-hidden">
      <div className="site-container">
        
        {/* Top Section Label */}
        <div className="mb-6 sm:mb-10">
          <SectionLabel number="03" roman="III" title="SELECTED WORK" />
        </div>

        {/* 1. Main Title: Centered Normal/Light Text Occupying Full Width from Left to Right */}
        <div className="w-full text-center border-b border-black/15 pb-8 sm:pb-14 mb-12 sm:mb-20 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.1rem,7.35vw,6.37rem)] font-light tracking-tight text-[#000000] uppercase leading-[0.98] w-full"
          >
            REAL PROBLEMS. REAL SOLUTIONS.
          </motion.h2>
        </div>

        {/* 2. Two-Column Layout: Left Projects List + Right Greek Statue Collage Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column: Projects with Title + One-Line Explanation + Spacing */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="divide-y divide-black/15 border-t border-b border-black/15">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group py-7 sm:py-9 px-2 hover:bg-[#fafafa] transition-colors duration-200 cursor-default"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      <span className="font-mono text-xs sm:text-sm text-[#888888] tracking-widest font-medium">
                        {project.number} // {project.romanNumeral}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#000000] group-hover:translate-x-1 transition-transform duration-200">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest uppercase text-[#888888] px-2 py-0.5 border border-black/10">
                        {project.year}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </div>

                  {/* One-Line Clear Explanation */}
                  <p className="font-sans text-sm sm:text-base text-[#333333] font-normal leading-relaxed pl-8 sm:pl-10">
                    {project.tagline}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Greek Statue Collage Artwork in Architectural Blueprint Frame (Decreased by 3%) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[445px] border border-black/20 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] group"
            >
              {/* Inner Architectural Frame */}
              <div className="relative aspect-[4/5] w-full border border-black/15 overflow-hidden bg-[#fafafa] flex items-center justify-center">
                <img
                  src={greekCollageImg}
                  alt="Greek Statue Collage Artwork — BlackPeak Studio"
                  className="w-full h-full object-cover filter contrast-125 brightness-100 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle blueprint overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Corner measurement ticks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/70" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black/70" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black/70" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/70" />

                {/* Micro Technical Notations */}
                <div className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-black bg-white/90 px-1.5 py-0.5 border border-black/15">
                  FIG. III — ARCHETYPAL COLLAGE
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-widest text-black bg-white/90 px-1.5 py-0.5 border border-black/15">
                  SELECTED MONOGRAPH
                </div>
              </div>

              {/* Bottom Frame Detail */}
              <div className="pt-3 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-[#666666] uppercase">
                <span>STRUCTURAL SYNTHESIS</span>
                <span>PRODUCTION ARCHITECTURE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
