import React, { useState } from 'react';
import {
  FileCheck,
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  FileText,
  HelpCircle,
  MessageCircle,
  Calendar,
  Globe,
} from 'lucide-react';
import { PageRoute } from '../../types';

interface VisaPageProps {
  onOpenConsultation: (service?: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const VisaPage: React.FC<VisaPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const [selectedNationality, setSelectedNationality] = useState('pakistan');
  const [selectedVisaType, setSelectedVisaType] = useState('standard');

  const visaTypes = [
    {
      id: 'standard',
      name: 'Standard ASAN e-Visa',
      duration: '3 Business Days',
      validity: '90 Days (30-day single entry stay)',
      desc: 'Most popular option for leisure travelers, tourists, and short family vacations.',
      govtFeeNote: '$26 official state fee (consultancy assistance extra)',
    },
    {
      id: 'urgent',
      name: 'Urgent 3-Hour ASAN e-Visa',
      duration: '3 Hours (Accelerated)',
      validity: '90 Days (30-day single entry stay)',
      desc: 'Express emergency processing for last-minute business travel or urgent trips.',
      govtFeeNote: '$60 official state fee (consultancy assistance extra)',
    },
    {
      id: 'business',
      name: 'Business & Official Invitation Visa',
      duration: '5 to 10 Business Days',
      validity: 'Up to 90 or 180 Days',
      desc: 'Assistance for corporate delegations, trade expos, and official business missions.',
      govtFeeNote: 'Requires formal business invitation registered with MFA',
    },
  ];

  const faqs = [
    {
      q: 'Can Pakistani citizens apply for Azerbaijan ASAN e-Visa online?',
      a: 'Yes, Pakistani passport holders are eligible for the Azerbaijan electronic visa (ASAN Visa), which allows a stay of up to 30 days within a 90-day validity window.',
    },
    {
      q: 'What is the passport validity requirement?',
      a: 'Your passport must be valid for at least 3 months (90 days) beyond the intended expiry date of your Azerbaijan visa. We strongly recommend having at least 6 months validity.',
    },
    {
      q: 'Do I need hotel and flight bookings before applying?',
      a: 'A registered hotel address in Azerbaijan is required on the application form. SIRFPK can provide verified hotel booking vouchers and confirmed flight reservation assistance.',
    },
    {
      q: 'Can SIRFPK guarantee visa approval?',
      a: 'No private agency can guarantee visa issuance. Approval or denial is the sovereign decision of the State Border Service and State Migration Service of Azerbaijan. We ensure your application is accurate, error-free, and compliant with all official regulations.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Azerbaijan e-Visa Assistance Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-serif">
            Azerbaijan ASAN e-Visa Assistance
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Professional document verification, electronic form submission, urgent 3-hour processing assistance, and hotel voucher coordination for travelers from Pakistan, the UK, UAE, and worldwide.
          </p>
        </div>

        {/* Visa Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visaTypes.map((v) => (
            <div
              key={v.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">
                    {v.duration}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
                    <Clock className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] font-serif">{v.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 space-y-1">
                  <div><strong className="text-slate-900">Validity:</strong> {v.validity}</div>
                  <div className="text-amber-800 font-medium">{v.govtFeeNote}</div>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(`Visa Application: ${v.name}`)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Apply with SIRFPK Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Requirements & Checklist Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-2xl font-bold text-[#0F172A] font-serif">
                Required Documents for Azerbaijan e-Visa
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Please ensure your documents meet these standards before initiating the process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Valid Passport Scan', desc: 'Clear color scan of information page, valid for at least 3-6 months.' },
                { title: 'Accommodation Address', desc: 'Hotel booking confirmation or residential address in Azerbaijan.' },
                { title: 'Intended Travel Dates', desc: 'Tentative or confirmed flight dates for entry into Baku (GYD).' },
                { title: 'Contact Information', desc: 'Active WhatsApp number and valid email address for electronic visa receipt.' },
              ].map((doc, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-xs">
                  <div className="flex items-center gap-2 text-[#0F172A] font-bold text-xs">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{doc.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed pl-6">{doc.desc}</p>
                </div>
              ))}
            </div>

            {/* Statutory Disclaimer Card */}
            <div className="p-5 rounded-2xl bg-white border border-amber-300 text-xs text-slate-700 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                <span>Statutory Legal Notice</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600">
                SIRFPK is a private consultancy and travel agency. We are not the official embassy or visa-issuing authority of Azerbaijan. All visa approvals are subject to the sole jurisdiction of the State Border Service and State Migration Service of Azerbaijan.
              </p>
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Consultation Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-[#0F172A] font-serif">
                Need Fast Visa Guidance?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our visa desk on WhatsApp for immediate document pre-checks and turnaround time estimates.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/923009111130?text=${encodeURIComponent(
                    'Hello SIRFPK! I need assistance with Azerbaijan e-Visa application.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+92 300 9111130)</span>
                </a>

                <button
                  onClick={() => onOpenConsultation('Azerbaijan Visa Assistance')}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Online Consultation</span>
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 text-center">
                Supported Passports: Pakistan 🇵🇰 • UK 🇬🇧 • UAE 🇦🇪 • GCC • USA 🇺🇸 • Global
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-[#0F172A] font-serif text-center">
            Frequently Asked Questions — Azerbaijan Visa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <h4 className="text-xs font-bold text-[#0F172A] flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{f.q}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
