import React, { useState } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Loader2
} from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          email: email,
          subject: "New Synzora Newsletter Subscription",
          message: `New newsletter subscription request from: ${email}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubscribed(true);
        setEmail('');
      } else {
        alert(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.error("Newsletter submission error:", err);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleContactClick = (e) => {
    if (onOpenContact) {
      e.preventDefault();
      onOpenContact();
    }
  };

  return (
    <footer className="relative bg-[#07213A] text-white overflow-hidden">
      
      {/* 1. PRE-FOOTER CONVERSION STRIP (Signature Enterprise Blue Banner) */}
      <div className="bg-blue-600 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        {/* Subtle ambient radial glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          
          {/* Left Content */}
          <div className="space-y-3 max-w-2xl">
            <span className="bg-white/20 text-[#07213A] text-xs font-bold px-3 py-1 rounded-full uppercase inline-block tracking-wider">
              READY TO SCALE?
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Turn Complex Workflows into High-Performance Systems?
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Schedule an architecture scoping call to map out technical feasibility, stacks, and delivery timelines.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full md:w-auto inline-flex items-center justify-center px-7 py-4 text-sm font-bold text-white bg-[#07213A] hover:bg-[#0c2e4e] rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            >
              <span>Schedule Technical Discovery</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. MAIN MULTI-COLUMN FOOTER (Deep Midnight Navy - #07213A) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* TOP SECTION: BRAND & QUICK COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 17L10 5L16 17L20 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Synzora</span>
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block animate-pulse"></span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Independent software engineering studio building resilient platforms, scalable data architectures, and automated digital systems.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              <span>Systems Operational & Accepting Scoping Sprints</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#who-we-are" className="hover:text-sky-400 transition-colors">Who We Are</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Capabilities</a></li>
              <li><a href="#our-work" className="hover:text-sky-400 transition-colors">Proof of Work</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Engineering Process</a></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Core Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Full-Stack Web Platforms</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Cloud & API Architecture</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Dedicated Engineering</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Performance Optimization</a></li>
            </ul>
          </div>

          {/* Column 4: Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#our-work" className="hover:text-sky-400 transition-colors">Enterprise Logistics</a></li>
              <li><a href="#our-work" className="hover:text-sky-400 transition-colors">Decision Intelligence</a></li>
              <li><a href="#our-work" className="hover:text-sky-400 transition-colors">B2B SaaS Platforms</a></li>
              <li><a href="#our-work" className="hover:text-sky-400 transition-colors">Internal Operations</a></li>
              <li><a href="#our-work" className="hover:text-sky-400 transition-colors">HIPAA & FinTech Security</a></li>
            </ul>
          </div>

        </div>

        {/* MIDDLE SECTION: LEAD CAPTURE & NEWSLETTER STRIP */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 my-8">
          <div>
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Stay Updated on Engineering Patterns</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Technical deep-dives and engineering architecture teardowns delivered quarterly. Zero spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center w-full md:w-auto gap-2">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 bg-slate-950 px-4 py-2.5 rounded-lg border border-slate-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-500 w-full sm:w-64"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </>
            )}
          </form>
        </div>

        {/* BOTTOM BAR: LEGAL & SOCIALS */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Synzora Technologies. All rights reserved. Zero-Bloat Engineering Standards.</p>
          
          <div className="flex items-center space-x-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
