import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Sparkles,
  Cpu,
  Layers,
  Users,
  ArrowRight,
  Code2,
  Database,
  Cloud,
  ShieldCheck,
  Workflow,
  BrainCircuit,
  Server,
  Globe,
  Activity,
  CheckCircle2,
  Rocket,
  Lock,
  LineChart,
  Boxes,
  Menu,
  X
} from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  // Navigation State Management
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ai-data');
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const megaTimeoutRef = useRef(null);
  const solutionsTimeoutRef = useRef(null);
  const headerRef = useRef(null);

  // Outside click handler to close dropdowns cleanly
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMegaOpen(false);
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeDropdowns = () => {
    setIsMegaOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleMegaMouseEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setIsMegaOpen(true);
    setIsSolutionsOpen(false);
  };

  const handleMegaMouseLeave = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setIsMegaOpen(false);
    }, 150);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
    setIsMegaOpen(false);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  // Categories & Mega Dropdown Content Data Structure
  const servicesCategories = [
    {
      id: 'ai-data',
      name: 'AI, Data & Automation',
      badge: 'Popular',
      icon: BrainCircuit,
      description: 'Intelligent LLM pipelines, autonomous agents, and enterprise data models.',
      columns: [
        {
          title: 'STRATEGY & GOVERNANCE',
          accentColor: '#07213A',
          items: [
            { title: 'AI Strategy Consulting', desc: 'Roadmaps for generative AI & ROI evaluation.', icon: Sparkles, tag: 'New', href: '#services' },
            { title: 'N8n Automation & Workflows', desc: 'Event-driven workflow orchestration at scale.', icon: Workflow, href: '#services' },
            { title: 'Data Governance & Audit', desc: 'Vector stores, compliance & privacy guardrails.', icon: ShieldCheck, href: '#services' }
          ]
        },
        {
          title: 'CUSTOM ENGINEERING',
          accentColor: '#2563EB',
          items: [
            { title: 'Custom AI Agents', desc: 'Autonomous multi-agent systems & tool use.', icon: Cpu, tag: 'Hot', href: '#services' },
            { title: 'RAG & Knowledge Bases', desc: 'Enterprise document search with semantic vectors.', icon: Database, href: '#services' },
            { title: 'Predictive Analytics', desc: 'Real-time forecasting engines & ML pipelines.', icon: LineChart, href: '#services' }
          ]
        },
        {
          title: 'ENTERPRISE SCALING',
          accentColor: '#07213A',
          items: [
            { title: 'Model Fine-Tuning', desc: 'Domain-adapted open-source LLM optimization.', icon: Layers, href: '#services' },
            { title: 'Database & Performance Tuning', desc: 'Sub-millisecond query optimization & indexing.', icon: Activity, href: '#services' },
            { title: 'MLOps Infrastructure', desc: 'CI/CD for Machine Learning models & monitoring.', icon: Server, href: '#services' }
          ]
        }
      ]
    },
    {
      id: 'product-web',
      name: 'Product & Web Engineering',
      icon: Code2,
      description: 'High-performance web applications and resilient software architecture.',
      columns: [
        {
          title: 'STRATEGY & GOVERNANCE',
          accentColor: '#07213A',
          items: [
            { title: 'Product Discovery & Audit', desc: 'Technical architecture & code quality reviews.', icon: CheckCircle2, href: '#services' },
            { title: 'UI/UX System Design', desc: 'Scalable design systems & accessible interfaces.', icon: Layers, href: '#services' }
          ]
        },
        {
          title: 'CUSTOM ENGINEERING',
          accentColor: '#2563EB',
          items: [
            { title: 'Full-Stack Web Platforms', desc: 'Next.js, React, Node.js & resilient APIs.', icon: Globe, tag: 'Core', href: '#services' },
            { title: 'API & Integration Pipelines', desc: 'GraphQL, REST & event-driven webhooks.', icon: Workflow, href: '#services' },
            { title: 'Mobile & SaaS Apps', desc: 'Cross-platform progressive web apps.', icon: Rocket, href: '#services' }
          ]
        },
        {
          title: 'ENTERPRISE SCALING',
          accentColor: '#07213A',
          items: [
            { title: 'Performance Optimization', desc: 'Core Web Vitals & low-latency rendering.', icon: Activity, href: '#services' },
            { title: 'Legacy Modernization', desc: 'Monolith to micro-frontend refactoring.', icon: Boxes, href: '#services' }
          ]
        }
      ]
    },
    {
      id: 'cloud-enterprise',
      name: 'Cloud & Enterprise Platforms',
      icon: Cloud,
      description: 'Multi-cloud architectures, Kubernetes clusters, and security hardening.',
      columns: [
        {
          title: 'STRATEGY & GOVERNANCE',
          accentColor: '#07213A',
          items: [
            { title: 'Cloud Readiness & Strategy', desc: 'AWS, GCP & Azure migration blueprints.', icon: Cloud, href: '#services' },
            { title: 'Cost Optimization (FinOps)', desc: 'Infrastructure cost reduction & resource right-sizing.', icon: LineChart, href: '#services' }
          ]
        },
        {
          title: 'CUSTOM ENGINEERING',
          accentColor: '#2563EB',
          items: [
            { title: 'Cloud Architecture', desc: 'Infrastructure-as-Code with Terraform & AWS.', icon: Server, tag: 'Popular', href: '#services' },
            { title: 'DevOps & CI/CD Automation', desc: 'Zero-downtime deployment pipelines.', icon: Workflow, href: '#services' }
          ]
        },
        {
          title: 'ENTERPRISE SCALING',
          accentColor: '#07213A',
          items: [
            { title: 'Kubernetes & Serverless', desc: 'Auto-scaling containerized cloud workloads.', icon: Boxes, href: '#services' },
            { title: 'Disaster Recovery & SLA', desc: '99.99% uptime guarantee & backup automation.', icon: Lock, href: '#services' }
          ]
        }
      ]
    },
    {
      id: 'dedicated-teams',
      name: 'Dedicated Engineering Teams',
      icon: Users,
      description: 'Senior engineers embedded into your team to accelerate velocity.',
      columns: [
        {
          title: 'STRATEGY & GOVERNANCE',
          accentColor: '#07213A',
          items: [
            { title: 'Team Scaling Strategy', desc: 'Skills gap analysis & onboarding blueprints.', icon: Users, href: '#who-we-are' },
            { title: 'Agile Integration Plan', desc: 'Seamless alignment with your current sprints.', icon: Workflow, href: '#who-we-are' }
          ]
        },
        {
          title: 'CUSTOM ENGINEERING',
          accentColor: '#2563EB',
          items: [
            { title: 'Staff Augmentation', desc: 'Senior React, Node, Python & Cloud developers.', icon: Code2, tag: 'Flexible', href: '#who-we-are' },
            { title: 'Dedicated Engineering Squads', desc: 'Autonomous cross-functional product teams.', icon: Rocket, href: '#who-we-are' }
          ]
        },
        {
          title: 'ENTERPRISE SCALING',
          accentColor: '#07213A',
          items: [
            { title: 'Managed Units', desc: 'Fully managed delivery pods with lead architects.', icon: ShieldCheck, href: '#who-we-are' },
            { title: 'CTO-as-a-Service', desc: 'Fractional technical leadership & oversight.', icon: Sparkles, href: '#who-we-are' }
          ]
        }
      ]
    }
  ];

  // Solutions Data for Standard Dropdown
  const solutionsList = [
    { title: 'FinTech & Banking', desc: 'Secure payment gateways & ledger systems.', icon: Lock, badge: 'PCI-DSS', href: '#solutions' },
    { title: 'Healthcare & MedTech', desc: 'HIPAA-compliant platforms & patient analytics.', icon: Activity, badge: 'HIPAA', href: '#solutions' },
    { title: 'E-Commerce & Retail', desc: 'High-concurrency headless storefronts.', icon: Rocket, href: '#solutions' },
    { title: 'SaaS & Enterprise', desc: 'Multi-tenant platforms with role-based access.', icon: Boxes, href: '#solutions' },
    { title: 'AI Workflows & Automation', desc: 'Enterprise n8n setups & LLM API middleware.', icon: BrainCircuit, badge: 'Popular', href: '#solutions' }
  ];

  const selectedCategoryObj = servicesCategories.find(c => c.id === activeCategory) || servicesCategories[0];

  const handleContactClick = (e) => {
    closeDropdowns();
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-[#07213A] border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: BRAND LOGO */}
          <a href="#home" onClick={closeDropdowns} className="flex items-center space-x-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-[#07213A] border border-slate-700/80 group-hover:border-blue-500/60 transition-all duration-300 shadow-inner">
              <svg className="w-6 h-6 text-white group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 17L10 5L16 17L20 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="7" r="2" fill="#2563EB" />
              </svg>
            </div>
            <div className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight text-white">
                Synzora
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block ml-1 animate-pulse" title="Synzora Tech Engine Active"></span>
            </div>
          </a>

          {/* CENTER: DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <a 
              href="#home" 
              onClick={closeDropdowns}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              Home
            </a>

            <a 
              href="#who-we-are" 
              onClick={closeDropdowns}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              Who We Are
            </a>

            {/* OUR SERVICES (MEGA-DROPDOWN TRIGGER) */}
            <div 
              className="relative"
              onMouseEnter={handleMegaMouseEnter}
              onMouseLeave={handleMegaMouseLeave}
            >
              <button 
                type="button"
                onClick={() => setIsMegaOpen(!isMegaOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isMegaOpen 
                    ? 'text-sky-400 bg-slate-800/80 font-semibold' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
                aria-expanded={isMegaOpen}
              >
                <span>Our Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMegaOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
              </button>
            </div>

            {/* OUR SOLUTIONS (STANDARD DROPDOWN TRIGGER) */}
            <div 
              className="relative"
              onMouseEnter={handleSolutionsMouseEnter}
              onMouseLeave={handleSolutionsMouseLeave}
            >
              <button 
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isSolutionsOpen 
                    ? 'text-sky-400 bg-slate-800/80 font-semibold' 
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/60'
                }`}
                aria-expanded={isSolutionsOpen}
              >
                <span>Our Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
              </button>

              {/* STANDARD SOLUTIONS DROPDOWN CONTAINER */}
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-mega border border-slate-100 p-2 text-[#0F172A] animate-mega-fadeIn z-50"
                  onMouseEnter={handleSolutionsMouseEnter}
                  onMouseLeave={handleSolutionsMouseLeave}
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Industry Solutions</p>
                  </div>
                  {solutionsList.map((sol, index) => {
                    const SolIcon = sol.icon;
                    return (
                      <a
                        key={index}
                        href={sol.href}
                        onClick={closeDropdowns}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 text-[#07213A] group-hover:bg-blue-600 group-hover:text-white transition-colors mt-0.5">
                          <SolIcon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {sol.title}
                            </span>
                            {sol.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-[#07213A] border border-slate-200/60">
                                {sol.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                            {sol.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            <a 
              href="#our-work" 
              onClick={closeDropdowns}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              Our Work
            </a>
          </nav>

          {/* RIGHT ACTIONS: CONTACT US BUTTON */}
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-[#07213A] bg-white hover:bg-slate-100 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* DESKTOP MEGA-DROPDOWN PANEL FOR "OUR SERVICES" */}
      {isMegaOpen && (
        <div 
          className="hidden lg:block absolute top-full left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-t border-slate-800/40 animate-mega-fadeIn"
          onMouseEnter={handleMegaMouseEnter}
          onMouseLeave={handleMegaMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="bg-[#FFFFFF] rounded-2xl shadow-mega border border-slate-100 overflow-hidden text-[#0F172A] grid grid-cols-12 min-h-[420px]">
              
              {/* LEFT PANE: CATEGORIES */}
              <div className="col-span-4 bg-[#F8FAFC] p-4 border-r border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="px-3 py-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      Service Categories
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {servicesCategories.map((cat) => {
                      const CatIcon = cat.icon;
                      const isActive = activeCategory === cat.id;

                      return (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          onMouseEnter={() => setActiveCategory(cat.id)}
                          className={`w-full text-left p-3 rounded-xl transition-all flex items-start space-x-3 group ${
                            isActive
                              ? 'bg-[#07213A] text-white shadow-md'
                              : 'text-slate-700 hover:bg-slate-200/60 hover:text-slate-900'
                          }`}
                        >
                          <div className={`p-2 rounded-lg mt-0.5 transition-colors ${
                            isActive ? 'bg-blue-600 text-white' : 'bg-slate-200 text-[#07213A] group-hover:bg-slate-300'
                          }`}>
                            <CatIcon className="w-4 h-4" />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-800'}`}>
                                {cat.name}
                              </span>
                              {cat.badge && (
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                  isActive ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                                }`}>
                                  {cat.badge}
                                </span>
                              )}
                            </div>
                            <p className={`text-xs mt-1 leading-snug ${
                              isActive ? 'text-slate-300' : 'text-slate-500'
                            }`}>
                              {cat.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 px-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Enterprise Ready
                  </span>
                  <a href="#services" onClick={closeDropdowns} className="text-[#07213A] font-semibold hover:text-blue-600 transition-colors flex items-center gap-1">
                    View All <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* RIGHT PANE: 3 COLUMNS */}
              <div className="col-span-8 p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="pb-4 mb-5 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span>{selectedCategoryObj.name}</span>
                      <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        Architecture & Solutions
                      </span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {selectedCategoryObj.columns.map((col, colIdx) => (
                      <div key={colIdx} className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-1 h-4 rounded-full" 
                            style={{ backgroundColor: col.accentColor }} 
                          />
                          <h4 className="text-xs font-extrabold text-slate-800 tracking-wider uppercase">
                            {col.title}
                          </h4>
                        </div>

                        <div className="space-y-1">
                          {col.items.map((item, itemIdx) => {
                            const ItemIcon = item.icon;
                            return (
                              <a
                                key={itemIdx}
                                href={item.href}
                                onClick={closeDropdowns}
                                className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    {ItemIcon && (
                                      <ItemIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                    )}
                                    <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                      {item.title}
                                    </span>
                                  </div>

                                  {item.tag && (
                                    <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-[#07213A] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 mt-1 leading-snug group-hover:text-slate-600">
                                  {item.desc}
                                </p>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
                    </span>
                    <span className="text-xs font-medium text-slate-600">
                      Need custom architecture or advisory?
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="inline-flex items-center text-xs font-bold text-[#07213A] hover:text-blue-600 transition-colors gap-1"
                  >
                    <span>Book a Technical Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER NAVIGATION MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#07213A] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-mega-fadeIn max-h-[85vh] overflow-y-auto z-50">
          <a
            href="#home"
            onClick={closeDropdowns}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-slate-800"
          >
            Home
          </a>

          <a
            href="#who-we-are"
            onClick={closeDropdowns}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-slate-800"
          >
            Who We Are
          </a>

          {/* MOBILE ACCORDION: OUR SERVICES */}
          <div className="border-t border-b border-slate-800 py-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-sky-400 hover:bg-slate-800 rounded-lg"
            >
              <span>Our Services</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 pl-3 space-y-3">
                {servicesCategories.map((cat) => (
                  <div key={cat.id} className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
                    <div className="flex items-center space-x-2 text-white font-bold text-sm mb-2">
                      <cat.icon className="w-4 h-4 text-sky-400" />
                      <span>{cat.name}</span>
                    </div>
                    <div className="space-y-1.5 pl-2 border-l-2 border-blue-600/40">
                      {cat.columns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-1 my-1">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">{col.title}</p>
                          {col.items.map((it, iIdx) => (
                            <a
                              key={iIdx}
                              href={it.href}
                              onClick={closeDropdowns}
                              className="block text-xs text-slate-300 hover:text-sky-400 py-0.5"
                            >
                              • {it.title}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MOBILE ACCORDION: OUR SOLUTIONS */}
          <div className="py-1">
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-base font-semibold text-white hover:bg-slate-800 rounded-lg"
            >
              <span>Our Solutions</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileSolutionsOpen && (
              <div className="mt-1 pl-4 space-y-2 border-l-2 border-slate-700 my-2">
                {solutionsList.map((sol, index) => (
                  <a
                    key={index}
                    href={sol.href}
                    onClick={closeDropdowns}
                    className="block text-sm text-slate-300 hover:text-sky-400 py-1"
                  >
                    {sol.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#our-work"
            onClick={closeDropdowns}
            className="block px-3 py-2.5 rounded-lg text-base font-semibold text-white hover:bg-slate-800"
          >
            Our Work
          </a>

          {/* MOBILE CTA ACTION BUTTON */}
          <div className="pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full flex items-center justify-center px-5 py-3 rounded-lg text-center font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
