export interface SponsorSocial {
  label: string;
  url: string;
}

export interface SponsorVideo {
  title: string;
  src: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  featured?: boolean;
  website?: string;
  label?: string;
  description: string;
  relationship: string;
  socials?: SponsorSocial[];
  videos?: SponsorVideo[];
}

export const sponsors: Sponsor[] = [
  {
    name: "Costa Rica Beer School",
    logo: "/sponsors/cr-beer-school.avif",
    featured: true,
    website: "https://costaricabeerfactory.com/beer-school",
    description:
      "Escuela de cerveza de Costa Rica, parte del proyecto de Costa Rica Beer Factory. Ofrece formacion profesional para cerveceros y cerveceras de la region, desde cursos introductorios hasta capacitacion tecnica especializada.",
    relationship:
      "Sponsor principal de Pink Boots Society Latin America. Su apoyo es clave para impulsar la educacion cervecera de nuestras integrantes en toda la region.",
    videos: [
      {
        title: "Video institucional — Costa Rica Beer School",
        src: "/videos/costa-rica-beer-school.mp4",
      },
    ],
  },
  {
    name: "Lallemand Brewing",
    logo: "/sponsors/lallemand.png",
    website: "https://www.lallemandbrewing.com/",
    description:
      "Division cervecera de Lallemand Inc., lider mundial en el desarrollo, produccion y distribucion de levaduras y bacterias para la industria cervecera y de bebidas fermentadas. Sus productos llegan a cervecerias de mas de 50 paises.",
    relationship:
      "Aliado educativo de Pink Boots Society, apoyando la formacion de mujeres y personas no binarias en la industria de la fermentacion.",
  },
  {
    name: "White Labs",
    logo: "/sponsors/white-labs.svg",
    website: "https://www.whitelabs.com/",
    description:
      "Pionera mundial en el suministro de levaduras liquidas para cervecerias artesanales. Fundada en San Diego, California, White Labs investiga y produce levaduras y bacterias para la industria de bebidas fermentadas.",
    relationship:
      "Aliado del programa de becas y cursos de Pink Boots Society, facilitando acceso a educacion tecnica especializada en levaduras y fermentacion.",
  },
  {
    name: "Yakima Chief Hops",
    logo: "/sponsors/yakima-chief.png",
    website: "https://www.yakimachief.com/",
    description:
      "Cooperativa de familias productoras de lupulo del valle de Yakima, Washington. Referencia mundial en variedades de lupulo y blends especiales para la industria cervecera.",
    relationship:
      "Aliado de Pink Boots Society. Creadores del Pink Boots Blend, cuya venta apoya los programas educativos de la organizacion. Tambien patrocinan becas como el viaje experiencial de lupulo.",
  },
  {
    name: "Fermenta Cociencia",
    logo: "/sponsors/fermenta-cociencia.svg",
    website: "https://www.fermentaconciencia.com/",
    description:
      "Proyecto de divulgacion y formacion en ciencias de la fermentacion, liderado por la cientifica Lucia Alvarez, especializada en microbiologia de alimentos fermentados. Acompana a personas y emprendimientos a fermentar con ciencia, conciencia y confianza.",
    relationship:
      "Aliada educativa de Pink Boots Society Latin America, sumando conocimiento cientifico a la formacion de nuestras integrantes.",
    videos: [
      {
        title: "Video — Fermenta Cociencia",
        src: "/videos/fermenta-conciencia.mp4",
      },
    ],
  },
  {
    name: "BJCP",
    logo: "/sponsors/bjcp.png",
    website: "https://www.bjcp.org/",
    description:
      "Beer Judge Certification Program, el programa de certificacion de jueces y juezas de cerveza mas reconocido a nivel mundial. Sus guias de estilo y examenes son el estandar para competencias cerveceras internacionales.",
    relationship:
      "Aliado formativo de Pink Boots Society, apoyando la certificacion de juezas de cerveza de nuestra comunidad.",
  },
  {
    name: "Cicerone",
    logo: "/sponsors/cicerone.jpg",
    website: "https://www.cicerone.org/",
    description:
      "Programa de certificacion profesional de conocimiento y servicio de cerveza. Sus niveles (Certified Beer Server, Certified Cicerone, Advanced y Master Cicerone) son referencia de excelencia en la industria.",
    relationship:
      "Aliado del programa de becas de Pink Boots Society, ofreciendo certificaciones a integrantes de nuestra comunidad.",
  },
  {
    name: "Blue Entropy",
    logo: "/sponsors/blue-entropy.png",
    website: "https://www.instagram.com/blue_ntropy/",
    label: "Creador de la pagina web",
    description:
      "Equipo creativo y de desarrollo detras de la pagina web de Pink Boots Society Latin America.",
    relationship:
      "Aliado tecnologico: diseno y desarrollo del sitio oficial de Pink Boots Society Latam.",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/blue_ntropy/",
      },
    ],
  },
];

export const mainSponsor = sponsors.find((s) => s.featured) ?? sponsors[0];
export const otherSponsors = sponsors.filter((s) => !s.featured);
