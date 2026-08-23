import React from 'react';
import { PageRoute, TourPackage, PropertyListing, BlogPost, AffiliatePartner, SiteSettings } from '../../types';
import { HeroSection } from '../home/HeroSection';
import { HeroServiceCards } from '../home/HeroServiceCards';
import { PopularToursSection } from '../home/PopularToursSection';
import { WhyChooseSection } from '../home/WhyChooseSection';
import { DestinationsGrid } from '../home/DestinationsGrid';
import { TransportPricingSection } from '../home/TransportPricingSection';
import { ResidencyHighlight } from '../home/ResidencyHighlight';
import { PropertyInvestmentHighlight } from '../home/PropertyInvestmentHighlight';
import { CompanyRegistrationHighlight } from '../home/CompanyRegistrationHighlight';
import { StudentServicesHighlight } from '../home/StudentServicesHighlight';
import { AffiliateMarketplaceHighlight } from '../home/AffiliateMarketplaceHighlight';
import { AiraloEsimSection } from '../home/AiraloEsimSection';
import { PinterestInspirationSection } from '../home/PinterestInspirationSection';
import { BlogPreviewSection } from '../home/BlogPreviewSection';
import { TestimonialsSection } from '../home/TestimonialsSection';
import { HomeCTA } from '../home/HomeCTA';
import { ContactQuickSection } from '../home/ContactQuickSection';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: (service?: string) => void;
  siteSettings: SiteSettings;
  tours: TourPackage[];
  properties: PropertyListing[];
  blogPosts: BlogPost[];
  affiliatePartners: AffiliatePartner[];
  onSelectTour: (tour: TourPackage) => void;
  onSelectProperty: (property: PropertyListing) => void;
  onSelectPost: (post: BlogPost) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  siteSettings,
  tours,
  properties,
  blogPosts,
  affiliatePartners,
  onSelectTour,
  onSelectProperty,
  onSelectPost,
}) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* 1. Hero Section */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
        siteSettings={siteSettings}
      />

      {/* 2. Main 6 Service Cards */}
      <HeroServiceCards onNavigate={onNavigate} />

      {/* 3. Popular Azerbaijan Tours */}
      <PopularToursSection
        tours={tours}
        onSelectTour={onSelectTour}
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 4. Why Choose SIRFPK */}
      <WhyChooseSection />

      {/* 5. Azerbaijan Destinations */}
      <DestinationsGrid
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 5a. Transport & Day Trip Pricing */}
      <TransportPricingSection />

      {/* 6. TRC & Residency Highlight */}
      <ResidencyHighlight
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Property Investment Highlight */}
      <PropertyInvestmentHighlight
        properties={properties}
        onSelectProperty={onSelectProperty}
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. Company Registration Highlight */}
      <CompanyRegistrationHighlight
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 9. Student Services Highlight */}
      <StudentServicesHighlight
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 10. Affiliate Travel Marketplace */}
      <AffiliateMarketplaceHighlight
        partners={affiliatePartners}
        onNavigate={onNavigate}
      />

      {/* 11. Airalo eSIM Section */}
      <AiraloEsimSection />

      {/* 12. Pinterest / Visual Inspiration */}
      <PinterestInspirationSection onNavigate={onNavigate} />

      {/* 13. Blog Knowledge Hub */}
      <BlogPreviewSection
        posts={blogPosts}
        onSelectPost={onSelectPost}
        onNavigate={onNavigate}
      />

      {/* 14. Testimonials */}
      <TestimonialsSection />

      {/* 15. Direct Contact Desks */}
      <ContactQuickSection siteSettings={siteSettings} />

      {/* 16. Final Consultation CTA */}
      <HomeCTA
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />
    </div>
  );
};
