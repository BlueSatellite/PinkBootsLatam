export interface ChapterRepresentative {
  name: string;
  role?: string;
}

export interface Chapter {
  name: string;
  country: string;
  city: string;
  role: string;
  foundedYear?: number;
  representatives: ChapterRepresentative[];
  info: string;
  instagram?: string;
  facebook?: string;
  facebookGroup?: string;
  website?: string;
}

export const officialChapters: Chapter[] = [
  {
    name: "Pink Boots Latam",
    country: "Panama",
    city: "Ciudad de Panama",
    role: "Chapter padre",
    foundedYear: 2023,
    representatives: [
      {
        name: "Ericka Otero",
        role: "Co-Fundadora & Chapter Leader. Head Brewer y Quality Control Manager en Salsipuedes Brewing Co. Seleccionada como jueza para el World Beer Cup 2026.",
      },
    ],
    info: "Chapter padre de Pink Boots Society para toda Latinoamerica. Creado en 2023 con el objetivo de extender la educacion en bebidas fermentadas en habla hispana por toda la region.",
    instagram: "@salsipuedesbrewingco",
    website: "https://www.instagram.com/salsipuedesbrewingco/",
  },
  {
    name: "Pink Boots Latam / Puerto Rico",
    country: "Puerto Rico",
    city: "Guaynabo",
    role: "Sub-capitulo",
    foundedYear: 2026,
    representatives: [
      { name: "Keishla Torres", role: "Lider del sub-capitulo" },
      { name: "Ocean Lab Brewing", role: "Cerveceria anfitriona" },
      { name: "Jevas Cerveceras", role: "Comunidad cervecera" },
    ],
        info: "Sub-capitulo conformado por 21 integrantes y oficializado el 3 de mayo de 2026. Primer Collaboration Brew Day LATAM (15 de marzo de 2026): cerveza sour de tamarindo elaborada junto a Ocean Lab Brewing, Jevas Cerveceras y Salsipuedes Brewing Co. Becas otorgadas a Nikole Negron y Minelis Mendez.",
    instagram: "@jevascerveceras",
    website: "https://www.instagram.com/jevascerveceras/",
  },
];

export const regionNetwork: Chapter[] = [
  {
    name: "Peru",
    country: "Peru",
    city: "Lima",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Silvia De Tomas",
        role: "Co-lider de Pink Boots Latinoamerica. Two Brothers Brewing. Seleccionada como jueza para el World Beer Cup 2026.",
      },
    ],
    info: "Medalla de Bronce con Chica de Humo (Barranco Beer Co). Premiadas por La Republica y Premios WAPA. Beca internacional otorgada a Megan Garrity, Sara Lefevre y Ximena Gloria — viaje por cervecerias de Europa.",
    instagram: "@pinkbootsperu",
    facebook: "PinkBootsPeru",
    website: "https://www.instagram.com/pinkbootsperu/",
  },
  {
    name: "Mexico",
    country: "Mexico",
    city: "Cuernavaca",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Viviana Lopez",
        role: "Lider de comunidad en Mexico. @tebana_laboratorio_cervecero",
      },
    ],
    info: "Medalla de plata en Copa Guerreras del Lupulo.",
    instagram: "@tebana_laboratorio_cervecero",
    website: "https://www.instagram.com/tebana_laboratorio_cervecero/",
  },
  {
    name: "Chile",
    country: "Chile",
    city: "Santiago",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Veronica Carrasco",
        role: "Fundadora de Cerveza Vericcio",
      },
    ],
    info: "Participante en Copa Capital.",
    instagram: "@cervezavericcio",
    website: "https://www.instagram.com/cervezavericcio/",
  },
  {
    name: "Brasil",
    country: "Brasil",
    city: "Rio de Janeiro / Minas Gerais",
    role: "Integrantes de la red",
    representatives: [
      { name: "Amanda Henriques", role: "Rio de Janeiro" },
      { name: "Priscilla Colares", role: "Minas Gerais" },
    ],
    info: "Comunidad pionera de la region, activa desde 2015 gracias a Alex Iunes.",
    facebookGroup: "Pink Boots Society - Rio de Janeiro",
    website: "https://www.facebook.com/groups/885771154845187",
  },
  {
    name: "Argentina",
    country: "Argentina",
    city: "Buenos Aires",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Cristina Saez",
        role: "Maestra cervecera en Birra & Blues",
      },
    ],
    info: "Brewed 'Iniquity' West Coast IPA para PBS.",
  },
];
