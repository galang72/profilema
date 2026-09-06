import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ProfileSection } from '../components/home/ProfileSection';
import { VisiMisiSection } from '../components/home/VisiMisiSection';
import { ProgramSection } from '../components/home/ProgramSection';
import { JurusanSection } from '../components/home/JurusanSection';
import { FasilitasSection } from '../components/home/FasilitasSection';
import { PrestasiSection } from '../components/home/PrestasiSection';
import { GaleriSection } from '../components/home/GaleriSection';
import { EkskulSection } from '../components/home/EkskulSection';
import { BeritaSection } from '../components/home/BeritaSection';
import { TestimoniSection } from '../components/home/TestimoniSection';
import { PpdbCtaSection } from '../components/home/PpdbCtaSection';
import { KontakSection } from '../components/home/KontakSection';

export const HomePage = () => {
  return (
    <main className="w-full">
      {/* 1. Hero 3D */}
      <HeroSection />

      {/* 2. Profil Singkat & Counter Viewport */}
      <ProfileSection />

      {/* 3. Visi & Misi 3D Cards */}
      <VisiMisiSection />

      {/* 4. Program Unggulan (6 Pilar) */}
      <ProgramSection />

      {/* 5. Jurusan / Peminatan Pendidikan */}
      <JurusanSection />

      {/* 6. Fasilitas Kampus Modern */}
      <FasilitasSection />

      {/* 7. Prestasi & Timeline Capaian */}
      <PrestasiSection />

      {/* 8. Galeri Kegiatan & Lightbox */}
      <GaleriSection />

      {/* 9. Ekstrakurikuler */}
      <EkskulSection />

      {/* 10. Berita & Informasi */}
      <BeritaSection />

      {/* 11. Testimoni Carousel */}
      <TestimoniSection />

      {/* 12. PPDB Big 3D CTA Banner */}
      <PpdbCtaSection />

      {/* 13. Kontak & Lokasi */}
      <KontakSection />
    </main>
  );
};
