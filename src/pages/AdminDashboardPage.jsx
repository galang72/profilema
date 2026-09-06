import React, { useState, useEffect } from 'react';
import { 
  UserCog, 
  Lock, 
  Unlock, 
  LayoutDashboard, 
  School, 
  Users, 
  Newspaper, 
  Image as ImageIcon, 
  Trophy, 
  Save, 
  RotateCcw, 
  Check, 
  Trash2, 
  Plus, 
  Eye, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Download,
  Search,
  Filter,
  Building,
  BookOpen,
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  FileSpreadsheet,
  MessageSquare,
  Send,
  MessageCircle,
  User,
  MailCheck
} from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

export const AdminDashboardPage = () => {
  const { 
    data, 
    updateIdentity, 
    updateContact, 
    updateVisionMission,
    updatePrincipal,
    addArticle, 
    deleteArticle, 
    addGalleryItem, 
    deleteGalleryItem, 
    addAchievement, 
    deleteAchievement,
    addFacility,
    deleteFacility,
    togglePpdbMasterStatus,
    updateWaveStatus,
    addWave,
    deleteWave,
    updateApplicantStatus, 
    deletePpdbApplicant,
    deleteContactMessage,
    markMessageRead,
    resetToDefault 
  } = useSchool();

  // Session storage authentication persistence
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('MA_ALGHAZALI_ADMIN_AUTH') === 'true';
  });
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('ppdb'); // 'ppdb', 'messages', 'profile', 'news', 'gallery', 'achievements', 'facilities'
  const [saveToast, setSaveToast] = useState('');

  // PPDB Search & Filter states
  const [ppdbSearch, setPpdbSearch] = useState('');
  const [ppdbStatusFilter, setPpdbStatusFilter] = useState('Semua');

  // Messages Search & Filter
  const [msgSearch, setMsgSearch] = useState('');
  const [msgStatusFilter, setMsgStatusFilter] = useState('Semua');

  // New Wave Form
  const [newWaveForm, setNewWaveForm] = useState({
    name: '',
    period: '',
    status: 'Sedang Dibuka',
    benefitsText: 'Bebas Biaya Pendaftaran, Prioritas Pilihan Peminatan'
  });

  // Form states for adding items
  const [newNews, setNewNews] = useState({
    title: '',
    category: 'Prestasi',
    author: 'Admin Madrasah',
    thumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    summary: '',
    content: '<p>Tulis artikel lengkap di sini...</p>',
  });

  const [newGallery, setNewGallery] = useState({
    title: '',
    category: 'Kegiatan Belajar',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    caption: '',
  });

  const [newAch, setNewAch] = useState({
    title: '',
    year: 2026,
    category: 'Akademik',
    level: 'Tingkat Nasional',
    winner: '',
    desc: '',
    icon: 'Trophy'
  });

  const [newFacility, setNewFacility] = useState({
    title: '',
    category: 'Akademik',
    desc: '',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    specs: ['Interactive Smart Board', 'AC Inverter', 'Wi-Fi 6 Dedicated']
  });

  // Local copy for identity & contact editing
  const [editIdentity, setEditIdentity] = useState({
    name: data.identity.name,
    motto: data.identity.motto,
    subheadline: data.identity.subheadline,
    accreditation: data.identity.accreditation,
  });

  const [editContact, setEditContact] = useState({
    address: data.contact.address,
    phone: data.contact.phone,
    whatsapp: data.contact.whatsapp,
    email: data.contact.email,
  });

  const [editVisionMission, setEditVisionMission] = useState({
    vision: data.visionMission?.vision || '',
    visionElaboration: data.visionMission?.visionElaboration || '',
  });

  const [editPrincipal, setEditPrincipal] = useState({
    name: data.principal?.name || '',
    title: data.principal?.title || '',
    photoUrl: data.principal?.photoUrl || '',
    greetingTitle: data.principal?.greetingTitle || '',
    greetingText: Array.isArray(data.principal?.greetingText)
      ? data.principal.greetingText.join('\n\n')
      : data.principal?.greetingText || '',
  });

  useEffect(() => {
    if (data.identity) {
      setEditIdentity({
        name: data.identity.name,
        motto: data.identity.motto,
        subheadline: data.identity.subheadline,
        accreditation: data.identity.accreditation,
      });
    }
    if (data.contact) {
      setEditContact({
        address: data.contact.address,
        phone: data.contact.phone,
        whatsapp: data.contact.whatsapp,
        email: data.contact.email,
      });
    }
    if (data.visionMission) {
      setEditVisionMission({
        vision: data.visionMission.vision || '',
        visionElaboration: data.visionMission.visionElaboration || '',
      });
    }
    if (data.principal) {
      setEditPrincipal({
        name: data.principal.name || '',
        title: data.principal.title || '',
        photoUrl: data.principal.photoUrl || '',
        greetingTitle: data.principal.greetingTitle || '',
        greetingText: Array.isArray(data.principal.greetingText)
          ? data.principal.greetingText.join('\n\n')
          : data.principal.greetingText || '',
      });
    }
  }, [data]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginPass === 'admin123' || loginPass === 'alghazali') {
      setIsAuthenticated(true);
      sessionStorage.setItem('MA_ALGHAZALI_ADMIN_AUTH', 'true');
      setLoginError('');
    } else {
      setLoginError('Kata sandi salah. Gunakan: admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('MA_ALGHAZALI_ADMIN_AUTH');
  };

  const triggerToast = (msg) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(''), 3500);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateIdentity(editIdentity);
    updateContact(editContact);
    updateVisionMission(editVisionMission);
    
    // Process greetingText into array of paragraphs
    const paragraphs = editPrincipal.greetingText
      .split('\n')
      .map(p => p.trim())
      .filter(Boolean);

    updatePrincipal({
      ...editPrincipal,
      greetingText: paragraphs.length > 0 ? paragraphs : [editPrincipal.greetingText]
    });

    triggerToast('Identitas, kontak, visi-misi & data Pimpinan berhasil disimpan!');
  };

  const handleAddWave = (e) => {
    e.preventDefault();
    if (!newWaveForm.name || !newWaveForm.period) return;
    const benefits = newWaveForm.benefitsText.split(',').map(b => b.trim()).filter(Boolean);
    addWave({
      name: newWaveForm.name,
      period: newWaveForm.period,
      status: newWaveForm.status,
      benefits
    });
    setNewWaveForm({
      name: '',
      period: '',
      status: 'Sedang Dibuka',
      benefitsText: 'Bebas Biaya Pendaftaran, Prioritas Pilihan Peminatan'
    });
    triggerToast(`Gelombang baru "${newWaveForm.name}" telah ditambahkan!`);
  };

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!newNews.title || !newNews.summary) return;
    const slug = newNews.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    addArticle({
      ...newNews,
      id: `art-${Date.now()}`,
      slug,
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }),
      readTime: '3 menit baca',
    });
    setNewNews({
      title: '',
      category: 'Prestasi',
      author: 'Admin Madrasah',
      thumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      summary: '',
      content: '<p>Tulis artikel lengkap di sini...</p>',
    });
    triggerToast('Berita baru berhasil dipublikasikan!');
  };

  const handleAddGallery = (e) => {
    e.preventDefault();
    if (!newGallery.title || !newGallery.image) return;
    addGalleryItem({
      ...newGallery,
      id: `gal-${Date.now()}`,
    });
    setNewGallery({
      title: '',
      category: 'Kegiatan Belajar',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      caption: '',
    });
    triggerToast('Foto baru berhasil ditambahkan ke galeri!');
  };

  const handleAddAchievement = (e) => {
    e.preventDefault();
    if (!newAch.title || !newAch.winner) return;
    addAchievement({
      ...newAch,
      id: `ach-${Date.now()}`,
    });
    setNewAch({
      title: '',
      year: 2026,
      category: 'Akademik',
      level: 'Tingkat Nasional',
      winner: '',
      desc: '',
      icon: 'Trophy'
    });
    triggerToast('Catatan prestasi santri berhasil ditambahkan!');
  };

  const handleAddFacility = (e) => {
    e.preventDefault();
    if (!newFacility.title || !newFacility.desc) return;
    addFacility({
      ...newFacility,
      id: `fac-${Date.now()}`,
    });
    setNewFacility({
      title: '',
      category: 'Akademik',
      desc: '',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
      specs: ['Interactive Smart Board', 'AC Inverter', 'Wi-Fi 6 Dedicated']
    });
    triggerToast('Fasilitas kampus baru berhasil ditambahkan!');
  };

  // Filter PPDB Applicants
  const filteredApplicants = (data.registeredApplicants || []).filter((app) => {
    const matchesSearch = 
      app.name?.toLowerCase().includes(ppdbSearch.toLowerCase()) ||
      app.schoolOrigin?.toLowerCase().includes(ppdbSearch.toLowerCase()) ||
      app.id?.toLowerCase().includes(ppdbSearch.toLowerCase()) ||
      app.phone?.includes(ppdbSearch);

    const matchesStatus = ppdbStatusFilter === 'Semua' || app.status === ppdbStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Filter Contact Messages
  const filteredMessages = (data.contactMessages || []).filter((msg) => {
    const matchesSearch =
      msg.name?.toLowerCase().includes(msgSearch.toLowerCase()) ||
      msg.email?.toLowerCase().includes(msgSearch.toLowerCase()) ||
      msg.whatsapp?.includes(msgSearch) ||
      msg.message?.toLowerCase().includes(msgSearch.toLowerCase());

    const matchesStatus = msgStatusFilter === 'Semua' || msg.status === msgStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Export PPDB Applicants to CSV
  const exportPpdbToCSV = () => {
    if (!data.registeredApplicants || data.registeredApplicants.length === 0) {
      alert('Belum ada data pendaftar untuk diekspor.');
      return;
    }

    const headers = ['No Reg', 'Nama Calon Santri', 'Asal Sekolah', 'Jurusan Pilihan', 'WhatsApp', 'Tanggal Daftar', 'Status'];
    const rows = data.registeredApplicants.map((app) => [
      `"${app.id}"`,
      `"${app.name}"`,
      `"${app.schoolOrigin}"`,
      `"${app.track}"`,
      `"${app.phone}"`,
      `"${app.date}"`,
      `"${app.status}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `PPDB_MA_AL_GHAZALI_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stats Counters
  const totalPpdb = data.registeredApplicants?.length || 0;
  const countVerified = data.registeredApplicants?.filter(a => a.status === 'Terverifikasi' || a.status === 'Diterima').length || 0;
  const countPending = data.registeredApplicants?.filter(a => a.status === 'Menunggu Verifikasi').length || 0;
  const totalArticles = data.articles?.length || 0;
  const totalGallery = data.gallery?.length || 0;
  const totalAchievements = data.achievements?.length || 0;
  const totalFacilities = data.facilities?.length || 0;
  
  // Messages Stats
  const totalMessages = data.contactMessages?.length || 0;
  const unreadMessagesCount = data.contactMessages?.filter(m => m.status === 'Belum Dibaca').length || 0;

  const isPpdbMasterOpen = data.ppdbInfo?.isRegistrationOpen ?? true;

  if (!isAuthenticated) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-[#011611] flex items-center justify-center px-4">
        <div className="w-full max-w-md glass-card p-8 rounded-3xl border border-gold-500/30 shadow-2xl bg-gradient-to-b from-[#032920]/95 to-[#011611]/95 text-center relative overflow-hidden">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-gold-400 p-2 mx-auto mb-4 shadow-glow-gold flex items-center justify-center">
            <img src="/logo-alghazali.png" alt="Logo MA AL-GHAZALI" className="w-full h-full object-contain" />
          </div>
          
          <h2 className="text-2xl font-extrabold text-white mb-1">Admin Portal MA AL-GHAZALI</h2>
          <p className="text-xs text-slate-300 mb-6">Masuk untuk mengelola data sekolah, gelombang PPDB, dan pertanyaan masuk.</p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Kata Sandi Administrator</label>
              <input
                type="password"
                required
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                placeholder="Masukkan kata sandi..."
                className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">Kata sandi demo: <strong className="text-amber-300 font-mono">admin123</strong></span>
            </div>

            {loginError && (
              <p className="text-xs text-rose-400 bg-rose-950/50 p-2.5 rounded-lg border border-rose-800/40">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-emerald-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold transition-all"
            >
              Buka Panel Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 bg-transparent min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Bar Dashboard */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl glass-card-gold border border-gold-400/30">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/90 border border-gold-400 p-1.5 shrink-0 shadow-glow-gold">
              <img src="/logo-alghazali.png" alt="Logo MA AL-GHAZALI" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-0.5">
                <Sparkles className="w-3.5 h-3.5" /> Pusat Kontrol Manajemen Madrasah
              </div>
              <h1 className="text-2xl font-extrabold text-white">Dashboard Admin MA AL-GHAZALI</h1>
              <p className="text-xs text-slate-300">Data tersimpan otomatis & tersinkronisasi secara real-time.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Reset semua data kembali ke default awal?')) {
                  resetToDefault();
                  window.location.reload();
                }
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-rose-950/60 hover:bg-rose-900 border border-rose-700/40 text-rose-200 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Default
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/40 text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" /> Keluar
            </button>
          </div>
        </div>

        {/* Analytics Summary Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-300 mb-2">
              <span className="text-xs font-semibold">Pendaftar PPDB</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{totalPpdb}</div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400">
              <span className="text-emerald-400 font-bold">{countVerified} Diterima</span>
              <span>&bull;</span>
              <span className="text-amber-400 font-bold">{countPending} Menunggu</span>
            </div>
          </div>

          <div
            onClick={() => setActiveTab('messages')}
            className={`p-4 rounded-2xl cursor-pointer transition-all border ${
              unreadMessagesCount > 0
                ? 'glass-card-gold border-gold-400/60 shadow-glow-gold'
                : 'glass-card border-emerald-500/20'
            }`}
          >
            <div className="flex items-center justify-between text-slate-300 mb-2">
              <span className="text-xs font-semibold">Pesan Masuk</span>
              <MessageSquare className={`w-4 h-4 ${unreadMessagesCount > 0 ? 'text-amber-300 animate-bounce' : 'text-emerald-400'}`} />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{totalMessages}</div>
            <span className={`text-[10px] font-bold ${unreadMessagesCount > 0 ? 'text-amber-300' : 'text-slate-400'}`}>
              {unreadMessagesCount > 0 ? `${unreadMessagesCount} Belum Dibaca` : 'Semua Terbaca'}
            </span>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-300 mb-2">
              <span className="text-xs font-semibold">Artikel Berita</span>
              <Newspaper className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{totalArticles}</div>
            <span className="text-[10px] text-slate-400">Terpublikasi</span>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-300 mb-2">
              <span className="text-xs font-semibold">Dokumentasi</span>
              <ImageIcon className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{totalGallery}</div>
            <span className="text-[10px] text-slate-400">Foto Galeri</span>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-300 mb-2">
              <span className="text-xs font-semibold">Prestasi</span>
              <Trophy className="w-4 h-4 text-gold-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{totalAchievements}</div>
            <span className="text-[10px] text-slate-400">Penghargaan</span>
          </div>

          <div className="p-4 rounded-2xl glass-card border border-emerald-500/20 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-300 mb-2">
              <span className="text-xs font-semibold">Fasilitas</span>
              <Building className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-extrabold text-white mb-1">{totalFacilities}</div>
            <span className="text-[10px] text-slate-400">Sarana Kampus</span>
          </div>
        </div>

        {/* Save Toast Notification */}
        {saveToast && (
          <div className="p-3.5 rounded-2xl bg-emerald-900/90 border border-emerald-400 text-emerald-200 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-glow-emerald animate-fadeIn">
            <Check className="w-4 h-4 text-gold-400 shrink-0" />
            <span>{saveToast}</span>
          </div>
        )}

        {/* Dashboard Tabs Header */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-emerald-800/40">
          {[
            { id: 'ppdb', label: `Pendaftar PPDB (${totalPpdb})`, icon: Users },
            { id: 'messages', label: `Pesan Masuk (${unreadMessagesCount > 0 ? `${unreadMessagesCount} Baru` : totalMessages})`, icon: MessageSquare, badge: unreadMessagesCount },
            { id: 'profile', label: 'Profil & Visi-Misi', icon: School },
            { id: 'news', label: `Warta Berita (${totalArticles})`, icon: Newspaper },
            { id: 'gallery', label: `Galeri Foto (${totalGallery})`, icon: ImageIcon },
            { id: 'achievements', label: `Prestasi (${totalAchievements})`, icon: Trophy },
            { id: 'facilities', label: `Fasilitas (${totalFacilities})`, icon: Building },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all relative ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-300 to-gold-400 text-emerald-950 shadow-glow-gold'
                    : 'bg-emerald-950/60 text-slate-300 hover:text-white border border-emerald-700/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.badge > 0 && !isActive && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping absolute top-1.5 right-1.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* TAB 1: PENDAFTAR PPDB & KONTROL GELOMBANG */}
        {activeTab === 'ppdb' && (
          <div className="space-y-8">
            
            {/* MASTER PPDB CONTROL CARD: TOGGLE BUKA/TUTUP & GELOMBANG */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-[#032a21]/95 to-[#011a14]/95 border border-gold-400/30 space-y-6 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-emerald-800/40">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" /> Kontrol Sistem Pendaftaran Online
                  </div>
                  <h3 className="text-xl font-extrabold text-white">Status Master PPDB & Gelombang Pendaftaran</h3>
                  <p className="text-xs text-slate-300">Atur pendaftaran dibuka/ditutup secara cepat dan kontrol status tiap gelombang.</p>
                </div>

                {/* Master Switch Button */}
                <div className="flex items-center gap-3 bg-emerald-950/90 p-2.5 rounded-2xl border border-emerald-700/40 shrink-0">
                  <span className="text-xs font-bold text-slate-200">Status Pendaftaran Online:</span>
                  <button
                    type="button"
                    onClick={() => {
                      const newStatus = !isPpdbMasterOpen;
                      togglePpdbMasterStatus(newStatus);
                      triggerToast(`Sistem Master PPDB Online kini: ${newStatus ? '🟢 DIBUKA' : '🔴 DITUTUP'}`);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-md transition-all ${
                      isPpdbMasterOpen
                        ? 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-glow-emerald'
                        : 'bg-rose-600 text-white hover:bg-rose-500'
                    }`}
                  >
                    {isPpdbMasterOpen ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" /> 🟢 DIBUKA (Aktif)
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" /> 🔴 DITUTUP (Nonaktif)
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Daftar Gelombang Aktif */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider">Kelola Gelombang Pendaftaran ({data.ppdbInfo?.waves?.length || 0}):</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.ppdbInfo?.waves?.map((w, wIdx) => (
                    <div key={wIdx} className="p-5 rounded-2xl bg-emerald-950/80 border border-emerald-700/40 space-y-3 relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-bold text-sm text-white block">{w.name}</span>
                          <div className="text-xs text-slate-300 flex items-center gap-1.5 font-mono mt-1">
                            <Calendar className="w-3.5 h-3.5 text-gold-400" />
                            <span>Periode: {w.period}</span>
                          </div>
                        </div>

                        {/* Status Gelombang Selector Dropdown */}
                        <select
                          value={w.status}
                          onChange={(e) => {
                            updateWaveStatus(wIdx, e.target.value);
                            triggerToast(`Status ${w.name} diubah menjadi: ${e.target.value}`);
                          }}
                          className={`px-3 py-1.5 rounded-xl text-xs font-extrabold focus:outline-none cursor-pointer ${
                            w.status === 'Sedang Dibuka' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' :
                            w.status === 'Akan Datang' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' :
                            'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                          }`}
                        >
                          <option value="Sedang Dibuka">🟢 Sedang Dibuka</option>
                          <option value="Akan Datang">🟡 Akan Datang</option>
                          <option value="Telah Ditutup">🔴 Telah Ditutup</option>
                        </select>
                      </div>

                      {/* Benefits preview */}
                      {w.benefits && (
                        <div className="text-[11px] text-slate-400 space-y-1 pt-2 border-t border-emerald-900/50">
                          {w.benefits.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-1.5">
                              <Check className="w-3 h-3 text-gold-400 shrink-0" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus gelombang "${w.name}"?`)) {
                              deleteWave(wIdx);
                              triggerToast(`Gelombang "${w.name}" telah dihapus.`);
                            }
                          }}
                          className="text-[11px] text-rose-400 hover:text-rose-200 flex items-center gap-1 font-semibold transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Hapus Gelombang
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Tambah Gelombang Baru */}
              <form onSubmit={handleAddWave} className="p-5 rounded-2xl bg-emerald-900/40 border border-emerald-600/30 space-y-4">
                <h4 className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-gold-400" /> Buka Gelombang Pendaftaran Baru
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Gelombang</label>
                    <input
                      type="text"
                      required
                      value={newWaveForm.name}
                      onChange={(e) => setNewWaveForm({ ...newWaveForm, name: e.target.value })}
                      placeholder="Contoh: Gelombang 3 (Jalur Susulan)"
                      className="w-full px-3.5 py-2 rounded-xl bg-emerald-950 border border-emerald-700/40 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Periode Tanggal</label>
                    <input
                      type="text"
                      required
                      value={newWaveForm.period}
                      onChange={(e) => setNewWaveForm({ ...newWaveForm, period: e.target.value })}
                      placeholder="Contoh: 01 Juli - 31 Juli 2026"
                      className="w-full px-3.5 py-2 rounded-xl bg-emerald-950 border border-emerald-700/40 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Status Awal</label>
                    <select
                      value={newWaveForm.status}
                      onChange={(e) => setNewWaveForm({ ...newWaveForm, status: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-emerald-950 border border-emerald-700/40 text-white text-xs"
                    >
                      <option value="Sedang Dibuka">🟢 Sedang Dibuka</option>
                      <option value="Akan Datang">🟡 Akan Datang</option>
                      <option value="Telah Ditutup">🔴 Telah Ditutup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Fasilitas / Keuntungan (Pisahkan dengan koma)</label>
                  <input
                    type="text"
                    value={newWaveForm.benefitsText}
                    onChange={(e) => setNewWaveForm({ ...newWaveForm, benefitsText: e.target.value })}
                    placeholder="Bebas Biaya Pendaftaran, Prioritas Peminatan, Tes Bebas Biaya"
                    className="w-full px-3.5 py-2 rounded-xl bg-emerald-950 border border-emerald-700/40 text-white text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5 text-emerald-950" />
                  <span>Tambahkan Gelombang Baru</span>
                </button>
              </form>

            </div>

            {/* TABEL PENDAFTAR PPDB */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Data Pendaftar PPDB Online 2026/2027</h3>
                  <p className="text-xs text-slate-300">Setiap pendaftaran yang dikirimkan siswa melalui website akan langsung muncul di sini.</p>
                </div>

                <button
                  onClick={exportPpdbToCSV}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold flex items-center gap-2 shrink-0"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-950" />
                  <span>Ekspor ke CSV / Excel</span>
                </button>
              </div>

              {/* Filter & Search Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={ppdbSearch}
                    onChange={(e) => setPpdbSearch(e.target.value)}
                    placeholder="Cari nama, asal sekolah, nomor reg, atau WhatsApp..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div className="sm:col-span-4 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gold-400 shrink-0" />
                  <select
                    value={ppdbStatusFilter}
                    onChange={(e) => setPpdbStatusFilter(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  >
                    <option value="Semua">Semua Status ({totalPpdb})</option>
                    <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                    <option value="Terverifikasi">Terverifikasi</option>
                    <option value="Diterima">Diterima</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-emerald-800/60 text-gold-400 uppercase tracking-wider">
                      <th className="py-3 px-4">No. Reg</th>
                      <th className="py-3 px-4">Nama Calon Santri</th>
                      <th className="py-3 px-4">Asal Sekolah</th>
                      <th className="py-3 px-4">Jurusan</th>
                      <th className="py-3 px-4">WhatsApp</th>
                      <th className="py-3 px-4">Tanggal</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-center">Ubah Status</th>
                      <th className="py-3 px-4 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-900/40">
                    {filteredApplicants.length > 0 ? (
                      filteredApplicants.map((app) => (
                        <tr key={app.id} className="hover:bg-emerald-950/40 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-amber-300">{app.id}</td>
                          <td className="py-3.5 px-4 font-semibold text-white">{app.name}</td>
                          <td className="py-3.5 px-4 text-slate-300">{app.schoolOrigin}</td>
                          <td className="py-3.5 px-4 text-emerald-300">{app.track}</td>
                          <td className="py-3.5 px-4 font-mono text-slate-300">
                            <a href={`https://wa.me/${app.phone?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-gold-300 underline">
                              {app.phone}
                            </a>
                          </td>
                          <td className="py-3.5 px-4 text-slate-400">{app.date}</td>
                          <td className="py-3.5 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                              app.status === 'Diterima' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                              app.status === 'Ditolak' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' :
                              app.status === 'Terverifikasi' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' :
                              'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            }`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <select
                              value={app.status}
                              onChange={(e) => {
                                updateApplicantStatus(app.id, e.target.value);
                                triggerToast(`Status ${app.name} diperbarui menjadi: ${e.target.value}`);
                              }}
                              className="px-2 py-1 rounded-lg bg-emerald-950 border border-emerald-700/50 text-slate-200 text-xs focus:outline-none"
                            >
                              <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                              <option value="Terverifikasi">Terverifikasi</option>
                              <option value="Diterima">Diterima</option>
                              <option value="Ditolak">Ditolak</option>
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            <button
                              onClick={() => {
                                if (window.confirm(`Hapus data pendaftar "${app.name}" (${app.id})?`)) {
                                  deletePpdbApplicant(app.id);
                                  triggerToast(`Data pendaftar ${app.name} telah dihapus.`);
                                }
                              }}
                              className="p-1.5 text-rose-400 hover:text-white rounded-lg hover:bg-rose-900/40 transition-colors"
                              title="Hapus pendaftar"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={9} className="py-8 text-center text-slate-400 text-xs">
                          Tidak ada pendaftar yang cocok dengan pencarian / filter ini.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PESAN & PERTANYAAN MASUK */}
        {activeTab === 'messages' && (
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-gold-400" /> Inbox Pesan & Pertanyaan Online
                </h3>
                <p className="text-xs text-slate-300">Setiap pertanyaan yang dikirimkan pengunjung dari formulir "Kirim Pertanyaan Online" akan langsung muncul di sini.</p>
              </div>
            </div>

            {/* Filter & Search Bar Messages */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-8 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={msgSearch}
                  onChange={(e) => setMsgSearch(e.target.value)}
                  placeholder="Cari nama pengirim, email, WhatsApp, atau isi pesan..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              <div className="sm:col-span-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-gold-400 shrink-0" />
                <select
                  value={msgStatusFilter}
                  onChange={(e) => setMsgStatusFilter(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                >
                  <option value="Semua">Semua Status ({totalMessages})</option>
                  <option value="Belum Dibaca">Belum Dibaca ({unreadMessagesCount})</option>
                  <option value="Sudah Dibaca">Sudah Dibaca</option>
                </select>
              </div>
            </div>

            {/* Messages Cards Grid / Table */}
            <div className="space-y-4">
              {filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => {
                  const cleanPhone = (msg.whatsapp || '').replace(/\D/g, '');
                  const waReplyUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                    `Assalamu'alaikum Wr. Wb. Yth. ${msg.name},\n\nTerima kasih telah menghubungi MA AL-GHAZALI Majalaya. Menanggapi pertanyaan Anda:\n"${msg.message}"\n\n`
                  )}`;

                  return (
                    <div
                      key={msg.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        msg.status === 'Belum Dibaca'
                          ? 'bg-gradient-to-r from-emerald-950 via-[#032a21] to-emerald-950 border-gold-400/50 shadow-glow-gold'
                          : 'bg-emerald-950/50 border-emerald-700/30'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-gold-400/40 flex items-center justify-center shrink-0 text-gold-400 font-bold text-sm">
                            <User className="w-5 h-5 text-gold-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold text-white">{msg.name}</h4>
                              <span className="text-[10px] font-mono text-amber-300 bg-emerald-900/60 px-2 py-0.5 rounded border border-gold-500/20">{msg.id}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-300 mt-0.5">
                              <span>📱 WhatsApp: <a href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noreferrer" className="text-gold-300 hover:underline font-mono">{msg.whatsapp}</a></span>
                              {msg.email && <span>&bull; ✉️ {msg.email}</span>}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" /> {msg.date}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            msg.status === 'Belum Dibaca'
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/50 animate-pulse'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          }`}>
                            {msg.status}
                          </span>
                        </div>
                      </div>

                      {/* Message Content Body */}
                      <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/40 text-xs sm:text-sm text-slate-200 leading-relaxed my-3 font-sans">
                        "{msg.message}"
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-end gap-3 pt-2">
                        {msg.status === 'Belum Dibaca' && (
                          <button
                            onClick={() => {
                              markMessageRead(msg.id);
                              triggerToast(`Pesan dari ${msg.name} ditandai sebagai sudah dibaca.`);
                            }}
                            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-600/40 text-emerald-200 flex items-center gap-1.5 transition-colors"
                          >
                            <MailCheck className="w-3.5 h-3.5 text-emerald-300" /> Tandai Dibaca
                          </button>
                        )}

                        <a
                          href={waReplyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-1.5 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold flex items-center gap-1.5 transition-transform active:scale-95"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-emerald-950" /> Balas via WhatsApp
                        </a>

                        <button
                          onClick={() => {
                            if (window.confirm(`Hapus pesan dari "${msg.name}"?`)) {
                              deleteContactMessage(msg.id);
                              triggerToast(`Pesan dari ${msg.name} telah dihapus.`);
                            }
                          }}
                          className="p-1.5 text-rose-400 hover:text-white rounded-lg hover:bg-rose-900/40 transition-colors"
                          title="Hapus pesan"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center text-slate-400 text-xs bg-emerald-950/30 rounded-2xl border border-emerald-900/40">
                  Belum ada pesan masuk yang cocok dengan pencarian / filter ini.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: PROFIL & VISI-MISI & KONTAK */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSaveProfile} className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Edit Identitas & Visi Misi Madrasah</h3>
              <p className="text-xs text-slate-300">Pengaturan ini akan langsung memperbarui tampilan identitas di seluruh halaman website.</p>
            </div>

            {/* Identitas Utama */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider border-b border-emerald-800/40 pb-2">1. Identitas Resmi</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Madrasah</label>
                  <input
                    type="text"
                    value={editIdentity.name}
                    onChange={(e) => setEditIdentity({ ...editIdentity, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Status & Akreditasi</label>
                  <input
                    type="text"
                    value={editIdentity.accreditation}
                    onChange={(e) => setEditIdentity({ ...editIdentity, accreditation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Motto Utama Sekolah</label>
                <input
                  type="text"
                  value={editIdentity.motto}
                  onChange={(e) => setEditIdentity({ ...editIdentity, motto: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Subheadline Halaman Utama (Hero)</label>
                <textarea
                  rows={2}
                  value={editIdentity.subheadline}
                  onChange={(e) => setEditIdentity({ ...editIdentity, subheadline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>
            </div>

            {/* Visi & Misi */}
            <div className="space-y-4 pt-4 border-t border-emerald-800/40">
              <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider border-b border-emerald-800/40 pb-2">2. Visi & Penjelasan Madrasah</h4>
              
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Visi Utama Madrasah</label>
                <textarea
                  rows={2}
                  value={editVisionMission.vision}
                  onChange={(e) => setEditVisionMission({ ...editVisionMission, vision: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Jabaran Visi Strategis</label>
                <textarea
                  rows={2}
                  value={editVisionMission.visionElaboration}
                  onChange={(e) => setEditVisionMission({ ...editVisionMission, visionElaboration: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>
            </div>

            {/* Kontak & Lokasi */}
            <div className="space-y-4 pt-4 border-t border-emerald-800/40">
              <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider border-b border-emerald-800/40 pb-2">3. Kontak & Alamat Lembaga</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nomor WhatsApp Aktif</label>
                  <input
                    type="text"
                    value={editContact.whatsapp}
                    onChange={(e) => setEditContact({ ...editContact, whatsapp: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Telepon Kantor</label>
                  <input
                    type="text"
                    value={editContact.phone}
                    onChange={(e) => setEditContact({ ...editContact, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Resmi</label>
                  <input
                    type="email"
                    value={editContact.email}
                    onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Alamat Lengkap Kampus</label>
                <input
                  type="text"
                  value={editContact.address}
                  onChange={(e) => setEditContact({ ...editContact, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>
            </div>

            {/* 4. Data Pimpinan & Sambutan Kepala Sekolah */}
            <div className="space-y-4 pt-4 border-t border-emerald-800/40">
              <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider border-b border-emerald-800/40 pb-2 flex items-center justify-between">
                <span>4. Pimpinan & Sambutan Kepala Sekolah</span>
                <span className="text-xs font-normal text-amber-300">Dapat Diubah & Langsung Tampil</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Live Preview Card */}
                <div className="md:col-span-4 p-4 rounded-2xl bg-emerald-950 border border-emerald-700/50 space-y-3">
                  <span className="text-[11px] font-bold text-slate-400 block text-center uppercase tracking-wider">Preview Kartu Pimpinan</span>
                  <div className="rounded-xl overflow-hidden bg-emerald-900 aspect-[3/4] relative shadow-lg">
                    <img
                      src={editPrincipal.photoUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"}
                      alt="Preview Kepala Madrasah"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011611] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg glass-panel border border-emerald-500/30 text-center">
                      <h5 className="text-sm font-bold text-white leading-tight">{editPrincipal.name || "Dr. H. Ahmad Dahlan, M.Ag."}</h5>
                      <span className="text-[11px] text-gold-300 font-medium block">{editPrincipal.title || "Kepala MA AL-GHAZALI"}</span>
                    </div>
                  </div>
                </div>

                {/* Edit Form Inputs */}
                <div className="md:col-span-8 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Lengkap & Gelar Pimpinan</label>
                      <input
                        type="text"
                        value={editPrincipal.name}
                        onChange={(e) => setEditPrincipal({ ...editPrincipal, name: e.target.value })}
                        placeholder="Contoh: Dr. H. Ahmad Dahlan, M.Ag."
                        className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Jabatan Resmi</label>
                      <input
                        type="text"
                        value={editPrincipal.title}
                        onChange={(e) => setEditPrincipal({ ...editPrincipal, title: e.target.value })}
                        placeholder="Contoh: Kepala MA AL-GHAZALI"
                        className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">URL / Link Foto Pimpinan</label>
                    <input
                      type="url"
                      value={editPrincipal.photoUrl}
                      onChange={(e) => setEditPrincipal({ ...editPrincipal, photoUrl: e.target.value })}
                      placeholder="Masukkan URL gambar foto (misal https://... atau /foto-kepala.jpg)"
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm font-mono text-xs"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">Anda dapat memasukkan link foto dari mana saja (seperti Unsplash, link internet, atau taruh foto di folder public/)</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Judul / Kutipan Utama Sambutan</label>
                    <input
                      type="text"
                      value={editPrincipal.greetingTitle}
                      onChange={(e) => setEditPrincipal({ ...editPrincipal, greetingTitle: e.target.value })}
                      placeholder="Contoh: Mempersiapkan Generasi Muslim Berilmu Luas..."
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Teks Sambutan Pimpinan (Pisahkan Paragraf dengan Enter)</label>
                    <textarea
                      rows={5}
                      value={editPrincipal.greetingText}
                      onChange={(e) => setEditPrincipal({ ...editPrincipal, greetingText: e.target.value })}
                      placeholder="Tulis sambutan pimpinan di sini..."
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold flex items-center gap-2"
            >
              <Save className="w-4 h-4 text-emerald-950" />
              <span>Simpan Perubahan Identitas & Kontak</span>
            </button>
          </form>
        )}

        {/* TAB 4: WARTA BERITA */}
        {activeTab === 'news' && (
          <div className="space-y-8">
            {/* Form Tambah Berita */}
            <form onSubmit={handleAddNews} className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-gold-400" /> Publikasikan Berita / Pengumuman Baru
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Judul Berita</label>
                  <input
                    type="text"
                    required
                    value={newNews.title}
                    onChange={(e) => setNewNews({ ...newNews, title: e.target.value })}
                    placeholder="Judul kegiatan / prestasi..."
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Kategori</label>
                  <select
                    value={newNews.category}
                    onChange={(e) => setNewNews({ ...newNews, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  >
                    <option value="Prestasi">Prestasi</option>
                    <option value="Pengumuman">Pengumuman</option>
                    <option value="Akademik">Akademik</option>
                    <option value="Keagamaan">Keagamaan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">URL Gambar Thumbnail</label>
                <input
                  type="url"
                  value={newNews.thumbnail}
                  onChange={(e) => setNewNews({ ...newNews, thumbnail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Ringkasan Singkat</label>
                <textarea
                  rows={2}
                  required
                  value={newNews.summary}
                  onChange={(e) => setNewNews({ ...newNews, summary: e.target.value })}
                  placeholder="Ringkasan 2-3 kalimat..."
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-emerald-950" />
                <span>Publikasikan Berita</span>
              </button>
            </form>

            {/* List Berita */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white">Daftar Berita Aktif ({data.articles?.length || 0})</h3>
              <div className="divide-y divide-emerald-900/40">
                {data.articles?.map((art) => (
                  <div key={art.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img src={art.thumbnail} alt={art.title} className="w-16 h-12 object-cover rounded-lg shrink-0" />
                      <div>
                        <span className="text-[10px] font-bold text-gold-400 uppercase">{art.category}</span>
                        <h4 className="text-sm font-bold text-white line-clamp-1">{art.title}</h4>
                        <span className="text-xs text-slate-400">{art.date}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus artikel "${art.title}"?`)) {
                          deleteArticle(art.id);
                          triggerToast(`Artikel "${art.title}" telah dihapus.`);
                        }
                      }}
                      className="p-2 text-rose-400 hover:text-white rounded-lg hover:bg-rose-900/40 transition-colors"
                      title="Hapus berita"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: GALERI */}
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            <form onSubmit={handleAddGallery} className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-gold-400" /> Tambah Foto Galeri Baru
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Judul Dokumentasi</label>
                  <input
                    type="text"
                    required
                    value={newGallery.title}
                    onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                    placeholder="Contoh: Pembelajaran Lab Komputer..."
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Kategori</label>
                  <select
                    value={newGallery.category}
                    onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  >
                    <option value="Kegiatan Belajar">Kegiatan Belajar</option>
                    <option value="Keagamaan">Keagamaan</option>
                    <option value="Ekstrakurikuler">Ekstrakurikuler</option>
                    <option value="Perlombaan">Perlombaan</option>
                    <option value="Kegiatan Sekolah">Kegiatan Sekolah</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">URL Gambar</label>
                <input
                  type="url"
                  required
                  value={newGallery.image}
                  onChange={(e) => setNewGallery({ ...newGallery, image: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Keterangan / Caption</label>
                <input
                  type="text"
                  value={newGallery.caption}
                  onChange={(e) => setNewGallery({ ...newGallery, caption: e.target.value })}
                  placeholder="Keterangan singkat momen foto..."
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-emerald-950" />
                <span>Simpan ke Galeri</span>
              </button>
            </form>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {data.gallery?.map((g) => (
                <div key={g.id} className="glass-card rounded-2xl overflow-hidden border border-emerald-500/20 relative group">
                  <img src={g.image} alt={g.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="p-3">
                    <span className="text-[10px] text-gold-400 uppercase font-bold block">{g.category}</span>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{g.title}</h4>
                  </div>
                  <button
                    onClick={() => {
                      if (window.confirm('Hapus foto ini dari galeri?')) {
                        deleteGalleryItem(g.id);
                        triggerToast('Foto galeri berhasil dihapus.');
                      }
                    }}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-rose-900/80 text-rose-200 hover:bg-rose-700 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: PRESTASI */}
        {activeTab === 'achievements' && (
          <div className="space-y-8">
            <form onSubmit={handleAddAchievement} className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-gold-400" /> Tambah Catatan Prestasi Santri Baru
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Judul Prestasi / Kejuaraan</label>
                  <input
                    type="text"
                    required
                    value={newAch.title}
                    onChange={(e) => setNewAch({ ...newAch, title: e.target.value })}
                    placeholder="Contoh: Juara 1 Robotika Nasional"
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Santri / Tim Peraih</label>
                  <input
                    type="text"
                    required
                    value={newAch.winner}
                    onChange={(e) => setNewAch({ ...newAch, winner: e.target.value })}
                    placeholder="Nama peraih..."
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tingkat</label>
                  <input
                    type="text"
                    value={newAch.level}
                    onChange={(e) => setNewAch({ ...newAch, level: e.target.value })}
                    placeholder="Tingkat Nasional / Provinsi"
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tahun</label>
                  <select
                    value={newAch.year}
                    onChange={(e) => setNewAch({ ...newAch, year: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  >
                    <option value={2026}>2026</option>
                    <option value={2025}>2025</option>
                    <option value={2024}>2024</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Bidang Prestasi</label>
                  <select
                    value={newAch.category}
                    onChange={(e) => setNewAch({ ...newAch, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  >
                    <option value="Akademik">Akademik</option>
                    <option value="Keagamaan">Keagamaan</option>
                    <option value="Teknologi">Teknologi</option>
                    <option value="Bahasa">Bahasa</option>
                    <option value="Seni & Budaya">Seni & Budaya</option>
                    <option value="Olahraga">Olahraga</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-emerald-950" />
                <span>Simpan Prestasi</span>
              </button>
            </form>

            {/* List Prestasi */}
            <div className="glass-card p-6 rounded-3xl border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white">Daftar Prestasi Aktif ({data.achievements?.length || 0})</h3>
              <div className="divide-y divide-emerald-900/40">
                {data.achievements?.map((ach) => (
                  <div key={ach.id} className="py-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gold-500/20 text-gold-300 border border-gold-400/30">
                          {ach.year}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase">{ach.category} &bull; {ach.level}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{ach.title}</h4>
                      <p className="text-xs text-slate-300 font-medium">Peraih: <span className="text-amber-200">{ach.winner}</span></p>
                    </div>
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus prestasi "${ach.title}"?`)) {
                          deleteAchievement(ach.id);
                          triggerToast(`Prestasi "${ach.title}" telah dihapus.`);
                        }
                      }}
                      className="p-2 text-rose-400 hover:text-white rounded-lg hover:bg-rose-900/40 transition-colors"
                      title="Hapus prestasi"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: FASILITAS KAMPUS */}
        {activeTab === 'facilities' && (
          <div className="space-y-8">
            <form onSubmit={handleAddFacility} className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-gold-400" /> Tambah Fasilitas Kampus Baru
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nama Fasilitas</label>
                  <input
                    type="text"
                    required
                    value={newFacility.title}
                    onChange={(e) => setNewFacility({ ...newFacility, title: e.target.value })}
                    placeholder="Contoh: Laboratorium Bahasa & Digital"
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Kategori</label>
                  <select
                    value={newFacility.category}
                    onChange={(e) => setNewFacility({ ...newFacility, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                  >
                    <option value="Akademik">Akademik</option>
                    <option value="Teknologi">Teknologi</option>
                    <option value="Keagamaan">Keagamaan</option>
                    <option value="Sains">Sains</option>
                    <option value="Olahraga">Olahraga</option>
                    <option value="Literasi">Literasi</option>
                    <option value="Fasilitas Umum">Fasilitas Umum</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">URL Gambar Fasilitas</label>
                <input
                  type="url"
                  required
                  value={newFacility.image}
                  onChange={(e) => setNewFacility({ ...newFacility, image: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Deskripsi Lengkap</label>
                <textarea
                  rows={2}
                  required
                  value={newFacility.desc}
                  onChange={(e) => setNewFacility({ ...newFacility, desc: e.target.value })}
                  placeholder="Penjelasan keunggulan fasilitas..."
                  className="w-full px-4 py-2.5 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-emerald-950" />
                <span>Simpan Fasilitas</span>
              </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {data.facilities?.map((fac) => (
                <div key={fac.id} className="glass-card rounded-2xl overflow-hidden border border-emerald-500/20 relative group flex flex-col justify-between">
                  <div>
                    <img src={fac.image} alt={fac.title} className="w-full aspect-[16/10] object-cover" />
                    <div className="p-4 space-y-2">
                      <span className="text-[10px] text-gold-400 font-bold uppercase">{fac.category}</span>
                      <h4 className="text-sm font-bold text-white line-clamp-1">{fac.title}</h4>
                      <p className="text-xs text-slate-300 line-clamp-2">{fac.desc}</p>
                    </div>
                  </div>
                  <div className="p-4 pt-0 flex justify-end">
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus fasilitas "${fac.title}"?`)) {
                          deleteFacility(fac.id);
                          triggerToast(`Fasilitas "${fac.title}" telah dihapus.`);
                        }
                      }}
                      className="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-700/40 text-rose-300 hover:bg-rose-900 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
