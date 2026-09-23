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
    country: "Latinoamérica / Panamá",
    city: "Ciudad de Panamá",
    role: "Capítulo regional",
    foundedYear: 2023,
    representatives: [
      {
        name: "Ericka Otero",
        role: "Co-Fundadora & Regional Chapter Leader. Head Brewer y Quality Control Manager en Salsipuedes Brewing Co. Jueza World Beer Cup 2026.",
      },
      {
        name: "Eloisa Sanjur",
        role: "Brewer en Salsipuedes Brewing Co.",
      },
      {
        name: "Galaxis Ardila",
        role: "Sommelier de Cervezas y Consultora en Galabrew.",
      },
      {
        name: "Zitamar Valentine",
        role: "Valentine Brewing Project.",
      },
      {
        name: "Zarati Tejeira Fernández",
        role: "Cerveceros Penonomé.",
      },
      {
        name: "Alexia Medina",
        role: "Hobby Cerveceros Penonomé.",
      },
      {
        name: "Julieta Batista Jordán",
        role: "Aseguramiento de Calidad en Cervecería La Rana Dorada.",
      },
    ],
    info: "Capítulo regional de Pink Boots Society para toda Latinoamérica fundado en 2023. Su misión es extender por toda la región la educación cervecera y en bebidas fermentadas de alto nivel en habla hispana.",
    instagram: "@salsipuedesbrewingco",
    website: "https://www.instagram.com/salsipuedesbrewingco/",
  },
  {
    name: "Pink Boots Latam / Puerto Rico",
    country: "Puerto Rico",
    city: "Guaynabo / San Juan",
    role: "Sub-capítulo",
    foundedYear: 2026,
    representatives: [
      { name: "Keishla Torres", role: "Líder del sub-capítulo & Fundadora de Jevas Cerveceras" },
      { name: "Ocean Lab Brewing Co.", role: "Cervecería anfitriona (con Karen Valderrama)" },
      { name: "Jevas Cerveceras", role: "Comunidad cervecera" },
      { name: "Deborah Rodríguez Mercado", role: "Propietaria de Adrede, Taberna Cervecera (Cayey)" },
      { name: "Alexandra Mercado Correa", role: "La Esquinita Jardín Cervecero & Presidenta Homebrewers PR 2026" },
      { name: "Sandra E. Rodríguez Roldán", role: "Co-dueña de Brew Taller Experimental / DragonStone Abbey" },
      { name: "Nikole Negrón", role: "Socia de Boxlab Brewing Co. / The Beer Box & Becaria Pink Boots" },
      { name: "Minelis Méndez Vargas", role: "Embajadora de Marcas Vorágine & Becaria Pink Boots" },
      { name: "Karina M. Vega Escobar", role: "Química Industrial & Dragon Stone / Brew Taller" },
    ],
    info: "Sub-capítulo oficializado el 3 de mayo de 2026 y conformado por una vibrante comunidad de más de 20 profesionales cerveceras. Celebró el primer Collaboration Brew Day LATAM (15 de marzo de 2026): una sour de tamarindo colaborativa.",
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
        name: "Silvia De Tomas Ayllon",
        role: "Co-líder de Pink Boots Latinoamérica, Head Brewer en Two Broders y Biersommelier. Jueza World Beer Cup 2026.",
      },
      {
        name: "Vanjga Vera Loncharich",
        role: "Head Brewer, catas y administración en Cervecería Limamanta.",
      },
      {
        name: "Daiana Milón Mayer",
        role: "Master Blender y Control de Calidad en Don Michael SAC (Black Whiskey).",
      },
    ],
    info: "Cuna del movimiento en Latinoamérica con una sólida presencia de maestras cerveceras, destiladoras y juezas internacionales.",
    instagram: "@pinkbootsperu",
    facebook: "PinkBootsPeru",
    website: "https://www.instagram.com/pinkbootsperu/",
  },
  {
    name: "México",
    country: "México",
    city: "Cuernavaca, Mexicali, Ensenada, San Luis Potosí",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Viviana López Gutiérrez",
        role: "Líder de comunidad en México. Control de calidad e investigación en Tebana Laboratorio Cervecero (Cuernavaca).",
      },
      {
        name: "Cynthia Hurtado",
        role: "Juez BJCP y administradora de la Asoc. de Micro Cerveceros de Mexicali.",
      },
      {
        name: "Mariela Vázquez Chontales",
        role: "Head Brewer en Zirkel Brewing Labs (Ensenada).",
      },
      {
        name: "Andrea Zalapa Morfín",
        role: "Maestra Cervecera en La Amargura.",
      },
      {
        name: "Alejandra Dimas",
        role: "Juez de cerveza, hidromiel y kombucha (San Luis Potosí).",
      },
    ],
    info: "Red activa con presencia desde Baja California hasta Morelos y el centro del país en producción, análisis de laboratorio y juzgamiento.",
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
        name: "Verónica Carrasco",
        role: "Maestra cervecera y fundadora de Cervezas Vericcio.",
      },
      {
        name: "Elizabeth Karina Ibarra Carvajal",
        role: "Productora de hidromieles, kombuchas y sidras en Experifermentos Ankuru.",
      },
    ],
    info: "Comunidad cervecera y de bebidas fermentadas artesanales presente en la escena cervecera chilena.",
    instagram: "@cervezavericcio",
    website: "https://www.instagram.com/cervezavericcio/",
  },
  {
    name: "Brasil",
    country: "Brasil",
    city: "Curitiba",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Fernanda Santos da Costa",
        role: "Sommelier de cerveza, educadora y creadora de Cerviajona.",
      },
    ],
    info: "Conexión con la vasta cultura cervecera brasileña y pionera en sommellerie y turismo cervecero.",
    instagram: "@cerviajona",
    website: "https://www.instagram.com/cerviajona/",
  },
  {
    name: "Costa Rica",
    country: "Costa Rica",
    city: "San José",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Daniela Jiménez",
        role: "Brewer and Brewing Quality Master en Brevora Brewing and Coffee.",
      },
    ],
    info: "Presencia centroamericana destacando en calidad cervecera y fermentación artesanal.",
    instagram: "@brevora.cr",
    website: "https://www.instagram.com/brevora.cr/",
  },
  {
    name: "Argentina",
    country: "Argentina",
    city: "Caseros, Buenos Aires",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Analía Etcheverrito (Ani Etche)",
        role: "Gestión de calidad en Cervecería Ortúzar, Jueza BJCP y productora de kombucha.",
      },
    ],
    info: "Profesionales de la calidad, el juzgamiento BJCP y la fermentación en la escena artesanal argentina.",
    instagram: "@anietche",
    website: "https://www.instagram.com/anietche/",
  },
  {
    name: "El Salvador",
    country: "El Salvador",
    city: "San Salvador",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Cristina Palma",
        role: "Producción y Control de Calidad en Cadejo Brewing Company.",
      },
    ],
    info: "Representación en una de las cervecerías más icónicas de Centroamérica.",
    website: "https://www.instagram.com/cadejobrewing/",
  },
  {
    name: "Guatemala",
    country: "Guatemala",
    city: "Tecpán",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Nathaly Arriaza",
        role: "Productora de cerveza e hidromiel, co-fundadora de Cervecería Artesanal Iximché.",
      },
    ],
    info: "Impulso cervecero e hidromielero en el altiplano guatemalteco.",
    instagram: "@iximchela",
    website: "https://www.instagram.com/iximchela/",
  },
  {
    name: "Venezuela",
    country: "Venezuela",
    city: "San Cristóbal",
    role: "Integrantes de la red",
    representatives: [
      {
        name: "Mariana Guerrero",
        role: "Manager de Calidad (Turk's Head Brewery / Provo Beverages).",
      },
      {
        name: "Carla Roa",
        role: "Diseño de imagen y creadora en Cerveza Barba Negra.",
      },
    ],
    info: "Talento cervecero venezolano en diseño, calidad y proyección regional.",
    instagram: "@lupulita_",
    website: "https://www.instagram.com/lupulita_/",
  },
];
