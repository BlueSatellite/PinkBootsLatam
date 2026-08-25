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

export interface CountryChapters {
  country: string;
  chapters: Chapter[];
}

export const chaptersByCountry: CountryChapters[] = [
  {
    country: "Panama",
    chapters: [
      {
        name: "Pink Boots Society Latam — Sede Panama",
        country: "Panama",
        city: "Ciudad de Panama",
        role: "Sede principal",
        representatives: [
          {
            name: "Ericka Otero",
            role: "Co-Fundadora & Chapter Leader. Head Brewer y Quality Control Manager en Salsipuedes Brewing Co. Seleccionada como jueza para el World Beer Cup 2026.",
          },
        ],
        info: "Sede principal del chapter padre de Pink Boots Society Latin America.",
        instagram: "@salsipuedesbrewingco",
        website: "https://www.instagram.com/salsipuedesbrewingco/",
      },
    ],
  },
  {
    country: "Peru",
    chapters: [
      {
        name: "Capitulo Peru",
        country: "Peru",
        city: "Lima",
        role: "Capitulo fundador",
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
    ],
  },
  {
    country: "Puerto Rico",
    chapters: [
      {
        name: "Pink Boots Latam-Puerto Rico",
        country: "Puerto Rico",
        city: "Guaynabo",
        role: "Sub-capitulo",
        foundedYear: 2026,
        representatives: [
          { name: "Keishla Torres", role: "Lider del sub-capitulo" },
          { name: "Ocean Lab Brewing", role: "Cerveceria anfitriona" },
          { name: "Jevas Cerveceras", role: "Comunidad cervecera" },
        ],
        info: "Sub-capitulo conformado por 21 integrantes. Primer Collaboration Brew Day LATAM 2026. Becas otorgadas a Nikole Negron y Minelis Mendez.",
        instagram: "@jevascerveceras",
        website: "https://www.instagram.com/jevascerveceras/",
      },
    ],
  },
  {
    country: "Mexico",
    chapters: [
      {
        name: "Capitulo Mexico",
        country: "Mexico",
        city: "Cuernavaca",
        role: "Miembro activo",
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
    ],
  },
  {
    country: "Chile",
    chapters: [
      {
        name: "Capitulo Chile",
        country: "Chile",
        city: "Santiago",
        role: "Miembro activo",
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
    ],
  },
  {
    country: "Brasil",
    chapters: [
      {
        name: "Capitulo Brasil",
        country: "Brasil",
        city: "Rio de Janeiro / Minas Gerais",
        role: "Pionero",
        foundedYear: 2015,
        representatives: [
          { name: "Amanda Henriques", role: "Coordinadora Rio de Janeiro" },
          { name: "Priscilla Colares", role: "Minas Gerais" },
        ],
        info: "Capitulo mas antiguo de Latinoamerica, fundado por Alex Iunes.",
        facebookGroup: "Pink Boots Society - Rio de Janeiro",
        website: "https://www.facebook.com/groups/885771154845187",
      },
    ],
  },
  {
    country: "Argentina",
    chapters: [
      {
        name: "Capitulo Argentina",
        country: "Argentina",
        city: "Buenos Aires",
        role: "Miembro activo",
        representatives: [
          {
            name: "Cristina Saez",
            role: "Maestra cervecera en Birra & Blues",
          },
        ],
        info: "Brewed 'Iniquity' West Coast IPA para PBS.",
      },
    ],
  },
];
