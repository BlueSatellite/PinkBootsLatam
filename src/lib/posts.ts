export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "primer-collaboration-brew-day-latam-puerto-rico",
    title: "Puerto Rico recibe el primer Collaboration Brew Day de Latinoamerica",
    date: "Marzo 2026",
    excerpt:
      "El 15 de marzo de 2026, Ocean Lab Brewing, Jevas Cerveceras, Salsipuedes Brewing Co. y Pink Boots Latam elaboraron una sour de tamarindo con causa social.",
    tags: ["Collaboration Brew Day", "Puerto Rico"],
    content: [
      "El 15 de marzo de 2026 se celebro en Ocean Lab Brewing (Guaynabo, Puerto Rico) el primer Pink Boots Collaboration Brew Day de Latinoamerica, en colaboracion entre Ocean Lab Brewing, Jevas Cerveceras, Salsipuedes Brewing Co. de Panama y Pink Boots Latam.",
      "La cerveza elaborada fue una sour de tamarindo con causa social: las ganancias se destinaron a mujeres maltratadas de Puerto Rico y a becas para el crecimiento profesional de las integrantes de Pink Boots Latam.",
      "Meses despues, el 3 de mayo de 2026, la comunidad de Puerto Rico celebro su primer encuentro oficial y se conformo el subcapitulo Pink Boots Latam / Puerto Rico, hoy integrado por 21 mujeres y liderado por Keishla Torres.",
      "El Collaboration Brew Day es el evento anual de recaudacion de fondos mas importante de Pink Boots Society: cervecerias de todo el mundo elaboran el mismo dia y donan parte de las ganancias de sus ventas para financiar becas educativas. Esta primera edicion latinoamericana marca un hito para toda la region.",
    ].join("\n\n"),
  },
  {
    slug: "ericka-otero-silvia-de-tomas-juezas-world-beer-cup-2026",
    title: "Ericka Otero y Silvia De Tomas, juezas del World Beer Cup 2026",
    date: "2026",
    excerpt:
      "Dos lideres de Pink Boots Society Latam fueron seleccionadas para juzgar en la competencia cervecera mas grande del mundo.",
    tags: ["World Beer Cup", "Reconocimientos"],
    content: [
      "La co-fundadora de Pink Boots Society Latam, Ericka Otero (Panama), y la co-lider Silvia De Tomas (Peru), fueron seleccionadas como juezas del World Beer Cup 2026.",
      "El World Beer Cup, organizado por la Brewers Association, es la competencia cervecera comercial mas grande del mundo y contar con representacion latinoamericana en su cuerpo de juzgamiento es un reconocimiento al nivel de nuestra comunidad.",
      "Felicitamos a Ericka y a Silvia por representar a las mujeres cerveceras de Latinoamerica en el escenario internacional.",
    ].join("\n\n"),
  },
  {
    slug: "peru-medallas-premios-mujeres-cerveceras",
    title: "Peru suma medallas y premios para Pink Boots Latam",
    date: "2025",
    excerpt:
      "Medalla de bronce para Chica de Humo y premios La Republica y WAPA: el capitulo Peru no deja de crecer.",
    tags: ["Peru", "Medallas"],
    content: [
      "El capitulo Peru sigue cosechando reconocimientos. La cerveza Chica de Humo, elaborada junto a Barranco Beer Co, obtuvo Medalla de Bronce, mientras que Pink Boots Peru fue distinguida con los Premios La Republica y Premios WAPA.",
      "Ademas, tres integrantes del capitulo —Megan Garrity, Sara Lefevre y Ximena Gloria— fueron becadas para un viaje de formacion por cervecerias de Europa.",
      "Estos logros demuestran el impacto del trabajo colectivo de Pink Boots en la region: visibilizar, educar y hacer crecer a las mujeres cerveceras.",
    ].join("\n\n"),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
