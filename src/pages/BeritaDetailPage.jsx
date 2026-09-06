import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Check, 
  MessageSquare, 
  Newspaper,
  Sparkles 
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const BeritaDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data } = useSchool();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const article = data.articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-36 pb-24 min-h-screen bg-[#011611] flex items-center justify-center">
        <div className="text-center glass-card p-10 rounded-3xl border border-emerald-500/20 max-w-md mx-auto">
          <Newspaper className="w-16 h-16 text-gold-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Artikel Tidak Ditemukan</h2>
          <p className="text-sm text-slate-300 mb-6">Artikel yang Anda cari mungkin telah dipindahkan atau dihapus.</p>
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Warta Berita</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = data.articles.filter((a) => a.id !== article.id).slice(0, 2);

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareToWA = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${article.title} - ${currentUrl}`)}`, '_blank');
  };

  const shareToFB = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-transparent min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Berita & Pengumuman</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-400/40 mb-4">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pb-6 border-b border-emerald-800/40">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-emerald-400" />
              {article.author}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-gold-400" />
              {article.date}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              {article.readTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-10 border border-emerald-500/30 shadow-2xl bg-emerald-950">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-emerald max-w-none mb-12 text-slate-200 text-sm sm:text-base leading-relaxed space-y-4">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Share Buttons Section */}
        <div className="p-6 rounded-2xl glass-card border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 mb-16">
          <span className="text-sm font-bold text-white flex items-center gap-2">
            <Share2 className="w-4 h-4 text-gold-400" /> Bagikan Kabar Ini:
          </span>
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={shareToWA}
              className="px-3.5 py-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-600/30 text-emerald-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
            </button>
            <button
              onClick={shareToFB}
              className="px-3.5 py-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-600/30 text-emerald-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </button>
            <button
              onClick={shareToTwitter}
              className="px-3.5 py-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-600/30 text-emerald-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <span className="font-bold">X</span>
              <span>Twitter</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="px-3.5 py-2 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/40 text-gold-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin!' : 'Salin Link'}</span>
            </button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" /> Artikel Terkait Lainnya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/berita/${rel.slug}`}
                  className="glass-card p-5 rounded-2xl border border-emerald-500/20 hover:border-gold-400/50 flex gap-4 group transition-all"
                >
                  <img
                    src={rel.thumbnail}
                    alt={rel.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-gold-400 uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-2 mb-1">
                      {rel.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 block">{rel.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
