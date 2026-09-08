import React, { useEffect } from 'react';
import { CancelIcon, DocumentIcon, BriefcaseIcon, CheckmarkCircleIcon } from './Hugeicons';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
        
        {/* Overlay backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl border border-[#E5E7EB] shadow-2xl overflow-hidden my-auto max-h-[88vh] flex flex-col z-10"
        >
          
          {/* Header */}
          <div className="sticky top-0 bg-white px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between z-20">
            <div className="flex items-center gap-2.5">
              <DocumentIcon className="w-5 h-5 text-[#433FE5]" />
              <div>
                <h3 className="text-base font-bold text-[#111827]">
                  Harsha Valluri — Product Resume Snapshot
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Targeting APM, Product Intern & Early-Career Product Roles
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 text-[#6B7280] hover:text-[#111827] hover:bg-[#F0F0F0] rounded-lg transition-colors cursor-pointer"
              >
                <CancelIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm text-left">
            
            {/* Header Bio */}
            <div className="bg-[#F0F0F0] p-6 rounded-xl border border-[#E5E7EB]">
              <h2 className="text-xl font-bold text-[#111827]">Harsha Valluri</h2>
              <p className="text-sm font-semibold text-[#433FE5] mt-0.5">
                Product Designer → Product Management Transition
              </p>
              <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                "I started by designing products. Over time, I became more interested in understanding what should be built, why it should be built, and how to take it from idea to execution."
              </p>
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] text-xs font-mono text-[#374151] flex flex-wrap gap-4">
                <span>Email: harshavalluri.pm@gmail.com</span>
                <span>LinkedIn: linkedin.com/in/harsha-valluri</span>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-xs font-bold text-[#433FE5] uppercase tracking-wider mb-3">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  "Problem Framing & Discovery",
                  "User Research & Empathy",
                  "MVP Definition & Prioritization",
                  "Developer Handoff & Specs",
                  "Trade-off Analysis",
                  "Information Architecture"
                ].map(item => (
                  <div key={item} className="p-2.5 bg-white border border-[#E5E7EB] rounded-lg font-medium text-[#111827] flex items-center gap-1.5">
                    <CheckmarkCircleIcon className="w-3.5 h-3.5 text-[#433FE5] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xs font-bold text-[#433FE5] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <BriefcaseIcon className="w-4 h-4" /> Professional Experience
              </h4>
              <div className="p-5 bg-white border border-[#E5E7EB] rounded-xl space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-[#111827]">Product Designer (Primary / Solo)</h5>
                    <p className="text-xs font-semibold text-[#433FE5]">Development Studio Environment</p>
                  </div>
                  <span className="text-xs font-mono text-[#6B7280] bg-[#F0F0F0] px-2.5 py-1 rounded">
                    End-to-End Delivery
                  </span>
                </div>
                <ul className="text-xs text-[#4B5563] space-y-2 list-disc pl-4 leading-relaxed">
                  <li>Owned product experience from initial problem understanding through engineering delivery for multiple studio initiatives.</li>
                  <li>Worked directly with front-end and back-end developers daily to evaluate technical feasibility and design within stack constraints.</li>
                  <li>Translated ambiguous business objectives into concrete product scopes, user stories, and execution trade-offs.</li>
                  <li>Iterated rapidly based on user feedback, technical constraints, and project timelines.</li>
                </ul>
              </div>
            </div>

            {/* Key Product Projects */}
            <div>
              <h4 className="text-xs font-bold text-[#433FE5] uppercase tracking-wider mb-3">
                Key Product Projects
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="font-bold text-[#111827]">SaySplit — Voice-First Expense Splitting (0→1 Concept)</div>
                  <p className="text-xs text-[#4B5563] mt-1">Explored voice input as natural language parsing for expense splits. Defined MVP job: Describe → Parse → Review → Split with explicit user control.</p>
                </div>
                <div className="p-4 bg-white border border-[#E5E7EB] rounded-xl">
                  <div className="font-bold text-[#111827]">Vault — Property Information Architecture</div>
                  <p className="text-xs text-[#4B5563] mt-1">Shifted document storage mental model from isolated files to property-centric dashboards with immediate visibility into critical actions.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="bg-[#F0F0F0] px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between">
            <span className="text-xs text-[#6B7280]">
              Resume snapshot · Updated 2026
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-white bg-[#433FE5] hover:bg-[#3430C6] rounded-lg transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
