import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

export const Impact: React.FC = () => {
  const stats = [
    {
      value: '50+',
      label: 'PROJECTS DELIVERED',
      description: 'End-to-end applications, architectures, and automated platforms deployed to production.',
    },
    {
      value: '20+',
      label: 'ACTIVE PARTNERS',
      description: 'Students, startups, venture builders, and institutional partners trusting our craftsmanship.',
    },
    {
      value: '10+',
      label: 'TECHNICAL DOMAINS',
      description: 'Spanning AI/LLM pipelines, edge vision, clinical telemetry, distributed cloud, and systems.',
    },
    {
      value: '100%',
      label: 'COMMITMENT TO INTENT',
      description: 'Zero boilerplate shortcuts. Every line of code and interface element is strictly purposeful.',
    },
  ];

  return (
    <section id="impact" className="relative py-24 sm:py-32 border-b border-black/10 bg-[#fafafa]">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <SectionLabel number="04" roman="IV" title="OUR IMPACT" />
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.05] tracking-[-0.02em] uppercase text-[#000000]">
            GROWING IDEAS. <br />
            <span className="italic font-normal">CREATING IMPACT.</span>
          </h2>
        </div>

        {/* Impact Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-black/10 bg-[#ffffff] shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 sm:p-10 border-r border-b border-black/10 flex flex-col justify-between min-h-[260px] group hover:bg-[#fafafa] transition-colors"
            >
              <div className="font-serif text-5xl sm:text-6xl font-light text-[#000000] tracking-tight mb-6 group-hover:scale-[1.02] origin-left transition-transform duration-300">
                {stat.value}
              </div>

              <div>
                <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-[#000000] font-semibold mb-3">
                  {stat.label}
                </h3>
                <p className="font-sans text-xs text-[#333333] leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
