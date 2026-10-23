import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#ffffff]/95 backdrop-blur-md border-b border-black/10 py-3 text-black shadow-sm'
          : 'bg-transparent py-6 text-white mix-blend-difference'
      }`}
    >
      <div className="site-container flex items-center justify-between">
        {/* Left: Minimal Clean Brand Mark */}
        <a 
          href="#studio" 
          className="group flex items-center gap-3 no-underline focus:outline-none"
        >
          <div className="w-6 h-6 flex items-center justify-center border border-current">
            <svg 
              className="w-3.5 h-3.5 fill-none stroke-current" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="12 3 21 20 3 20" />
            </svg>
          </div>
          <span className="font-serif text-lg tracking-[0.2em] font-medium leading-none">
            BLACK PEAK
          </span>
        </a>

        {/* Center: Clean Spaced Navigation */}
        <nav className="hidden md:flex items-center gap-10 font-mono text-xs tracking-[0.22em] uppercase">
          <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
            SERVICES
          </a>
          <a href="#work" className="opacity-80 hover:opacity-100 transition-opacity">
            WORK
          </a>
          <a href="#approach" className="opacity-80 hover:opacity-100 transition-opacity">
            APPROACH
          </a>
          <a href="#why" className="opacity-80 hover:opacity-100 transition-opacity">
            WHY US
          </a>
        </nav>

        {/* Right: Direct CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2 border border-current font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-current hover:text-black transition-all duration-300"
          >
            <span>LET&apos;S BUILD</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 border border-current focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white text-black border-b border-black/15 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm tracking-[0.2em] uppercase text-[#333333] hover:text-black"
          >
            SERVICES
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm tracking-[0.2em] uppercase text-[#333333] hover:text-black"
          >
            WORK
          </a>
          <a
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm tracking-[0.2em] uppercase text-[#333333] hover:text-black"
          >
            APPROACH
          </a>
          <a
            href="#why"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm tracking-[0.2em] uppercase text-[#333333] hover:text-black"
          >
            WHY US
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-3 border border-black bg-black text-white font-mono text-xs tracking-[0.2em] uppercase font-semibold"
          >
            <span>LET&apos;S BUILD</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
