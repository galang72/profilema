import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, GraduationCap, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

export const ProfileSection = () => {
  const { data } = useSchool();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [counts, setCounts] = useState({
    year: 0,
    students: 0,
    teachers: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax Scroll Tracking for Profile Section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const total = windowHeight + rect.height;
        const current = windowHeight - rect.top;
        setScrollProgress(Math.min(Math.max(current / total, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated Counter Logic
  useEffect(() => {
    if (!inView) return;

    let start = null;
    const duration = 1800;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        year: Math.floor(ease * (2008 - 1980) + 1980),
        students: Math.floor(ease * 680),
        teachers: Math.floor(ease * 48),
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCounts({
          year: 2008,
          students: 680,
          teachers: 48,
        });
      }
    };

    window.requestAnimationFrame(step);
  }, [inView]);

  // Parallax Offsets per Layer
  const layer1Offset = (scrollProgress - 0.5) * -60; // Background (slow)
  const layer2Offset = (scrollProgress - 0.5) * -30; // Main Photo (medium)
  const layer3Offset = (scrollProgress - 0.5) * 40;  // Foreground Cards/Text (fast)

  return (
    <section id="profil" ref={sectionRef} className="relative py-24 sm:py-32 bg-[#011611]/30 overflow-hidden">
      {/* LAYER 1: Background Decorative Elements (Parallax Ratio 0.2) */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${layer1Offset}px)` }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-arabesque-pattern opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Profil Lembaga"
          title="Mengenal MA AL-GHAZALI"
          subtitle="Pondasi keilmuan yang kokoh dan berkarakter, mengantarkan santri menuju masa depan gemilang di kancah nasional maupun global."
        />

        {/* Split Layout with Multi-Layer Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LAYER 2: Main Image Showcase (Parallax Ratio 0.5) */}
          <div
            className="lg:col-span-5 transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${layer2Offset}px)` }}
          >
            <TiltCard maxTilt={10} scale={1.03} className="rounded-3xl p-1 bg-gradient-to-tr from-gold-500/40 via-emerald-500/20 to-transparent shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-emerald-950 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
                  alt="Gedung Kampus MA AL-GHAZALI"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-80" />

                {/* Floating Accreditation Badge */}
                <div className="absolute top-4 left-4 glass-card-gold px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl animate-float-medium">
                  <div className="w-8 h-8 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-300">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-amber-200/80 uppercase font-semibold">Akreditasi</span>
                    <span className="text-sm font-extrabold text-gold-300">A (Unggul)</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-emerald-500/30">
                  <p className="text-xs font-semibold text-emerald-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400" />
                    Kampus Pendidikan Islami Terpadu & Berwawasan Lingkungan
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* LAYER 3: Foreground Text & Cards (Parallax Ratio 0.8) */}
          <div
            className="lg:col-span-7 space-y-6 transition-transform duration-75 ease-out"
            style={{ transform: `translateY(${layer3Offset}px)` }}
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                Integrasi Nilai Keislaman, Keunggulan Sains, dan Karakter Pemimpin
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                <strong>MA AL-GHAZALI</strong> merupakan lembaga pendidikan yang berkomitmen menghadirkan pendidikan berkualitas dengan memadukan nilai-nilai keislaman, ilmu pengetahuan, teknologi, dan pembentukan karakter peserta didik.
              </p>

              <p className="text-slate-300/80 text-sm leading-relaxed mb-6">
                Terinspirasi oleh keteladanan intelektual dan spiritual Imam Al-Ghazali, madrasah kami mendidik para santri agar tidak hanya cerdas dalam bernalar sains modern, tetapi juga memiliki kebersihan hati, akhlak terpuji, dan kesiapan bersaing di era digital.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-900/50 text-emerald-300 text-xs font-medium border border-emerald-600/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Kurikulum Merdeka Terintegrasi
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-900/50 text-emerald-300 text-xs font-medium border border-emerald-600/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Bimbingan Tahfidz Intensif
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-900/50 text-emerald-300 text-xs font-medium border border-emerald-600/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" /> Ekosistem Riset & Teknologi
                </span>
              </div>
            </div>

            {/* 4 Quick Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 text-center hover:border-gold-400/40 transition-colors">
                <Calendar className="w-5 h-5 text-gold-400 mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  {counts.year}
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Tahun Berdiri</span>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 text-center hover:border-gold-400/40 transition-colors">
                <Award className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-extrabold text-gold-400">
                  A <span className="text-xs text-slate-300 font-normal">Unggul</span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Akreditasi BAN-SM</span>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 text-center hover:border-gold-400/40 transition-colors">
                <Users className="w-5 h-5 text-teal-400 mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  {counts.students}+
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Siswa Aktif</span>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 text-center hover:border-gold-400/40 transition-colors">
                <GraduationCap className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                <div className="text-xl sm:text-2xl font-extrabold text-white">
                  {counts.teachers}+
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Tenaga Pendidik</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/profil"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors group"
              >
                <span>Pelajari Selengkapnya Tentang Sejarah & Visi Madrasah</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
