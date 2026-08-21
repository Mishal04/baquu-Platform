import React, { useState } from 'react';
import {
  Building,
  Bed,
  Bath,
  Maximize2,
  TrendingUp,
  MapPin,
  CheckCircle,
  X,
  MessageCircle,
  Calendar,
  AlertTriangle,
  Search,
  Filter,
} from 'lucide-react';
import { PropertyListing, PageRoute } from '../../types';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface PropertyPageProps {
  properties: PropertyListing[];
  selectedProperty: PropertyListing | null;
  onSelectProperty: (property: PropertyListing | null) => void;
  onOpenConsultation: (service?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const PropertyPage: React.FC<PropertyPageProps> = ({
  properties,
  selectedProperty,
  onSelectProperty,
  onOpenConsultation,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'apartments', label: 'Apartments' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'sea-view', label: 'Sea View' },
    { id: 'new-developments', label: 'New Developments' },
    { id: 'investment', label: 'Investment Yield' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredProperties = properties.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      p.propertyType.toLowerCase() === selectedCategory ||
      (selectedCategory === 'investment' && p.propertyType === 'investment');

    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppInquiry = (prop: PropertyListing) => {
    const text = encodeURIComponent(
      `Hello SIRFPK Property Desk! I am interested in inquiring about *${prop.title}* ($${prop.price.toLocaleString()}). Location: ${prop.location}. Please share floor plans, title verification details, and payment schedules.`
    );
    window.open(`https://wa.me/923009111130?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Azerbaijan Real Estate & Property Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif">
            Buy Property in Azerbaijan with Confidence
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Verified luxury apartments, Caspian sea-view penthouses, Baku White City residences, and commercial assets with full title deed verification and TRC residency eligibility.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search location or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-700/80 hover:border-amber-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <WatermarkedImage
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#07132B]/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/30">
                    {prop.propertyType.replace('-', ' ').toUpperCase()}
                  </div>
                  {prop.rentalYieldEstimate && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{prop.rentalYieldEstimate}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{prop.location}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProperty(prop)}
                    className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-serif cursor-pointer line-clamp-1"
                  >
                    {prop.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-800 text-center text-xs text-slate-300">
                    {prop.bedrooms > 0 ? (
                      <div className="flex items-center justify-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-amber-400" />
                        <span>{prop.bedrooms} Beds</span>
                      </div>
                    ) : (
                      <div className="text-slate-400">Commercial</div>
                    )}
                    <div className="flex items-center justify-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-sky-400" />
                      <span>{prop.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{prop.sizeSqM} m²</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      {prop.priceNote || 'Price'}
                    </span>
                    <span className="text-xl font-black text-amber-400 font-serif">
                      ${prop.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProperty(prop)}
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleWhatsAppInquiry(prop)}
                      className="p-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                      title="WhatsApp Property Desk"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/40 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>Property Due Diligence & Investment Disclaimer</span>
          </div>
          <p className="text-[11px] leading-relaxed text-slate-300">
            Property prices, floor plans, and rental yields are indicative estimates. Foreign buyers must undergo formal notarized state registry verification (Kupcha/Çıxarış). Real estate values and yields can fluctuate based on broader market dynamics.
          </p>
        </div>

        {/* Property Detail Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="relative h-64 sm:h-80">
                <WatermarkedImage
                  src={selectedProperty.images[0]}
                  alt={selectedProperty.title}
                />
                <button
                  onClick={() => onSelectProperty(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {selectedProperty.propertyType.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold font-serif">{selectedProperty.title}</h3>
                  <p className="text-xs text-slate-200">{selectedProperty.location}</p>
                </div>
              </div>

              <div className="p-6 space-y-5 text-xs text-slate-300">
                <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">List Price</span>
                    <span className="text-2xl font-black text-amber-400 font-serif">
                      ${selectedProperty.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-semibold text-white">
                    <span>{selectedProperty.bedrooms} Beds</span>
                    <span>•</span>
                    <span>{selectedProperty.bathrooms} Baths</span>
                    <span>•</span>
                    <span>{selectedProperty.sizeSqM} m²</span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-200">
                  {selectedProperty.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">
                    Key Property Features:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProperty.facilities.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800">
                  <button
                    onClick={() => handleWhatsAppInquiry(selectedProperty)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry for this Property</span>
                  </button>
                  <button
                    onClick={() => {
                      const propTitle = selectedProperty.title;
                      onSelectProperty(null);
                      onOpenConsultation(`Property Inquiry: ${propTitle}`);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
                  >
                    Request Full Inspection Dossier
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
