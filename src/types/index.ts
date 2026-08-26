export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string; // e.g. "4 Nights / 5 Days"
  nights: number;
  days: number;
  startingPrice: number;
  currency: string;
  groupSize: string;
  hotel: string;
  hotelRating: number;
  roomType: string;
  meals: string;
  transport: string;
  airportTransfer: string;
  guide: string;
  entryTickets: string;
  category: 'baku' | 'shahdag' | 'gabala' | 'quba' | 'gobustan' | 'luxury' | 'budget' | 'honeymoon' | 'family' | 'daytrips';
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  inclusions: string[];
  exclusions: string[];
  importantInfo: string[];
  itinerary: ItineraryDay[];
  featured?: boolean;
  published: boolean;
  samplePriceDisclaimer?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  description: string;
  highlights: string[];
  mealsIncluded?: string;
  accommodation?: string;
  location?: string;
}

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  district: string;
  propertyType: 'apartment' | 'luxury-apartment' | 'sea-view' | 'new-development' | 'investment' | 'commercial' | 'land' | 'rental';
  price: number;
  currency: string;
  priceNote?: string; // e.g. "Starting From"
  bedrooms: number;
  bathrooms: number;
  sizeSqM: number;
  floor?: string;
  building?: string;
  description: string;
  facilities: string[];
  images: string[];
  investmentNotes?: string;
  rentalYieldEstimate?: string;
  completionYear?: string;
  featured?: boolean;
  published: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Azerbaijan Travel' | 'Baku Travel Guide' | 'Azerbaijan Visa' | 'Azerbaijan TRC' | 'Azerbaijan Property' | 'Property Investment' | 'Company Registration' | 'Study in Azerbaijan' | 'Travel Tips' | 'eSIM Guide';
  author: string;
  date: string;
  readTime: string;
  featuredImage: string;
  excerpt: string;
  content: string[]; // paragraph list or markdown
  faq?: { question: string; answer: string }[];
  tags: string[];
  published: boolean;
}

export interface AffiliatePartner {
  id: string;
  name: string;
  category: 'hotels' | 'flights' | 'esim' | 'activities' | 'tours' | 'transfers' | 'car-rentals' | 'insurance' | 'all-in-one';
  logoText: string;
  badge?: string;
  description: string;
  officialUrl: string;
  affiliateUrl: string;
  trackingUrl?: string;
  affiliateId?: string;
  referralCode?: string;
  buttonText: string;
  status: 'active' | 'configured' | 'pending';
  openInNewTab: boolean;
  trackingNotes?: string;
}

export interface DestinationInfo {
  id: string;
  name: string;
  tagline: string;
  image: string;
  shortDescription: string;
  highlights: string[];
  bestTimeToVisit: string;
  keyActivities: string[];
  distanceFromBaku: string;
  galleryImages?: { title: string; image: string }[];
}

export interface ContactInquiry {
  id: string;
  fullName: string;
  country: string;
  whatsappNumber: string;
  email: string;
  serviceRequired: string;
  travelDate?: string;
  numberOfTravelers?: string;
  budget?: string;
  message: string;
  preferredContactMethod: 'whatsapp' | 'call' | 'email';
  createdAt: string;
  status: 'new' | 'in_progress' | 'contacted' | 'completed';
  notes?: string;
}

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  category: string;
  destination?: string;
  altText: string;
  seoDescription?: string;
  source: 'uploaded' | 'stock' | 'generated' | 'client';
  copyright: string;
  hasWatermark: boolean;
  createdAt: string;
}

export interface SiteSettings {
  brandName: string;
  websiteDomain: string;
  tagline: string;
  secondaryTagline: string;
  phoneNumbers: {
    uk: string;
    pk: string;
    aze1: string;
    aze2: string;
  };
  emails: {
    primary: string;
    consultation: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    tiktok: string;
    youtube: string;
    linkedin: string;
    pinterest: string;
  };
  analytics: {
    googleAnalyticsId: string;
    googleSearchConsoleVerification: string;
    metaPixelId: string;
    pinterestTagId: string;
  };
  disclaimers: {
    visa: string;
    trc: string;
    property: string;
    affiliate: string;
    travel: string;
  };
  paymentDetails: {
    payoneerEmail: string;
    ublAccountNumber: string;
    ublAccountTitle: string;
    ublBranchCode: string;
    additionalNote: string;
  };
}

export type PageRoute =
  | 'home'
  | 'tours'
  | 'visa'
  | 'trc'
  | 'property'
  | 'property-investment'
  | 'company-registration'
  | 'business-consultancy'
  | 'student-services'
  | 'affiliate-travel'
  | 'blog'
  | 'about'
  | 'contact'
  | 'admin';
