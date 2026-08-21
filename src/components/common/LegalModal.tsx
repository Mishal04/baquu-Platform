import React from 'react';
import { X, Shield, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { SiteSettings } from '../../types';

interface LegalModalProps {
  isOpen: boolean;
  topic: string;
  onClose: () => void;
  siteSettings: SiteSettings;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  topic,
  onClose,
  siteSettings,
}) => {
  if (!isOpen) return null;

  const topicsData: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How SIRFPK protects your personal data and consultation requests.',
      content: (
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <p>
            At <strong>SIRFPK (www.sirfpk.com)</strong>, we take the confidentiality of our clients seriously. This Privacy Policy describes how we collect, store, and process personal data when you use our website or request consultation services.
          </p>
          <h5 className="font-bold text-white text-sm">1. Information We Collect</h5>
          <p>
            We collect personal details that you voluntarily submit via our consultation forms, WhatsApp communication, or email inquiries, including your full name, phone number, WhatsApp contact, email address, passport information for visa review, travel itinerary preferences, or property specifications.
          </p>
          <h5 className="font-bold text-white text-sm">2. Purpose of Processing</h5>
          <p>
            Your information is used strictly to provide customized Azerbaijan travel itineraries, visa guidance, TRC application reviews, company registration paperwork, or property selection. We do not sell or lease your personal information to third-party marketing companies.
          </p>
          <h5 className="font-bold text-white text-sm">3. Data Security</h5>
          <p>
            All submitted client data is encrypted and handled with strict confidentiality by authorized SIRFPK advisors located in our UK, Pakistan, and Baku coordination centers.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Service terms governing consultations, bookings, and website usage.',
      content: (
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <p>
            By accessing <strong>www.sirfpk.com</strong>, you agree to comply with these terms and conditions.
          </p>
          <h5 className="font-bold text-white text-sm">1. Advisory & Consultancy Nature</h5>
          <p>
            SIRFPK operates as a private international travel operator, visa advisory, residency consultant, property advisor, and business setup facilitator. We are not a government agency, embassy, or immigration authority of Azerbaijan or Pakistan.
          </p>
          <h5 className="font-bold text-white text-sm">2. Package Prices & Inclusions</h5>
          <p>
            Sample prices listed on the website represent starting rates per person on twin-sharing basis and are subject to availability, seasonal adjustments, and final hotel confirmation at the time of deposit.
          </p>
          <h5 className="font-bold text-white text-sm">3. Intellectual Property & Watermark</h5>
          <p>
            All promotional graphics, tour posters, Pinterest visuals, and proprietary media produced by SIRFPK carrying the <strong>www.sirfpk.com</strong> watermark are protected by copyright.
          </p>
        </div>
      ),
    },
    cookie: {
      title: 'Cookie Policy',
      subtitle: 'Information regarding website cookies and session preferences.',
      content: (
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <p>
            Our website uses cookies and local browser storage to provide personalized browsing experiences, remember your saved itineraries, and track affiliate partner outbound links.
          </p>
          <h5 className="font-bold text-white text-sm">Types of Cookies Used:</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for site navigation, inquiry state, and security.</li>
            <li><strong>Affiliate Cookies:</strong> Used by trusted partners (Airalo, Booking.com, Trip.com, etc.) to record qualified referrals at no extra cost to you.</li>
            <li><strong>Analytics Cookies:</strong> Anonymized performance tracking to improve page loading and user flow.</li>
          </ul>
        </div>
      ),
    },
    affiliate: {
      title: 'Affiliate Disclosure',
      subtitle: 'Transparency regarding affiliate partnerships and commissions.',
      content: (
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
            {siteSettings.disclaimers.affiliate}
          </div>
          <p>
            SIRFPK participates in trusted affiliate partner programs including <strong>Airalo eSIM, Trip.com, Booking.com, Agoda, WayAway, Skyscanner, Rentalcars.com, GetYourGuide, and Viator</strong>.
          </p>
          <p>
            When you click on an affiliate link and make a qualifying hotel, flight, eSIM, or activity booking, SIRFPK may earn a small referral commission. This occurs at <strong>zero additional cost</strong> to you and often grants access to exclusive promotional discounts.
          </p>
        </div>
      ),
    },
    disclaimers: {
      title: 'Legal Disclaimers & Official Notices',
      subtitle: 'Mandatory statutory notices for Visa, Residency, Property and Travel.',
      content: (
        <div className="space-y-4 text-xs leading-relaxed text-slate-300">
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
              <h6 className="font-bold text-sky-400 mb-1 text-xs">Azerbaijan Visa Disclaimer</h6>
              <p>{siteSettings.disclaimers.visa}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
              <h6 className="font-bold text-emerald-400 mb-1 text-xs">TRC & Residence Permit Disclaimer</h6>
              <p>{siteSettings.disclaimers.trc}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
              <h6 className="font-bold text-amber-400 mb-1 text-xs">Property Investment Disclaimer</h6>
              <p>{siteSettings.disclaimers.property}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
              <h6 className="font-bold text-purple-400 mb-1 text-xs">Tour Package & Travel Disclaimer</h6>
              <p>{siteSettings.disclaimers.travel}</p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const currentTopic = topicsData[topic] || topicsData.disclaimers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0B1B3D] p-5 border-b border-slate-700 flex items-center justify-between text-white">
          <div>
            <h3 className="text-lg font-bold font-serif">{currentTopic.title}</h3>
            <p className="text-xs text-slate-300">{currentTopic.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {currentTopic.content}
        </div>

        <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Official Domain: <strong>{siteSettings.websiteDomain}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
