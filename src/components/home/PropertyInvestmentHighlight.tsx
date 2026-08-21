import React from 'react';
import { Building, Bed, Bath, Maximize2, TrendingUp, ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { PropertyListing, PageRoute } from '../../types';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface PropertyInvestmentHighlightProps {
  properties: PropertyListing[];
  onSelectProperty: (property: PropertyListing) => void;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
}

export const PropertyInvestmentHighlight: React.FC<PropertyInvestmentHighlightProps> = ({
  properties,
  onSelectProperty,
  onNavigate,
  onOpenConsultation,
}) => {
  const featuredProperties = properties.slice(0, 3);

  const handleWhatsApp = (prop: PropertyListing) => {
    const text = encodeURIComponent(
      `Hello SIRFPK Property Desk! I am interested in inquiring about *${prop.title}* ($${prop.price.toLocaleString()}). Location: ${prop.location}. Please share floor plans and details.`
    );
    window.open(`https://wa.me/923009111130?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDFBF7] via-[#F8F5EE] to-[#F2EDE2] border-t border-b border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Building className="w-3.5 h-3.5 text-amber-700" />
              <span>Azerbaijan Real Estate Portal</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B3D] font-serif">
              Buy Property in Azerbaijan with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl">
              Prime residential apartments in Baku White City, Caspian coastal sea-view villas, and high-yield commercial assets with complete foreign ownership verification.
            </p>
          </div>

          <button
            onClick={() => onNavigate('property')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#112755] text-amber-300 hover:text-amber-200 font-bold text-xs border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Explore All Properties</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <div
              key={prop.id}
              className="rounded-2xl bg-white border border-amber-200/80 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col group transform hover:-translate-y-1"
            >
              {/* Property Image with Watermark */}
              <div className="relative h-56 overflow-hidden">
                <WatermarkedImage
                  src={prop.images[0]}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#07132B]/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-slate-700 shadow-md">
                  {prop.propertyType.replace('-', ' ').toUpperCase()}
                </div>
                {prop.rentalYieldEstimate && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-600/95 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1 shadow-md">
                    <TrendingUp className="w-3 h-3" />
                    <span>{prop.rentalYieldEstimate}</span>
                  </div>
                )}
              </div>

              {/* Property Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-amber-800 font-bold uppercase tracking-wider">
                    {prop.location}
                  </div>

                  <h3
                    onClick={() => onSelectProperty(prop)}
                    className="text-base font-bold text-[#0B1B3D] group-hover:text-amber-700 transition-colors font-serif cursor-pointer line-clamp-1"
                  >
                    {prop.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Specs Pill row */}
                <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-amber-100 bg-amber-50/40 rounded-xl text-center text-xs text-slate-700 font-medium">
                  {prop.bedrooms > 0 ? (
                    <div className="flex items-center justify-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-amber-600" />
                      <span>{prop.bedrooms} Beds</span>
                    </div>
                  ) : (
                    <div className="text-slate-500">Commercial</div>
                  )}

                  <div className="flex items-center justify-center gap-1">
                    <Bath className="w-3.5 h-3.5 text-sky-600" />
                    <span>{prop.bathrooms} Baths</span>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{prop.sizeSqM} m²</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                      {prop.priceNote || 'Price'}
                    </span>
                    <span className="text-xl font-black text-amber-600 font-serif">
                      ${prop.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProperty(prop)}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-sm border border-amber-300/60"
                    >
                      View Property
                    </button>
                    <button
                      onClick={() => handleWhatsApp(prop)}
                      className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer shadow-sm"
                      title="WhatsApp Property Consultant"
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
        <div className="mt-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-[11px] text-slate-600 text-center shadow-xs">
          <p>
            <strong className="text-[#0B1B3D]">Property Advisory Notice:</strong> Property prices and rental returns are indicative and subject to market conditions. Foreign buyers should conduct independent legal, financial, and title due diligence. Investment outcomes vary and should be independently assessed.
          </p>
        </div>
      </div>
    </section>
  );
};
