export interface City {
  slug: string;
  name: string;
  status: "live" | "coming-soon";
  statusLabel?: string;
  tagline: string;
  subtitle?: string;
  description?: string;
  activeHubsCount?: number;
  hubs: string[];
  recommendedHub?: string;
  icon?: string;
  accentQuote?: string;
}

export const cities: City[] = [
  {
    slug: "varanasi",
    name: "Varanasi",
    status: "live",
    statusLabel: "Now Live",
    tagline: "The world's oldest living city",
    subtitle: "84 historic ghats, timeless labyrinthine galis, and 3,000 years of unbroken living heritage.",
    description:
      "Varanasi is not merely a destination; it is a sensory universe. From the sacred resonance of dawn ragas at Assi to the secretive silk-weaving galis of Dal Mandi, Varanasi reveals its real soul only through the eyes of those who call its ancient stones home.",
    activeHubsCount: 4,
    recommendedHub: "assi-southern-akharas",
    hubs: [
      "assi-southern-akharas",
      "old-kashi-gallis",
      "manikarnika-riverfront",
      "sarnath-sanctuary",
    ],
    icon: "location_city",
    accentQuote: "Benares is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together. — Mark Twain",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    status: "coming-soon",
    statusLabel: "Launching Q2",
    tagline: "The Old Pink City of Royal Guilds",
    subtitle: "Hidden havelis, royal gemstone ateliers, and spice bazaars behind the pink ramparts.",
    hubs: [],
    icon: "fort",
  },
  {
    slug: "udaipur",
    name: "Udaipur",
    status: "coming-soon",
    statusLabel: "Launching Q3",
    tagline: "City of Lakes & Painted Havelis",
    subtitle: "Artisan miniature painting studios and stepped water reservoirs.",
    hubs: [],
    icon: "water",
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    status: "coming-soon",
    statusLabel: "Launching Q3",
    tagline: "Himalayan Foothills & Sacred Currents",
    subtitle: "Forest ashrams, meditation caves, and wild riverbank evening aartis.",
    hubs: [],
    icon: "self_improvement",
  },
  {
    slug: "jodhpur",
    name: "Jodhpur",
    status: "coming-soon",
    statusLabel: "Launching Q4",
    tagline: "The Sun City & Indigo Quarters",
    subtitle: "Indigo-dyed courtyards and medieval stepwell cisterns beneath Mehrangarh.",
    hubs: [],
    icon: "palette",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllLiveCities(): City[] {
  return cities.filter((city) => city.status === "live");
}

