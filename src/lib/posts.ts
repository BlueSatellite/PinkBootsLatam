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
    title: "Puerto Rico recibe el primer Collaboration Brew Day de Latinoamérica",
    date: "Marzo 2026",
    excerpt:
      "El 15 de marzo de 2026, Ocean Lab Brewing, Jevas Cerveceras, Salsipuedes Brewing Co. y Pink Boots Latam elaboraron una sour de tamarindo con causa social.",
    tags: ["Collaboration Brew Day", "Puerto Rico"],
    content: [
      "El 15 de marzo de 2026 se celebró en Ocean Lab Brewing (Guaynabo, Puerto Rico) el primer Pink Boots Collaboration Brew Day de Latinoamérica, en colaboración entre Ocean Lab Brewing, Jevas Cerveceras, Salsipuedes Brewing Co. de Panamá y Pink Boots Latam.",
      "La cerveza elaborada fue una sour de tamarindo con causa social: las ganancias se destinaron a mujeres maltratadas de Puerto Rico y a becas para el crecimiento profesional de las integrantes de Pink Boots Latam.",
      "Meses después, el 3 de mayo de 2026, la comunidad de Puerto Rico celebró su primer encuentro oficial y se conformó el sub-capítulo Pink Boots Latam / Puerto Rico, hoy integrado por 21 mujeres y liderado por Keishla Torres.",
      "El Collaboration Brew Day es el evento anual de recaudación de fondos más importante de Pink Boots Society: cervecerías de todo el mundo elaboran el mismo día y donan parte de las ganancias de sus ventas para financiar becas educativas. Esta primera edición latinoamericana marca un hito para toda la región.",
    ].join("\n\n"),
  },
  {
    slug: "ericka-otero-silvia-de-tomas-juezas-world-beer-cup-2026",
    title: "Ericka Otero y Silvia De Tomas, juezas del World Beer Cup 2026",
    date: "2026",
    excerpt:
      "Dos líderes de Pink Boots Society Latam fueron seleccionadas para juzgar en la competencia cervecera más grande del mundo.",
    tags: ["World Beer Cup", "Reconocimientos"],
    content: [
      "La co-fundadora de Pink Boots Society Latam, Ericka Otero (Panamá), y la co-líder Silvia De Tomas (Perú), fueron seleccionadas como juezas del World Beer Cup 2026.",
      "El World Beer Cup, organizado por la Brewers Association, es la competencia cervecera comercial más grande del mundo y contar con representación latinoamericana en su cuerpo de juzgamiento es un reconocimiento al nivel de nuestra comunidad.",
      "Felicitamos a Ericka y a Silvia por representar a las mujeres cerveceras de Latinoamérica en el escenario internacional.",
    ].join("\n\n"),
  },
  {
    slug: "peru-medallas-premios-mujeres-cerveceras",
    title: "Perú suma medallas y premios para Pink Boots Latam",
    date: "2025",
    excerpt:
      "Medalla de bronce para Chica de Humo y premios La República y WAPA: el capítulo Perú no deja de crecer.",
    tags: ["Perú", "Medallas"],
    content: [
      "El capítulo Perú sigue cosechando reconocimientos. La cerveza Chica de Humo, elaborada junto a Barranco Beer Co, obtuvo Medalla de Bronce, mientras que Pink Boots Perú fue distinguida con los Premios La República y Premios WAPA.",
      "Además, tres integrantes del capítulo —Megan Garrity, Sara Lefevre y Ximena Gloria— fueron becadas para un viaje de formación por cervecerías de Europa.",
      "Estos logros demuestran el impacto del trabajo colectivo de Pink Boots en la región: visibilizar, educar y hacer crecer a las mujeres cerveceras.",
    ].join("\n\n"),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
