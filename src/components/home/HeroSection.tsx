import React from 'react';
import { Compass, Calendar, MessageCircle, ArrowRight, Star, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';
import { PageRoute, SiteSettings } from '../../types';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
  siteSettings: SiteSettings;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  siteSettings,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#07132B]">
      {/* Background Image with Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/1280px-Flame_towers_from_Baku_boulevard.JPG"
          alt="Baku Azerbaijan Skyline - Flame Towers & Caspian Sea"
          className="w-full h-full object-cover object-center transform scale-105 animate-in fade-in duration-1000"
        />
        {/* Dark transparent gradient overlay for excellent text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07132B]/95 via-[#0B1B3D]/85 to-[#07132B]/90"></div>
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#07132B]/40 to-[#07132B]"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headings & Value Props */}
          <div className="lg:col-span-8 space-y-6">
            {/* Flag element & Positioning Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/40 backdrop-blur-md text-slate-200 text-xs font-semibold shadow-lg">
              <span className="text-base">🇦🇿</span>
              <span className="text-amber-400 font-bold">AZERBAIJAN PREMIER GATEWAY</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Pakistan 🇵🇰 Dedicated Support</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-serif leading-[1.15]">
              CONNECTING PAKISTAN WITH{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 underline decoration-amber-500/40 decoration-4">
                AZERBAIJAN
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-base sm:text-xl font-bold text-sky-200 tracking-wide font-mono">
              Travel | Visa | TRC | Property | Business | Education
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Plan your Azerbaijan journey with professional assistance for luxury tours, ASAN e-Visa guidance, TRC residency permits, Baku property consultancy, and seamless company registration.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 justify-center sm:justify-start">
              <button
                onClick={() => onNavigate('tours')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-[#0B1B3D] font-extrabold text-sm tracking-wide shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer border border-amber-300/60"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Azerbaijan Tours</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenConsultation()}
                className="px-6 py-3.5 rounded-xl bg-[#0B1B3D]/80 hover:bg-[#0F285C] text-white font-bold text-sm tracking-wide border border-slate-600 hover:border-amber-400/60 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md shadow-lg"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Book a Consultation</span>
              </button>

              <a
                href={`https://wa.me/923009111130?text=${encodeURIComponent(
                  'Hello SIRFPK! I want to consult regarding Azerbaijan travel, visa, TRC or property services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide transition-all flex items-center gap-2 shadow-lg hover:shadow-emerald-600/30 backdrop-blur-md cursor-pointer border border-emerald-400/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Licensed Travel & Visa Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span>4 Direct Support Lines</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
                <span>Premium Itineraries</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Baku Local Presence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Quick Card (Poster Style Inspired) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0B1B3D]/95 p-6 border border-amber-400/30 shadow-2xl backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Featured Signature Package
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                  Sample Package
                </span>
              </div>

              <div className="relative h-44 rounded-xl overflow-hidden group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baku_Montage.jpg/1280px-Baku_Montage.jpg"
                  alt="Azerbaijan Tour Preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-amber-300 font-mono border border-amber-400/30">
                  www.sirfpk.com
                </div>
                <div className="absolute top-2 left-2 px-2 py-1 rounded bg-[#0B1B3D]/90 text-xs font-bold text-white">
                  4 Nights / 5 Days
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white text-base">Azerbaijan Explorer Tour</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Baku Old City, Flame Towers, Gobustan Mud Volcanoes & Yanardag Burning Mountain.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <div>
                  <span className="text-[11px] text-slate-400 block">Starting From</span>
                  <span className="text-xl font-extrabold text-amber-400 font-serif">$380</span>
                  <span className="text-[10px] text-slate-400"> / person</span>
                </div>
                <button
                  onClick={() => onNavigate('tours')}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
