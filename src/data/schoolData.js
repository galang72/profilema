/**
 * MA AL-GHAZALI (MAS AL-GOZALI) - Centralized Official Data Configuration
 * Berdasarkan Data Referensi Resmi Kemendikdasmen & Kementerian Agama RI
 * NPSN: 20177983
 */

export const initialSchoolData = {
  identity: {
    name: "MA AL-GHAZALI",
    fullName: "Madrasah Aliyah Swasta Al-Gozali",
    shortName: "Al-Ghazali Majalaya",
    npsn: "20177983",
    nsm: "131232040045",
    type: "Madrasah Aliyah (Kemenag RI)",
    foundedYear: "2008",
    accreditation: "B (Terakreditasi)",
    status: "Swasta Terakreditasi",
    motto: "Membentuk Generasi Berilmu, Berakhlak dan Berprestasi",
    subheadline: "MA AL-GHAZALI (MAS AL-GOZALI Majalaya, Kab. Bandung) hadir sebagai madrasah yang mengintegrasikan pendidikan Islam, ilmu pengetahuan, teknologi, dan pembentukan karakter untuk mempersiapkan generasi masa depan.",
    logoUrl: "/logo-alghazali.png",
    heroTags: ["Berakhlak", "Berprestasi", "Berilmu", "Berkarakter"],
  },

  principal: {
    name: "Dr. H. Ahmad Dahlan, M.Ag.",
    title: "Kepala MA AL-GHAZALI",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    greetingTitle: "Mempersiapkan Generasi Muslim Berilmu Luas, Berjiwa Luhur, dan Berkarya Nyata",
    greetingText: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh,",
      "Alhamdulillah, puji syukur senantiasa kita panjatkan ke hadirat Allah SWT atas segala limpahan rahmat dan hidayah-Nya. Selamat datang di portal resmi MA AL-GHAZALI.",
      "Pendidikan di era digital menuntut kesiapan ganda: penguasaan teknologi tingkat tinggi serta ketahanan moral dan spiritual yang tak tergoyahkan. Di MA AL-GHAZALI, kami berkomitmen merawat fitrah setiap santri agar bertumbuh menjadi pribadi cendekia yang hafal Al-Qur'an, cakap berbahasa internasional, menguasai literasi teknologi dan riset, serta memiliki kepekaan sosial yang tinggi.",
      "Kami mengundang seluruh orang tua dan masyarakat untuk bersama-sama bersinergi mewujudkan peradaban ilmu yang bermartabat.",
      "Wassalamu'alaikum Warahmatullahi Wabarakatuh."
    ]
  },

  stats: [
    { id: "stat-1", label: "Tahun Berdiri", value: 2008, suffix: "", description: "Melayani pendidikan berkualitas di Majalaya, Kab. Bandung" },
    { id: "stat-2", label: "Akreditasi", value: "B", suffix: "", isText: true, description: "Terakreditasi Kemenag & BAN-SM" },
    { id: "stat-3", label: "Siswa Aktif", value: 450, suffix: "+", description: "Peserta didik dari Kab. Bandung & sekitarnya" },
    { id: "stat-4", label: "Tenaga Pendidik", value: 36, suffix: " Guru", description: "Lulusan S1 & S2 berpengalaman" },
  ],

  contact: {
    address: "Jl. Cangkuang Km 2,1, Desa Wangisagara, Kec. Majalaya, Kab. Bandung, Jawa Barat",
    city: "Kab. Bandung, Jawa Barat",
    postalCode: "40382",
    coordinates: "Lintang: -6.9273, Bujur: 107.7419",
    phone: "+62 852-2094-4447",
    whatsapp: "6285220944447",
    whatsappDisplay: "+62 852-2094-4447",
    email: "info@maalghazali.sch.id",
    officeHours: "Senin - Sabtu: 07.00 - 16.00 WIB",
    mapsEmbedUrl: "https://maps.google.com/maps?q=-6.927300,107.741900&hl=id&z=15&output=embed",
    socialMedia: {
      instagram: "https://instagram.com/maalghazali_official",
      youtube: "https://youtube.com/@maalghazaliofficial",
      facebook: "https://facebook.com/maalghazaliofficial",
      tiktok: "https://tiktok.com/@maalghazali",
    }
  },

  visionMission: {
    vision: "Menjadi madrasah yang unggul dalam ilmu pengetahuan, teknologi, berlandaskan iman, taqwa dan akhlakul karimah.",
    visionElaboration: "Menciptakan ekosistem pendidikan madrasah holistik yang memadukan keunggulan sains-teknologi abad ke-21 dengan kedalaman tsaqafah Islamiyah di kawasan Majalaya, Kab. Bandung.",
    mission: [
      { id: 1, title: "Menanamkan Nilai Keislaman", desc: "Menumbuhkan pemahaman tauhid, ibadah yang istiqomah, dan kecintaan pada Al-Qur'an dan Sunnah dalam sendi kehidupan harian.", icon: "BookOpen" },
      { id: 2, title: "Meningkatkan Kualitas Akademik", desc: "Menyelenggarakan proses pembelajaran modern, kritis, dan berbasis riset berstandar nasional dan internasional.", icon: "GraduationCap" },
      { id: 3, title: "Mengembangkan Potensi & Kreativitas", desc: "Memfasilitasi bakat minat siswa dalam sains, teknologi, bahasa internasional, seni, dan kepemimpinan.", icon: "Sparkles" },
      { id: 4, title: "Membangun Karakter & Akhlakul Karimah", desc: "Membentuk pribadi santun, jujur, tangguh, berjiwa sosial, dan berakhlak mulia meneladani Rasulullah SAW.", icon: "HeartHandshake" },
      { id: 5, title: "Mendorong Prestasi Multidimensi", desc: "Mempersiapkan siswa menjadi juara dalam ajang kompetisi sains madrasah, seni, olahraga, dan riset ilmiah.", icon: "Trophy" },
      { id: 6, title: "Kesiapan Menghadapi Teknologi", desc: "Membekali peserta didik dengan kecakapan digital, coding, artificial intelligence, dan etika teknologi modern.", icon: "Cpu" },
    ]
  },

  flagshipPrograms: [
    {
      id: "tahfidz",
      title: "Tahfidz Al-Qur'an",
      subtitle: "Target 5–30 Juz Mutqin Bersanad",
      desc: "Program akselerasi hafalan Al-Qur'an dengan bimbingan ustadz/ustadzah hafidz 30 juz bersanad, metode talaqqi dan muraja'ah terstruktur.",
      badge: "Spiritual Core",
      iconName: "BookOpenCheck",
      highlights: ["Halaqah harian ba'da Subuh & Maghrib", "Ujian Tasmi' terbuka setiap semester", "Bimbingan sanad bacaan Qira'ah", "Karantina Tahfidz Ramadhan"]
    },
    {
      id: "karakter",
      title: "Pendidikan Karakter",
      subtitle: "Adab Sebelum Ilmu & Jiwa Pemimpin",
      desc: "Pembinaan kepribadian islami yang menjunjung tinggi keteladanan akhlak, kedisiplinan, kemandirian santri, dan kepekaan sosial bermasyarakat.",
      badge: "Moral Leadership",
      iconName: "HeartHandshake",
      highlights: ["Mentoring adab & muamalah harian", "Program Santri Khidmat Masyarakat", "Leadership Camp tahunan", "Budaya 5S (Senyum, Salam, Sapa, Sopan, Santun)"]
    },
    {
      id: "teknologi",
      title: "Teknologi & Digital",
      subtitle: "Coding, AI Literacy & Robotics",
      desc: "Laboratorium komputasi modern untuk membekali siswa dengan kemampuan pemrograman web, kecerdasan buatan, desain grafis, dan robotika madrasah.",
      badge: "Future Ready",
      iconName: "Laptop",
      highlights: ["Kurikulum Python & Web Development", "Ekskul Robotika & IoT", "Digital Media Production Lab", "Sertifikasi Kompetensi Digital"]
    },
    {
      id: "bahasa",
      title: "Bahasa Arab & Inggris",
      subtitle: "Bilingual International Environment",
      desc: "Penguasaan dua bahasa internasional secara aktif untuk percakapan, kajian kitab turots, serta persiapan ujian TOEFL dan TOAFL resmi.",
      badge: "Global Communication",
      iconName: "Languages",
      highlights: ["Language Zone & Arabic/English Day", "Debat Bahasa Arab & English Speech Club", "Bimbingan intensif TOAFL & TOEFL", "Studi literatur kitab kuning kontemporer"]
    },
    {
      id: "bakat",
      title: "Pengembangan Bakat",
      subtitle: "Inovasi Seni, Sains & Olahraga",
      desc: "Wadah ekspresi potensi unik setiap individu melalui riset ilmiah remaja (KIR), kaligrafi Islam mushaf, jurnalistik, musik hadroh, hingga bela diri.",
      badge: "Creativity Hub",
      iconName: "Palette",
      highlights: ["Klub Riset Ilmiah Remaja (KIR)", "Workshop Kaligrafi & Desain Grafis", "Liga Olahraga Madrasah", "Festival Seni & Budaya Islami"]
    },
    {
      id: "prestasi",
      title: "Prestasi Akademik",
      subtitle: "Intensif KSM, OSN & Sukses PTN/PTKIN",
      desc: "Bimbingan olimpiade berjenjang dengan mentor pakar untuk menembus kompetisi sains tingkat nasional dan jalur undangan perguruan tinggi favorit.",
      badge: "Academic Excellence",
      iconName: "Award",
      highlights: ["Klinik Olimpiade Sains Madrasah (KSM)", "Tryout UTBK-SNBT & UM-PTKIN berkala", "Kemitraan bimbingan belajar terakreditasi", "Beasiswa prestasi bagi siswa berprestasi"]
    }
  ],

  academicTracks: [
    {
      id: "mipa",
      code: "MIPA",
      title: "Matematika & Ilmu Pengetahuan Alam",
      desc: "Fokus pada penguasaan sains mendalam (Matematika, Fisika, Kimia, Biologi) yang dipadukan dengan telaah ayat-ayat kauniyah Al-Qur'an.",
      prospects: ["Kedokteran & Kesehatan", "Teknik & Arsitektur", "Teknologi Informasi & Data", "Sains Murni & Peneliti"],
      courses: ["Fisika Modern", "Biologi Molekuler", "Kimia Terapan", "Matematika Lanjut", "Kajian Sains Islami"],
      badge: "Peminatan Sains",
      icon: "Atom"
    },
    {
      id: "ips",
      code: "IPS",
      title: "Ilmu Pengetahuan Sosial & Ekonomi Syariah",
      desc: "Mempelajari dinamika masyarakat, sosiologi, geografi, dan ekonomi modern berlandaskan prinsip-prinsip ekonomi syariah dan muamalah.",
      prospects: ["Ekonomi & Perbankan Syariah", "Hukum & Hubungan Internasional", "Manajemen & Bisnis", "Psikologi & Komunikasi"],
      courses: ["Ekonomi & Perbankan Islam", "Sosiologi Kontemporer", "Geografi Analitis", "Akuntansi Dasar", "Hukum Muamalah"],
      badge: "Peminatan Sosial",
      icon: "Globe"
    },
    {
      id: "keagamaan",
      code: "IIK",
      title: "Ilmu-Ilmu Keagamaan (MAK)",
      desc: "Pendalaman komprehensif tsaqafah Islamiyah: Ilmu Tafsir, Hadits, Fiqih/Ushul Fiqih, Bahasa Arab Turots, dan Balaghah.",
      prospects: ["Universitas Al-Azhar Kairo", "UIN / IAIN / PTKIN", "Fakultas Syariah & Tarbiyah", "Da'i & Pendidik Islam"],
      courses: ["Tafsir & Ulumul Qur'an", "Hadits & Mustholah Hadits", "Ushul Fiqih", "Bahasa Arab Fasih", "Kajian Kitab Kuning"],
      badge: "Peminatan Syariah",
      icon: "BookMarked"
    },
    {
      id: "unggulan",
      code: "RIS-DIGI",
      title: "Kelas Unggulan Riset & Digital",
      desc: "Kelas berorientasi masa depan yang menggabungkan metode riset ilmiah mutakhir, digital prototyping, serta kepemimpinan global.",
      prospects: ["AI & Data Science", "Teknopreneur Muda", "Riset Internasional", "Beasiswa Prestasi Luar Negeri"],
      courses: ["Data Analytics & Python", "Metodologi Riset Terapan", "Public Speaking Global", "Etika Digital Islam"],
      badge: "Program Khusus",
      icon: "Sparkle"
    }
  ],

  facilities: [
    {
      id: "fac-1",
      title: "Smart Classroom Ber-AC",
      category: "Akademik",
      desc: "Ruang kelas ergonomis dilengkapi Interactive Smart Board, proyektor laser, pendingin udara, dan koneksi internet fiber optik.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
      specs: ["Interactive Whiteboard", "AC Daikin Inverter", "Ergonomic Chairs", "High-speed Wi-Fi 6"]
    },
    {
      id: "fac-2",
      title: "Laboratorium Komputer & AI",
      category: "Teknologi",
      desc: "40 unit PC berspesifikasi tinggi untuk pembelajaran coding, desain grafis, simulasi robotika, dan pelaksanaan CBT nasional.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      specs: ["Intel Core i7 & 16GB RAM", "Dual Monitor Station", "Gigabit LAN Dedicated", "Smart CCTV 24 Jam"]
    },
    {
      id: "fac-3",
      title: "Perpustakaan Digital & Corner Turots",
      category: "Literasi",
      desc: "Pusat sumber belajar dengan ribuan koleksi e-book, jurnal ilmiah, literatur kitab kuning, serta reading pod yang hening.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
      specs: ["E-Catalog & RFID Reader", "Ruang Diskusi Kedap Suara", "Koleksi Kitab Klasik", "Area Santai Co-Study"]
    },
    {
      id: "fac-4",
      title: "Masjid Jami' As-Salam",
      category: "Keagamaan",
      desc: "Pusat kegiatan ibadah berjamaah, halaqah tahfidz Al-Qur'an, kultum santri, dan kajian keislaman dengan kapasitas 1.000 jamaah.",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
      specs: ["Sound System Bose", "Ruang Wudhu Modern", "Perpustakaan Mini Masjid", "Karpet Turki Tebal"]
    },
    {
      id: "fac-5",
      title: "Laboratorium Sains Terpadu",
      category: "Sains",
      desc: "Laboratorium Fisika, Kimia, dan Biologi dengan instrumen mikroskop digital, spektrofotometer sederhana, dan fume hood standar keselamatan.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
      specs: ["Alat Uji Lengkap", "Safety Shower & Eyewash", "Digital Microscopes", "Ruang Preparasi Tertutup"]
    },
    {
      id: "fac-6",
      title: "Gelanggang Olahraga & Lapangan Futsal",
      category: "Olahraga",
      desc: "Fasilitas olahraga outdoor & semi-indoor untuk futsal sintetis, bola basket, voli, dan arena bela diri pencak silat.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      specs: ["Lapangan Futsal Interlock", "Ring Basket Hidrolik", "Lampu Penerangan Malam", "Tribun Penonton"]
    },
    {
      id: "fac-7",
      title: "Auditorium & Gedung Serbaguna",
      category: "Fasilitas Umum",
      desc: "Gedung megah berkapasitas 800 orang untuk wisuda, seminar nasional, pameran karya siswa, dan pentas seni budaya madrasah.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      specs: ["Panggung Teater 12x8m", "Videotron LED P3", "Full Acoustic Treatment", "Ruang Rias VIP"]
    },
    {
      id: "fac-8",
      title: "Taman Edukasi & Lingkungan Asri",
      category: "Lingkungan",
      desc: "Ruang terbuka hijau berkonsep eco-madrasah dengan gazebo belajar, kolam ikan terapi, dan pepohonan rindang penunjang kenyamanan.",
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
      specs: ["Taman Herbal Sekolah", "Gazebo Wi-Fi Outdoor", "Pengolahan Kompos Mandiri", "Solar Cell Lighting"]
    }
  ],

  achievements: [
    {
      id: "ach-1",
      year: 2026,
      title: "Juara 1 Kompetisi Sains Madrasah (KSM) Bidang Fisika",
      category: "Akademik",
      level: "Tingkat Provinsi Jawa Barat",
      winner: "Ahmad Rayhan Al-Fatih (Kelas XII MIPA 1)",
      desc: "Meraih medali emas dengan skor tertinggi dalam penguasaan mekanika dan termodinamika terapan.",
      icon: "Trophy"
    },
    {
      id: "ach-2",
      year: 2026,
      title: "Medali Emas Musabaqah Tilawatil Qur'an (MTQ) Golongan Remaja",
      category: "Keagamaan",
      level: "Tingkat Nasional",
      winner: "Zulfa Nurul Izzati (Kelas XI Keagamaan)",
      desc: "Unggul dalam fashahah, tajwid, dan variasi nagham tilawah pada festival tahunan kementerian.",
      icon: "BookOpen"
    },
    {
      id: "ach-3",
      year: 2025,
      title: "Juara 1 National Robotic & IoT Madrasah Innovation",
      category: "Teknologi",
      level: "Tingkat Nasional",
      winner: "Tim Robotics MA Al-Ghazali",
      desc: "Menciptakan prototipe sistem irigasi pintar berbasis energi surya dan sensor kelembaban tanah otomatis.",
      icon: "Cpu"
    },
    {
      id: "ach-4",
      year: 2025,
      title: "Best Speaker & Juara 2 English Debate Championship",
      category: "Bahasa",
      level: "Tingkat Se-Jabodetabek",
      winner: "Muhammad Naufal & Khansa Adila",
      desc: "Membawa tema global environmental sustainability dan etika teknologi informasi dalam debat parlementer.",
      icon: "Award"
    },
    {
      id: "ach-5",
      year: 2025,
      title: "Juara 1 Festival Seni Hadroh Klasik & Kontemporer",
      category: "Seni & Budaya",
      level: "Tingkat Provinsi",
      winner: "Grup Hadroh Ash-Shofa Al-Ghazali",
      desc: "Menampilkan aransemen shalawat harmonis dengan presisi vokal dan ketukan perkusi terbaik.",
      icon: "Sparkles"
    },
    {
      id: "ach-6",
      year: 2024,
      title: "Juara Umum PORSENI Cabang Futsal Pelajar Madrasah",
      category: "Olahraga",
      level: "Tingkat Kabupaten Bandung",
      winner: "Tim Futsal Putra Al-Ghazali",
      desc: "Meraih gelar juara tanpa kekalahan sepanjang turnamen dengan sportivitas dan kerjasama tim yang solid.",
      icon: "Medal"
    }
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Pembelajaran Interaktif di Smart Classroom",
      category: "Kegiatan Belajar",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      caption: "Siswa aktif berkolaborasi menyelesaikan project sains dan studi kasus menggunakan platform digital."
    },
    {
      id: "gal-2",
      title: "Halaqah Tahfidz & Khotmil Qur'an Santri",
      category: "Keagamaan",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
      caption: "Momen khusyuk setoran hafalan Al-Qur'an ba'da shalat Subuh berjamaah di Masjid Al-Ghazali."
    },
    {
      id: "gal-3",
      title: "Praktikum Sains & Eksperimen Biologi",
      category: "Kegiatan Belajar",
      image: "https://images.unsplash.com/photo-1567168544686-9015c7e0c4a4?auto=format&fit=crop&w=1200&q=80",
      caption: "Pengamatan struktur sel tanaman menggunakan mikroskop binokuler di laboratorium IPA terpadu."
    },
    {
      id: "gal-4",
      title: "Latihan Rutin Pramuka & Pembinaan Disiplin",
      category: "Ekstrakurikuler",
      image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=1200&q=80",
      caption: "Pemberian materi kepanduan, pioneering, dan survival cerdas bagi anggota Ambalan Al-Ghazali."
    },
    {
      id: "gal-5",
      title: "Penerimaan Medali Juara Kompetisi Sains",
      category: "Perlombaan",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      caption: "Penyerahan trofi dan piagam penghargaan kepada delegasi olimpiade sains MA Al-Ghazali."
    },
    {
      id: "gal-6",
      title: "Upacara Peringatan Hari Santri Nasional",
      category: "Kegiatan Sekolah",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      caption: "Keluarga besar madrasah mengenakan busana khas santri dalam upacara khidmat peringatan Hari Santri."
    },
    {
      id: "gal-7",
      title: "Workshop Robotika & Coding Siswa",
      category: "Ekstrakurikuler",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
      caption: "Siswa merakit mikrokontroler Arduino untuk sistem otomasi sensor pendeteksi asap."
    },
    {
      id: "gal-8",
      title: "Kajian Rutin Kitab Turots Akhlak Lil Banin",
      category: "Keagamaan",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80",
      caption: "Pendalaman tata krama menuntut ilmu dan adab terhadap guru serta orang tua."
    }
  ],

  extracurriculars: [
    { name: "Pramuka Penegak", icon: "Compass", category: "Wajib", desc: "Membentuk kepanduan mandiri, disiplin tinggi, cinta alam, dan kepemimpinan regu." },
    { name: "Paskibra Madrasah", icon: "Flag", category: "Kepemimpinan", desc: "Melatih ketangkasan baris berbaris, patriotisme, dan formasi upacara bendera resmi." },
    { name: "Futsal & Sepak Bola", icon: "Activity", category: "Olahraga", desc: "Latihan teknik bola, taktik tim, kebugaran fisik, dan partisipasi liga turnamen." },
    { name: "Bola Voli", icon: "Trophy", category: "Olahraga", desc: "Pembinaan atlet voli putra dan putri dengan pelatih bersertifikasi daerah." },
    { name: "Hadroh & Sholawat", icon: "Music", category: "Seni Islami", desc: "Ekspresi cinta Rasulullah melalui tabuhan terbang hadroh banjari dan aransemen vokal." },
    { name: "Tahfidz Club Intensif", icon: "BookOpen", category: "Spiritual", desc: "Komunitas hafizhul qur'an untuk saling menyimak bacaan, tasmi', dan mutaba'ah harian." },
    { name: "Palang Merah Remaja (PMR)", icon: "HeartPulse", category: "Kemanusiaan", desc: "Keterampilan pertolongan pertama pada kecelakaan, donor darah, dan bakti sosial." },
    { name: "Seni Kaligrafi Islam", icon: "Feather", category: "Seni", desc: "Teknik penulisan khat Naskhi, Tsuluts, Diwani, dan kreasi kaligrafi lukis modern." },
    { name: "Coding & Robotika", icon: "Terminal", category: "Teknologi", desc: "Belajar algoritma pemrograman, perakitan sensor, dan rancang bangun prototipe robot." },
    { name: "Jurnalistik & Media", icon: "Camera", category: "Literasi", desc: "Liputan berita madrasah, fotografi jurnalistik, produksi konten podcast, dan majalah dinding." },
  ],

  articles: [
    {
      id: "berita-1",
      slug: "prestasi-membanggakan-ksm-2026",
      title: "Siswa MA AL-GHAZALI Sabet Medali Emas KSM Fisika Tingkat Provinsi 2026",
      category: "Prestasi",
      date: "04 Maret 2026",
      author: "Humas Madrasah",
      readTime: "4 menit baca",
      thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      summary: "Ahmad Rayhan Al-Fatih kembali mengharumkan nama madrasah dengan meraih medali emas pada ajang bergengsi Kompetisi Sains Madrasah tahun 2026.",
      content: `
        <p>Prestasi membanggakan kembali ditorehkan oleh peserta didik MA AL-GHAZALI. Dalam perhelatan bergengsi Kompetisi Sains Madrasah (KSM) tingkat Provinsi Jawa Barat yang diselenggarakan oleh Kementerian Agama RI pekan lalu, ananda <strong>Ahmad Rayhan Al-Fatih</strong> (Kelas XII MIPA 1) berhasil menyabet Medali Emas untuk bidang studi Fisika Terintegrasi.</p>
        
        <p>Kepala MA AL-GHAZALI menyampaikan apresiasi setinggi-tingginya kepada Rayhan beserta tim guru pembimbing yang telah mendedikasikan waktu dalam karantina klinik sains intensif selama tiga bulan terakhir.</p>
        
        <blockquote>"Kemenangan ini membuktikan bahwa siswa madrasah mampu bersaing di baris terdepan sains murni dengan tetap membawa nilai spiritualitas Al-Qur'an dalam membedah fenomena alam semesta," ujar Kepala Madrasah dalam amanat apel pagi.</blockquote>
        
        <p>Dengan capaian ini, Ahmad Rayhan Al-Fatih dipastikan melenggang mewakili provinsi Jawa Barat menuju ajang KSM Tingkat Nasional yang akan dihelat pada pertengahan tahun ini. Semoga ikhtiar ini membawa keberkahan dan memicu semangat riset bagi seluruh civitas akademika MA AL-GHAZALI.</p>
      `
    },
    {
      id: "berita-2",
      slug: "pembukaan-ppdb-tahun-ajaran-2026-2027",
      title: "Resmi Dibuka: PPDB MA AL-GHAZALI Tahun Ajaran 2026/2027 Jalur Prestasi & Reguler",
      category: "Pengumuman",
      date: "01 Maret 2026",
      author: "Panitia PPDB",
      readTime: "3 menit baca",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      summary: "Pendaftaran Peserta Didik Baru (PPDB) MA AL-GHAZALI TA 2026/2027 telah dibuka secara daring dengan kuota beasiswa bagi hafidz Al-Qur'an dan juara sains.",
      content: `
        <p>Panitia Penerimaan Peserta Didik Baru (PPDB) MA AL-GHAZALI secara resmi mengumumkan pembukaan pendaftaran siswa baru untuk Tahun Ajaran 2026/2027. Pada periode tahun ini, madrasah membuka dua gelombang pendaftaran dengan pilihan jalur beasiswa prestasi dan jalur reguler.</p>
        
        <p>Tersedia beasiswa bebas biaya pendidikan bagi calon santri yang memiliki hafalan Al-Qur'an minimal 5 Juz (Jalur Tahfidz) atau memiliki sertifikat juara minimal tingkat kabupaten/kota (Jalur Prestasi Akademik & Bakat).</p>
        
        <p>Pendaftaran dapat dilakukan secara praktis melalui portal website resmi ini tanpa harus hadir fisik ke madrasah pada tahap awal. Calon wali santri cukup mengisi formulir online, mengunggah berkas rapor, dan mendapatkan nomor registrasi peserta.</p>
      `
    },
    {
      id: "berita-3",
      slug: "integrasi-ai-literacy-dalam-kurikulum-madrasah",
      title: "Inovasi Pembelajaran: MA AL-GHAZALI Hadirkan Kurikulum AI Literacy & Coding",
      category: "Akademik",
      date: "20 Februari 2026",
      author: "Tim Kurikulum",
      readTime: "5 menit baca",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      summary: "Madrasah memperkuat kompetensi siswa abad ke-21 melalui integrasi mata pelajaran pemodelan AI dan dasar pemrograman cerdas beretika Islam.",
      content: `
        <p>Menjawab tantangan revolusi industri yang kian cepat, MA AL-GHAZALI meluncurkan pembaruan kurikulum pengayaan dengan memasukkan Artificial Intelligence (AI) Literacy dan Dasar Pemrograman ke dalam silabus keterampilan komputer siswa.</p>
        
        <p>Program ini dirancang agar para santri tidak hanya menjadi konsumen teknologi, melainkan produsen solusi digital yang beretika. Siswa diajarkan bagaimana algoritma bekerja, bagaimana mengoptimalkan kecerdasan buatan untuk riset akademik, serta batasan syariat dan etika dalam pemanfaatan teknologi data.</p>
      `
    },
    {
      id: "berita-4",
      slug: "peringatan-isra-miraj-dan-karantina-tahfidz",
      title: "Gema Shalawat dan Penutupan Karantina Tahfidz Menyambut Isra Mi'raj 1447 H",
      category: "Keagamaan",
      date: "14 Februari 2026",
      author: "OSIS Al-Ghazali",
      readTime: "4 menit baca",
      thumbnail: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
      summary: "Ratusan santri menuntaskan program tasmi' 5 hingga 15 juz Al-Qur'an serentak dalam suasana penuh haru di Masjid Jami' As-Salam.",
      content: `
        <p>Suasana syahdu menyelimuti kompleks MA AL-GHAZALI saat acara Wisuda Tasmi' Karantina Tahfidz semester genap digelar bertepatan dengan momentum peringatan Isra Mi'raj Nabi Muhammad SAW.</p>
        
        <p>Sebanyak 42 santri berhasil menyetorkan hafalan sekali duduk di hadapan dewan asatidz dan disaksikan langsung oleh para orang tua yang hadir dengan berlinang air mata bahagia. Kegiatan diakhiri dengan tausiyah hikmah shalat dan gema sholawat nabi oleh grup hadroh madrasah.</p>
      `
    }
  ],

  testimonials: [
    {
      id: "testi-1",
      name: "Faris Maulana, S.Kom.",
      role: "Alumni 2022 — Software Engineer di Tech Unicorn & Lulusan UI",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
      quote: "MA AL-GHAZALI memberikan pondasi adab dan nilai keislaman yang sangat kokoh. Di sini saya pertama kali belajar coding di lab madrasah, dibimbing guru yang sabar dan visioner hingga berhasil tembus Fakultas Ilmu Komputer UI.",
      rating: 5,
    },
    {
      id: "testi-2",
      name: "Hj. Siti Rahmawati, M.Pd.",
      role: "Orang Tua Siswa (Aisyah Putri, Kelas XI MIPA)",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
      quote: "Sebagai orang tua, kami sangat bersyukur menyekolahkan anak di MA Al-Ghazali Majalaya. Perpaduan antara kurikulum sains modern dengan program tahfidznya sangat terukur. Anak kami menjadi lebih mandiri, santun, dan hafalannya terus bertambah.",
      rating: 5,
    },
    {
      id: "testi-3",
      name: "Ahmad Rayhan Al-Fatih",
      role: "Siswa Kelas XII MIPA — Juara Emas KSM Fisika Provinsi 2026",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
      quote: "Fasilitas smart classroom, laboratorium IPA, dan bimbingan guru olimpiade di sini luar biasa suportif. Kami didorong untuk berpikir kritis tanpa meninggalkan tadabbur Al-Qur'an. Lingkungannya sangat kondusif untuk berprestasi.",
      rating: 5,
    },
    {
      id: "testi-4",
      name: "Ustadz H. Lukman Hakim, Lc.",
      role: "Alumni 2018 — Mahasiswa Pascasarjana Universitas Al-Azhar Kairo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      quote: "Kajian kitab turots dan penguasaan bahasa Arab yang diajarkan di MA Al-Ghazali menjadi bekal utama saya ketika menempuh seleksi dan kuliah syariah di Mesir. Madrasah ini benar-benar mencetak kader ulama intelektual.",
      rating: 5,
    }
  ],

  ppdbInfo: {
    academicYear: "2026/2027",
    headline: "Bersiap Menjadi Bagian dari MA AL-GHAZALI",
    subheadline: "Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027",
    description: "Membuka kesempatan emas bagi putra-putri terbaik bangsa untuk mengenyam pendidikan tingkat menengah atas bernuansa islami, futuristik, dan sarat prestasi.",
    waves: [
      {
        name: "Gelombang 1 (Jalur Prestasi & Beasiswa)",
        period: "01 Januari - 31 Maret 2026",
        status: "Sedang Dibuka",
        benefits: ["Bebas Biaya Pendaftaran", "Potongan DSP hingga 50%", "Prioritas Pilihan Peminatan", "Beasiswa Full bagi Hafidz min. 5 Juz"]
      },
      {
        name: "Gelombang 2 (Jalur Reguler)",
        period: "01 April - 30 Juni 2026",
        status: "Akan Datang",
        benefits: ["Peluang Beasiswa Prestasi Rapor", "Test Minat Bakat & Psikotes Gratis", "Konseling Jurusan Karier"]
      }
    ],
    steps: [
      { step: 1, title: "Pendaftaran Online", desc: "Isi data diri calon peserta didik secara lengkap pada formulir online dan peroleh Nomor Registrasi resmi." },
      { step: 2, title: "Unggah Dokumen", desc: "Upload scan rapor SMP/MTs semester 1-5, kartu keluarga, akta kelahiran, dan sertifikat prestasi (jika ada)." },
      { step: 3, title: "Observasi & Tes", desc: "Mengikuti asesmen kemampuan akademik, tes baca Al-Qur'an, dan wawancara komitmen calon wali santri." },
      { step: 4, title: "Pengumuman & Daftar Ulang", desc: "Cek hasil kelulusan melalui portal website dan lakukan registrasi daftar ulang untuk pengesahan." }
    ],
    requirements: [
      "Lulusan SMP/MTs sederajat atau siswa kelas IX yang akan lulus tahun 2026",
      "Memiliki Surat Keterangan Lulus (SKL) atau Ijazah",
      "Salinan Rapor semester 1 s.d. 5",
      "Salinan Akta Kelahiran & Kartu Keluarga",
      "Pas foto formal terbaru ukuran 3x4 (latar merah/biru)",
      "Sertifikat piagam prestasi kejuaraan / Syahadah Tahfidz (khusus jalur beasiswa prestasi)"
    ]
  },

  registeredApplicants: [
    { id: "REG-2026-001", name: "Muhammad Zaki Pratama", schoolOrigin: "MTs Negeri 1 Majalaya", track: "MIPA", phone: "081298765432", status: "Diterima", date: "2026-03-01" },
    { id: "REG-2026-002", name: "Aisyah Zahira", schoolOrigin: "SMP Islam Terpadu Bandung", track: "Tahfidz & Keagamaan", phone: "082187654321", status: "Menunggu Seleksi", date: "2026-03-02" },
    { id: "REG-2026-003", name: "Bilal Al-Ghifari", schoolOrigin: "SMP Negeri 1 Majalaya", track: "Unggulan Riset & Digital", phone: "085712345678", status: "Terverifikasi", date: "2026-03-04" },
  ],

  contactMessages: [
    {
      id: "MSG-2026-001",
      name: "Bapak H. Ahmad Subagja",
      email: "ahmad.subagja@gmail.com",
      whatsapp: "081298765432",
      message: "Assalamu'alaikum, mau bertanya mengenai persyaratan pendaftaran gelombang 1 dan jalur beasiswa tahfidz Al-Qur'an untuk anak saya.",
      date: "05 Maret 2026, 09:30 WIB",
      status: "Belum Dibaca"
    },
    {
      id: "MSG-2026-002",
      name: "Ibu Nurhasanah",
      email: "nur.hasanah@yahoo.com",
      whatsapp: "082187654321",
      message: "Mohon informasi mengenai biaya SPP bulanan dan apakah ada fasiltas asrama/pesantren santri?",
      date: "06 Maret 2026, 14:15 WIB",
      status: "Sudah Dibaca"
    }
  ]
};
