import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  Sparkles,
  Lock,
} from 'lucide-react';
import { PageRoute, SiteSettings } from '../../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  siteSettings: SiteSettings;
  onOpenConsultation: (service?: string) => void;
  onOpenLegal: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  siteSettings,
  onOpenConsultation,
  onOpenLegal,
}) => {
  const { t } = useTranslation();
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#08132B] via-[#050D1F] to-[#020712] text-slate-300 pt-16 pb-12 border-t border-indigo-900/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-indigo-950">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-300/40">
                <span className="font-extrabold text-slate-950 text-xl tracking-wider font-serif">S</span>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white font-serif block">SIRFPK</span>
                <span className="text-xs text-amber-400 font-medium tracking-wide">
                  {siteSettings.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              {t('footer.tagline')}
            </p>

            <div className="p-4 rounded-xl bg-[#0B1B3D]/80 border border-indigo-500/30 space-y-2.5 shadow-md">
              <div className="text-xs font-semibold text-amber-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {t('footer.officialContact')}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <a
                  href={`https://wa.me/447462273257`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors p-1.5 rounded-lg hover:bg-indigo-950/60"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>UK: <strong className="text-white">{siteSettings.phoneNumbers.uk}</strong></span>
                </a>
                <a
                  href={`https://wa.me/923009111130`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors p-1.5 rounded-lg hover:bg-indigo-950/60"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>PK: <strong className="text-white">{siteSettings.phoneNumbers.pk}</strong></span>
                </a>
                <a
                  href={`https://wa.me/994504517493`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors p-1.5 rounded-lg hover:bg-indigo-950/60"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>AZE 1: <strong className="text-white">{siteSettings.phoneNumbers.aze1}</strong></span>
                </a>
                <a
                  href={`https://wa.me/9940509209003`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors p-1.5 rounded-lg hover:bg-indigo-950/60"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>AZE 2: <strong className="text-white">{siteSettings.phoneNumbers.aze2}</strong></span>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Email: <a href={`mailto:${siteSettings.emails.primary}`} className="text-amber-300 hover:underline">{siteSettings.emails.primary}</a></span>
            </div>
          </div>

          {/* Column 2: Travel & Tours */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-indigo-900 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              {t('footer.travelTours')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('tours')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-amber-400/70" />
                  Baku City Tours & Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tours')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-amber-400/70" />
                  Shahdag Ski & Mountain Resort
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tours')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-amber-400/70" />
                  Gabala & Sheki Silk Road
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tours')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-amber-400/70" />
                  Gobustan & Mud Volcanoes
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tours')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-amber-400/70" />
                  Absheron Fire Mountain
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('tours')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-amber-400/70" />
                  VIP Airport Transfers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Visa, TRC & Business */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-indigo-900 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              {t('footer.residencyBusiness')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('visa')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-sky-400/70" />
                  Azerbaijan e-Visa Assistance
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('trc')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-sky-400/70" />
                  Azerbaijan TRC / Residence Permit
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('company-registration')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-sky-400/70" />
                  Company Registration (MMC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('business-consultancy')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-sky-400/70" />
                  Business Setup & Market Entry
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('student-services')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-sky-400/70" />
                  Student Admissions & TRC
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Property & Affiliates */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider border-b border-indigo-900 pb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              {t('footer.propertyHub')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('property')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-emerald-400/70" />
                  Buy Property in Azerbaijan
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('property-investment')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-emerald-400/70" />
                  Why Invest in Baku Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('affiliate-travel')} className="hover:text-amber-300 transition-colors flex items-center gap-1 font-semibold text-amber-300">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Airalo Azerbaijan eSIM
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('affiliate-travel')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-emerald-400/70" />
                  Compare Hotels & Flights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-amber-300 transition-colors flex items-center gap-1 text-slate-300">
                  <ChevronRight className="w-3 h-3 text-emerald-400/70" />
                  Azerbaijan Travel Guides
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimers Box */}
        <div className="py-6 border-b border-indigo-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-[11px] text-slate-400 leading-relaxed">
          <div className="bg-[#0A1633]/60 p-3 rounded-xl border border-indigo-900/60">
            <span className="font-semibold text-amber-300 block mb-1 text-xs">{t('footer.visaDisclaimer')}</span>
            {siteSettings.disclaimers.visa}
          </div>
          <div className="bg-[#0A1633]/60 p-3 rounded-xl border border-indigo-900/60">
            <span className="font-semibold text-amber-300 block mb-1 text-xs">{t('footer.trcDisclaimer')}</span>
            {siteSettings.disclaimers.trc}
          </div>
          <div className="bg-[#0A1633]/60 p-3 rounded-xl border border-indigo-900/60">
            <span className="font-semibold text-amber-300 block mb-1 text-xs">{t('footer.propertyDisclaimer')}</span>
            {siteSettings.disclaimers.property}
          </div>
          <div className="bg-[#0A1633]/60 p-3 rounded-xl border border-indigo-900/60">
            <span className="font-semibold text-amber-300 block mb-1 text-xs">{t('footer.affiliateDisclaimer')}</span>
            {siteSettings.disclaimers.affiliate}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Links & Watermark Info */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>{t('footer.copyright')}</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {t('footer.officialPortal')} <strong className="text-amber-400">www.sirfpk.com</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-amber-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => onOpenLegal('cookie')} className="hover:text-amber-300 transition-colors">
              Cookie Policy
            </button>
            <button onClick={() => onOpenLegal('affiliate')} className="hover:text-amber-300 transition-colors">
              Affiliate Disclosure
            </button>
            <button onClick={() => onOpenLegal('disclaimers')} className="hover:text-amber-300 transition-colors">
              Legal Disclaimers
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="text-slate-400 hover:text-amber-300 flex items-center gap-1 ml-2"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
