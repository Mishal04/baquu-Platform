import React, { useState } from 'react';
import {
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  Star,
  MessageCircle,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';
import { TourPackage, PageRoute } from '../../types';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface ToursPageProps {
  tours: TourPackage[];
  selectedTour: TourPackage | null;
  onSelectTour: (tour: TourPackage | null) => void;
  onOpenConsultation: (service?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({
  tours,
  selectedTour,
  onSelectTour,
  onOpenConsultation,
  onNavigate,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [activeAccordionDay, setActiveAccordionDay] = useState<number | null>(1);

  const categories = [
    { id: 'all', label: 'All Tour Packages' },
    { id: 'baku', label: 'Baku City Tours' },
    { id: 'shahdag', label: 'Shahdag Ski & Mountain' },
    { id: 'gabala', label: 'Gabala & Sheki' },
    { id: 'transfers', label: 'Airport & VIP Transfers' },
  ];

  const filteredTours = tours.filter((t) => {
    if (filterCategory === 'all') return true;
    return t.category.toLowerCase().includes(filterCategory) || t.destination.toLowerCase().includes(filterCategory);
  });

  const handleWhatsAppBooking = (tour: TourPackage) => {
    const text = encodeURIComponent(
      `Hello SIRFPK! I want to inquire/book the *${tour.title}* (${tour.duration}). Starting Price: ${tour.startingPrice} ${tour.currency}. Please provide available dates and hotel options.`
    );
    window.open(`https://wa.me/923009111130?text=${text}`, '_blank');
  };

  // If a single tour is selected, show rich detail view
  if (selectedTour) {
    return (
      <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => onSelectTour(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 mb-6 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Tours</span>
          </button>

          {/* Tour Hero Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                  {selectedTour.duration}
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {selectedTour.destination}
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                  {selectedTour.hotelRating}★ Luxury Hotel Stay
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white font-serif">
                {selectedTour.title}
              </h1>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedTour.shortDescription}
              </p>

              {/* Price & Action Box */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                    Starting From (Twin Sharing)
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-amber-400 font-serif">
                      ${selectedTour.startingPrice}
                    </span>
                    <span className="text-xs text-slate-400">/ person</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Sample starting price subject to seasonal booking.</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleWhatsAppBooking(selectedTour)}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </button>
                  <button
                    onClick={() => onOpenConsultation(`Tour Booking: ${selectedTour.title}`)}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire / Customize</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <WatermarkedImage
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Day by Day Itinerary & Inclusions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Detailed Itinerary Accordion */}
            <div className="lg:col-span-8 space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-xl font-bold text-white font-serif flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  Day-by-Day Comprehensive Itinerary
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Detailed schedule designed for maximum sightseeing comfort, cultural immersion, and leisure.
                </p>
              </div>

              <div className="space-y-3">
                {selectedTour.itinerary.map((item) => (
                  <div
                    key={item.dayNumber}
                    className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setActiveAccordionDay(activeAccordionDay === item.dayNumber ? null : item.dayNumber)
                      }
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 font-bold font-mono text-xs flex items-center justify-center">
                          D{item.dayNumber}
                        </span>
                        <span className="font-bold text-white text-xs sm:text-sm">
                          {item.title}
                        </span>
                      </div>
                      {activeAccordionDay === item.dayNumber ? (
                        <ChevronUp className="w-4 h-4 text-amber-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {activeAccordionDay === item.dayNumber && (
                      <div className="p-4 pt-0 border-t border-slate-800/60 text-xs text-slate-300 space-y-2">
                        <p className="leading-relaxed">{item.description}</p>
                        {item.mealsIncluded && (
                          <div className="text-[11px] text-amber-400/90 font-medium">
                            Included Meals: {item.mealsIncluded}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Inclusions & Exclusions Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Inclusions */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2 text-emerald-400 border-b border-slate-800 pb-2">
                  <CheckCircle className="w-4 h-4" />
                  Package Inclusions
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedTour.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-2">
                  <XCircle className="w-4 h-4" />
                  Package Exclusions
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {selectedTour.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Statutory Note */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Sample rates are indicative per person on twin-sharing basis. Flights, visa fees, and personal insurance are arranged separately upon request.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tours Listing View
  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400">
            Handcrafted Azerbaijan Tours
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif mt-3">
            Explore Curated Azerbaijan Tour Packages
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Private VIP transfers, luxury hotels, expert English/Urdu speaking guides, and customized itineraries across Baku, Shahdag, Gabala, and Sheki.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilterCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterCategory === c.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid of Tours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-700/80 hover:border-amber-400/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <WatermarkedImage
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#07132B]/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-400/30 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold">
                    {tour.hotelRating}★ Hotel Included
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1 text-[11px] text-sky-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{tour.destination}</span>
                  </div>

                  <h3
                    onClick={() => onSelectTour(tour)}
                    className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors font-serif cursor-pointer line-clamp-1"
                  >
                    {tour.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {tour.shortDescription}
                  </p>

                  <div className="space-y-1 pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                    {tour.inclusions.slice(0, 3).map((inc, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-amber-400 font-serif">
                        ${tour.startingPrice}
                      </span>
                      <span className="text-[11px] text-slate-400">/ person</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleWhatsAppBooking(tour)}
                      className="p-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                      title="WhatsApp Booking"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Itinerary Box */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1B3D] to-slate-900 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white font-serif">
              Need a Custom Itinerary for Your Family or Corporate Group?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              We customize bespoke routes covering Baku, Shahdag, Gabala, Sheki, Ganja, and Nakhchivan with private Mercedes Sprinters or VIP luxury sedans.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Custom Azerbaijan Itinerary')}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0 cursor-pointer"
          >
            Request Custom Group Quote
          </button>
        </div>
      </div>
    </div>
  );
};
