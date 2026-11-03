import React, { useState } from 'react';
import { ZoomIn, ZoomOut, Download, FileText, ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

interface Props {
  title: string;
  fileSize?: string;
  pages?: number;
  subjectName: string;
  unitNumber?: number;
}

export const PdfPreviewer: React.FC<Props> = ({
  title,
  fileSize = '3.5 MB',
  pages = 18,
  subjectName,
  unitNumber
}) => {
  const { isAuthenticated, setRedirectAfterLogin } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGuardedAction = (action: 'download' | 'view') => {
    if (!isAuthenticated) {
      setRedirectAfterLogin(location.pathname);
      navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`);
      return;
    }

    if (action === 'download') {
      setIsDownloaded(true);
      setTimeout(() => setIsDownloaded(false), 4000);
    }
  };

  return (
    <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-neutral-800 text-neutral-200">
      {/* Viewer Action Toolbar */}
      <div className="bg-neutral-800/90 px-4 py-3 border-b border-neutral-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#E6A02D]" />
          <span className="font-medium text-white truncate max-w-[200px] sm:max-w-xs">{title}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Zoom controls */}
          <div className="flex items-center bg-neutral-900 rounded-lg p-1 border border-neutral-700">
            <button
              onClick={() => setZoomLevel(prev => Math.max(75, prev - 15))}
              className="p-1 hover:text-white"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 text-[11px] font-mono">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(150, prev + 15))}
              className="p-1 hover:text-white"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Page Navigator */}
          <div className="flex items-center gap-1.5">
            <button
              disabled={currentPage <= 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="p-1 rounded bg-neutral-900 disabled:opacity-30 hover:text-white"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px]">
              Page {currentPage} of {pages}
            </span>
            <button
              disabled={currentPage >= pages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="p-1 rounded bg-neutral-900 disabled:opacity-30 hover:text-white"
              aria-label="Next page"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Download Action */}
          <button
            onClick={() => handleGuardedAction('download')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E6A02D] hover:bg-[#cf8e24] text-white font-semibold transition-all shadow-sm cursor-pointer"
          >
            {isAuthenticated ? (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download ({fileSize})</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5" />
                <span>Sign In to Download</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Simulated Document Canvas */}
      <div className="p-8 sm:p-12 flex justify-center bg-neutral-950 min-h-[460px] overflow-auto">
        <div
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          className="w-full max-w-2xl bg-white text-neutral-900 rounded-lg shadow-2xl p-8 sm:p-12 border border-neutral-200 transition-transform duration-200"
        >
          {/* Authentic Document Header */}
          <div className="border-b-2 border-neutral-800 pb-4 mb-6 flex justify-between items-start">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-600">
                Syllora Academic Repository
              </span>
              <h2 className="text-xl font-bold font-['Poppins'] text-[#25252B] mt-1">{subjectName}</h2>
              {unitNumber && (
                <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                  Unit {unitNumber} Lecture Study Material
                </span>
              )}
            </div>
            <div className="text-right text-[11px] text-neutral-500">
              <p>Verified Syllabus Match</p>
              <p className="font-mono text-neutral-400">Sheet: #{currentPage}</p>
            </div>
          </div>

          {/* Realistic Document Content Layout */}
          <div className="space-y-4 text-xs leading-relaxed text-neutral-700">
            <h4 className="font-bold text-sm text-neutral-900">
              {currentPage === 1 ? '1. Core Theoretical Foundations & Principles' : `Section ${currentPage}.2: Applied Implementations & Proofs`}
            </h4>
            <p>
              In computational systems, the syllabus dictates standard mathematical definitions and algorithmic
              efficiency metrics. As presented during semester lectures, state transitions must guarantee minimal
              latency and satisfy invariant properties.
            </p>
            <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-[#E6A02D] font-mono text-[11px] text-neutral-800 space-y-1">
              <p className="text-neutral-400">// Algorithmic Complexity Snapshot</p>
              <p>Time Complexity: O(log N) for balanced binary search tree operations</p>
              <p>Auxiliary Space: O(h) where h is the tree height</p>
            </div>
            <p>
              During university assessments, step-by-step diagrammatic derivations yield maximum marks. Ensure
              edge-case boundaries (e.g., null pointers or duplicate keys) are rigorously addressed.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-neutral-100 text-[10px] text-neutral-500">
              <div>Compiled by: Faculty Review Cell</div>
              <div className="text-right">Syllora Academic Prototype</div>
            </div>
          </div>
        </div>
      </div>

      {isDownloaded && (
        <div className="bg-emerald-600 text-white text-xs font-medium py-2 px-4 text-center animate-pulse">
          Download initiated: {title} ({fileSize}) is saved to your simulated downloads!
        </div>
      )}
    </div>
  );
};
