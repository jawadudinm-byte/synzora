import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Rocket, Users, CheckCircle2 } from 'lucide-react';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative bg-[#F8FAFC] text-[#0F172A] py-16 lg:py-24 border-b border-slate-200">
      
      {/* 1. TOP METRICS STRIP (Horizontal Trust Metrics) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            
            {/* Metric 1 */}
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                99.9%
              </p>
              <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                High-Availability Architecture
              </p>
            </div>

            {/* Metric 2 */}
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#FA782B] tracking-tight">
                &lt; 100ms
              </p>
              <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                Optimized API Latency & Execution
              </p>
            </div>

            {/* Metric 3 */}
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                100%
              </p>
              <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                Code Ownership & Transparent Delivery
              </p>
            </div>

            {/* Metric 4 */}
            <div className="pt-4 md:pt-0 md:px-4 text-center md:text-left">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-600 tracking-tight">
                24/7
              </p>
              <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                Monitoring & Resilient Infrastructure
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 2. TWO-COLUMN "WHO WE ARE & ENGINEERING APPROACH" SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: COMPANY FOCUS & NARRATIVE (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Overline */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-[#FA782B]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA782B]">
                WHO WE ARE
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07213A] leading-tight tracking-tight">
              A Modern Technology Partner Built for Execution and Scale.
            </h2>

            {/* Paragraph */}
            <p className="text-base text-[#475569] leading-relaxed">
              Synzora is an independent technology and software engineering studio. We bridge the gap between technical architecture and business outcomes, building modern software platforms without unnecessary complexity or middleman overhead.
            </p>

            {/* Secondary Action Link */}
            <div className="pt-2">
              <a
                href="#engineering-standards"
                className="inline-flex items-center text-sm font-bold text-[#FA782B] hover:text-[#e6671d] transition-colors group cursor-pointer"
              >
                <span>Discover Our Engineering Standards</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: VALUE PILLARS WITH VERTICAL ACCENT LINES (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Pillar 1: Deep Navy Left Border */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#07213A] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-slate-100 text-[#07213A] group-hover:bg-[#07213A] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1.5 group-hover:text-[#07213A] transition-colors">
                    Direct Engineering Access
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Work directly with core software builders and architects. Faster turnarounds and zero lost-in-translation requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Vibrant Orange Left Border */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#FA782B] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-orange-50 text-[#FA782B] group-hover:bg-[#FA782B] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1.5 group-hover:text-[#FA782B] transition-colors">
                    Production-Grade Standards
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Every system is built with secure API patterns, scalable database schemas, and clean, typed code from sprint one.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Emerald Green Left Border */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-[#10B981] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1.5 group-hover:text-emerald-700 transition-colors">
                    Outcome-Driven Delivery
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    We prioritize tangible business impact, automated operations, and fast time-to-market over theoretical slides.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
