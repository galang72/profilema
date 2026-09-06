import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Globe, BookMarked, Sparkles, Check, ArrowRight, Compass } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

const trackIcons = {
  Atom,
  Globe,
  BookMarked,
  Sparkle: Sparkles,
};

export const JurusanSection = () => {
  const { data } = useSchool();

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#011611]/30 via-[#02241b]/20 to-[#011611]/30 overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Peminatan Akademik"
          title="Pilihan Pendidikan untuk Masa Depan"
          subtitle="Ragam pilihan konsentrasi studi yang fleksibel, terstruktur, dan selaras dengan cita-cita santri menuju perguruan tinggi impian."
        />

        {/* 4 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.academicTracks.map((track) => {
            const Icon = trackIcons[track.icon] || Compass;
            return (
              <TiltCard
                key={track.id}
                maxTilt={10}
                scale={1.02}
                className="h-full rounded-3xl"
              >
                <div className="h-full glass-card p-6 rounded-3xl border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between group bg-gradient-to-b from-emerald-950/50 to-[#02241b]/80 shadow-xl transition-all duration-300">
                  
                  <div>
                    {/* Top Tag & Code */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-emerald-900/60 text-gold-300 border border-gold-500/20">
                        {track.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-emerald-400/80">
                        {track.code}
                      </span>
                    </div>

                    {/* 3D Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-gold-400 transition-all shadow-md">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                      {track.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                      {track.desc}
                    </p>

                    {/* Career Prospects */}
                    <div className="mb-4 pt-3 border-t border-emerald-800/40">
                      <span className="text-[11px] font-semibold text-emerald-300 block mb-2">
                        Prospek Studi Lanjut:
                      </span>
                      <ul className="space-y-1">
                        {track.prospects.slice(0, 3).map((p, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                            <Check className="w-3 h-3 text-gold-400 shrink-0" />
                            <span className="line-clamp-1">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer link to PPDB */}
                  <div className="pt-3 border-t border-emerald-800/40">
                    <Link
                      to="/ppdb"
                      className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center justify-between group/link"
                    >
                      <span>Pilih Jurusan Ini</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Note info */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400/80 max-w-xl mx-auto italic">
            * Struktur peminatan disesuaikan dengan Kurikulum Merdeka Kemenag RI dan dapat diperbarui oleh administrator sekolah sesuai regulasi terkini.
          </p>
        </div>

      </div>
    </section>
  );
};
