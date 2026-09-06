import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight, Newspaper } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

export const BeritaSection = () => {
  const { data } = useSchool();
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

  return (
    <section id="berita" ref={sectionRef} className="relative py-24 sm:py-32 bg-[#011611]/30 overflow-hidden">
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Warta Madrasah"
          title="Berita & Informasi Terbaru"
          subtitle="Ikuti kabar terkini seputar prestasi santri, agenda madrasah, inovasi kurikulum, dan pengumuman resmi."
        />

        {/* 3 Articles Grid with Z-Depth Reveal (scale 0.85 -> 1, opacity 0 -> 1) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.articles.slice(0, 3).map((article, idx) => (
            <div
              key={article.id}
              className={`transition-all duration-700 ease-out ${
                inView
                  ? 'opacity-100 translate-y-0 scale-100 blur-0'
                  : 'opacity-0 translate-y-16 scale-90 blur-md'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <TiltCard maxTilt={8} scale={1.02} className="h-full rounded-3xl">
                <div className="h-full glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between group bg-gradient-to-b from-emerald-950/50 to-[#02241b]/80 shadow-xl transition-all duration-300">
                  
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-70" />
                      
                      <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                          {article.date}
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold-400" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors leading-snug mb-3 line-clamp-2">
                        <Link to={`/berita/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed line-clamp-3 mb-4">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-emerald-800/40">
                    <Link
                      to={`/berita/${article.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors group/link"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-100 glass-panel border border-emerald-500/30 hover:border-gold-400/50 hover:text-gold-300 transition-colors"
          >
            <Newspaper className="w-4 h-4 text-gold-400" />
            <span>Lihat Semua Arsip Berita & Pengumuman</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
