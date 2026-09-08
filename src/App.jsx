import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import OtherProjects from './components/OtherProjects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const sections = [
    { component: <Hero />, id: 'hero' },
    { component: <SelectedWork />, id: 'work-sec' },
    { component: <OtherProjects />, id: 'other-sec' },
    { component: <AboutMe />, id: 'aboutme-sec' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#171717] selection:bg-[#433FE5] selection:text-white font-['Instrument_Sans','Inter',sans-serif] relative overflow-x-hidden">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative pt-0">
        {sections.map((sec) => (
          <div key={sec.id} className="w-full border-dashed-wide bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto border-x-dashed-wide">
              {sec.component}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <div className="w-full bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto border-x-dashed-wide">
          <Footer onOpenResume={() => setIsResumeOpen(true)} />
        </div>
      </div>

      {/* Interactive Resume View Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      {/* Vercel Analytics & Performance Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
