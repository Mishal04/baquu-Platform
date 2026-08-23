import React, { useState } from 'react';
import { MapPin, Calendar, Compass, ArrowRight, X, CheckCircle, Images } from 'lucide-react';
import { DestinationInfo, PageRoute } from '../../types';
import { INITIAL_DESTINATIONS } from '../../data/initialData';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface DestinationsGridProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [selectedDest, setSelectedDest] = useState<DestinationInfo | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryDest, setGalleryDest] = useState<DestinationInfo | null>(null);

  // Extend initial destinations with Ganja and Nakhchivan as required
  const allDestinations: DestinationInfo[] = [
    ...INITIAL_DESTINATIONS,
    {
      id: 'ganja',
      name: 'Ganja',
      tagline: 'Ancient Poetry & Lake Goygol Paradise',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Lake_G%C3%B6yg%C3%B6l.jpg/1280px-Lake_G%C3%B6yg%C3%B6l.jpg',
      shortDescription:
        "Azerbaijan's second largest historical city, home to Nizami Ganjavi mausoleum, Bottle House, and the pristine blue mountain jewel of Lake Goygol.",
      highlights: ['Lake Goygol National Park', 'Nizami Ganjavi Mausoleum', 'Ganja Bottle House', 'Imamzadeh Complex'],
      bestTimeToVisit: 'May - October',
      keyActivities: ['Lake Excursions', 'Historical Sightseeing', 'Cultural Tours'],
      distanceFromBaku: '360 km (Express Train or 4.5 hours drive)',
    },
    {
      id: 'nakhchivan',
      name: 'Nakhchivan',
      tagline: 'Land of Noah & Alinja Medieval Fortress',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Quba_385.jpg/1280px-Quba_385.jpg',
      shortDescription:
        "An autonomous enclave celebrated for the Machupicchu of the Caucasus (Alinja Castle), Noah's Tomb, and therapeutic Duzdag Salt Mountain caves.",
      highlights: ["Alinja Castle (Machupicchu of Caucasus)", "Noah's Mausoleum", 'Duzdag Salt Therapy Caves', 'Momine Khatun'],
      bestTimeToVisit: 'April - June & Sept - October',
      keyActivities: ['Fortress Trekking', 'Salt Cave Wellness', 'Ancient Monuments'],
      distanceFromBaku: '1 Hour Flight from Baku (GYD)',
    },
  ];

  const openGallery = (dest: DestinationInfo, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setGalleryDest(dest);
    setShowGallery(true);
    setSelectedDest(null);
  };

  const closeGallery = () => {
    setShowGallery(false);
    setGalleryDest(null);
  };

  return (
    <section className="py-20 bg-[#F8F9FA] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800">
            Top Azerbaijan Regions
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-serif mt-3">
            Explore Enchanting Azerbaijan Destinations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            From the futuristic skyline of Baku to Caucasus ski slopes and Silk Road heritage towns.
          </p>
        </div>

        {/* Grid of Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDestinations.map((dest) => {
            const hasGallery = dest.galleryImages && dest.galleryImages.length > 0;
            return (
              <div
                key={dest.id}
                onClick={() => setSelectedDest(dest)}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <WatermarkedImage
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold border border-slate-700 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{dest.name}</span>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-amber-300 font-mono">
                      {dest.distanceFromBaku}
                    </div>
                    {/* Explore Now pill on card image — only for gallery destinations */}
                    {hasGallery && (
                      <button
                        onClick={(e) => openGallery(dest, e)}
                        className="absolute bottom-2 left-2 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-slate-950 text-[10px] font-bold backdrop-blur-sm transition-colors"
                        aria-label={`Explore ${dest.name} photo gallery`}
                      >
                        <Images className="w-3 h-3" />
                        Explore Now
                      </button>
                    )}
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-bold text-[#0F172A] group-hover:text-amber-700 transition-colors font-serif">
                      {dest.name} — <span className="text-xs font-normal text-slate-500">{dest.tagline}</span>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {dest.shortDescription}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-amber-700 font-medium pt-1">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>Best Time: {dest.bestTimeToVisit}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-sky-700 border-t border-slate-100">
                  <span>View Highlights & Tours</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Destination Quick Detail Modal */}
      {selectedDest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-56">
              <WatermarkedImage src={selectedDest.image} alt={selectedDest.name} />
              <button
                onClick={() => setSelectedDest(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Azerbaijan Destination Guide
                </span>
                <h3 className="text-2xl font-bold font-serif">{selectedDest.name}</h3>
                <p className="text-xs text-slate-200">{selectedDest.tagline}</p>
              </div>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              <p className="text-sm leading-relaxed text-slate-700">{selectedDest.shortDescription}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider flex items-center gap-1.5 text-amber-800">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-1 text-slate-600">
                    {selectedDest.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider flex items-center gap-1.5 text-sky-800">
                    <Compass className="w-3.5 h-3.5 text-sky-600" />
                    Recommended Activities
                  </h4>
                  <ul className="space-y-1 text-slate-600">
                    {selectedDest.keyActivities.map((a, i) => (
                      <li key={i}>• {a}</li>
                    ))}
                  </ul>
                  <div className="pt-2 text-[11px] text-amber-700 font-semibold border-t border-slate-200">
                    Best Season: {selectedDest.bestTimeToVisit}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200">
                <button
                  onClick={() => {
                    setSelectedDest(null);
                    onNavigate('tours');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Browse {selectedDest.name} Tours</span>
                </button>

                {/* Explore Now — only shown when galleryImages exist */}
                {selectedDest.galleryImages && selectedDest.galleryImages.length > 0 && (
                  <button
                    onClick={() => openGallery(selectedDest)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Images className="w-3.5 h-3.5" />
                    <span>Explore Now</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    const destName = selectedDest.name;
                    setSelectedDest(null);
                    onOpenConsultation(`Tour to ${destName}`);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs"
                >
                  Request Custom Trip Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-screen Gallery Lightbox */}
      {showGallery && galleryDest && galleryDest.galleryImages && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-8 py-4 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                Photo Gallery
              </p>
              <h2 className="text-lg font-bold text-white font-serif">{galleryDest.name}</h2>
            </div>
            <button
              onClick={closeGallery}
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Photo Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryDest.galleryImages.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-lg"
                >
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <WatermarkedImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-4 py-3 border-t border-slate-800">
                    <p className="text-xs font-semibold text-slate-200 leading-snug">{item.title}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{galleryDest.name}, Azerbaijan</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer actions */}
            <div className="mt-10 pb-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  closeGallery();
                  onNavigate('tours');
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xs"
              >
                <Compass className="w-3.5 h-3.5" />
                Browse {galleryDest.name} Tours
              </button>
              <button
                onClick={() => {
                  const destName = galleryDest.name;
                  closeGallery();
                  onOpenConsultation(`Tour to ${destName}`);
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-xs"
              >
                Request Custom Trip Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
