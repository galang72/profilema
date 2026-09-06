import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  HeartHandshake, 
  Trophy, 
  Cpu, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

const iconMap = {
  BookOpen,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  Trophy,
  Cpu,
};

export const VisiMisiSection = () => {
  const { data } = useSchool();
  const { vision, mission, visionElaboration } = data.visionMission;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 bg-gradient-to-b from-[#011611]/30 via-[#022c22]/20 to-[#011611]/30 overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-arabesque-pattern opacity-40 pointer-events-none" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Landasan & Arah Kebijakan"
          title="Visi & Misi Madrasah"
          subtitle="Komitmen luhur kami dalam membimbing putra-putri bangsa menjadi insan berkarakter qur'ani dan berwawasan global."
        />

        {/* 2 Big 3D Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Kartu Pertama: VISI (Enters 1st) */}
          <div
            className={`lg:col-span-5 flex transition-all duration-700 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100 blur-0'
                : 'opacity-0 translate-y-16 scale-95 blur-md'
            }`}
          >
            <TiltCard maxTilt={8} scale={1.02} className="w-full h-full rounded-3xl">
              <div className="h-full glass-card p-8 sm:p-10 rounded-3xl border border-gold-500/30 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-emerald-900/60 via-[#04352a]/70 to-[#02241b]/90 shadow-2xl">
                
                <div className="absolute -right-16 -top-16 w-60 h-60 border border-gold-500/10 rounded-3xl rotate-45 pointer-events-none" />
                
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
                    <Compass className="w-4 h-4 text-gold-400" />
                    <span>Visi Utama MA AL-GHAZALI</span>
                  </div>

                  <div className="mb-6 pb-6 border-b border-emerald-700/30">
                    <span className="font-arabic text-2xl text-gold-300/80 block mb-2 leading-relaxed">
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </span>
                    <p className="text-xs text-emerald-300/70 italic">
                      "Menuntut ilmu adalah kewajiban bagi setiap muslim." (HR. Ibnu Majah)
                    </p>
                  </div>

                  <blockquote className="text-xl sm:text-2xl font-extrabold text-white leading-relaxed mb-6">
                    "{vision}"
                  </blockquote>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {visionElaboration}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-emerald-700/30 grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/30">
                    <span className="block text-xs font-bold text-gold-300">Iman & Taqwa</span>
                    <span className="text-[10px] text-slate-400">Pondasi Jiwa</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/30">
                    <span className="block text-xs font-bold text-emerald-300">Ilmu & Riset</span>
                    <span className="text-[10px] text-slate-400">Wawasan Maju</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/30">
                    <span className="block text-xs font-bold text-teal-300">Akhlakul Karimah</span>
                    <span className="text-[10px] text-slate-400">Adab Luhur</span>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Kartu Kedua: MISI (Enters 200ms later) */}
          <div
            className={`lg:col-span-7 flex transition-all duration-700 delay-200 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100 blur-0'
                : 'opacity-0 translate-y-16 scale-95 blur-md'
            }`}
          >
            <TiltCard maxTilt={8} scale={1.01} className="w-full h-full rounded-3xl">
              <div className="h-full glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/30 flex flex-col justify-between bg-gradient-to-b from-[#032a21]/80 to-[#011a14]/90 shadow-2xl">
                
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-900/60 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    <span>Misi Strategis Pendidikan</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    Langkah Nyata Mewujudkan Generasi Unggul
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {mission.map((item, idx) => {
                      const IconComponent = iconMap[item.icon] || Sparkles;
                      return (
                        <div
                          key={item.id}
                          className="group p-4 rounded-2xl bg-emerald-950/70 border border-emerald-700/30 hover:border-gold-400/50 hover:bg-emerald-900/40 transition-all duration-300 flex items-start gap-3.5"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 border border-gold-400/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-gold-400 transition-all shadow-md">
                            <IconComponent className="w-5 h-5 text-gold-400" />
                          </div>
                          <div>
                            <span className="text-[10px] text-gold-400/80 font-bold uppercase tracking-wider">Misi 0{idx + 1}</span>
                            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-gold-200 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-300/80 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-emerald-800/40 flex items-center justify-between text-xs text-slate-400">
                  <span>Berlandaskan Kurikulum Nasional & Tsaqafah Islamiyah</span>
                  <span className="text-gold-400 font-semibold">MA AL-GHAZALI</span>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
