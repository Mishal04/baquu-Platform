import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Building,
  GraduationCap,
  Briefcase,
  Users,
  Clock,
  ArrowRight,
  MessageCircle,
  Calendar,
  FileCheck2,
} from 'lucide-react';
import { PageRoute } from '../../types';

interface TRCPageProps {
  onOpenConsultation: (service?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const TRCPage: React.FC<TRCPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const pathways = [
    {
      id: 'business',
      title: 'Business & LLC Founder TRC',
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      desc: 'Form a limited liability company (MMC) in Azerbaijan and obtain residency as the shareholder or founder.',
      requirements: ['Company Registration Certificate (VÖEN)', 'Articles of Association', 'Director Appointment', 'Registered Address'],
    },
    {
      id: 'property',
      title: 'Real Estate Investment TRC',
      icon: <Building className="w-6 h-6 text-amber-400" />,
      desc: 'Acquire qualifying real estate property in Azerbaijan valued at minimum official state thresholds (typically 100,000 AZN+).',
      requirements: ['Property Title Deed (Kupcha / Çıxarış)', 'Official State Valuation Report', 'Notarized Purchase Contract'],
    },
    {
      id: 'student',
      title: 'Higher Education Student TRC',
      icon: <GraduationCap className="w-6 h-6 text-sky-400" />,
      desc: 'Full-time study at recognized state and private universities in Baku (Medical, Engineering, IT, Business).',
      requirements: ['University Acceptance Letter', 'Ministry of Education Clearance', 'Tuition Payment Slip', 'Student Enrollment Order'],
    },
    {
      id: 'family',
      title: 'Family Reunification TRC',
      icon: <Users className="w-6 h-6 text-purple-400" />,
      desc: 'Sponsor legal spouses and minor children of primary TRC holders or Azerbaijani citizens.',
      requirements: ['Notarized & Apostilled Marriage Certificate', 'Children Birth Certificates', 'Sponsor’s Valid TRC & Accommodation Proof'],
    },
  ];

  const processPhases = [
    {
      phase: 'Phase 1',
      title: 'Pre-Assessment & Document Compilation',
      desc: 'Evaluate eligibility pathway, prepare power of attorney if needed, and draft corporate/property files.',
    },
    {
      phase: 'Phase 2',
      title: 'Sworn Translations & Local Registration',
      desc: 'Azerbaijani certified translation and notarization of passports, police clearance, and marriage certificates.',
    },
    {
      phase: 'Phase 3',
      title: 'Baku Medical Clearance & Biometric Filing',
      desc: 'Accompaniment to authorized medical center for state health certificate, followed by State Migration Service biometric appointment.',
    },
    {
      phase: 'Phase 4',
      title: 'TRC Decision & Card Issuance',
      desc: 'Collection of official biometric Temporary Residence Card (typically valid 1 to 2 years, renewable).',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Azerbaijan Residency Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif">
            Azerbaijan TRC & Residence Permit Assistance
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Full-spectrum legal guidance for entrepreneurs, investors, students, and families seeking Temporary Residence Cards (TRC) and long-term relocation to Azerbaijan.
          </p>
        </div>

        {/* 4 Main TRC Pathways */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white font-serif">
              Qualifying Pathways for Azerbaijan TRC
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select the residency category matching your profile and long-term relocation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pathways.map((p) => (
              <div
                key={p.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-700/80 hover:border-emerald-400/60 shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-serif">{p.title}</h3>
                      <span className="text-[11px] text-emerald-400 font-semibold">Fast Legal Processing</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>

                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-1.5">
                    <span className="text-[11px] font-bold text-white block">Key Requirements:</span>
                    <ul className="space-y-1 text-[11px] text-slate-300">
                      {p.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(`TRC Inquiry: ${p.title}`)}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire for {p.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Phase Application Timeline */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              End-to-End Workflow
            </span>
            <h2 className="text-2xl font-bold text-white font-serif mt-1">
              How SIRFPK Guides Your TRC Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processPhases.map((phase, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0B1B3D] border border-slate-700/80 space-y-2">
                <span className="text-xs font-bold uppercase text-emerald-400 font-mono">
                  {phase.phase}
                </span>
                <h4 className="text-sm font-bold text-white font-serif">{phase.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/40 space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>Important Statutory & Regulatory Notice</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            SIRFPK provides consulting, administrative facilitation, document preparation, and translation assistance. We do not issue residence permits. Approval or rejection of Temporary Residence Permits (TRC) is under the exclusive jurisdiction of the State Migration Service of the Republic of Azerbaijan.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-white font-serif">
            Speak with an Azerbaijan Residency Specialist Today
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('TRC & Residency Consultation')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4 inline mr-1.5" />
              Book Residency Consultation
            </button>
            <a
              href={`https://wa.me/923009111130?text=${encodeURIComponent(
                'Hello SIRFPK! I want to inquire regarding Azerbaijan TRC Residency requirements and process.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 inline mr-1.5" />
              WhatsApp Consultation Desk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
