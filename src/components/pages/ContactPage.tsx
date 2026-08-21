import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Building,
} from 'lucide-react';
import { SiteSettings } from '../../types';
import { StorageService } from '../../services/storage';

interface ContactPageProps {
  siteSettings: SiteSettings;
}

export const ContactPage: React.FC<ContactPageProps> = ({ siteSettings }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Azerbaijan Tour Package');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Inquiry - SIRFPK Contact Form*\n` +
      `*Name:* ${fullName || 'Valued Client'}\n` +
      `*WhatsApp:* ${whatsappNumber}\n` +
      `*Service:* ${serviceRequired}\n` +
      `*Message:* ${message || 'Please assist me with my inquiry.'}`
    );
    window.open(`https://wa.me/923009111130?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsappNumber) {
      alert('Please enter your full name and WhatsApp number.');
      return;
    }

    // Auto-open WhatsApp synchronously within the user-gesture context
    // (form submit click) — before any state updates or async calls —
    // to ensure popup blockers do not suppress the new tab.
    handleDirectWhatsApp();

    setIsSubmitting(true);
    try {
      StorageService.saveInquiry({
        fullName,
        country: 'Pakistan / International',
        whatsappNumber,
        email: email || 'contact_page@client.com',
        serviceRequired,
        travelDate: 'Flexible',
        numberOfTravelers: '1-2',
        budget: 'Standard',
        message,
        preferredContactMethod: 'whatsapp',
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      country: 'Pakistan Office (Client Desk)',
      flag: '🇵🇰',
      address: 'Gulberg III, Lahore / Blue Area, Islamabad, Pakistan',
      phone: siteSettings.phoneNumbers.pk,
      rawPhone: '923009111130',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM PKT',
      focus: 'Client Inquiries, Visa Pre-Checks & Tour Bookings',
    },
    {
      country: 'United Kingdom Desk',
      flag: '🇬🇧',
      address: 'London & Manchester Liaison Desk, United Kingdom',
      phone: siteSettings.phoneNumbers.uk,
      rawPhone: '447462273257',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM GMT',
      focus: 'Diaspora Consultations & Real Estate Investment',
    },
    {
      country: 'Baku Operations Center (Desk 1)',
      flag: '🇦🇿',
      address: 'Nizami Street & White City Business Hub, Baku, Azerbaijan',
      phone: siteSettings.phoneNumbers.aze1,
      rawPhone: '994504517493',
      hours: 'Mon - Sun: 24/7 Ground Operations',
      focus: 'Airport VIP Transfers & Tour Dispatching',
    },
    {
      country: 'Baku Corporate Center (Desk 2)',
      flag: '🇦🇿',
      address: 'Babek Plaza & State Migration Liaison, Baku, Azerbaijan',
      phone: siteSettings.phoneNumbers.aze2,
      rawPhone: '9940509209003',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM AZT',
      focus: 'Company Registration & State Migration TRC',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07132B] text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect with SIRFPK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white font-serif">
            Contact Our Pakistan & Azerbaijan Desks
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Reach out via WhatsApp, direct phone call, or our online consultation form. Our dedicated advisors in Pakistan, the UK, and Baku are here to assist.
          </p>
        </div>

        {/* 4 Office & Desk Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((off, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0B1B3D] border border-slate-700/80 shadow-xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{off.flag}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                    Active Desk
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white font-serif">{off.country}</h3>

                <a
                  href={`tel:${off.phone}`}
                  className="text-base font-bold text-amber-400 font-mono block hover:underline"
                >
                  {off.phone}
                </a>

                <div className="space-y-1 text-xs text-slate-300">
                  <p className="text-[11px] text-slate-400 leading-relaxed">{off.address}</p>
                  <p className="text-[11px] text-slate-400">{off.hours}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <a
                  href={`https://wa.me/${off.rawPhone}?text=${encodeURIComponent(
                    `Hello SIRFPK! I am reaching out to ${off.country}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Information Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-white font-serif mb-1">
              Send an Online Inquiry
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Fill in your details below and an advisor will respond within a few hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-slate-300">
                  Thank you, {fullName}. Our Azerbaijan advisory team will contact you shortly.
                </p>
                <p className="text-[11px] text-slate-400">
                  WhatsApp should have opened automatically. If not, tap the button below:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp Direct Now
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      WhatsApp / Mobile <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="+92 300 1234567"
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tariq@example.com"
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Service Required</label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs"
                  >
                    <option value="Azerbaijan Tour Package">Azerbaijan Tour Package (Baku/Shahdag/Gabala)</option>
                    <option value="Azerbaijan Visa Assistance">Azerbaijan ASAN e-Visa</option>
                    <option value="TRC & Residency Guidance">TRC Temporary Residence Permit</option>
                    <option value="Buy Property in Baku">Buy Property / Real Estate</option>
                    <option value="Company Registration & Setup">Company Registration & LLC</option>
                    <option value="Business Consultancy">Business Setup & Trade Advisory</option>
                    <option value="Student Admissions & TRC">Study in Azerbaijan</option>
                    <option value="VIP Private Airport Transfer">VIP Airport Transfer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your travel dates, property interests, or business requirements..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0B1B3D] to-slate-900 border border-slate-700 space-y-4">
              <h3 className="text-base font-bold text-white font-serif">
                Direct Contact Information
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Email:</span>
                    <a href={`mailto:${siteSettings.emails.primary}`} className="text-white hover:underline font-medium">
                      {siteSettings.emails.primary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Official Website:</span>
                    <span className="text-white font-medium">www.sirfpk.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Confidentiality:</span>
                    <span>All client data is strictly confidential and never shared with third parties.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-2">
              <span className="font-bold text-white block">Emergency or Urgent Travel?</span>
              <p className="text-[11px] leading-relaxed">
                If you require urgent same-day ASAN 3-hour e-Visa assistance or emergency airport pickups in Baku, contact the Baku Operations Desk directly on WhatsApp at <strong>+994 50 451 7493</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
