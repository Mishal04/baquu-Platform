import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, FileText, UserCheck, Clock, AlertCircle } from 'lucide-react';
import { PageRoute } from '../../types';

interface ResidencyHighlightProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
}

export const ResidencyHighlight: React.FC<ResidencyHighlightProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const pathways = [
    {
      title: 'Company / Business Setup',
      desc: 'Form an LLC (MMC) in Azerbaijan and obtain TRC residency as a company founder or executive director.',
    },
    {
      title: 'Real Estate Investment',
      desc: 'Acquire qualifying residential or commercial property in Azerbaijan exceeding State statutory value requirements.',
    },
    {
      title: 'University / Student TRC',
      desc: 'Enroll in accredited medical, engineering, or business universities across Baku with student residency support.',
    },
    {
      title: 'Family Reunification',
      desc: 'Extend residency permits to spouses and dependent children with comprehensive document and translation support.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#062A28] via-[#0A3D3C] to-[#041F20] text-slate-100 relative overflow-hidden border-t border-b border-emerald-800/80">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Residency & Migration Advisory</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white font-serif leading-tight">
              Azerbaijan TRC & Temporary Residence Assistance
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              Relocate, invest, and build your future in Azerbaijan. We provide comprehensive legal document preparation, sworn translation, medical checkup assistance, and State Migration Service appointment scheduling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pathways.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/30 hover:border-emerald-400 space-y-1.5 shadow-md backdrop-blur-sm transition-colors">
                  <div className="flex items-center gap-2 text-emerald-200 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed pl-6">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-amber-400/30 text-[11px] text-slate-300 flex items-start gap-2 backdrop-blur-sm">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-amber-300">Statutory Notice:</strong> SIRFPK provides consultancy and application assistance. Approval of residence permits is subject to the decision of the relevant Azerbaijani authorities.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('trc')}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 border border-slate-700 shadow-md cursor-pointer transition-all"
              >
                <span>Read Complete TRC Guide</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>

              <button
                onClick={() => onOpenConsultation('TRC & Residency Consultation')}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 cursor-pointer transition-all border border-amber-300/50"
              >
                Book TRC Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Visual Infographic Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900/80 border border-emerald-500/40 p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-emerald-800/80 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    TRC Application Roadmap
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif mt-0.5">
                    Standard 4-Phase Process
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Initial Eligibility & Pathway Selection',
                    detail: 'Evaluate eligibility (Business Setup, Property, or Education) and compile checklist.',
                  },
                  {
                    step: '02',
                    title: 'Document Legalization & Notarized Translation',
                    detail: 'Apostille, certified Azerbaijani translation, and local tax identification number (VÖEN).',
                  },
                  {
                    step: '03',
                    title: 'Medical Clearance & Biometric Submission',
                    detail: 'Accompaniment to certified medical facility & State Migration Service biometric appointment.',
                  },
                  {
                    step: '04',
                    title: 'TRC Issuance & Registration',
                    detail: 'Collection of the official Temporary Residence Card (valid 1 to 2 years, renewable).',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3.5 rounded-xl bg-[#08201F]/80 border border-emerald-600/30 shadow-xs hover:border-emerald-400 transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-emerald-100">{item.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center border-t border-emerald-800/60">
                <span className="text-[11px] text-emerald-200/80">
                  Average Processing Time: <strong className="text-amber-300">15 to 20 Business Days</strong> from formal submission.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
