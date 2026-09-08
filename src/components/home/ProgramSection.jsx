import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenCheck, 
  HeartHandshake, 
  Laptop, 
  Languages, 
  Palette, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  X,
  Sparkles 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

gsap.registerPlugin(ScrollTrigger);

const programIcons = {
  BookOpenCheck,
  HeartHandshake,
  Laptop,
  Languages,
  Palette,
  Award,
};

export const ProgramSection = () => {
  const { data } = useSchool();
  const [selectedProgram, setSelectedProgram] = useState(null);
  
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isDesktop || prefersReducedMotion) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalScrollWidth = track.scrollWidth - section.clientWidth;

    // Create GSAP Horizontal Scroll Pinning
    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScrollWidth + 300}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [data.flagshipPrograms]);

  return (
    <section
      id="program"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#011611]/30 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-emerald-500/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] border border-gold-500/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-8">
        <SectionHeading
          badge="Kurikulum & Kompetensi"
          title="Program Unggulan MA AL-GHOZALI"
          subtitle="Enam pilar kurikulum terintegrasi untuk mencetak generasi cerdas, mandiri, dan berakhlakul karimah."
        />
      </div>

      {/* Horizontal Track Container */}
      <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div
          ref={trackRef}
          className="flex gap-6 sm:gap-8 w-max transition-transform ease-out"
        >
          {data.flagshipPrograms.map((program, idx) => {
            const Icon = programIcons[program.iconName] || BookOpenCheck;
            return (
              <div
                key={program.id}
                className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"
              >
                <TiltCard maxTilt={12} scale={1.03} className="h-full rounded-3xl">
                  <div className="h-full glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-b from-emerald-950/60 to-[#02241b]/80 shadow-card-3d transition-all duration-300">
                    
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-colors pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950 border border-gold-400/40 flex items-center justify-center shadow-glow-emerald group-hover:scale-110 group-hover:border-gold-400 transition-all duration-300">
                          <Icon className="w-7 h-7 text-gold-400 group-hover:text-amber-200 transition-colors" />
                        </div>
                        <span className="text-2xl font-extrabold text-emerald-800/40 group-hover:text-gold-500/30 transition-colors font-mono">
                          0{idx + 1}
                        </span>
                      </div>

                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 mb-2.5">
                        {program.badge}
                      </span>

                      <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-1.5">
                        {program.title}
                      </h3>
                      <p className="text-xs text-gold-400/90 font-medium mb-3">
                        {program.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-6">
                        {program.desc}
                      </p>

                      <div className="space-y-2 mb-6">
                        {program.highlights.slice(0, 3).map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-900/40 hover:bg-gold-500 hover:text-emerald-950 border border-emerald-600/30 hover:border-gold-400 transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Detail Program</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center relative z-10">
        <Link
          to="/program"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-100 glass-panel border border-emerald-500/30 hover:border-gold-400/50 hover:text-gold-300 transition-colors"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Lihat Rincian Kurikulum & Target Lulusan Lengkap</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg glass-card p-6 sm:p-8 rounded-3xl border border-gold-500/40 shadow-2xl bg-[#02241b]">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-emerald-900/60 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/40 mb-3">
              {selectedProgram.badge}
            </span>

            <h3 className="text-2xl font-bold text-white mb-1">
              {selectedProgram.title}
            </h3>
            <p className="text-sm text-gold-400 font-semibold mb-4">
              {selectedProgram.subtitle}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProgram.desc}
            </p>

            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Keunggulan & Agenda Program:
            </h4>
            <div className="space-y-2.5 mb-8">
              {selectedProgram.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Link
                to="/ppdb"
                className="flex-1 py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 hover:to-gold-300 transition-all shadow-glow-gold"
              >
                Daftar Melalui Program Ini
              </Link>
              <button
                onClick={() => setSelectedProgram(null)}
                className="py-3 px-5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-emerald-950/80 border border-emerald-700/40 hover:bg-emerald-900"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
