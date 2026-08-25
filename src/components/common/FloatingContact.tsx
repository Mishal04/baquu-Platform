import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles, X, Send, Calendar } from 'lucide-react';
import { SiteSettings } from '../../types';

interface FloatingContactProps {
  siteSettings: SiteSettings;
  onOpenConsultation: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({
  siteSettings,
  onOpenConsultation,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = [
    { label: 'Pakistan Helpline', number: siteSettings.phoneNumbers.pk, raw: '923009111130', flag: '🇵🇰' },
    { label: 'UK Support', number: siteSettings.phoneNumbers.uk, raw: '447462273257', flag: '🇬🇧' },
    { label: 'Baku Team (Desk 1)', number: siteSettings.phoneNumbers.aze1, raw: '994504517493', flag: '🇦🇿' },
    { label: 'Baku Team (Desk 2)', number: siteSettings.phoneNumbers.aze2, raw: '9940509209003', flag: '🇦🇿' },
  ];

  const handleWhatsApp = (rawNumber: string) => {
    const text = encodeURIComponent(
      'Hello SIRFPK! I am interested in Azerbaijan Travel, Visa, Residency, Property, or Business services. Please assist me.'
    );
    window.open(`https://wa.me/${rawNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Widget */}
      <div className="hidden md:block fixed bottom-6 left-6 z-40">
        {isOpen && (
          <div className="mb-3 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">SIRFPK WhatsApp Desk</h4>
                    <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                      Online • Typical reply under 5 mins
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-3.5 space-y-2.5 bg-slate-900 text-slate-200">
              <p className="text-xs text-slate-300 px-1">
                Choose your preferred consultant line to chat on WhatsApp:
              </p>
              <div className="space-y-1.5">
                {phoneNumbers.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleWhatsApp(p.raw)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 hover:bg-emerald-950/60 border border-slate-700/80 hover:border-emerald-500/50 transition-all text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{p.flag}</span>
                      <div>
                        <span className="text-xs font-semibold text-slate-200 block group-hover:text-emerald-300">
                          {p.label}
                        </span>
                        <span className="text-xs text-amber-300 font-mono font-medium">{p.number}</span>
                      </div>
                    </div>
                    <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request a Free Detailed Consultation</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Bubble Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all transform hover:scale-105 cursor-pointer border border-emerald-300/40"
          aria-label="WhatsApp Support"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400"></span>
          </div>
          <span className="tracking-wide">WhatsApp Us</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#07132B] border-t border-slate-800 p-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
          <a
            href={`https://wa.me/923009111130?text=${encodeURIComponent(
              'Hello SIRFPK! I am interested in your Azerbaijan services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white shadow-md active:bg-emerald-700"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[11px]">WHATSAPP</span>
          </a>

          <a
            href={`tel:${siteSettings.phoneNumbers.pk}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-600 text-white shadow-md active:bg-sky-700"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span className="text-[11px]">CALL</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md active:bg-amber-600"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span className="text-[11px]">CONSULTATION</span>
          </button>
        </div>
      </div>
    </>
  );
};
