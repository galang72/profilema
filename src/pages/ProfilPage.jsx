import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  ArrowRight,
  Quote 
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/3d/TiltCard';
import { useSchool } from '../context/SchoolContext';

export const ProfilPage = () => {
  const { data } = useSchool();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    { title: "Al-Hikmah (Kebijaksanaan)", desc: "Menimbang setiap ilmu dan keputusan dengan kearifan syariat dan penalaran yang mendalam." },
    { title: "Al-Adab (Keteladanan)", desc: "Mendahulukan adab dan tata krama sebelum meraih puncak keilmuan." },
    { title: "Al-Ihsan (Kualitas Terbaik)", desc: "Senantiasa beramal dan berkarya dengan standar mutu tertinggi semata karena Allah SWT." },
    { title: "Al-Istiqomah (Integritas)", desc: "Teguh dalam memegang prinsip kebenaran, kejujuran, dan konsistensi ibadah harian." },
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-transparent min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-[#02281e] to-[#011611] border-b border-emerald-500/20 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 p-2 rounded-2xl bg-emerald-950/70 border border-gold-400/50 shadow-glow-gold flex items-center justify-center animate-float-slow">
            <img
              src={data.identity.logoUrl}
              alt="Logo Resmi MA AL-GHAZALI"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Tentang Madrasah
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Profil <span className="text-gradient-gold">{data.identity.name}</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Meneladani semangat kecendekiawanan Hujjatul Islam Imam Al-Ghazali dalam memadukan ilmu aqliyah dan naqliyah bagi generasi muslim masa kini.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Sambutan Kepala Madrasah */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <TiltCard maxTilt={8} className="rounded-3xl p-1 bg-gradient-to-tr from-gold-500/40 to-emerald-600/30">
              <div className="rounded-[22px] overflow-hidden bg-emerald-950 aspect-[3/4] relative">
                <img
                  src={data.principal?.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"}
                  alt={data.principal?.name || "Kepala MA AL-GHAZALI"}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-emerald-500/30 text-center">
                  <h4 className="text-base font-bold text-white">{data.principal?.name || "Dr. H. Ahmad Dahlan, M.Ag."}</h4>
                  <span className="text-xs text-gold-300 font-medium">{data.principal?.title || "Kepala MA AL-GHAZALI"}</span>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-900/40 text-gold-400 text-xs font-semibold">
              <Quote className="w-3.5 h-3.5" /> Sambutan Pimpinan
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              "{data.principal?.greetingTitle || "Mempersiapkan Generasi Muslim Berilmu Luas, Berjiwa Luhur, dan Berkarya Nyata"}"
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300/90 leading-relaxed">
              {Array.isArray(data.principal?.greetingText) ? (
                data.principal.greetingText.map((paragraph, idx) => (
                  <p key={idx} className={idx === data.principal.greetingText.length - 1 ? "font-semibold text-emerald-300" : ""}>
                    <em>{paragraph}</em>
                  </p>
                ))
              ) : (
                <p><em>{data.principal?.greetingText}</em></p>
              )}
            </div>
          </div>
        </div>

        {/* Sejarah & Latar Belakang */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/60 to-[#02241b]/80">
          <h3 className="text-2xl font-bold text-white mb-4">Sejarah Berdirinya MA AL-GHAZALI</h3>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Didirikan pada tahun <strong>2008</strong> di bawah naungan Yayasan Pendidikan Islam Al-Ghazali, madrasah ini berawal dari kegelisahan para ulama dan tokoh masyarakat akan perlunya madrasah aliyah tingkat atas yang tidak sekadar menyajikan teori agama secara konvensional, melainkan menyandingkannya secara seimbang dengan kemajuan sains dan teknologi abad ke-21.
            </p>
            <p>
              Nama <em>Al-Ghazali</em> disematkan sebagai doa dan komitmen untuk meneladani figur monumental Abu Hamid Al-Ghazali, sang pembaharu peradaban Islam yang berhasil mengintegrasikan kedalaman sufistik, ketajaman filsafat logika, dan keteguhan syariat Islam.
            </p>
            <p>
              Kini, dengan akreditasi <strong>A (Unggul)</strong> dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-SM), MA AL-GHAZALI telah meluluskan ribuan alumni yang tersebar di berbagai universitas terkemuka seperti UI, ITB, UGM, Unpad, IPB, UIN Syarif Hidayatullah, hingga Universitas Al-Azhar di Kairo, Mesir.
            </p>
          </div>
        </div>

        {/* Nilai-nilai Dasar Sekolah */}
        <div>
          <SectionHeading
            badge="Karakter Santri"
            title="Empat Pilar Nilai Dasar MA AL-GHAZALI"
            subtitle="Prinsip utama yang diinternalisasikan dalam kehidupan harian civitas madrasah."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl border border-emerald-500/20 hover:border-gold-400/50 bg-gradient-to-b from-emerald-950/60 to-[#02241b]/80 transition-all"
              >
                <span className="text-gold-400 font-mono text-xl font-extrabold block mb-2">0{i + 1}</span>
                <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                <p className="text-xs text-slate-300/80 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legalitas & Akreditasi Banner */}
        <div className="p-8 rounded-3xl glass-card-gold border border-gold-400/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300 shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Status Legalitas & Akreditasi Resmi</h4>
              <p className="text-xs text-slate-300">NPSN: {data.identity.npsn} &middot; NSM: {data.identity.nsm} &middot; Kemenag RI</p>
            </div>
          </div>

          <Link
            to="/ppdb"
            className="px-6 py-3 rounded-xl text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold whitespace-nowrap"
          >
            Gabung Bersama Kami &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
};
