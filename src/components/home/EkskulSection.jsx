import React from 'react';
import { 
  Compass, 
  Flag, 
  Activity, 
  Trophy, 
  Music, 
  BookOpen, 
  HeartPulse, 
  Feather, 
  Terminal, 
  Camera, 
  Sparkles 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

const ekskulIcons = {
  Compass,
  Flag,
  Activity,
  Trophy,
  Music,
  BookOpen,
  HeartPulse,
  Feather,
  Terminal,
  Camera,
};

export const EkskulSection = () => {
  const { data } = useSchool();

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#011611]/30 via-[#02281e]/20 to-[#011611]/30 overflow-hidden">
      {/* Background Islamic Arabesque */}
      <div className="absolute inset-0 bg-arabesque-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Bakat & Minat Santri"
          title="Kembangkan Potensimu"
          subtitle="Wadah eksplorasi kepemimpinan, olahraga, seni budaya Islam, dan teknologi untuk membangun pribadi yang seimbang dan tangguh."
        />

        {/* 3D Extracurricular Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {data.extracurriculars.map((ekskul, idx) => {
            const Icon = ekskulIcons[ekskul.icon] || Sparkles;
            return (
              <TiltCard
                key={idx}
                maxTilt={12}
                scale={1.03}
                className="h-full rounded-2xl"
              >
                <div className="h-full glass-card p-5 rounded-2xl border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between group bg-gradient-to-b from-emerald-950/60 to-[#02241b]/80 shadow-lg transition-all duration-300">
                  
                  <div>
                    {/* Top Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400/90 bg-emerald-900/50 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                        {ekskul.category}
                      </span>
                    </div>

                    {/* 3D Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-950 border border-gold-400/30 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:border-gold-400 transition-transform shadow-md">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-bold text-white group-hover:text-gold-200 transition-colors mb-1.5">
                      {ekskul.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-300/80 leading-relaxed">
                      {ekskul.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-emerald-800/40 text-[11px] font-medium text-emerald-400/80">
                    <span>Latihan Berkala Terbimbing</span>
                  </div>

                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
