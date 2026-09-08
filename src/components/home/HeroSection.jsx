import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ChevronDown, ShieldCheck, Award, BookOpen, Star } from 'lucide-react';
import { HeroCanvas3D } from '../3d/HeroCanvas3D';
import { useSchool } from '../../context/SchoolContext';

export const HeroSection = () => {
  const { data } = useSchool();
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollY <= heroHeight * 1.5) {
        setScrollOffset(scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform metrics based on scroll offset
  const progress = Math.min(scrollOffset / (window.innerHeight || 800), 1);
  const titleTranslateY = -progress * 120;
  const subtitleOpacity = Math.max(1 - progress * 1.8, 0);
  const ctaScale = Math.max(1 - progress * 0.4, 0.85);
  const ctaOpacity = Math.max(1 - progress * 2.0, 0);

  const scrollToProfile = () => {
    const el = document.getElementById('profil');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroTags = [
    { title: "Berakhlak", icon: ShieldCheck, color: "from-emerald-500/20 to-emerald-700/20", border: "border-emerald-400/40", pos: "top-20 -left-6 sm:left-4 lg:left-12 xl:left-24", anim: "animate-float-slow" },
    { title: "Berprestasi", icon: Award, color: "from-amber-500/20 to-amber-700/20", border: "border-gold-400/50", pos: "top-28 -right-4 sm:right-6 lg:right-12 xl:right-24", anim: "animate-float-medium" },
    { title: "Berilmu", icon: BookOpen, color: "from-teal-500/20 to-emerald-800/20", border: "border-teal-400/40", pos: "bottom-32 -left-4 sm:left-10 lg:left-20", anim: "animate-float-reverse" },
    { title: "Berkarakter", icon: Star, color: "from-yellow-500/20 to-amber-800/20", border: "border-amber-300/40", pos: "bottom-28 -right-6 sm:right-12 lg:right-20", anim: "animate-float-slow" },
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* 3D WebGL Canvas Layer with scroll depth progress */}
      <HeroCanvas3D scrollProgress={progress} />

      {/* Floating 3D Glass Badges in Hero Space with Parallax */}
      <div
        className="absolute inset-0 pointer-events-none max-w-7xl mx-auto overflow-hidden transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${progress * 80}px) scale(${1 - progress * 0.15})`,
          opacity: 1 - progress * 1.5,
        }}
      >
        {heroTags.map((tag, idx) => {
          const Icon = tag.icon;
          return (
            <div
              key={idx}
              className={`absolute hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-panel ${tag.border} ${tag.color} shadow-2xl backdrop-blur-md ${tag.pos} ${tag.anim} pointer-events-auto hover:scale-110 cursor-pointer`}
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-gold-400/40 flex items-center justify-center shadow-inner">
                <Icon className="w-4 h-4 text-gold-400" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-emerald-300/70 font-semibold">Generasi</span>
                <span className="text-sm font-extrabold text-white tracking-wide">{tag.title}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Official School Emblem Logo */}
        <div
          className="mb-4 transition-transform duration-75"
          style={{
            transform: `translateY(${titleTranslateY * 0.3}px)`,
            opacity: subtitleOpacity,
          }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-2xl bg-emerald-950/80 border border-gold-400/50 shadow-glow-gold flex items-center justify-center backdrop-blur-md animate-float-medium">
            <img
              src={data.identity.logoUrl}
              alt="Logo Resmi MA AL-GHOZALI"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Top Tagline Pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-glow-gold backdrop-blur-md"
          style={{
            transform: `translateY(${titleTranslateY * 0.4}px)`,
            opacity: subtitleOpacity,
          }}
        >
          <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
          <span>Madrasah Aliyah Berstandar Unggul</span>
        </div>

        {/* Primary Headline */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl transition-transform duration-75"
          style={{
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          Membentuk Generasi{' '}
          <span className="text-gradient-gold drop-shadow-lg">Berilmu, Berakhlak</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-200">
            dan Berprestasi
          </span>
        </h1>

        {/* Subheadline with fade-out */}
        <p
          className="text-sm sm:text-base md:text-xl text-slate-200/90 leading-relaxed max-w-3xl mb-10 font-normal drop-shadow-sm transition-all duration-75"
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${titleTranslateY * 0.5}px)`,
          }}
        >
          {data.identity.subheadline}
        </p>

        {/* Call to Actions with scale down & smooth fade */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-16 transition-all duration-75"
          style={{
            opacity: ctaOpacity,
            transform: `scale(${ctaScale}) translateY(${titleTranslateY * 0.3}px)`,
            pointerEvents: ctaOpacity < 0.2 ? 'none' : 'auto',
          }}
        >
          {/* PPDB Primary Button */}
          <Link
            to="/ppdb"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold text-emerald-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <span>Daftar PPDB 2026/2027</span>
            <ArrowRight className="w-5 h-5 text-emerald-950 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Explore Button */}
          <button
            onClick={scrollToProfile}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-slate-100 glass-panel border border-emerald-500/30 hover:border-gold-400/50 hover:bg-emerald-900/40 hover:text-gold-300 transition-all duration-300"
          >
            <span>Jelajahi MA AL-GHOZALI</span>
            <ChevronDown className="w-5 h-5 text-emerald-400" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={scrollToProfile}
          className="flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-gold-400 transition-colors group"
          style={{ opacity: subtitleOpacity }}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll untuk menjelajahi</span>
          <div className="w-6 h-10 rounded-full border-2 border-emerald-500/40 group-hover:border-gold-400/60 p-1 flex justify-center transition-colors">
            <div className="w-1.5 h-2.5 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
