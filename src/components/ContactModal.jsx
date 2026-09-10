import React, { useState } from 'react';
import { X, Calendar, Send, CheckCircle2, Sparkles, Clock, ArrowRight, Loader2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'calendar'
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

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
          name: formData.name,
          email: formData.email,
          message: formData.projectScope,
          subject: "New Synzora Technical Discovery Inquiry"
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        const errorMsg = data.message || "Failed to send inquiry. Please try again.";
        setError(errorMsg);
        alert(errorMsg);
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      const errorMsg = "An error occurred while sending your request. Please try again.";
      setError(errorMsg);
      alert(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setFormData({ name: '', email: '', projectScope: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-mega-fadeIn">
      
      {/* Modal Container */}
      <div className="bg-[#07213A] text-white border border-slate-700/80 rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div 
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* SUCCESS STATE */
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/30 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-extrabold text-white">Inquiry Received</h3>
            
            <p className="text-sm text-slate-300 max-w-xs mx-auto leading-relaxed">
              We will review your specs and reach out within 24 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors shadow-md cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* FORM / CALENDAR TABS STATE */
          <div>
            
            {/* Header Badge & Titles */}
            <div className="mb-6 space-y-2">
              <span className="text-sky-400 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                START A SPRINT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Schedule Technical Discovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Discuss your platform specs, architecture requirements, or project scope directly with our lead builders.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="grid grid-cols-2 gap-2 bg-slate-900/80 p-1 rounded-xl border border-slate-800 mb-6">
              <button
                onClick={() => setActiveTab('message')}
                type="button"
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'message'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Quick Message</span>
              </button>

              <button
                onClick={() => setActiveTab('calendar')}
                type="button"
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  activeTab === 'calendar'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Scoping Call</span>
              </button>
            </div>

            {/* TAB 1: QUICK MESSAGE FORM */}
            {activeTab === 'message' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-lg p-3">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Overview / Requirements
                  </label>
                  <textarea
                    rows="3"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="Describe your tech stack, goals, or timeline..."
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Discovery Request</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Average response time: &lt; 4 hours</span>
                </div>
              </form>
            ) : (
              /* TAB 2: INSTANT CALENDAR SCOPING */
              <div className="space-y-5 text-center py-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/15 text-sky-400 flex items-center justify-center mx-auto">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">30-Minute Architecture Review</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Pick a live time slot directly on our calendar to meet with a Synzora Lead Solutions Architect.
                  </p>
                </div>

                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Open Live Calendar (Cal.com)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-slate-400">
                  Instant confirmation • No sales pitch • Pure technical advisory
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

