import React from 'react';
import {
  Compass,
  FileCheck,
  ShieldCheck,
  Building,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { PageRoute } from '../../types';

interface HeroServiceCardsProps {
  onNavigate: (route: PageRoute) => void;
}

export const HeroServiceCards: React.FC<HeroServiceCardsProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'tours',
      title: 'Travel & Tours',
      route: 'tours' as PageRoute,
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      cardBg: 'bg-gradient-to-br from-amber-50/80 via-white to-amber-100/30',
      iconBg: 'bg-amber-100 border-amber-300 text-amber-800',
      borderColor: 'border-amber-200/90 hover:border-amber-500 hover:shadow-amber-500/15',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
      description:
        'Curated Baku city tours, Shahdag mountain ski packages, Gabala scenic getaways, and customized family & corporate itineraries.',
      tag: 'Most Popular',
    },
    {
      id: 'visa',
      title: 'Visa Assistance',
      route: 'visa' as PageRoute,
      icon: <FileCheck className="w-6 h-6 text-sky-600" />,
      cardBg: 'bg-gradient-to-br from-sky-50/80 via-white to-sky-100/30',
      iconBg: 'bg-sky-100 border-sky-300 text-sky-800',
      borderColor: 'border-sky-200/90 hover:border-sky-500 hover:shadow-sky-500/15',
      badgeBg: 'bg-sky-100 text-sky-900 border-sky-300 font-bold',
      description:
        'End-to-end guidance for Azerbaijan ASAN e-Visa applications, document validation, urgent processing assistance, and compliance support.',
      tag: 'Fast Track 24h',
    },
    {
      id: 'trc',
      title: 'TRC & Residency',
      route: 'trc' as PageRoute,
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      cardBg: 'bg-gradient-to-br from-emerald-50/80 via-white to-emerald-100/30',
      iconBg: 'bg-emerald-100 border-emerald-300 text-emerald-800',
      borderColor: 'border-emerald-200/90 hover:border-emerald-500 hover:shadow-emerald-500/15',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold',
      description:
        'Professional legal consultancy for Azerbaijan Temporary Residence Permits (TRC) via Business, Property Investment, or Family.',
      tag: 'Long-Term Relocation',
    },
    {
      id: 'property',
      title: 'Property Consultancy',
      route: 'property' as PageRoute,
      icon: <Building className="w-6 h-6 text-amber-700" />,
      cardBg: 'bg-gradient-to-br from-amber-50/70 via-white to-amber-100/40',
      iconBg: 'bg-amber-100 border-amber-300 text-amber-900',
      borderColor: 'border-amber-200/90 hover:border-amber-500 hover:shadow-amber-500/15',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300 font-bold',
      description:
        'Buy sea-view apartments, luxury Baku White City residences, commercial units, and high-yield real estate with legal due diligence.',
      tag: 'High ROI (8-10%)',
    },
    {
      id: 'company',
      title: 'Company Registration',
      route: 'company-registration' as PageRoute,
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      cardBg: 'bg-gradient-to-br from-indigo-50/80 via-white to-indigo-100/30',
      iconBg: 'bg-indigo-100 border-indigo-300 text-indigo-800',
      borderColor: 'border-indigo-200/90 hover:border-indigo-500 hover:shadow-indigo-500/15',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300 font-bold',
      description:
        'Complete Azerbaijan LLC (MMC) formation, corporate bank account setup, legal address support, tax registration, and ongoing accounting.',
      tag: '100% Foreign Owned',
    },
    {
      id: 'consultancy',
      title: 'Business Consultancy',
      route: 'business-consultancy' as PageRoute,
      icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
      cardBg: 'bg-gradient-to-br from-teal-50/80 via-white to-teal-100/30',
      iconBg: 'bg-teal-100 border-teal-300 text-teal-800',
      borderColor: 'border-teal-200/90 hover:border-teal-500 hover:shadow-teal-500/15',
      badgeBg: 'bg-teal-100 text-teal-900 border-teal-300 font-bold',
      description:
        'Strategic market entry advisory, import/export facilitation, bilateral Pakistan-Azerbaijan trade networks, and corporate consulting.',
      tag: 'Trade & Growth',
    },
  ];

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <div
            key={svc.id}
            onClick={() => onNavigate(svc.route)}
            className={`group relative rounded-2xl ${svc.cardBg} p-6 border ${svc.borderColor} shadow-sm hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between`}
          >
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl ${svc.iconBg} border flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200`}>
                  {svc.icon}
                </div>
                <span className={`text-[11px] px-3 py-1 rounded-full border ${svc.badgeBg} transition-colors`}>
                  {svc.tag}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-amber-700 transition-colors font-serif">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0B1B3D] group-hover:text-amber-700">
              <span className="tracking-wide">Explore Service</span>
              <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center transition-all shadow-xs">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
