import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, Newspaper, User } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/3d/TiltCard';
import { useSchool } from '../context/SchoolContext';

export const BeritaPage = () => {
  const { data } = useSchool();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['Semua', 'Prestasi', 'Pengumuman', 'Akademik', 'Keagamaan'];

  const filteredArticles = data.articles.filter((art) => {
    const matchCategory = selectedCategory === 'Semua' || art.category === selectedCategory;
    const matchSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-transparent min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-[#02281e] to-[#011611] border-b border-emerald-500/20 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Newspaper className="w-3.5 h-3.5 text-gold-400" />
            Warta & Kabar Terkini
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Berita & Informasi <span className="text-gradient-gold">MA AL-GHAZALI</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Update publikasi kegiatan santri, prestasi olimpiade, agenda akademik, serta pengumuman resmi madrasah.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-emerald-500/20">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul berita..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/40 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-start md:justify-end">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === c
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-glow-emerald border border-emerald-400'
                    : 'bg-emerald-950/70 text-slate-300 hover:text-white border border-emerald-700/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <TiltCard key={article.id} maxTilt={8} className="h-full rounded-3xl">
              <div className="h-full glass-card rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-gold-400/50 flex flex-col justify-between group bg-gradient-to-b from-emerald-950/60 to-[#02241b]/90 shadow-xl transition-all duration-300">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-70" />
                    
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/80 text-gold-300 border border-gold-500/30 backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {article.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors leading-snug mb-3 line-clamp-2">
                      <Link to={`/berita/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-emerald-800/40">
                  <Link
                    to={`/berita/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors group/link"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 p-8 glass-card rounded-3xl border border-emerald-500/20">
            <Newspaper className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <p className="text-slate-300 font-semibold">Tidak ditemukan berita dengan kata kunci tersebut.</p>
          </div>
        )}

      </div>
    </div>
  );
};
