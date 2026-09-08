import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ChevronDown, 
  HelpCircle,
  Sparkles 
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TiltCard } from '../components/3d/TiltCard';
import { useSchool } from '../context/SchoolContext';

export const KontakPage = () => {
  const { data, addContactMessage } = useSchool();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    addContactMessage(formData);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const faqs = [
    {
      q: "Apakah MA AL-GHOZALI menyediakan program asrama (boarding)?",
      a: "Ya, kami menyediakan opsi program asrama (Boarding School) khusus santri tahfidz dan program intensif dengan pembinaan ibadah dan akhlak 24 jam di bawah bimbingan para musyrif dan musyrifah."
    },
    {
      q: "Bagaimana cara mendaftar beasiswa tahfidz Al-Qur'an?",
      a: "Calon santri yang memiliki hafalan Al-Qur'an minimal 5 Juz mutqin berhak mengikuti seleksi Jalur Beasiswa Tahfidz pada Gelombang 1 dengan melampirkan sertifikat/syahadah tahfidz saat mendaftar online."
    },
    {
      q: "Apakah ijazah MA AL-GHOZALI diakui untuk mendaftar ke PTN dan luar negeri?",
      a: "Tentu. MA AL-GHOZALI berada di bawah naungan Kementerian Agama RI dan terakreditasi A (Unggul) oleh BAN-SM. Lulusan kami memiliki hak dan peluang yang setara dalam seleksi SNBP, SNBT, SPAN-PTKIN, serta beasiswa perguruan tinggi luar negeri seperti Universitas Al-Azhar Kairo."
    },
    {
      q: "Kapan jam operasional kantor pelayanan madrasah?",
      a: "Kantor sekretariat dan informasi PPDB buka setiap hari Senin s.d. Sabtu pukul 07.00 - 16.00 WIB. Konsultasi online via WhatsApp dapat dilayani setiap saat."
    }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-24 bg-transparent min-h-screen">
      
      {/* Header Banner */}
      <div className="relative py-16 bg-gradient-to-b from-[#02281e] to-[#011611] border-b border-emerald-500/20 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque-pattern opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            Layanan Informasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hubungi & Kunjungi <span className="text-gradient-gold">MA AL-GHOZALI</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Kami dengan senang hati menjawab setiap pertanyaan dan menyambut kunjungan silaturahmi Bapak/Ibu ke kampus madrasah.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-emerald-500/20 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Kantor Sekretariat Utama</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Alamat Kampus:</span>
                  <p className="text-sm font-semibold text-white leading-relaxed">{data.contact.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Telepon Kantor:</span>
                  <p className="text-sm font-semibold text-white">{data.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Email:</span>
                  <p className="text-sm font-semibold text-white">{data.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Jam Layanan:</span>
                  <p className="text-sm font-semibold text-white">{data.contact.officeHours}</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-emerald-500/20 shadow-xl h-64 bg-emerald-950">
              <iframe
                title="Peta Lokasi MA AL-GHOZALI"
                src={data.contact.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} className="w-full rounded-3xl">
              <div className="glass-card p-8 sm:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#032920]/90 to-[#011812]/95 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">Kirim Pertanyaan Online</h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Sampaikan pertanyaan mengenai seleksi santri baru, kurikulum, atau penawaran kerjasama pendidikan.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-900/80 border border-emerald-400/50 flex items-center gap-3 text-emerald-200 text-sm shadow-glow-emerald">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>Terima kasih! Pesan Anda telah kami terima dan akan segera dijawab oleh sekretariat madrasah.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Lengkap *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Pesan / Pertanyaan *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pesan Anda secara jelas di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-sm font-extrabold text-emerald-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4 text-emerald-950" />
                    <span>{loading ? 'Mengirim...' : 'Kirim Sekarang'}</span>
                  </button>
                </form>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div>
          <SectionHeading
            badge="Tanya Jawab"
            title="Pertanyaan yang Sering Diajukan (FAQ)"
            subtitle="Temukan jawaban cepat atas hal-hal yang sering ditanyakan mengenai sistem pembelajaran dan penerimaan santri."
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-emerald-500/20 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-gold-300 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-emerald-800/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
