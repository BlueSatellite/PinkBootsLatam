export type EventCategory =
  | "cocciones"
  | "colaboraciones"
  | "ponencias"
  | "congresos"
  | "webinars"
  | "competencias"
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
  competencias: "Competencias BAP",
  especiales: "Eventos especiales",
};

export const eventCategoryOrder: EventCategory[] = [
  "cocciones",
  "colaboraciones",
  "ponencias",
  "congresos",
  "webinars",
  "competencias",
  "especiales",
];

export const events: PinkEvent[] = [
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
  {
    category: "cocciones",
    title: "Chica de Humo — Barranco Beer Co",
    place: "Lima, Peru",
    date: "Por confirmar",
    description:
      "Coccion de Chica de Humo junto a Barranco Beer Co, que obtuvo Medalla de Bronce. Un ejemplo del talento cervecero de las integrantes de Pink Boots Peru.",
  },
  {
    category: "competencias",
    title: "Copa Guerreras del Lupulo",
    place: "Cuernavaca, Mexico",
    date: "Por confirmar",
    description:
      "Participacion de Viviana Lopez con Medalla de Plata en la Copa Guerreras del Lupulo, competencia que visibiliza el trabajo de las mujeres cerveceras mexicanas.",
  },
  {
    category: "especiales",
    title: "Premios La Republica y Premios WAPA",
    place: "Lima, Peru",
    date: "Por confirmar",
    description:
      "Pink Boots Peru fue reconocida con los Premios La Republica y Premios WAPA por su labor impulsando a las mujeres en la industria cervecera peruana.",
  },
];
