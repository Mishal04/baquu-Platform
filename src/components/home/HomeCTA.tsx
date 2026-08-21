import React from 'react';
import { Compass, Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';

interface HomeCTAProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
}

export const HomeCTA: React.FC<HomeCTAProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <section className="py-20 bg-[#0F172A] relative overflow-hidden text-center border-t border-[#E5E7EB]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <span>Start Your Azerbaijan Journey Today</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-serif leading-tight">
          READY TO EXPLORE AZERBAIJAN?
        </h2>

        <p className="text-sm sm:text-lg text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed">
          LET SIRFPK HELP YOU PLAN, TRAVEL, LIVE, INVEST AND BUILD IN AZERBAIJAN.
        </p>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Contact our specialized Azerbaijan consultancy team today for transparent, end-to-end guidance.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('tours')}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>PLAN MY TRIP</span>
          </button>

          <button
            onClick={() => onOpenConsultation()}
            className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs tracking-wider uppercase border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>BOOK A CONSULTATION</span>
          </button>

          <a
            href={`https://wa.me/923009111130?text=${encodeURIComponent(
              'Hello SIRFPK! I want to consult regarding Azerbaijan travel, visa, TRC or property services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
};
