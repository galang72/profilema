import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useSchool } from '../../context/SchoolContext';

export const WhatsAppButton = () => {
  const { data } = useSchool();
  const [showTooltip, setShowTooltip] = useState(true);

  const rawPhone = data.contact.whatsapp || "6285220944447";
  const cleanPhone = rawPhone.replace(/\D/g, '');
  const defaultMessage = encodeURIComponent(
    "Halo MA AL-GHOZALI, saya ingin mendapatkan informasi mengenai sekolah dan PPDB."
  );
  const waUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 pl-3.5 pr-2 py-2 rounded-2xl bg-[#03241b] border border-gold-400/40 text-slate-100 shadow-xl backdrop-blur-md animate-float-medium">
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-bold text-gold-400 leading-tight">Tanya MA AL-GHOZALI</span>
            <span className="text-[10px] text-slate-300">Konsultasi PPDB & Sekolah</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-emerald-900/50"
            aria-label="Tutup info"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Pulsing circular floating action button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-emerald-400 text-white flex items-center justify-center shadow-glow-emerald hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Tanya MA AL-GHOZALI di WhatsApp"
      >
        {/* Pulsing rings */}
        <span className="absolute -inset-1 rounded-full border-2 border-emerald-400/50 animate-ping opacity-60 pointer-events-none" />
        <span className="absolute -inset-2 rounded-full border border-gold-400/30 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white/20 text-white group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
};
