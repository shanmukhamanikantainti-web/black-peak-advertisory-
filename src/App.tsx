import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { Approach } from './components/Approach';
import { WhyBlackPeak } from './components/WhyBlackPeak';
import { CTA } from './components/CTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#000000] relative selection:bg-[#000000] selection:text-[#ffffff]">
      {/* Global Architectural Frame Borders */}
      <div className="fixed top-0 bottom-0 left-0 w-[1px] bg-black/[0.08] pointer-events-none z-40 hidden xl:block" />
      <div className="fixed top-0 bottom-0 right-0 w-[1px] bg-black/[0.08] pointer-events-none z-40 hidden xl:block" />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <Approach />
        <WhyBlackPeak />
        <CTA />
      </main>
    </div>
  );
};

export default App;
