/* =========================================================
   AWAIS ARCHITECT — DEMO DATA LAYER
   All figures in this file are placeholder / demo data for
   prototype purposes only. Nothing here reflects real
   revenue, real client files, or verified live TikTok stats.
   ========================================================= */

const PROFILE = {
  name: "Muhammad Awais",
  handle: "@awais.architect",
  tiktokUrl: "https://www.tiktok.com/@awais.architect",
  role: "Architect & Architectural Visualization Creator",
  country: "Pakistan (publicly indexed)",
  followers: "35K+",
  email: "hello@awaisarchitect.example",
  whatsapp: "+92 XXX XXXXXXX",
  bio: "Muhammad Awais designs and visualizes residential and commercial architecture, then shares the process on TikTok as @awais.architect — from first floor plan sketch to finished 3D walkthrough."
};

// Sheet-number style IDs mirror real architectural drawing sets (A-01, A-02…)
const PROJECTS = [
  {
    id: "A-01",
    slug: "modern-5-marla-residence",
    title: "Modern 5 Marla Residence",
    category: "Residential",
    style: "Modern Minimal",
    plotSize: "5 Marla",
    floors: 2,
    bedrooms: 4,
    bathrooms: 4,
    kitchens: 1,
    livingAreas: 2,
    parking: "1 Car",
    status: "Download Available",
    projectLabel: "Original Concept",
    price: 9.99,
    cover: "5marla-front.jpg",
    description: "A compact, light-filled family home for a 5 marla urban plot, built around a double-height living room and a cantilevered street-facing facade.",
    tags: ["5 Marla", "Residential", "2 Floors", "Modern", "Downloadable"],
    tiktok: { views: "3.1M+", likes: "104K+", saves: "21K+", shares: "7K+" },
    gallery: [
      "Front Elevation","Rear Elevation","Ground Floor Plan","First Floor Plan",
      "Roof Plan","Building Section","Living Room Interior","Kitchen Interior",
      "Master Bedroom","Exterior Night View","3D Render — Street View","Animation Preview Frame"
    ],
    drawings: [
      { name: "Ground Floor Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "First Floor Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Roof Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Front Elevation", types: ["PDF","JPG"], size: "A3 · 1:100" },
      { name: "Side Elevation", types: ["PDF","JPG"], size: "A3 · 1:100" },
      { name: "Rear Elevation", types: ["PDF","JPG"], size: "A3 · 1:100" },
      { name: "Building Section A-A", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Door Schedule", types: ["PDF"], size: "A4" },
      { name: "Window Schedule", types: ["PDF"], size: "A4" },
      { name: "Furniture Layout", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Electrical Layout", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Plumbing Layout", types: ["PDF","DWG"], size: "A3 · 1:100" }
    ],
    freeIncludes: ["Low-res PDF (watermarked)", "2 preview JPGs", "Project brief"],
    premiumIncludes: ["Full DWG set", "High-res PDF set", "Floor plans", "Elevations", "Sections", "Schedules", "High-res renders"],
    analytics: { views: 18420, downloads: 1284, favorites: 312 },
    seo: {
      title: "Modern 5 Marla House Design, Floor Plan, Elevation & CAD Files",
      description: "Explore the Modern 5 Marla Residence — full floor plans, elevations, sections and downloadable CAD/PDF files by Muhammad Awais.",
      keywords: ["5 marla house design","5 marla house plan","modern house elevation","Pakistani house design","house CAD drawing","architectural floor plan","DWG house plan"]
    }
  },
  {
    id: "A-02",
    slug: "luxury-10-marla-contemporary-house",
    title: "Luxury 10 Marla Contemporary House",
    category: "Residential",
    style: "Contemporary",
    plotSize: "10 Marla",
    floors: 2,
    bedrooms: 5,
    bathrooms: 6,
    kitchens: 1,
    livingAreas: 3,
    parking: "2 Cars",
    status: "Download Available",
    projectLabel: "Portfolio Project",
    price: 14.99,
    cover: "10marla-front.jpg",
    description: "A generous contemporary villa with a stone-and-glass facade, a central courtyard, and a dedicated family lounge on each floor.",
    tags: ["10 Marla", "Residential", "2 Floors", "Contemporary", "Downloadable"],
    tiktok: { views: "1.4M+", likes: "62K+", saves: "9K+", shares: "3K+" },
    gallery: [
      "Front Elevation","Rear Elevation","Ground Floor Plan","First Floor Plan",
      "Roof Plan","Building Section","Courtyard View","Living Room Interior",
      "Master Suite","Exterior Day View","3D Render — Garden View","Night Render"
    ],
    drawings: [
      { name: "Ground Floor Plan", types: ["PDF","DWG"], size: "A2 · 1:100" },
      { name: "First Floor Plan", types: ["PDF","DWG"], size: "A2 · 1:100" },
      { name: "Roof Plan", types: ["PDF","DWG"], size: "A2 · 1:100" },
      { name: "Front Elevation", types: ["PDF","JPG"], size: "A2 · 1:100" },
      { name: "Building Section A-A", types: ["PDF","DWG"], size: "A2 · 1:100" },
      { name: "Electrical Layout", types: ["PDF","DWG"], size: "A2 · 1:100" }
    ],
    freeIncludes: ["Low-res PDF (watermarked)", "2 preview JPGs", "Project brief"],
    premiumIncludes: ["Full DWG set", "High-res PDF set", "Floor plans", "Elevations", "Sections", "High-res renders"],
    analytics: { views: 12840, downloads: 742, favorites: 201 },
    seo: {
      title: "Luxury 10 Marla Contemporary House Design & CAD Files",
      description: "Full drawing set and renders for a Luxury 10 Marla Contemporary House by Muhammad Awais — floor plans, elevations, DWG downloads.",
      keywords: ["10 marla house design","contemporary house Pakistan","10 marla house plan","luxury house elevation"]
    }
  },
  {
    id: "A-03",
    slug: "modern-1-kanal-villa",
    title: "Modern 1 Kanal Villa",
    category: "Luxury Residential",
    style: "Luxury",
    plotSize: "1 Kanal",
    floors: 3,
    bedrooms: 6,
    bathrooms: 7,
    kitchens: 2,
    livingAreas: 4,
    parking: "3 Cars",
    status: "Client Project — Portfolio Only",
    projectLabel: "Client Project",
    price: null,
    cover: "1kanal-front.jpg",
    description: "A three-storey villa on a full kanal plot, featuring a basement entertainment level, rooftop terrace, and a home elevator core.",
    tags: ["1 Kanal", "Luxury Residential", "3 Floors", "Client Project"],
    tiktok: { views: "2.2M+", likes: "88K+", saves: "15K+", shares: "5K+" },
    gallery: [
      "Front Elevation","Ground Floor Plan","First Floor Plan","Basement Plan",
      "Roof Terrace","Building Section","Living Room Interior","Home Theatre",
      "Exterior Night View","3D Render — Aerial View"
    ],
    drawings: [
      { name: "Front Elevation (Preview Only)", types: ["JPG"], size: "Portfolio Preview" }
    ],
    freeIncludes: ["Portfolio preview images only"],
    premiumIncludes: [],
    analytics: { views: 22110, downloads: 0, favorites: 540 },
    seo: {
      title: "Modern 1 Kanal Villa Design — Portfolio Project",
      description: "A modern 1 Kanal luxury villa concept by Muhammad Awais, shown for portfolio purposes.",
      keywords: ["1 kanal house design","luxury villa Pakistan","modern villa elevation"]
    },
    notDownloadable: true
  },
  {
    id: "A-04",
    slug: "compact-urban-house",
    title: "Compact Urban House",
    category: "Residential",
    style: "Minimal",
    plotSize: "3 Marla",
    floors: 3,
    bedrooms: 3,
    bathrooms: 3,
    kitchens: 1,
    livingAreas: 1,
    parking: "1 Car",
    status: "Download Available",
    projectLabel: "Original Concept",
    price: 7.99,
    cover: "3marla-front.jpg",
    description: "A tight-footprint city home stacked over three floors to maximize light and privacy on a narrow 3 marla plot.",
    tags: ["3 Marla", "Residential", "3 Floors", "Minimal", "Downloadable"],
    tiktok: { views: "890K+", likes: "41K+", saves: "6K+", shares: "2K+" },
    gallery: ["Front Elevation","Ground Floor Plan","First Floor Plan","Second Floor Plan","Roof Plan","Building Section","Living Room Interior","3D Render — Street View"],
    drawings: [
      { name: "Ground Floor Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "First Floor Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Second Floor Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Front Elevation", types: ["PDF","JPG"], size: "A3 · 1:100" }
    ],
    freeIncludes: ["Low-res PDF (watermarked)", "1 preview JPG"],
    premiumIncludes: ["Full DWG set", "High-res PDF set", "Elevations", "Sections"],
    analytics: { views: 9310, downloads: 604, favorites: 128 },
    seo: {
      title: "Compact 3 Marla Urban House Design & Floor Plan",
      description: "A space-efficient 3 marla house design by Muhammad Awais with downloadable floor plans and elevations.",
      keywords: ["3 marla house design","3 marla house plan","small house design Pakistan"]
    }
  },
  {
    id: "A-05",
    slug: "modern-commercial-plaza",
    title: "Modern Commercial Plaza",
    category: "Commercial",
    style: "Contemporary",
    plotSize: "1.5 Kanal",
    floors: 4,
    bedrooms: null,
    bathrooms: 6,
    kitchens: 0,
    livingAreas: null,
    parking: "12 Cars",
    status: "Download Available",
    projectLabel: "Portfolio Project",
    price: 24.99,
    cover: "plaza-front.jpg",
    description: "A four-storey mixed-retail plaza with ground-floor showrooms, upper-floor offices, and a glazed atrium core.",
    tags: ["Commercial", "4 Floors", "Contemporary", "Downloadable"],
    tiktok: { views: "540K+", likes: "19K+", saves: "3K+", shares: "1K+" },
    gallery: ["Front Elevation","Ground Floor Plan","Typical Floor Plan","Roof Plan","Building Section","Atrium Interior","3D Render — Street View","Night Render"],
    drawings: [
      { name: "Ground Floor Plan", types: ["PDF","DWG"], size: "A1 · 1:100" },
      { name: "Typical Floor Plan", types: ["PDF","DWG"], size: "A1 · 1:100" },
      { name: "Front Elevation", types: ["PDF","JPG"], size: "A1 · 1:100" },
      { name: "Building Section", types: ["PDF","DWG"], size: "A1 · 1:100" }
    ],
    freeIncludes: ["Low-res PDF (watermarked)", "2 preview JPGs"],
    premiumIncludes: ["Full DWG set", "High-res PDF set", "Elevations", "Sections", "High-res renders"],
    analytics: { views: 6720, downloads: 218, favorites: 74 },
    seo: {
      title: "Modern Commercial Plaza Design — Floor Plans & Elevation",
      description: "A contemporary commercial plaza concept by Muhammad Awais with downloadable drawings.",
      keywords: ["commercial plaza design","commercial building elevation","plaza floor plan"]
    }
  },
  {
    id: "A-06",
    slug: "luxury-bedroom-interior",
    title: "Luxury Bedroom Interior",
    category: "Interior",
    style: "Luxury",
    plotSize: "—",
    floors: null,
    bedrooms: null,
    bathrooms: null,
    kitchens: null,
    livingAreas: null,
    parking: null,
    status: "Download Available",
    projectLabel: "Original Concept",
    price: 4.99,
    cover: "bedroom-interior.jpg",
    description: "A warm, textured master bedroom concept with a backlit headboard wall, walk-in closet, and a private reading nook.",
    tags: ["Interior", "Luxury", "Downloadable"],
    tiktok: { views: "610K+", likes: "34K+", saves: "8K+", shares: "1.2K+" },
    gallery: ["3D Render — Main View","3D Render — Closet","3D Render — Reading Nook","Furniture Layout","Material Board"],
    drawings: [
      { name: "Furniture Layout", types: ["PDF","DWG"], size: "A3 · 1:50" },
      { name: "Material & Finish Board", types: ["PDF"], size: "A3" }
    ],
    freeIncludes: ["1 preview render (watermarked)"],
    premiumIncludes: ["High-res renders", "Furniture layout", "Material board", "Lighting plan"],
    analytics: { views: 8410, downloads: 390, favorites: 165 },
    seo: {
      title: "Luxury Bedroom Interior Design Concept & Renders",
      description: "A luxury bedroom interior concept by Muhammad Awais with downloadable renders and layout.",
      keywords: ["bedroom interior design","luxury bedroom render","interior design Pakistan"]
    }
  },
  {
    id: "A-07",
    slug: "modern-kitchen-concept",
    title: "Modern Kitchen Concept",
    category: "Interior",
    style: "Modern",
    plotSize: "—",
    floors: null,
    bedrooms: null,
    bathrooms: null,
    kitchens: 1,
    livingAreas: null,
    parking: null,
    status: "Download Available",
    projectLabel: "Original Concept",
    price: 4.99,
    cover: "kitchen-interior.jpg",
    description: "An open, island-centred kitchen concept in matte charcoal cabinetry with brass hardware and a hidden pantry wall.",
    tags: ["Interior", "Modern", "Downloadable"],
    tiktok: { views: "720K+", likes: "38K+", saves: "9K+", shares: "1.8K+" },
    gallery: ["3D Render — Island View","3D Render — Pantry Wall","Cabinet Layout","Material Board"],
    drawings: [
      { name: "Cabinet Layout", types: ["PDF","DWG"], size: "A3 · 1:50" },
      { name: "Material & Finish Board", types: ["PDF"], size: "A3" }
    ],
    freeIncludes: ["1 preview render (watermarked)"],
    premiumIncludes: ["High-res renders", "Cabinet layout", "Material board"],
    analytics: { views: 7120, downloads: 355, favorites: 141 },
    seo: {
      title: "Modern Kitchen Interior Design Concept & Renders",
      description: "A modern kitchen interior concept by Muhammad Awais with downloadable renders and cabinet layout.",
      keywords: ["modern kitchen design","kitchen interior render","kitchen cabinet layout"]
    }
  },
  {
    id: "A-08",
    slug: "contemporary-house-front-elevation",
    title: "Contemporary House Front Elevation",
    category: "Elevation",
    style: "Contemporary",
    plotSize: "8 Marla",
    floors: 2,
    bedrooms: null,
    bathrooms: null,
    kitchens: null,
    livingAreas: null,
    parking: null,
    status: "Download Available",
    projectLabel: "Original Concept",
    price: 5.99,
    cover: "elevation-front.jpg",
    description: "A study in horizontal massing and material contrast — dressed stone base, timber-look cladding, and a floating canopy.",
    tags: ["Elevation", "Contemporary", "8 Marla", "Downloadable"],
    tiktok: { views: "1.1M+", likes: "57K+", saves: "12K+", shares: "2.4K+" },
    gallery: ["Front Elevation — Day","Front Elevation — Night","Material Callouts","3D Render — Close-up"],
    drawings: [
      { name: "Front Elevation", types: ["PDF","DWG","JPG"], size: "A3 · 1:100" }
    ],
    freeIncludes: ["1 preview JPG (watermarked)"],
    premiumIncludes: ["High-res elevation PDF/DWG", "Material callouts", "Night render"],
    analytics: { views: 10230, downloads: 512, favorites: 189 },
    seo: {
      title: "Contemporary House Front Elevation Design",
      description: "A contemporary front elevation concept by Muhammad Awais with downloadable DWG and PDF files.",
      keywords: ["house front elevation","modern elevation design","contemporary facade design"]
    }
  },
  {
    id: "A-09",
    slug: "traditional-7-marla-house",
    title: "Traditional 7 Marla House",
    category: "Residential",
    style: "Traditional",
    plotSize: "7 Marla",
    floors: 2,
    bedrooms: 4,
    bathrooms: 5,
    kitchens: 1,
    livingAreas: 2,
    parking: "1 Car",
    status: "Download Available",
    projectLabel: "Original Concept",
    price: 9.99,
    cover: "7marla-front.jpg",
    description: "A traditional-facade family home with jharoka-inspired window bays and a central double-height entrance hall.",
    tags: ["7 Marla", "Residential", "Traditional", "Downloadable"],
    tiktok: { views: "430K+", likes: "22K+", saves: "5K+", shares: "1.1K+" },
    gallery: ["Front Elevation","Ground Floor Plan","First Floor Plan","Roof Plan","Building Section","Living Room Interior"],
    drawings: [
      { name: "Ground Floor Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "First Floor Plan", types: ["PDF","DWG"], size: "A3 · 1:100" },
      { name: "Front Elevation", types: ["PDF","JPG"], size: "A3 · 1:100" }
    ],
    freeIncludes: ["Low-res PDF (watermarked)", "1 preview JPG"],
    premiumIncludes: ["Full DWG set", "High-res PDF set", "Elevations", "Sections"],
    analytics: { views: 5980, downloads: 276, favorites: 96 },
    seo: {
      title: "Traditional 7 Marla House Design & Floor Plan",
      description: "A traditional-style 7 marla house design by Muhammad Awais with downloadable CAD files.",
      keywords: ["7 marla house design","traditional house Pakistan","7 marla house plan"]
    }
  },
  {
    id: "A-10",
    slug: "free-2-marla-house-plan",
    title: "Free 2 Marla House Plan",
    category: "Free Downloads",
    style: "Minimal",
    plotSize: "2 Marla",
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    kitchens: 1,
    livingAreas: 1,
    parking: null,
    status: "Free Download",
    projectLabel: "Original Concept",
    price: 0,
    cover: "2marla-front.jpg",
    description: "A single-storey starter home plan released as a free resource — full floor plan and front elevation, no premium tier.",
    tags: ["2 Marla", "Residential", "Free Download"],
    tiktok: { views: "310K+", likes: "18K+", saves: "14K+", shares: "3K+" },
    gallery: ["Front Elevation","Floor Plan"],
    drawings: [
      { name: "Floor Plan", types: ["PDF"], size: "A4" },
      { name: "Front Elevation", types: ["PDF"], size: "A4" }
    ],
    freeIncludes: ["Full PDF floor plan", "Full PDF elevation"],
    premiumIncludes: [],
    analytics: { views: 14980, downloads: 3120, favorites: 402 },
    seo: {
      title: "Free 2 Marla House Plan — Download PDF",
      description: "Download a free 2 marla house floor plan and elevation by Muhammad Awais.",
      keywords: ["free house plan","2 marla house plan free download","small house plan PDF"]
    }
  }
];

const FILTERS = {
  plotSize: ["2 Marla","3 Marla","5 Marla","7 Marla","8 Marla","10 Marla","1 Kanal","1.5 Kanal"],
  category: ["Residential","Commercial","Interior","Elevation","Luxury Residential","Free Downloads"],
  style: ["Modern","Minimal","Contemporary","Luxury","Traditional"],
  fileType: ["PDF","DWG","3D Model","Render","Animation"]
};

// In-memory only (no backend, no localStorage) — resets on reload, as expected for a prototype.
const RUNTIME = {
  leads: [],
  orders: [],
  favorites: new Set(),
  downloadLog: []
};

const REVENUE_DEMO = {
  digitalDownloads: 1240,
  advertising: 380,
  customProjects: 2450,
  get total() { return this.digitalDownloads + this.advertising + this.customProjects; }
};

function findProject(slug) {
  return PROJECTS.find(p => p.slug === slug);
}
