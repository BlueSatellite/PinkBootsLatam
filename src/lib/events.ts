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
    title: "Primer Pink Boots Collaboration Brew Day LATAM",
    place: "Ocean Lab Brewing, Guaynabo, Puerto Rico",
    date: "2026",
    description:
      "La primera edicion del Collaboration Brew Day en Latinoamerica, organizada junto a Ocean Lab Brewing y Jevas Cerveceras. Parte del movimiento global de Pink Boots Society donde cervecerias de todo el mundo elaboran el mismo dia y donan parte de sus ventas a becas educativas.",
    media: {
      externalLink: "https://www.instagram.com/pinkbootslatam/",
      externalLabel: "Ver en Instagram",
    },
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
