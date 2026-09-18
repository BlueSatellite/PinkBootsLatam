export type EventCategory =
  | "cocciones"
  | "colaboraciones"
  | "ponencias"
  | "congresos"
  | "webinars"
  | "especiales";

export interface EventMedia {
  image?: string;
  video?: string;
  externalLink?: string;
  externalLabel?: string;
}

export interface PinkEvent {
  category: EventCategory;
  title: string;
  place: string;
  date: string;
  description: string;
  media?: EventMedia;
}

export const eventCategoryLabels: Record<EventCategory, string> = {
  cocciones: "Cocciones",
  colaboraciones: "Colaboraciones",
  ponencias: "Ponencias",
  congresos: "Congresos",
  webinars: "Webinars",
  especiales: "Eventos especiales",
};

export const eventCategoryOrder: EventCategory[] = [
  "cocciones",
  "colaboraciones",
  "ponencias",
  "congresos",
  "webinars",
  "especiales",
];

export const events: PinkEvent[] = [
  // --- PROXIMOS EVENTOS (por confirmar con Ericka) ---
  {
    category: "cocciones",
    title: "Coccion colaborativa Pink Boots Latam — Cusco",
    place: "Cusco, Peru",
    date: "Proximo",
    description:
      "Proxima coccion colaborativa de Pink Boots Latam en Cusco, Peru. Detalles por confirmar.",
  },
  {
    category: "especiales",
    title: "Lanzamiento Cerveza Colaborativa Pink Boots Latam",
    place: "Por confirmar",
    date: "Noviembre 2026",
    description:
      "Lanzamiento oficial de la nueva cerveza colaborativa de Pink Boots Latin America. Detalles por confirmar.",
  },
  // --- EVENTOS RECIENTES ---
  {
    category: "colaboraciones",
    title: "Pink Boots Collaboration Brew Day Latam",
    place: "Ocean Lab Brewing, Guaynabo, Puerto Rico",
    date: "15 de marzo de 2026",
    description:
      "Primera edicion latinoamericana del Collaboration Brew Day, en colaboracion entre Ocean Lab Brewing, Jevas Cerveceras, Salsipuedes Brewing Co. de Panama y Pink Boots Latam. Se elaboro una cerveza sour de tamarindo con causa social: las ganancias se donaron a mujeres maltratadas de Puerto Rico y a becas para el crecimiento profesional de las integrantes de Pink Boots Latam.",
    media: {
      externalLink: "https://www.instagram.com/pinkbootslatam/",
      externalLabel: "Ver en Instagram",
    },
  },
  {
    category: "especiales",
    title: "Primer encuentro oficial del subcapitulo de Puerto Rico",
    place: "Ocean Lab Brewing, Guaynabo, Puerto Rico",
    date: "3 de mayo de 2026",
    description:
      "Encuentro oficial para la conformacion del subcapitulo Pink Boots Latam / Puerto Rico, hoy conformado por 21 integrantes y liderado por Keishla Torres.",
  },
];
