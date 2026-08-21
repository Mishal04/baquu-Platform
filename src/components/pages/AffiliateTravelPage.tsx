import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Smartphone,
  Plane,
  Hotel,
  Ticket,
  Car,
  Compass,
  Zap,
  Globe2,
} from 'lucide-react';
import { AffiliatePartner, PageRoute } from '../../types';
import { StorageService } from '../../services/storage';

interface AffiliateTravelPageProps {
  partners: AffiliatePartner[];
  onNavigate: (route: PageRoute) => void;
}

export const AffiliateTravelPage: React.FC<AffiliateTravelPageProps> = ({
  partners,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Travel Partners' },
    { id: 'esim', label: 'eSIM & Internet' },
    { id: 'hotels', label: 'Hotels & Apartments' },
    { id: 'flights', label: 'Flights' },
    { id: 'activities', label: 'Tours & Activities' },
    { id: 'car-rentals', label: 'Car Rentals' },
  ];

  const filteredPartners = partners.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  const handlePartnerClick = (p: AffiliatePartner) => {
    const url = StorageService.getAffiliateLink(p.id);
    window.open(url, p.openInNewTab ? '_blank' : '_self');
  };

  const handleAiraloClick = () => {
    const url = StorageService.getAffiliateLink('airalo');
    window.open(url, '_blank');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hotels':
        return <Hotel className="w-4 h-4 text-amber-400" />;
      case 'flights':
        return <Plane className="w-4 h-4 text-sky-400" />;
      case 'esim':
        return <Smartphone className="w-4 h-4 text-emerald-400" />;
      case 'activities':
      case 'tours':
        return <Compass className="w-4 h-4 text-indigo-400" />;
      case 'car-rentals':
        return <Car className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Travel Marketplace</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif">
            BOOK YOUR TRAVEL
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Compare and book hotels, flights, activities, eSIMs, and rental cars for Azerbaijan and worldwide destinations through our trusted global travel partners.
          </p>
        </div>

        {/* Airalo Spotlight Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-[#0B1B3D] border border-emerald-500/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase">
                <Zap className="w-3.5 h-3.5" />
                <span>Featured Partner Spotlight</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Airalo — Azerbaijan High-Speed eSIM
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Stay connected across Baku, Shahdag, Gabala, and Sheki with seamless 4G/5G prepaid data. Zero roaming fees. Keep your original WhatsApp number active.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center gap-3">
              <button
                onClick={handleAiraloClick}
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all cursor-pointer border border-emerald-300/40"
              >
                <Smartphone className="w-4 h-4" />
                <span>Get Azerbaijan eSIM (Airalo)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] text-slate-400 text-center">
                Instant digital delivery via QR code
              </span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPartners.map((p) => (
            <div
              key={p.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-800 hover:border-amber-400/50 shadow-xl flex flex-col justify-between space-y-4 group transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono tracking-wider px-2.5 py-1 rounded-lg bg-slate-800 text-white border border-slate-700">
                    {p.logoText}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                    {getCategoryIcon(p.category)}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span className="inline-block text-[10px] text-amber-400 font-semibold mt-0.5">
                      ★ {p.badge}
                    </span>
                  )}
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={() => handlePartnerClick(p)}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <span>{p.buttonText || 'BOOK NOW'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Disclosure Notice */}
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 text-center max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-xs">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparency & Affiliate Disclosure</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            SIRFPK participates in affiliate partnerships with world-class travel providers including Airalo, Booking.com, Trip.com, Agoda, Skyscanner, WayAway, Rentalcars.com, and GetYourGuide. When you book or purchase services through our links, we may receive a referral commission at zero additional cost to you.
          </p>
        </div>
      </div>
    </div>
  );
};
