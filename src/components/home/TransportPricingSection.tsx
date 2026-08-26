import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Car, Users, MapPin, Moon, Info, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { ONE_NIGHT_STAY_SURCHARGE } from '../../data/initialData';

interface PricingRow {
  destination: string;
  distanceNote: string;
  sedan: number;
  vito: number;
}

const PRICING_ROWS: PricingRow[] = [
  { destination: 'Baku City Tour (Full Day)', distanceNote: 'Within Baku', sedan: 60, vito: 90 },
  { destination: 'Absheron Peninsula (Ateshgah & Yanardag)', distanceNote: '~25 km from Baku', sedan: 70, vito: 100 },
  { destination: 'Gobustan & Mud Volcanoes', distanceNote: '~65 km from Baku', sedan: 80, vito: 120 },
  { destination: 'Shahdag Mountain Resort', distanceNote: '~210 km from Baku', sedan: 150, vito: 200 },
  { destination: 'Quba & Red Village (Krasnaya Sloboda)', distanceNote: '~170 km from Baku', sedan: 130, vito: 180 },
  { destination: 'Gabala (Nohur Lake & Tufandag)', distanceNote: '~220 km from Baku', sedan: 150, vito: 210 },
  { destination: 'Sheki (Silk Road & Khan\'s Palace)', distanceNote: '~300 km from Baku', sedan: 180, vito: 250 },
  { destination: 'Ganja (Lake Goygol & Nizami Mausoleum)', distanceNote: '~360 km from Baku', sedan: 200, vito: 280 },
];

export const TransportPricingSection: React.FC = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const visibleRows = expanded ? PRICING_ROWS : PRICING_ROWS.slice(0, 5);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello SIRFPK! I would like to enquire about transport pricing for an Azerbaijan tour. Please provide a custom quote.'
    );
    window.open(`https://wa.me/923009111130?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F0F6FC] via-[#F8FAFD] to-[#EAF2FA] border-t border-sky-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-900">
            <Car className="w-3.5 h-3.5" />
            Transport & Day Trip Packages
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B3D] font-serif mt-3">
            Private Day Trip Pricing from Baku
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            All prices in AZN. Private door-to-door transport with professional English / Urdu speaking driver.
            Final price confirmed before booking.
          </p>
        </div>

        {/* Vehicle Type Legend */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center">
              <Car className="w-4 h-4 text-sky-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0B1B3D]">Sedan / Standard Car</p>
              <p className="text-[10px] text-slate-500">Up to 3 passengers</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center">
              <Users className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#0B1B3D]">Mercedes Vito / Minivan</p>
              <p className="text-[10px] text-slate-500">Up to 7 passengers</p>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#0B1B3D] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
            <div className="col-span-6 px-5 py-3.5 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
              Destination / Route
            </div>
            <div className="col-span-3 px-3 py-3.5 text-center flex items-center justify-center gap-1">
              <Car className="w-3 h-3 text-sky-300 shrink-0" />
              Sedan (AZN)
            </div>
            <div className="col-span-3 px-3 py-3.5 text-center flex items-center justify-center gap-1">
              <Users className="w-3 h-3 text-amber-300 shrink-0" />
              Vito (AZN)
            </div>
          </div>

          {/* Table Rows */}
          {visibleRows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-12 border-b border-slate-100 last:border-b-0 ${
                idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
              } hover:bg-amber-50/40 transition-colors`}
            >
              <div className="col-span-6 px-5 py-3.5">
                <p className="text-xs font-semibold text-[#0B1B3D]">{row.destination}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{row.distanceNote}</p>
              </div>
              <div className="col-span-3 px-3 py-3.5 flex items-center justify-center">
                <span className="text-sm font-black text-sky-700">{row.sedan}</span>
              </div>
              <div className="col-span-3 px-3 py-3.5 flex items-center justify-center">
                <span className="text-sm font-black text-amber-700">{row.vito}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less toggle */}
        {PRICING_ROWS.length > 5 && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-600 transition-colors px-4 py-2 rounded-xl border border-sky-200 bg-white hover:bg-sky-50"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  Show Fewer Destinations
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  Show All Destinations
                </>
              )}
            </button>
          </div>
        )}

        {/* ── One Night Stay Surcharge Callout ── */}
        <div className="relative rounded-2xl overflow-hidden border border-amber-300 bg-gradient-to-r from-amber-50 via-amber-100/60 to-amber-50 shadow-sm mb-8">
          {/* accent bar */}
          <div className="absolute left-0 inset-y-0 w-1 bg-amber-500 rounded-l-2xl" />
          <div className="px-5 sm:px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
            {/* Icon badge */}
            <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-xs">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-0.5">
                Overnight Stay Add-On
              </p>
              <p className="text-sm sm:text-base font-black text-[#0B1B3D] leading-tight">
                One Night Stay in Shahdag, Gabala, or Sheki
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-xs font-bold">
                  +{ONE_NIGHT_STAY_SURCHARGE.price} {ONE_NIGHT_STAY_SURCHARGE.currency}
                </span>
              </p>
              <p className="text-[11px] text-amber-900/80 mt-1 leading-relaxed">
                {ONE_NIGHT_STAY_SURCHARGE.note}
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-1 text-[10px] text-amber-700 font-semibold bg-amber-100 border border-amber-200 px-2.5 py-1.5 rounded-lg">
              <Info className="w-3 h-3" />
              Flat surcharge
            </div>
          </div>
        </div>

        {/* Disclaimer + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
          <p className="text-[10px] text-slate-500 max-w-xl leading-relaxed">
            Prices are indicative starting rates per vehicle (not per person) for a full-day private excursion from Baku.
            Airport transfers, multi-stop routes, and group sizes over 7 are priced on request. Final confirmation provided before booking.
          </p>
          <button
            onClick={handleWhatsApp}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1fba59] text-white font-bold text-xs shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Get Custom Quote on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
