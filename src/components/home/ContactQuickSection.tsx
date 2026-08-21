import React from 'react';
import { Phone, MessageCircle, Mail, Globe, MapPin } from 'lucide-react';
import { SiteSettings } from '../../types';

interface ContactQuickSectionProps {
  siteSettings: SiteSettings;
}

export const ContactQuickSection: React.FC<ContactQuickSectionProps> = ({
  siteSettings,
}) => {
  const contactBoxes = [
    {
      country: 'Pakistan Support Line',
      flag: '🇵🇰',
      number: siteSettings.phoneNumbers.pk,
      raw: '923009111130',
      description: 'Lahore & Islamabad Client Inquiries & Tour Consultations',
      badge: 'Main PK Helpline',
    },
    {
      country: 'United Kingdom Support',
      flag: '🇬🇧',
      number: siteSettings.phoneNumbers.uk,
      raw: '447462273257',
      description: 'UK & European Diaspora Consultations & Investment Advisory',
      badge: 'UK International',
    },
    {
      country: 'Baku Team (Line 1)',
      flag: '🇦🇿',
      number: siteSettings.phoneNumbers.aze1,
      raw: '994504517493',
      description: 'Baku Operations, Airport Transfers & On-Ground Coordination',
      badge: 'Baku On-Ground',
    },
    {
      country: 'Baku Team (Line 2)',
      flag: '🇦🇿',
      number: siteSettings.phoneNumbers.aze2,
      raw: '9940509209003',
      description: 'Company Registration & State Migration Appointments',
      badge: 'Corporate Desk',
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Reach Our Desks Directly
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-serif mt-1">
            4 Dedicated WhatsApp & Calling Numbers
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactBoxes.map((box, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{box.flag}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {box.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">{box.country}</h4>
                  <a
                    href={`tel:${box.number}`}
                    className="text-sm font-bold text-amber-700 font-mono block mt-1 hover:underline"
                  >
                    {box.number}
                  </a>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {box.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <a
                  href={`https://wa.me/${box.raw}?text=${encodeURIComponent(
                    `Hello SIRFPK! I am reaching out to ${box.country}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${box.number}`}
                  className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
