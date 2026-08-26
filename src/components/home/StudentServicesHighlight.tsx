import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';

interface StudentServicesHighlightProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
}

export const StudentServicesHighlight: React.FC<StudentServicesHighlightProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const { t } = useTranslation();

  const highlights = [
    { title: t('student.h1'), desc: t('student.h1desc') },
    { title: t('student.h2'), desc: t('student.h2desc') },
    { title: t('student.h3'), desc: t('student.h3desc') },
    { title: t('student.h4'), desc: t('student.h4desc') },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F3F4FD] via-[#F7F8FE] to-[#EFF1FA] border-t border-b border-indigo-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/40 text-indigo-900 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-indigo-700" />
              <span>{t('student.badge')}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B3D] font-serif leading-tight">
              {t('student.heading')}
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {t('student.body')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-indigo-200/80 hover:border-indigo-400 space-y-1 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 text-[#0B1B3D] font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>{h.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-6">{h.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('student-services')}
                className="px-5 py-2.5 rounded-xl bg-[#0B1B3D] hover:bg-[#112755] text-amber-300 hover:text-amber-200 font-bold text-xs flex items-center gap-1.5 border border-slate-700 shadow-md transition-all cursor-pointer"
              >
                <span>{t('student.explorePrograms')}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onOpenConsultation('Student Admissions & TRC')}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 cursor-pointer border border-amber-300/50"
              >
                {t('student.requestGuidance')}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-indigo-200/80 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-indigo-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
                  {t('student.degreeBadge')}
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
                  {t('student.englishTaught')}
                </span>
              </div>

              <div className="space-y-2.5">
                {[
                  { faculty: 'General Medicine (MBBS) & Dentistry (BDS)', uni: 'Azerbaijan Medical University (AMU)', dur: '5 - 6 Years' },
                  { faculty: 'Computer Science, Artificial Intelligence & Software', uni: 'ADA University / Baku Higher Oil School (BHOS)', dur: '4 Years' },
                  { faculty: 'Petroleum Engineering & Chemical Sciences', uni: 'Azerbaijan State Oil & Industry University (ASOIU)', dur: '4 Years' },
                  { faculty: 'International Business & Finance Management', uni: 'Azerbaijan State University of Economics (UNEC)', dur: '4 Years' },
                ].map((f, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-100 hover:border-indigo-300 flex items-center justify-between transition-colors">
                    <div>
                      <h4 className="text-xs font-bold text-[#0B1B3D]">{f.faculty}</h4>
                      <p className="text-[11px] text-indigo-800/80">{f.uni}</p>
                    </div>
                    <span className="text-[10px] px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-900 font-mono font-bold border border-indigo-200">
                      {f.dur}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-[11px] text-slate-600">
                {t('student.notice')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
