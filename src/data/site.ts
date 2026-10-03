export const site = {
  name: "The Paw Spa",
  tagline: "Pet grooming in Sanger",
  phoneDisplay: "559-612-1424",
  phoneHref: "tel:+15596121424",
  bookHref: "/book",
  bookLabel: "Book Appointment",
  /** POST target: `/book` for Netlify Forms on that page, or e.g. a Formspree URL */
  bookFormAction: "/book",
  bookFormName: "booking",
  location: "626, Sanger, California",
  /** Used for map embed and directions links */
  mapQuery: "The Paw Spa, 626, Sanger, CA",
  instagram: "thepawspa",
  instagramHref: "https://www.instagram.com/thepawspa/",
};

export const homeSectionSubtitles = {
  gallery:
    "Recent finishes from the grooming room in Sanger. Browse for shape and length ideas, or see more on the full gallery page.",
  team: "The groomers on the floor most days. Swap in names and photos here when you’re ready.",
  faq: "Booking, coats, sizing, and what to expect before you pick up. Call if your question is not covered here.",
};

export const visitHours = [
  { days: "Tuesday – Friday", time: "9:00 AM – 5:00 PM" },
  { days: "Saturday", time: "9:00 AM – 4:00 PM" },
  { days: "Sunday – Monday", time: "Closed" },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Services & Pricing" },
];

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export type PageCta = {
  title: string;
  titleEm?: string;
  text: string;
  buttonLabel: string;
  buttonHref?: string;
};

const defaultCta: PageCta = {
  title: "Ready for a groom?",
  text: "Send a booking request when it works for you. We follow up to confirm service, timing, and anything special about your dog’s coat.",
  buttonLabel: "Open the booking form",
};

const pageCtaByPath: Record<string, PageCta> = {
  "/": {
    title: "Your dog’s next visit",
    titleEm: "starts here",
    text: "A few details on the form are enough to get started. Tell us size, coat type, and how you want them to look; we’ll confirm the rest with you.",
    buttonLabel: "Book Appointment",
  },
  "/pricing": {
    title: "Numbers on the page,",
    titleEm: "details from us",
    text: "Coat condition and add-ons can shift the final price. Share your dog on the booking form and we’ll recommend the right service before anything is set in stone.",
    buttonLabel: "Book Appointment",
  },
  "/gallery": {
    title: "Bring a photo",
    titleEm: "or a vision",
    text: "Seen a cut you love? Mention it in your request. No picture is fine too; describe the length and shape you want and we’ll talk it through at confirmation.",
    buttonLabel: "Book with a note",
  },
  "/book": {
    title: "Prefer to browse first?",
    text: "Services and add-ons live on the pricing page. You can also call if you’d rather talk through coat and timing before you submit the form.",
    buttonLabel: "See services & pricing",
    buttonHref: "/pricing",
  },
  "/privacy": {
    title: "Questions about your data?",
    text: "For anything this page doesn’t cover, call the salon. When you’re ready to groom, the booking form is on the site anytime.",
    buttonLabel: "Go to booking",
  },
  "/terms": {
    title: "Scheduling a groom?",
    text: "Appointments are confirmed once we’ve had a chance to review your request and talk coat with you if needed.",
    buttonLabel: "Send a request",
  },
  "/accessibility": {
    title: "Need help using the site?",
    text: "Call the salon and we’ll walk you through booking or answer questions about your visit. You can also reach us through the form on the booking page.",
    buttonLabel: "Open booking page",
  },
};

export function closingFor(path: string): PageCta {
  const key = path.replace(/\/$/, "") || "/";
  return pageCtaByPath[key] ?? defaultCta;
}

export type PageHero = {
  title: string;
  titleEm?: string;
  lede: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

const defaultHero: PageHero = {
  title: "The Paw Spa",
  lede: "Pet grooming in Sanger by appointment. Send a booking request when you’re ready.",
  description: "Pet grooming in Sanger, California at The Paw Spa.",
};

const pageHeroByPath: Record<string, PageHero> = {
  "/": {
    title: "Grooming that feels",
    titleEm: "like a spa day",
    lede: "A calm, locally owned salon in Sanger. Full grooms, baths, spa upgrades, and creative color when you want something special.",
    description:
      "The Paw Spa in Sanger, CA. Full grooms, baths, spa upgrades, and creative color by appointment.",
    buttonLabel: "Book Appointment",
    buttonHref: "/book",
  },
  "/pricing": {
    title: "Grooming prices",
    titleEm: "by dog size",
    lede: "Every column is sized by weight so you know where to start. Matting, coat type, and add-ons can change the final number; we talk it through before the groom begins.",
    description:
      "Grooming prices at The Paw Spa in Sanger: baths, full grooms, doodle cuts, spa upgrades, add-ons, and creative color by size.",
  },
  "/gallery": {
    title: "Fresh from",
    titleEm: "the chair",
    lede: "Finished coats from recent visits in Sanger. Save a photo for your booking request, or browse for length and shape ideas before you schedule.",
    description:
      "Photos of finished grooms at The Paw Spa in Sanger, CA: doodles, poodles, terriers, and more.",
  },
  "/book": {
    title: "Tell us",
    titleEm: "about your dog",
    lede: "The form takes a few minutes. Share size, coat, and what you want done; we read every request and follow up by phone or text to confirm date, service, and price.",
    description:
      "Request a grooming appointment at The Paw Spa in Sanger. Tell us about your dog and we’ll follow up to confirm a time.",
  },
  "/privacy": {
    title: "Your privacy",
    titleEm: "at The Paw Spa",
    lede: "What this website and our booking form collect, how we use it, and who to call if something here is unclear.",
    description:
      "How The Paw Spa handles information when you visit the website, call, or book a groom in Sanger, California.",
  },
  "/terms": {
    title: "Using this",
    titleEm: "website",
    lede: "Plain-language terms for browsing the site, sending a booking request, and what to expect once an appointment is confirmed.",
    description: "Terms for using The Paw Spa website, a pet grooming salon in Sanger, California.",
  },
  "/accessibility": {
    title: "Access for",
    titleEm: "every visitor",
    lede: "We want the site to work with a keyboard, screen reader, or phone. If anything is hard to use, call the salon and we’ll help you book or find what you need.",
    description: "How to get help if a page on The Paw Spa website is difficult to use.",
  },
};

export function heroFor(path: string): PageHero {
  const key = path.replace(/\/$/, "") || "/";
  return pageHeroByPath[key] ?? defaultHero;
}

const sizes = [
  { size: "Small", weight: "0–20 lbs" },
  { size: "Medium", weight: "21–40 lbs" },
  { size: "Large", weight: "41–60 lbs" },
  { size: "X-Large", weight: "61–80 lbs" },
  { size: "XX-Large", weight: "81–100+ lbs" },
];

function priced(amounts: string[]) {
  return sizes.map((row, index) => ({ ...row, price: amounts[index] }));
}

export const groomingPrices = [
  {
    id: "bath-and-fluff",
    name: "Bath & Fluff",
    note: "Wash, dry, and fluff-out. No haircut.",
    rows: priced(["$45", "$55", "$70", "$80", "$95"]),
  },
  {
    id: "mini-groom",
    name: "Mini Groom",
    note: "Face, feet, and sanitary trim. Good between full grooms.",
    rows: priced(["$60", "$75", "$95", "$115", "$135"]),
  },
  {
    id: "full-groom",
    name: "Full Groom",
    note: "Bath, haircut, nails, ears, and the finishing details.",
    rows: priced(["$75", "$95", "$115", "$135", "$160"]),
  },
  {
    id: "doodle-poodle",
    name: "Doodle / Poodle",
    note: "Full groom with extra time for brushing, shaping, and drying.",
    rows: priced(["$90", "$115", "$140", "$160", "$185"]),
  },
];

export const spaPrice = {
  id: "spa-experience",
  name: "The Paw Spa Experience",
  price: "$25",
  note: "Add to any bath or groom. Small and medium dogs only, up to 40 lbs.",
  detail:
    "An upgraded bath with ozone, microbubbles, hydro-massage, and LED chromotherapy, built to clean deeper and help nervous dogs settle in the tub.",
};

export const addOns = [
  { name: "De-Shed Treatment", price: "$15" },
  { name: "Dematting", price: "$15+" },
  { name: "Extra Brushing", price: "$15" },
  { name: "Nail Trim Only", price: "$15" },
  { name: "Nail Trim & Grind", price: "$20" },
  { name: "Ear Cleaning", price: "$10" },
  { name: "Ear Plucking", price: "$10" },
  { name: "Teeth Brushing", price: "$10" },
  { name: "Flea & Tick Shampoo", price: "$25" },
  { name: "Medicated Shampoo", price: "$15" },
  { name: "Conditioning Treatment", price: "$15" },
  { name: "Specialty Mask", price: "$15" },
  { name: "Blueberry Facial", price: "$10" },
  { name: "Nose & Paw Balm", price: "$10" },
  { name: "Bow or Bandana", price: "$5" },
];

export const colorPrices = [
  { name: "Ears Only", price: "$20+" },
  { name: "Tail Only", price: "$20+" },
  { name: "Ears & Tail", price: "$35+" },
  { name: "Creative Accents", price: "$25+" },
  { name: "Full Body Color", price: "$75+" },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Use the Book appointment form on this site. We schedule one dog at a time in the grooming room and follow up to confirm. You can also call 559-612-1424.",
  },
  {
    q: "Where is the salon?",
    a: "626 in Sanger, California. If you have trouble finding us, call and we’ll point you in the right direction.",
  },
  {
    q: "What sizes do you groom?",
    a: "Small through XX-large, 100 pounds and up. The Paw Spa Experience add-on is for small and medium dogs up to 40 lbs.",
  },
  {
    q: "Do you groom doodles and poodles?",
    a: "Yes. They have their own service column on our price sheet because those coats need more brushing, shaping, and dry time.",
  },
  {
    q: "How does creative color work?",
    a: "We use pet-safe dye on ears, tails, accents, or a full coat. We start with a quick consult; price depends on size, coat, and how much color you want.",
  },
  {
    q: "What if my dog is matted?",
    a: "Dematting starts at $15 and goes up with severity. If the matting is too tight to remove humanely, we may recommend a shorter reset cut. We’ll talk with you before we start.",
  },
];
