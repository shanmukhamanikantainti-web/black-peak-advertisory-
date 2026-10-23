import React from 'react';
import { navigationItems, socialLinks } from '../data/navigation';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#ffffff] text-[#333333] border-t border-black/10 pt-20 pb-16">
      <div className="site-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 flex items-center justify-center border border-black/30 bg-white">
                  <svg 
                    className="w-4 h-4 text-black" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polygon points="12 3 21 20 3 20" />
                    <line x1="12" y1="3" x2="12" y2="20" strokeDasharray="2 2" strokeWidth="1" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-[0.16em] text-[#000000] font-semibold leading-none">
                    BLACKPEAK
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#666666]">
                    STUDIO
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-[#333333] max-w-sm leading-relaxed font-normal">
                Digital products, software systems and technology solutions for ambitious ideas. Engineered with architectural discipline, classical restraint, and computational rigor.
              </p>
            </div>

            <div className="mt-8 font-mono text-[10px] tracking-[0.25em] text-[#666666] uppercase font-medium">
              CHENNAI — WORLDWIDE // TIMELESS ARCHITECTURE
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#000000] uppercase mb-6 pb-2 border-b border-black/10 font-semibold">
              INDEX // DIRECTORY
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 font-mono text-xs tracking-wider">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-black transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="text-[#999999] text-[10px] group-hover:text-black">
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.25em] text-[#000000] uppercase mb-6 pb-2 border-b border-black/10 font-semibold">
                DISPATCH // NETWORKS
              </h4>
              <ul className="flex flex-col gap-3 font-mono text-xs tracking-wider">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#333333] hover:text-black transition-colors group font-medium"
                    >
                      <span>{social.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[#666666] hover:text-black uppercase transition-colors font-medium"
              >
                <span>TOP OF MONOGRAPH</span>
                <span className="w-4 h-[1px] bg-black/20 group-hover:w-6 transition-all" />
                <span>↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Intent */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] tracking-[0.2em] text-[#666666]">
          <div>
            © 2026 BLACKPEAK STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="text-[#000000] font-semibold">
            BUILT WITH INTENT.
          </div>
        </div>
      </div>
    </footer>
  );
};
