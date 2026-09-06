import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

export const TestimoniSection = () => {
  const { data } = useSchool();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = data.testimonials || [];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#011611]/30 via-[#02281e]/20 to-[#011611]/30 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Suara Civitas & Alumni"
          title="Apa Kata Mereka?"
          subtitle="Pengalaman berharga para santri, rasa bangga orang tua, dan jejak sukses para alumni MA AL-GHAZALI di dunia nyata."
        />

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {testimonials.length > 0 && (
            <TiltCard maxTilt={8} scale={1.01} className="w-full rounded-3xl">
              <div className="glass-card-gold p-8 sm:p-12 rounded-3xl border border-gold-400/40 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#032a21]/90 to-[#011a14]/95">
                
                {/* Large Background Quote Icon */}
                <Quote className="absolute -bottom-4 -right-4 w-40 h-40 text-gold-500/10 pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(testimonials[activeIndex].rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed italic mb-8 min-h-[90px]">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-emerald-700/40">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/80 shadow-glow-gold shrink-0">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gold-300 font-medium">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>

              </div>
            </TiltCard>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? 'w-8 bg-gold-400 shadow-glow-gold' : 'w-2.5 bg-emerald-800'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-emerald-950/80 border border-emerald-600/30 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-emerald-950/80 border border-emerald-600/30 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
