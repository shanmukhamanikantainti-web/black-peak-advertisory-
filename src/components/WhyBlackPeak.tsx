import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import greekEngravingHeadImg from '../assets/greek-engraving-head.avif';

export const WhyBlackPeak: React.FC = () => {
  const pillars = [
    {
      num: '01 // I',
      title: 'PRODUCT THINKING',
      statement: "We don't just write code. We solve real problems with commercial clarity.",
    },
    {
      num: '02 // II',
      title: 'END-TO-END DELIVERY',
      statement: 'From conception to deployment, interface and architecture work as one.',
    },
    {
      num: '03 // III',
      title: 'TAILORED SYSTEMS',
      statement: 'Bespoke high-performance engineering designed around actual business mechanics.',
    },
    {
      num: '04 // IV',
      title: 'STUDENT-FIRST MINDSET',
      statement: 'Empowering ambitious builders and students to learn by shipping real production software.',
    },
  ];

  return (
    <section 
      id="why" 
      className="relative border-b border-black/10 bg-[#ffffff] overflow-hidden"
      style={{ paddingTop: '120px', paddingBottom: '200px' }}
    >
      <div className="site-container">
        
        {/* Section Label */}
        <div className="mb-14 sm:mb-16">
          <SectionLabel number="05" roman="V" title="PHILOSOPHY" />
        </div>

        {/* 3-Column Architectural Row: Content (Left) | Image (Middle) | Title (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: Content Pillars (4 Cols) */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center">
            <div className="divide-y divide-black/15 border-t border-b border-black/15">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group py-4 sm:py-5 px-1 hover:bg-[#fafafa] transition-colors duration-200 cursor-default"
                >
                  <div className="flex items-baseline gap-2.5 mb-1">
                    <span className="font-mono text-[11px] text-[#888888] tracking-widest font-medium">
                      {pillar.num}
                    </span>
                    <h3 className="font-sans text-xs sm:text-sm font-bold tracking-[0.14em] uppercase text-[#000000] group-hover:translate-x-1 transition-transform duration-200">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-[#444444] font-normal leading-relaxed pl-5 sm:pl-6">
                    {pillar.statement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* MIDDLE: Space with Engraved Greek Sculpture Head (Decreased by 3%) */}
          <div className="lg:col-span-3 order-3 lg:order-2 w-full flex justify-center py-4 lg:py-0 px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[232px] border border-black/20 bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group shrink-0"
            >
              {/* Inner Architectural Frame */}
              <div className="relative aspect-[3/4] w-full border border-black/15 overflow-hidden bg-[#fafafa] flex items-center justify-center">
                <img
                  src={greekEngravingHeadImg}
                  alt="Greek Sculpture Hand-Drawn Engraving Style Sketch"
                  className="w-full h-full object-contain filter contrast-125 brightness-100 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle blueprint overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Corner measurement ticks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black/70" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-black/70" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-black/70" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black/70" />

                {/* Micro Technical Notations */}
                <div className="absolute top-2 left-2 font-mono text-[8px] tracking-widest text-black bg-white/95 px-1 py-0.5 border border-black/15">
                  FIG. IV // ARCHETYPE
                </div>
                <div className="absolute bottom-2 right-2 font-mono text-[8px] tracking-widest text-black bg-white/95 px-1 py-0.5 border border-black/15">
                  BLACKPEAK
                </div>
              </div>

              {/* Bottom Frame Detail */}
              <div className="pt-2 flex items-center justify-between font-mono text-[8px] tracking-[0.2em] text-[#666666] uppercase">
                <span>INTELLECT</span>
                <span>CRAFTSMANSHIP</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Main Title (Decreased by 2%) */}
          <div className="lg:col-span-5 order-1 lg:order-3 w-full flex flex-col justify-center items-start lg:items-end text-left lg:text-right pl-0 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-start lg:items-end"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] text-[#888888] uppercase mb-2">
                CORE PHILOSOPHY
              </div>
              <h2 className="font-serif text-[clamp(2.15rem,3.72vw,4.11rem)] font-light tracking-tight text-[#000000] uppercase leading-[1.05] break-words">
                MORE THAN<br />DEVELOPMENT.
              </h2>
              <div className="mt-5 flex lg:justify-end">
                <div className="h-px w-20 bg-black/40" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
