import React from 'react';

interface SectionLabelProps {
  number: string;
  roman?: string;
  title: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  roman,
  title,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#787774] uppercase mb-6 sm:mb-8 ${className}`}>
      <span className="text-[#A5A4A0]">/</span>
      {roman && (
        <span className="text-[#111111] font-semibold">{roman}</span>
      )}
      <span className="text-[#4A4A48]">{number}</span>
      <span className="w-8 h-[1px] bg-black/15 inline-block" />
      <span className="text-[#111111] font-medium">{title}</span>
    </div>
  );
};
