export const siteConfig = {
  name: "Torque Precision Motors",
  tagline: "Taller Automotriz Especializado",
  url: "https://torqueprecisionmotors.mx",
  phone: "520000000000",
  formattedPhone: "+52 (00) 0000 0000",
  address: "Av. Insurgentes Sur 1450, Col. Actipan, Benito Juárez, CDMX",
  postalCode: "03230",
  scheduleWeekday: "Lun - Vie: 8:00 - 18:30",
  scheduleSaturday: "Sábados: 8:00 - 14:00 hrs",
  rfc: "TPM240815-9X2",
};

export const defaultWhatsApp = `https://wa.me/${siteConfig.phone}?text=Hola%20Torque%20Precision%20Motors,%20quiero%20cotizar%20un%20servicio%20o%20diagn%C3%B3stico%20para%20mi%20auto`;
export const afinacionWhatsApp = `https://wa.me/${siteConfig.phone}?text=Hola%20Torque%20Precision%20Motors,%20quiero%20cotizar%20Afinaci%C3%B3n%20Mayor%20y%20Diagn%C3%B3stico%20para%20mi%20auto`;
export const frenosWhatsApp = `https://wa.me/${siteConfig.phone}?text=Hola%20Torque%20Precision%20Motors,%20necesito%20revisi%C3%B3n%20urgente%20de%20frenos%20y%20suspensi%C3%B3n`;
export const acWhatsApp = `https://wa.me/${siteConfig.phone}?text=Hola%20Torque%20Precision%20Motors,%20quiero%20cotizar%20mantenimiento%20de%20Aire%20Acondicionado%20o%20sistema%20el%C3%A9ctrico`;
export const preventivoWhatsApp = `https://wa.me/${siteConfig.phone}?text=Hola%20Torque%20Precision%20Motors,%20quiero%20agendar%20mantenimiento%20preventivo%20por%20kilometraje`;
export const urgenciaWhatsApp = `https://wa.me/${siteConfig.phone}?text=Hola%20Torque%20Precision%20Motors,%20tengo%20un%20testigo%20en%20el%20tablero%20y%20requiero%20diagn%C3%B3stico%20hoy`;

export const schemaData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": siteConfig.name,
  "image": `${siteConfig.url}/images/hero-agency-workshop.jpg`,
  "@id": `${siteConfig.url}/#autorepair`,
  "url": siteConfig.url,
  "telephone": `+${siteConfig.phone}`,
  "priceRange": "$$",
  "currenciesAccepted": "MXN",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address,
    "addressLocality": "Ciudad de México",
    "addressRegion": "CDMX",
    "postalCode": siteConfig.postalCode,
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.3725,
    "longitude": -99.1789
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Automotrices Especializados",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Afinación Mayor y Diagnóstico Computarizado OEM",
          "description": "Escaneo computarizado integral, laboratorio de inyectores por ultrasonido, cambio de bujías iridium y calibración digital."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frenos de Alto Rendimiento y Suspensión",
          "description": "Rectificado computarizado de discos, balatas cerámicas premium y purga hidráulica con líquido de alta temperatura."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mantenimiento Preventivo por Kilometraje",
          "description": "Servicio de 10k, 30k, 60k y 100k con aceites sintéticos certificados OEM y revisión de 45 puntos de seguridad."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Climatización Automotriz A/C y Sistema Eléctrico",
          "description": "Detección ultravioleta de fugas, recarga de gas ecológico R134a/R1234yf y diagnóstico de módulos ECU."
        }
      }
    ]
  }
};

export const carBrands = [
  {
    name: "BMW",
    country: "Alemania",
    svg: `<svg class="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" fill="#18181b" stroke="#71717a" stroke-width="2"/><circle cx="50" cy="50" r="32" fill="#ffffff"/><path d="M50 18 A32 32 0 0 0 18 50 L50 50 Z" fill="#0066B1"/><path d="M50 82 A32 32 0 0 0 82 50 L50 50 Z" fill="#0066B1"/><path d="M50 18 A32 32 0 0 1 82 50 L50 50 Z" fill="#FFFFFF"/><path d="M50 82 A32 32 0 0 1 18 50 L50 50 Z" fill="#FFFFFF"/><circle cx="50" cy="50" r="32" stroke="#18181b" stroke-width="2.5" fill="none"/><circle cx="50" cy="50" r="46" stroke="#a1a1aa" stroke-width="2" fill="none"/></svg>`
  },
  {
    name: "Mercedes-Benz",
    country: "Alemania",
    svg: `<svg class="w-8 h-8 text-zinc-900 shrink-0" viewBox="0 0 100 100" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M50 4C24.595 4 4 24.595 4 50s20.595 46 46 46 46-20.595 46-46S75.405 4 50 4zm0 6c22.091 0 40 17.909 40 40 0 7.828-2.25 15.132-6.136 21.295L50 51.5V10zm-4 4.542V50.25L14.73 70.395A39.866 39.866 0 0 1 10 50c0-20.804 15.894-37.893 36-39.458zm-33.864 58.753L48 53.64v36.14a39.882 39.882 0 0 1-31.864-16.485zm39.864 16.485V53.64l35.864 19.655a39.882 39.882 0 0 1-35.864 16.485z"/></svg>`
  },
  {
    name: "Audi",
    country: "Alemania",
    svg: `<svg class="w-12 h-6 text-zinc-900 shrink-0" viewBox="0 0 120 48" fill="none" stroke="currentColor" stroke-width="4.5"><circle cx="21" cy="24" r="18.5"/><circle cx="47" cy="24" r="18.5"/><circle cx="73" cy="24" r="18.5"/><circle cx="99" cy="24" r="18.5"/></svg>`
  },
  {
    name: "Porsche",
    country: "Alemania",
    svg: `<svg class="w-8 h-8 shrink-0" viewBox="0 0 100 100" fill="none"><path d="M22 14 H78 L74 58 C72 76 50 90 50 90 C50 90 28 76 26 58 Z" fill="#bfa15f" stroke="#8a6d2c" stroke-width="3"/><path d="M26 26 H74 M50 26 V86" stroke="#1c1c1c" stroke-width="3"/><rect x="27" y="28" width="21" height="8" fill="#d12626"/><rect x="27" y="38" width="21" height="8" fill="#1c1c1c"/><rect x="52" y="48" width="20" height="8" fill="#d12626"/><rect x="52" y="58" width="18" height="8" fill="#1c1c1c"/><rect x="42" y="42" width="16" height="18" rx="2" fill="#ffd700" stroke="#1c1c1c" stroke-width="1.5"/><path d="M48 46 C49 44 52 45 52 47 C52 48 50 51 52 55 L48 54 Z" fill="#1c1c1c"/><text x="50" y="23" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="900" fill="#1c1c1c" text-anchor="middle" letter-spacing="1">PORSCHE</text></svg>`
  },
  {
    name: "Volkswagen",
    country: "Alemania",
    svg: `<svg class="w-8 h-8 text-zinc-900 shrink-0" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" stroke="currentColor" stroke-width="5"/><circle cx="50" cy="50" r="38" stroke="currentColor" stroke-width="2.5"/><path d="M28 26 L50 68 L72 26" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 26 L50 52 L64 26" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 48 L37 74 L50 56 L63 74 L76 48" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: "Volvo",
    country: "Suecia",
    svg: `<svg class="w-8 h-8 text-zinc-900 shrink-0" viewBox="0 0 100 100" fill="none"><circle cx="48" cy="52" r="36" stroke="currentColor" stroke-width="6"/><path d="M72 28 L92 8 M92 8 H74 M92 8 V26" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="44" width="68" height="16" rx="2" fill="#003057"/><text x="48" y="56" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="10" text-anchor="middle" letter-spacing="2">VOLVO</text></svg>`
  },
  {
    name: "Toyota",
    country: "Japón",
    svg: `<svg class="w-9 h-7 text-red-600 shrink-0" viewBox="0 0 100 70" fill="none"><ellipse cx="50" cy="35" rx="46" ry="32" stroke="currentColor" stroke-width="5"/><ellipse cx="50" cy="24" rx="26" ry="16" stroke="currentColor" stroke-width="4.5"/><ellipse cx="50" cy="37" rx="11" ry="27" stroke="currentColor" stroke-width="4.5"/></svg>`
  },
  {
    name: "Honda",
    country: "Japón",
    svg: `<svg class="w-8 h-8 text-zinc-900 shrink-0" viewBox="0 0 100 100" fill="none"><path d="M16 18 C16 14 20 12 24 12 H76 C80 12 84 14 84 18 L76 84 C76 87 73 90 69 90 H31 C27 90 24 87 24 84 Z" stroke="currentColor" stroke-width="5" fill="none"/><path d="M33 24 L37 78 M67 24 L63 78 M35 48 H65" stroke="currentColor" stroke-width="7" stroke-linecap="round"/></svg>`
  },
  {
    name: "Mazda",
    country: "Japón",
    svg: `<svg class="w-9 h-7 text-zinc-900 shrink-0" viewBox="0 0 100 70" fill="none"><ellipse cx="50" cy="35" rx="46" ry="32" stroke="currentColor" stroke-width="4.5"/><path d="M22 24 C36 44 46 50 50 38 C54 50 64 44 78 24" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    name: "Ford",
    country: "EE.UU.",
    svg: `<svg class="w-11 h-7 shrink-0" viewBox="0 0 110 65" fill="none"><ellipse cx="55" cy="32.5" rx="52" ry="30" fill="#003478"/><ellipse cx="55" cy="32.5" rx="47" ry="25" stroke="#ffffff" stroke-width="2.5"/><text x="55" y="41" fill="#ffffff" font-family="'Georgia', serif" font-style="italic" font-weight="bold" font-size="28" text-anchor="middle">Ford</text></svg>`
  },
  {
    name: "Chevrolet",
    country: "EE.UU.",
    svg: `<svg class="w-10 h-6 shrink-0" viewBox="0 0 120 55" fill="none"><path d="M10 21 H45 L38 5 H82 L75 21 H110 L102 35 H67 L74 51 H30 L37 35 H2 Z" fill="#d4af37" stroke="#8a6d2c" stroke-width="2.5" stroke-linejoin="round"/><path d="M14 23 H47 L41 9 H79 L73 23 H106 L100 33 H69 L75 47 H34 L40 33 H8 Z" fill="#f5d77f" fill-opacity="0.3"/></svg>`
  },
  {
    name: "Jeep",
    country: "EE.UU.",
    svg: `<svg class="w-10 h-6 text-zinc-900 shrink-0" viewBox="0 0 100 50" fill="none"><rect x="6" y="6" width="88" height="38" rx="8" stroke="currentColor" stroke-width="3" fill="#2d3748" fill-opacity="0.06"/><line x1="22" y1="12" x2="22" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="31" y1="12" x2="31" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="40" y1="12" x2="40" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="50" y1="12" x2="50" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="60" y1="12" x2="60" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="69" y1="12" x2="69" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="78" y1="12" x2="78" y2="38" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/></svg>`
  }
];
