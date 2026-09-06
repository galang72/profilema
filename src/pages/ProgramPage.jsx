import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenCheck, 
  HeartHandshake, 
  Laptop, 
  Languages, 
  Palette, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Atom, 
  Globe, 
  BookMarked,
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/3d/TiltCard';
import { useSchool } from '../context/SchoolContext';

const programIcons = {
  BookOpenCheck,
  HeartHandshake,
  Laptop,
  Languages,
  Palette,
  Award,
};

const trackIcons = {
  Atom,
  Globe,
  BookMarked,
  Sparkle: Sparkles,
};

export const ProgramPage = () => {
  const { data } = useSchool();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const graduateTargets = [
    { title: "Hafizh Al-Qur'an Minimal 5 Juz", desc: "Lulus dengan hafalan mutqin dan memiliki pemahaman tajwid serta sanad riwayat yang jelas." },
    { title: "Kecakapan Dwi-Bahasa (Arab & Inggris)", desc: "Mampu berkomunikasi aktif serta mengantongi skor standar persiapan TOEFL dan TOAFL." },
    { title: "Kesiapan Tembus PTN & PTKIN Terbaik", desc: "Dukungan intensif klinik UTBK dan UM-PTKIN untuk memastikan santri diterima di kampus idaman." },
    { title: "Literasi Digital & Prototyping", desc: "Mampu memanfaatkan kecerdasan buatan, dasar coding, serta multimedia secara produktif dan beretika." },
    { title: "Adab dan Karakter Mandiri", desc: "Memiliki kebiasaan shalat berjamaah, akhlak terpuji terhadap orang tua/guru, dan kepedulian sosial." },
  ];

  return (
    <div className="pt-28 pb-24 bg-transparent min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-[#02281e] to-[#011611] border-b border-emerald-500/20 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Kurikulum & Peminatan
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Program Pendidikan <span className="text-gradient-gold">Terpadu</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Menghadirkan perpaduan harmonis antara kurikulum nasional Kemenag, kurikulum pesantren turots, serta pengayaan sains teknologi abad ke-21.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1: 6 Program Unggulan */}
        <div>
          <SectionHeading
            badge="Pilar Keunggulan"
            title="Enam Program Unggulan MA AL-GHAZALI"
            subtitle="Fokus pembinaan intensif yang dirancang untuk memperkuat keunikan potensi setiap santri."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.flagshipPrograms.map((p, idx) => {
              const Icon = programIcons[p.iconName] || BookOpenCheck;
              return (
                <TiltCard key={p.id} maxTilt={8} className="h-full rounded-3xl">
                  <div className="h-full glass-card p-7 rounded-3xl border border-emerald-500/20 hover:border-gold-400/50 bg-gradient-to-b from-emerald-950/70 to-[#02241b]/90 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-950 border border-gold-400/40 flex items-center justify-center text-gold-400 shadow-md">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xl font-bold text-emerald-700/60">0{idx + 1}</span>
                      </div>

                      <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 mb-2">
                        {p.badge}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{p.title}</h3>
                      <p className="text-xs text-gold-400 font-medium mb-3">{p.subtitle}</p>
                      <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-6">{p.desc}</p>

                      <div className="space-y-2 border-t border-emerald-800/40 pt-4">
                        <span className="text-[11px] font-semibold text-slate-300 block mb-1">Kegiatan & Fasilitas Utama:</span>
                        {p.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-emerald-800/40">
                      <Link
                        to="/ppdb"
                        className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center justify-between group"
                      >
                        <span>Daftar Melalui Program Ini</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Section 2: Pilihan Jurusan / Peminatan */}
        <div>
          <SectionHeading
            badge="Struktur Peminatan"
            title="Pilihan Jurusan & Konsentrasi Studi"
            subtitle="Kurikulum fleksibel yang mengarahkan peserta didik pada disiplin ilmu yang tepat sesuai passion."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.academicTracks.map((tr) => {
              const Icon = trackIcons[tr.icon] || Sparkles;
              return (
                <div
                  key={tr.id}
                  className="glass-card p-8 rounded-3xl border border-emerald-500/20 hover:border-gold-400/40 bg-gradient-to-b from-[#032a21]/80 to-[#011a14]/95 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-gold-400/40 flex items-center justify-center text-gold-400">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-gold-400 tracking-wider block">{tr.badge}</span>
                          <h3 className="text-xl font-bold text-white">{tr.title}</h3>
                        </div>
                      </div>
                      <span className="font-mono text-sm font-extrabold text-emerald-400 bg-emerald-950/90 px-3 py-1 rounded-xl border border-emerald-700/40">
                        {tr.code}
                      </span>
                    </div>

                    <p className="text-sm text-slate-300/90 leading-relaxed mb-6">
                      {tr.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700/30">
                        <span className="text-xs font-bold text-gold-300 block mb-2">Mata Pelajaran Khas:</span>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {tr.courses.map((c, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700/30">
                        <span className="text-xs font-bold text-emerald-300 block mb-2">Prospek Karier & Jurusan PTN:</span>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {tr.prospects.map((p, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-emerald-800/40">
                    <Link
                      to="/ppdb"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold transition-all"
                    >
                      <span>Pilih Jurusan Ini di Form PPDB</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Target Kompetensi Lulusan */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card-gold border border-gold-400/40">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Profil & Target Kompetensi Lulusan MA AL-GHAZALI
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {graduateTargets.map((gt, i) => (
              <div key={i} className="p-5 rounded-2xl bg-emerald-950/80 border border-emerald-600/30">
                <div className="flex items-center gap-2 text-gold-400 mb-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <h4 className="text-sm font-bold text-white">{gt.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{gt.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
