import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { LightboxModal } from '../common/LightboxModal';
import { useSchool } from '../../context/SchoolContext';

export const FasilitasSection = () => {
  const { data } = useSchool();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="fasilitas" ref={sectionRef} className="relative py-24 sm:py-32 bg-[#011611]/30 overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Sarana & Prasarana"
          title="Fasilitas Kampus Modern"
          subtitle="Lingkungan belajar representatif berstandar tinggi yang menunjang eksplorasi sains, teknologi, dan ibadah secara nyaman."
        />

        {/* Facilities Grid with Clip-Path Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.facilities.slice(0, 8).map((fac, idx) => (
            <div
              key={fac.id}
              className={`transition-all duration-700 ease-out ${
                inView
                  ? 'opacity-100 translate-y-0 scale-100 blur-0'
                  : 'opacity-0 translate-y-12 scale-105 blur-sm'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <TiltCard maxTilt={10} scale={1.02} className="h-full rounded-3xl">
                <div
                  onClick={() => openLightbox(idx)}
                  className="h-full group cursor-pointer glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between transition-all duration-300 shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                      {fac.category}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-11 h-11 rounded-full bg-gold-400 text-emerald-950 flex items-center justify-center shadow-glow-gold">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5 line-clamp-1">
                        {fac.title}
                      </h3>
                      <p className="text-xs text-slate-300/80 line-clamp-2 leading-relaxed mb-3">
                        {fac.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-emerald-800/40 flex flex-wrap gap-1.5">
                      {fac.specs.slice(0, 2).map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="inline-flex items-center gap-1 text-[10px] text-emerald-300/90 bg-emerald-950/70 px-2 py-0.5 rounded-md border border-emerald-700/30"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-gold-400" />
                          <span className="truncate max-w-[120px]">{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/fasilitas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-100 glass-panel border border-emerald-500/30 hover:border-gold-400/50 hover:text-gold-300 transition-colors"
          >
            <span>Jelajahi Seluruh Sarana & Fasilitas Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={data.facilities}
        currentIndex={currentIndex}
        onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : data.facilities.length - 1))}
        onNext={() => setCurrentIndex((prev) => (prev < data.facilities.length - 1 ? prev + 1 : 0))}
      />
    </section>
  );
};
