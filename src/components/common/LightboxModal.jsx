import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const LightboxModal = ({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-white hover:text-gold-400 hover:bg-emerald-900 transition-colors"
        aria-label="Tutup"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-white hover:text-gold-400 hover:bg-emerald-900 transition-colors"
          aria-label="Sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-white hover:text-gold-400 hover:bg-emerald-900 transition-colors"
          aria-label="Selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center text-center">
        <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl max-h-[70vh] bg-black">
          <img
            src={currentItem.image}
            alt={currentItem.title || 'Foto Galeri'}
            className="w-full h-full object-contain max-h-[70vh] select-none"
          />
        </div>

        {/* Caption & Category */}
        <div className="mt-4 px-4 max-w-2xl">
          {currentItem.category && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-900/80 text-gold-400 border border-gold-500/30 mb-1.5">
              {currentItem.category}
            </span>
          )}
          <h4 className="text-lg font-bold text-white mb-1">{currentItem.title}</h4>
          {currentItem.caption && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentItem.caption}</p>
          )}
          {currentItem.desc && !currentItem.caption && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentItem.desc}</p>
          )}
          <span className="text-[11px] text-slate-500 font-mono mt-2 block">
            {currentIndex + 1} dari {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
