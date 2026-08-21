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
