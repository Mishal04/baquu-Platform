import React from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, Compass } from 'lucide-react';
import { PageRoute } from '../../types';
import { WatermarkedImage } from '../common/WatermarkedImage';

interface PinterestInspirationSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const PinterestInspirationSection: React.FC<PinterestInspirationSectionProps> = ({
  onNavigate,
}) => {
  const { t } = useTranslation();

  const pins = [
    {
      title: 'Baku Flame Towers at Night',
      subtitle: 'Caspian Sea Promenade & Highland Park',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Flame_towers_baku.jpg/1280px-Flame_towers_baku.jpg',
      category: 'Baku Luxury',
    },
    {
      title: 'Shahdag Mountain Winter Ski',
      subtitle: 'Caucasus Alpine Resort & Cable Cars',
      image: '/images/destinations/shahdag/shahdag-ski-slopes.jpg',
      category: 'Shahdag Ski',
    },
    {
      title: 'Nohur Lake Serenity in Gabala',
      subtitle: 'Emerald Waters & Caucasian Forests',
      image: '/images/destinations/shahdag/nohur-lake.jpg',
      category: 'Gabala Nature',
    },
    {
      title: 'UNESCO Old City (Icherisheher)',
      subtitle: 'Ancient Maiden Tower & Shirvanshah Palace',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/1280px-Baku_Montage.jpg',
      category: 'Heritage',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>{t('inspiration.badge')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-serif">
              {t('inspiration.heading')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {t('inspiration.subheading')}
            </p>
          </div>

          <button
            onClick={() => onNavigate('tours')}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{t('inspiration.discover')}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pins.map((pin, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <WatermarkedImage
                  src={pin.image}
                  alt={pin.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/90 text-rose-300 text-[10px] font-bold border border-slate-700">
                  {pin.category}
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-[#0F172A] group-hover:text-rose-700 transition-colors">
                  {pin.title}
                </h4>
                <p className="text-[11px] text-slate-600">{pin.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
