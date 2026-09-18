export interface SponsorSocial {
  label: string;
  url: string;
}

export interface SponsorVideo {
  title: string;
  src: string;
}

export interface SponsorFeaturedProduct {
  title: string;
  description: string;
  link: string;
  linkLabel: string;
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
  featuredProduct?: SponsorFeaturedProduct;
}

export const sponsors: Sponsor[] = [
  {
    name: "Costa Rica Beer School",
    logo: "/sponsors/cr-beer-school.avif",
    featured: true,
    website: "https://costaricabeerfactory.com/beer-school",
    description:
      "Escuela de cerveza de Costa Rica, parte del proyecto de Costa Rica Beer Factory. Ofrece formación profesional para cerveceros y cerveceras de la region, desde cursos introductorios hasta capacitación técnica especializada.",
    relationship:
      "Sponsor principal de Pink Boots Society Latin America. Su apoyo es clave para impulsar la educación cervecera de nuestras integrantes en toda la region.",
    videos: [
      {
        title: "Video instituciónal — Costa Rica Beer School",
        src: "/videos/costa-rica-beer-school.mp4",
      },
    ],
  },
  {
    name: "Lallemand Brewing",
    logo: "/sponsors/lallemand.png",
    website: "https://www.lallemandbrewing.com/",
    description:
      "Division cervecera de Lallemand Inc., líder mundial en el desarrollo, producción y distribución de levaduras y bacterias para la industria cervecera y de bebidas fermentadas. Sus productos llegan a cervecerias de más de 50 paises.",
    relationship:
      "Aliado educativo de Pink Boots Society, apoyando la formación de mujeres y personas no binarias en la industria de la fermentación.",
  },
  {
    name: "White Labs",
    logo: "/sponsors/white-labs.svg",
    website: "https://www.whitelabs.com/",
    description:
      "Pionera mundial en el suministro de levaduras liquidas para cervecerias artesanales. Fundada en San Diego, California, White Labs investiga y produce levaduras y bacterias para la industria de bebidas fermentadas.",
    relationship:
      "Aliado del programa de becas y cursos de Pink Boots Society, facilitando acceso a educación técnica especializada en levaduras y fermentación.",
  },
  {
    name: "Yakima Chief Hops",
    logo: "/sponsors/yakima-chief.png",
    website: "https://www.yakimachief.com/",
    description:
      "Cooperativa de familias productoras de lúpulo del valle de Yakima, Washington. Referencia mundial en variedades de lúpulo y blends especiales para la industria cervecera.",
    relationship:
      "Aliado de Pink Boots Society. Creadores del Pink Boots Blend, cuya venta apoya los programas educativos de la organización. Tambien patrocinan becas como el viaje experiencial de lúpulo.",
    featuredProduct: {
      title: "Pink Boots Blend",
      description:
        "Yakima Chief Hops dona $1 por cada libra vendida del Pink Boots Blend a Pink Boots Society. El blend cambia cada año y es selecciónado sensorialmente por las propias integrantes de Pink Boots, con un perfil único pensado para la elaboración creativa.",
      link: "https://www.yakimachief.com/variety/pink-boots-blend",
      linkLabel: "Ver el Pink Boots Blend",
    },
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
  {
    name: "BJCP",
    logo: "/sponsors/bjcp.png",
    website: "https://www.bjcp.org/",
    description:
      "Beer Judge Certification Program, el programa de certificación de jueces y juezas de cerveza más reconocido a nivel mundial. Sus guias de estilo y examenes son el estándar para competencias cerveceras internacionales.",
    relationship:
      "Aliado formativo de Pink Boots Society, apoyando la certificación de juezas de cerveza de nuestra comunidad.",
  },
  {
    name: "Cicerone",
    logo: "/sponsors/cicerone.jpg",
    website: "https://www.cicerone.org/",
    description:
      "Programa de certificación profesional de conocimiento y servicio de cerveza. Sus niveles (Certified Beer Server, Certified Cicerone, Advanced y Master Cicerone) son referencia de excelencia en la industria.",
    relationship:
      "Aliado del programa de becas de Pink Boots Society, ofreciendo certificaciónes a integrantes de nuestra comunidad.",
  },
  {
    name: "Fermenta Cociencia",
    logo: "/sponsors/fermenta-cociencia.svg",
    website: "https://www.fermentaconciencia.com/",
    description:
      "Proyecto de divulgación y formación en ciencias de la fermentación, liderado por la científica Lucia Alvarez, especializada en microbiología de alimentos fermentados. Acompaña a personas y emprendimientos a fermentar con ciencia, conciencia y confianza.",
    relationship:
      "Aliada educativa de Pink Boots Society Latin America, sumando conocimiento científico a la formación de nuestras integrantes.",
    videos: [
      {
        title: "Video — Fermenta Cociencia",
        src: "/videos/fermenta-conciencia.mp4",
      },
    ],
  },
  {
    name: "Academia Eco",
    logo: "/sponsors/academia-eco.png",
    description:
      "Marca de cosmetica natural aliada de Pink Boots Society Latin America, comprometida con el bienestar y el empoderamiento de las mujeres en la industria.",
    relationship:
      "Patrocinadora de Pink Boots Society Latin America. Video instituciónal pendiente de publicación.",
    // videos: [{ title: "Video — Academia Eco", src: "/videos/academia-eco.mp4" }], // pendiente
  },
];

export const mainSponsor = sponsors.find((s) => s.featured) ?? sponsors[0];
export const otherSponsors = sponsors.filter((s) => !s.featured);
