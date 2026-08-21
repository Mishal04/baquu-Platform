import React, { useState, useEffect } from 'react';
import { PageRoute, TourPackage, PropertyListing, BlogPost, AffiliatePartner, SiteSettings } from './types';
import { StorageService } from './services/storage';

// Common Components
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingContact } from './components/common/FloatingContact';
import { ConsultationModal } from './components/common/ConsultationModal';
import { LegalModal } from './components/common/LegalModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { ToursPage } from './components/pages/ToursPage';
import { VisaPage } from './components/pages/VisaPage';
import { TRCPage } from './components/pages/TRCPage';
import { PropertyPage } from './components/pages/PropertyPage';
import { CompanyRegistrationPage } from './components/pages/CompanyRegistrationPage';
import { BusinessConsultancyPage } from './components/pages/BusinessConsultancyPage';
import { StudentServicesPage } from './components/pages/StudentServicesPage';
import { AffiliateTravelPage } from './components/pages/AffiliateTravelPage';
import { BlogPage } from './components/pages/BlogPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminPanel } from './components/pages/AdminPanel';

export default function App() {
  // Navigation State
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  
  // Data State loaded from StorageService
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => StorageService.getSettings());
  const [tours, setTours] = useState<TourPackage[]>(() => StorageService.getTours());
  const [properties, setProperties] = useState<PropertyListing[]>(() => StorageService.getProperties());
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => StorageService.getBlogPosts());
  const [affiliatePartners, setAffiliatePartners] = useState<AffiliatePartner[]>(() => StorageService.getAffiliatePartners());

  // Selected item states for detail views
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  // Modal States
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<string>('Azerbaijan Travel Package');
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTopic, setLegalTopic] = useState<string>('disclaimers');

  // Sync state with storage on admin updates or initial load
  const reloadData = () => {
    setSiteSettings(StorageService.getSettings());
    setTours(StorageService.getTours());
    setProperties(StorageService.getProperties());
    setBlogPosts(StorageService.getBlogPosts());
    setAffiliatePartners(StorageService.getAffiliatePartners());
  };

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    // Reset individual selection when navigating to listing pages
    if (route === 'tours' && selectedTour) setSelectedTour(null);
    if ((route === 'property' || route === 'property-investment') && selectedProperty) setSelectedProperty(null);
    if (route === 'blog' && selectedBlogPost) setSelectedBlogPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceName?: string) => {
    setConsultationService(serviceName || 'General Consultation');
    setConsultationModalOpen(true);
  };

  const handleOpenLegal = (topic: string) => {
    setLegalTopic(topic);
    setLegalModalOpen(true);
  };

  const handleSelectTour = (tour: TourPackage | null) => {
    setSelectedTour(tour);
    if (tour && currentRoute !== 'tours') {
      setCurrentRoute('tours');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProperty = (property: PropertyListing | null) => {
    setSelectedProperty(property);
    if (property && currentRoute !== 'property') {
      setCurrentRoute('property');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlogPost = (post: BlogPost | null) => {
    setSelectedBlogPost(post);
    if (post && currentRoute !== 'blog') {
      setCurrentRoute('blog');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateSiteSettings = (settings: SiteSettings) => {
    StorageService.saveSettings(settings);
    setSiteSettings(settings);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#1A1A1A] antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Header & Main Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        siteSettings={siteSettings}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            siteSettings={siteSettings}
            tours={tours}
            properties={properties}
            blogPosts={blogPosts}
            affiliatePartners={affiliatePartners}
            onSelectTour={handleSelectTour}
            onSelectProperty={handleSelectProperty}
            onSelectPost={handleSelectBlogPost}
          />
        )}

        {currentRoute === 'tours' && (
          <ToursPage
            tours={tours}
            selectedTour={selectedTour}
            onSelectTour={handleSelectTour}
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'visa' && (
          <VisaPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'trc' && (
          <TRCPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {(currentRoute === 'property' || currentRoute === 'property-investment') && (
          <PropertyPage
            properties={properties}
            selectedProperty={selectedProperty}
            onSelectProperty={handleSelectProperty}
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'company-registration' && (
          <CompanyRegistrationPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'business-consultancy' && (
          <BusinessConsultancyPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'student-services' && (
          <StudentServicesPage
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'affiliate-travel' && (
          <AffiliateTravelPage
            partners={affiliatePartners}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'blog' && (
          <BlogPage
            posts={blogPosts}
            selectedPost={selectedBlogPost}
            onSelectPost={handleSelectBlogPost}
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'about' && (
          <div className="py-16 bg-[#F8F9FA]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-6">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
                  About SIRFPK
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F172A]">
                  Bridging Pakistan and Azerbaijan for Tourism, Residency & Commerce
                </h1>
                <p className="text-sm text-slate-600 leading-relaxed">
                  SIRFPK (www.sirfpk.com) is the premier dedicated cross-border consultancy and travel platform facilitating seamless travel itineraries, e-Visa assistance, Temporary Residence Permits (TRC), high-yield Baku real estate acquisitions, and company registration for Pakistani citizens, expatriates, and international investors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-center">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-2xl font-black text-amber-700 font-serif">4+</span>
                    <span className="text-xs text-slate-600 block mt-1">Direct Support Lines</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-2xl font-black text-emerald-700 font-serif">100%</span>
                    <span className="text-xs text-slate-600 block mt-1">Compliance Focus</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-2xl font-black text-sky-700 font-serif">Baku</span>
                    <span className="text-xs text-slate-600 block mt-1">Local Operational Team</span>
                  </div>
                </div>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => handleOpenConsultation('General Inquiry')}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-xs"
                  >
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            siteSettings={siteSettings}
          />
        )}

        {currentRoute === 'admin' && (
          <AdminPanel
            siteSettings={siteSettings}
            onUpdateSiteSettings={handleUpdateSiteSettings}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        siteSettings={siteSettings}
        onOpenConsultation={handleOpenConsultation}
        onOpenLegal={handleOpenLegal}
      />

      {/* Floating WhatsApp & Direct Desk Trigger */}
      <FloatingContact
        siteSettings={siteSettings}
        onOpenConsultation={() => handleOpenConsultation('Quick Contact Inquiry')}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialService={consultationService}
        siteSettings={siteSettings}
      />

      {/* Legal & Disclaimers Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        topic={legalTopic}
        onClose={() => setLegalModalOpen(false)}
        siteSettings={siteSettings}
      />
    </div>
  );
}
