import React, { useState } from 'react';
import {
  ArrowLeft,
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
  Server,
  Workflow,
  BarChart3,
  Calendar,
  ShieldCheck
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
      metricsBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
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
      metricsBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      summary: 'Consolidates fragmented enterprise data streams into an automated AI inference pipeline with continuous metric extraction. Deploys custom event triggers to flag anomalies before impacting operational margins.',
      tags: ['Python', 'FastAPI', 'n8n Pipelines', 'Supabase', 'Vector DB'],
      gradient: 'from-slate-900 via-[#07213A] to-slate-950',
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
      metricsBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      summary: 'Streamlines vendor transactions with real-time stock synchronization and multi-tenant access control policies. Built on a modular Next.js portal integrated with robust serverless micro-endpoints.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'GraphQL'],
      gradient: 'from-slate-900 via-blue-950 to-slate-950',
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
      metricsBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
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

  const handleSelectProject = (proj) => {
    setSelectedProject(proj);
    const element = document.getElementById('our-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    const element = document.getElementById('our-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenScopingCall = () => {
    if (onOpenContact) {
      onOpenContact();
    }
  };

  return (
    <section id="our-work" className="bg-[#FFFFFF] text-[#0F172A] py-16 lg:py-24 border-b border-slate-200">
      <div id="work" className="scroll-mt-24" aria-hidden="true" />

      {/* DEDICATED CASE STUDY FULL-PAGE VIEW */}
      {selectedProject ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-mega-fadeIn">
          
          {/* TOP NAVIGATION LINK TO RETURN CLEANLY TO MAIN LANDING VIEW */}
          <div className="mb-8 pb-4 border-b border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#07213A] hover:text-blue-600 transition-colors py-2 px-3 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </button>

            <span className="text-xs font-medium text-slate-500">
              Case Study / {selectedProject.category}
            </span>
          </div>

          {/* DEDICATED CASE STUDY CONTAINER */}
          <div className="space-y-10">
            
            {/* 1. CASE STUDY HERO HEADER */}
            <div className="bg-[#07213A] text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
              <div 
                className="absolute -top-24 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="relative z-10 space-y-4 max-w-4xl">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white uppercase tracking-wider">
                    {selectedProject.industry}
                  </span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${selectedProject.metricsBg}`}>
                    {selectedProject.impactMetric}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    Verified Production Deployment
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {selectedProject.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                  {selectedProject.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-700 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. THE ARCHITECTURAL CHALLENGE & SOLUTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle className="w-5 h-5" />
                  <span>The Architectural Challenge</span>
                </div>

                <h3 className="text-xl font-bold text-[#07213A]">
                  Bottlenecks and Scaling Limitations
                </h3>

                <ul className="space-y-4 pt-2">
                  {selectedProject.challengeBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-[#475569] leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6 bg-[#07213A] text-white border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-5 h-5" />
                  <span>The Engineered Solution</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Decoupled, Resilient Architecture
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  {selectedProject.solution}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Production Outcomes</p>
                  <ul className="space-y-2">
                    {selectedProject.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. SYSTEM ARCHITECTURE FLOW DIAGRAM */}
            <div className="bg-[#07213A] text-white border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
                  <Cpu className="w-5 h-5" />
                  <span>System Architecture Flow Diagram</span>
                </div>
                <span className="text-xs text-slate-400">
                  Modular High-Concurrency Pipeline
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {selectedProject.systemDiagram.map((node, nIdx) => (
                  <div 
                    key={nIdx} 
                    className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center space-y-2 relative group hover:border-slate-700 transition-colors"
                  >
                    <div className="inline-block text-[10px] font-bold text-sky-400 uppercase tracking-wider bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      Step {nIdx + 1}: {node.label}
                    </div>
                    <div className="text-sm font-mono font-bold text-white">
                      {node.tech}
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">
                      {node.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. VERIFIED PRODUCTION METRICS */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
                <BarChart3 className="w-5 h-5" />
                <span>Verified Production Metrics</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedProject.verifiedMetrics.map((met, mIdx) => (
                  <div key={mIdx} className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm space-y-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#07213A] block">
                      {met.val}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-600 block">
                      {met.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. BOTTOM CTA STRIP */}
            <div className="bg-[#07213A] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Ready to Architect a Similar Platform?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Speak directly with the lead engineers who designed and deployed this architecture.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={handleBackToProjects}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer border border-slate-700"
                >
                  ← Back to Projects
                </button>

                <button
                  type="button"
                  onClick={handleOpenScopingCall}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Scoping Call</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* MAIN PROJECT SHOWCASE GRID VIEW */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2">
                <span className="w-8 h-0.5 bg-blue-600"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
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
                          <span className="text-[10px] text-sky-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">2.4M msg/s</span>
                        </div>
                      )}

                      {proj.previewType === 'analytics' && (
                        <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 font-mono text-xs text-slate-300 shadow-inner flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 text-sky-400" />
                            <span className="text-white font-semibold">n8n_event_pipeline</span>
                          </div>
                          <span className="text-[10px] text-sky-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">&lt;45ms Latency</span>
                        </div>
                      )}

                      {proj.previewType === 'marketplace' && (
                        <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 font-mono text-xs text-slate-300 shadow-inner flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Boxes className="w-4 h-4 text-blue-400" />
                            <span className="text-white font-semibold">saas_multi_tenant</span>
                          </div>
                          <span className="text-[10px] text-cyan-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">500+ Vendors</span>
                        </div>
                      )}

                      {proj.previewType === 'fleet' && (
                        <div className="bg-slate-900/90 border border-slate-700/80 rounded-lg p-3 font-mono text-xs text-slate-300 shadow-inner flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Server className="w-4 h-4 text-indigo-400" />
                            <span className="text-white font-semibold">telemetry_grpc_v1</span>
                          </div>
                          <span className="text-[10px] text-indigo-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">&lt;20ms Latency</span>
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
                    <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors leading-snug">
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
                    onClick={() => handleSelectProject(proj)}
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
      )}

    </section>
  );
}


