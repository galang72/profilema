import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronRight, UserCog } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const Navbar = () => {
  const { data } = useSchool();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Profil', path: '/profil' },
    { name: 'Program', path: '/program' },
    { name: 'Fasilitas', path: '/fasilitas' },
    { name: 'Prestasi', path: '/prestasi' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Berita', path: '/berita' },
    { name: 'Kontak', path: '/kontak' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-2xl py-3 border-b border-emerald-500/20'
            : 'bg-gradient-to-b from-[#011611]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Official School Emblem Logo */}
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-800/90 to-emerald-950/90 border border-gold-400/50 shadow-glow-emerald group-hover:scale-105 transition-transform duration-300 p-1">
              <img
                src={data.identity.logoUrl}
                alt="Logo MA AL-GHAZALI"
                className="w-full h-full object-contain drop-shadow-md relative z-10"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-white to-amber-200 group-hover:to-gold-300 transition-colors">
                {data.identity.name}
              </span>
              <span className="text-[10px] sm:text-xs text-gold-400 font-medium tracking-wider uppercase">
                {data.identity.type}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-gold-400 font-semibold bg-emerald-900/40 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-emerald-950/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* PPDB Button */}
            <Link
              to="/ppdb"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-emerald-950 animate-spin-slow" />
              <span>PPDB 2026/2027</span>
            </Link>

            {/* Admin Quick Icon */}
            <Link
              to="/admin"
              title="Panel Admin"
              className="p-2 rounded-xl text-emerald-400 hover:text-gold-400 hover:bg-emerald-900/40 border border-emerald-500/20 transition-all duration-200"
            >
              <UserCog className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 hover:text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Over Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#011611] border-l border-emerald-500/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-5 border-b border-emerald-800/40">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-800 border border-gold-400/50 flex items-center justify-center">
                  <span className="text-gold-400 font-bold text-xs">MA</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{data.identity.name}</h3>
                  <span className="text-[10px] text-gold-400 uppercase tracking-wide">Madrasah Aliyah</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-emerald-950/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links List */}
            <nav className="mt-6 flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gold-400 bg-emerald-900/50 border border-emerald-500/30 font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-emerald-950/40'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-emerald-500/50" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Actions in Drawer */}
          <div className="pt-6 border-t border-emerald-800/40 flex flex-col gap-3">
            <Link
              to="/ppdb"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 shadow-glow-gold active:scale-95 transition-all text-center"
            >
              <Sparkles className="w-4 h-4 text-emerald-950" />
              <span>Daftar PPDB 2026/2027</span>
            </Link>

            <Link
              to="/admin"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-700/30 hover:bg-emerald-900/50 transition-colors"
            >
              <UserCog className="w-4 h-4" />
              <span>Admin Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
