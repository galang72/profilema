import React, { useState, useEffect } from 'react';
import { Trophy, Award, Medal, Calendar, BookOpen, Cpu, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/3d/TiltCard';
import { useSchool } from '../context/SchoolContext';

const achievementIcons = {
  Trophy,
  Award,
  Medal,
  BookOpen,
  Cpu,
  Sparkles,
};

export const PrestasiPage = () => {
  const { data } = useSchool();
  const [selectedYear, setSelectedYear] = useState('Semua');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const years = ['Semua', '2026', '2025', '2024'];
  const categories = ['Semua', 'Akademik', 'Keagamaan', 'Teknologi', 'Bahasa', 'Seni & Budaya', 'Olahraga'];

  const filteredAchievements = data.achievements.filter((item) => {
    const matchYear = selectedYear === 'Semua' || String(item.year) === selectedYear;
    const matchCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchYear && matchCategory;
  });

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-transparent min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-[#02281e] to-[#011611] border-b border-emerald-500/20 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5 text-gold-400" />
            Hall of Fame
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Prestasi & <span className="text-gradient-gold">Pencapaian Santri</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Kumpulan rekam jejak juara yang mengharumkan nama madrasah di tingkat kabupaten, provinsi, dan nasional.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-emerald-500/20">
          
          {/* Year Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-400 mr-1">Tahun:</span>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedYear === y
                    ? 'bg-gold-500 text-emerald-950 shadow-glow-gold'
                    : 'bg-emerald-950/70 text-slate-300 hover:text-white border border-emerald-700/30'
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          {/* Category Dropdown/Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-400 mr-1">Bidang:</span>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === c
                    ? 'bg-emerald-500 text-white shadow-glow-emerald border border-emerald-400'
                    : 'bg-emerald-950/70 text-slate-300 hover:text-white border border-emerald-700/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => {
            const Icon = achievementIcons[item.icon] || Trophy;
            return (
              <TiltCard key={item.id} maxTilt={8} className="h-full rounded-3xl">
                <div className="h-full glass-card p-6 sm:p-7 rounded-3xl border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between group bg-gradient-to-b from-emerald-950/70 to-[#02241b]/90 shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gold-500/20 text-gold-300 border border-gold-400/30">
                        <Calendar className="w-3.5 h-3.5 text-gold-400" />
                        {item.year}
                      </span>
                      <span className="text-xs font-semibold text-emerald-300/90 uppercase tracking-wider">
                        {item.level}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-950 border border-gold-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Icon className="w-6 h-6 text-gold-400" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-700/30 mb-3">
                      <span className="text-[10px] text-slate-400 block">Peserta / Peraih:</span>
                      <span className="text-xs font-bold text-amber-200">{item.winner}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-emerald-800/40 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Kategori:</span>
                    <span className="font-semibold text-emerald-300">{item.category}</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-16 p-8 glass-card rounded-3xl border border-emerald-500/20">
            <Trophy className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold">Tidak ada prestasi yang cocok dengan filter yang dipilih.</p>
          </div>
        )}

      </div>
    </div>
  );
};
