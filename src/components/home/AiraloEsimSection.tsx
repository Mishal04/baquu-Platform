import React from 'react';
import { Smartphone, Wifi, Zap, Globe2, ShieldCheck, ExternalLink, Check } from 'lucide-react';
import { StorageService } from '../../services/storage';

export const AiraloEsimSection: React.FC = () => {
  const handleGetEsim = () => {
    const link = StorageService.getAffiliateLink('airalo');
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#05221B] via-[#09352B] to-[#041A14] text-white border-t border-b border-emerald-800/80 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-slate-900/80 border border-emerald-500/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Wifi className="w-4 h-4 text-emerald-400" />
                <span>Stay Connected in Azerbaijan</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white font-serif leading-tight">
                Get an Azerbaijan eSIM Before You Travel
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Never worry about expensive international roaming bills or searching for physical SIM cards at Baku airport. Stay instantly connected with high-speed 4G/5G data across Baku, Shahdag, Gabala, and all regional highways.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Instant activation via QR code before departure or on arrival',
                  'Connect to premier Azerbaijani networks (Azercell & Bakcell)',
                  'Flexible prepaid data plans from 1GB to 20GB with zero hidden fees',
                  'Keep your original WhatsApp number active for business and family',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-emerald-100">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/30 border border-emerald-400/50 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleGetEsim}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer border border-amber-300/50"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Get Azerbaijan eSIM</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400">
                  Powered by trusted partner <strong className="text-amber-300">Airalo</strong> • Official Partner Link
                </span>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs rounded-2xl bg-[#08201A] border border-emerald-500/40 p-6 shadow-xl text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mx-auto border border-emerald-400/40">
                  <Globe2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                    Azerbaijan eSIM
                  </span>
                  <h4 className="text-lg font-bold text-white font-serif">Airalo Gizmo / Azercell</h4>
                  <p className="text-xs text-emerald-200/80 mt-1">High Speed 4G / 5G LTE</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-700/60 text-xs text-slate-200 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Coverage:</span>
                    <span className="font-semibold text-white">All Azerbaijan 🇦🇿</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Setup:</span>
                    <span className="font-semibold text-emerald-400">100% Digital eSIM</span>
                  </div>
                </div>
                <button
                  onClick={handleGetEsim}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-md"
                >
                  Select eSIM Data Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
