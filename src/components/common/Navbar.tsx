import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Compass,
  FileCheck,
  ShieldCheck,
  Building,
  Briefcase,
  GraduationCap,
  Sparkles,
  BookOpen,
  Info,
  ChevronDown,
  Lock,
  Globe,
  ArrowRight,
} from 'lucide-react';
import { PageRoute, SiteSettings } from '../../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  siteSettings: SiteSettings;
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  siteSettings,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute; icon?: React.ReactNode; isService?: boolean }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Travel & Tours', route: 'tours', icon: <Compass className="w-4 h-4" /> },
    { label: 'Azerbaijan Visa', route: 'visa', icon: <FileCheck className="w-4 h-4" /> },
    { label: 'TRC & Residency', route: 'trc', icon: <ShieldCheck className="w-4 h-4" /> },
    { label: 'Azerbaijan Property', route: 'property', icon: <Building className="w-4 h-4" /> },
    { label: 'Company Registration', route: 'company-registration', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Business Consultancy', route: 'business-consultancy', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Student Services', route: 'student-services', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Book Travel (Affiliate)', route: 'affiliate-travel', icon: <Sparkles className="w-4 h-4 text-amber-400" /> },
    { label: 'Blog', route: 'blog', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'About Us', route: 'about', icon: <Info className="w-4 h-4" /> },
    { label: 'Contact', route: 'contact', icon: <Phone className="w-4 h-4" /> },
  ];

  const phoneNumbersList = [
    { country: 'UK / WhatsApp', number: siteSettings.phoneNumbers.uk, raw: '447462273257' },
    { country: 'Pakistan Office', number: siteSettings.phoneNumbers.pk, raw: '923009111130' },
    { country: 'Azerbaijan Desk 1', number: siteSettings.phoneNumbers.aze1, raw: '994504517493' },
    { country: 'Azerbaijan Desk 2', number: siteSettings.phoneNumbers.aze2, raw: '9940509209003' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Announcement & Direct Contact Bar */}
      <div className="bg-[#07132B] text-slate-200 border-b border-slate-800/80 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Tagline & Bridge badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Pakistan 🇵🇰 ⟷ Azerbaijan 🇦🇿
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              Connecting Travel, Residency, Property & Business
            </span>
          </div>

          {/* Right: Direct Phones & Language */}
          <div className="flex items-center gap-4">
            {/* Phone numbers popover trigger */}
            <div className="relative">
              <button
                onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden md:inline">Direct Lines:</span>
                <span className="text-amber-300">{siteSettings.phoneNumbers.pk}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {phoneDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-3 z-50 text-slate-200"
                  onMouseLeave={() => setPhoneDropdownOpen(false)}
                >
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-800 pb-1">
                    Official Contact Numbers
                  </p>
                  <div className="space-y-2">
                    {phoneNumbersList.map((p, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-2 p-1.5 hover:bg-slate-800/60 rounded-lg">
                        <div>
                          <span className="text-[11px] text-slate-400 block">{p.country}</span>
                          <span className="font-semibold text-amber-300 text-xs">{p.number}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <a
                            href={`https://wa.me/${p.raw}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 rounded-md transition-colors"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={`tel:${p.number}`}
                            className="p-1.5 bg-sky-500/20 hover:bg-sky-500/40 text-sky-400 rounded-md transition-colors"
                            title="Call Phone"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language Switcher UI */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700 font-medium"
              >
                <Globe className="w-3 h-3 text-slate-400" />
                <span>{selectedLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-1 w-32 bg-slate-900 border border-slate-700 rounded-lg shadow-xl p-1 z-50"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  {[
                    { code: 'EN', name: 'English (Primary)' },
                    { code: 'UR', name: 'اردو (Urdu)' },
                    { code: 'AZ', name: 'Azərbaycanca' },
                    { code: 'RU', name: 'Русский' },
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-2.5 py-1.5 text-xs rounded-md transition-colors flex items-center justify-between ${
                        selectedLang === lang.code
                          ? 'bg-amber-500/20 text-amber-300 font-semibold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Admin Portal Quick Link */}
            <button
              onClick={() => handleNavClick('admin')}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-300 text-xs px-2 py-0.5 rounded hover:bg-slate-800 transition-colors"
              title="Admin Portal"
            >
              <Lock className="w-3 h-3" />
              <span className="hidden lg:inline">Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0B1B3D]/95 backdrop-blur-md shadow-xl border-b border-slate-700/80 py-2.5'
            : 'bg-[#0B1B3D] border-b border-slate-800 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200 border border-amber-300/40">
              <span className="font-extrabold text-lg tracking-wider font-serif">S</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white font-serif">SIRFPK</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Azerbaijan
                </span>
              </div>
              <span className="text-[11px] text-amber-400 font-medium tracking-wide block -mt-0.5">
                {siteSettings.tagline}
              </span>
            </div>
          </button>

          {/* Desktop Primary Menu */}
          <div className="hidden xl:flex items-center space-x-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                currentRoute === 'home'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('tours')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                currentRoute === 'tours'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              Tours & Packages
            </button>

            <button
              onClick={() => handleNavClick('visa')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                currentRoute === 'visa'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5 text-sky-400" />
              Visa Assistance
            </button>

            <button
              onClick={() => handleNavClick('trc')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                currentRoute === 'trc'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              TRC & Residency
            </button>

            <button
              onClick={() => handleNavClick('property')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                currentRoute === 'property' || currentRoute === 'property-investment'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <Building className="w-3.5 h-3.5 text-amber-400" />
              Property
            </button>

            <button
              onClick={() => handleNavClick('company-registration')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                currentRoute === 'company-registration' || currentRoute === 'business-consultancy'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              Business Setup
            </button>

            <button
              onClick={() => handleNavClick('student-services')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                currentRoute === 'student-services'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
              Students
            </button>

            <button
              onClick={() => handleNavClick('affiliate-travel')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                currentRoute === 'affiliate-travel'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-md font-extrabold'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Book Travel
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                currentRoute === 'blog'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                currentRoute === 'contact'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/70'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs tracking-wide shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer border border-amber-300/60"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-wide shadow-sm"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white focus:outline-none border border-slate-700"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#07132B] border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.route}
                  onClick={() => handleNavClick(link.route)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                    currentRoute === link.route
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className="text-amber-400">{link.icon || <Compass className="w-4 h-4" />}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 space-y-3">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    onOpenConsultation();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm text-center shadow-md"
                >
                  Request a Free Consultation
                </button>
                <a
                  href={`https://wa.me/923009111130?text=${encodeURIComponent(
                    'Hello SIRFPK, I would like to inquire about Azerbaijan services.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp (+923009111130)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
