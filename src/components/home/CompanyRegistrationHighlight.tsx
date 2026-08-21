import React from 'react';
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
  const steps = [
    { num: '1', title: 'Initial Consultation', desc: 'Define business objectives, shareholding ratios, and capital structure.' },
    { num: '2', title: 'Choose Structure', desc: 'Select LLC (Məhdud Məsuliyyətli Cəmiyyət - MMC) or Branch Office.' },
    { num: '3', title: 'Prepare Documents', desc: 'Draft articles of association, shareholder resolutions, and notarized translations.' },
    { num: '4', title: 'Submit Application', desc: 'Filing with the State Tax Service / Ministry of Economy single-window portal.' },
    { num: '5', title: 'Company Registration', desc: 'Obtain official Certificate of State Registration, Tax ID (VÖEN), and ASAN Imza.' },
    { num: '6', title: 'Bank Account Setup', desc: 'Assistance opening corporate bank accounts in AZN, USD, and EUR in Baku.' },
    { num: '7', title: 'Ongoing Support', desc: 'Accounting, tax reporting compliance, office address, and founder TRC residency.' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A1633] via-[#0E204A] to-[#071126] text-white relative border-t border-b border-indigo-900/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300">
            Corporate & Business Setup
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-serif mt-3">
            Company Registration in Azerbaijan (MMC Formation)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Establish your company in Baku with 100% foreign ownership, competitive corporate tax rates, and access to regional Silk Road markets.
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
              Ready to Expand Your Business into Azerbaijan?
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl">
              100% foreign ownership allowed • Fast incorporation • Multi-currency banking • Founder TRC eligibility • Double taxation treaties.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('company-registration')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs flex items-center gap-1.5 border border-slate-600 shadow-md transition-all cursor-pointer"
            >
              <span>View Full Business Guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>

            <button
              onClick={() => onOpenConsultation('Company Registration & Setup')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer border border-amber-300/50"
            >
              Start Your Business in Azerbaijan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
