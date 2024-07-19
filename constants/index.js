export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const navbarLinks = [
  {
    imgURL: "/assets/icons/membership.svg",
    route: "https://www.partsbase.com/becomeaMember?",
    label: "Membership",
  },
  {
    imgURL: "/assets/icons/commerce.svg",
    route: "#",
    label: "Commerce",
  },
  {
    imgURL: "/assets/icons/integrations.svg",
    route: "/integrations",
    label: "Integrations",
  },
  {
    imgURL: "/assets/icons/resources.svg",
    route: "/resources",
    label: "Resources",
  },
  {
    imgURL: "/assets/icons/pbexpo.svg",
    route: "https://www.pbexpo.org/",
    label: "PBEXPO",
  },
];

export const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "https://www.partsbase.com/becomeaMember?",
    label: "Membership",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/commerce",
    label: "Commerce",
    subLinks: [
      {
        imgURL: "",
        route:
          "https://partstore.partsbase.com/?utm_content=navi&utm_medium=organic&utm_source=partsbase_website",
        label: "PartStore",
      },
      {
        imgURL: "",
        route:
          "https://pblister.partsbase.com/?utm_content=navi&utm_medium=organic&utm_source=partsbase_website",
        label: "PB Lister",
      },
    ],
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "https://www.partsbase.com/integrations?",
    label: "Integrations",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "#",
    label: "Resources",
    subLinks: [
      {
        imgURL: "",
        route:
          "https://www.partsbase.com/landing/training?utm_content=footer&utm_medium=organic&utm_source=partsbase_website",
        label: "Video Library",
      },
      {
        imgURL: "",
        route:
          "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQG6PR-dgArOxAAAAZCxWJU4_sss4o25-lQW7F4ibgkB-kAPYaTbV3lyLl2r_IkylL3_fcJ9twz9LEFrVg-TApveKRBVOo1REAPhknAe8FJFYWeeawxctorgv27Gmob2tvIiAc8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fpartsbase-com",
        label: "Careers",
      },
      { imgURL: "", route: "https://blog.partsbase.com/", label: "Blog" },
    ],
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "https://www.pbexpo.org/",
    label: "PBEXPO",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

export const partDetails = {
  partNumber: "DK120",
  descriptions: [
    "Underwater Acoustic Beacon",
    "Underwater Locating Beacon",
    "U/W Beacon",
  ],
  alternativePartNumbers: [
    "DK120-90",
    "266-E0305-00;DK100",
    "266E0305-00;266E0305-02;316-6004-003",
  ],
  manufacturers: [
    { name: "DUKANE", nsn: "4320144279119" },
    { name: "S61 - OTHER", nsn: "5845014333387" },
    { name: "WH50", nsn: "5845014610320" },
  ],
};

export const statisticsData = [
  {
    title: "Active Sellers",
    value: 259,
    description: "Click to View All Suppliers",
    isLink: true,
  },
  {
    title: "Searched",
    value: 122,
    description: "times in the last 30 days",
    isLink: false,
    extraText: "",
  },
];

export const breadcrumbs = [
  { label: "Home", href: "https://www.partsbase.com/" },
  { label: "Parts", href: "https://www.partsbase.com/parts/" },
  { label: "DK120", href: "/" },
];

export const descriptionItems = [
  { label: "PART TEST 19", href: "/part-test-19" },
  { label: "BEACON", href: "/beacon" },
  { label: "ACOUSTIC BEACON", href: "/acoustic-beacon" },
];

export const alternativePartNumbers = [
  { label: "19", href: "/19" },
  { label: "DK-120-90; ELP-362D", href: "/dk-120-90" },
  { label: "266-E0305-00", href: "/266-e0305-00" },
];

export const manufacturers = [
  { label: "MANUFACTURE PARTSBASE", href: "/manufacture-partsbase" },
  { label: "DUKANE", href: "/dukane" },
];

export const nsn = ["4320144279119", "5845014333387", "5845014610320"];

export const marketPrice = {
  conditionCodes: ["AR", "EX", "FN"],
  medianMarket: ["$200.00", "$895.78", "$1655.99"],
};

export const relatedSearchesData = [
  {
    term: "DK120",
    description: "beacon",
    link: "/search-results/dk120",
  },
  {
    term: "130835",
    description: "cartridge, aircraft fire extinguisher",
    link: "/search-results/130835",
  },
  {
    term: "AA36",
    description: "sales@773grp.com",
    link: "/search-results/aa36",
  },
  {
    term: "1000",
    description: "catch",
    link: "/search-results/1000",
  },
  {
    term: "51989262",
    description: "apu starter",
    link: "/search-results/51989262",
  },
];

export const relatedSearchesForDK120 = [
  {
    term: "DK120",
    description: "beacon",
    link: "/search-results/dk120",
  },
  {
    term: "130835",
    description: "cartridge, aircraft fire extinguisher",
    link: "/search-results/130835",
  },
  {
    term: "AA36",
    description: "sales@773grp.com",
    link: "/search-results/aa36",
  },
  {
    term: "1000",
    description: "catch",
    link: "/search-results/1000",
  },
  {
    term: "51989262",
    description: "apu starter",
    link: "/search-results/51989262",
  },
];

export const productData = [
  {
    imageCount: false,
    unitPrice: 0.0,
    companyName: "Company 1",
    quantity: 1,
    uploadDate: "04/04/2024",
    description: "CANCELL",
    cert: false,
    partNumber: "DK120",
    location: "CA, United States",
    altParts: "122",
    conditionCode: "NE",
  },
  {
    imageCount: false,
    companyName: "Company 2",
    unitPrice: 0.0,
    quantity: 200,
    uploadDate: "03/18/2024",
    description: "Beacon",
    cert: false,
    partNumber: "DK120",
    location: "MN, United States",
    altParts: "",
    conditionCode: "EX",
  },
  {
    imageCount: false,
    companyName: "Company 3",
    unitPrice: 0.0,
    quantity: 100,
    uploadDate: "03/18/2024",
    description: "PART TEST 19",
    cert: false,
    partNumber: "DK120",
    location: "MN, United States",
    altParts: "19",
    conditionCode: "NE",
  },
  {
    imageCount: false,
    companyName: "Company 4",
    unitPrice: 0.0,
    quantity: 50,
    uploadDate: "02/25/2024",
    description: "SSFDR ULB",
    cert: false,
    partNumber: "DK120",
    location: "TX, United States",
    altParts: "001",
    conditionCode: "NE",
  },
  {
    imageCount: false,
    companyName: "Company 5",
    unitPrice: 0.0,
    quantity: 30,
    uploadDate: "01/30/2024",
    description: "BEACON, 30 DAY",
    cert: true,
    partNumber: "DK120",
    location: "FL, United States",
    altParts: "002",
    conditionCode: "EX",
  },
  {
    imageCount: true,
    companyName: "Company 6",
    unitPrice: 0.0,
    quantity: 10,
    uploadDate: "03/05/2024",
    description: "BEACON",
    cert: false,
    partNumber: "DK120",
    location: "NY, United States",
    altParts: "003",
    conditionCode: "AR",
  },
  {
    imageCount: false,
    companyName: "Company 7",
    unitPrice: 0.0,
    quantity: 75,
    uploadDate: "04/01/2024",
    description: "BEACON",
    cert: true,
    partNumber: "DK120",
    location: "OH, United States",
    altParts: "004",
    conditionCode: "NE",
  },
  {
    imageCount: true,
    companyName: "Company 8",
    unitPrice: 0.0,
    quantity: 150,
    uploadDate: "03/15/2024",
    description: "SSFDR ULB",
    cert: false,
    partNumber: "DK120",
    location: "CA, United States",
    altParts: "005",
    conditionCode: "EX",
  },
  {
    imageCount: false,
    companyName: "Company 9",
    unitPrice: 0.0,
    quantity: 120,
    uploadDate: "02/10/2024",
    description: "TEST ITEM 06",
    cert: true,
    partNumber: "DK120",
    location: "TX, United States",
    altParts: "006",
    conditionCode: "AR",
  },
  {
    imageCount: true,
    companyName: "Company 10",
    unitPrice: 0.0,
    quantity: 90,
    uploadDate: "03/20/2024",
    description: "BEACON",
    cert: false,
    partNumber: "DK120",
    location: "FL, United States",
    altParts: "007",
    conditionCode: "EX",
  },
];

export const testimonials = [
  {
    quote: "PartsBase is a very useful tool I take advantage of daily.",
    author: "Zachery Baker",
    role: "Emergency Response Coordinator",
    companyLogo: "/assets/images/delta-logo.svg",
    companyName: "Delta TechOps",
  },
  {
    quote: "I understand firsthand why companies use PartsBase.",
    author: "Jimmy White",
    role: "Operations Manager APU Shop",
    companyLogo: "/assets/images/gulfstream.svg",
    companyName: "Gulfstream",
  },
  {
    quote: "Using PartsBase has streamlined our procurement process.",
    author: "Laura Johnson",
    role: "Procurement Specialist",
    companyLogo: "/assets/images/aviation-week.svg",
    companyName: "Aviation Week",
  },
  {
    quote:
      "PartsBase has been an invaluable resource for our maintenance team.",
    author: "Mike Taylor",
    role: "Maintenance Manager",
    companyLogo: "/assets/images/duncan-aviation.svg",
    companyName: "Duncan Aviation",
  },
  {
    quote: "The customer service from PartsBase has been outstanding.",
    author: "Sarah Williams",
    role: "Customer Support Lead",
    companyLogo: "/assets/images/FlightSafety.svg",
    companyName: "FlightSafety",
  },
  {
    quote:
      "PartsBase's platform is user-friendly and highly effective. It has become a critical tool in our day-to-day operations.",
    author: "David Lee",
    role: "Operations Director",
    companyLogo: "/assets/images/skywest.svg",
    companyName: "Skywest",
  },
];
