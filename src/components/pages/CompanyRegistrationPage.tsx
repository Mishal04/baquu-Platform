import React from 'react';
import {
  Briefcase,
  CheckCircle,
  Building2,
  FileText,
  CreditCard,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Globe2,
} from 'lucide-react';
import { PageRoute } from '../../types';

interface CompanyRegistrationPageProps {
  onOpenConsultation: (service?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const CompanyRegistrationPage: React.FC<CompanyRegistrationPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const steps = [
    {
      num: '1',
      title: 'Initial Consultation & Entity Scoping',
      desc: 'Determine business scope, shareholding ratio, official legal name reservations, and initial charter capital.',
    },
    {
      num: '2',
      title: 'Preparation of Corporate Charter & Resolutions',
      desc: 'Drafting the Articles of Association, founder decisions, and notarized powers of attorney.',
    },
    {
      num: '3',
      title: 'Legal Translation & Azerbaijani Notarization',
      desc: 'Apostille legalization and sworn translation of foreign shareholder identity documents and certificates.',
    },
    {
      num: '4',
      title: 'Filing with State Tax Service (Single Window)',
      desc: 'Electronic submission through the Ministry of Economy single-window registration system.',
    },
    {
      num: '5',
      title: 'Tax ID (VÖEN) & ASAN Imza Digital Signature',
      desc: 'Issuance of the Certificate of State Registration, official Tax ID, and cryptographic ASAN Imza mobile SIM.',
    },
    {
      num: '6',
      title: 'Corporate Bank Account Opening in Baku',
      desc: 'Assistance setting up multi-currency corporate banking (AZN, USD, EUR) with internet banking access.',
    },
    {
      num: '7',
      title: 'Accounting, Office Address & Founder TRC',
      desc: 'Providing registered office lease address, monthly tax accounting, and TRC residency submission for directors.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Azerbaijan Corporate Formation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif">
            Company Registration in Azerbaijan (MMC Formation)
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Establish a Limited Liability Company (Məhdud Məsuliyyətli Cəmiyyət - MMC) in Baku with 100% foreign ownership, competitive tax incentives, and seamless director residency.
          </p>
        </div>

        {/* Key Business Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Globe2 className="w-6 h-6 text-indigo-400" />,
              title: '100% Foreign Ownership',
              desc: 'No local Azerbaijani shareholder is required. Foreign investors can own 100% of the company equity.',
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
              title: 'Strategic Regional Hub',
              desc: 'Access to Caspian and Silk Road trade corridors connecting Europe, Central Asia, and the Middle East.',
            },
            {
              icon: <CreditCard className="w-6 h-6 text-sky-400" />,
              title: 'Multi-Currency Banking',
              desc: 'Reliable corporate bank accounts with SWIFT/IBAN capabilities supporting USD, EUR, AZN, and GBP.',
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
              title: 'Founder TRC Eligibility',
              desc: 'Direct qualification for Azerbaijan Temporary Residence Permit (TRC) as a registered company director.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-700/80 shadow-xl space-y-3"
            >
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 w-fit">{item.icon}</div>
              <h3 className="text-base font-bold text-white font-serif">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 7-Step Registration Workflow */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Structured Timeline
            </span>
            <h2 className="text-2xl font-bold text-white font-serif mt-1">
              7-Step Company Setup Workflow
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Typically completed in 5 to 7 business days following document notarization.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold font-mono text-sm flex items-center justify-center shrink-0">
                  {s.num}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{s.title}</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1B3D] to-slate-900 border border-indigo-500/40 text-center space-y-5">
          <h3 className="text-2xl font-bold text-white font-serif">
            Start Your Company Registration in Baku Today
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Our corporate desk handles everything from Articles of Association drafting to ASAN Imza activation and corporate bank introductions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Company Registration & Setup')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 inline mr-1.5" />
              Schedule Corporate Consultation
            </button>

            <a
              href={`https://wa.me/9940509209003?text=${encodeURIComponent(
                'Hello SIRFPK Corporate Desk! I want to inquire regarding LLC / MMC Company Registration in Baku.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 inline mr-1.5" />
              WhatsApp Corporate Desk (+994 050 920 9003)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
