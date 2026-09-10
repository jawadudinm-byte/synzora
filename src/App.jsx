import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import ProjectShowcase from './components/ProjectShowcase';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import { Globe, Database, Cpu } from 'lucide-react';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] flex flex-col antialiased selection:bg-blue-600 selection:text-white relative">
      
      {/* 1. DEEP NAVY NAVBAR */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* 2. FULL-VIEWPORT HERO FOLD WITH DOCKED FROSTED TECH GLASS CARDS */}
      <Hero onOpenContact={handleOpenContact} />

      {/* 3. WHO WE ARE SECTION (PURE WHITE CANVAS WITH TRUST METRICS STRIP AT TOP) */}
      <WhoWeAre />

      {/* 4. PROOF OF CAPABILITY - PROJECT SHOWCASE */}
      <ProjectShowcase onOpenContact={handleOpenContact} />

      {/* 5. SERVICES SECTION & MID-PAGE NAVY CONTRAST BAND */}
      <Services />

      {/* 6. UNIFIED PRE-FOOTER CTA & MULTI-COLUMN ENTERPRISE FOOTER */}
      <Footer onOpenContact={handleOpenContact} />

      {/* 7. INTERACTIVE CONTACT & TECHNICAL DISCOVERY MODAL */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

    </div>
  );
}
