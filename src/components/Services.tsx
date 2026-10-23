import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
import { services } from '../data/services';
import classicalLineHeadImg from '../assets/classical-line-head.jpg';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-36 sm:py-48 border-b border-black/10 bg-[#ffffff] overflow-hidden">
      <div className="site-container">
        {/* Top Minimal Section Indicator */}
        <div className="mb-14 sm:mb-16">
          <SectionLabel number="02" roman="II" title="CAPABILITIES" />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          
          {/* Left Portion: Classical Line Art Male Head in Architectural Frame (Decreased by 3%) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[425px] border border-black/20 bg-[#ffffff] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group"
            >
              {/* Inner Architectural Blueprint Frame */}
              <div className="relative aspect-[3/4] w-full border border-black/15 overflow-hidden bg-[#fafafa] flex items-center justify-center">
                <img
                  src={classicalLineHeadImg}
                  alt="Classical Greek Line Art Male Head Illustration"
                  className="w-full h-full object-contain filter contrast-125 brightness-100 transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle blueprint grid overlay */}
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
                  FIG. II — CLASSICAL FORM
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-widest text-black bg-white/90 px-1.5 py-0.5 border border-black/15">
                  37°58&apos;N // ATHENS
                </div>
              </div>

              {/* Bottom Frame Detail */}
              <div className="pt-3 flex items-center justify-between font-mono text-[9px] tracking-[0.25em] text-[#666666] uppercase">
                <span>CANON OF PROPORTIONS</span>
                <span>POLYKLEITOS // DORYPHOROS</span>
              </div>
            </motion.div>
          </div>

          {/* Right Portion: Heading on Top & Domain List (No Explanations) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Right Side Monumental Heading (Decreased by 2%) */}
              <h2 className="font-serif text-[clamp(2.45rem,5.88vw,4.7rem)] font-light leading-[1.0] tracking-[-0.03em] uppercase text-[#000000] mb-12">
                DIGITAL <br />
                SOLUTIONS <br />
                <span className="italic font-normal">THAT MATTER.</span>
              </h2>

              {/* Domains Grid — Clean List Only (No Explanations) */}
              <div className="border-t border-black/15 divide-y divide-black/10">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="group py-5 sm:py-6 flex items-center justify-between hover:bg-[#fafafa] px-3 transition-colors duration-200 cursor-default"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-[#888888] tracking-widest">
                        {service.number} // {service.romanNumeral}
                      </span>
                      <h3 className="font-sans text-base sm:text-lg font-semibold tracking-[0.14em] uppercase text-[#000000] group-hover:translate-x-1 transition-transform duration-200">
                        {service.title}
                      </h3>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
