import { useState, useEffect } from 'react';
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
    name: '',
    email: '',
    phone: ''
  });

  // Reset form when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        industry: '',
        goal: '',
        status: '',
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
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSelect = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 400); // Small delay so they see the selection
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to your backend/API
    console.log("Form Submitted", formData);
    setStep(5); // Success step
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-theme-text-dark/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-theme-bg-light rounded-3xl shadow-2xl overflow-hidden border border-white/50"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-theme-bg-gray">
              {step > 1 && step < 5 ? (
                <button onClick={() => setStep(prev => prev - 1)} className="text-theme-text-light hover:text-theme-text transition-colors flex items-center gap-1 text-sm font-medium">
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div className="w-16"></div> /* Placeholder for alignment */
              )}
              
              <div className="text-sm font-bold uppercase tracking-widest text-theme-text-light">
                {step < 5 ? `Step ${step} of 4` : 'Success'}
              </div>

              <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-theme-bg-gray/50 hover:bg-theme-bg-gray text-theme-text transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area with absolute positioning for slide transitions */}
            <div className="relative h-[420px] overflow-hidden bg-theme-bg-light">
              <AnimatePresence mode="wait">
                
                {/* Step 1: Industry */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col h-full overflow-y-auto"
                  >
                    <h3 className="text-2xl font-serif text-theme-text-dark mb-6">What industry are you in?</h3>
                    <div className="space-y-3">
                      {industries.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleSelect('industry', item)}
                          className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                            formData.industry === item 
                              ? 'border-theme-accent bg-theme-accent/5 text-theme-accent font-medium' 
                              : 'border-theme-bg-gray hover:border-theme-accent/50 text-theme-text'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Goal */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col h-full overflow-y-auto"
                  >
                    <h3 className="text-2xl font-serif text-theme-text-dark mb-6">What is your main goal for the new website?</h3>
                    <div className="space-y-3">
                      {goals.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleSelect('goal', item)}
                          className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                            formData.goal === item 
                              ? 'border-theme-accent bg-theme-accent/5 text-theme-accent font-medium' 
                              : 'border-theme-bg-gray hover:border-theme-accent/50 text-theme-text'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Status */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col h-full overflow-y-auto"
                  >
                    <h3 className="text-2xl font-serif text-theme-text-dark mb-6">Do you currently have a website?</h3>
                    <div className="space-y-3">
                      {statuses.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleSelect('status', item)}
                          className={`w-full text-left px-5 py-4 rounded-xl border transition-all ${
                            formData.status === item 
                              ? 'border-theme-accent bg-theme-accent/5 text-theme-accent font-medium' 
                              : 'border-theme-bg-gray hover:border-theme-accent/50 text-theme-text'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Form */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-6 sm:p-8 flex flex-col h-full overflow-y-auto"
                  >
                    <h3 className="text-2xl font-serif text-theme-text-dark mb-6">Where should we send your proposal?</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                      <div>
                        <label className="block text-sm font-medium text-theme-text-light mb-1">Name</label>
                        <input 
                          required
                          type="text" 
                          value={formData.name}
                          onChange={e => setFormData(prev => ({...prev, name: e.target.value}))}
                          className="w-full px-4 py-3 rounded-lg border border-theme-bg-gray bg-white focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-theme-text-light mb-1">Email</label>
                        <input 
                          required
                          type="email" 
                          value={formData.email}
                          onChange={e => setFormData(prev => ({...prev, email: e.target.value}))}
                          className="w-full px-4 py-3 rounded-lg border border-theme-bg-gray bg-white focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-theme-text-light mb-1">Phone Number (Optional)</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData(prev => ({...prev, phone: e.target.value}))}
                          className="w-full px-4 py-3 rounded-lg border border-theme-bg-gray bg-white focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all"
                          placeholder="07123 456789"
                        />
                      </div>
                      
                      <div className="mt-auto pt-4">
                        <button type="submit" className="w-full py-4 bg-theme-accent text-white rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-all flex justify-center items-center gap-2">
                          Request Proposal
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* Step 5: Success */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-theme-accent/10 text-theme-accent rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-serif text-theme-text-dark mb-4">Request Sent!</h3>
                    <p className="text-theme-text-light mb-8 max-w-sm">
                      Thank you for your interest, {formData.name || 'there'}. We'll review your details and send a tailored proposal to your email within 24 hours.
                    </p>
                    <button onClick={onClose} className="px-8 py-3 bg-theme-bg-gray text-theme-text-dark rounded-full font-medium hover:bg-theme-bg-alt transition-colors">
                      Close Window
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
            
            {/* Progress indicator */}
            {step < 5 && (
              <div className="h-1.5 w-full bg-theme-bg-gray absolute bottom-0 left-0">
                <motion.div 
                  className="h-full bg-theme-accent"
                  initial={{ width: '25%' }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
