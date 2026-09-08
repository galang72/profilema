import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  Award, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const Footer = () => {
  const { data } = useSchool();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil Madrasah', path: '/profil' },
    { name: 'Program Unggulan', path: '/program' },
    { name: 'Fasilitas Belajar', path: '/fasilitas' },
    { name: 'Prestasi Siswa', path: '/prestasi' },
    { name: 'Galeri Kegiatan', path: '/galeri' },
    { name: 'Berita & Pengumuman', path: '/berita' },
    { name: 'Kontak & Lokasi', path: '/kontak' },
    { name: 'Informasi PPDB', path: '/ppdb' },
  ];

  return (
    <footer className="relative bg-[#01140f]/75 backdrop-blur-md text-slate-300 pt-16 pb-8 border-t border-emerald-500/20 overflow-hidden">
      {/* Decorative Islamic Pattern Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-gold-400 to-emerald-600" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/50">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-800/90 to-emerald-950/90 border border-gold-400/50 flex items-center justify-center shadow-glow-emerald p-1">
                <img
                  src={data.identity.logoUrl}
                  alt="Logo MA AL-GHOZALI"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white tracking-tight">{data.identity.name}</h3>
                <span className="text-xs text-gold-400 font-medium tracking-wider uppercase">{data.identity.type}</span>
              </div>
            </div>

            <p className="text-sm text-slate-300/80 leading-relaxed">
              Madrasah untuk membentuk generasi berilmu, berakhlak dan berprestasi berlandaskan nilai-nilai Al-Qur'an dan teknologi masa depan.
            </p>

            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-gold-500/30 text-xs text-amber-200">
              <Award className="w-4 h-4 text-gold-400" />
              <span>Terakreditasi <strong>{data.identity.accreditation}</strong> BAN-SM</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-3 font-semibold">Media Sosial Resmi</span>
              <div className="flex items-center gap-2.5">
                {/* Instagram SVG */}
                <a
                  href={data.contact.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-700/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-gold-400 hover:bg-emerald-800 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook SVG */}
                <a
                  href={data.contact.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-700/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-gold-400 hover:bg-emerald-800 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube SVG */}
                <a
                  href={data.contact.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-700/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-gold-400 hover:bg-emerald-800 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* TikTok Badge */}
                <a
                  href={data.contact.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-emerald-950 border border-emerald-700/30 flex items-center justify-center text-slate-300 hover:text-white hover:border-gold-400 hover:bg-emerald-800 transition-all duration-200"
                  aria-label="TikTok"
                >
                  <span className="font-bold text-xs">TT</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400" />
              Menu Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              {menuLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-400 hover:text-gold-300 transition-colors py-0.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links & PPDB */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Informasi & Layanan
            </h4>
            <ul className="space-y-2 text-sm">
              {menuLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-400 hover:text-gold-300 transition-colors py-0.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-600/20">
              <span className="text-xs font-semibold text-gold-300 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Pendaftaran Santri Baru
              </span>
              <p className="text-[11px] text-slate-300">Tahun Ajaran 2026/2027 Gelombang 1 Dibuka.</p>
              <Link
                to="/ppdb"
                className="mt-2 inline-block text-xs font-bold text-emerald-300 hover:text-white underline"
              >
                Daftar Online Sekarang &rarr;
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Kontak Kampus
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{data.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{data.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{data.contact.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{data.contact.officeHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MA AL-GHOZALI. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-emerald-500/70">Terdaftar di Kementerian Agama Republik Indonesia</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/30 text-emerald-400 hover:text-white hover:bg-emerald-800 transition-colors flex items-center gap-1"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Atas</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
