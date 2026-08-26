import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, MapPin, CheckCircle, ArrowRight, MessageCircle, Star, Sparkles } from 'lucide-react';
import { TourPackage, PageRoute } from '../../types';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface PopularToursSectionProps {
  tours: TourPackage[];
  onSelectTour: (tour: TourPackage) => void;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
}

export const PopularToursSection: React.FC<PopularToursSectionProps> = ({
  tours,
  onSelectTour,
  onNavigate,
  onOpenConsultation,
}) => {
  const { t } = useTranslation();
  const popularTours = tours.slice(0, 3);

  const handleWhatsAppBooking = (tour: TourPackage) => {
    const text = encodeURIComponent(
      `Hello SIRFPK! I am interested in booking or customizing the *${tour.title}* (${tour.duration}). Starting Price: ${tour.startingPrice} ${tour.currency}. Please provide details.`
    );
    window.open(`https://wa.me/923009111130?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F0F6FC] via-[#F4F9FF] to-[#EAF2FA] border-t border-b border-sky-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{t('popularTours.badge')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B3D] font-serif">
              {t('popularTours.heading')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl">
              {t('popularTours.subheading')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('tours')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#112755] text-amber-300 hover:text-amber-200 font-bold text-xs border border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>{t('popularTours.viewAll')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTours.map((tour) => (
            <div
              key={tour.id}
              className="rounded-2xl bg-white border border-sky-200/80 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-200 overflow-hidden flex flex-col group transform hover:-translate-y-1"
            >
              {/* Tour Image with Watermark */}
              <div className="relative h-56 overflow-hidden">
                <WatermarkedImage
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#07132B]/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-slate-700 flex items-center gap-1.5 shadow-md">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{tour.duration}</span>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-600/95 backdrop-blur-md text-white text-xs font-bold shadow-md">
                  {tour.hotelRating}★ Hotel Included
                </div>
              </div>

              {/* Tour Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-[11px] text-sky-700 font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{tour.destination}</span>
                  </div>

                  <h3
                    onClick={() => onSelectTour(tour)}
                    className="text-lg font-bold text-[#0B1B3D] group-hover:text-amber-700 transition-colors font-serif cursor-pointer line-clamp-1"
                  >
                    {tour.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {tour.shortDescription}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                  {tour.inclusions.slice(0, 3).map((inc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">
                      {t('popularTours.startingFrom')}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-amber-600 font-serif">
                        {tour.currency === 'PKR' ? 'PKR ' : tour.currency === 'USD' ? '$' : tour.currency + ' '}{tour.startingPrice.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-slate-500">{t('popularTours.perPerson')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-sm border border-amber-300/60"
                    >
                      {t('popularTours.viewDetails')}
                    </button>
                    <button
                      onClick={() => handleWhatsAppBooking(tour)}
                      className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer shadow-sm"
                      title="Request via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
