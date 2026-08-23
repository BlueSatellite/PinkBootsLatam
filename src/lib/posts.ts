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
    date: "2026",
    excerpt:
      "Ocean Lab Brewing y Jevas Cerveceras fueron el escenario de la primera edicion latinoamericana del evento insignia de Pink Boots Society.",
    tags: ["Collaboration Brew Day", "Puerto Rico"],
    content: [
      "El sub-capitulo de Puerto Rico, nacido en 2026, fue anfitrion del primer Pink Boots Collaboration Brew Day de Latinoamerica. La coccion se realizo en Ocean Lab Brewing, en Guaynabo, de la mano de la comunidad Jevas Cerveceras.",
      "El Collaboration Brew Day es el evento anual de recaudacion de fondos mas importante de Pink Boots Society: cervecerias de todo el mundo elaboran el mismo dia y donan parte de las ganancias de sus ventas para financiar becas educativas.",
      "Esta primera edicion latinoamericana marca un hito para toda la region y abre la puerta a que mas capitulos de Latinoamerica se sumen a la celebracion global.",
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
