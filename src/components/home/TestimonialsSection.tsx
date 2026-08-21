import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Farhan & Ayesha Tariq',
      location: 'Lahore, Pakistan 🇵🇰',
      service: 'Baku & Shahdag 6-Day Family Tour',
      rating: 5,
      comment:
        'SIRFPK arranged everything seamlessly from airport pickup to our private Shahdag ski resort transfers. The driver in Baku was punctual and polite, and having the Pakistani contact number for quick coordination gave our family great peace of mind.',
    },
    {
      id: 2,
      name: 'Dr. Zulfiqar Ali',
      location: 'Islamabad, Pakistan 🇵🇰',
      service: 'Business MMC Registration & TRC Guidance',
      rating: 5,
      comment:
        'I needed professional assistance setting up our consultancy branch in Baku. SIRFPK guided me through the ASAN Imza, VÖEN tax registration, and the residency submission efficiently. Transparent and straightforward guidance throughout.',
    },
    {
      id: 3,
      name: 'Nadeem Khan',
      location: 'London, United Kingdom 🇬🇧',
      service: 'Baku White City Apartment Acquisition',
      rating: 5,
      comment:
        'As an overseas Pakistani living in the UK, investing in Baku real estate was made smooth by SIRFPK’s property advisory. They organized video tours of apartments in White City and assisted with contract review and developer verification.',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900">
            Client Experiences
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] font-serif mt-3">
            Trusted by Travelers, Investors & Entrepreneurs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Real feedback from clients who relied on SIRFPK for travel, residency, and business setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-xs text-slate-600 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-[#0F172A]">{t.name}</h4>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-0.5">
                  <span>{t.location}</span>
                  <span className="text-amber-700 font-medium">{t.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
