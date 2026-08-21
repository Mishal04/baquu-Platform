import { TourPackage, PropertyListing, BlogPost, AffiliatePartner, DestinationInfo, SiteSettings } from '../types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  brandName: 'SIRFPK',
  websiteDomain: 'www.sirfpk.com',
  tagline: 'Connecting Pakistan with Azerbaijan',
  secondaryTagline: 'Travel. Live. Invest. Build Your Future.',
  phoneNumbers: {
    uk: '+447462273257',
    pk: '+923009111130',
    aze1: '+994504517493',
    aze2: '+9940509209003',
  },
  emails: {
    primary: 'info@sirfpk.com',
    consultation: 'consult@sirfpk.com',
  },
  socialLinks: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    linkedin: '',
    pinterest: '',
  },
  analytics: {
    googleAnalyticsId: '',
    googleSearchConsoleVerification: '',
    metaPixelId: '',
    pinterestTagId: '',
  },
  disclaimers: {
    visa: 'Visa decisions are made solely by the relevant government authorities. SIRFPK provides consultancy, documentation review and application assistance and does not guarantee visa approval.',
    trc: 'Residence permit decisions are made strictly by the State Migration Service of the Republic of Azerbaijan. SIRFPK provides consultancy and application assistance and does not guarantee approval.',
    property: 'Property information is subject to independent verification. Buyers should conduct independent legal, financial and property due diligence prior to transaction.',
    affiliate: 'Some links on this website may be affiliate links. SIRFPK may receive a commission from qualifying purchases through our partner links, at no additional cost to you.',
    travel: 'Tour prices, hotel availability, seasonal excursions and flight inclusions may vary based on dates and traveler requirements. Final confirmation is provided prior to booking.'
  }
};

export const INITIAL_TOURS: TourPackage[] = [
  {
    id: 'baku-complete-10d9n-pkr',
    title: 'Best Baku Tour Package from Pakistan — 10 Days / 9 Nights',
    destination: 'Baku, Shahdag, Absheron, Gobustan',
    duration: '9 Nights / 10 Days',
    nights: 9,
    days: 10,
    startingPrice: 280000,
    currency: 'PKR',
    groupSize: 'Min 2 Persons / Special Family & Group Rates Available',
    hotel: '4-Star Central Baku Hotel (e.g., Central Park / Winter Park / Parkway Inn)',
    hotelRating: 4,
    roomType: 'Deluxe Twin / Double Room with Daily Breakfast',
    meals: 'Daily Buffet Breakfast',
    transport: 'AC Luxury Mercedes Sprinter / Sedan for all scheduled excursions',
    airportTransfer: 'VIP Private Airport Pick & Drop (Heydar Aliyev Int. Airport GYD)',
    guide: 'Professional English & Urdu Speaking Licensed Guide',
    entryTickets: 'Gobustan National Park, Fire Temple (Ateshgah), Yanardag, Shahdag Cable Car included',
    category: 'family',
    featured: true,
    published: true,
    shortDescription: 'Discover the perfect blend of modern luxury, ancient heritage, vibrant culture, and Caucasus mountain scenery on our complete 10-day signature tour from Pakistan.',
    fullDescription: 'Discover the perfect blend of modern luxury, ancient heritage, vibrant culture, and breathtaking Caucasus mountain beauty. This comprehensive 10-day tour package from Pakistan covers historic Baku Old City, the pristine Shahdag Mountain Resort, the mystical Absheron Peninsula fire temples, and prehistoric Gobustan rock petroglyphs and bubbling mud volcanoes. Includes 4-star city-center hotel accommodation, return airfare assistance, Azerbaijan visa coordination, daily breakfast, and private luxury transport with professional English/Urdu speaking guides.',
    image: 'https://images.unsplash.com/photo-1579606032822-e42777085a3a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579606032822-e42777085a3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80'
    ],
    inclusions: [
      'Return Air Ticket from Pakistan',
      'Azerbaijan Visa Assistance',
      '9 Nights 4-Star Hotel Accommodation',
      'Daily Breakfast',
      'Airport Transfers',
      'Guided Tours',
      'Baku City Tour',
      'Shahdag Tour',
      'Absheron & Yanardag Tour',
      'Gobustan & Mud Volcanoes Tour',
      'Transportation during scheduled tours'
    ],
    exclusions: [
      'Lunches and Dinners unless specified',
      'Personal expenses, shopping, laundry, and hotel room service',
      'Optional ski gear rental and adventure sports at Shahdag',
      'Travel Insurance (available upon request)'
    ],
    importantInfo: [
      'Package price, inclusions and availability should be confirmed before booking.',
      'Prices shown are indicative starting rates per person on twin-sharing basis from Pakistan.',
      'Special family suites and quad sharing arrangements available on request.'
    ],
    samplePriceDisclaimer: 'Package price, inclusions and availability should be confirmed before booking.',
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Baku & Hotel Check-in',
        description: 'Arrival at Heydar Aliyev International Airport (GYD). Airport meet & greet by our representative and private transfer to your 4-star hotel in central Baku. Check-in, relax, and enjoy an evening walk around Nizami Street.',
        highlights: ['Airport Meet & Greet', 'Private Airport Transfer', '4-Star Hotel Check-in & Rest'],
        mealsIncluded: 'Breakfast (from Day 2)',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Baku City Center'
      },
      {
        dayNumber: 2,
        title: 'Baku City Tour & Historic Landmarks',
        description: 'Comprehensive guided city tour visiting Highland Park (Martyrs\' Lane) with panoramic vistas of Baku Bay and the Flame Towers, Baku Boulevard, UNESCO-listed Old City (Icherisheher), 12th-century Maiden Tower, Palace of the Shirvanshahs, and bustling Nizami Street.',
        highlights: ['Highland Park & Flame Towers', 'Martyrs\' Lane & Baku Bay View', 'UNESCO Old City (Icherisheher)', 'Maiden Tower & Shirvanshah\'s Palace', 'Nizami Street & Fountain Square'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Baku'
      },
      {
        dayNumber: 3,
        title: 'Ancient Baku & Cultural Experience',
        description: 'Deep dive into Baku\'s rich heritage and artisan culture. Explore authentic carpet weaving workshops, medieval alleys, antique bazaars, and traditional handicraft markets with a complimentary Azerbaijani tea session.',
        highlights: ['Old City Cultural Walking Tour', 'Handmade Carpet Workshops', 'Antique Bazaars & Local Crafts', 'Traditional Tea & Sweet Experience'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Old City Baku'
      },
      {
        dayNumber: 4,
        title: 'Shahdag Mountain Tour',
        description: 'Scenic full-day excursion through the Caucasus mountains to Shahdag Mountain Resort. Enjoy pristine alpine air, ride the panoramic cable car to 2,351m altitude, and experience thrilling alpine roller coaster or winter snow activities.',
        highlights: ['Scenic Caucasus Mountain Drive', 'Shahdag Mountain Resort', 'Panoramic Cable Car Pass', 'Alpine Coaster & Mountain Scenery'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Shahdag'
      },
      {
        dayNumber: 5,
        title: 'Absheron & Yanardag Tour',
        description: 'Discover the mystical Land of Fire across the Absheron Peninsula. Visit the 17th-century Ateshgah Fire Temple in Surakhani and the world-renowned burning mountain at Yanardag. Photo stop at the futuristic Heydar Aliyev Centre.',
        highlights: ['Ateshgah Fire Temple (Surakhani)', 'Yanardag (Burning Mountain)', 'Heydar Aliyev Centre (Photo Stop)'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Absheron Peninsula'
      },
      {
        dayNumber: 6,
        title: 'Baku Boulevard & Leisure Day',
        description: 'Relaxed leisure day on the Caspian waterfront. Stroll along the scenic Baku Boulevard, visit Little Venice, enjoy waterfront dining, take an optional Caspian boat cruise, or explore at your own pace.',
        highlights: ['Baku Boulevard Seaside Promenade', 'Little Venice Canals', 'Optional Caspian Boat Cruise', 'Leisure & Waterfront Cafes'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Baku'
      },
      {
        dayNumber: 7,
        title: 'Gobustan & Mud Volcanoes Excursion',
        description: 'Travel south of Baku to UNESCO-listed Gobustan National Historical-Artistic Reserve to see 40,000-year-old rock engravings. Take Soviet 4x4 vehicles to the bubbling mud volcanoes, followed by a visit to the historic Bibi-Heybat Mosque.',
        highlights: ['UNESCO Gobustan Petroglyphs', '4x4 Off-road Mud Volcanoes Safari', 'Prehistoric Gaval Dash Musical Stone', 'Bibi-Heybat Mosque'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Gobustan'
      },
      {
        dayNumber: 8,
        title: 'Shopping & Free Exploration',
        description: 'Dedicated shopping and exploration day. Visit 28 Mall, Park Bulvar, Port Baku Mall, and Yashil Bazaar (Green Market) to shop for Caspian caviar, Azerbaijani saffron, dried fruits, tea, and luxury goods.',
        highlights: ['Nizami Street Boutiques', '28 Mall & Park Bulvar Shopping', 'Yashil Bazaar (Green Market) Caviar & Spices'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Baku City'
      },
      {
        dayNumber: 9,
        title: 'Baku Highlights & Farewell',
        description: 'Revisit your favourite spots across Baku for photography, leisurely souvenir hunting, and Caspian views. In the evening, enjoy a special farewell dinner featuring traditional Azerbaijani delicacies and live music.',
        highlights: ['City Highlights & Photography', 'Last-Minute Shopping & Souvenirs', 'Farewell Dinner & Cultural Evening'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Baku'
      },
      {
        dayNumber: 10,
        title: 'Departure Transfer',
        description: 'Enjoy your final breakfast at the hotel followed by check-out. Private transfer to Heydar Aliyev International Airport (GYD) for your scheduled departure flight back to Pakistan with unforgettable memories.',
        highlights: ['Hotel Check-out', 'Private Airport Transfer', 'Departure Flight to Pakistan'],
        mealsIncluded: 'Buffet Breakfast',
        location: 'Baku Airport'
      }
    ]
  },
  {
    id: 'aze-explorer-4n5d',
    title: 'Azerbaijan Explorer — 4 Nights / 5 Days',
    destination: 'Baku, Gobustan & Absheron',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    startingPrice: 380,
    currency: 'USD',
    groupSize: 'Min 2 Persons / Group Rates Available',
    hotel: '4-Star Central Baku Hotel (e.g., Central Park / Parkway Inn)',
    hotelRating: 4,
    roomType: 'Deluxe Twin / Double with Daily Breakfast',
    meals: 'Daily Buffet Breakfast + 1 Traditional Welcome Dinner',
    transport: 'AC Luxury Mercedes Sprinter / Sedan for all transfers',
    airportTransfer: 'VIP Private Airport Pick & Drop (Heydar Aliyev Int. Airport GYD)',
    guide: 'Professional English & Urdu Speaking Licensed Guide',
    entryTickets: 'Gobustan National Park, Fire Temple (Ateshgah), Yanardag included',
    category: 'baku',
    featured: true,
    published: true,
    shortDescription: 'The quintessential Azerbaijan journey covering historic Icherisheher, modern Flame Towers, ancient Gobustan petroglyphs and eternal flames of Yanardag.',
    fullDescription: 'Discover the harmonious blend of ancient Silk Road heritage and futuristic architecture in Baku. Our signature 5-day package provides private airport transfers, 4-star city-center accommodation, guided tours of Old City Baku, Gobustan Rock Art, Mud Volcanoes, Ateshgah Fire Temple, and panoramic Caspian Sea views.',
    image: 'https://images.unsplash.com/photo-1579606032822-e42777085a3a?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579606032822-e42777085a3a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1000&q=80'
    ],
    inclusions: [
      '4 Nights Accommodation in 4-Star Baku Hotel with daily breakfast',
      'Private Airport transfers (Airport - Hotel - Airport)',
      'Full-day Baku Old City & Modern Boulevard Tour',
      'Full-day Gobustan Rock Art & Mud Volcanoes Excursion',
      'Full-day Absheron Peninsula (Ateshgah Fire Temple & Yanardag Burning Mountain)',
      'Comfortable Air-conditioned vehicle throughout itinerary',
      'Licensed English/Urdu speaking professional guide',
      'Gobustan & Absheron entry tickets',
      'Daily 2 bottles of mineral water per person'
    ],
    exclusions: [
      'International Airfare (Pakistan ↔ Baku flights)',
      'Azerbaijan e-Visa fees (can be assisted separately)',
      'Lunches and Dinners unless specified',
      'Personal expenses, laundry, and hotel incidentals',
      'Travel Insurance (available upon request)'
    ],
    importantInfo: [
      'Prices shown are sample starting rates per person on double-sharing basis and subject to seasonal hotel rates.',
      'Customized extensions to Shahdag or Gabala can easily be added upon request.',
      'Special discounted family packages available for 4+ passengers.'
    ],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Baku & VIP Airport Transfer',
        description: 'Welcome to Azerbaijan! Upon arrival at Heydar Aliyev International Airport (GYD), our representative will greet you at the arrival terminal with a personalized SIRFPK nameboard. Enjoy a comfortable private transfer to your 4-star hotel in central Baku. After check-in, spend the evening strolling along Nizami Street (Torgovaya) and enjoying your first taste of Azerbaijani cuisine.',
        highlights: ['VIP Airport Meet & Greet', 'Hotel Check-in & Rest', 'Evening Walk at Nizami Street & Fountain Square'],
        mealsIncluded: 'Breakfast (from Day 2)',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Baku City Center'
      },
      {
        dayNumber: 2,
        title: 'Old City (Icherisheher), Maiden Tower & Modern Baku Panorama',
        description: 'Begin your full-day city exploration in UNESCO-listed Icherisheher (Old City). Explore the 12th-century Maiden Tower, Palace of the Shirvanshahs, narrow medieval alleys, and antique carpet workshops. In the afternoon, visit Highland Park (Dagustu Park) for the most breathtaking panoramic view of Baku Bay and the iconic Flame Towers, followed by a leisurely walk on Baku Boulevard and Little Venice.',
        highlights: ['Maiden Tower & Shirvanshah Palace', 'Highland Park Panoramic View', 'Baku Boulevard & Little Venice', 'Flame Towers Photo Stop'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Baku'
      },
      {
        dayNumber: 3,
        title: 'Gobustan Rock Art & Active Mud Volcanoes Tour',
        description: 'Journey south of Baku to Gobustan National Historical-Artistic Reserve, home to over 6,000 prehistoric rock carvings dating back 40,000 years. Next, take local Soviet 4x4 Lada taxis to visit the world-famous bubbling Mud Volcanoes (Azerbaijan hosts over half the world’s mud volcanoes!). On the return route, stop by the historic Bibi-Heybat Mosque and Baku Ferris Wheel.',
        highlights: ['UNESCO Gobustan Petroglyphs', 'Off-road 4x4 Mud Volcanoes Adventure', 'Bibi-Heybat Mosque', 'Caspian Coastline Drive'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Gobustan'
      },
      {
        dayNumber: 4,
        title: 'Absheron Peninsula: Ateshgah Fire Temple & Yanardag Burning Mountain',
        description: 'Explore the mystical land of fire on the Absheron Peninsula. Visit the 17th-century Ateshgah Fire Temple in Surakhani, once venerated by Hindu, Sikh, and Zoroastrian pilgrims traveling along Silk Road trade routes. Next, witness Yanardag (The Burning Mountain), a natural gas fire that has blazed continuously on a hillside for centuries. In the afternoon, visit the architectural masterpiece Heydar Aliyev Center designed by Zaha Hadid.',
        highlights: ['Ateshgah Fire Temple', 'Yanardag Burning Mountain', 'Heydar Aliyev Center (Photo Stop)', 'Local Sweet & Tea Experience'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Absheron & Baku'
      },
      {
        dayNumber: 5,
        title: 'Souvenir Shopping & Airport Departure',
        description: 'Enjoy breakfast at your hotel followed by leisure time for last-minute shopping at Yashil Bazaar (Green Market) for fresh Caspian caviar, Azerbaijani dried fruits, spices, tea, and souvenirs. Check out from the hotel and board your private vehicle for transfer to Heydar Aliyev International Airport for your departure flight back home.',
        highlights: ['Yashil Bazaar Traditional Market', 'Hotel Check-out', 'Airport Drop-off with memorable memories'],
        mealsIncluded: 'Buffet Breakfast',
        location: 'Baku Airport'
      }
    ]
  },
  {
    id: 'shahdag-ski-adventure-4d',
    title: 'Shahdag Mountain Resort & Caucasus Nature — 3N / 4D',
    destination: 'Shahdag & Quba',
    duration: '3 Nights / 4 Days',
    nights: 3,
    days: 4,
    startingPrice: 420,
    currency: 'USD',
    groupSize: 'Min 2 Persons',
    hotel: 'Shahdag Mountain Resort / Park Chalet or Quba Palace Hotel',
    hotelRating: 5,
    roomType: 'Mountain View Deluxe Room',
    meals: 'Daily Breakfast',
    transport: 'Private 4WD / AC Luxury Van',
    airportTransfer: 'Included from Baku Airport',
    guide: 'English / Urdu Speaking Guide',
    entryTickets: 'Shahdag Cable Car pass included',
    category: 'shahdag',
    featured: true,
    published: true,
    shortDescription: 'Experience the pristine beauty of the Greater Caucasus mountains, world-class ski slopes in winter, alpine coaster, cable cars, and lush Quba apple orchards.',
    fullDescription: 'Escape to Azerbaijan’s premier mountain paradise. Whether you want winter skiing and snowboarding or summer alpine hiking, roller-coaster rides, and quad biking, Shahdag Resort delivers unforgettable luxury and natural beauty.',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80'
    ],
    inclusions: [
      '3 Nights in Luxury Mountain Resort with breakfast',
      'Private transfers between Baku and Shahdag / Quba',
      'Shahdag Cable Car Panoramic Pass',
      'Tour of Quba Red Settlement (Krasnaya Sloboda) & Carpet Workshop',
      'English & Urdu speaking professional coordinator'
    ],
    exclusions: ['Ski gear rental & ski pass (optional on-site)', 'Personal meals and expenses', 'Airfare'],
    importantInfo: ['Winter season operates ski activities from Dec-March; Summer season offers paragliding, alpine coaster, hiking.'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Baku to Quba & Shahdag Mountain Ascent',
        description: 'Depart Baku in the morning driving north along the Caspian shoreline towards Quba and the Caucasus peaks. Stop at Beshbarmag Sacred Mountain and scenic Gachresh forest before ascending to Shahdag Mountain Resort. Check into your alpine resort.',
        highlights: ['Beshbarmag Mountain View', 'Gachresh Forest Walk', 'Resort Check-in'],
        mealsIncluded: 'Breakfast (from Day 2)',
        accommodation: 'Shahdag Luxury Resort',
        location: 'Shahdag'
      },
      {
        dayNumber: 2,
        title: 'Full Day Shahdag Alpine Activities & Cable Car',
        description: 'Spend an exhilarating day enjoying Shahdag Mountain Resort activities: cable car ride to 2,351m summit, alpine roller coaster, zip-lining, quad biking, or winter skiing on pristine groomed pistes.',
        highlights: ['Shahdag Cable Car Ride', 'Alpine Coaster & Adventure Activities', 'Panoramic Caucasus Views'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: 'Shahdag Luxury Resort',
        location: 'Shahdag'
      },
      {
        dayNumber: 3,
        title: 'Quba Cultural Heritage & Red Village',
        description: 'Explore Quba town, renowned for its ancient handmade carpet weaving tradition and Krasnaya Sloboda (the only all-Jewish settlement outside Israel and the USA). Visit Afurdja Waterfall before returning to Baku.',
        highlights: ['Quba Carpet Weaving Factory', 'Krasnaya Sloboda Historic Bridge', 'Return drive to Baku'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: '4-Star Central Baku Hotel',
        location: 'Quba / Baku'
      },
      {
        dayNumber: 4,
        title: 'Baku Departure Transfer',
        description: 'Breakfast and scheduled transfer to Baku Heydar Aliyev International Airport for your return flight.',
        highlights: ['Hotel Check-out', 'Airport Transfer'],
        mealsIncluded: 'Buffet Breakfast',
        location: 'Baku Airport'
      }
    ]
  },
  {
    id: 'gabala-sheki-silk-road-5d',
    title: 'Gabala & Sheki Silk Road Discovery — 4N / 5D',
    destination: 'Baku, Gabala & Sheki',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    startingPrice: 460,
    currency: 'USD',
    groupSize: 'Min 2 Persons',
    hotel: 'Qafqaz Riverside Resort Gabala & Sheki Saray Hotel',
    hotelRating: 5,
    roomType: 'Deluxe Rooms',
    meals: 'Daily Breakfast + Traditional Sheki Piti Lunch',
    transport: 'Private Luxury Mercedes Vehicle',
    airportTransfer: 'Included',
    guide: 'English & Urdu Speaking Tour Leader',
    entryTickets: 'Sheki Khan Palace, Tufandag Cable Car, Nohur Lake',
    category: 'gabala',
    featured: true,
    published: true,
    shortDescription: 'Travel through the ancient Silk Road route to the emerald lake of Nohur, Tufandag mountain resort, Gabaland, and the stained-glass Palace of Sheki Khans.',
    fullDescription: 'Immerse yourself in Azerbaijan’s lush northwestern region. Experience the serene Nohur Lake, Seven Beauties (Yeddi Gozel) Waterfall, shoot sport club, Tufandag cable cars in Gabala, and the UNESCO World Heritage town of Sheki with its 18th-century Sheki Khans Palace and authentic Caravanserai.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80'
    ],
    inclusions: [
      '2 Nights in Baku + 1 Night in Gabala + 1 Night in Sheki in 4/5-star hotels',
      'All private intercity and sightseeing transportation',
      'Tufandag Cable Car ride',
      'Nohur Lake boat cruise',
      'UNESCO Sheki Khans Palace entrance ticket',
      'English/Urdu speaking guide'
    ],
    exclusions: ['International Flights', 'Visa processing', 'Personal shopping'],
    importantInfo: ['Ideal for families, couples, and nature enthusiasts.'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'Arrival in Baku & City Center Walk',
        description: 'Airport meet and greet, transfer to Baku hotel, evening tour of Fountain Square.',
        highlights: ['Meet & Greet', 'Nizami Street'],
        mealsIncluded: 'Breakfast (from Day 2)',
        location: 'Baku'
      },
      {
        dayNumber: 2,
        title: 'Scenic Drive to Gabala via Shamakhi',
        description: 'Travel through Shamakhi (visit Juma Mosque, one of the oldest in the Caucasus) towards Gabala. Visit tranquil Nohur Lake surrounded by forest and the Seven Beauties Waterfall.',
        highlights: ['Shamakhi Juma Mosque', 'Nohur Lake Boating', 'Seven Beauties Waterfall'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: 'Qafqaz Riverside Gabala',
        location: 'Gabala'
      },
      {
        dayNumber: 3,
        title: 'Tufandag Mountain & Ancient Silk Road Sheki',
        description: 'Take the Tufandag cable car to admire panoramic mountain vistas, then proceed to historic Sheki. Visit the UNESCO-listed Sheki Khans Palace with intricate Shebeke stained glass made without nails or glue.',
        highlights: ['Tufandag Cable Car', 'Sheki Khans Palace', 'Historic Caravanserai'],
        mealsIncluded: 'Buffet Breakfast & Sheki Halva tasting',
        accommodation: 'Sheki Saray Hotel',
        location: 'Sheki'
      },
      {
        dayNumber: 4,
        title: 'Kish Albanian Church & Return to Baku',
        description: 'Visit the 1st-century Caucasian Albanian Church in Kish village, then drive back to Baku with stops for local tea and mountain honey.',
        highlights: ['Kish Albanian Church', 'Return to Baku', 'Evening Baku Boulevard'],
        mealsIncluded: 'Buffet Breakfast',
        accommodation: 'Baku Hotel',
        location: 'Baku'
      },
      {
        dayNumber: 5,
        title: 'Baku Departure Transfer',
        description: 'Breakfast and private transfer to Baku airport.',
        highlights: ['Airport Drop-off'],
        mealsIncluded: 'Buffet Breakfast',
        location: 'Baku Airport'
      }
    ]
  },
  {
    id: 'luxury-caspian-honeymoon-6d',
    title: 'Luxury Caspian Honeymoon & Romance — 5N / 6D',
    destination: 'Baku, Sea Breeze & Shahdag',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    startingPrice: 750,
    currency: 'USD',
    groupSize: 'Private Couple Tour',
    hotel: 'Four Seasons / Fairmont Baku (Flame Towers) & Shahdag Luxury Chalet',
    hotelRating: 5,
    roomType: 'Sea View Suite with Honeymoon Perks',
    meals: 'Daily Champagne/Gourmet Breakfast + 1 Romantic Caspian Yacht Dinner',
    transport: 'Private VIP Mercedes E-Class / S-Class',
    airportTransfer: 'VIP Private Chauffeur',
    guide: 'Dedicated Private Tour Concierge',
    entryTickets: 'All VIP accesses included',
    category: 'honeymoon',
    featured: true,
    published: true,
    shortDescription: 'An opulent romantic getaway featuring five-star luxury suites, private Caspian yacht cruise, candlelit dinners, and mountain wellness.',
    fullDescription: 'Designed exclusively for honeymooners and romantic escapes. Indulge in premier 5-star suites at Fairmont Baku (Flame Towers), private sunset yacht cruise on the Caspian Sea, couple spa treatments, and breathtaking private excursions.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    ],
    inclusions: [
      '5 Nights in 5-Star Luxury Suites with Caspian Sea / Mountain views',
      'Private sunset yacht cruise with gourmet dinner',
      'Chilled sparkling beverage & romantic room decor on arrival',
      'Couple massage & Turkish hamam session',
      'Dedicated private Mercedes luxury chauffeur'
    ],
    exclusions: ['International Flights', 'Visa processing'],
    importantInfo: ['Custom dates and tailor-made romantic dining options available.'],
    itinerary: [
      {
        dayNumber: 1,
        title: 'VIP Arrival & Romantic Welcome in Baku',
        description: 'VIP meet and greet, luxury transfer to Fairmont Flame Towers suite with flowers and welcome package.',
        highlights: ['VIP Chauffeur', 'Fairmont Suite Check-in', 'Evening Skyline View'],
        mealsIncluded: 'Welcome Drink',
        location: 'Baku'
      },
      {
        dayNumber: 2,
        title: 'Old City Charm & Private Caspian Sunset Yacht',
        description: 'Private tour of Old Baku followed by an exclusive private sunset yacht cruise along Baku Bay.',
        highlights: ['Private Icherisheher Walk', 'Caspian Sunset Cruise', 'Candlelit Dinner'],
        mealsIncluded: 'Breakfast & Gourmet Dinner',
        location: 'Baku'
      },
      {
        dayNumber: 3,
        title: 'Absheron Romantic Tour & Sea Breeze Resort',
        description: 'Visit the Ateshgah Fire Temple, Yanardag, and spend the afternoon at Sea Breeze Baku beach resort.',
        highlights: ['Sea Breeze Resort', 'Ateshgah', 'Beachfront Cafe Experience'],
        mealsIncluded: 'Breakfast',
        location: 'Absheron'
      },
      {
        dayNumber: 4,
        title: 'Shahdag Mountain Retreat & Couple Spa',
        description: 'Drive to Shahdag mountain resort for an alpine wellness day with thermal pool and couple spa treatments.',
        highlights: ['Mountain Suite', 'Couple Spa', 'Alpine Sunset'],
        mealsIncluded: 'Breakfast',
        location: 'Shahdag'
      },
      {
        dayNumber: 5,
        title: 'Shahdag Cable Car & Return to Baku Fine Dining',
        description: 'Cable car ride to the peak, return to Baku for shopping and a farewell dinner at a top panoramic restaurant.',
        highlights: ['Cable Car', 'Baku Fine Dining'],
        mealsIncluded: 'Breakfast',
        location: 'Baku'
      },
      {
        dayNumber: 6,
        title: 'Farewell Baku',
        description: 'VIP transfer to Baku airport.',
        highlights: ['Airport Drop-off'],
        mealsIncluded: 'Breakfast',
        location: 'Baku'
      }
    ]
  }
];

export const INITIAL_PROPERTIES: PropertyListing[] = [
  {
    id: 'prop-white-city-luxury',
    title: 'Luxury 3-Bedroom Sea View Apartment in Baku White City',
    location: 'Baku White City (Ag Sheher), Khatai District',
    district: 'Khatai',
    propertyType: 'sea-view',
    price: 320000,
    currency: 'USD',
    priceNote: 'Starting From',
    bedrooms: 3,
    bathrooms: 2,
    sizeSqM: 165,
    floor: '9th Floor of 14',
    building: 'Park Azure / Knightsbridge Residence',
    description: 'A masterfully planned luxury residence situated in prestigious Baku White City. Features uninterrupted panoramic views of the Caspian Sea and Baku Boulevard, high ceilings (3.3m), premium European fittings, 24/7 concierge, underground parking, and smart home infrastructure.',
    facilities: ['24/7 Concierge & Security', 'Underground Parking', 'Fitness Club & Indoor Pool', 'Panoramic Sea View', 'Landscaped Courtyard', 'Smart Home Ready'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    investmentNotes: 'Baku White City is one of the highest appreciating urban regeneration projects in the Caucasus, generating consistent 7–9% rental yields and foreign investor demand.',
    rentalYieldEstimate: '7.8% - 9.2% Net ROI',
    completionYear: '2024 (Ready to Move)',
    featured: true,
    published: true
  },
  {
    id: 'prop-port-baku-2bed',
    title: 'Modern 2-Bedroom Apartment next to Port Baku Residence',
    location: 'Neftchilar Avenue, Nasimi District, Baku',
    district: 'Nasimi',
    propertyType: 'luxury-apartment',
    price: 245000,
    currency: 'USD',
    priceNote: 'Sample Listing Price',
    bedrooms: 2,
    bathrooms: 2,
    sizeSqM: 118,
    floor: '12th Floor',
    building: 'Port Baku Mall Vicinity',
    description: 'Located in the most prestigious diplomatic and retail district of central Baku. Steps away from Port Baku Mall, luxury boutiques, multinational headquarters, and the Caspian promenade. Highly sought after by expatriate executives and embassy staff.',
    facilities: ['High-Speed Elevators', 'Private Gym & Spa', 'Secured Access Card System', 'Caspian Boulevard Proximity', 'Marble Finishes'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80'
    ],
    investmentNotes: 'Premium rental occupancy rate with corporate tenants paying in USD/EUR equivalents.',
    rentalYieldEstimate: '8.5% Annual ROI',
    completionYear: 'Ready',
    featured: true,
    published: true
  },
  {
    id: 'prop-fountain-square-commercial',
    title: 'High-Footfall Commercial Retail / Boutique Office Space',
    location: 'Nizami Street (Torgovaya) & Fountain Square, Baku',
    district: 'Sabuhi / City Center',
    propertyType: 'commercial',
    price: 490000,
    currency: 'USD',
    bedrooms: 0,
    bathrooms: 2,
    sizeSqM: 210,
    floor: 'Ground & Mezzanine',
    building: 'Historic Renovated Landmark',
    description: 'Prime retail/commercial property located on the primary pedestrian retail artery of Azerbaijan. Perfect for international brand flagships, luxury salons, boutique restaurants, or travel/consultancy corporate headquarters.',
    facilities: ['Direct Street Frontage', 'Huge Display Windows', 'Heavy Pedestrian Footfall', 'High Ceilings', 'Independent HVAC'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    investmentNotes: 'Prime commercial real estate with long-term tenant stability in the heart of Baku tourism and shopping.',
    rentalYieldEstimate: '9.5% - 11.0% ROI',
    completionYear: 'Ready',
    featured: true,
    published: true
  },
  {
    id: 'prop-mardakan-caspian-villa',
    title: 'Exclusive 4-Bedroom Beachside Villa in Mardakan Baku',
    location: 'Mardakan, Khazar District, Baku Caspian Coast',
    district: 'Khazar / Mardakan',
    propertyType: 'investment',
    price: 410000,
    currency: 'USD',
    bedrooms: 4,
    bathrooms: 4,
    sizeSqM: 350,
    floor: '2-Story Private Villa with 800m² Land',
    building: 'Private Gated Compound',
    description: 'Luxury coastal villa featuring a private swimming pool, landscaped subtropical garden with pomegranate and olive trees, barbecue pavilion, Finnish sauna, and separate caretaker quarters. Located 20 minutes from Baku center and 10 minutes from GYD airport.',
    facilities: ['Private Swimming Pool', '800m² Land Area', 'Sauna & Jacuzzi', 'Automatic Irrigation', 'Perimeter Security Cameras', 'Barbecue Gazebo'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
    ],
    investmentNotes: 'High short-term summer holiday rental yields (averaging $350–$600/night in peak season). Foreign buyers can own buildings in freehold.',
    rentalYieldEstimate: '10.0% Seasonal & Holiday ROI',
    completionYear: '2023',
    featured: false,
    published: true
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'azerbaijan-evisa-guide-pakistan',
    slug: 'azerbaijan-evisa-guide-pakistan',
    title: 'Complete Guide to Azerbaijan e-Visa for Pakistani Citizens (2026)',
    category: 'Azerbaijan Visa',
    author: 'SIRFPK Visa Advisory Team',
    date: 'February 2026',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1579606032822-e42777085a3a?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Step-by-step guidance on applying for the Azerbaijan ASAN Visa from Pakistan, required passport validity, fees, common rejection reasons, and turnaround times.',
    content: [
      'Traveling from Pakistan to Azerbaijan has become significantly streamlined with the official ASAN e-Visa system. Azerbaijan has rapidly grown into one of the most popular travel destinations for Pakistani tourists, families, business delegations, and students.',
      'The Official 3-Step e-Visa Process: Applying for your electronic visa is straightforward through the official ASAN Visa portal (https://evisa.gov.az). The process follows 3 simple steps: 1) Apply online by filling in your personal and travel information and uploading your passport bio-data page scan; 2) Pay the non-refundable visa fees securely using a credit/debit card; 3) Download your electronic visa once approved and delivered to your email.',
      'Official Fee Breakdown: The standard ASAN e-Visa costs US$20 (state fee) plus a US$9 official processing and service fee (total US$29). Urgent e-Visas carry an additional rush processing fee. Please note that all visa application and processing payments are strictly non-refundable under any circumstances, even if an application is rejected or cancelled.',
      'Passport Validity Requirements: Your Pakistani passport must remain valid for at least 3 months beyond the validity period of the issued electronic visa (a minimum of 6 months validity from your planned arrival date is strongly recommended to avoid boarding issues). Ensure your passport scan is clear, crisp, and fully legible without glare.',
      'Physical Printout Requirement: The e-Visa is an electronic authorization and is NOT physically stamped into your passport prior to travel. You MUST print a clear physical paper copy of your approved e-Visa and present it along with your original passport at the departure airline check-in counter in Pakistan and at Azerbaijan border control upon arrival.',
      'Validity and Stay Duration: The standard single-entry e-Visa allows a stay of up to 30 days within a 90-day validity window. Standard processing is typically 3 business days, while urgent e-Visas are processed within 3 to 5 hours.',
      'Mandatory Place of Stay Registration: If your stay in Azerbaijan exceeds 15 calendar days, you must register your temporary address with the State Migration Service within 15 days of arrival. Most 4-star and 5-star hotels complete this registration automatically, but travelers renting private apartments or Airbnb residences must ensure their landlord submits the registration to avoid hefty departure fines.'
    ],
    faq: [
      { question: 'Can Pakistani citizens apply for Azerbaijan e-Visa online?', answer: 'Yes, Pakistani passport holders are fully eligible for the official ASAN e-Visa system through https://evisa.gov.az.' },
      { question: 'How much does the Azerbaijan e-Visa cost for Pakistani applicants?', answer: 'The standard e-Visa fee is US$20 (state fee) plus a US$9 processing/service fee (total US$29). Payments are strictly non-refundable even if the application is rejected.' },
      { question: 'What is the minimum passport validity required?', answer: 'Your Pakistani passport must remain valid for at least 3 months beyond the expiration date of your issued e-Visa (a minimum of 6 months validity from entry date is strongly advised).' },
      { question: 'Do I need to carry a printed copy of the e-Visa?', answer: 'Yes. The e-Visa is not stamped in your passport. You must print a physical paper copy of the issued e-Visa to present at airport check-in and Baku immigration.' },
      { question: 'What is the processing time?', answer: 'Standard processing takes approximately 3 working days. Urgent e-Visa takes 3 to 5 hours.' },
      { question: 'Can SIRFPK assist with visa applications?', answer: 'Yes! SIRFPK provides comprehensive visa assistance, document verification, application submission, and hotel voucher coordination.' }
    ],
    tags: ['Azerbaijan Visa', 'Pakistan to Baku', 'e-Visa Guide', 'Travel Advisory'],
    published: true
  },
  {
    id: 'top-10-things-to-do-in-baku',
    slug: 'top-10-things-to-do-in-baku',
    title: 'Top 10 Must-Visit Places & Experiences in Baku, Azerbaijan',
    category: 'Baku Travel Guide',
    author: 'SIRFPK Travel Desk',
    date: 'January 2026',
    readTime: '8 min read',
    featuredImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'From the medieval charm of Icherisheher to the hyper-modern curves of Heydar Aliyev Center and the bubbling mud volcanoes of Gobustan.',
    content: [
      'Baku is famously nicknamed the "City of Winds" and the "Paris of the East". It seamlessly unites millennia-old Silk Road caravanserais with cutting-edge 21st-century architectural wonders.',
      '1. Old City (Icherisheher): Walk through ancient stone fortresses, visit Maiden Tower and the Palace of the Shirvanshahs.',
      '2. Flame Towers & Highland Park: The quintessential photo spot overlooking the entire Baku Bay and Caspian Sea horizon.',
      '3. Heydar Aliyev Center: Designed by Zaha Hadid, this fluid architectural marvel hosts world-class cultural exhibitions.',
      '4. Baku Boulevard & Little Venice: Stroll along the 16-kilometer seaside promenade, ride pedal boats in Little Venice, and enjoy seaside tea houses.',
      '5. Gobustan Rock Art & Mud Volcanoes: Witness prehistoric petroglyphs and over 300 bubbling mineral mud volcanoes.',
      '6. Ateshgah Fire Temple & Yanardag: Experience the natural gas flames that have inspired Zoroastrian and Silk Road travelers for centuries.'
    ],
    tags: ['Baku Attractions', 'Azerbaijan Tourism', 'Things to Do', 'Baku Guide'],
    published: true
  },
  {
    id: 'azerbaijan-trc-residence-permit-guide',
    slug: 'azerbaijan-trc-residence-permit-guide',
    title: 'How to Obtain a Temporary Residence Card (TRC) in Azerbaijan',
    category: 'Azerbaijan TRC',
    author: 'SIRFPK Legal & Migration Advisory',
    date: 'February 2026',
    readTime: '7 min read',
    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Comprehensive overview of Azerbaijan TRC pathways: Business & Company Setup, Real Estate Investment, Employment, and University Education.',
    content: [
      'A Temporary Residence Card (TRC / Müvəqqəti Yaşamaq İcazəsi) allows foreign nationals to live, do business, open local bank accounts, and travel freely in and out of Azerbaijan without recurring tourist visas.',
      'Primary Legal Pathways for Azerbaijan TRC:',
      '1. Company Registration & Business: Establishing an LLC (MMC) in Azerbaijan with active commercial operations and hiring required local staff.',
      '2. Real Estate Investment: Purchasing real estate property in Azerbaijan with an officially assessed value meeting State Migration Service thresholds (minimum 100,000 AZN).',
      '3. Higher Education / Student TRC: Enrolling in an accredited Azerbaijani university.',
      '4. Employment: Securing a work permit sponsored by a licensed Azerbaijani corporate employer.',
      '5. Family Reunification: For spouses and dependent children of active TRC holders.',
      'SIRFPK provides complete consultancy, legal paperwork translation, apostille guidance, medical checkup accompaniment, and State Migration Service appointment coordination.'
    ],
    tags: ['Azerbaijan TRC', 'Residency Guide', 'Business Relocation', 'Immigration'],
    published: true
  },
  {
    id: 'why-invest-in-baku-real-estate',
    slug: 'why-invest-in-baku-real-estate',
    title: 'Why Foreign Investors are Buying Property in Baku in 2026',
    category: 'Property Investment',
    author: 'SIRFPK Property Consultancy',
    date: 'January 2026',
    readTime: '6 min read',
    featuredImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Analyzing capital appreciation, high rental yields in Baku White City, foreign ownership laws, district breakdowns, and residency eligibility via property.',
    content: [
      'Azerbaijan’s strategic positioning on the International North-South Transport Corridor and Middle Corridor has sparked rapid infrastructure, tourism, and real estate expansion.',
      'Foreign Ownership Rules: Foreign individuals can legally purchase and own residential and commercial apartments, condominiums, and commercial buildings in full private ownership (freehold title). Note that direct agricultural land ownership for foreigners requires designated corporate or leasehold structures.',
      'Key Baku Districts for Real Estate Buyers:\n• Səbail District: The historic and prestigious central heart of Baku, encompassing Fountain Square, Nizami Street, and Old City proximity — commanding the highest capital values and premium short-term holiday rental demand.\n• Nasimi District: A central, convenient commercial and diplomatic hub home to Port Baku, upscale retail avenues, and high corporate tenant occupancy.\n• Baku White City (Ag Sheher): Azerbaijan’s premier master-planned waterfront urban regeneration project offering eco-chic French architecture, seaside promenades, and strong long-term capital appreciation.\n• Khatai District: A rapidly modernizing district featuring modern high-rise residential towers, excellent metro connectivity, and attractive entry price points for investors.\n• Yasamal District: A well-established residential area favored by local families, medical professionals, and university students, providing consistent long-term rental demand.\n• Narimanov District: A bustling commercial and residential hub known for the Heydar Aliyev Center, shopping complexes, and steady middle-market rental yields.\n• Badamdar & Bayil: Elevated coastal hillside neighborhoods offering panoramic Caspian Sea views, private villas, and luxury suburban compounds.',
      'Rental Yields & Capital Growth: While major Western European capitals typically yield 3–4%, central Baku properties consistently deliver net rental returns of 7% to 10% in high-demand expatriate hubs like Port Baku, Fountain Square, and Baku White City (indicative figures based on historical performance and subject to location, finishing quality, and market conditions).',
      'Residency Benefit: Qualifying real estate acquisitions above statutory thresholds (starting at 100,000 AZN officially assessed valuation) grant the property owner and their immediate family eligibility for an Azerbaijan Temporary Residence Card (TRC).'
    ],
    tags: ['Baku Real Estate', 'Property Investment', 'ROI', 'Foreign Buyer Guide', 'Baku Districts'],
    published: true
  }
];

export const INITIAL_AFFILIATE_PARTNERS: AffiliatePartner[] = [
  {
    id: 'airalo',
    name: 'Airalo eSIM',
    category: 'esim',
    logoText: 'AIRALO',
    badge: 'Recommended eSIM',
    description: 'Instant Azerbaijan travel eSIM. Connect to Bakcell & Azercell 4G/5G networks the moment you land in Baku without roaming fees.',
    officialUrl: 'https://www.airalo.com',
    affiliateUrl: 'https://www.airalo.com/azerbaijan-esim',
    buttonText: 'GET AZERBAIJAN eSIM',
    status: 'configured',
    openInNewTab: true,
    trackingNotes: 'Official Airalo partner link placeholder - easily editable in Admin.'
  },
  {
    id: 'trip-com',
    name: 'Trip.com',
    category: 'all-in-one',
    logoText: 'TRIP.COM',
    badge: 'Top Flight & Hotel Deals',
    description: 'Best rates for direct & connecting flights from Pakistan (Karachi, Lahore, Islamabad) to Baku (GYD) and premier Baku hotel booking.',
    officialUrl: 'https://www.trip.com',
    affiliateUrl: 'https://www.trip.com',
    buttonText: 'COMPARE FLIGHTS & HOTELS',
    status: 'configured',
    openInNewTab: true,
    trackingNotes: 'Trip.com affiliate portal'
  },
  {
    id: 'booking-com',
    name: 'Booking.com',
    category: 'hotels',
    logoText: 'BOOKING.COM',
    badge: 'Best Hotel Selection',
    description: 'Compare over 1,500 hotels, boutique guest houses, and luxury sea-view apartments across Baku, Gabala, and Shahdag with free cancellation.',
    officialUrl: 'https://www.booking.com',
    affiliateUrl: 'https://www.booking.com/city/az/baku.html',
    buttonText: 'FIND BAKU HOTELS',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'agoda',
    name: 'Agoda',
    category: 'hotels',
    logoText: 'AGODA',
    badge: 'Asian Travel Discounts',
    description: 'Exclusive member deals and discounted room rates on top 4-star and 5-star properties in central Baku and regional Azerbaijan.',
    officialUrl: 'https://www.agoda.com',
    affiliateUrl: 'https://www.agoda.com',
    buttonText: 'CHECK AGODA RATES',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'skyscanner',
    name: 'Skyscanner',
    category: 'flights',
    logoText: 'SKYSCANNER',
    badge: 'Global Flight Search',
    description: 'Search and compare cheap flight tickets from PIA, Azerbaijan Airlines (AZAL), FlyDubai, Air Arabia, and Qatar Airways to Baku.',
    officialUrl: 'https://www.skyscanner.com',
    affiliateUrl: 'https://www.skyscanner.com',
    buttonText: 'SEARCH FLIGHTS',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'aviasales',
    name: 'Aviasales / WayAway',
    category: 'flights',
    logoText: 'AVIASALES',
    badge: 'Low Fare Calendar',
    description: 'Find lowest fare combinations and cashback deals on international flights to Azerbaijan with transparent price tracking.',
    officialUrl: 'https://www.aviasales.com',
    affiliateUrl: 'https://www.aviasales.com',
    buttonText: 'EXPLORE LOW FARES',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'getyourguide',
    name: 'GetYourGuide',
    category: 'activities',
    logoText: 'GETYOURGUIDE',
    badge: 'Tours & Tickets',
    description: 'Instant mobile tickets for Baku museums, Caspian yacht cruises, Gobustan day trips, and Azerbaijan wine/tea tasting experiences.',
    officialUrl: 'https://www.getyourguide.com',
    affiliateUrl: 'https://www.getyourguide.com/baku-l1668/',
    buttonText: 'BOOK EXPERIENCES',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'viator',
    name: 'Viator (Tripadvisor)',
    category: 'activities',
    logoText: 'VIATOR',
    badge: 'Tripadvisor Backed',
    description: 'Handcrafted local tours, private drivers, English/Urdu speaking guides, and food walking tours across Azerbaijan.',
    officialUrl: 'https://www.viator.com',
    affiliateUrl: 'https://www.viator.com/Baku/d22878-ttd',
    buttonText: 'EXPLORE VIATOR TOURS',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'rentalcars',
    name: 'Rentalcars.com',
    category: 'car-rentals',
    logoText: 'RENTALCARS',
    badge: 'Car Hire Comparison',
    description: 'Compare car rentals at Heydar Aliyev International Airport from Avis, Hertz, Europcar, and local Azerbaijani fleets.',
    officialUrl: 'https://www.rentalcars.com',
    affiliateUrl: 'https://www.rentalcars.com',
    buttonText: 'RENT A CAR IN BAKU',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'klook',
    name: 'Klook',
    category: 'activities',
    logoText: 'KLOOK',
    badge: 'Theme Parks & SIM',
    description: 'Discount passes for Shahdag ski lifts, Gabaland theme park tickets, airport private transfers, and local transport passes.',
    officialUrl: 'https://www.klook.com',
    affiliateUrl: 'https://www.klook.com',
    buttonText: 'BOOK WITH KLOOK',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'omio',
    name: 'Omio',
    category: 'transfers',
    logoText: 'OMIO',
    badge: 'Trains & Coaches',
    description: 'Search intercity train tickets (Baku to Ganja / Gabala express trains) and regional bus transportation routes.',
    officialUrl: 'https://www.omio.com',
    affiliateUrl: 'https://www.omio.com',
    buttonText: 'SEARCH TRANSPORT',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'kiwi-com',
    name: 'Kiwi.com',
    category: 'flights',
    logoText: 'KIWI.COM',
    badge: 'Virtual Interlining',
    description: 'Unique multi-city flight connections and travel hacks linking Pakistan, UAE, Turkey, and Azerbaijan at budget rates.',
    officialUrl: 'https://www.kiwi.com',
    affiliateUrl: 'https://www.kiwi.com',
    buttonText: 'CHECK KIWI FARES',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'airbnb-stay22',
    name: 'Airbnb (via Stay22)',
    category: 'hotels',
    logoText: 'AIRBNB',
    badge: 'Apartments & Villas',
    description: 'Book verified Airbnb apartments, boutique homestays, and luxury Caspian villas in Baku through the Stay22 interactive comparison and booking map.',
    officialUrl: 'https://www.airbnb.com',
    affiliateUrl: 'https://www.stay22.com/embed/gm?address=Baku,Azerbaijan',
    buttonText: 'FIND BAKU APARTMENTS',
    status: 'pending',
    openInNewTab: true,
    trackingNotes: 'Routes through Stay22 accommodation widget, not a direct Airbnb affiliate link. Requires Stay22 partner account activation.'
  },
  {
    id: 'google-flights',
    name: 'Google Flights',
    category: 'flights',
    logoText: 'GOOGLE FLIGHTS',
    badge: 'Flight Price Comparison',
    description: 'Fast and comprehensive flight comparison tool to monitor fare trends, track price history, and plan optimal routes into Baku (GYD).',
    officialUrl: 'https://www.google.com/travel/flights',
    affiliateUrl: 'https://www.google.com/travel/flights',
    buttonText: 'COMPARE ON GOOGLE FLIGHTS',
    status: 'active',
    openInNewTab: true,
    trackingNotes: 'No commission program available; included as a free comparison utility for users.'
  },
  {
    id: 'discover-cars',
    name: 'Discover Cars',
    category: 'car-rentals',
    logoText: 'DISCOVER CARS',
    badge: 'Best Car Hire Rates',
    description: 'Top-rated car rental comparison platform with transparent pricing, zero hidden costs, and free cancellation at Heydar Aliyev International Airport and Baku.',
    officialUrl: 'https://www.discovercars.com',
    affiliateUrl: 'https://www.discovercars.com',
    buttonText: 'COMPARE CAR RENTAL DEALS',
    status: 'configured',
    openInNewTab: true
  },
  {
    id: 'travelpayouts',
    name: 'Travelpayouts',
    category: 'all-in-one',
    logoText: 'TRAVELPAYOUTS',
    badge: 'All-in-One Travel Network',
    description: 'Unified travel affiliate network covering flights, hotels, and car rentals in one search widget for Azerbaijan and worldwide destinations.',
    officialUrl: 'https://www.travelpayouts.com',
    affiliateUrl: 'https://www.travelpayouts.com',
    buttonText: 'SEARCH FLIGHTS & HOTELS',
    status: 'pending',
    openInNewTab: true,
    trackingNotes: "Client's primary recommended affiliate network — needs real account signup and tracking link before status can move to configured/active."
  }
];

export const INITIAL_DESTINATIONS: DestinationInfo[] = [
  {
    id: 'baku',
    name: 'Baku',
    tagline: 'The Cosmopolitan Capital of Winds & Flame',
    image: 'https://images.unsplash.com/photo-1579606032822-e42777085a3a?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Azerbaijan’s futuristic yet historic capital on the Caspian Sea, blending UNESCO medieval alleys with the iconic Flame Towers and Zaha Hadid architecture.',
    highlights: ['UNESCO Old City (Icherisheher)', 'Flame Towers Skyline', 'Baku Boulevard & Little Venice', 'Nizami Street Shopping'],
    bestTimeToVisit: 'April - June & September - November',
    keyActivities: ['City Walking Tours', 'Fine Caspian Dining', 'Museums', 'Nightlife & Shopping'],
    distanceFromBaku: '0 km (Capital City)'
  },
  {
    id: 'shahdag',
    name: 'Shahdag',
    tagline: 'Premier Mountain & Alpine Ski Resort',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'World-class mountain paradise in the Greater Caucasus offering winter ski slopes, alpine coasters, paragliding, and luxury mountain wellness chalets.',
    highlights: ['Alpine Ski Slopes', 'Mountain Cable Cars', 'Roller Coaster & Zip-lines', 'Luxury Spa Hotels'],
    bestTimeToVisit: 'Dec - March (Skiing) & June - Sept (Hiking)',
    keyActivities: ['Skiing & Snowboarding', 'Alpine Coaster', 'Quad Biking', 'Cable Car Rides'],
    distanceFromBaku: '210 km (3.5 hours drive)'
  },
  {
    id: 'gabala',
    name: 'Gabala',
    tagline: 'Emerald Lakes, Lush Valleys & Tufandag',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Surrounded by pine forests and waterfalls, Gabala is known as the Switzerland of Azerbaijan with peaceful Nohur Lake and Tufandag mountain cable cars.',
    highlights: ['Nohur Lake Boating', 'Tufandag Cable Car', 'Seven Beauties Waterfall', 'Gabala Shooting Club'],
    bestTimeToVisit: 'May - October',
    keyActivities: ['Lake Boating', 'Horseback Riding', 'Shooting Club', 'Nature Photography'],
    distanceFromBaku: '220 km (3 hours drive)'
  },
  {
    id: 'quba',
    name: 'Quba',
    tagline: 'Carpet Capital & Apple Orchard Valleys',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'Famous for its sweet apple orchards, intricate carpet weaving masterclasses, Gachresh forest, and the ancient Jewish Red Settlement (Krasnaya Sloboda).',
    highlights: ['Quba Carpet Factories', 'Krasnaya Sloboda Red Village', 'Gachresh Forest', 'Afurdja Waterfall'],
    bestTimeToVisit: 'May - October',
    keyActivities: ['Carpet Workshop Tours', 'Forest Picnics', 'Cultural Sightseeing'],
    distanceFromBaku: '170 km (2.5 hours drive)'
  },
  {
    id: 'gobustan',
    name: 'Gobustan & Mud Volcanoes',
    tagline: 'Prehistoric Rock Petroglyphs & Bubbling Volcanoes',
    image: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'A moon-like UNESCO national park featuring 40,000-year-old rock engravings and over 300 mineral-rich bubbling mud volcanoes.',
    highlights: ['40,000-year-old Rock Engravings', 'Active Bubbling Mud Volcanoes', 'Prehistoric Musical Gaval Dash Stone'],
    bestTimeToVisit: 'All year round (Best Spring & Autumn)',
    keyActivities: ['4x4 Off-road Safari', 'Museum Tour', 'Photography'],
    distanceFromBaku: '65 km (1 hour drive)'
  },
  {
    id: 'absheron',
    name: 'Absheron Peninsula',
    tagline: 'The Mystical Land of Eternal Fire',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'The sacred birthplace of fire legends, featuring the 17th-century Ateshgah Fire Temple, Yanardag burning mountain, and Mardakan medieval fortress castles.',
    highlights: ['Ateshgah Fire Temple', 'Yanardag Burning Mountain', 'Mardakan Quadrangular Castle', 'Sea Breeze Beach Resort'],
    bestTimeToVisit: 'All year round',
    keyActivities: ['Historical Excursion', 'Beach Club Dining', 'Sunset at Yanardag'],
    distanceFromBaku: '25 km (30 minutes drive)'
  },
  {
    id: 'sheki',
    name: 'Sheki',
    tagline: 'UNESCO Ancient Silk Road & Stained-Glass Palace',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
    shortDescription: 'One of the oldest Silk Road hubs in the Caucasus, celebrated for the 18th-century Palace of Sheki Khans with hand-crafted Shebeke stained glass and authentic sweet Sheki Halva.',
    highlights: ['Palace of Sheki Khans (UNESCO)', 'Sheki Caravanserai', 'Kish Albanian Church', 'Sheki Halva Workshops'],
    bestTimeToVisit: 'April - October',
    keyActivities: ['Silk & Halva Tasting', 'Heritage Walking Tour', 'Handicraft Shopping'],
    distanceFromBaku: '300 km (4.5 hours drive)'
  }
];
