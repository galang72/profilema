import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Download, 
  Printer, 
  UserCheck, 
  CreditCard,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Clock 
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/3d/TiltCard';
import { useSchool } from '../context/SchoolContext';

export const PpdbPage = () => {
  const { data, addPpdbApplicant } = useSchool();
  const { ppdbInfo } = data;

  const [form, setForm] = useState({
    name: '',
    nisn: '',
    schoolOrigin: '',
    gender: 'Laki-laki',
    birthPlace: '',
    birthDate: '',
    track: 'MIPA',
    admissionRoute: 'Jalur Beasiswa Tahfidz & Prestasi',
    parentName: '',
    phone: '',
    address: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.schoolOrigin) return;

    setLoading(true);
    setTimeout(() => {
      const record = addPpdbApplicant(form);
      setSubmittedData(record);
      setLoading(false);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#10b981', '#f59e0b', '#34d399'],
        });
      } catch (err) {
        console.warn(err);
      }
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-transparent min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-[#02281e] to-[#011611] border-b border-emerald-500/20 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 p-2 rounded-2xl bg-emerald-950/80 border border-gold-400/50 shadow-glow-gold flex items-center justify-center animate-float-medium">
            <img
              src="/logo-alghazali.png"
              alt="Logo Resmi MA AL-GHAZALI"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/50 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-glow-gold">
            <GraduationCap className="w-4 h-4 text-gold-400" />
            Tahun Ajaran {ppdbInfo.academicYear}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Portal PPDB Online <span className="text-gradient-gold">MA AL-GHAZALI</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Daftarkan putra-putri Anda untuk menjadi bagian dari keluarga besar madrasah unggulan yang mengintegrasikan sains, akhlak mulia, dan teknologi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Gelombang & Jalur Pendaftaran */}
        <div>
          <SectionHeading
            badge="Informasi Gelombang"
            title="Jadwal & Jalur Penerimaan"
            subtitle="Pilih jalur penerimaan yang paling sesuai dengan kualifikasi calon peserta didik."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ppdbInfo.waves.map((w, idx) => (
              <div
                key={idx}
                className="glass-card-gold p-8 rounded-3xl border border-gold-400/30 bg-gradient-to-b from-[#032a21]/90 to-[#011a14]/95 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-900/80 text-gold-300 border border-gold-400/30">
                      {w.name}
                    </span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      w.status === 'Sedang Dibuka' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50' :
                      w.status === 'Akan Datang' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50' :
                      'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                    }`}>
                      {w.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold mb-6">
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>Periode: {w.period}</span>
                  </div>

                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block mb-3">
                    Keuntungan Jalur Ini:
                  </span>
                  <div className="space-y-2.5 mb-6">
                    {w.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-800/40 text-xs text-slate-400">
                  <span>* Kuota dapat ditutup sewaktu-waktu apabila daya tampung kelas telah terpenuhi.</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Persyaratan Dokumen */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/60 to-[#02241b]/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-gold-400/40 flex items-center justify-center text-gold-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Persyaratan Berkas Pendaftaran</h3>
              <p className="text-xs text-slate-300">Siapkan dokumen-dokumen berikut untuk tahap verifikasi berkas:</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ppdbInfo.requirements.map((req, i) => (
              <div key={i} className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-700/30 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-gold-500/30">
                  {i + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Registration Form */}
        <div id="form-pendaftaran" className="relative">
          <SectionHeading
            badge="Formulir Pendaftaran"
            title="Isi Formulir Calon Santri Baru"
            subtitle="Pastikan seluruh data yang dimasukkan benar dan nomor WhatsApp aktif untuk verifikasi."
          />

          <div className="max-w-4xl mx-auto">
            <TiltCard maxTilt={4} scale={1.01} className="w-full rounded-3xl">
              <div className="glass-card p-8 sm:p-12 rounded-3xl border-2 border-gold-500/30 bg-gradient-to-b from-[#032a21]/95 to-[#011913]/95 shadow-2xl">
                
                {submittedData ? (
                  /* Bukti Registrasi Berhasil */
                  <div className="text-center space-y-6 py-6 animate-fadeIn">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-gold-500 flex items-center justify-center shadow-glow-gold">
                      <CheckCircle2 className="w-12 h-12 text-emerald-950" />
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
                        Pendaftaran Berhasil Terkirim!
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Nomor Registrasi: <span className="text-amber-300 font-mono">{submittedData.id}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                        Simpan atau cetak bukti pendaftaran ini sebagai dokumen sah saat pelaksanaan tes dan observasi madrasah.
                      </p>
                    </div>

                    {/* Print Preview Card */}
                    <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-600/30 text-left max-w-lg mx-auto space-y-3 font-mono text-xs text-slate-200">
                      <div className="flex justify-between pb-2 border-b border-emerald-800">
                        <span className="text-slate-400">Nama Calon Santri:</span>
                        <span className="font-bold text-white">{submittedData.name}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-emerald-800">
                        <span className="text-slate-400">Asal Sekolah:</span>
                        <span className="text-white">{submittedData.schoolOrigin}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-emerald-800">
                        <span className="text-slate-400">Peminatan Pilihan:</span>
                        <span className="text-gold-300 font-bold">{submittedData.track}</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-emerald-800">
                        <span className="text-slate-400">No. WhatsApp:</span>
                        <span className="text-white">{submittedData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Status Pendaftaran:</span>
                        <span className="text-amber-300 font-bold">{submittedData.status}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                      <button
                        onClick={handlePrint}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 hover:to-gold-300 flex items-center justify-center gap-2 shadow-glow-gold"
                      >
                        <Printer className="w-4 h-4" />
                        <span>Cetak Bukti Pendaftaran (PDF)</span>
                      </button>

                      <button
                        onClick={() => setSubmittedData(null)}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-emerald-950/80 border border-emerald-700/30 hover:bg-emerald-900"
                      >
                        Daftar Calon Siswa Lain
                      </button>
                    </div>

                  </div>
                ) : !(ppdbInfo.isRegistrationOpen ?? true) ? (
                  <div className="text-center py-10 space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center justify-center mx-auto shadow-lg">
                      <XCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Pendaftaran Online Saat Ini Ditutup</h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Sistem pendaftaran peserta didik baru online MA AL-GHAZALI sedang ditutup sementara oleh panitia madrasah.
                    </p>
                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=Halo%20Panitia%20PPDB%20MA%20AL-GHAZALI,%20saya%20ingin%20bertanya%20informasi%20pendaftaran.`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 shadow-glow-gold mt-2"
                    >
                      <Phone className="w-4 h-4 text-emerald-950" />
                      <span>Hubungi Panitia PPDB (WhatsApp)</span>
                    </a>
                  </div>
                ) : (
                  /* Form Pendaftaran Online */
                  <form onSubmit={handleRegister} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Nama Lengkap Calon Santri <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Nama sesuai akta kelahiran"
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          NISN (Nomor Induk Siswa Nasional)
                        </label>
                        <input
                          type="text"
                          value={form.nisn}
                          onChange={(e) => setForm({ ...form, nisn: e.target.value })}
                          placeholder="10 digit nomor NISN"
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Asal Sekolah (SMP / MTs) <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.schoolOrigin}
                          onChange={(e) => setForm({ ...form, schoolOrigin: e.target.value })}
                          placeholder="Contoh: MTs Negeri 1 / SMPIT Al-Falah"
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Jenis Kelamin <span className="text-amber-400">*</span>
                        </label>
                        <select
                          value={form.gender}
                          onChange={(e) => setForm({ ...form, gender: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm focus:outline-none focus:border-gold-400"
                        >
                          <option value="Laki-laki">Laki-laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Pilihan Peminatan Jurusan <span className="text-amber-400">*</span>
                        </label>
                        <select
                          value={form.track}
                          onChange={(e) => setForm({ ...form, track: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm focus:outline-none focus:border-gold-400"
                        >
                          <option value="MIPA (Matematika & Sains)">MIPA (Matematika & Sains)</option>
                          <option value="IPS (Sosial & Ekonomi Syariah)">IPS (Sosial & Ekonomi Syariah)</option>
                          <option value="Keagamaan (MAK / Tsaqafah Islamiyah)">Keagamaan (MAK / Tsaqafah Islamiyah)</option>
                          <option value="Unggulan Riset & Digital">Unggulan Riset & Digital</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Jalur Pendaftaran <span className="text-amber-400">*</span>
                        </label>
                        <select
                          value={form.admissionRoute}
                          onChange={(e) => setForm({ ...form, admissionRoute: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white text-sm focus:outline-none focus:border-gold-400"
                        >
                          <option value="Jalur Beasiswa Tahfidz & Prestasi">Jalur Beasiswa Tahfidz & Prestasi</option>
                          <option value="Jalur Reguler Gelombang 1">Jalur Reguler Gelombang 1</option>
                          <option value="Jalur Afirmasi / Mitra">Jalur Afirmasi / Mitra</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Nama Orang Tua / Wali <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.parentName}
                          onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                          placeholder="Nama ayah / ibu / wali santri"
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Nomor WhatsApp Orang Tua / Calon Santri <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="08xxxxxxxxxx"
                          className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Alamat Domisili Lengkap
                      </label>
                      <textarea
                        rows={3}
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="Nama jalan, RT/RW, kelurahan, kecamatan, kota/kabupaten"
                        className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-2xl text-base font-extrabold text-emerald-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold active:scale-98 transition-all flex items-center justify-center gap-2"
                    >
                      <GraduationCap className="w-5 h-5 text-emerald-950" />
                      <span>{loading ? 'Memproses Pendaftaran...' : 'Kirim Pendaftaran & Dapatkan Nomor Registrasi'}</span>
                    </button>

                  </form>
                )}

              </div>
            </TiltCard>
          </div>
        </div>

      </div>
    </div>
  );
};
