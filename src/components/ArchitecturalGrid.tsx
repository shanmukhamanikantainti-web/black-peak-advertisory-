import React from 'react';
import greekStatueImg from '../assets/greek-statue.jpg';

interface ArchitecturalGridProps {
  variant?: 'hero' | 'subtle' | 'columns' | 'arch' | 'circles';
  className?: string;
}

export const ArchitecturalGrid: React.FC<ArchitecturalGridProps> = ({
  variant = 'subtle',
  className = '',
}) => {
  if (variant === 'hero') {
    return (
      <div className={`relative w-full h-full min-h-[460px] select-none flex items-center justify-center ${className}`}>
        {/* Outer Architectural Blueprint Frame on Ivory Cream Paper */}
        <div className="relative w-[340px] h-[380px] sm:w-[440px] sm:h-[490px] border border-black/20 bg-[#F4F0E6] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
          
          {/* Subtle blueprint grid overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-10 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Greek Classical Statue Artwork */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={greekStatueImg}
              alt="Classical Greek Editorial Bust — BlackPeak Studio"
              className="w-full h-full object-contain filter contrast-125 brightness-95 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Architectural Axis Overlay Lines */}
          <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-black/10 pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/15 pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 right-1/4 w-[1px] bg-black/10 pointer-events-none z-20" />
          <div className="absolute left-0 right-0 top-1/3 h-[1px] bg-black/10 pointer-events-none z-20" />
          <div className="absolute left-0 right-0 top-2/3 h-[1px] bg-black/10 pointer-events-none z-20" />

          {/* Corner measurement ticks */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-black/70 z-20" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-black/70 z-20" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-black/70 z-20" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-black/70 z-20" />

          {/* Micro Blueprint Technical Notations */}
          <div className="absolute top-2.5 left-3 font-mono text-[9px] tracking-widest text-[#111111] z-20 bg-[#F9F7F1]/90 px-1.5 py-0.5 border border-black/15">
            FIG. I — AXIS // 37°58&apos;N
          </div>
          <div className="absolute top-2.5 right-3 font-mono text-[9px] tracking-widest text-[#4A4A48] z-20 bg-[#F9F7F1]/90 px-1.5 py-0.5 border border-black/15">
            Φ = 1.618
          </div>
          <div className="absolute bottom-2.5 left-3 font-mono text-[9px] tracking-widest text-[#4A4A48] z-20 bg-[#F9F7F1]/90 px-1.5 py-0.5 border border-black/15">
            SEC. α / CLASSICAL ARCHETYPES
          </div>
          <div className="absolute bottom-2.5 right-3 font-mono text-[9px] tracking-widest text-[#111111] z-20 bg-[#F9F7F1]/90 px-1.5 py-0.5 border border-black/15">
            VER. 2026.1
          </div>
        </div>

        {/* Outer intersecting guideline extending outside frame */}
        <div className="absolute -left-8 -right-8 top-1/2 h-[1px] bg-black/10 hidden sm:block pointer-events-none" />
        <div className="absolute -top-8 -bottom-8 left-1/2 w-[1px] bg-black/10 hidden sm:block pointer-events-none" />
      </div>
    );
  }

  if (variant === 'columns') {
    return (
      <div className={`relative w-full h-full min-h-[160px] flex items-center justify-center p-6 border border-black/10 bg-[#F4F0E6] ${className}`}>
        <div className="w-full h-full flex justify-between items-end gap-2 border-b border-black/20 pb-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div 
                className="w-full border-t border-l border-r border-black/25 rounded-t-sm bg-black/5"
                style={{ height: `${30 + (i % 3) * 20}%` }}
              />
              <div className="w-1.5 h-1.5 rounded-full border border-black/40" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'arch') {
    return (
      <div className={`relative w-full h-full min-h-[160px] flex items-center justify-center p-4 border border-black/10 bg-[#F4F0E6] ${className}`}>
        <div className="relative w-28 h-28 border-t border-l border-r border-black/30 rounded-t-full flex items-center justify-center">
          <div className="w-20 h-20 border-t border-l border-r border-black/20 rounded-t-full flex items-center justify-center">
            <div className="w-12 h-12 border-t border-l border-r border-black/40 rounded-t-full" />
          </div>
          <div className="absolute bottom-0 w-full h-[1px] bg-black/30" />
          <div className="absolute -bottom-2 font-mono text-[8px] tracking-widest text-[#787774]">PROPORTION : IV</div>
        </div>
      </div>
    );
  }

  if (variant === 'circles') {
    return (
      <div className={`relative w-full h-full min-h-[160px] flex items-center justify-center p-4 border border-black/10 bg-[#F4F0E6] ${className}`}>
        <div className="relative w-28 h-28 rounded-full border border-black/25 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border border-black/15 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full border border-black/35" />
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/20" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-black/20" />
        </div>
      </div>
    );
  }

  // Default subtle background grid on ivory paper
  return (
    <div 
      aria-hidden="true" 
      className={`pointer-events-none absolute inset-0 opacity-40 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  );
};
