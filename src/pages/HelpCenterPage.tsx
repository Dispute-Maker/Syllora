import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Award,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle2,
  Send,
  Sparkles
} from 'lucide-react';

export const HelpCenterPage: React.FC = () => {
  // Section A: Selected guide category
  const [activeGuide, setActiveGuide] = useState<number | null>(0);

  // Section B: FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Section D: Report Form state
  const [category, setCategory] = useState('PDF not opening');
  const [reportDesc, setReportDesc] = useState('');
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportError, setReportError] = useState('');

  const guides = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      badge: 'Navigation',
      content: [
        'How to navigate Syllora: Use the left sidebar to jump between Home, Explore, and Courses anytime.',
        'How to browse MCA semesters and subjects: Go to Courses → MCA to view Semesters 1 through 4, then drill down into individual subjects.',
        'How to find academic resources: Utilize the global search bar on Explore or click on any Unit within a subject.'
      ]
    },
    {
      title: 'Notes & Resources',
      icon: FileText,
      badge: 'Study Material',
      content: [
        'How to open PDF notes: Click on any resource card to launch its dedicated viewer page with interactive pagination and zoom.',
        'How to preview and download resources: Use the preview toolbar to read notes directly, or click "Download PDF" once logged in.',
        'How to find resources by topic or unit: Use the Explore filters to narrow down to exact Unit I–V topics (e.g. "Relational Algebra").'
      ]
    },
    {
      title: 'Question Papers & Solutions',
      icon: Award,
      badge: 'Exams',
      content: [
        'How to find previous-year question papers: In Explore, set the type filter to "Question Papers", or inspect the PYQ list inside your semester.',
        'How to access available solutions: Solved answer sheets are cross-linked directly inside corresponding question paper pages.',
        'How to use question papers for exam preparation: Review the 70-marks question distributions to target high-frequency numerical topics.'
      ]
    },
    {
      title: 'Account & Access',
      icon: ShieldCheck,
      badge: 'Security',
      content: [
        'How to register and log in: Click "Sign In" in the sidebar. For testing, you can use the 1-Click Demo Credentials button.',
        'Why login is required to access resources: To maintain academic resource integrity and prevent automated bulk-scraping.',
        'How to update profile information: Visit the Profile page to edit your display name, college name, and current semester enrollment.',
        'How to change passwords: Use the Password shortcut on either Profile or Settings.'
      ]
    }
  ];

  const faqs = [
    {
      q: 'How do I find notes for a particular subject?',
      a: 'Go to Courses → MCA → select your Semester (e.g., Semester 1) → click the subject (e.g., Programming in C with Data Structure) → open the relevant Unit.'
    },
    {
      q: 'Can I search for a specific topic without knowing its semester?',
      a: 'Yes! Open the Explore page and enter the topic keyword (for example, "DBMS Normalization" or "Banker Algorithm"). Syllora will search the entire MCA repository across all semesters.'
    },
    {
      q: 'Why do I need to sign in to open resources?',
      a: 'Signing in preserves academic resource security and allows Syllora to remember your current semester preferences for quick navigation.'
    },
    {
      q: 'How do I download a PDF?',
      a: 'Open the resource details page while signed in and click the "Download" button on the top toolbar of the interactive viewer.'
    },
    {
      q: 'What should I do if a PDF is not opening?',
      a: 'First refresh the page. If the issue persists, scroll to the "Report a Problem" section below and submit a report under "PDF not opening" for administrative review.'
    },
    {
      q: 'Why can\'t I find a particular subject or resource?',
      a: 'Syllora is actively curated by academic coordinators. If a specific subject elective or question paper session has not yet been uploaded, it is cataloged for upcoming upload.'
    },
    {
      q: 'Are previous-year question paper solutions available for every paper?',
      a: 'Solutions are prepared and verified by senior faculty. Available model solutions are clearly marked and linked on the question paper\'s details page.'
    },
    {
      q: 'How can I change my account password?',
      a: 'Visit the Settings or Profile page and click "Change Password" to update your credentials.'
    }
  ];

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportDesc.trim()) {
      setReportError('Please provide a brief description of the issue.');
      return;
    }

    setReportSuccess(true);
    setReportError('');
    setReportDesc('');
    setTimeout(() => setReportSuccess(false), 5000);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* Header */}
      <div className="text-center space-y-3 py-4">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-950 text-[#E6A02D]">
          Student Help Centre
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#25252B] dark:text-white font-['Poppins']">
          How can we help you?
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
          Find answers, learn how to use Syllora, and get help with your academic resources.
        </p>
      </div>

      {/* Section A — Quick Help Categories */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Quick Help Categories
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Click on a topic below to read its step-by-step user guide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guides.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeGuide === index;
            return (
              <div
                key={index}
                onClick={() => setActiveGuide(isSelected ? null : index)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-500/10 border-[#E6A02D] shadow-sm'
                    : 'bg-white dark:bg-neutral-800 border-neutral-100 dark:border-neutral-700/60 hover:border-neutral-300'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-[#E6A02D] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-[#25252B] dark:text-white">{item.title}</h3>
                <span className="text-[10px] text-neutral-400 block mt-1">{item.badge}</span>
              </div>
            );
          })}
        </div>

        {/* Expanded Guide Content Drawer */}
        {activeGuide !== null && (
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/40 shadow-sm animate-fadeIn">
            <h3 className="font-bold text-sm text-[#25252B] dark:text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6A02D]" />
              <span>{guides[activeGuide].title} — Step-by-Step Guide</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {guides[activeGuide].content.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E6A02D] mt-1.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Section B — Frequently Asked Questions Accordion */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Instant answers to the most common queries regarding subjects, search, and files.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#25252B] dark:text-white cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#E6A02D] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-700/40 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Section C — Study Smarter with Syllora (Informational Cards) */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Study Smarter with Syllora
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Recommended academic methodologies for exam preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-sm text-[#25252B] dark:text-white">Prepare Unit by Unit</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Use the syllabus and unit-wise notes to organize your preparation systematically before exams.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-sm text-[#25252B] dark:text-white">Practise with Previous-Year Papers</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Use available question papers to understand exam patterns, question framing, and practice answering.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-sm text-[#25252B] dark:text-white">Learn with Video Resources</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Use related YouTube lectures to strengthen your intuitive understanding of difficult mathematical and algorithmic topics.
            </p>
          </div>
        </div>
      </section>

      {/* Section D — Report a Problem Form */}
      <section className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#E6A02D]" />
            <span>Something not working?</span>
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            Help us improve Syllora by reporting broken links, missing resources, or incorrect academic information.
          </p>
        </div>

        {reportSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Thank you! Your issue report has been recorded and submitted to the academic team.</span>
          </div>
        )}

        {reportError && (
          <div className="p-3.5 rounded-xl bg-rose-50 text-rose-800 text-xs font-medium">
            {reportError}
          </div>
        )}

        <form onSubmit={handleReportSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Issue Category
            </label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-3 focus:outline-none focus:border-[#E6A02D]"
            >
              <option value="PDF not opening">PDF not opening</option>
              <option value="Broken resource link">Broken resource link</option>
              <option value="Missing notes or resources">Missing notes or resources</option>
              <option value="Incorrect subject or unit information">Incorrect subject or unit information</option>
              <option value="Video playback issue">Video playback issue</option>
              <option value="Login or account issue">Login or account issue</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Short Description
            </label>
            <textarea
              rows={4}
              value={reportDesc}
              onChange={e => setReportDesc(e.target.value)}
              placeholder="Please describe the subject code, unit, or resource name with the issue..."
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-3 focus:outline-none focus:border-[#E6A02D]"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#E6A02D] hover:bg-[#cf8e24] text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Report</span>
          </button>
        </form>
      </section>

      {/* Section E — Support Footer */}
      <footer className="text-center p-8 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
        <h3 className="font-bold text-sm text-[#25252B] dark:text-white font-['Poppins']">
          Still need help?
        </h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
          Reach out to the Syllora project team for assistance or curriculum verification.
        </p>
        <p className="text-[11px] text-[#E6A02D] font-semibold pt-1">
          Syllora MCA Minor Project • 2024–2026 Academic Session
        </p>
      </footer>
    </div>
  );
};
