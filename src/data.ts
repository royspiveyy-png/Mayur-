import { Service, Temple, TourPackage, Hotel, Guide, Testimonial } from "./types";

export const servicesData: Service[] = [
  {
    id: "pickup-drop",
    title: "Pickup & Drop",
    description: "Seamless, comfortable transfer services from major transit hubs directly to your pre-booked lodgings or temples.",
    iconName: "Car"
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Carefully vetted, highly rated premium stays, ensuring safety, hygiene, pure vegetarian dining, and spiritual proximity.",
    iconName: "Hotel"
  },
  {
    id: "vip-darshan",
    title: "VIP Darshan Assistance",
    description: "Skip the long queues and crowd congestion. Save time with our verified priest companions facilitating comfortable darshan.",
    iconName: "Sparkles"
  },
  {
    id: "tourist-guide",
    title: "Tourist Guide",
    description: "Government-approved, learned local guides who elaborate on historical facts, folklore, and transcendental Leelas.",
    iconName: "Navigation"
  },
  {
    id: "tour-packages",
    title: "Tour Packages",
    description: "All-inclusive, custom-tailored religious and spiritual itineraries designed to cover key sites without feeling rushed.",
    iconName: "Map"
  },
  {
    id: "railway-pickup",
    title: "Railway Station Pickup",
    description: "Punctual chaffeur welcome from Mathura Junction railway station. Clean luxury cars with experienced local drivers.",
    iconName: "Train"
  },
  {
    id: "airport-transfer",
    title: "Airport Transfer",
    description: "Convenient pickups and drop-offs connecting you directly to Agra or New Delhi (IGI) Airports with flat rates.",
    iconName: "Plane"
  },
  {
    id: "family-pilgrimage",
    title: "Family Pilgrimage Tours",
    description: "Custom pace control, child safety options, wheelchair assistance, and multi-generation family bonding travel itineraries.",
    iconName: "Users"
  }
];

export const templesData: Temple[] = [
  {
    id: "banke-bihari",
    name: "Shri Banke Bihari Temple",
    deity: "Lord Krishna (in Tribhanga posture)",
    description: "The beating heart of Vrindavan, where Lord Krishna is worshiped as a charming child. Famous for its spontaneous 'curtain-pulling' ritual, ecstatic bhajan singing, and immense spiritual energy that draws millions.",
    timings: "Morning: 07:45 AM - 12:00 PM | Evening: 05:30 PM - 09:30 PM",
    location: "Godowlia Road, Banke Bihari Colony, Vrindavan",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "prem-mandir",
    name: "Prem Mandir (Temple of Divine Love)",
    deity: "Sri Radha Krishna & Sita Ram",
    description: "An architectural masterpiece made entirely of white Italian Carrara marble. Features intricate life-sized carvings illustrating Sri Krishna's pastimes and a spectacular musical fountain and light show at twilight.",
    timings: "Open daily: 08:30 AM - 12:00 PM | 04:30 PM - 08:30 PM",
    location: "Raman Reti, Vrindavan, Uttar Pradesh",
    imageUrl: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "iskcon-vrindavan",
    name: "Sri Sri Krishna Balaram Mandir (ISKCON)",
    deity: "Sri Krishna Balaram & Radha Shyamsundar",
    description: "A hub of global devotion and Vedic research. Experience the soul-stirring 24-Hour Kirtan, clean international-grade pure vegetarian meals (Govinda's), and tranquil, meticulously maintained courtyards.",
    timings: "Morning: 04:30 AM - 12:45 PM | Evening: 04:30 PM - 08:30 PM",
    location: "Bhaktivedanta Swami Marg, Raman Reti, Vrindavan",
    imageUrl: "https://images.unsplash.com/photo-1604514636962-f19bba510842?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "krishna-janmabhoomi",
    name: "Shri Krishna Janmabhoomi Temple Complex",
    deity: "Lord Sri Krishna",
    description: "The supreme holy site where Lord Krishna manifested on Earth inside a stone prison chamber thousands of years ago. Features deep archaeological dungeons, a pristine inner temple, and an beautiful water pond called Potra Kund.",
    timings: "Morning: 05:00 AM - 12:00 PM | Evening: 04:00 PM - 09:30 PM",
    location: "Deeg Gate, Mathura, Uttar Pradesh",
    imageUrl: "https://images.unsplash.com/photo-1590050752117-238cb0612b1b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "dwarkadhish",
    name: "Shri Dwarkadhish Temple",
    deity: "Lord Krishna as 'King of Dwarka'",
    description: "Located near the banks of the Yamuna River, this ancient Mathura temple is renowned for its spectacular Rajasthani art, vibrant ceiling paintings, swing festivals (Jhulan Yatra) and tranquil Yamuna Aarti.",
    timings: "Morning: 06:30 AM - 11:00 AM | Evening: 04:00 PM - 07:30 PM",
    location: "Dwarkadhish Marg, Naya Bazar, Mathura",
    imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0fc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "radha-raman",
    name: "Sri Radha Raman Mandir",
    deity: "Sri Radha Raman (Self-manifested deity)",
    description: "One of the most aesthetically cherished temples of Vrindavan. The deity of Radha Raman self-manifested from a sacred Shaligram Shila. Known for preserving traditional devotional music, high cooking standards, and peaceful vibing.",
    timings: "Morning: 08:00 AM - 12:30 PM | Evening: 06:00 PM - 09:30 PM",
    location: "Chaitanya Vihar Road, Vrindavan",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
  }
];

export const packagesData: TourPackage[] = [
  {
    id: "one-day",
    title: "One Day Mathura Vrindavan Darshan",
    duration: "1 Day (12 Hours)",
    price: "₹1,499",
    description: "An intensive, beautifully paced pilgrimage designed for weekend visitors to comfortably cover key primary temples with AC Sedan and local escorts.",
    highlights: ["Shri Krishna Janmabhoomi", "Dwarkadhish Temple", "Banke Bihari Temple Darshan", "Prem Mandir Evening Light Show", "Yamuna Aarti at Vishram Ghat"],
    imageUrl: "https://images.unsplash.com/photo-1544971587-b842c27f8c14?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: "weekend-pilgrimage",
    title: "Weekend Spiritual Retreat",
    duration: "2 Days / 1 Night",
    price: "₹3,999",
    description: "Our highly sought-after itinerary covering Mathura, Vrindavan, and Gokul or Barsana. Includes 1-night stay in our rated premium hotels and professional guides.",
    highlights: ["Day 1: Comprehensive Mathura & Gokul walkthrough", "Day 2: Vrindavan Parikrama & Banke Bihari VIP Darshan", "1 Night Stay in 4-Star Hotel with Pure Veg Breakfast", "Dedicated tour companion", "Lassi & Local Prasad tastings"],
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "family-spiritual",
    title: "Srimad Bhagavatam Family Spiritual Tour",
    duration: "3 Days / 2 Nights",
    price: "₹6,999",
    description: "A relaxed, elderly-friendly tour highlighting Radha Rani's birthplace (Barsana), Goverdhan Parikrama via battery vehicle, and private Chappan Bhog offering.",
    highlights: ["Goverdhan Hill Parikrama (Rickshaw/E-cart)", "Radha Kund & Kusum Sarovar scenic picnics", "Barsana Peak Temple ropeway", "Private priest companion & continuous escort", "Special pure-vegetarian Saatvik meals"],
    imageUrl: "https://images.unsplash.com/photo-1536257130722-ea2ef9dbaa5f?auto=format&fit=crop&w=800&q=80",
    isPopular: false
  },
  {
    id: "premium-vip",
    title: "Exclusive Premium VIP Darshan Tour",
    duration: "2 Days / 1 Night (Luxury)",
    price: "₹11,999",
    description: "The crown jewel of our service offerings. Bulletproof comfort, priority queue passes, five-star luxury resort suite, SUV travel, and guidance by senior Acharyas.",
    highlights: ["Priority/VIP queue access at Banke Bihari & Radha Raman", "Chauffeur-driven Luxury SUV (Innova Crysta)", "Stay in premium 5-Star Resort with wellness amenities", "Sanskrit Shloka Blessing Ceremony with customized Prasad kit", "Private Yamuna luxury boat ride for Evening Aarti"],
    imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  }
];

export const hotelsData: Hotel[] = [
  {
    id: "hotel-nibhivan",
    name: "Nidhivan Sarovar Portico",
    location: "Gopalgarh, Near Chatikara Link Road, Vrindavan",
    rating: 4.8,
    pricePerNight: "₹4,500",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "The ultimate standard of premium accommodation in Vrindavan, boasting beautiful contemporary architecture, multi-cuisine Saatvik vegetarian dining, wellness spa, and quick temple transport.",
    amenities: ["100% Pure Veg", "Free Wi-Fi", "Swimming Pool", "Premium Spa & Wellness", "Shuttle Service"]
  },
  {
    id: "hotel-kridha",
    name: "Kridha Residency - Spiritual Boutique Hotel",
    location: "Opposite Prem Mandir, Vrindavan",
    rating: 4.7,
    pricePerNight: "₹3,800",
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    description: "A beautiful boutique hotel located within walking distance of Prem Mandir. Famously known for its devotional art collections, ultra-comfortable mattresses, and 'Dasaprakash' south Indian veg restaurant.",
    amenities: ["Walk to Prem Mandir", "Saatvik Dining", "Balconies with Temple views", "Travel Desk", "High-speed Internet"]
  },
  {
    id: "hotel-krishnavan",
    name: "Ananda Krishna Vanam Resort",
    location: "ISKCON Temple Road, Raman Reti, Vrindavan",
    rating: 4.6,
    pricePerNight: "₹3,200",
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    description: "Cozy garden-facing suites offering supreme peace and proximity to the ISKCON temple. Features expansive green lawns, child play-parks, and specialized services for overseas devotees.",
    amenities: ["Near ISKCON Temple", "Lush Gardens", "Secure Covered Parking", "Pure Filtered Water", "Doctor on Call"]
  },
  {
    id: "hotel-brijvasa",
    name: "Brij Vasundhara Scenic Cottages",
    location: "Parikrama Marg, Goverdhan, Uttar Pradesh",
    rating: 4.9,
    pricePerNight: "₹6,800",
    imageUrl: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
    description: "Nestled at the sacred foot of Goverdhan Hill. Offers individual luxury cluster-cottages with personal sitting rooms, lush landscaped lawns, ayurvedic detox therapies, and tranquil atmosphere.",
    amenities: [" Goverdhan Foothills", "Luxury Private Cottages", "Ayuryedic Detox Center", "Organic Veg Farm", "Indoor Games"]
  }
];

export const guidesData: Guide[] = [
  {
    id: "guide-devvrat",
    name: "Acharya Devvrat Shastri",
    languages: ["Hindi", "Sanskrit", "English"],
    experienceYears: 12,
    rating: 4.9,
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Holder of a gold medal in Sanskrit Literature from Sampurnanand Sanskrit Vishwavidyalaya. Expert in Vedic philosophy, chanting sacred slokas during darshans, and guiding deep historical walk-throughs."
  },
  {
    id: "guide-gopal",
    name: "Shri Krishna Gopal Dixit",
    languages: ["English", "Hindi", "Bengali"],
    experienceYears: 8,
    rating: 4.8,
    availability: "On Tour",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Fourth-generation Vrindavan resident. Specializes in explaining Chaitanya Mahaprabhu's lineage, secret spots of Vraja forests (Nidhivan), and helping elderly pilgrims with compassionate coordination."
  },
  {
    id: "guide-radhika",
    name: "Pandita Radhika Chaturvedi",
    languages: ["Hindi", "English", "Gujarati"],
    experienceYears: 6,
    rating: 4.9,
    availability: "Available",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Specialist in the history of Radha-Krishna legends, temple arts, and female-led family tours. Famously friendly with children and conducts interactive storytelling tours of Barsana and Nandgaon."
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Arvind Rameshwar",
    location: "Bangalore, India",
    rating: 5,
    text: "Booking with Mathura Vrindavan Pilgrimage Services was the best decision for my elderly parents. The pickup from Mathura Junction was seamlessly timed, the hotel stay was incredibly clean and vegetarian, and our Acharya guide made our Banke Bihari darshan absolute heaven. Truly professional end-to-end service!",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    date: "May 24, 2026"
  },
  {
    id: "test-2",
    name: "Meera & Rajesh Patel",
    location: "London, UK",
    rating: 5,
    text: "Coming from the UK, we were apprehensive about VR VIP guides and crowds. MBP handles everything with pure transparency. The luxury SUV was pristine, VIP darshan passes saved us hours, and Govindas lunch at ISKCON was splendid. Our guide was incredibly knowledgeable. Worth every single rupee!",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    date: "June 02, 2026"
  },
  {
    id: "test-3",
    name: "Hitesh Joshi",
    location: "Ahmedabad, India",
    rating: 5,
    text: "Their Goverdhan family cottage package was spectacular. Taking wheelchair support for my grandfather was so smooth. Highly transparent, trustworthy, and extremely warm behaviour. Will definitely book again next year!",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    date: "June 11, 2026"
  }
];
