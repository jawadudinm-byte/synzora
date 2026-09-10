import React, { useState } from 'react';
import {
  X,
  ArrowRight,
  Globe,
  Activity,
  Boxes,
  Zap,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  Filter,
  Server,
  Workflow,
  BarChart3,
  Calendar
} from 'lucide-react';

export default function ProjectShowcase({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Enterprise Platforms', 'AI & Data Intelligence', 'Operations'];

  const projects = [
    {
      id: 1,
      category: 'Enterprise Platforms',
      industry: 'Logistics & Supply Chain',
      title: 'Global Supply & Logistics Platform',
      impactMetric: '99.99% Uptime',
      metricsBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      summary: 'Solves global routing bottlenecks by establishing a high-concurrency event stream with zero-latency state synchronization. Features a decoupled microservices architecture deployed across multi-region Kubernetes clusters.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      gradient: 'from-slate-900 via-[#07213A] to-blue-950',
      previewType: 'logistics',
      challengeBullets: [
        'Legacy monolithic dispatchers suffered from 4+ second latency spikes during peak load, dropping live telemetry connections.',
        'Fragmented database schemas caused severe inventory sync mismatches across 12 global distribution hubs.'
      ],
      solution: 'Engineered an event-driven microservices architecture using Node.js and Redis Pub/Sub, backed by partitioned PostgreSQL tables and real-time WebSockets.',
      systemDiagram: [
        { label: 'Client Tier', tech: 'React 18 / Vite', desc: 'Real-time WebSocket dashboard' },
        { label: 'Ingestion Layer', tech: 'Redis Pub/Sub', desc: 'High-throughput payload queuing' },
        { label: 'Microservices', tech: 'Node.js Cluster', desc: 'Decoupled routing micro-engine' },
        { label: 'Storage Tier', tech: 'PostgreSQL Shards', desc: 'Partitioned transactional DB' }
      ],
      verifiedMetrics: [
        { label: 'System Throughput', val: '2.4M Ops/sec' },
        { label: 'State Sync Latency', val: '< 35ms' },
        { label: 'SLA Availability', val: '99.99% Uptime' }
      ],
      outcomes: [
        '99.99% system availability maintained throughout peak Q4 load',
        '2.4M daily telemetry events processed with sub-35ms sync latency',
        'Zero overselling or dispatch queue dropped connections'
      ]
    },
    {
      id: 2,
      category: 'AI & Data Intelligence',
      industry: 'Decision Intelligence',
      title: 'Automated Data & Decision Engine',
      impactMetric: '3.4x Faster Workflows',
      metricsBg: 'bg-[#FA782B]/10 text-[#FA782B] border-[#FA782B]/30',
      summary: 'Consolidates fragmented enterprise data streams into an automated AI inference pipeline with continuous metric extraction. Deploys custom event triggers to flag anomalies before impacting operational margins.',
      tags: ['Python', 'FastAPI', 'n8n Pipelines', 'Supabase', 'Vector DB'],
      gradient: 'from-slate-900 via-stone-900 to-amber-950',
      previewType: 'analytics',
      challengeBullets: [
        'Cross-functional analytics teams lost 25+ hours weekly manually compiling multi-department CSV reports.',
        'Batch processing scripts lacked real-time anomaly alerts, delaying executive operational decision-making.'
      ],
      solution: 'Constructed an automated ETL and ML inference pipeline leveraging FastAPI microservices, n8n orchestration, and vector indexing for dynamic anomaly detection.',
      systemDiagram: [
        { label: 'Data Ingestion', tech: '100k Webhooks/hr', desc: 'Continuous event listener' },
        { label: 'Orchestration', tech: 'n8n Pipelines', desc: 'Automated ETL workflow' },
        { label: 'AI Inference', tech: 'FastAPI + Vector DB', desc: 'Semantic metric extraction' },
        { label: 'Alerting', tech: 'Supabase Sync', desc: 'Real-time decision dashboard' }
      ],
      verifiedMetrics: [
        { label: 'Workflow Speedup', val: '3.4x Faster' },
        { label: 'Query Latency', val: '< 45ms' },
        { label: 'Cost Reduction', val: '$180k / yr' }
      ],
      outcomes: [
        '3.4x acceleration in weekly executive reporting cycles',
        '$180k in annual operational cost savings identified automatically',
        'Sub-45ms real-time metric query response across 100k hourly webhooks'
      ]
    },
    {
      id: 3,
      category: 'Enterprise Platforms',
      industry: 'B2B Marketplace',
      title: 'Dynamic B2B Inventory Marketplace',
      impactMetric: 'Enterprise Pilot Ready',
      metricsBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      summary: 'Streamlines vendor transactions with real-time stock synchronization and multi-tenant access control policies. Built on a modular Next.js portal integrated with robust serverless micro-endpoints.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'GraphQL'],
      gradient: 'from-slate-900 via-emerald-950 to-slate-950',
      previewType: 'marketplace',
      challengeBullets: [
        'High-volume wholesale vendors experienced frequent stock mismatches due to delayed API sync with legacy ERPs.',
        'Monolithic portals failed under flash sales traffic spikes, causing cart abandonment during wholesale ordering.'
      ],
      solution: 'Architected a Next.js App Router platform featuring Optimistic UI state, GraphQL live subscriptions, and isolated multi-tenant database transactions.',
      systemDiagram: [
        { label: 'Frontend Portal', tech: 'Next.js App Router', desc: 'Optimistic UI state render' },
        { label: 'API Layer', tech: 'GraphQL Engine', desc: 'Live subscription streams' },
        { label: 'Auth & Tenants', tech: 'Role-Based RBAC', desc: 'Multi-tenant isolation' },
        { label: 'DB Cluster', tech: 'PostgreSQL Pool', desc: 'Atomic transaction locks' }
      ],
      verifiedMetrics: [
        { label: 'Active Vendors', val: '500+ Vendors' },
        { label: 'Stock Sync Error', val: '0.00%' },
        { label: 'Fulfillment Speed', val: '+42% Velocity' }
      ],
      outcomes: [
        '500+ enterprise vendors successfully onboarded during launch phase',
        '100% elimination of inventory overselling incidents',
        '42% increase in quarterly B2B order processing velocity'
      ]
    },
    {
      id: 4,
      category: 'Operations',
      industry: 'Operations & Telemetry',
      title: 'Automated Fleet Telemetry Hub',
      impactMetric: '< 20ms Telemetry Latency',
      metricsBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      summary: 'Delivers real-time asset tracking and predictive maintenance alerts across distributed commercial vehicle fleets. Uses time-series data indexing to process continuous high-throughput sensor streams.',
      tags: ['Go', 'React', 'TimescaleDB', 'gRPC', 'AWS EC2'],
      gradient: 'from-slate-900 via-indigo-950 to-slate-950',
      previewType: 'fleet',
      challengeBullets: [
        'Unscheduled vehicle breakdowns caused logistics penalties due to missing real-time sensor diagnostic feeds.',
        'High-velocity GPS & engine sensor streams overwhelmed standard relational databases.'
      ],
      solution: 'Developed a high-throughput telemetry engine in Go with TimescaleDB time-series storage, streaming live diagnostic metrics via low-overhead gRPC pipelines.',
      systemDiagram: [
        { label: 'Fleet Sensors', tech: '1,200 Vehicles', desc: 'Sub-second GPS/Diagnostic feeds' },
        { label: 'Transport', tech: 'gRPC Streams', desc: 'Low-overhead binary pipeline' },
        { label: 'Telemetry Engine', tech: 'Go Worker Nodes', desc: 'Parallel time-series parser' },
        { label: 'Storage', tech: 'TimescaleDB Cluster', desc: 'Hyper-table time series indexing' }
      ],
      verifiedMetrics: [
        { label: 'Stream Latency', val: '< 20ms' },
        { label: 'Downtime Drop', val: '38% Reduction' },
        { label: 'Active Fleet', val: '1,200 Assets' }
      ],
      outcomes: [
        '38% reduction in unscheduled fleet maintenance downtime',
        'Sub-20ms continuous telemetry tracking across 1,200 active vehicles',
        'Automated early-warning triggers for engine & battery temperature anomalies'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleOpenScopingCall = () => {
    setSelectedProject(null);
    if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <section id="our-work" className="bg-[#FFFFFF] text-[#0F172A] py-16 lg:py-24 border-b border-slate-200">
      <div id="work" className="scroll-mt-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-[#FA782B]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA782B]">
                PROOF OF CAPABILITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#07213A] tracking-tight leading-tight">
              Real Projects. Real Innovation.
            </h2>

            <p className="text-base text-[#475569] leading-relaxed">
              Explore engineered platforms, production-ready systems, and scalable digital architectures delivered with technical precision.
            </p>
          </div>
        </div>

        {/* 2. CATEGORY FILTER PILL BAR */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="flex items-center gap-2 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#07213A] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. SHOWCASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                
                {/* PREVIEW HEADER */}
                <div className={`h-48 bg-gradient-to-br ${proj.gradient} relative overflow-hidden p-5 flex flex-col justify-between border-b border-slate-800`}>
                  
                  {/* Background Grid Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

                  {/* Top Bar: Industry & Category Badges */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#07213A] text-white border border-slate-700/80 shadow-sm shrink-0">
                      {proj.industry}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-700/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Live System
                    </span>
                  </div>

                  {/* Center Visual Mockup Box */}
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

                    {proj.previewType === 'fleet' && (
                      <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 font-mono text-xs text-slate-300 shadow-inner flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Server className="w-4 h-4 text-indigo-400" />
                          <span className="text-white font-semibold">telemetry_grpc_v1</span>
                        </div>
                        <span className="text-[10px] text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded">&lt;20ms Latency</span>
                      </div>
                    )}
                  </div>

                  {/* Impact Metric Badge inside Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${proj.metricsBg}`}>
                      ⚡ Impact: {proj.impactMetric}
                    </span>
                  </div>

                </div>

                {/* CARD CONTENT */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#FA782B] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {proj.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* CARD ACTION BUTTON */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2.5 px-4 bg-slate-900 hover:bg-[#07213A] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
                >
                  <span>View Architecture Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 4. INTERACTIVE ARCHITECTURE BREAKDOWN MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-mega-fadeIn">
          
          <div className="bg-[#07213A] text-white border border-slate-700/80 rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Ambient Top Glow */}
            <div 
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#FA782B]/20 rounded-full blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Close 'X' Button */}
            <button
              onClick={() => setSelectedProject(null)}
              type="button"
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 mb-6 pr-8">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FA782B] text-white uppercase tracking-wider">
                  {selectedProject.industry}
                </span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${selectedProject.metricsBg}`}>
                  {selectedProject.impactMetric}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedProject.title}
              </h3>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900/90 text-slate-300 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 text-sm text-slate-300">
              
              {/* SECTION 1: THE ARCHITECTURAL CHALLENGE (2 Bullet Points) */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#FA782B] font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Architectural Challenge</span>
                </div>
                
                <ul className="space-y-2.5">
                  {selectedProject.challengeBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FA782B] shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 2: SYSTEM DIAGRAM HIGHLIGHTS */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>System Architecture Flow Diagram</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {selectedProject.systemDiagram.map((node, nIdx) => (
                    <div key={nIdx} className="bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-center space-y-1">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block">{node.label}</span>
                      <span className="text-xs font-mono font-bold text-white block">{node.tech}</span>
                      <span className="text-[10px] text-slate-400 block leading-tight">{node.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 3: VERIFIED METRICS */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <BarChart3 className="w-4 h-4" />
                  <span>Verified Production Metrics</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.verifiedMetrics.map((met, mIdx) => (
                    <div key={mIdx} className="bg-slate-950/80 border border-slate-800/80 rounded-lg p-3 text-center">
                      <span className="text-lg sm:text-xl font-extrabold text-emerald-400 block">{met.val}</span>
                      <span className="text-[11px] font-medium text-slate-400 block">{met.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold rounded-lg transition-colors cursor-pointer border border-slate-700/80"
              >
                Close Breakdown
              </button>

              <button
                type="button"
                onClick={handleOpenScopingCall}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#FA782B] hover:bg-[#e6671d] text-white text-xs font-bold rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Scoping Call</span>
              </button>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}


