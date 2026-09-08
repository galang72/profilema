import React, { useState, useEffect } from 'react';
import { Eye, Image as ImageIcon, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/3d/TiltCard';
import { LightboxModal } from '../components/common/LightboxModal';
import { useSchool } from '../context/SchoolContext';

export const GaleriPage = () => {
  const { data } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'Semua',
    'Kegiatan Belajar',
    'Keagamaan',
    'Ekstrakurikuler',
    'Perlombaan',
    'Kegiatan Sekolah',
  ];

  const filteredGallery = selectedCategory === 'Semua'
    ? data.gallery
    : data.gallery.filter((g) => g.category === selectedCategory);

  const openLightbox = (idx) => {
    setCurrentIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-transparent min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-[#02281e] to-[#011611] border-b border-emerald-500/20 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-gold-400" />
            Dokumentasi & Visual
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Galeri Kegiatan <span className="text-gradient-gold">Santri</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Abadikan momen-momen berharga dalam proses menuntut ilmu, pengabdian masyarakat, serta torehan prestasi di MA AL-GHOZALI.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, idx) => (
            <TiltCard key={item.id} maxTilt={8} className="h-full rounded-3xl">
              <div
                onClick={() => openLightbox(idx)}
                className="h-full group cursor-pointer glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                    {item.category}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-gold-400 text-emerald-950 flex items-center justify-center shadow-glow-gold">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300/80 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
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
    </div>
  );
};
