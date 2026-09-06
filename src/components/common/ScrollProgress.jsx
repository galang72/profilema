import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Beranda' },
    { id: 'profil', label: 'Profil' },
    { id: 'program', label: 'Program' },
    { id: 'fasilitas', label: 'Fasilitas' },
    { id: 'prestasi', label: 'Prestasi' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'berita', label: 'Berita' },
    { id: 'kontak', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercent(scrolled);

      // Determine active section based on scroll position
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-auto">
      {/* Thin Background Progress Track */}
      <div className="relative h-48 w-[2px] bg-emerald-950/80 rounded-full overflow-hidden border border-emerald-800/40">
        <div
          className="w-full bg-gradient-to-b from-amber-300 via-gold-400 to-emerald-400 rounded-full transition-all duration-150 ease-out"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      {/* Section Dot Indicators */}
      <div className="flex flex-col items-center gap-2 mt-1">
        {sections.slice(0, 5).map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group relative flex items-center justify-center p-1"
              aria-label={`Scroll ke ${sec.label}`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'scale-125 bg-gold-400 shadow-glow-gold'
                    : 'bg-emerald-800/60 hover:bg-gold-300/80'
                }`}
              />
              
              {/* Tooltip on hover */}
              <span className="absolute right-6 px-2.5 py-1 rounded-lg bg-emerald-950/90 border border-gold-400/30 text-[10px] font-bold text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
