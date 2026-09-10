import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Globe,
  Database,
  Workflow,
  Server,
  Activity,
  Layers,
  BarChart3,
  Cpu,
  Boxes,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrollIndex, setScrollIndex] = useState(0);

  const projects = [
    {
      id: 1,
      category: 'Enterprise Platform',
      categoryBadgeBg: 'bg-[#07213A] text-white',
      title: 'Global Supply & Logistics Platform',
      description: 'Engineered a high-concurrency routing and operations platform with real-time state management and zero data lag.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      metrics: '2.4M Ops/sec • 99.99% Uptime',
      previewType: 'logistics',
      gradient: 'from-slate-900 via-[#07213A] to-blue-950',
      accentColor: '#07213A'
    },
    {
      id: 2,
      category: 'Decision Intelligence',
      categoryBadgeBg: 'bg-[#FA782B] text-white',
      title: 'Automated Data & Workflow Engine',
      description: 'Unified fragmented enterprise databases into an event-driven analytics pipeline with automated anomaly detection.',
      tags: ['Python', 'FastAPI', 'n8n Pipelines', 'Supabase'],
      metrics: '< 45ms Query Latency • 100k Webhooks/hr',
      previewType: 'analytics',
      gradient: 'from-slate-900 via-stone-900 to-amber-950',
      accentColor: '#FA782B'
    },
    {
      id: 3,
      category: 'SaaS Operations',
      categoryBadgeBg: 'bg-emerald-600 text-white',
      title: 'Dynamic Inventory & B2B Marketplace',
      description: 'Scalable multi-tenant marketplace platform with real-time stock sync, role-based controls, and automated reporting.',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'REST APIs'],
      metrics: '500+ Active Vendors • Sub-second Sync',
      previewType: 'marketplace',
      gradient: 'from-slate-900 via-emerald-950 to-slate-950',
      accentColor: '#10B981'
    }
  ];

  const handleNext = () => {
    setScrollIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setScrollIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="our-work" className="bg-[#FFFFFF] text-[#0F172A] py-16 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION HEADER WITH TOP-RIGHT CAROUSEL CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            
            {/* Overline */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-[#FA782B]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA782B]">
                PROOF OF CAPABILITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07213A] tracking-tight leading-tight">
              Real Projects. Real Innovation.
            </h2>

            {/* Subtitle */}
            <p className="text-base text-[#475569] leading-relaxed">
              Explore engineered platforms, production-ready systems, and scalable digital architectures delivered with precision.
            </p>
          </div>

          {/* Top-Right Circular Navigation Buttons */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={handlePrev}
              type="button"
              className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 hover:border-slate-400 text-slate-700 hover:text-[#07213A] transition-colors focus:outline-none shadow-sm"
              aria-label="Previous Projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="p-3 rounded-full border border-slate-300 hover:bg-slate-100 hover:border-slate-400 text-slate-700 hover:text-[#07213A] transition-colors focus:outline-none shadow-sm"
              aria-label="Next Projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. 3-CARD SHOWCASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                
                {/* PREVIEW AREA (HIGH-TECH MOCKUP / VISUAL BANNER) */}
                <div className={`h-48 bg-gradient-to-br ${proj.gradient} relative overflow-hidden p-5 flex flex-col justify-between border-b border-slate-800`}>
                  
                  {/* Decorative Background Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                  {/* Top Bar: Category Badge & Status Indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-sm ${proj.categoryBadgeBg}`}>
                      {proj.category}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-700/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live Production
                    </span>
                  </div>

                  {/* Center Visual Graphics Preview */}
                  <div className="relative z-10 my-auto pt-2">
                    {proj.previewType === 'logistics' && (
                      <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 font-mono text-xs text-slate-300 shadow-inner flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-semibold">global_routing_v2.ts</span>
                        </div>
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">2.4M msg/s</span>
                      </div>
                    )}

                    {proj.previewType === 'analytics' && (
                      <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 font-mono text-xs text-slate-300 shadow-inner flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-[#FA782B]" />
                          <span className="text-white font-semibold">n8n_event_pipeline</span>
                        </div>
                        <span className="text-[10px] text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded">&lt;45ms Latency</span>
                      </div>
                    )}

                    {proj.previewType === 'marketplace' && (
                      <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 font-mono text-xs text-slate-300 shadow-inner flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Boxes className="w-4 h-4 text-emerald-400" />
                          <span className="text-white font-semibold">saas_multi_tenant</span>
                        </div>
                        <span className="text-[10px] text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded">500+ Vendors</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Metrics Bar inside Preview */}
                  <div className="relative z-10 text-[11px] font-mono text-slate-400">
                    {proj.metrics}
                  </div>

                </div>

                {/* CARD BODY CONTENT */}
                <div className="p-6 space-y-4">
                  
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#FA782B] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* CARD FOOTER CTA */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <a
                  href={`#case-study-${proj.id}`}
                  className="inline-flex items-center text-sm font-bold text-[#FA782B] hover:text-[#e6671d] transition-colors group/link cursor-pointer"
                >
                  <span>View Architecture Breakdown</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
