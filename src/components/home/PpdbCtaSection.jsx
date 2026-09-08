import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  Calendar
} from 'lucide-react';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

export const PpdbCtaSection = () => {
  const { data } = useSchool();
  const { ppdbInfo } = data;
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
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-[#011611]/30 overflow-hidden">
      {/* Dynamic Animated Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-[#023528] via-[#044a39] to-[#01140f] transition-opacity duration-1000 ${
          inView ? 'opacity-100' : 'opacity-40'
        }`}
      />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 3D Card Banner with Cinematic Reveal */}
        <TiltCard maxTilt={6} scale={1.01} className="w-full rounded-[36px]">
          <div
            className={`relative rounded-[36px] glass-card-gold p-8 sm:p-14 lg:p-16 border-2 border-gold-400/40 shadow-2xl overflow-hidden bg-gradient-to-b from-[#043d30]/90 via-[#022a21]/95 to-[#011913] transition-all duration-1000 ease-out ${
              inView
                ? 'opacity-100 translate-y-0 scale-100 blur-0'
                : 'opacity-0 translate-y-16 scale-90 blur-md'
            }`}
          >
            
            {/* Background 3D Geometric Watermark */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gold-400 animate-spin-slow">
                <rect x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(45 50 50)" />
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Year Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-md ${
                  (ppdbInfo.isRegistrationOpen ?? true)
                    ? 'bg-gold-500/20 border-gold-400/50 text-gold-300 shadow-glow-gold'
                    : 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                }`}>
                  <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
                  <span>
                    {(ppdbInfo.isRegistrationOpen ?? true)
                      ? `PPDB T.A. ${ppdbInfo.academicYear} Telah Dibuka`
                      : `PPDB T.A. ${ppdbInfo.academicYear} Ditutup`}
                  </span>
                </div>

                {/* Big Headline with blur -> sharp reveal */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Bersiap Menjadi Bagian dari <span className="text-gradient-gold">MA AL-GHOZALI</span>
                </h2>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {ppdbInfo.subheadline}. Raih beasiswa prestasi khusus hafidz Al-Qur'an dan juara kompetisi sains madrasah.
                </p>

                {/* 4 Steps Horizontal Flow */}
                <div className="pt-2 pb-4">
                  <span className="text-xs text-gold-300 font-bold uppercase tracking-wider block mb-3">
                    Alur Pendaftaran Mudah:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {ppdbInfo.steps.map((s) => (
                      <div key={s.step} className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-700/30">
                        <span className="w-5 h-5 rounded-full bg-gold-500 text-emerald-950 font-bold text-[10px] flex items-center justify-center mb-1.5 shadow-sm">
                          {s.step}
                        </span>
                        <h4 className="text-xs font-bold text-white leading-tight mb-1">{s.title}</h4>
                        <p className="text-[10px] text-slate-300 line-clamp-2">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons with Spring/Bounce Effect */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <Link
                    to="/ppdb"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-emerald-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce"
                  >
                    <GraduationCap className="w-5 h-5 text-emerald-950" />
                    <span>Daftar Sekarang</span>
                    <ArrowRight className="w-5 h-5 text-emerald-950" />
                  </Link>

                  <Link
                    to="/ppdb"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold text-slate-200 glass-panel border border-emerald-500/30 hover:border-gold-400/50 hover:text-gold-300 hover:bg-emerald-900/50 transition-all"
                  >
                    <FileText className="w-4 h-4 text-gold-400" />
                    <span>Informasi & Syarat PPDB</span>
                  </Link>
                </div>

              </div>

              {/* Right Column: 3D Visual Artifacts */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  
                  <div className="relative p-6 rounded-3xl glass-panel border border-gold-400/40 shadow-2xl bg-gradient-to-br from-emerald-900/70 to-emerald-950/90 text-center">
                    
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-amber-400 via-gold-500 to-amber-600 flex items-center justify-center shadow-glow-gold animate-float-slow">
                      <GraduationCap className="w-12 h-12 text-emerald-950" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">Kuota Terbatas!</h3>
                    <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                      Penerimaan santri baru dibatasi per rombongan belajar demi menjamin efektivitas pengajaran dan kenyamanan santri.
                    </p>

                    <div className="space-y-2.5 text-left">
                      {ppdbInfo.waves.map((w, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-700/30 flex items-center justify-between">
                          <div>
                            <span className="block text-xs font-bold text-white">{w.name}</span>
                            <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <Calendar className="w-3 h-3 text-gold-400" /> {w.period}
                            </span>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            idx === 0 
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 animate-pulse' 
                              : 'bg-slate-700/40 text-slate-400 border border-slate-600/30'
                          }`}>
                            {w.status}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
};
