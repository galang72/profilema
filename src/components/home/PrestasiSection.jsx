import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Medal, BookOpen, Cpu, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

const achievementIcons = {
  Trophy,
  Award,
  Medal,
  BookOpen,
  Cpu,
  Sparkles,
};

export const PrestasiSection = () => {
  const { data } = useSchool();
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [inView, setInView] = useState(false);
  const [countMedals, setCountMedals] = useState(0);
  const sectionRef = useRef(null);

  const years = ['Semua', '2026', '2025', '2024'];

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

  // Animated Counter: 0 -> 10 -> 25 -> 120+
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 1600;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCountMedals(Math.floor(ease * 120));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCountMedals(120);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView]);

  const filteredAchievements = selectedYear === 'Semua'
    ? data.achievements
    : data.achievements.filter((a) => String(a.year) === selectedYear);

  return (
    <section id="prestasi" ref={sectionRef} className="relative py-24 sm:py-32 bg-gradient-to-b from-[#011611]/30 via-[#022c22]/20 to-[#011611]/30 overflow-hidden">
      <div className="absolute top-12 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Jejak Juara"
          title="Prestasi & Pencapaian Membanggakan"
          subtitle="Bukti dedikasi santri dan guru pembimbing dalam mengukir tinta emas prestasi dari tingkat daerah hingga nasional."
        />

        {/* 3D Trophy Showcase Banner with Cinematic Rise & Animated Counter */}
        <div
          className={`mb-14 p-6 sm:p-8 rounded-3xl glass-card-gold border border-gold-400/40 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl transition-all duration-1000 ease-out ${
            inView
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-20 scale-90'
          }`}
        >
          <div className="flex items-center gap-5">
            {/* 3D Trophy rising and rotating */}
            <div
              className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 via-gold-500 to-amber-700 flex items-center justify-center shadow-glow-gold shrink-0 transition-transform duration-1000 ${
                inView ? 'rotate-0 scale-100' : '-rotate-45 scale-75'
              }`}
            >
              <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-emerald-950" />
            </div>

            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block">Statistik Prestasi</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                <span className="text-gradient-gold">{countMedals}+</span> Medali & Penghargaan Resmi
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">Akademik KSM, Sains OSN, MTQ Nasional, Robotika, Olahraga & Kaligrafi Islam.</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-950/80 p-1.5 rounded-2xl border border-emerald-700/40">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedYear === yr
                    ? 'bg-gradient-to-r from-amber-400 to-gold-500 text-emerald-950 shadow-glow-gold'
                    : 'text-slate-300 hover:text-white hover:bg-emerald-900/50'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item, idx) => {
            const Icon = achievementIcons[item.icon] || Trophy;
            return (
              <div
                key={item.id}
                className={`transition-all duration-700 ease-out ${
                  inView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(idx + 1) * 120}ms` }}
              >
                <TiltCard maxTilt={10} scale={1.02} className="h-full rounded-3xl">
                  <div className="h-full glass-card p-6 rounded-3xl border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between group bg-gradient-to-b from-emerald-950/60 to-[#02241b]/80 shadow-xl transition-all duration-300">
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gold-500/20 text-gold-300 border border-gold-400/30">
                          <Calendar className="w-3.5 h-3.5 text-gold-400" />
                          {item.year}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-300/80 uppercase tracking-wider">
                          {item.level}
                        </span>
                      </div>

                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-gold-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-gold-400 transition-all shadow-md">
                          <Icon className="w-5 h-5 text-gold-400" />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-900/30 border border-emerald-700/20 mb-3">
                        <span className="text-[10px] text-slate-400 block">Pemenang / Delegasi:</span>
                        <span className="text-xs font-bold text-amber-200">{item.winner}</span>
                      </div>

                      <p className="text-xs text-slate-300/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-emerald-800/40 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Bidang:</span>
                      <span className="font-semibold text-emerald-300">{item.category}</span>
                    </div>

                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/prestasi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-100 glass-panel border border-emerald-500/30 hover:border-gold-400/50 hover:text-gold-300 transition-colors"
          >
            <Trophy className="w-4 h-4 text-gold-400" />
            <span>Lihat Galeri Prestasi & Sertifikasi Selengkapnya</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
