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
  bestTime: string;
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
    name: "Assi & Southern Akharas",
    spotmateType: "Local Expert",
    spotmateTypeSlug: "local-expert",
    spotmateBadge: "Generational Local Expert",
    spotmateReason:
      "The southern ghats and ancient mud akharas are living traditions passed down through centuries. Your Spotmate was born and raised in these exact galis, has trained in traditional akharas, and knows the sadhus, boatmen, and wrestling masters by name. Only a lifelong resident can open the heavy teak doors of these private brotherhoods.",
    description: "Morning ragas, ancient wrestling sanctuaries, and riverside intellectual chai circles.",
    teaser: "Hidden courtyards, dawn wrestling pits, the chai spot no guidebook mentions...",
    destinations: ["Assi Ghat", "Tulsi Ghat", "Chet Singh Ghat Fortress", "Akhara Goswami Tulsidas", "Anandmayi Ashram"],
    duration: "2.5 Hours",
    bestTime: "Dawn (6:00 AM – 8:30 AM)",
    price: 1200,
    featured: true,
    tags: ["Dawn Walk", "Akharas", "Ghat Life", "Riverside Heritage"],
    highlights: [
      {
        title: "The 400-Year Consecrated Akhara",
        teaser: "A 400-year-old courtyard where pehlwans train at dawn in consecrated red earth with mustard oil and wooden maces.",
      },
      {
        title: "Tulsidas's Riverside Writing Alcove",
        teaser: "The quiet wooden balcony overlooking the bend of Mother Ganga where the Ramcharitmanas was originally inked.",
      },
      {
        title: "Riverside Intellectual Chai Circle",
        teaser: "A legendary chai stand under a sacred banyan tree where poets, scholars, and musicians have gathered daily for 60 years.",
      },
      {
        title: "Chet Singh's Fortress Secret Gate",
        teaser: "The hidden water-gate beneath the 18th-century stone fortress where Maharaja Chet Singh escaped Warren Hastings.",
      },
    ],
    hiddenGems:
      "Subterranean mud akharas hidden behind unmarked wooden gates, an unmapped riverside Sanskrit library founded in 1928, and secluded stone step-wells where morning mist lingers undisturbed.",
    localFood:
      "Clay-pot Pehlwan lassi crowned with thick rabdi, piping-hot hing kachoris with spiced pumpkin aloo, and wood-fired lemon mint chai.",
    souvenirs:
      "Traditional akhara red earth herbal clay bars, hand-hammered brass water lotas from southern metalworkers, and tulsi bead japa malas strung by ghat artisans.",
    guideProfile: {
      name: "Abhishek Pandey",
      badge: "Assi Ghat Native & Cultural Storyteller",
      badgeType: "expert",
      bio: "Born steps from Assi Ghat, Abhishek has spent 32 years immersed in the morning rituals, music traditions, and akhara lore of South Varanasi.",
      experienceYears: 8,
      languages: ["English", "Hindi", "Bhojpuri"],
      neighborhood: "Assi Ghat, Shivala",
    },
  },
  {
    slug: "old-kashi-gallis",
    city: "varanasi",
    name: "Old Kashi Gallis & Golden Sanctum",
    spotmateType: "Local Expert",
    spotmateTypeSlug: "local-expert",
    spotmateBadge: "Labyrinth Heritage Expert",
    spotmateReason:
      "The narrow lanes of old Kashi are best explored with someone who grew up here. Built thousands of years ago as an intricate defensive maze, GPS signals drop within meters. Your Spotmate is a local expert who knows every hidden turn, century-old dead ends, secret courtyard passages, and generational guild shops.",
    description: "Serpentine alleyways, ancient stone archways, generational perfume distillers, and clandestine sweet makers.",
    teaser: "Hidden courtyards behind 300-year-old carved doors, the 5th-generation brass cauldron, and secret rooftop angles...",
    destinations: ["Thatheri Bazaar", "Kachori Gali", "Vishwanath Gali", "Dal Mandi", "Gopal Mandir Gali"],
    duration: "3 Hours",
    bestTime: "Morning (7:30 AM – 10:30 AM) or Afternoon (3:30 PM – 6:30 PM)",
    price: 1400,
    featured: false,
    tags: ["Ancient Alleys", "Generational Crafts", "Sacred Shrines", "Culinary Secrets"],
    highlights: [
      {
        title: "600-Year Courtyard Shrine",
        teaser: "An unmarked 600-year-old stone courtyard temple where priests still chant morning Vedic hymns by earthen oil lamp.",
      },
      {
        title: "Generational Brass Beaters' Alley",
        teaser: "A fifth-generation brass beaters' enclave where hammer blows create rhythmic counterpoints against the temple bells.",
      },
      {
        title: "Secret Rooftop Sanctuary",
        teaser: "A private residential rooftop vantage point with an uninterrupted view across the glittering golden shikharas.",
      },
      {
        title: "The Deg-Distilled Clay Perfumer",
        teaser: "An antique copper alembic workshop distilling true Mitti Attar — bottling the fragrance of rain meeting parched summer soil.",
      },
    ],
    hiddenGems:
      "Courtyards where sacred cows nap peacefully beside 19th-century wall frescoes, private family temples with emerald shivalingams, and subterranean passages once used by royal messengers.",
    localFood:
      "Airy winter Malaiyo foam garnished with saffron and crushed pistachios, crisp desi ghee kachoris, and authentic melt-in-the-mouth Lal Peda.",
    souvenirs:
      "Natural Mitti Attar (baked earth fragrance) distilled in ancient copper pots, genuine Gulabi Meenakari enameled silver pendants, and hand-carved sandalwood figurines.",
    guideProfile: {
      name: "Divyanshu Sharma",
      badge: "5th-Generation Kashi Galli Resident",
      badgeType: "expert",
      bio: "Grew up in Dal Mandi alleyway. Divyanshu can navigate all 400 labyrinth turns with his eyes closed and knows every shopkeeper by family lineage.",
      experienceYears: 10,
      languages: ["English", "Hindi"],
      neighborhood: "Thatheri Bazaar, Chowk",
    },
  },
  {
    slug: "manikarnika-riverfront",
    city: "varanasi",
    name: "Manikarnika & Riverfront Heritage",
    spotmateType: "Local Expert & Cultural Custodian",
    spotmateTypeSlug: "local-expert",
    spotmateBadge: "Riverfront Cultural Custodian",
    spotmateReason:
      "The eternal cremation grounds of Manikarnika and Harishchandra Ghat are profoundly sacred, delicate spaces of life, death, and philosophical release. Exploring here requires deep cultural sensitivity, dignity, and insider etiquette. Your Spotmate comes from a traditional riverfront family with ancestral ties to the ghats, ensuring your visit is deeply contemplative and respectful without intruding.",
    description: "The eternal sacred fire burning for 3,000 years, submerged temples, and deep philosophical truths of Moksha.",
    teaser: "The 3,000-year-old unbroken fire, quiet contemplation terraces, and the real philosophy of liberation...",
    destinations: ["Manikarnika Ghat", "Harishchandra Ghat", "Scindia Ghat (Leaning Temple)", "Panchganga Ghat", "Mir Ghat"],
    duration: "2.5 Hours",
    bestTime: "Late Afternoon / Sunset (4:30 PM – 7:00 PM)",
    price: 1500,
    featured: false,
    tags: ["Sacred Fire", "Philosophy & Moksha", "Submerged Temples", "Twilight Ghats"],
    highlights: [
      {
        title: "The 3,000-Year Eternal Flame",
        teaser: "The sacred eternal fire kept burning by the Dom Raja family continuously for centuries without a single hour extinguished.",
      },
      {
        title: "The Leaning Submerged Sanctum",
        teaser: "The 150-year-old Ratneshwar Mahadev temple gracefully leaning at a 9-degree angle with its lower half embraced by the river.",
      },
      {
        title: "The High Terrace of Contemplation",
        teaser: "An elevated quiet stone veranda overlooking the funeral ghats where philosophers discuss the cycle of Samsara with dignity.",
      },
      {
        title: "Panchganga's Five-River Confluence",
        teaser: "The peaceful wide stone steps where five mystical subterranean rivers meet, bathed in twilight brass lamp reflections.",
      },
    ],
    hiddenGems:
      "A quiet stone veranda perched high above the river smoke where scholars reflect, 16th-century stone inscriptions detailing royal pilgrimages, and hidden stepwells leading straight to holy subterranean springs.",
    localFood:
      "Spiced Banarasi Tamatar Chaat served in miniature clay handis topped with crunchy namkeen and ghee, followed by royal Maghai Paan.",
    souvenirs:
      "Authentic five-faced Rudraksha beads authenticated by scholars, hand-pressed pure mustard oil from ancient oil-presses, and terracotta river diyas.",
    guideProfile: {
      name: "Kailash Mishra",
      badge: "Ghat Philosopher & Vedic Scholar",
      badgeType: "expert",
      bio: "Whose family has lived along the riverfront for four generations. Kailash teaches the profound philosophical foundations of Kashi's sacred geography.",
      experienceYears: 12,
      languages: ["English", "Hindi", "Sanskrit"],
      neighborhood: "Scindia Ghat, Manikarnika",
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
    price: 1600,
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
      name: "Dr. Ananya Roy",
      badge: "Certified Archaeological Historian & Guide",
      badgeType: "historian",
      bio: "Doctorate in Mauryan Archaeological History with over 12 years of accredited guiding. Ananya brings 2,500 years of Buddhist philosophy vividly to life.",
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

