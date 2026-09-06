import React from 'react';
import { Sparkles } from 'lucide-react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
  goldTitle = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm backdrop-blur-md`}>
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-spin-slow" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
        {goldTitle ? (
          <span className="text-gradient-gold">{title}</span>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
