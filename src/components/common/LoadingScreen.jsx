import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            if (onFinish) onFinish();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18 + 8);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#011611] transition-opacity duration-700 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Islamic 8-pointed star rotating animation */}
      <div className="relative w-28 h-28 flex items-center justify-center mb-8">
        {/* Outer pulsating ring */}
        <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-ping opacity-30" />
        
        {/* Star Polygon 1 */}
        <div className="absolute w-20 h-20 border-2 border-gold-400/80 rounded-xl rotate-0 animate-spin-slow shadow-glow-gold" />
        
        {/* Star Polygon 2 */}
        <div className="absolute w-20 h-20 border-2 border-emerald-400/80 rounded-xl rotate-45 animate-spin-reverse shadow-glow-emerald" />

        {/* Center Emblem */}
        <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-emerald-800 to-emerald-950 border border-gold-400 flex items-center justify-center shadow-lg p-1.5">
          <img
            src="/logo-alghazali.png"
            alt="Logo MA AL-GHAZALI"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* Identity */}
      <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-emerald-300 uppercase mb-2">
        MA AL-GHAZALI
      </h2>
      <p className="text-xs text-emerald-200/60 tracking-widest uppercase mb-6 font-medium">
        Pendidikan Islam Modern &middot; Berilmu &middot; Berakhlak &middot; Berprestasi
      </p>

      {/* Progress Bar */}
      <div className="w-56 h-1.5 bg-emerald-950/80 rounded-full overflow-hidden border border-emerald-800/40 p-[1px]">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-gold-500 rounded-full transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <span className="text-[11px] text-amber-300/70 font-mono mt-3">
        Memuat Pengalaman 3D... {Math.min(progress, 100)}%
      </span>
    </div>
  );
};
