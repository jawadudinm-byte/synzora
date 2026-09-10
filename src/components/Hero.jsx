import React from 'react';
import { ArrowRight, Code2, Cloud, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const handlePrimaryClick = (e) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
  };

  return (
    <section 
      className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-80px)] flex flex-col justify-between py-6 md:py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden text-white"
      style={{
        backgroundImage: `url('/hero-bg.png'), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      {/* DARK TINTED GRADIENT OVERLAY */}
      <div 
        className="absolute inset-0 bg-[#07213A]/85 backdrop-blur-[1px] pointer-events-none" 
        aria-hidden="true"
      />

      {/* Subtle ambient accent glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FA782B]/10 rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* 1. UPPER / MIDDLE HERO CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center my-auto pt-4">
        
        {/* OVERLINE PILL BADGE */}
        <div className="inline-block border border-orange-500/40 bg-black/40 text-orange-400 font-semibold text-xs tracking-wide px-3.5 py-1 mb-4 rounded-full shadow-sm backdrop-blur-sm">
          ⚡ ENTERPRISE SOFTWARE & CLOUD PLATFORMS
        </div>

        {/* MAIN HEADLINE (H1) */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 drop-shadow-md text-balance">
          Engineering Resilient Digital Systems for{' '}
          <span className="text-[#FA782B]">Global Scale</span>
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-2xl mx-auto mb-6 text-balance">
          Synzora designs and engineers scalable web platforms, intelligent data tools, and custom enterprise software. We eliminate fragmented processes and build production-grade applications that scale from day one.
        </p>

        {/* ACTION BUTTON ROW */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          
          {/* Primary Action Button */}
          <button
            type="button"
            onClick={handlePrimaryClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#FA782B] hover:bg-[#e6671d] rounded-lg shadow-lg shadow-[#FA782B]/20 hover:shadow-[#FA782B]/35 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
          >
            <span>Schedule Technical Discovery</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary Action Button */}
          <a
            href="#who-we-are"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg shadow-sm backdrop-blur-sm transition-all duration-200 cursor-pointer"
          >
            <span>View Capabilities</span>
          </a>

        </div>

      </div>

      {/* 2. BOTTOM ROW — 3 INTEGRATED FROSTED TECH GLASS CARDS */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        
        {/* CARD 1: Blue Left Accent Border */}
        <div className="bg-[#07213A]/75 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/15 border-l-4 border-l-blue-400 shadow-2xl hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-400 group-hover:text-[#07213A] transition-colors">
                <Code2 className="w-4 h-4" />
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <h3 className="text-white text-sm sm:text-base font-bold group-hover:text-blue-300 transition-colors">
              Web & Platform Engineering
            </h3>
            <p className="text-slate-300 text-xs mt-1 leading-snug">
              High-performance React & cloud platforms.
            </p>
          </div>
        </div>

        {/* CARD 2: Orange Left Accent Border */}
        <div className="bg-[#07213A]/75 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/15 border-l-4 border-l-[#FA782B] shadow-2xl hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-orange-500/10 text-[#FA782B] group-hover:bg-[#FA782B] group-hover:text-white transition-colors">
                <Cloud className="w-4 h-4" />
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#FA782B] transition-colors" />
            </div>
            <h3 className="text-white text-sm sm:text-base font-bold group-hover:text-[#FA782B] transition-colors">
              Cloud & Data Architecture
            </h3>
            <p className="text-slate-300 text-xs mt-1 leading-snug">
              Scalable APIs, relational schemas & resilient pipelines.
            </p>
          </div>
        </div>

        {/* CARD 3: Emerald Left Accent Border */}
        <div className="bg-[#07213A]/75 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/15 border-l-4 border-l-emerald-400 shadow-2xl hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#07213A] transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 transition-colors" />
            </div>
            <h3 className="text-white text-sm sm:text-base font-bold group-hover:text-emerald-300 transition-colors">
              Enterprise Solutions
            </h3>
            <p className="text-slate-300 text-xs mt-1 leading-snug">
              Custom business workflows, security & automated systems.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}
