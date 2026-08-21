import React from 'react';
import { UserCheck, Target, Layers, Headphones } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const trustCards = [
    {
      id: 'professional-assistance',
      title: 'Professional Assistance',
      icon: <UserCheck className="w-7 h-7 text-amber-600" />,
      iconBg: 'bg-amber-100 border-amber-300',
      cardBg: 'bg-gradient-to-br from-amber-50/70 via-white to-amber-100/30',
      borderColor: 'border-amber-200/90 hover:border-amber-500 hover:shadow-amber-500/10',
      description:
        'Dedicated advisory specialists handling your travel itineraries, visa documentation reviews, and business inquiries with precision and care.',
    },
    {
      id: 'azerbaijan-focused',
      title: 'Azerbaijan-Focused Services',
      icon: <Target className="w-7 h-7 text-sky-600" />,
      iconBg: 'bg-sky-100 border-sky-300',
      cardBg: 'bg-gradient-to-br from-sky-50/70 via-white to-sky-100/30',
      borderColor: 'border-sky-200/90 hover:border-sky-500 hover:shadow-sky-500/10',
      description:
        'Specialized in-depth knowledge of Azerbaijan’s destinations, hotel networks, local regulations, migration procedures, and real estate market.',
    },
    {
      id: 'travel-business',
      title: 'Travel + Business Solutions',
      icon: <Layers className="w-7 h-7 text-emerald-600" />,
      iconBg: 'bg-emerald-100 border-emerald-300',
      cardBg: 'bg-gradient-to-br from-emerald-50/70 via-white to-emerald-100/30',
      borderColor: 'border-emerald-200/90 hover:border-emerald-500 hover:shadow-emerald-500/10',
      description:
        'A comprehensive platform connecting leisure tourism, residency permits, property acquisitions, and corporate company registrations seamlessly.',
    },
    {
      id: 'personalized-consultation',
      title: 'Personalized Consultation',
      icon: <Headphones className="w-7 h-7 text-indigo-600" />,
      iconBg: 'bg-indigo-100 border-indigo-300',
      cardBg: 'bg-gradient-to-br from-indigo-50/70 via-white to-indigo-100/30',
      borderColor: 'border-indigo-200/90 hover:border-indigo-500 hover:shadow-indigo-500/10',
      description:
        'Direct lines in Pakistan, the UK, and Azerbaijan providing responsive, tailored support via WhatsApp and scheduled private consultations.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F3F7FC] via-[#F8FAFD] to-[#EFF4F9] border-t border-b border-sky-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-900">
            Why Choose SIRFPK
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B3D] font-serif mt-3">
            Your Trusted Bridge Between Pakistan & Azerbaijan
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 mt-2">
            Delivering transparent guidance, premium travel experiences, and reliable business consultancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card) => (
            <div
              key={card.id}
              className={`p-6 rounded-2xl ${card.cardBg} border ${card.borderColor} shadow-sm hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1.5 text-center sm:text-left flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} border flex items-center justify-center mx-auto sm:mx-0 shadow-xs`}>
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-[#0B1B3D] font-serif">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
