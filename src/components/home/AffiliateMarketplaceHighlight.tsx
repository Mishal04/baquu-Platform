import React from 'react';
import { Sparkles, ExternalLink, ShieldCheck, ArrowRight, Plane, Hotel, Smartphone, Ticket, Car, Compass } from 'lucide-react';
import { AffiliatePartner, PageRoute } from '../../types';
import { StorageService } from '../../services/storage';

interface AffiliateMarketplaceHighlightProps {
  partners: AffiliatePartner[];
  onNavigate: (route: PageRoute) => void;
}

export const AffiliateMarketplaceHighlight: React.FC<AffiliateMarketplaceHighlightProps> = ({
  partners,
  onNavigate,
}) => {
  const featuredPartners = partners.slice(0, 8);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hotels':
        return <Hotel className="w-4 h-4 text-amber-600" />;
      case 'flights':
        return <Plane className="w-4 h-4 text-sky-600" />;
      case 'esim':
        return <Smartphone className="w-4 h-4 text-emerald-600" />;
      case 'activities':
      case 'tours':
        return <Compass className="w-4 h-4 text-indigo-600" />;
      case 'car-rentals':
        return <Car className="w-4 h-4 text-purple-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-600" />;
    }
  };

  const handlePartnerClick = (p: AffiliatePartner) => {
    const url = StorageService.getAffiliateLink(p.id);
    window.open(url, p.openInNewTab ? '_blank' : '_self');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#EEF5FC] via-[#F4F9FF] to-[#E9F1FA] border-t border-b border-sky-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Affiliate Travel Marketplace</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B3D] font-serif">
              BOOK YOUR TRAVEL
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-2xl">
              Compare and book hotels, flights, activities, eSIMs and travel services through our trusted travel partners.
            </p>
          </div>

          <button
            onClick={() => onNavigate('affiliate-travel')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#112755] text-amber-300 hover:text-amber-200 font-bold text-xs border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>View All 15+ Partners</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Affiliate Comparison Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredPartners.map((p) => (
            <div
              key={p.id}
              className="p-5 rounded-2xl bg-white border border-sky-200/90 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono tracking-wider px-2.5 py-1 rounded-lg bg-[#0B1B3D] text-amber-300 border border-slate-700 shadow-xs">
                    {p.logoText}
                  </span>
                  <div className="p-2 rounded-xl bg-sky-50 border border-sky-100">
                    {getCategoryIcon(p.category)}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-amber-700 transition-colors">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span className="inline-block text-[10px] text-amber-800 font-bold mt-0.5 px-2 py-0.5 rounded bg-amber-100 border border-amber-200">
                      ★ {p.badge}
                    </span>
                  )}
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100">
                <button
                  onClick={() => handlePartnerClick(p)}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm border border-amber-300/60"
                >
                  <span>{p.buttonText || 'BOOK NOW'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Disclosure Notice */}
        <div className="mt-10 p-4 rounded-xl bg-sky-50/80 border border-sky-200/90 text-[11px] text-slate-600 text-center max-w-4xl mx-auto flex items-center justify-center gap-2 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong className="text-[#0B1B3D]">Affiliate Disclosure:</strong> Some links on this website may be affiliate links. We may earn a commission if you make a qualifying purchase through our links, at no additional cost to you.
          </span>
        </div>
      </div>
    </section>
  );
};
