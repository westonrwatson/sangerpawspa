export const site = {
  name: "The Paw Spa",
  tagline: "Pet Grooming",
  phoneDisplay: "559-612-1424",
  phoneHref: "tel:+15596121424",
  bookHref: "#",
  location: "626, Sanger, California",
  instagram: "thepawspa",
  instagramHref: "https://www.instagram.com/thepawspa/",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Services & Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export const closingLines = [
  {
    title: "Your pet’s spa day is only moments away.",
    text: "Schedule their appointment today.",
  },
  {
    title: "A bath, a groom, or the full spa.",
    text: "Pick what they need and save their spot.",
  },
  {
    title: "This is the kind of care they leave with.",
    text: "Save their spot today.",
  },
];

const closingByPath: Record<string, number> = {
  "/": 0,
  "/pricing": 1,
  "/gallery": 2,
  "/about": 1,
  "/privacy": 1,
  "/terms": 2,
  "/accessibility": 1,
};

export function closingFor(path: string) {
  const key = path.replace(/\/$/, "") || "/";
  return closingLines[closingByPath[key] ?? 0];
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
    note: "Bath only. Fresh, clean, and beautifully fluffed.",
    rows: priced(["$45", "$55", "$70", "$80", "$95"]),
  },
  {
    id: "mini-groom",
    name: "Mini Groom",
    note: "Face, feet, and a sanitary trim. Perfect between grooms.",
    rows: priced(["$60", "$75", "$95", "$115", "$135"]),
  },
  {
    id: "full-groom",
    name: "Full Groom",
    note: "Bath, haircut, nail trim, ear cleaning, and more.",
    rows: priced(["$75", "$95", "$115", "$135", "$160"]),
  },
  {
    id: "doodle-poodle",
    name: "Doodle / Poodle",
    note: "Full groom with breed-specific coat care.",
    rows: priced(["$90", "$115", "$140", "$160", "$185"]),
  },
];

export const spaPrice = {
  id: "spa-experience",
  name: "The Paw Spa Experience",
  price: "$25",
  note: "Add to any service. Small and medium dogs only, up to 40 lbs.",
  detail:
    "Ozone, microbubbles, a hydro-massage, and LED chromotherapy for a deeper clean and a more relaxing bath.",
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
    q: "How do I book?",
    a: "Call or use Book to reserve a time.",
  },
  {
    q: "Where is the salon?",
    a: "We are at 626 in Sanger, California. The phone number is 559-612-1424.",
  },
  {
    q: "What sizes do you take?",
    a: "Small dogs through XX-large, 100 pounds and up. The spa upgrade is for small and medium dogs up to 40 pounds.",
  },
  {
    q: "Do you groom doodles?",
    a: "Yes. Doodle and poodle coats have their own full groom, with breed-specific coat care.",
  },
  {
    q: "How does creative color work?",
    a: "It is pet-safe color for ears, a tail, accents, or a full body. We start with a consultation. The price depends on size, coat, and the design.",
  },
];
