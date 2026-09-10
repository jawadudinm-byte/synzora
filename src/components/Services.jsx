import React from 'react';
import {
  Code2,
  Database,
  Workflow,
  Zap,
  Lock,
  LineChart,
  ArrowRight,
  ChevronRight,
  Server,
  Layers
} from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0F172A] pt-16 lg:pt-24 pb-0">
      
      {/* 1. SECTION HEADER (White Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center space-x-2 justify-center">
            <span className="w-8 h-0.5 bg-[#FA782B]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FA782B]">
              OUR CAPABILITIES
            </span>
            <span className="w-8 h-0.5 bg-[#FA782B]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07213A] tracking-tight leading-tight">
            End-to-End Technology Solutions Built for Business Scale.
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            From initial architecture scoping to high-concurrency cloud deployments, we deliver precision engineering tailored to your operational demands.
          </p>

        </div>
      </div>

      {/* 2. 3-COLUMN CORE SERVICES GRID (White Surface with Colored Left Accents) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* CARD 1: Full-Stack Web Platforms */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-[#07213A] rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#07213A] flex items-center justify-center mb-6 group-hover:bg-[#07213A] group-hover:text-white transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#07213A] transition-colors">
                Full-Stack Web Platforms
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                High-speed, responsive applications built with React, modern state management, and optimized server-side rendering.
              </p>
            </div>

            <div>
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {['React', 'Next.js', 'Tailwind CSS', 'TypeScript'].map((pill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: Cloud & Database Architecture */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-[#FA782B] rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FA782B] flex items-center justify-center mb-6 group-hover:bg-[#FA782B] group-hover:text-white transition-colors">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#FA782B] transition-colors">
                Cloud & Database Architecture
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Relational database schema modeling, scalable API endpoints, and resilient cloud infrastructure design.
              </p>
            </div>

            <div>
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {['PostgreSQL', 'Supabase', 'REST APIs', 'Edge Functions'].map((pill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-orange-50/80 text-[#FA782B] border border-orange-200/60"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3: Intelligent Workflow Automation */}
          <div className="bg-white border border-slate-200 border-l-4 border-l-[#10B981] rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center mb-6 group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-emerald-700 transition-colors">
                Intelligent Workflow Automation
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                Custom integration pipelines, event-driven processes, and automated data synchronization between enterprise tools.
              </p>
            </div>

            <div>
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {['n8n', 'Webhooks', 'Automated Pipelines', 'Microservices'].map((pill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50/80 text-emerald-700 border border-emerald-200/60"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. MID-PAGE CONTRAST STRIP (Deep Navy Band - #07213A) */}
      <div className="bg-[#07213A] text-white py-16 lg:py-20 border-t border-b border-slate-800 relative overflow-hidden">
        
        {/* Subtle background ambient overlay */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header text inside Navy Band */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 px-3 py-1 rounded-full inline-block">
              ENTERPRISE SOLUTIONS
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Smart Technology Architectures Designed to Solve Complex Challenges.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We replace fragmented legacy tools with unified digital ecosystems that minimize technical debt.
            </p>
          </div>

          {/* Quick 3-Pillar Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Pillar 1: High Concurrency */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 backdrop-blur-md hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-[#FA782B]/10 text-[#FA782B]">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">⚡ High Concurrency</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered to handle traffic spikes, low latency API responses, and heavy concurrent data operations seamlessly.
              </p>
            </div>

            {/* Pillar 2: Enterprise Security */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 backdrop-blur-md hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">🔒 Enterprise Security</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Strict authentication patterns, role-based access control, data isolation, and security best practices.
              </p>
            </div>

            {/* Pillar 3: Scalable Architecture */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-6 backdrop-blur-md hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <LineChart className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">📈 Scalable Architecture</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Modular component design and cloud infrastructure that adapts as your user base and business expand.
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
