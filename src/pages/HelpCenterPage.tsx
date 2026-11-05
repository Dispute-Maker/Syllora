import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
  Send
} from 'lucide-react';

export const HelpCenterPage: React.FC = () => {
  // FAQ Accordion State (only one open at a time)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Report a Problem Form State
  const [issueType, setIssueType] = useState('PDF not opening');
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const faqs = [
    {
      q: 'How do I find notes or question papers?',
      a: 'Navigate to Courses → MCA, pick your semester, and select any subject to view its unit notes or past examination papers.'
    },
    {
      q: 'Why do I need to log in to access resources?',
      a: 'Logging in verifies student access and keeps your current semester progress synced across your devices.'
    },
    {
      q: 'How do I download a PDF?',
      a: 'Ensure you are signed in, open the subject or resource page, and click the orange Download PDF button.'
    },
    {
      q: 'What should I do if a resource is missing or broken?',
      a: 'Use the Report a Problem form below to submit the subject name or broken link for review.'
    },
    {
      q: 'How can I change my password?',
      a: 'Go to Settings from the sidebar navigation to update your password and account security preferences.'
    }
  ];

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      setFormError('Please enter a short description of the issue.');
      return;
    }

    setFormSubmitted(true);
    setFormError('');
    setDescription('');
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto pb-12 px-1 sm:px-0">
      {/* 1. Page Header (Compact) */}
      <div className="border-b border-neutral-200/80 dark:border-neutral-800 pb-4 sm:pb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins'] tracking-tight">
          Help & Support
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Find quick answers or report a problem.
        </p>
      </div>

      {/* 2. Frequently Asked Questions (Compact Accordion, Single Open Item) */}
      <section className="space-y-3">
        <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
          Frequently Asked Questions
        </h2>

        <div className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800/90 rounded-xl border border-neutral-200/80 dark:border-neutral-700/60 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left px-4 py-3.5 sm:py-4 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-[#25252B] dark:text-white cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#E6A02D] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-700/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Report a Problem Form */}
      <section className="bg-white dark:bg-neutral-800/90 p-5 sm:p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/60 shadow-sm space-y-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#E6A02D]" />
            <span>Report a Problem</span>
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Notice a broken link, missing file, or technical error? Let us know.
          </p>
        </div>

        {formSubmitted && (
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>Your report has been recorded locally. Thank you for helping keep Syllora accurate!</span>
          </div>
        )}

        {formError && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-rose-800 dark:text-rose-300 text-xs font-medium">
            {formError}
          </div>
        )}

        <form onSubmit={handleReportSubmit} className="space-y-3.5 max-w-xl">
          <div>
            <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Issue Type
            </label>
            <select
              value={issueType}
              onChange={e => setIssueType(e.target.value)}
              className="w-full text-xs sm:text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 sm:p-3 focus:outline-none focus:border-[#E6A02D] cursor-pointer"
            >
              <option value="PDF not opening">PDF not opening</option>
              <option value="Broken resource link">Broken resource link</option>
              <option value="Missing resource">Missing resource</option>
              <option value="Login problem">Login problem</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Short Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Describe the issue, subject code, or resource name..."
              className="w-full text-xs sm:text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 sm:p-3 focus:outline-none focus:border-[#E6A02D] placeholder-neutral-400"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 sm:py-3 rounded-xl bg-[#E6A02D] hover:bg-[#cf8e24] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer active:scale-[0.99]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Report</span>
          </button>
        </form>
      </section>
    </div>
  );
};
