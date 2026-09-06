import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SchoolProvider } from './context/SchoolContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LoadingScreen } from './components/common/LoadingScreen';
import { CustomCursor } from './components/common/CustomCursor';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ScrollProgress } from './components/common/ScrollProgress';
import { SmoothScroll } from './components/common/SmoothScroll';

// Pages
import { HomePage } from './pages/HomePage';
import { ProfilPage } from './pages/ProfilPage';
import { ProgramPage } from './pages/ProgramPage';
import { FasilitasPage } from './pages/FasilitasPage';
import { PrestasiPage } from './pages/PrestasiPage';
import { GaleriPage } from './pages/GaleriPage';
import { BeritaPage } from './pages/BeritaPage';
import { BeritaDetailPage } from './pages/BeritaDetailPage';
import { PpdbPage } from './pages/PpdbPage';
import { KontakPage } from './pages/KontakPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [appReady, setAppReady] = useState(false);

  return (
    <SmoothScroll>
      <div className="min-h-screen text-slate-100 relative flex flex-col justify-between selection:bg-amber-400 selection:text-emerald-950 overflow-x-hidden">
        
        {/* Fixed School Building Background Image with High Visibility & Glassmorphism Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* School Building Photo */}
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2400&q=80"
            alt="Gedung Kampus MA AL-GHAZALI Background"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105 opacity-80 sm:opacity-85 transition-all duration-500"
          />
          {/* Subtle Glass Tint Layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#011611]/45 via-[#011611]/30 to-[#011611]/55" />
        </div>

        {/* Initial Loading Screen */}
        <LoadingScreen onFinish={() => setAppReady(true)} />

        {/* Custom Desktop Cursor */}
        <CustomCursor />

        {/* Floating WhatsApp Action */}
        <WhatsAppButton />

        {/* Vertical Scroll Progress Bar & Section Dots */}
        <ScrollProgress />

        {/* Navigation Header */}
        <Navbar />

        {/* Scroll to top observer */}
        <ScrollToTop />

        {/* Page Routing */}
        <div className="flex-1 w-full relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/fasilitas" element={<FasilitasPage />} />
            <Route path="/prestasi" element={<PrestasiPage />} />
            <Route path="/galeri" element={<GaleriPage />} />
            <Route path="/berita" element={<BeritaPage />} />
            <Route path="/berita/:slug" element={<BeritaDetailPage />} />
            <Route path="/ppdb" element={<PpdbPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        {/* Institutional Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default function App() {
  return (
    <SchoolProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </SchoolProvider>
  );
}
