import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from './SectionLabel';

export const Approach: React.FC = () => {
  const steps = [
    {
      num: '01',
      roman: 'I',
      title: 'DISCOVER',
      summary: 'Understand the problem, users and goals.',
      details: 'Uncompromising problem decomposition, requirement formalization, and boundary condition analysis.',
    },
    {
      num: '02',
      roman: 'II',
      title: 'STRATEGIZE',
      summary: 'Define the right technology and product direction.',
      details: 'Architectural blueprints, tech-stack evaluation, database modeling, and interface ergonomics.',
    },
    {
      num: '03',
      roman: 'III',
      title: 'BUILD',
      summary: 'Design and develop with precision.',
      details: 'Type-safe codebase construction, CI/CD pipeline automation, and surgical component implementation.',
    },
    {
      num: '04',
      roman: 'IV',
      title: 'LAUNCH',
      summary: 'Deploy, test and refine.',
      details: 'Hardening, security verification, automated load benchmarking, and smooth zero-downtime deployment.',
    },
    {
      num: '05',
      roman: 'V',
      title: 'GROW',
      summary: 'Iterate and scale.',
      details: 'Telemetry monitoring, user feedback loop integration, performance optimization, and modular scaling.',
    },
  ];

  return (
    <section id="approach" className="relative py-24 sm:py-36 lg:py-48 border-b border-black/10 bg-[#ffffff]">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 lg:mb-28">
          <SectionLabel number="04" roman="IV" title="OUR APPROACH" />
          <h2 className="font-serif text-[clamp(2.15rem,5.39vw,4.41rem)] font-light leading-[1.05] tracking-[-0.02em] uppercase text-[#000000]">
            FROM IDEA <br />
            <span className="italic font-normal">TO IMPACT.</span>
          </h2>
        </div>

        {/* Timeline Component — Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Axis */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[1px] bg-black/20" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col pt-0 lg:pt-14"
              >
                {/* Marker Node */}
                <div className="flex items-center gap-4 mb-4 lg:mb-0">
                  <div className="relative flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border border-black/40 bg-white flex items-center justify-center group-hover:scale-125 group-hover:border-black transition-all duration-300 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-black group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  {/* Mobile connector text */}
                  <span className="lg:hidden font-mono text-xs tracking-widest text-[#666666]">
                    STAGE // {step.roman}
                  </span>
                </div>

                {/* Content Details */}
                <div className="border-l-2 lg:border-l-0 pl-6 lg:pl-0 border-black/10 mt-3 lg:mt-6">
                  <div className="font-mono text-xs tracking-[0.2em] text-[#666666] mb-2 font-medium">
                    {step.num} — {step.roman}
                  </div>
                  <h3 className="font-sans text-base font-semibold tracking-[0.16em] uppercase text-[#000000] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-[#000000] font-medium leading-relaxed mb-3">
                    {step.summary}
                  </p>
                  <p className="font-sans text-xs text-[#333333] leading-relaxed font-normal">
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
