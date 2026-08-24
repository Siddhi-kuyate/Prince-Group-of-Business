import heroOne from "@/assets/hero-1.jpg";
import heroTwo from "@/assets/hero-2.jpg";
import heroThree from "@/assets/hero-3.jpg";

import prodHomogenizer from "@/assets/prod-homogenizer.jpg";
import prodPasteurizer from "@/assets/prod-pasteurizer.jpg";
import prodTank from "@/assets/prod-tank.jpg";
import prodSeparator from "@/assets/prod-separator.jpg";
import prodCip from "@/assets/prod-cip.jpg";
import prodPumps from "@/assets/prod-pumps.jpg";

import indDairy from "@/assets/ind-dairy.jpg";
import indFood from "@/assets/ind-food.jpg";
import indBeverage from "@/assets/ind-beverage.jpg";
import indPharma from "@/assets/ind-pharma.jpg";
import indChemical from "@/assets/ind-chemical.jpg";
import indTextile from "@/assets/ind-textile.jpg";
import indConstruction from "@/assets/ind-construction.jpg";

/* =========================================================
   COMPANY
   ========================================================= */

export const siteUrl = "https://www.princegroupbusiness.in";

export const company = {
  name: "Prince Group of Business",

  tagline: "Crowning Success, Building Legacies.",

  email: "sales.pgbusiness@gmail.com",

  phone: "+91 82376 05344",

  phoneHref: "tel:+918237605344",

  whatsapp: "918237605344",

  address:
    "B-304, 3rd Floor, Jai Ganesh Vardhasht Society, Gandhi Nagar Road, Pimpri, Pune, Maharashtra, India",

  mapQuery:
    "B-304, 3rd Floor, Jai Ganesh Vardhasht Society, Gandhi Nagar Road, Pimpri, Pune, Maharashtra, India",

  mapDirectLink:
    "https://www.google.com/maps/search/?api=1&query=B-304%2C+3rd+Floor%2C+Jai+Ganesh+Vardhasht+Society%2C+Gandhi+Nagar+Road%2C+Pimpri%2C+Pune%2C+Maharashtra%2C+India",

  hours: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
};

/* =========================================================
   WHATSAPP
   ========================================================= */

export const whatsappLink = `https://wa.me/${
  company.whatsapp
}?text=${encodeURIComponent(
  "Hello Prince Group of Business, I would like to enquire about your products and services.",
)}`;

/* =========================================================
   EMAIL
   ========================================================= */

export const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  company.email,
)}&su=${encodeURIComponent(
  "Enquiry — Prince Group of Business",
)}`;

/* =========================================================
   SOCIAL MEDIA
   ========================================================= */

export const socialLinks = {
  instagram: "https://www.instagram.com/pg_businesses/",

  linkedin: "https://www.linkedin.com/company/prince-group-of-business/",

  facebook: "https://www.facebook.com/share/1DMrPZSBBP/",
};

/* =========================================================
   NAVIGATION
   ========================================================= */

export const navLinks = [
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   HERO SLIDES
   ========================================================= */

export const heroSlides = [
  {
    image: heroOne,
    alt: "Stainless steel industrial processing plant",
    kicker: "PGB ENGINEERING SOLUTIONS",
    title: "Knowledge in Action",
    subtitle:
      "Precision-engineered fluid handling and process solutions for every industry.",
    buttonText: "View Industries",
    buttonHref: "/industries",
  },

  {
    image: heroTwo,
    alt: "Dairy processing facility",
    kicker: "ENGINEERING THROUGH EVERY STAGE",
    title: "Service That Delivers",
    subtitle:
      "From equipment selection and process design to commissioning and lifecycle support.",
    buttonText: "View Services",
    buttonHref: "/solutions",
  },

  {
    image: heroThree,
    alt: "Pharmaceutical and beverage processing equipment",
    kicker: "BUILT AROUND YOUR PROCESS",
    title: "Products That Perform",
    subtitle:
      "Hygienic processing systems engineered for repeatable output, uptime, and efficiency.",
    buttonText: "View Products",
    buttonHref: "/products",
  },
];

/* =========================================================
   STATS
   ========================================================= */

export const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 850,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 12,
    suffix: "+",
    label: "Industries Served",
  },
];

/* =========================================================
   SOLUTIONS
   ========================================================= */

export const solutions = [
  {
    icon: "Milk",
    title: "Dairy Processing Solutions",
    text: "Complete milk reception, pasteurization, homogenization and storage lines built to hygienic standards.",
  },
  {
    icon: "UtensilsCrossed",
    title: "Food Processing Solutions",
    text: "Cooking, blending, cooling and transfer systems designed around your recipe and throughput.",
  },
  {
    icon: "CupSoda",
    title: "Beverage Processing Solutions",
    text: "Syrup rooms, carbonation, pasteurizing and filling support for juice, dairy drinks and water.",
  },
  {
    icon: "Pill",
    title: "Pharmaceutical Processing Solutions",
    text: "Sanitary reactors, mixing vessels and skids with full material traceability and documentation.",
  },
  {
    icon: "FlaskConical",
    title: "Chemical Processing Solutions",
    text: "Corrosion-resistant vessels, heat transfer and dosing systems for demanding chemical duties.",
  },
  {
    icon: "Cpu",
    title: "Industrial Automation",
    text: "PLC/SCADA control panels, instrumentation and recipe management for repeatable batches.",
  },
  {
    icon: "Wrench",
    title: "Installation & Commissioning",
    text: "Site erection, piping, validation and operator training delivered by our own engineers.",
  },
  {
    icon: "LifeBuoy",
    title: "Annual Maintenance & Support",
    text: "Preventive maintenance contracts, genuine spares and rapid breakdown response nationwide.",
  },
];

/* =========================================================
   PRODUCTS
   ========================================================= */

export const products = [
  {
    name: "Homogenizer",
    image: prodHomogenizer,
    text: "High-pressure homogenizers for uniform particle size and stable emulsions.",
  },
  {
    name: "Pasteurizer",
    image: prodPasteurizer,
    text: "Continuous HTST pasteurizing skids with automatic flow diversion.",
  },
  {
    name: "Batch HTST Pasteurizer",
    image: prodCip,
    text: "Compact batch units for small dairies, startups and pilot plants.",
  },
  {
    name: "Milk Storage Tank",
    image: prodTank,
    text: "Insulated SS 304/316 silos with agitation and CIP-ready fittings.",
  },
  {
    name: "Cream Separator",
    image: prodSeparator,
    text: "Self-cleaning centrifugal separators for precise fat standardisation.",
  },
  {
    name: "CIP / SIP System",
    image: prodCip,
    text: "Automated clean-in-place skids with conductivity and temperature control.",
  },
  {
    name: "Plate Heat Exchanger",
    image: prodPasteurizer,
    text: "High-efficiency gasketed PHEs for heating, cooling and regeneration.",
  },
  {
    name: "Mixing Tank",
    image: prodHomogenizer,
    text: "Jacketed mixing and process vessels with custom agitator designs.",
  },
  {
    name: "Process Pumps",
    image: prodPumps,
    text: "Sanitary centrifugal, lobe and positive displacement pump ranges.",
  },
  {
    name: "Industrial Valves",
    image: prodPumps,
    text: "Butterfly, mix-proof and control valves for hygienic process lines.",
  },
];

/* =========================================================
   INDUSTRIES
   ========================================================= */

export const industries = [
  {
    name: "Dairy",
    image: indDairy,
    text: "Milk, cheese, butter and paneer plants",
  },
  {
    name: "Food",
    image: indFood,
    text: "Sauces, ready meals and bakery lines",
  },
  {
    name: "Beverage",
    image: indBeverage,
    text: "Juice, water and carbonated drinks",
  },
  {
    name: "Pharmaceutical",
    image: indPharma,
    text: "API, formulation and cleanroom utilities",
  },
  {
    name: "Chemical",
    image: indChemical,
    text: "Specialty and process chemical plants",
  },
  {
    name: "Textile",
    image: indTextile,
    text: "Dyeing, finishing and utility systems",
  },
  {
    name: "Construction",
    image: indConstruction,
    text: "Structural fabrication and site services",
  },
];

/* =========================================================
   ADVANTAGES
   ========================================================= */

export const advantages = [
  {
    icon: "Factory",
    title: "High Quality Manufacturing",
    text: "In-house fabrication with certified welders, traceable SS 304/316 and documented QA at every stage.",
  },
  {
    icon: "Ruler",
    title: "Customized Engineering Solutions",
    text: "Every plant is designed around your product, capacity and floor space — not a catalogue template.",
  },
  {
    icon: "Leaf",
    title: "Energy Efficient Equipment",
    text: "Heat regeneration, VFD driven motors and optimised insulation cut utility cost year after year.",
  },
  {
    icon: "BadgeCheck",
    title: "International Quality Standards",
    text: "Designs aligned to ISO, CE, ASME and 3-A hygienic principles with complete documentation packs.",
  },
  {
    icon: "Users",
    title: "Experienced Technical Team",
    text: "Process, mechanical and automation engineers with decades of commissioning experience on site.",
  },
  {
    icon: "Headset",
    title: "Reliable After-Sales Support",
    text: "AMC programmes, genuine spares inventory and engineers on call to keep your line running.",
  },
];

/* =========================================================
   TESTIMONIALS
   ========================================================= */

export const testimonials = [
  {
    quote:
      "Prince Group delivered our 50,000 LPD dairy line ahead of schedule and stayed through commissioning. The pasteurizer has run without a single unplanned stop.",
    name: "Rajesh Kulkarni",
    role: "Plant Head",
    company: "Sahyadri Dairy Foods",
    rating: 5,
  },
  {
    quote:
      "Their engineering team redesigned our CIP circuit and cut cleaning time by a third. Documentation was audit-ready on day one.",
    name: "Dr. Meera Iyer",
    role: "QA Director",
    company: "Vedanta Pharma Labs",
    rating: 5,
  },
  {
    quote:
      "We compared four vendors. Prince Group was the only one that walked our floor before quoting. Build quality is genuinely international standard.",
    name: "Amit Shah",
    role: "Operations Manager",
    company: "Crystal Beverages Pvt Ltd",
    rating: 5,
  },
  {
    quote:
      "Round-the-clock support during our peak season saved us lakhs. Their AMC is the most responsive we have worked with.",
    name: "Sunita Rao",
    role: "Managing Director",
    company: "Nutrifoods India",
    rating: 5,
  },
];