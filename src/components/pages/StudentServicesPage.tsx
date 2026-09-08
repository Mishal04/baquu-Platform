import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Building,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  MessageCircle,
  Calendar,
  Home,
  Plane,
  ShieldCheck,
} from 'lucide-react';
import { PageRoute } from '../../types';

interface StudentServicesPageProps {
  onOpenConsultation: (service?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const StudentServicesPage: React.FC<StudentServicesPageProps> = ({
  onOpenConsultation,
  onNavigate,
}) => {
  const universities = [
    {
      name: 'Azerbaijan Medical University (AMU)',
      city: 'Baku',
      programs: 'General Medicine (MBBS), Dentistry (BDS), Pharmacy',
      tuition: '$4,000 - $5,000 / year',
      medium: 'English Medium Available',
    },
    {
      name: 'ADA University',
      city: 'Baku',
      programs: 'Computer Science, Artificial Intelligence, International Relations, Business Administration',
      tuition: '$4,500 - $6,500 / year',
      medium: '100% English Curriculum (US Model)',
    },
    {
      name: 'Azerbaijan State Oil & Industry University (ASOIU)',
      city: 'Baku',
      programs: 'Petroleum Engineering, Chemical Engineering, Computer Engineering (UFAZ Dual Degree)',
      tuition: '$2,500 - $3,500 / year',
      medium: 'English & French / Azerbaijani Tracks',
    },
    {
      name: 'Azerbaijan State University of Economics (UNEC)',
      city: 'Baku',
      programs: 'Finance, International Trade, Digital Economy, Accounting',
      tuition: '$2,200 - $3,000 / year',
      medium: 'English International School of Economics',
    },
  ];

  const studentServices = [
    {
      title: 'University Admission & Letter of Acceptance',
      desc: 'Guidance choosing accredited university programs, preparing translation portfolios, and obtaining official letters of acceptance.',
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Student Visa & 1-Year Renewable TRC',
      desc: 'Full assistance with educational migration visas and student Temporary Residence Permit (TRC) cards in Baku.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Hostel & Apartment Accommodation',
      desc: 'Assistance securing clean, safe university campus dormitories or shared student apartments near metro stations.',
      icon: <Home className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Airport Meet & Campus Orientation',
      desc: 'Baku Heydar Aliyev Airport pickup, local SIM card setup, bank account opening, and university registration accompaniment.',
      icon: <Plane className="w-5 h-5 text-sky-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Study in Azerbaijan</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif">
            Student Admissions & Residency in Baku
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pursue internationally recognized degrees in English across top Azerbaijani medical, technical, and business universities with affordable living costs and safe campus life.
          </p>
        </div>

        {/* Top Universities Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-serif text-center">
            Accredited Universities in Baku
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universities.map((u, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-700/80 hover:border-indigo-400/60 shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      {u.city}, Azerbaijan
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {u.medium}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-serif">{u.name}</h3>

                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                    <div>
                      <strong className="text-white">Popular Programs:</strong> {u.programs}
                    </div>
                    <div className="text-amber-300 font-semibold">
                      Estimated Tuition: {u.tuition}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(`Student Admission: ${u.name}`)}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire for Admission & TRC</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            UZBEKISTAN SECTION
        ═══════════════════════════════════════════════ */}
        <div className="space-y-8">
          {/* Uzbekistan Header Banner */}
          <div className="relative rounded-3xl overflow-hidden border border-emerald-500/40 shadow-2xl">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a4731] via-[#0f3320] to-[#051a0e]" />
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Registan_at_Dusk.jpg/1280px-Registan_at_Dusk.jpg')] bg-cover bg-center opacity-20" />

            <div className="relative z-10 p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-4 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>🇺🇿 Admissions Now Open</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white font-serif leading-tight">
                    STUDY IN <span className="text-emerald-400">UZBEKISTAN</span>
                  </h2>
                  <p className="text-sm text-emerald-100/80 font-semibold tracking-wide">
                    Quality Education • Safe Environment • Global Opportunities
                  </p>
                  <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                    Start your educational journey in Uzbekistan with professional guidance for Pakistani & international students. World-class education at affordable cost with a bright future ahead.
                  </p>
                </div>

                {/* Price Card */}
                <div className="shrink-0 p-6 rounded-2xl bg-white/10 border border-emerald-400/40 backdrop-blur-sm text-center space-y-3 min-w-[200px]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                    Complete Package
                  </span>
                  <div>
                    <span className="text-3xl font-black text-white font-serif">500,000</span>
                    <span className="text-emerald-300 font-bold text-sm ml-1">PKR</span>
                  </div>
                  <div className="text-xs text-slate-300">≈ USD 1,800 (Approx.)</div>
                  <div className="text-[10px] text-emerald-200 font-semibold bg-emerald-500/20 rounded-lg px-2 py-1">
                    Admission Fee Included
                  </div>
                  <a
                    href="https://wa.me/994504517493?text=Hello! I am interested in Study in Uzbekistan package. Please provide details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors text-center"
                  >
                    Secure Your Seat Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Uzbekistan Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <GraduationCap className="w-5 h-5 text-emerald-400" />, title: 'University Admissions', desc: 'Full guidance for selecting and applying to top accredited universities in Uzbekistan.' },
              { icon: <BookOpen className="w-5 h-5 text-sky-400" />, title: 'Admission Letter', desc: 'We handle the university application process and obtain your official admission letter.' },
              { icon: <ShieldCheck className="w-5 h-5 text-amber-400" />, title: 'Student Visa Assistance', desc: 'Complete Uzbekistan student visa application support, documentation, and submission.' },
              { icon: <Building className="w-5 h-5 text-indigo-400" />, title: 'TRC / Temporary Residence', desc: 'Temporary Residence Card (TRC) assistance for international students studying in Uzbekistan.' },
              { icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />, title: 'Documentation Support', desc: 'Full A–Z documentation, translation, notarization, and application support handled for you.' },
              { icon: <Plane className="w-5 h-5 text-sky-400" />, title: 'Travel & Accommodation', desc: 'Travel guidance, airport pickup, hostel/apartment placement, and campus orientation.' },
            ].map((svc, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-emerald-500/20 hover:border-emerald-400/50 shadow-xl space-y-3 transition-all">
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 w-fit">{svc.icon}</div>
                <h4 className="text-sm font-bold text-white">{svc.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* Package Inclusions */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f3320] via-slate-900 to-[#0B1B3D] border border-emerald-500/30 space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white font-serif">Complete Package Includes</h3>
              <p className="text-xs text-slate-400 mt-1">Everything handled from admission to arrival</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Eligibility', value: 'Matric / 10th Pass', color: 'text-emerald-400' },
                { label: 'Invitation', value: 'University Invitation Provided', color: 'text-sky-400' },
                { label: 'Admission Fee', value: 'Included in Package', color: 'text-amber-400' },
                { label: 'TRC', value: 'Get Residence Permit (TRC)', color: 'text-indigo-400' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{item.label}</span>
                  <p className={`text-xs font-bold ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {[
                'University Selection',
                'Admission Process',
                'Invitation Letter',
                'Visa Assistance',
                'Travel Guidance',
                'Accommodation Support',
                'TRC Process',
                'Work Permission Guidance',
                'Complete Support A to Z',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Uzbekistan Cities */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { city: 'Tashkent', desc: 'Modern & Vibrant', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tashkent_at_night.jpg/640px-Tashkent_at_night.jpg' },
              { city: 'Samarkand', desc: 'Rich History', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Registan_at_Dusk.jpg/640px-Registan_at_Dusk.jpg' },
              { city: 'Bukhara', desc: 'Timeless Beauty', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bukhara_-_Kalon_Mosque.jpg/640px-Bukhara_-_Kalon_Mosque.jpg' },
              { city: 'Modern Universities', desc: 'For a Global Career', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=640&q=80' },
            ].map((place, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border border-slate-700 group">
                <div className="h-32 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 bg-slate-900 text-center">
                  <p className="text-xs font-bold text-white">{place.city}</p>
                  <p className="text-[10px] text-slate-400">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Uzbekistan CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-[#0B1B3D] border border-emerald-500/40 text-center space-y-4">
            <div className="text-2xl">🇵🇰 → 🇺🇿</div>
            <h3 className="text-xl font-bold text-white font-serif">
              From Pakistan to Uzbekistan — With Trust
            </h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Admissions are now open! Contact us today to start your educational journey in Uzbekistan with professional guidance every step of the way.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Study in Uzbekistan')}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 inline mr-1.5" />
                Book Free Consultation
              </button>
              <a
                href="https://wa.me/994504517493?text=Hello! I am interested in Study in Uzbekistan. Please provide details about admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: +994 50 451 7493
              </a>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            END UZBEKISTAN SECTION
        ═══════════════════════════════════════════════ */}

        {/* 4 End-to-End Student Services */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white font-serif">
              Comprehensive Support for International Students
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {studentServices.map((svc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0B1B3D] border border-slate-700/80 space-y-3"
              >
                <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 w-fit">{svc.icon}</div>
                <h4 className="text-sm font-bold text-white">{svc.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0B1B3D] to-slate-900 border border-indigo-500/30 text-center space-y-4">
          <h3 className="text-xl font-bold text-white font-serif">
            Planning to Study in Azerbaijan for the Upcoming Academic Intake?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Contact our educational admissions desk for document evaluation, syllabus advice, and admission timeline details.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation('Student Admissions & TRC')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 inline mr-1.5" />
              Book Student Consultation
            </button>
            <a
              href={`https://wa.me/923009111130?text=${encodeURIComponent(
                'Hello SIRFPK! I am interested in applying to universities in Azerbaijan (MBBS, IT, or Business).'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 inline mr-1.5" />
              WhatsApp Student Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
