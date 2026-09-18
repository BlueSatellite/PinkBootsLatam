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
    country: "Panamá",
    city: "Ciudad de Panama",
    role: "Chapter padre",
    foundedYear: 2023,
    representatives: [
      {
        name: "Ericka Otero",
        role: "Co-Fundadora & Chapter Leader. Head Brewer y Quality Control Manager en Salsipuedes Brewing Co. Seleccionada como jueza para el World Beer Cup 2026.",
      },
    ],
    info: "Chapter padre de Pink Boots Society para toda Latinoamérica. Creado en 2023 con el objetivo de extender la educación en bebidas fermentadas en habla hispana por toda la region.",
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
      { name: "Keishla Torres", role: "Líder del sub-capitulo" },
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
    name: "Perú",
    country: "Perú",
    city: "Lima",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Silvia",
        role: "Co-líder de Pink Boots Latinoamérica. Seleccionada como jueza para el World Beer Cup 2026.",
      },
    ],
    info: "",
    instagram: "@pinkbootsperu",
    facebook: "PinkBootsPerú",
    website: "https://www.instagram.com/pinkbootsperu/",
  },
  {
    name: "México",
    country: "México",
    city: "Cuernavaca",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Viviana Lopez",
        role: "Líder de comunidad en Mexico",
      },
    ],
    info: "",
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
    info: "",
    instagram: "@cervezavericcio",
    website: "https://www.instagram.com/cervezavericcio/",
  },
  {
    name: "Brasil",
    country: "Brasil",
    city: "Brasil",
    role: "Integrantes de la red",
    representatives: [
      { name: "Fernanda de Acosta" },
    ],
    info: "",
  },
];
