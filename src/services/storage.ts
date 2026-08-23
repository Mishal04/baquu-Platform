import {
  TourPackage,
  PropertyListing,
  BlogPost,
  AffiliatePartner,
  ContactInquiry,
  MediaItem,
  SiteSettings,
} from '../types';
import {
  INITIAL_SITE_SETTINGS,
  INITIAL_TOURS,
  INITIAL_PROPERTIES,
  INITIAL_BLOG_POSTS,
  INITIAL_AFFILIATE_PARTNERS,
} from '../data/initialData';

const KEYS = {
  SETTINGS: 'sirfpk_settings_v1',
  TOURS: 'sirfpk_tours_v1',
  PROPERTIES: 'sirfpk_properties_v1',
  BLOGS: 'sirfpk_blogs_v1',
  AFFILIATES: 'sirfpk_affiliates_v1',
  INQUIRIES: 'sirfpk_inquiries_v1',
  MEDIA: 'sirfpk_media_v1',
};

// Initial media items
const INITIAL_MEDIA: MediaItem[] = [
  {
    id: 'm1',
    title: 'Baku Flame Towers & Caspian Coastline',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flame_towers_from_Baku_boulevard.JPG/1280px-Flame_towers_from_Baku_boulevard.JPG',
    category: 'Tours',
    destination: 'Baku',
    altText: 'Baku Flame Towers and Caspian Sea promenade - SIRFPK www.sirfpk.com',
    source: 'stock',
    copyright: 'Licensed for SIRFPK Promotional Use',
    hasWatermark: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'm2',
    title: 'Shahdag Mountain Alpine Resort',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Shahdag01.jpg/1280px-Shahdag01.jpg',
    category: 'Tours',
    destination: 'Shahdag',
    altText: 'Shahdag Mountain Resort Caucasus Azerbaijan - SIRFPK www.sirfpk.com',
    source: 'stock',
    copyright: 'Licensed for SIRFPK Promotional Use',
    hasWatermark: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'm3',
    title: 'Baku White City Luxury Real Estate',
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    category: 'Property',
    destination: 'Baku White City',
    altText: 'Luxury modern sea view residential building Baku - SIRFPK www.sirfpk.com',
    source: 'stock',
    copyright: 'Licensed for SIRFPK Promotional Use',
    hasWatermark: true,
    createdAt: new Date().toISOString(),
  }
];

export const StorageService = {
  // Settings
  getSettings(): SiteSettings {
    try {
      const data = localStorage.getItem(KEYS.SETTINGS);
      return data ? JSON.parse(data) : INITIAL_SITE_SETTINGS;
    } catch {
      return INITIAL_SITE_SETTINGS;
    }
  },
  saveSettings(settings: SiteSettings): void {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
  },

  // Tours
  getTours(): TourPackage[] {
    try {
      const data = localStorage.getItem(KEYS.TOURS);
      return data ? JSON.parse(data) : INITIAL_TOURS;
    } catch {
      return INITIAL_TOURS;
    }
  },
  saveTours(tours: TourPackage[]): void {
    localStorage.setItem(KEYS.TOURS, JSON.stringify(tours));
  },
  getTourById(id: string): TourPackage | undefined {
    return this.getTours().find((t) => t.id === id);
  },
  saveTour(tour: TourPackage): void {
    const list = this.getTours();
    const index = list.findIndex((t) => t.id === tour.id);
    if (index >= 0) {
      list[index] = tour;
    } else {
      list.unshift(tour);
    }
    this.saveTours(list);
  },
  deleteTour(id: string): void {
    const list = this.getTours().filter((t) => t.id !== id);
    this.saveTours(list);
  },

  // Properties
  getProperties(): PropertyListing[] {
    try {
      const data = localStorage.getItem(KEYS.PROPERTIES);
      return data ? JSON.parse(data) : INITIAL_PROPERTIES;
    } catch {
      return INITIAL_PROPERTIES;
    }
  },
  saveProperties(props: PropertyListing[]): void {
    localStorage.setItem(KEYS.PROPERTIES, JSON.stringify(props));
  },
  getPropertyById(id: string): PropertyListing | undefined {
    return this.getProperties().find((p) => p.id === id);
  },
  saveProperty(prop: PropertyListing): void {
    const list = this.getProperties();
    const idx = list.findIndex((p) => p.id === prop.id);
    if (idx >= 0) {
      list[idx] = prop;
    } else {
      list.unshift(prop);
    }
    this.saveProperties(list);
  },
  deleteProperty(id: string): void {
    const list = this.getProperties().filter((p) => p.id !== id);
    this.saveProperties(list);
  },

  // Blog Posts
  getBlogPosts(): BlogPost[] {
    try {
      const data = localStorage.getItem(KEYS.BLOGS);
      return data ? JSON.parse(data) : INITIAL_BLOG_POSTS;
    } catch {
      return INITIAL_BLOG_POSTS;
    }
  },
  saveBlogPosts(posts: BlogPost[]): void {
    localStorage.setItem(KEYS.BLOGS, JSON.stringify(posts));
  },
  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return this.getBlogPosts().find((b) => b.slug === slug || b.id === slug);
  },
  saveBlogPost(post: BlogPost): void {
    const list = this.getBlogPosts();
    const idx = list.findIndex((b) => b.id === post.id);
    if (idx >= 0) {
      list[idx] = post;
    } else {
      list.unshift(post);
    }
    this.saveBlogPosts(list);
  },
  deleteBlogPost(id: string): void {
    const list = this.getBlogPosts().filter((b) => b.id !== id);
    this.saveBlogPosts(list);
  },

  // Affiliate Partners
  getAffiliatePartners(): AffiliatePartner[] {
    try {
      const data = localStorage.getItem(KEYS.AFFILIATES);
      return data ? JSON.parse(data) : INITIAL_AFFILIATE_PARTNERS;
    } catch {
      return INITIAL_AFFILIATE_PARTNERS;
    }
  },
  saveAffiliatePartners(partners: AffiliatePartner[]): void {
    localStorage.setItem(KEYS.AFFILIATES, JSON.stringify(partners));
  },
  getAffiliateLink(partnerNameOrId: string): string {
    const list = this.getAffiliatePartners();
    const partner = list.find(
      (p) =>
        p.id.toLowerCase() === partnerNameOrId.toLowerCase() ||
        p.name.toLowerCase().includes(partnerNameOrId.toLowerCase())
    );
    if (partner) {
      return partner.affiliateUrl || partner.officialUrl;
    }
    return 'https://www.sirfpk.com';
  },
  saveAffiliatePartner(partner: AffiliatePartner): void {
    const list = this.getAffiliatePartners();
    const idx = list.findIndex((p) => p.id === partner.id);
    if (idx >= 0) {
      list[idx] = partner;
    } else {
      list.unshift(partner);
    }
    this.saveAffiliatePartners(list);
  },
  deleteAffiliatePartner(id: string): void {
    const list = this.getAffiliatePartners().filter((p) => p.id !== id);
    this.saveAffiliatePartners(list);
  },

  // Inquiries
  getInquiries(): ContactInquiry[] {
    try {
      const data = localStorage.getItem(KEYS.INQUIRIES);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },
  saveInquiry(inquiry: Omit<ContactInquiry, 'id' | 'createdAt' | 'status'>): ContactInquiry {
    const newInquiry: ContactInquiry = {
      ...inquiry,
      id: 'inq_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      createdAt: new Date().toISOString(),
      status: 'new',
    };
    const list = this.getInquiries();
    list.unshift(newInquiry);
    localStorage.setItem(KEYS.INQUIRIES, JSON.stringify(list));
    return newInquiry;
  },
  updateInquiryStatus(id: string, status: ContactInquiry['status'], notes?: string): void {
    const list = this.getInquiries();
    const item = list.find((i) => i.id === id);
    if (item) {
      item.status = status;
      if (notes !== undefined) item.notes = notes;
      localStorage.setItem(KEYS.INQUIRIES, JSON.stringify(list));
    }
  },
  deleteInquiry(id: string): void {
    const list = this.getInquiries().filter((i) => i.id !== id);
    localStorage.setItem(KEYS.INQUIRIES, JSON.stringify(list));
  },

  // Media Library
  getMediaItems(): MediaItem[] {
    try {
      const data = localStorage.getItem(KEYS.MEDIA);
      return data ? JSON.parse(data) : INITIAL_MEDIA;
    } catch {
      return INITIAL_MEDIA;
    }
  },
  saveMediaItem(item: MediaItem): void {
    const list = this.getMediaItems();
    const idx = list.findIndex((m) => m.id === item.id);
    if (idx >= 0) {
      list[idx] = item;
    } else {
      list.unshift(item);
    }
    localStorage.setItem(KEYS.MEDIA, JSON.stringify(list));
  },
  deleteMediaItem(id: string): void {
    const list = this.getMediaItems().filter((m) => m.id !== id);
    localStorage.setItem(KEYS.MEDIA, JSON.stringify(list));
  },

  // Reset to sample defaults
  resetToDefaults(): void {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(INITIAL_SITE_SETTINGS));
    localStorage.setItem(KEYS.TOURS, JSON.stringify(INITIAL_TOURS));
    localStorage.setItem(KEYS.PROPERTIES, JSON.stringify(INITIAL_PROPERTIES));
    localStorage.setItem(KEYS.BLOGS, JSON.stringify(INITIAL_BLOG_POSTS));
    localStorage.setItem(KEYS.AFFILIATES, JSON.stringify(INITIAL_AFFILIATE_PARTNERS));
    localStorage.setItem(KEYS.MEDIA, JSON.stringify(INITIAL_MEDIA));
  },
};
