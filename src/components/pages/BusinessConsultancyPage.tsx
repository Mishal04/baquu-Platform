import React from 'react';
import {
  TrendingUp,
  Target,
  FileCheck2,
  Users2,
  Building,
  ArrowRight,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Globe,
} from 'lucide-react';
import { PageRoute } from '../../types';

interface BusinessConsultancyPageProps {
  onOpenConsultation: (service?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const BusinessConsultancyPage: React.FC<BusinessConsultancyPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const services = [
    {
      title: 'Market Entry & Feasibility Studies',
      desc: 'In-depth market research, competitive landscape analysis, and regulatory evaluation for your products or services in Azerbaijan.',
      icon: <Target className="w-6 h-6 text-teal-400" />,
    },
    {
      title: 'Bilateral Pakistan-Azerbaijan Trade',
      desc: 'Facilitating import/export pipelines (pharmaceuticals, textiles, rice, surgical goods, petrochemicals, agro-products) with local distributor connections.',
      icon: <Globe className="w-6 h-6 text-sky-400" />,
    },
    {
      title: 'Commercial Real Estate & Office Leasing',
      desc: 'Sourcing premium corporate office space, industrial warehouses, and retail showrooms across central Baku and Port of Baku free zones.',
      icon: <Building className="w-6 h-6 text-amber-400" />,
    },
    {
      title: 'Tax Compliance & Monthly Accounting',
      desc: 'Ongoing bookkeeping, payroll management, VAT filings, and annual audits compliant with Azerbaijani tax legislation.',
      icon: <FileCheck2 className="w-6 h-6 text-emerald-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Strategic Advisory & Market Expansion</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif">
            Business Consultancy in Azerbaijan
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Connecting Pakistani and international enterprises to high-growth opportunities across Azerbaijan’s energy, construction, logistics, hospitality, and trade sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-700/80 hover:border-teal-400/60 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 w-fit">{svc.icon}</div>
                <h3 className="text-lg font-bold text-white font-serif">{svc.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{svc.desc}</p>
              </div>

              <button
                onClick={() => onOpenConsultation(`Consultancy: ${svc.title}`)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-teal-900/60 text-teal-300 border border-slate-700 hover:border-teal-500/60 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Advisory Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1B3D] to-slate-900 border border-teal-500/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-white font-serif">
            Schedule a Confidential Corporate Strategy Session
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Discuss your market entry goals directly with our Baku and Pakistan bilateral trade advisors.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Business Consultancy')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 inline mr-1.5" />
              Request Strategy Session
            </button>
            <a
              href={`https://wa.me/923009111130?text=${encodeURIComponent(
                'Hello SIRFPK! I want to consult regarding business expansion and trade opportunities in Azerbaijan.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 inline mr-1.5" />
              WhatsApp Pakistan Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
