import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, CheckCircle, ArrowRight, Shield, Building2, FileCheck2 } from 'lucide-react';
import { PageRoute } from '../../types';

interface CompanyRegistrationHighlightProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
}

export const CompanyRegistrationHighlight: React.FC<CompanyRegistrationHighlightProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const { t } = useTranslation();
  const steps = [
    { num: '1', title: t('company.step1.title'), desc: t('company.step1.desc') },
    { num: '2', title: t('company.step2.title'), desc: t('company.step2.desc') },
    { num: '3', title: t('company.step3.title'), desc: t('company.step3.desc') },
    { num: '4', title: t('company.step4.title'), desc: t('company.step4.desc') },
    { num: '5', title: t('company.step5.title'), desc: t('company.step5.desc') },
    { num: '6', title: t('company.step6.title'), desc: t('company.step6.desc') },
    { num: '7', title: t('company.step7.title'), desc: t('company.step7.desc') },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1633] via-[#0E204A] to-[#071126] text-white relative border-t border-b border-indigo-900/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300">
            {t('company.badge')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif mt-3">
            {t('company.heading')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            {t('company.subheading')}
          </p>
        </div>

        {/* 7-Step Visual Timeline Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 mb-12">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="relative p-4 rounded-xl bg-slate-900/80 border border-indigo-500/30 hover:border-amber-400 shadow-md flex flex-col justify-between group transition-all backdrop-blur-xs hover:-translate-y-1"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/40 text-amber-400 font-bold font-mono text-sm flex items-center justify-center mb-3 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  {s.num}
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{s.title}</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid & Call to Action */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-indigo-500/40 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
              {t('company.ctaTitle')}
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl">
              {t('company.ctaBody')}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('company-registration')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs flex items-center gap-1.5 border border-slate-600 shadow-md transition-all cursor-pointer"
            >
              <span>{t('company.viewGuide')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <button
              onClick={() => onOpenConsultation('Company Registration & Setup')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer border border-amber-300/50"
            >
              {t('company.startBusiness')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
