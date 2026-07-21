"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react';

type MultiStepFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const industries = [
  "Trades & Construction",
  "Hospitality",
  "Retail",
  "Professional Services",
  "Other"
];

const goals = [
  "Generate more leads",
  "Build brand trust",
  "Sell products online",
  "Informational"
];

const statuses = [
  "Yes - needs a redesign",
  "No - starting from scratch"
];

export default function MultiStepForm({ isOpen, onClose }: MultiStepFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    goal: '',
    status: '',
    notes: '',
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitError(null);
      setIsSubmitting(false);
      setFormData({
        industry: '',
        goal: '',
        status: '',
        notes: '',
        name: '',
        email: '',
        phone: ''
      });
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSelect = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 400);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Mock form submission during local development to avoid API errors
    if (process.env.NODE_ENV !== 'production') {
      console.log("Local Dev Mode: Mocking form submission", formData);
      await new Promise(resolve => setTimeout(resolve, 1200));
      setStep(6);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      let result;
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch (e) {
        throw new Error(`Server returned an invalid response (Status: ${response.status}). If testing locally, ensure you are running 'wrangler pages dev'.`);
      }

      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit request.");
      }

      setStep(6);
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    // Outer overlay — CSS-driven show/hide for reliability
    <div
      aria-modal="true"
      role="dialog"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        // CSS transitions for show/hide — no library needed
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 0.25s ease',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(26, 26, 26, 0.65)',
          backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal panel */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '32rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '95dvh',
          // Slide-up when open
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          {step > 1 && step < 6 ? (
            <button onClick={() => setStep(prev => prev - 1)} className="text-white/60 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div className="w-16"></div>
          )}

          <div className="text-sm font-bold uppercase tracking-widest text-white/60">
            {step < 6 ? `Step ${step} of 5` : 'Success'}
          </div>

          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step content area */}
        <div className="relative overflow-hidden bg-[#1a1a1a]" style={{ height: '500px', minHeight: '500px' }}>
          <AnimatePresence mode="wait" initial={false}>

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 p-6 sm:p-8 flex flex-col overflow-y-auto"
              >
                <h3 className="text-2xl font-serif text-white mb-6">What industry are you in?</h3>
                <div className="space-y-3">
                  {industries.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleSelect('industry', item)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                        formData.industry === item
                          ? 'border-theme-accent bg-theme-accent/10 text-theme-accent font-medium'
                          : 'border-white/10 bg-white/5 hover:border-white/30 text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 p-6 sm:p-8 flex flex-col overflow-y-auto"
              >
                <h3 className="text-2xl font-serif text-white mb-6">What is your main goal for the new website?</h3>
                <div className="space-y-3">
                  {goals.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleSelect('goal', item)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                        formData.goal === item
                          ? 'border-theme-accent bg-theme-accent/10 text-theme-accent font-medium'
                          : 'border-white/10 bg-white/5 hover:border-white/30 text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 p-6 sm:p-8 flex flex-col overflow-y-auto"
              >
                <h3 className="text-2xl font-serif text-white mb-6">Do you currently have a website?</h3>
                <div className="space-y-3">
                  {statuses.map((item) => (
                    <button
                      key={item}
                      onClick={() => handleSelect('status', item)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                        formData.status === item
                          ? 'border-theme-accent bg-theme-accent/10 text-theme-accent font-medium'
                          : 'border-white/10 bg-white/5 hover:border-white/30 text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 p-6 sm:p-8 flex flex-col overflow-y-auto"
              >
                <h3 className="text-2xl font-serif text-white mb-4">Anything else you'd like us to know?</h3>
                <div className="flex flex-col gap-4 flex-1">
                  <textarea
                    value={formData.notes}
                    onChange={e => setFormData(prev => ({...prev, notes: e.target.value}))}
                    className="w-full flex-1 p-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all resize-none placeholder-white/40"
                    placeholder="Tell us about your brand, any specific design references you like, or unique features you need..."
                    rows={6}
                  />
                  <button
                    onClick={() => setStep(prev => prev + 1)}
                    className="w-full py-4 bg-theme-accent text-white rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-all flex justify-center items-center gap-2"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 p-6 sm:p-8 flex flex-col overflow-y-auto"
              >
                <h3 className="text-2xl font-serif text-white mb-6">Where should we send your proposal?</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                  {submitError && (
                    <div className="bg-red-500/10 text-red-400 text-xs px-4 py-3 rounded-lg border border-red-500/20">
                      {submitError}
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1">Name</label>
                    <input
                      required
                      type="text"
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={e => setFormData(prev => ({...prev, name: e.target.value}))}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all disabled:opacity-50 placeholder-white/40"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1">Email</label>
                    <input
                      required
                      type="email"
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={e => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all disabled:opacity-50 placeholder-white/40"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={e => setFormData(prev => ({...prev, phone: e.target.value}))}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all disabled:opacity-50 placeholder-white/40"
                      placeholder="07123 456789"
                    />
                  </div>
                  <div className="mt-auto pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-theme-accent text-white rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-all flex justify-center items-center gap-2 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Request Proposal
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-theme-accent/20 text-theme-accent rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Request Sent!</h3>
                <p className="text-white/60 mb-8 max-w-sm">
                  Thank you for your interest, {formData.name || 'there'}. We'll review your details and send a tailored proposal to your email within 24 hours.
                </p>
                <button onClick={onClose} className="px-8 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors">
                  Close Window
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Progress bar */}
        {step < 6 && (
          <div className="h-1.5 w-full bg-white/5">
            <motion.div
              className="h-full bg-theme-accent"
              initial={false}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
