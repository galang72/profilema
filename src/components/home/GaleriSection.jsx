import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { LightboxModal } from '../common/LightboxModal';
import { useSchool } from '../../context/SchoolContext';

export const GaleriSection = () => {
  const { data } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const categories = [
    'Semua',
    'Kegiatan Belajar',
    'Keagamaan',
    'Ekstrakurikuler',
    'Perlombaan',
    'Kegiatan Sekolah',
  ];

  // Parallax Scroll Tracking for Differential Speeds
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const total = windowHeight + rect.height;
        const current = windowHeight - rect.top;
        setScrollProgress(Math.min(Math.max(current / total, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredGallery = selectedCategory === 'Semua'
    ? data.gallery
    : data.gallery.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="galeri" ref={sectionRef} className="relative py-24 sm:py-32 bg-[#011611]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Dokumentasi Visual"
          title="Galeri Kegiatan MA AL-GHAZALI"
          subtitle="Potret keseharian santri dalam menuntut ilmu, beribadah, berkarya seni, dan berkompetisi secara sportif."
        />

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-glow-emerald border border-emerald-400'
                  : 'bg-emerald-950/70 text-slate-300 hover:text-white hover:bg-emerald-900/50 border border-emerald-800/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Differential Parallax Grid (Even columns move faster, Odd columns move slower) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item, idx) => {
            // Calculate differential parallax offset per item
            const isOddColumn = idx % 2 !== 0;
            const parallaxY = isOddColumn
              ? (scrollProgress - 0.5) * -35
              : (scrollProgress - 0.5) * 25;

            return (
              <div
                key={item.id}
                className="transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${parallaxY}px)` }}
              >
                <TiltCard maxTilt={10} scale={1.03} className="h-full rounded-3xl">
                  <div
                    onClick={() => handleOpenLightbox(idx)}
                    className="h-full group cursor-pointer glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-gold-400/50 flex flex-col transition-all duration-300 shadow-xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                        {item.category}
                      </span>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-gold-400 text-emerald-950 flex items-center justify-center shadow-glow-gold scale-90 group-hover:scale-100 transition-transform">
                          <Eye className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <h4 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300/80 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>

                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/galeri"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-100 glass-panel border border-emerald-500/30 hover:border-gold-400/50 hover:text-gold-300 transition-colors"
          >
            <ImageIcon className="w-4 h-4 text-gold-400" />
            <span>Buka Seluruh Arsip Foto & Video Dokumentasi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredGallery}
        currentIndex={currentIndex}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredGallery.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < filteredGallery.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
};
