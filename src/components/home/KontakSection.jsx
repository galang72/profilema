import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { TiltCard } from '../3d/TiltCard';
import { useSchool } from '../../context/SchoolContext';

export const KontakSection = () => {
  const { data, addContactMessage } = useSchool();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.message) return;

    setLoading(true);
    addContactMessage(formData);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  const rawPhone = data.contact.whatsapp || '6285220944447';
  const cleanPhone = rawPhone.replace(/\D/g, '');
  const waDirectUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'Halo Humas MA AL-GHAZALI, saya ingin menanyakan perihal informasi madrasah.'
  )}`;

  return (
    <section id="kontak" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#011611]/30 via-[#02241b]/20 to-[#01140f]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Komunikasi & Layanan"
          title="Hubungi MA AL-GHAZALI"
          subtitle="Pintu silaturahmi dan konsultasi kami senantiasa terbuka untuk menyambut calon santri, wali murid, dan masyarakat."
        />

        {/* 2-Column Split: Info & Maps vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details & Google Maps Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Cards */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-emerald-500/20 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">Informasi Sekretariat</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Alamat Kampus:</span>
                  <p className="text-sm font-semibold text-white leading-relaxed">{data.contact.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Telepon Kantor:</span>
                  <p className="text-sm font-semibold text-white">{data.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email Resmi:</span>
                  <p className="text-sm font-semibold text-white">{data.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Jam Pelayanan:</span>
                  <p className="text-sm font-semibold text-white">{data.contact.officeHours}</p>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={waDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-950 bg-gradient-to-r from-amber-300 to-gold-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-950" />
                  <span>Chat WhatsApp Humas Madrasah</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Preview */}
            <div className="rounded-3xl overflow-hidden border border-emerald-500/20 shadow-xl h-56 bg-emerald-950 relative">
              <iframe
                title="Peta Lokasi MA AL-GHAZALI"
                src={data.contact.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.1) opacity(0.85)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={6} scale={1.01} className="w-full rounded-3xl">
              <div className="glass-card p-6 sm:p-10 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-[#032920]/90 to-[#011812]/95 shadow-2xl">
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Kirim Pesan / Pertanyaan
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Silakan isi formulir di bawah ini. Tim sekretariat kami akan segera merespons melalui WhatsApp atau Email Anda.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-900/80 border border-emerald-400/50 flex items-center gap-3 text-emerald-200 text-xs sm:text-sm shadow-glow-emerald">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                    <span>Terima kasih! Pesan Anda telah terkirim. Tim MA AL-GHAZALI akan segera menghubungi Anda.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nama */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nama Lengkap <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Bapak/Ibu Ahmad Fauzi"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  {/* Email & WA Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Nomor WhatsApp <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="08xxxxxxxxxx"
                        className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Pesan */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Isi Pesan / Pertanyaan <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan pertanyaan Anda mengenai pendaftaran, program studi, atau hal lainnya..."
                      className="w-full px-4 py-3 rounded-xl bg-emerald-950/70 border border-emerald-700/40 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Tombol Kirim */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-sm font-extrabold text-emerald-950 bg-gradient-to-r from-amber-300 via-gold-400 to-amber-400 hover:from-amber-200 hover:to-gold-300 shadow-glow-gold flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-emerald-950" />
                    <span>{loading ? 'Mengirim Pesan...' : 'Kirim Pesan Sekarang'}</span>
                  </button>
                </form>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
