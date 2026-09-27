export const DESTINATIONS = [
  {
    id: "dest-1",
    title: "Bali Tropical Paradise",
    country: "Indonesia",
    region: "Asia",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewsCount: 342,
    price: 1299,
    originalPrice: 1599,
    duration: "7 Days / 6 Nights",
    tag: "Best Seller",
    description: "Experience pristine turquoise beaches, lush emerald rice terraces, ancient sacred temples, and luxury private pool villas in Ubud and Seminyak.",
    highlights: ["Private Pool Villa", "Sacred Monkey Forest", "Uluwatu Sunset Dance", "Traditional Spa Treatment"],
    coordinates: "8.3405° S, 115.0920° E",
    bestTimeToVisit: "April - October"
  },
  {
    id: "dest-2",
    title: "Swiss Alps & Glacier Express",
    country: "Switzerland",
    region: "Europe",
    category: "Mountain",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
    rating: 4.95,
    reviewsCount: 288,
    price: 2450,
    originalPrice: 2800,
    duration: "9 Days / 8 Nights",
    tag: "Luxury Choice",
    description: "Journey through majestic snow-capped peaks, alpine lakes, Zermatt Matterhorn views, and panoramic Glacier Express train journeys.",
    highlights: ["Glacier Express Train Pass", "Matterhorn Cable Car", "Lake Geneva Cruise", "5-Star Alpine Resort"],
    coordinates: "46.8182° N, 8.2275° E",
    bestTimeToVisit: "June - September / Dec - March"
  },
  {
    id: "dest-3",
    title: "Kyoto Cherry Blossom & Temples",
    country: "Japan",
    region: "Asia",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    rating: 4.88,
    reviewsCount: 410,
    price: 1850,
    originalPrice: 2100,
    duration: "8 Days / 7 Nights",
    tag: "Trending",
    description: "Immerse in Japan's rich history, iconic Fushimi Inari torii gates, traditional tea ceremonies, and serene bamboo groves.",
    highlights: ["Fushimi Inari Shrine", "Private Tea Ceremony", "Bullet Train (Shinkansen)", "Traditional Ryokan Stay"],
    coordinates: "35.0116° N, 135.7681° E",
    bestTimeToVisit: "March - May / Oct - Nov"
  },
  {
    id: "dest-4",
    title: "Serengeti Great Migration Safari",
    country: "Tanzania",
    region: "Africa",
    category: "Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80",
    rating: 4.97,
    reviewsCount: 195,
    price: 3100,
    originalPrice: 3600,
    duration: "6 Days / 5 Nights",
    tag: "Bucket List",
    description: "Witness the awe-inspiring Great Migration, Big Five wildlife, Ngorongoro Crater, and hot air balloon rides over the savanna.",
    highlights: ["Sunrise Hot Air Balloon", "4x4 Game Drives", "Luxury Tented Lodges", "Maasai Village Tour"],
    coordinates: "2.3333° S, 34.8333° E",
    bestTimeToVisit: "June - October"
  },
  {
    id: "dest-5",
    title: "Santorini Sunset & Yacht Cruise",
    country: "Greece",
    region: "Europe",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
    rating: 4.92,
    reviewsCount: 365,
    price: 1650,
    originalPrice: 1950,
    duration: "5 Days / 4 Nights",
    tag: "Romantic Getaway",
    description: "Bask in the iconic white-washed cliffside architecture, azure Aegean waters, volcanic wine tastings, and catamaran cruises.",
    highlights: ["Private Catamaran Cruise", "Oia Sunset Wine Tasting", "Cliffside Caldera Suite", "Red Beach Exploration"],
    coordinates: "36.3932° N, 25.4615° E",
    bestTimeToVisit: "May - October"
  },
  {
    id: "dest-6",
    title: "Iceland Aurora & Blue Lagoon",
    country: "Iceland",
    region: "Europe",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1000&q=80",
    rating: 4.91,
    reviewsCount: 240,
    price: 1980,
    originalPrice: 2300,
    duration: "6 Days / 5 Nights",
    tag: "Northern Lights",
    description: "Chase the magical Northern Lights, bathe in geothermal thermal springs, explore crystal ice caves, and marvel at cascading waterfalls.",
    highlights: ["Northern Lights Hunt", "Blue Lagoon VIP Pass", "Golden Circle Tour", "Crystal Ice Cave Expedition"],
    coordinates: "64.9631° N, 19.0208° W",
    bestTimeToVisit: "September - March"
  },
  {
    id: "dest-7",
    title: "Maldives Overwater Sanctuary",
    country: "Maldives",
    region: "Asia",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    rating: 4.99,
    reviewsCount: 420,
    price: 3400,
    originalPrice: 3990,
    duration: "6 Days / 5 Nights",
    tag: "Ultra Luxury",
    description: "Unwind in transparent turquoise lagoons with private overwater bungalows, glass floor viewings, underwater dining, and coral diving.",
    highlights: ["Overwater Pool Villa", "Seaplane Transfer", "Submarine Dining", "Manta Ray Snorkeling"],
    coordinates: "3.2028° N, 73.2207° E",
    bestTimeToVisit: "November - April"
  },
  {
    id: "dest-8",
    title: "Machu Picchu & Sacred Valley",
    country: "Peru",
    region: "Americas",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80",
    rating: 4.89,
    reviewsCount: 210,
    price: 1720,
    originalPrice: 1990,
    duration: "7 Days / 6 Nights",
    tag: "Ancient Wonder",
    description: "Hike the ancient Inca Trail, discover high-altitude Andean culture, Cuzco architecture, and the mystic citadel of Machu Picchu.",
    highlights: ["Inca Trail Hike Pass", "Vistadome Scenic Train", "Cuzco Heritage Tour", "Sacred Valley Cooking Class"],
    coordinates: "13.1631° S, 72.5450° W",
    bestTimeToVisit: "May - October"
  },
  {
    id: "dest-9",
    title: "Sigiriya Rock & Ceylon Tea Gardens",
    country: "Sri Lanka",
    region: "Asia",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80",
    rating: 4.96,
    reviewsCount: 312,
    price: 1350,
    originalPrice: 1650,
    duration: "8 Days / 7 Nights",
    tag: "Pearl of Indian Ocean",
    description: "Scale the ancient UNESCO fortress of Sigiriya, ride the world-famous blue train through Ella tea country, safari with wild elephants in Yala, and relax in Nuwara Eliya.",
    highlights: ["Sigiriya Fortress Pass", "Ella Scenic Blue Train", "Yala Leopard & Elephant Safari", "Ceylon Tea Tasting Tour"],
    coordinates: "7.9570° N, 80.7603° E",
    bestTimeToVisit: "December - April"
  },
  {
    id: "dest-10",
    title: "Mirissa Palm Beach & Whale Sanctuary",
    country: "Sri Lanka",
    region: "Asia",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80",
    rating: 4.91,
    reviewsCount: 265,
    price: 1180,
    originalPrice: 1450,
    duration: "6 Days / 5 Nights",
    tag: "Tropical Haven",
    description: "Bask in coconut palm groves, watch blue whales in Mirissa, surf golden waves in Ahangama, and enjoy oceanfront boutique spa resorts.",
    highlights: ["Private Catamaran Whale Watching", "Coconut Tree Hill Sunset", "Galle Dutch Fort Tour", "Oceanfront Luxury Villa"],
    coordinates: "5.9483° N, 80.4716° E",
    bestTimeToVisit: "November - April"
  }
];

export const TOUR_PACKAGES = [
  {
    id: "pkg-1",
    title: "Grand European Odyssey: Paris, Alps & Venice",
    destinations: "France, Switzerland, Italy",
    duration: "12 Days / 11 Nights",
    price: 3890,
    originalPrice: 4400,
    rating: 4.96,
    reviewsCount: 180,
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["5★ Hotels", "Daily Breakfast & 6 Dinners", "High Speed TGV & Train Pass", "Eiffel Tower VIP Entry", "Gondola Ride"],
    itinerary: [
      { day: 1, title: "Arrival in Paris", desc: "VIP airport transfer, luxury hotel check-in, and Seine evening dinner cruise." },
      { day: 2, title: "Eiffel Tower & Louvre Museum", desc: "Skip-the-line access to Eiffel Tower top deck and guided art tour at Louvre." },
      { day: 3, title: "Versailles Gardens & Fast Train to Zurich", desc: "Explore royal gardens before boarding TGV to Switzerland." },
      { day: 4, title: "Swiss Alps & Interlaken Adventure", desc: "Cable car up to First peak and scenic alpine village walk." },
      { day: 5, title: "Lucerne Lake & Mount Pilatus", desc: "Boat ride across Lake Lucerne and world's steepest cogwheel railway." },
      { day: 6, title: "Scenic Train to Venice, Italy", desc: "Traverse the Italian lakes with arrival in romantic Venice." },
      { day: 7, title: "Gondola Serenade & St. Mark's Basilica", desc: "Private gondola tour through canals and Venetian dining." }
    ]
  },
  {
    id: "pkg-2",
    title: "Exotic Thailand & Coral Islands Luxury",
    destinations: "Bangkok, Phuket, Phi Phi Islands",
    duration: "8 Days / 7 Nights",
    price: 1150,
    originalPrice: 1400,
    rating: 4.87,
    reviewsCount: 310,
    badge: "Super Value",
    image: "https://images.unsplash.com/photo-1506665531195-3566af294710?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Beachfront Resort", "Speedboat Transfers", "Island Hopping Tour", "Authentic Thai Cooking", "Elephant Sanctuary Visit"],
    itinerary: [
      { day: 1, title: "Arrival in Bangkok", desc: "Welcome drink at riverfront hotel and Tuk-Tuk night food tour." },
      { day: 2, title: "Grand Palace & Floating Markets", desc: "Guided tour of Golden Buddha temple and Damnoen Saduak market." },
      { day: 3, title: "Flight to Phuket", desc: "Check-in at Patong luxury resort and sunset beach barbecue." },
      { day: 4, title: "Phi Phi Island Speedboat Cruise", desc: "Snorkeling at Maya Bay, Bamboo Island lunch, and crystal lagoons." },
      { day: 5, title: "Ethical Elephant Sanctuary", desc: "Interact, bathe, and feed rescued elephants in a ethical habitat." }
    ]
  },
  {
    id: "pkg-3",
    title: "Arabian Nights: Dubai & Abu Dhabi Luxury Escape",
    destinations: "United Arab Emirates",
    duration: "6 Days / 5 Nights",
    price: 1990,
    originalPrice: 2350,
    rating: 4.93,
    reviewsCount: 220,
    badge: "VIP Luxury",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["5★ Atlantis / Marina Hotel", "Desert Safari with BBQ", "Burj Khalifa 148th Floor Entry", "Yacht Dinner Cruise"],
    itinerary: [
      { day: 1, title: "Arrival in Dubai", desc: "Private Limousine transfer to hotel. Evening at Dubai Mall Fountain show." },
      { day: 2, title: "Burj Khalifa At The Top & Miracle Garden", desc: "Panoramic observation deck view and floral garden tour." },
      { day: 3, title: "Dune Bashing & Desert Camp", desc: "4x4 sand dune safari, camel ride, quad biking, and belly dance dinner." },
      { day: 4, title: "Day Trip to Abu Dhabi & Louvre Abu Dhabi", desc: "Visit magnificent Sheikh Zayed Grand Palace and Presidential Palace." }
    ]
  },
  {
    id: "pkg-4",
    title: "Canadian Rockies & Banff Wilderness Explorer",
    destinations: "Calgary, Banff, Jasper, Lake Louise",
    duration: "9 Days / 8 Nights",
    price: 2750,
    originalPrice: 3100,
    rating: 4.94,
    reviewsCount: 145,
    badge: "Nature Special",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1000&q=80",
    inclusions: ["Lakeside Lodge", "Ice Explorer Glacier Vehicle Pass", "Banff Gondola Ticket", "Canoeing Pass Lake Louise"],
    itinerary: [
      { day: 1, title: "Calgary Arrival & Scenic Drive to Banff", desc: "Pick up AWD SUV transfer to mountain lodge." },
      { day: 2, title: "Lake Louise & Moraine Lake", desc: "Turquoise glacial lake canoeing and alpine trail hikes." },
      { day: 3, title: "Icefields Parkway & Columbia Glacier", desc: "Walk on ancient ice mass aboard heavy-duty Ice Explorer." },
      { day: 4, title: "Jasper National Park Wildlife Safari", desc: "Spot elk, bears, and bighorn sheep with naturalists." }
    ]
  }
];

export const CATEGORIES = [
  { id: "All", name: "All Destinations", icon: "Globe" },
  { id: "Beach", name: "Tropical Beaches", icon: "Sun" },
  { id: "Mountain", name: "Alpine Peaks", icon: "Mountain" },
  { id: "Culture", name: "Heritage & Culture", icon: "Compass" },
  { id: "Safari", name: "Wildlife & Safari", icon: "Binoculars" },
  { id: "Luxury", name: "Ultra Luxury", icon: "Sparkles" },
  { id: "Adventure", name: "Thrilling Adventure", icon: "Zap" }
];

export const FEATURES = [
  {
    icon: "ShieldCheck",
    title: "Best Price Guarantee",
    desc: "We match any verified quote for identical itineraries and luxury packages."
  },
  {
    icon: "Headphones",
    title: "24/7 Personal Concierge",
    desc: "Dedicated travel manager available round-the-clock via WhatsApp & Phone."
  },
  {
    icon: "CalendarCheck",
    title: "Flexible Booking & Cancel",
    desc: "100% full refund up to 7 days before departure with zero hassle fees."
  },
  {
    icon: "Sparkles",
    title: "Handpicked 5-Star Stays",
    desc: "Vetted boutique resorts, oceanoverwater villas, and luxury lodges."
  },
  {
    icon: "UserCheck",
    title: "Verified Local Guides",
    desc: "Native certified guide experts offering insider access to secret spots."
  },
  {
    icon: "Award",
    title: "Award-Winning Service",
    desc: "Recognized as World's Top Travel Experience Agency 2025."
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Balloons Over Cappadocia",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    location: "Turkey"
  },
  {
    id: 2,
    title: "Sunset Over Amalfi Coast",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    location: "Italy"
  },
  {
    id: 3,
    title: "Kyoto Bamboo Forest Walk",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    location: "Japan"
  },
  {
    id: 4,
    title: "Bora Bora Lagoon Bungalow",
    category: "Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    location: "French Polynesia"
  },
  {
    id: 5,
    title: "Matterhorn Peak Zermatt",
    category: "Nature",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    location: "Switzerland"
  },
  {
    id: 6,
    title: "Serengeti Cheetah Safari",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
    location: "Tanzania"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Architect & Explorer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    destination: "Bali Tropical Paradise",
    rating: 5,
    date: "2 weeks ago",
    comment: "Zyder Journeys designed the most surreal anniversary trip for us in Bali! From private infinity pool villas in Ubud to seamless helicopter transfers, every detail was perfection."
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    destination: "Swiss Alps & Glacier Express",
    rating: 5,
    date: "1 month ago",
    comment: "The Glacier Express VIP tickets and mountain lodge recommendations were world class. 24/7 concierge helped us switch dates instantly when weather shifted. Worth every penny!"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Photographer & Travel Writer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    destination: "Kyoto Cherry Blossom",
    rating: 5,
    date: "3 weeks ago",
    comment: "As a photographer, finding unique early morning access to shrines without crowds is tough. Zyder's local guides gave us private entrance permits. An unforgettable experience!"
  }
];

export const CURRENCIES = {
  USD: { symbol: "$", rate: 1, name: "US Dollar" },
  EUR: { symbol: "€", rate: 0.92, name: "Euro" },
  GBP: { symbol: "£", rate: 0.79, name: "British Pound" },
  INR: { symbol: "₹", rate: 86.5, name: "Indian Rupee" },
  LKR: { symbol: "Rs", rate: 302.5, name: "Sri Lankan Rupee" },
  AED: { symbol: "AED", rate: 3.67, name: "UAE Dirham" },
  AUD: { symbol: "A$", rate: 1.56, name: "Australian Dollar" },
  CAD: { symbol: "C$", rate: 1.40, name: "Canadian Dollar" },
  SGD: { symbol: "S$", rate: 1.35, name: "Singapore Dollar" },
  JPY: { symbol: "¥", rate: 154.2, name: "Japanese Yen" },
  CHF: { symbol: "CHF", rate: 0.89, name: "Swiss Franc" },
  CNY: { symbol: "¥", rate: 7.24, name: "Chinese Yuan" },
  MYR: { symbol: "RM", rate: 4.45, name: "Malaysian Ringgit" },
  THB: { symbol: "฿", rate: 34.8, name: "Thai Baht" }
};
