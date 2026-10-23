import React from 'react';
import { SectionLabel } from './SectionLabel';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {

  return (
    <section 
      id="contact" 
      className="relative overflow-hidden bg-[#ffffff] pt-24 sm:pt-36 lg:pt-44 pb-32 sm:pb-48 lg:pb-64"
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px),
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          
          {/* Left Column: Main Title (Decreased by 2%) */}
          <div className="lg:col-span-7">
            <SectionLabel number="06" roman="VI" title="COLLABORATION" />

            <h2 className="font-serif text-[clamp(2.74rem,6.37vw,5.39rem)] font-light leading-[1.0] tracking-[-0.03em] uppercase text-[#000000] mt-4">
              YOUR NEXT <br />
              CHAPTER <br />
              <span className="italic font-normal">STARTS HERE.</span>
            </h2>
          </div>

          {/* Right Column: Only Three Clean Shortcuts */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center">
            <div className="border-t border-black/15 divide-y divide-black/15 font-mono">
              
              {/* Shortcut 1: WhatsApp */}
              <a
                href="https://wa.me/917013118455"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-6 px-4 hover:bg-black hover:text-white transition-all duration-300 gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-[#888888] group-hover:text-neutral-400">01 //</span>
                  <span className="text-base sm:text-lg font-bold tracking-[0.2em] uppercase">
                    WHATSAPP
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 text-xs tracking-widest opacity-70 group-hover:opacity-100 pl-8 sm:pl-0">
                  <span>+91 70131 18455</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </div>
              </a>

              {/* Shortcut 2: Instagram */}
              <a
                href="https://www.instagram.com/blackpeakstd?rpxt=dGdtaWQ1MWZlbzdp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-6 px-4 hover:bg-black hover:text-white transition-all duration-300 gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-[#888888] group-hover:text-neutral-400">02 //</span>
                  <span className="text-base sm:text-lg font-bold tracking-[0.2em] uppercase">
                    INSTAGRAM
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 text-xs tracking-widest opacity-70 group-hover:opacity-100 pl-8 sm:pl-0">
                  <span>@BLACKPEAKSTD</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </div>
              </a>

              {/* Shortcut 3: Contact (Dial Pad) */}
              <a
                href="tel:8466834845"
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 sm:py-6 px-4 hover:bg-black hover:text-white transition-all duration-300 border-b border-black/15 gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] text-[#888888] group-hover:text-neutral-400">03 //</span>
                  <span className="text-base sm:text-lg font-bold tracking-[0.2em] uppercase">
                    CONTACT
                  </span>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-2 text-xs tracking-widest opacity-70 group-hover:opacity-100 pl-8 sm:pl-0">
                  <span>84668 34845</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
