import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, Phone, Send, ShieldCheck } from 'lucide-react';
import { StorageService } from '../../services/storage';
import { SiteSettings } from '../../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  siteSettings: SiteSettings;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Azerbaijan Tour Package',
  siteSettings,
}) => {
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('Pakistan');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState(initialService);
  const [travelDate, setTravelDate] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState('2');
  const [budget, setBudget] = useState('Standard / Flexible');
  const [message, setMessage] = useState('');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'whatsapp' | 'call' | 'email'>('whatsapp');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Consultation Inquiry - SIRFPK*\n` +
      `*Name:* ${fullName || 'Valued Client'}\n` +
      `*Country:* ${country}\n` +
      `*Service:* ${serviceRequired}\n` +
      `*Travelers:* ${numberOfTravelers}\n` +
      `*Date:* ${travelDate || 'Flexible'}\n` +
      `*Budget:* ${budget}\n` +
      `*Message:* ${message || 'Please provide consultation details.'}`
    );
    window.open(`https://wa.me/923009111130?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsappNumber) {
      alert('Please provide your Full Name and WhatsApp number.');
      return;
    }

    // Auto-open WhatsApp immediately — must fire synchronously within the
    // user-gesture (form submit click) context to avoid popup blockers.
    // Called BEFORE any state updates or storage calls.
    handleDirectWhatsApp();

    setIsSubmitting(true);

    try {
      StorageService.saveInquiry({
        fullName,
        country,
        whatsappNumber,
        email: email || 'not_provided@client.com',
        serviceRequired,
        travelDate,
        numberOfTravelers,
        budget,
        message,
        preferredContactMethod,
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0B1B3D] via-[#0F285C] to-[#07132B] p-5 sm:p-6 border-b border-slate-700 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-1">
                <span>SIRFPK VIP Advisory Desk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif">Request a Free Consultation</h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Pakistan 🇵🇰 ⟷ Azerbaijan 🇦🇿 Travel, Visa, TRC Residency, Property & Business Setup
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 text-slate-200">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Thank You, {fullName}!</h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your consultation request for <strong>{serviceRequired}</strong> has been received by our Azerbaijan advisory specialists.
              </p>
              <p className="text-xs text-slate-400">
                A consultant will contact you via <strong>{preferredContactMethod.toUpperCase()}</strong> shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleDirectWhatsApp}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Direct Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kashif Saleem"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Country of Residence <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs"
                  >
                    <option value="Pakistan">Pakistan 🇵🇰</option>
                    <option value="United Kingdom">United Kingdom 🇬🇧</option>
                    <option value="United Arab Emirates">United Arab Emirates 🇦🇪</option>
                    <option value="Saudi Arabia">Saudi Arabia 🇸🇦</option>
                    <option value="Azerbaijan">Azerbaijan 🇦🇿</option>
                    <option value="United States">United States 🇺🇸</option>
                    <option value="Canada">Canada 🇨🇦</option>
                    <option value="Other">Other International</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    WhatsApp / Mobile Number <span className="text-amber-400">*</span>
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
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Service Required <span className="text-amber-400">*</span>
                  </label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs"
                  >
                    <option value="Azerbaijan Tour Package">Azerbaijan Tour Package (Baku/Shahdag/Gabala)</option>
                    <option value="Azerbaijan Visa Assistance">Azerbaijan e-Visa Assistance</option>
                    <option value="TRC & Residency Guidance">TRC Temporary Residence Permit</option>
                    <option value="Buy Property in Baku">Buy Property / Real Estate in Baku</option>
                    <option value="Company Registration & Setup">Company Registration & LLC Setup</option>
                    <option value="Business Consultancy">Business Consultancy & Market Entry</option>
                    <option value="Student Admissions & TRC">Study & Student Residency in Azerbaijan</option>
                    <option value="VIP Private Airport Transfer">VIP Private Airport Transfer</option>
                    <option value="Custom Group Itinerary">Custom Tailor-made Group Tour</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Estimated Travel / Start Date</label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Number of Travelers / Persons</label>
                  <select
                    value={numberOfTravelers}
                    onChange={(e) => setNumberOfTravelers(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-amber-400 text-xs"
                  >
                    <option value="1">1 Person (Solo)</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="3-4">3 - 4 Persons (Family/Small Group)</option>
                    <option value="5-10">5 - 10 Persons (Group)</option>
                    <option value="10+">10+ Persons (Corporate Delegation)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Preferred Contact Method</label>
                  <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                    {[
                      { id: 'whatsapp', label: 'WhatsApp', icon: <MessageCircle className="w-3 h-3 text-emerald-400" /> },
                      { id: 'call', label: 'Phone Call', icon: <Phone className="w-3 h-3 text-sky-400" /> },
                      { id: 'email', label: 'Email', icon: <Send className="w-3 h-3 text-amber-400" /> },
                    ].map((m) => (
                      <button
                        type="button"
                        key={m.id}
                        onClick={() => setPreferredContactMethod(m.id as any)}
                        className={`flex items-center justify-center gap-1 py-2 px-1 rounded-lg border text-[11px] font-semibold transition-all ${
                          preferredContactMethod === m.id
                            ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {m.icon}
                        <span>{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Specific Requirements or Message</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your travel dates, preferred hotels, property budget, or business goals..."
                  className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-xs"
                />
              </div>

              <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Your privacy is fully protected. SIRFPK will never share your contact details. Consultations are confidential and free of obligation.
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Direct on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
