export interface GuideProfile {
  name: string;
  badge: string;
  badgeType: "expert" | "historian";
  bio: string;
  experienceYears: number;
  languages: string[];
  neighborhood: string;
}

export interface HubHighlight {
  title: string;
  teaser: string;
}

export interface Hub {
  slug: string;
  city: string;
  name: string;
  spotmateType: "Local Expert" | "Certified Professional Guide" | "Local Expert & Cultural Custodian";
  spotmateTypeSlug: "local-expert" | "professional-guide";
  spotmateBadge: string;
  spotmateReason: string;
  description: string;
  teaser: string;
  destinations: string[];
  duration: string;
  bestTime?: string;
  price: number;
  featured?: boolean;
  highlights: HubHighlight[];
  hiddenGems: string;
  localFood: string;
  souvenirs: string;
  guideProfile: GuideProfile;
  tags: string[];
}

export const hubs: Hub[] = [
  {
    slug: "assi-southern-akharas",
    city: "varanasi",
    name: "Assi & Southern Ghats",
    spotmateType: "Local Expert",
    spotmateTypeSlug: "local-expert",
    spotmateBadge: "Generational Local Expert",
    spotmateReason:
      "The southern ghats are living neighborhoods, not tourist corridors. Your Spotmate grew up in these lanes, knows the temple priests and chai sellers by name, and can walk you into spaces no guidebook will ever list.",
    description:
      "From the ancient Lolark Kund stepwell to the riverside temples that most visitors walk right past — this is the Varanasi that locals actually live in.",
    teaser:
      "A stepwell older than the Mughal empire, the temple where Tulsidas wrote the Ramcharitmanas, and the chai spot where BHU professors have argued for decades...",
    destinations: [
      "Assi Ghat",
      "Lolark Kund",
      "Tulsi Manas Mandir",
      "Sankat Mochan Hanuman Temple",
      "Durga Kund & Durga Temple",
    ],
    duration: "2.5 – 3 Hours",
    bestTime: "Morning (6:30 AM – 9:30 AM)",
    price: 500,
    featured: true,
    tags: ["Morning Walk", "Temples", "Ghat Life", "Heritage"],
    highlights: [
      {
        title: "Lolark Kund — The Forgotten Stepwell",
        teaser:
          "A deep stone stepwell sacred to the Sun, older than most monuments in the city. Locals come here for rituals you won't find in any travel guide.",
      },
      {
        title: "Tulsi Manas Mandir",
        teaser:
          "The marble temple built on the exact spot where Goswami Tulsidas composed the Ramcharitmanas — the walls are inscribed with the entire epic.",
      },
      {
        title: "Sankat Mochan — The Monkey Temple",
        teaser:
          "Varanasi's most beloved Hanuman temple, founded by Tulsidas himself. Famous for its Tuesday and Saturday evening aarti and its resident langurs.",
      },
      {
        title: "Durga Temple & Durga Kund",
        teaser:
          "The striking red-stone Durga temple with its ancient water tank. Locals call it the Monkey Temple too — for different reasons than Sankat Mochan.",
      },
    ],
    hiddenGems:
      "Your Spotmate knows spots between these landmarks that aren't on any map — quiet temple courtyards, a particular chai stall, viewpoints only residents use. Some things are better discovered in person.",
    localFood:
      "The kachori-sabzi breakfast spots near Assi that BHU students swear by, and a lassi place that's been running since before your parents were born.",
    souvenirs:
      "Your Spotmate can point you to genuine local finds — but the best souvenirs from this walk are the stories and the photos from places tourists never reach.",
    guideProfile: {
      name: "Your Spotmate",
      badge: "Assi Ghat Local Expert",
      badgeType: "expert" as const,
      bio: "Born and raised in the southern ghat neighborhoods. Knows every temple priest, every shortcut, and every hidden courtyard between Assi and Durga Kund.",
      experienceYears: 8,
      languages: ["English", "Hindi"],
      neighborhood: "Assi Ghat, Shivala",
    },
  },
  {
    slug: "old-kashi-gallis",
    city: "varanasi",
    name: "Old Kashi — Lanes, Temples & Bazaars",
    spotmateType: "Local Expert",
    spotmateTypeSlug: "local-expert",
    spotmateBadge: "Old City Heritage Expert",
    spotmateReason:
      "The narrow lanes of old Kashi were built as a defensive labyrinth — GPS drops within meters. Your Spotmate grew up here, knows every turn, every dead end, every shortcut through private courtyards that connects two lanes no map shows.",
    description:
      "The beating heart of Varanasi — serpentine lanes barely wide enough for two people, ancient temples wedged between houses, brass workers hammering the same way their great-grandfathers did, and food that hasn't changed in generations.",
    teaser:
      "Lanes so narrow the buildings almost touch overhead, a temple hidden inside someone's house, and the kachori that people cross the city for...",
    destinations: [
      "Kashi Vishwanath Corridor",
      "Annapurna Devi Temple",
      "Kashi Karvat Temple",
      "Thatheri Bazaar (UNESCO brass-workers' lane)",
      "Kachori Gali",
    ],
    duration: "3 Hours",
    price: 500,
    featured: false,
    tags: ["Ancient Alleys", "Temples", "Street Food", "Bazaars"],
    highlights: [
      {
        title: "Kashi Vishwanath — Beyond the Corridor",
        teaser:
          "Everyone visits the main temple. Your Spotmate shows you the lanes around it — the older temples, the quiet corners, the stories the corridor renovation buried.",
      },
      {
        title: "Annapurna Devi Temple",
        teaser:
          "The goddess of food and nourishment. A stunning gold-plated temple most tourists walk past because they don't know it's there.",
      },
      {
        title: "Kashi Karvat — The Narrow Lane Temple",
        teaser:
          "Tucked inside one of Kashi's narrowest lanes. This ancient temple has a significance most visitors never learn about — your Spotmate will explain.",
      },
      {
        title: "Thatheri Bazaar — UNESCO Heritage Brass Lane",
        teaser:
          "A living UNESCO-recognized heritage lane where brass artisans still work with techniques unchanged for generations. The sound of hammering is the soundtrack of old Kashi.",
      },
    ],
    hiddenGems:
      "There are temples inside private homes, rooftop views that look over the golden spires, and shortcuts through the maze that only someone born here would know. Your Spotmate reveals a few — but not everything goes on a website.",
    localFood:
      "Kachori Gali's legendary breakfast, tamatar chaat from a stall with no signboard, and the jalebi place that has a queue every morning for a reason.",
    souvenirs:
      "The brass work from Thatheri Bazaar is genuine and UNESCO-recognized. Your Spotmate knows which shops are generational artisans and which are resellers.",
    guideProfile: {
      name: "Your Spotmate",
      badge: "Old Kashi Lane Expert",
      badgeType: "expert" as const,
      bio: "Grew up inside the labyrinth. Can navigate every turn of the old city with eyes closed and knows every shopkeeper by family name.",
      experienceYears: 10,
      languages: ["English", "Hindi"],
      neighborhood: "Chowk, Vishwanath Gali",
    },
  },
  {
    slug: "sarnath-sanctuary",
    city: "varanasi",
    name: "Sarnath Sanctuary & Archaeological Forest",
    spotmateType: "Certified Professional Guide",
    spotmateTypeSlug: "professional-guide",
    spotmateBadge: "Certified Archaeological Historian",
    spotmateReason:
      "This is an archaeological site with deep Buddhist history dating back to 528 BCE. Your Spotmate here is a certified professional guide with formal historical and archaeological expertise, holding official government accreditation and deep knowledge of Mauryan inscriptions and stupa architecture.",
    description: "The ancient Deer Park of the Buddha's First Sermon, 2,300-year-old Ashokan stone pillars, and peaceful monastic groves.",
    teaser: "Ancient Mauryan mirror-stone polish, hidden Bodhi tree offshoots, and chanting inside quiet bamboo gardens...",
    destinations: ["Dhamekh Stupa", "Ashoka Pillar Ruins", "Sarnath Archaeological Museum", "Mulagandha Kuti Vihara", "Deer Park Forest"],
    duration: "3 Hours",
    bestTime: "Morning (8:00 AM – 11:30 AM) or Afternoon (2:00 PM – 5:00 PM)",
    price: 500,
    featured: false,
    tags: ["Archaeology", "Buddhism 528 BCE", "Ashoka Pillar", "Monastic Silence"],
    highlights: [
      {
        title: "The Monumental Dhamekh Stupa",
        teaser: "The massive 143-foot cylindrical stupa preserving 1,500-year-old Gupta geometric floral friezes chiseled into red sandstone.",
      },
      {
        title: "Ashoka's Mirror-Polished Pillar",
        teaser: "The surviving 3rd century BCE polished pillar shaft whose reflective stone polish remains a lost metallurgical secret.",
      },
      {
        title: "The Original Four-Lion Capital",
        teaser: "An intimate analysis of the original 4-lion capital adopted as India's national emblem, viewed inside the tranquil museum vault.",
      },
      {
        title: "The Direct Bodhi Tree Descendant",
        teaser: "A sacred descendant sapling of the original Anuradhapura Bodhi tree, surrounded by silent chanting monks in saffron robes.",
      },
    ],
    hiddenGems:
      "Excavated subterranean meditation cells carved into 5th-century brickwork, rarely noticed Brahmi inscriptions on ancient foundations, and peaceful monastic bamboo gardens.",
    localFood:
      "Handmade Tibetan thukpa and steamed mountain dumplings from refugee monastery stalls, accompanied by wild herbal mint tea.",
    souvenirs:
      "Hand-painted silk Thangka tapestries created by resident monastic artists, authentic Bodhi seed prayer beads, and medicinal Himalayan herbal incense.",
    guideProfile: {
      name: "Your Spotmate",
      badge: "Certified Archaeological Historian & Guide",
      badgeType: "historian" as const,
      bio: "A certified professional guide with formal archaeological and historical expertise, holding official government accreditation for Sarnath's heritage site.",
      experienceYears: 12,
      languages: ["English", "Hindi", "French"],
      neighborhood: "Sarnath Heritage Zone",
    },
  },
];

export function getHubBySlug(slug: string): Hub | undefined {
  return hubs.find((hub) => hub.slug.toLowerCase() === slug.toLowerCase());
}

export function getHubsByCity(citySlug: string): Hub[] {
  return hubs.filter((hub) => hub.city.toLowerCase() === citySlug.toLowerCase());
}
