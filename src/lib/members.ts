export interface Member {
  id: string;
  name: string;
  country: string;
  city: string;
  email: string;
  occupation: string;
  company: string;
  social: string;
  photoDriveId?: string;
  image?: string;
  chapter: string;
  isLeadership?: boolean;
  roleBadge?: string;
  bio?: string;
}

export const members: Member[] = [
  {
    id: "m-1",
    name: "Ericka Otero",
    country: "Panamá",
    city: "Ciudad de Panamá",
    email: "pbslatam@pinkbootssociety.org",
    occupation: "Co-Fundadora de Salsipuedes Brewing Co. Encargada de Producción y Control de Calidad. Jueza World Beer Cup 2026.",
    company: "Salsipuedes Brewing Co.",
    social: "@salsipuedesbrewingco @eriquitalamasbonita",
    photoDriveId: "1V-gPg6QMAqUFXneIdw3EI-2-jj028RJQ",
    image: "/members/ericka.jpg",
    chapter: "Pink Boots Latam",
    isLeadership: true,
    roleBadge: "Co-Fundadora & Regional Leader",
  },
  {
    id: "m-2",
    name: "Silvia De Tomás Ayllón",
    country: "Perú",
    city: "Lima",
    email: "silviadetomasa@gmail.com",
    occupation: "Head Brewer y Biersommelier. Jueza World Beer Cup 2026 y BJCP Certified. Co-líder de Pink Boots Latinoamérica.",
    company: "Cervecería Two Broders / Cebichela",
    social: "@Silviadetomas @TwoBroders.pe @Cebichela @Brewmart.pe @Copalatamcervezas",
    photoDriveId: "12vjZx-Dp",
    image: "/members/silvia-de-tomas.jpg",
    chapter: "Perú",
    isLeadership: true,
    roleBadge: "Co-Líder Latam & Head Brewer",
    bio: `Biografia Silvia De Tomas:
Proveniente de la segunda generación cervecera familiar desde el año 2003 en Perú. Socia y headbrewer de Two Broders, cervecería que trabaja con frutas, especias, tuberculos y cereales peruanos. Directora de Brewmart, escuela especializada en la formación de cerveceros y abastecedora de insumos.
Socia de Cebichela, brewpub especializado en el maridaje de la gastronomía peruana y cerveza artesanal. Fundadora de la Copa Latinoamericana de Cervezas Artesanales y Copa Peruana de Cerveza, realizadas en Cuzco, Arequipa y Lima, con el objetivo de reunir a las mejores cervecerías y generar un impulso al desarrollo de la industria cervecera en el país, organización sin fines de lucro. Expresidenta de la asociación "Unión de cerveceros artesanales del Perú", que reúne y trabaja en proyectos con las más grandes cervecerías artesanales. Jueza de cervezas BJCP, nivel Certified, participando en competencias como Great American Beer Festival en Estados Unidos, Concurso de Cervejas en Brasil, Copa Tayrona en Colombia, Copa Cervezas de American en Chile, South Beer Cup en Argentina, Copa Mitad del Mundo en Ecuador, Copa Uruguaya de Cervezas en Uruguay, Copa Cervezas Mexico y Perú. Asesora de fabricas en diseño de recetas, procesos de producción y análisis sensorial, obteniendo más de 20 reconocimientos a nivel nacional e internacional. Perteneciente a Pinkboots Peru, asociación que busca inspirar, motivar y orientar a que más mujeres formen parte de la industria cervecera, recaudando fondos para invertir en educación.`,
  },
  {
    id: "m-3",
    name: "Keishla Torres",
    country: "Puerto Rico",
    city: "San Juan / Guaynabo",
    email: "jevascerveceras@gmail.com",
    occupation: "Líder Regional de Pink Boots Society LATAM Puerto Rico y Fundadora de Jevas Cerveceras. Mercadeo digital, creación de contenido y coordinación de eventos cerveceros.",
    company: "Jevas Cerveceras",
    social: "@jevascerveceras",
    photoDriveId: "1APjIdXFT8s20GZ-cZ1k_zW_e1T8UqM6f",
    image: "/members/keishla-torres.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    isLeadership: true,
    roleBadge: "Líder Sub-Capítulo Puerto Rico",
  },
  {
    id: "m-4",
    name: "Viviana López Gutiérrez",
    country: "México",
    city: "Cuernavaca",
    email: "restaurandoando@gmail.com",
    occupation: "Control de Calidad, Marketing e investigación histórica cervecera. Co-fundadora de Tebana Laboratorio Cervecero, Juez BJCP y Certified Beer Server Cicerone®. Coordinadora en Morelos de Catadoras y Cerveceras de México.",
    company: "Tebana Laboratorio Cervecero",
    social: "https://www.instagram.com/tebana_laboratorio_cervecero/",
    photoDriveId: "1TbL4uLGbIDKD7sszcjvNOUj5tubf__tQ",
    image: "/members/viviana-lopez.jpg",
    chapter: "México",
    isLeadership: true,
    roleBadge: "Líder de comunidad México",
    bio: `Viviana López Gutiérrez
Nacionalidad Colombiana y residente en México.
Restauradora y conservadora del Patrimonio Cultural
Juez BJCP
Certified Beer Server Cicerone
Local Beer expert – Beer's Cool Escuela cervecera
Actualmente cursa diplomado de Beer sommelier en AMEG
Co fundadora de Tebana Laboratorio cervecero
Miembro activo de los colectivos: Adelitas cerveceras, Wiccas Cerveceras y proyecto Las Hermanas.
Coordinadora en el Estado de Morelos de Catadoras y cerveceras de México.
Unir historia, cultura y elaboración de cerveza da lugar a una exploración fascinante. La cerveza no es solo una bebida, sino un reflejo vivo de las sociedades que la han producido y consumido a lo largo del tiempo. En sus inicios, fueron las mujeres quienes desempeñaron un papel fundamental como principales elaboradoras, dejando una huella en la tradición cervecera desde sus orígenes.`,
  },
  {
    id: "m-5",
    name: "Verónica Carrasco",
    country: "Chile",
    city: "Santiago",
    email: "cervezasvericcio@gmail.com",
    occupation: "Maestra Cervecera, fundadora y Head Brewer en Cervezas Vericcio. Ingeniera en Alimentos, Jueza BJCP Certified, Beer Sommelier Doemens y Presidenta de Mujeres Cerveceras Chile.",
    company: "Cervezas Vericcio",
    social: "@cervezavericcio",
    photoDriveId: "1GJNNriZz",
    image: "/members/veronica-carrasco.jpg",
    chapter: "Chile",
    isLeadership: true,
    roleBadge: "Maestra Cervecera & Jueza BJCP",
    bio: `Ingeniero en Alimentos
Cervecera casera entre 2010 y 2015
Fundadora head brewer Cervezas Vericcio con múltiples reconocimientos a nivel nacional e internacional.
ex Presidenta Asociación de Cerveceros caseros Chilebruers (2021-2023)
Presidenta Mujeres cerveceras Chile en ejercicio
Jueza BJCP Certified
Profesora diplomado de cervezas UVM 2024
Equipo organizador Copa Chilebruers 2020
Jueza en copas de cervezas locales y Latinoaméricanas
Con mi cervecería he ganado algunos reconocimientos en copas:
Smoke 🌶️ cacho cabra
🥈 2017 🏆 LATAM Cuzco, Perú 🇵🇪
🥈 2018 🏆 Nacional de cerveceros Chile 🇨🇱.
🥉 2023 🏆 Internacional de Fermentados. Chile 🇨🇱
🥉 2024 🏆 Volcanes. Arequipa Perú
Oatmeal stout
🥇 2019 WBA 🇨🇱
🥇 2019 WBA 🇬🇧
🥈 2026 Copa ACI 🇨🇱
Smoke
🥈 2019 🏆 Mitad del mundo, Ecuador 🇪🇨
🥈 2019  WBA 🇨🇱
Sour kiwi ají verde ft. Gente que no
🥇 2022 🏆 Guaraní. Paraguay 🇵🇾
Dark Sour Ciruela
🥉 2024 Copa Alturas Bogotá, Colombia 🇨🇴
Doppelbock con Centolla y Piedras del fiordo magallanico. Colab con Maltok & Delito Brewco.
🥈 2024 Copa Desafío Conquistadores Concepción Chile 🇨🇱
Doppelbock con Piure y Piedras del fiordo magallanico. Colab con Maltok & Delito Brewco.
🥇 2025 Copa Patagónica. Argentina 🇦🇷
🥉 2025 BOS Copa Patagónica. Argentina 🇦🇷
🥉 2025 Copa Desafío Conquistadores Concepción Chile 🇨🇱
Doppelbock con Cholga ahumada y Piedras del fiordo magallanico. Colab con Maltok & Delito Brewco.
🥇 2024 Copa Patagónica. Argentina 🇦🇷
🥇 2024 BOS Copa Patagónica. Argentina 🇦🇷
🥇 2025 Copa Capital cervecera, Valdivia Chile 🇨🇱
🥇 2025 BOS Experimentales Copa Capital cervecera, Valdivia Chile 🇨🇱
🥇 2025 Copa Centro México 🇲🇽
🥇 2025 BOS Copa Centro México 🇲🇽
Lichtenhainer ají cacho cabra
🥈2026 Copa Alturas.Perú 🇵🇪
🥈2026 Copa Sulamericana de Cerveja. Brasil 🇧🇷`,
  },
  {
    id: "m-6",
    name: "Fernanda Santos da Costa",
    country: "Brasil",
    city: "Curitiba",
    email: "fernandadacosta@gmail.com",
    occupation: "Sommelieria, enseñanza y turismo cervecero en Cerviajona. Sommelier por Univ. Positivo, Cervecera FIC y Jueza de cerveza BJCP.",
    company: "Cerviajona",
    social: "@nandadacosta008 @cerviajona",
    photoDriveId: "1JrRk1FAT",
    image: "/members/fernanda-da-costa.jpg",
    chapter: "Brasil",
    isLeadership: true,
    roleBadge: "Sommelier & Referente Brasil",
    bio: `Soy sommelier de cerveza por la Universidad Positivo (2016), cervecera FIC por el Instituto Federal Farroupilha (2022), Experto en cerveza y Estilos de cerveza por el Science of Beer Institute (2020 y 2022), cervecera caseraa, jueza de cerveza (BJCP) y emprendedora en turismo cervecero. Estoy estudiando para sommelier de vino en el Instituto Federal Paulista.`,
  },
  {
    id: "m-7",
    name: "Vanjga Vera Loncharich",
    country: "Perú",
    city: "Lima",
    email: "Vanjgavalenka@gmail.com",
    occupation: "Head Brewer, catas y administración cervecera en Cervecería Limamanta.",
    company: "Cervecería Limamanta",
    social: "@vanjgabeer",
    photoDriveId: "1MRYYBiv2RngG0DGPJUzIfCnXOWURJvwr",
    image: "/members/vanjga-vera.jpg",
    chapter: "Perú",
    roleBadge: "Head Brewer",
  },
  {
    id: "m-8",
    name: "Daniela Jiménez",
    country: "Costa Rica",
    city: "San José",
    email: "jossda2697@gmail.com",
    occupation: "Brewer and Brewing Quality Master en Brevora Brewing and Coffee. Bachiller en Ingeniería Industrial, diseñadora gráfica y Certified Beer Server Cicerone®.",
    company: "Brevora Brewing and Coffee",
    social: "@brevora.cr",
    photoDriveId: "1knathN256ZhyVZrWk9s89OPOvCVFYTDa",
    image: "/members/daniela-jimenez.jpg",
    chapter: "Costa Rica",
    roleBadge: "Brewer & Quality Master",
    bio: `Mi nombre es Daniela Jiménez, costarricense de 29 años, Bachiller en Ingeniería Industrial y técnica en Diseño Gráfico, una vocación que elegí en mis años de colegio. Si bien mi formación me dio las bases, hace dos años encontré mi verdadera pasión entre maltas y lúpulos: la elaboración de cerveza artesanal.
Actualmente cuento con la certificación de Certified Beer Server y me preparo a fondo para obtener mis credenciales como Certified Cicerone y jueza del BJCP. Todo este aprendizaje lo ejecuto a diario en Brevora, un proyecto cervecero experimental que desarrollo junto a mi esposo. A través de Brevora, buscamos honrar nuestras raíces agrícolas costarricenses utilizando ingredientes locales y, sobre todo, inyectando buena energía en cada lote.
Como cervecera, apuesto por crear perfiles de sabor limpios y bien definidos. Creo firmemente que la mejor cerveza es la que se disfruta en buena compañía y que los mejores proyectos son aquellos que nacen de un propósito auténtico.`,
  },
  {
    id: "m-9",
    name: "Cynthia Hurtado",
    country: "México",
    city: "Mexicali, Baja California",
    email: "cynthiahurtados@gmail.com",
    occupation: "Juez BJCP, creadora de contenido (@_beer.me), administradora de la Asociación de Microcerveceros de Mexicali, Contador Público y Maestra en Educación. Beer Server Cicerone®. Miembro de Adelitas Cerveceras y Catadoras y Cerveceras de México.",
    company: "Gobierno de BC / Asoc. de Microcerveceros de Mexicali",
    social: "@_beer.me TikTok: @_beerme",
    photoDriveId: "1VPd6zzNEMSdJzxRDZpgUTSleHpQQS0I9",
    image: "/members/cynthia.jpg",
    chapter: "México",
    roleBadge: "Juez BJCP & Creadora de Contenido",
    bio: `Cynthia Hurtado
Mexicali, Baja California, México
Contador Público
Maestra en Educación
Creadora de contenido en Instagram (@_beer.me)
Miembro de:
Catadoras y Cerveceras de México
Cerveceras del Desierto
Adelitas Cerveceras
Proyecto Impetuosa
Beer Servera Cicerone
Juez BJCP, Rango Pendiente`,
  },
  {
    id: "m-10",
    name: "Mariana Guerrero",
    country: "Venezuela",
    city: "Caracas",
    email: "marianaguerrerob@gmail.com",
    occupation: "Quality Manager en Turk's Head Brewery / Provo Beverages. Farmacéutica (UCV, mención Alimentos), cofundadora de Cervecería Dakonons y Juez BJCP.",
    company: "Turk's Head Brewery / Provo Beverages",
    social: "@beerwarrior_ok",
    photoDriveId: "1dvmCs3U0o1x-LTwpyVe0mR4zquFqRjvC",
    image: "/members/mariana-guerrero.jpg",
    chapter: "Venezuela",
    roleBadge: "Quality Manager & Juez BJCP",
    bio: `¡Hola!, soy Mariana Guerrero, de Caracas, Venezuela. Me gradué como farmacéutica en la Universidad Central de Venezuela en 2015, con mención en Ciencia y Tecnología de los Alimentos.
Mi pasión por la cerveza comenzó en 2012, cuando junto a mi pareja y unos amigos creamos nuestra propia cervecería: Dakonons. Que significa hermanos en idioma indígena Pemon. Desde entonces he recorrido un camino hermoso en esta industria que no deja de enseñarme y motivarme a crecer.
Fui pasante en el laboratorio de envasado de Cervecería Polar en Venezuela, trabajé como analista de calidad en Cervecería Ortuzar en Argentina, y actualmente soy manager de calidad en Turks Head Brewery, en Islas Turcas y Caicos.
Me especializo en documentación, buenas prácticas de manufactura, analisis de datos para mejora continua en aspectos de calidad y tambien soy  juez BJCP.Sigo aprendiendo, compartiendo y creciendo en este mundo cervecero que tanto me apasiona.¡Muy feliz de unirme a Pink Boots Latam!`,
  },
  {
    id: "m-11",
    name: "Zitamar Valentine",
    country: "Panamá",
    city: "Ciudad de Panamá",
    email: "valentine.brewingco@gmail.com",
    occupation: "Consultora de Recursos Humanos de profesión, fundadora y cervecera en Valentine Brewing Co. Formación en diseño de recetas, análisis sensorial y jueza BJCP en formación.",
    company: "Valentine Brewing Project",
    social: "Valentine Brewing Co.",
    photoDriveId: "1rKhCD4-CbxZXCIPj1XHjaxNnhDBqnffD",
    image: "/members/zitamar-valentine.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Fundadora Valentine Brewing",
    bio: `Soy Zitamar Valentine, consultora de Recursos Humanos de profesión, emprendedora por convicción y cervecera por pasión.
Mi historia en la cerveza comenzó con una simple curiosidad: entender qué hacía especial a una buena cerveza. Esa inquietud se transformó en una búsqueda constante de conocimiento que me llevó a descubrir que detrás de cada estilo existe una combinación de ciencia, creatividad y cultura.
A lo largo de este camino me he formado en elaboración de cerveza, diseño de recetas, análisis sensorial, identificación de off-flavors y tecnología cervecera. Actualmente me encuentro en formación como jueza del Beer Judge Certification Program (BJCP), fortaleciendo mis habilidades para evaluar cervezas con un enfoque técnico y objetivo.
La cerveza también me ha permitido construir una red de colaboración con profesionales y entusiastas de distintos países de Latinoamérica. Como miembro de Pink Boots Society Latam, creo firmemente en la importancia de compartir conocimiento, impulsar el crecimiento de las mujeres en la industria y fomentar una comunidad cervecera cada vez más inclusiva.
En 2024 nació Valentine Brewing Co., un proyecto que busca contar historias a través de la cerveza. Cada receta nace inspirada en experiencias, emociones y personas, porque creo que una buena cerveza tiene el poder de acompañar conversaciones, crear recuerdos y unir a quienes la comparten.
Hasta hoy hemos desarrollado cinco estilos que representan esa filosofía:
Bon Bon – Porter
Cervezita – East Coast IPA
La Victoria – Lager
Sabrozita – Sour Ale
Cervezita – Kölsch
Mi objetivo es seguir aprendiendo, perfeccionando cada receta y contribuir al crecimiento de la cultura cervecera en Latinoamérica, convencida de que siempre hay algo nuevo por descubrir detrás de cada vaso.`,
  },
  {
    id: "m-12",
    name: "Daiana Milón Mayer",
    country: "Perú",
    city: "Lima",
    email: "dmilon@blackwhiskey.com",
    occupation: "Subgerente y Control de Calidad en Don Michael SAC. Maestra catadora y Master Blender responsable de la selección de barricas y mezclas de Black Whiskey, Andean Gin, Vodka y Rum. Ingeniera Agroindustrial.",
    company: "Don Michael SAC (Black Whiskey)",
    social: "donmichael.pe",
    photoDriveId: "1HwkBiW0CiWuc-HVtvQhS8eySoQjtJhUU",
    image: "/members/daiana.jpg",
    chapter: "Perú",
    roleBadge: "Master Blender & Subgerente Calidad",
    bio: `Biografía Daiana Milón: Subgerente y Control de la Calidaa de Don Michael SAC
Productora de:
Black Whiskey, Black Whiskey Oxapampa Honey, Black Whiskey Single barrel
Andean Gin, Andean Vodka, Andean Cream y Andean Rum
Nacida en Perú, migró a Argentina antes de cumplir un año. Al regresar, Daiana regresó a Lima junto a su familia. Cursó los estudios básicos y luego se graduó en Ingeniería Agroindustrial y Agronegocios-, optó por una maestría en gestión empresarial con mención en Ciencias Sociales y Ambientales. En la actualidad Daiana está cursando una segunda carrera en Medicina Veterinaria.  A pesar de tales compromisos personales, ella desempeña un papel vital en las operaciones diarias de la destilería como gerente de control de calidad y nuestra maestra catadora.  Daiana es 100% responsable de la selección de las barricas y de mezclarlas con nuestro galardonado whisky negro.`,
  },
  {
    id: "m-13",
    name: "Eloísa Sanjur",
    country: "Panamá",
    city: "Ciudad de Panamá",
    email: "eloisadelcarmen00@gmail.com",
    occupation: "Brewer en Salsipuedes Brewing Co. Elaboración y procesos de producción cervecera.",
    company: "Salsipuedes Brewing Co.",
    social: "@eloisa_sanjur",
    photoDriveId: "1xI-0leowAyD6vPF2ap1gu0JTULN_KJK1",
    image: "/members/eloisa-sanjur.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Brewer",
  },
  {
    id: "m-14",
    name: "Jalen N. Muñoz Carrillo",
    country: "Puerto Rico",
    city: "San Juan",
    email: "jalenart012@gmail.com",
    occupation: "Consumidora apasionada del rubro cervecero y estudiante de arquitectura en la UPR Recinto de Río Piedras.",
    company: "UPR Recinto de Río Piedras",
    social: "@j.artgallery_ @jalen.nicoleeee",
    photoDriveId: "1sfUcyXNdTUT3L8YNSisFJLrFUufzqenz",
    image: "/members/jalen-munoz.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Comunidad Cervecera",
  },
  {
    id: "m-15",
    name: "Andrea Zalapa Morfín",
    country: "México",
    city: "Michoacán",
    email: "andreazalapa@gmail.com",
    occupation: "Maestra cervecera y fundadora de Cervecería La Amargura. Ingeniera bioquímica con especialidad en tecnología de alimentos y certificaciones Local y Global Beer Expert.",
    company: "Cervecería La Amargura",
    social: "@cerveza_laamargura @andreazmor",
    photoDriveId: "1x51pLxAXHqSkz4BL9OnAGRn1dWpX9DNa",
    image: "/members/andrea-zalapa.jpg",
    chapter: "México",
    roleBadge: "Maestra Cervecera & Ing. Bioquímica",
    bio: `Andrea Zalapa de México -Ingeniera bioquímica con especialidad en tecnología de alimentos, he laborado por corto tiempo en industria farmacéutica, después como docente de media superior pero principalmente soy emprendedora de una pequeña Cervecería llamada  La amargura y un emprendimiento de cosmética natural.-En 2015 me acerque al mundo cervecero tomando curso de cerveza casera complementando mi profesión, aunque desde pequeña en mi hogar mis papás siempre fermentaron frutas, haciendo tintos, tepaches y sobretodo la fermentación láctica con el yogurt. -He estado en festivales locales con mi cerveza y experimentado con estilos e ingredientes de mi región purépecha. -En 2024 curse Local Beer Expert y Global Beer Expert en Beer school de Alex Ancona. Me encantaría seguir aprendiendo muchísimo más de este bonito mundo cervecero e hidromielero, espero lograr certificarme internacionalmente o llegar a competencias importantes.`,
  },
  {
    id: "m-16",
    name: "Shairai L. Rivera Ramírez",
    country: "Puerto Rico",
    city: "San Juan",
    email: "shairai@gmail.com",
    occupation: "Mercadeo y manejo de redes sociales para restaurantes y barras, impulsando la promoción de cervezas, bebidas artesanales y experiencias gastronómicas.",
    company: "Shynomadpr",
    social: "Shynomadpr",
    photoDriveId: "1bKuUkjO2NOemnzYBAl7Tqps7c-3PYdgd",
    image: "/members/shairai-rivera.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Marketing & Gastronomía",
  },
  {
    id: "m-17",
    name: "Alexia Medina",
    country: "Panamá",
    city: "Penonomé, Coclé",
    email: "alemedina19@gmail.com",
    occupation: "Elaboración de cerveza artesanal en el club de cerveceros caseros de Penonomé.",
    company: "Hobby Cerveceros Penonomé",
    social: "@cerveceros_penonome",
    photoDriveId: "1dTKYYf6cVgbpDh7hcuR67JMXTDzgrfB4",
    image: "/members/alexia-medina.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Cervecera Artesanal",
  },
  {
    id: "m-18",
    name: "Deborah Rodríguez Mercado",
    country: "Puerto Rico",
    city: "Cayey",
    email: "Adredecayey@gmail.com",
    occupation: "Propietaria de Adrede, Taberna Cervecera en Cayey.",
    company: "Adrede, Taberna Cervecera",
    social: "@adredecayey @debbiebee25",
    photoDriveId: "1Jq7pK58eFOaX8A_8j6UKtyBMXfZpTQYX",
    image: "/members/deborah-rodriguez.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Propietaria Taberna",
  },
  {
    id: "m-19",
    name: "Alexandra Mercado Correa",
    country: "Puerto Rico",
    city: "San Juan / Carolina",
    email: "thegrowlerlady@gmail.com",
    occupation: "Gerente de operaciones, directora creativa y asistente de brewer en La Esquinita Jardín Cervecero & Brewhouse. Presidenta 2026 de Homebrewers PR.",
    company: "La Esquinita Jardín Cervecero & Brewhouse",
    social: "@thegrowlerlady",
    photoDriveId: "1usWrvZivcm2L4JL3zWRbCcfu96_WfPJ9",
    image: "/members/alexandra-mercado.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Operaciones & Presidenta Homebrewers PR",
  },
  {
    id: "m-20",
    name: "Mariela Vázquez Chontales",
    country: "México",
    city: "Ensenada, Baja California",
    email: "marielachontales@gmail.com",
    occupation: "Head Brewer en Zirkel Brewing Labs (Ensenada).",
    company: "Zirkel Brewing Labs",
    social: "https://www.instagram.com/zirkel_bl",
    photoDriveId: "19abY_6EAu4YWwdoTKOqFUt0SvYHYBd92",
    image: "/members/mariela-vazquez.jpg",
    chapter: "México",
    roleBadge: "Head Brewer",
  },
  {
    id: "m-21",
    name: "Cristina Palma",
    country: "El Salvador",
    city: "San Salvador",
    email: "durancristina637@gmail.com",
    occupation: "Supervisora de Calidad en Cadejo Brewing Company e Ingeniera Agroindustrial (Univ. de El Salvador). Cervecera casera en club Sivar Brew Crib y Certified Beer Server Cicerone®.",
    company: "Cadejo Brewing Company",
    social: "Sivar Brew Crib",
    photoDriveId: "1K6UFPIkgOS5KIWCHEyV2ZpUix1oVk1Ft",
    image: "/members/cristina-palma.jpg",
    chapter: "El Salvador",
    roleBadge: "Supervisora Calidad & Ing. Agroindustrial",
    bio: `Cristina Palma
Soy Ingeniera Agroindustrial formada en la Universidad de El Salvador, cervecera casera integrante del club Sivar Brew Crib cerveceros caseros de El Salvador, entusiasta por la cerveza artesanal y el café.
Llevo 2 años y medio trabajando en el rubro cervecero, pero mi interés en las bebidas fermentadas viene desde años atrás cuando desde mi casa transformaba jugos de fruta en bebidas alcohólicas artesanales. Me cautiva la experimentación sin reglas y la idea de crear algo nuevo.
Desde hace 1 año y medio trabajo en el departamento de Producción como Supervisora de Calidad en Cadejo Brewing Company, una compañía dedicada a la producción de cerveza artesanal y otras bebidas legendarias. Mi rol principal es educar al personal, acompañarles durante toda la cadena de elaboración, de esta manera garantizamos el cumplimiento de las BPM. También me encargo de analizar el rendimiento de la producción y el cuidado de los procesos.
Me emociona aprender y compartir mis conocimientos, actualmente cuento con la certificación Cicerone Beer Server, pero continúo estudiando y preparándome para convertirme en sommelier y jueza cervecera.
La cerveza artesanal se ha vuelto una de mis pasiones favoritas y me gusta compartirla con mis amistades y seres queridas, cocinando lotes pequeños y experimentales.`,
  },
  {
    id: "m-22",
    name: "Galaxis Ardila Mendizábal",
    country: "Panamá",
    city: "Ciudad de Panamá",
    email: "ardilagala2@gmail.com",
    occupation: "Ingeniera Química Administrativa con más de 37 años de experiencia en la industria cervecera. Master of Science in Brewing Science (Univ. of Nottingham) y Postgrado en Doemens (Munich). Ex-Gerente de Elaboración y Calidad en Cervecería Nacional / AB InBev. Directora de Galabrew.",
    company: "Galabrew / Ex-AB InBev Cervecería Nacional",
    social: "@ardilagala",
    photoDriveId: "1N_LJEzWQYmow0jD3XjMQc85_02l9CxgE",
    image: "/members/galaxis-ardila.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "MSc Brewing Science & Consultora",
    bio: `Perfil profesional
 Experiencia Docente 
 Idiomas
 Habilidades
 Experiencia laboral 
 Datos académicos
507 6612-9521
Docencia y capacitación en
tecnología y producción.
Gestión y optim ización de
procesos industriales.
Resolución de problem as
Trabajo en equipo
Español:  N ativo
Inglés:     Avanzado
Alem án:   Básico
Form ación en cultura de gestión y calidad a
operadores y supervisores en Cervecería
N acional
Capacitación en tecnología cervecera a
personal técnico y adm inistrativo en
Cerveceria N acional
Seguim iento a prácticas profesionales de
estudiantes de la UTP  en el area de
m anufactura de Cerveceria N acional
INGENIERA QUÍMICA
Galaxis Ardila M endizábal
ardilagala2@gmail.com
Urbanización El Doral ,
casa 97, Altos del Bosque
Ingeniera Química con más de 37 años de experiencia en la industria
cervecera y en el ámbito de la producción y tecnología. Experta en
gestión de procesos industriales, control de calidad, y producción.
Apasionada por la educación y la transmisión de conocimientos técnicos
y prácticos a futuras generaciones de técnicos o ingenieros. Busco
incorporarme como docente en una universidad para compartir mi
experiencia y formar profesionales altamente capacitados.
ABIN BEV  - Cervecería N acional S. R.L - P anam á
Gerente de P rocesos Cerveza y Refrescos   2021-2023
Responsable de operaciones de Elaboración de cervezas,       
bebidas de m alta y refrescos.
ABIN BEV  - Cervecería N acional S. R.L - P anam á
Gerente de Aseguram iento de Calidad   2013-2021
Responsable del aseguram iento de calidad a nivel
nacional con el enfoque integral de cadena de sum inistros
ABIN BEV  - Cervecería N acional S. R.L - P anam á
Gerente de Elaboración                             2009-2013
Responsable de las operaciones de planeación,
elaboracion de cervezas
ABIN BEV  - Cervecería N acional S. R.L - P anam á
Gerente de Desarrollo de M anufactura   2006-2009
Responsable de las operaciones de planeación,
elaboración de cervezas
M aster Science in Brewing Science, University of
N ottingham , England, 2006-2009
M aestría en Adm inistración de Em presas con énfasis en
Finanzas, USM A, P anam á, 1997 - 1999
P ostgrado en Tecnología Cervecera, Doem ens
Technikum ,  M unich, Alem ania, 1989 - 1990.
Ingeniería Quím ica Adm inistrativa, Instituto Tecnológico y
de Estudios Superiores de M onterrey, M onterrey,N .L.,
M éxico, 1981-1985.
 Referencias
Ing. N elly Rangel
Consultora Desarrollo Sostenible
Tel. 6615-5094
Ing. Lucero Granados
Gerente de Elaboración 
Cerveceria N acional
Tel. 6219-7347`,
  },
  {
    id: "m-23",
    name: "Carla Roa",
    country: "Venezuela",
    city: "San Cristóbal, Táchira",
    email: "carlaroac@gmail.com",
    occupation: "Ingeniero ambiental, docente universitaria y cervecera en Cerveza Barba Negra. Creadora de bebidas fermentadas andinas y de Masatíco (con 5 premios). Steward y jueza en formación en copas cerveceras.",
    company: "Cerveza Barba Negra",
    social: "@lupulita_ @carlarie",
    photoDriveId: "1pUpAR9-6",
    image: "/members/carla-roa.jpg",
    chapter: "Venezuela",
    roleBadge: "Ing. Ambiental & Creadora Cervecera",
    bio: `¡Hola, chicas! Soy Carla y les mando un abrazo desde San Cristóbal, Táchira (Venezuela)
De profesión soy ingeniero ambiental y soy docente universitaria en el área de energías alternativas. Soy melómana, cinéfila, fan del café de especialidad y cervecera artesanal. Tengo 11 años aprendiendo sobre cerveza, trabajo desde distintos ángulos en Cerveza Barba Negra, formo parte de la comunidad de Mujeres Cerveceras de Venezuela y de la ACAT.
Desde hace 4 años di un paso más al sumarme como steward y jueza en formación en copas nacionales e internacionales. Me encanta llevar mis estilos experimentales inspirados en nuestras bebidas fermentadas andinas; gracias a esa búsqueda nació Masatíco, ¡que hoy ya cuenta con 5 premios!
Me emociona enormemente sumarme a Pink Boots Society para seguir aprendiendo, compartiendo e inspirándonos entre mujeres cerveceras.
¡Salud por este nuevo comienzo juntas!`,
  },
  {
    id: "m-24",
    name: "Analía Etcheverrito (Ani Etche)",
    country: "Argentina",
    city: "Caseros, Buenos Aires",
    email: "abetcheverrito@gmail.com",
    occupation: "Biotecnóloga y Responsable de Calidad y Mejora Continua en Cervecería Ortúzar. Ex-responsable de calidad en Juguetes Perdidos y fundadora del laboratorio de Cerveza Baba. Jueza BJCP, productora de kombucha y especialista en Propiedad Industrial.",
    company: "Cervecería Ortúzar",
    social: "@anietche",
    photoDriveId: "10Wnhk39c",
    image: "/members/analia-etcheverrito.jpg",
    chapter: "Argentina",
    roleBadge: "Biotecnóloga & Gestión Calidad",
    bio: `Soy biotecnóloga argentina y hace 8 años que mi vida gira alrededor de la fermentación.
Entré al mundo de la cerveza casi por intuición y me quedé por todo lo que encontré: comunidad, aprendizaje constante y una forma de construir identidad desde lo colectivo.
En 2019 empecé como responsable de calidad en Juguetes Perdidos, sin saber que ese iba a ser uno de los lugares que más me iba a marcar el rumbo de lo que seguía. Después vino el desafío de crear un laboratorio desde cero en Cerveza Baba, donde pude unir la ciencia con criterios productivos y escalabilidad. Hoy trabajo en Cervecería Ortúzar, acompañando procesos desde la calidad y la mejora continua en un modelo de gran escala.
En 2022 me formé como jueza BJCP, participo en copas cerveceras en Latinoamérica y doy charlas y capacitaciones porque creo profundamente en compartir experiencias y conocimientos para crecer en conjunto.
También exploré otros caminos en los fermentos, convirtiéndome en productora de kombucha, fermento que me apasiona y desde donde tuve la oportunidad de ser jueza en la primera competencia del país. En paralelo me especializo en Propiedad Industrial, asesorando desde aspectos legales y regulatorios a productores de invenciones e identidades en el mercado.
La industria no siempre es fácil, pero sigo eligiendo quedarme cerca en búsqueda de expandir mi cabeza, de aprender de otras culturas cerveceras, de conectar con mujeres que también están construyendo su lugar en este mundo.
Porque más allá de la cerveza, lo que realmente nos sostiene son las redes humanas.`,
  },
  {
    id: "m-25",
    name: "Nathaly Arriaza",
    country: "Guatemala",
    city: "Tecpán",
    email: "Arriaza.nathy89@gmail.com",
    occupation: "Productora de cerveza e hidromiel y co-fundadora de Cervecería Artesanal Iximché.",
    company: "Cervecería Artesanal Iximché",
    social: "@arriaza.nath @iximchela",
    photoDriveId: "1GfcCwyAX",
    image: "/members/nathaly-arriaza.jpg",
    chapter: "Guatemala",
    roleBadge: "Co-Fundadora & Productora Iximché",
  },
  {
    id: "m-26",
    name: "Sandra E. Rodríguez Roldán",
    country: "Puerto Rico",
    city: "Río Grande",
    email: "brew.taller@gmail.com",
    occupation: "Co-dueña y administradora de cervecería y taproom en Brew!!! Taller Experimental y DragonStone Abbey.",
    company: "Brew!!! Taller Experimental / DragonStone Abbey",
    social: "@brewtallerexperimental",
    photoDriveId: "1wrYxs0zZ",
    image: "/members/sandra-rodriguez.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Co-Dueña & Taproom Manager",
  },
  {
    id: "m-27",
    name: "Jessica Rodríguez",
    country: "Puerto Rico",
    city: "Luquillo",
    email: "jessicarodrig32@hotmail.com",
    occupation: "Bióloga y consultora de calidad y asuntos regulatorios en farmacéutica, dispositivos médicos y salud animal. Aficionada y estudiante del mundo cervecero.",
    company: "Consultora de Calidad y Asuntos Regulatorios",
    social: "https://www.instagram.com/_the_life_of_jesse_",
    photoDriveId: "1MsWDVSK1",
    image: "/members/jessica-rodriguez.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Bióloga & Calidad Regulatoria",
  },
  {
    id: "m-28",
    name: "Elizabeth Karina Ibarra Carvajal",
    country: "Chile",
    city: "Santiago / Región Central",
    email: "karibarra76@gmail.com",
    occupation: "Elaboración de hidromieles, kombuchas y sidras en Experifermentos Ankuru.",
    company: "Experifermentos Ankuru",
    social: "@karinaibarracarvajal @experifermentosankuru",
    photoDriveId: "1yTqG2oDE",
    image: "/members/karina-ibarra.jpg",
    chapter: "Chile",
    roleBadge: "Productora de Fermentos",
  },
  {
    id: "m-29",
    name: "Nikole Negrón",
    country: "Puerto Rico",
    city: "Aguadilla",
    email: "nikole0623@gmail.com",
    occupation: "Socia y Gerente General de The Beer Box y Boxlab Brewing Co. Con más de 10 años en la escena craft de Puerto Rico, creadora de la cerveza 'Soberana' y becaria Pink Boots Society.",
    company: "Boxlab Brewing Co. / The Beer Box",
    social: "@Nikoleneg",
    photoDriveId: "1WOhwB_sj",
    image: "/members/nikole-negron.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Socia & Gerente General Boxlab",
    bio: `Biografía
Mi nombre es Nikole Negrón y llevo más de 10 años formando parte de la escena de cerveza artesanal en Puerto Rico. Mi primera experiencia en el mundo del craft beer comenzó en Bros Brewhouse gracias a mi amigo Alberto Camacho, hoy dueño de La Grifería. Lo que empezó como una curiosidad y una necesidad de empleo mientras estudiaba Psicología en la Universidad de Puerto Rico en Aguadilla, terminó convirtiéndose en mucho más de lo que imaginaba.
Con el tiempo, ese camino me llevó a crecer junto a The Beer Box y Boxlab Brewing Co., participando en eventos, ventas, logística, relaciones con clientes y representación de marca. En marzo de 2026 también lancé mi primera receta, Soberana, un momento muy especial dentro de mi trayectoria y crecimiento en la industria.
Hoy, después de tantos años de crecimiento y dedicación, tengo el orgullo de ser socia de The Beer Box y Boxlab Brewing Co., continuando un camino que comenzó simplemente con curiosidad y terminó convirtiéndose en mi pasión y estilo de vida.
Para mí, la cerveza artesanal siempre ha sido mucho más que cerveza: ha sido comunidad, creatividad y una forma de conectar personas a través de experiencias memorables.`,
  },
  {
    id: "m-30",
    name: "Juliehana Carrillo",
    country: "Estados Unidos",
    city: "Miami / San Juan",
    email: "bolacervecera@gmail.com",
    occupation: "Consumidora apasionada, creadora de contenido en Lúpulos y Melaninapr y defensora de la comunidad cervecera latina.",
    company: "Lúpulos y Melaninapr",
    social: "@Lupulos_y_Melaninapr",
    photoDriveId: "1fxEv3f2B",
    image: "/members/juliehana-carrillo.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Contenido & Comunidad Latina",
  },
  {
    id: "m-31",
    name: "Angélica M. Adorno Santos",
    country: "Puerto Rico",
    city: "San Juan",
    email: "adornoangelica18@gmail.com",
    occupation: "Cervecera casera y divulgadora en Artesana Cervecera.",
    company: "Artesana Cervecera",
    social: "@artesanacervecera",
    photoDriveId: "1paKHGySm",
    image: "/members/angelica-adorno.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Homebrewer & Divulgadora",
  },
  {
    id: "m-32",
    name: "Zaratí Tejeira Fernández",
    country: "Panamá",
    city: "Penonomé, Coclé",
    email: "ztejeiraf@gmail.com",
    occupation: "Licenciada en Turismo y homebrewer en Cerveceros Penonomé desde 2021.",
    company: "Cerveceros Penonomé",
    social: "@zaratitejeirafernandez",
    photoDriveId: "1EI113u0P",
    image: "/members/zarati-tejeira.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Cervecera Artesanal & Turismo",
    bio: `Mi  nombre  es  Zaratí  Tejeira  Fernández,  Panameña,  nacida  en  la  Provincia  de  Coclé  -  
Penonomé,
 
el
 
20
 
de
 
octubre
 
de
 
1989.
  Licenciada  en  Turismo  con  Hotelería  y  Cruceros.   Apasionada  por  la  Cerveza  Artesanal,  por  lo  cual  quiero  seguir  creciendo  y  aprendiendo  
mucho
 
mas.
  Formo  parte  de  Cerveceros  Penonomé  desde  el  año  2021,  somos  un  grupo  de  amigos  
amantes
 
los
 
cuales
 
compartimos
 
el
 
gusto
 
y
 
la
 
pasión
 
por
 
la
 
cerveza
 
artesanal.
  Actualmente  Homebrewer  en  Cerveceros  Penonomé 🍻`,
  },
  {
    id: "m-33",
    name: "Alejandra Dimas",
    country: "México",
    city: "San Luis Potosí",
    email: "aledimas224@gmail.com",
    occupation: "Jueza de hidromiel, cerveza y kombucha, y productora de las tres bebidas fermentadas.",
    company: "Ale Dimas Juez",
    social: "@aledimas.coach",
    photoDriveId: "14s_D3NdE",
    image: "/members/ale-dimas.jpg",
    chapter: "México",
    roleBadge: "Juez Cerveza, Hidromiel & Kombucha",
  },
  {
    id: "m-34",
    name: "Karen Valderrama",
    country: "Puerto Rico",
    city: "Carolina / San Juan",
    email: "kv@oceanlabbrewing.com",
    occupation: "Coordinadora de Operaciones en Ocean Lab Brewing Co.",
    company: "Ocean Lab Brewing Co.",
    social: "@kpatriciavt",
    photoDriveId: "1bymK_JFC",
    image: "/members/karen-valderrama.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Coordinadora de Operaciones",
  },
  {
    id: "m-35",
    name: "Julieta Batista Jordán",
    country: "Panamá",
    city: "Ciudad de Panamá",
    email: "julieta.batistajj@gmail.com",
    occupation: "Aseguramiento de la Calidad en Cervecería La Rana Dorada.",
    company: "Cervecería La Rana Dorada",
    social: "@Juliet.labtqim",
    photoDriveId: "1iNosmXKz",
    image: "/members/julieta-batista.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Aseguramiento de Calidad",
  },
  {
    id: "m-36",
    name: "Nilda Escobar",
    country: "Puerto Rico",
    city: "Río Grande",
    email: "etapasne@gmail.com",
    occupation: "Promoción y administración de taproom cervecero en Brew Taller Experimental.",
    company: "Brew Taller Experimental",
    social: "Facebook: Nilda Escobar",
    photoDriveId: "1pt357LVR",
    image: "/members/nilda-escobar.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Administración & Taproom",
  },
  {
    id: "m-37",
    name: "Minelis Méndez Vargas",
    country: "Puerto Rico",
    city: "San Juan",
    email: "minelis.mendez.vargas@gmail.com",
    occupation: "Embajadora de marcas, ventas y mercadeo en Vorágine. Becaria Pink Boots Society.",
    company: "Vorágine",
    social: "@voragine_",
    photoDriveId: "1BSlkh0kc",
    image: "/members/minelis-mendez.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Ventas & Embajadora de Marca",
  },
  {
    id: "m-38",
    name: "Karina M. Vega Escobar",
    country: "Puerto Rico",
    city: "Río Grande",
    email: "k.vegaescobar@gmail.com",
    occupation: "Química Industrial, administración de taproom y asistente en producción de cervezas artesanales en DragonStone y Brew Taller.",
    company: "DragonStone Abbey / Brew Taller Experimental",
    social: "https://www.linkedin.com/in/karina-v-050227188",
    photoDriveId: "1-yyYtMNe",
    image: "/members/karina-vega.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Química Industrial & Producción",
  },
  {
    id: "m-39",
    name: "Adriana",
    country: "Perú",
    city: "Lima",
    email: "",
    occupation: "Integrante cervecera y participante activa en eventos y cocimientos comunitarios de la red Pink Boots Society en Perú.",
    company: "Pink Boots Perú",
    social: "",
    image: "/members/adriana.jpg",
    chapter: "Perú",
    roleBadge: "Comunidad Cervecera Perú",
  },
  {
    id: "m-40",
    name: "Ariana Ferrer",
    country: "Perú",
    city: "Lima",
    email: "",
    occupation: "Socia fundadora y Head de Marketing y Operaciones en Invictus Taproom. Comunicadora con especialidad en marketing y publicidad, host de catas maridaje, experiencias sensoriales y cocimientos en planta piloto.",
    company: "Invictus Taproom",
    social: "Invictus Taproom",
    image: "/members/ariana.jpg",
    chapter: "Perú",
    roleBadge: "Fundadora & Head de Marketing Invictus",
    bio: `ArianaFerrer
ComunicadoraconEspecialidadenMarketingyPublicidad
SociafundadoradeInvictusTaproom
HeaddeMarketingyOperacionesenInvictusTaproom
Hostdecatasmaridajeyexperienciascerveceras
HeaddecocimientosenplantapilotoenvivoenelTaproom`,
  },
  {
    id: "m-41",
    name: "Daniela Pareja Mejía",
    country: "Ecuador",
    city: "Quito / UC Davis (California)",
    email: "",
    occupation: "Bióloga e investigadora de la biodiversidad amazónica. Cervecera casera en formación continua (aspirante BJCP y estudiante del Master Brewers Certificate en UC Davis). Proyecto cervecero experimental integrando plantas y frutos amazónicos ecuatorianos.",
    company: "Cervecería de Biodiversidad (En desarrollo)",
    social: "",
    image: "/members/daniela-pareja.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Bióloga & Cervecera de Biodiversidad",
    bio: `Biografía Daniela Pareja Mejía
Soy bióloga e investigadora apasionada por integrar el comportamiento, la ecología y la conservación, especialmente en anfibios y reptiles. Durante más de una década he trabajado en la Amazonía, estudiando su biodiversidad y promoviendo la conservación ambiental.
Mi pasión por la cerveza artesanal comenzó en 2016, cuando el proyecto de tesis de un amigo sobre elaboración de cerveza despertó mi curiosidad. Desde entonces, he explorado este fascinante mundo a través de la elaboración casera, catas alrededor del mundo y colaboraciones con mujeres cerveceras en Ecuador y Brasil. En julio rendí el examen del BJCP y actualmente estoy a la espera de mis resultados.
En enero comenzaré un posdoctorado en California, donde también pienso cursar el  Master Brewers Certificate Program en la Universidad de California, Davis, para fortalecer mis conocimientos técnicos y analíticos en la ciencia cervecera.
Mi sueño es regresar a Ecuador y abrir mi propia cervecería, un espacio que combine mi formación científica con la exploración de ingredientes locales —como productos amazónicos, plantas y frutas ecuatorianas— para crear cervezas únicas inspiradas en la naturaleza y la ciencia. Quiero también usar mi amor por los anfibios y reptiles para mi marca e imagen.`,
  },
  {
    id: "m-42",
    name: "Diana Juárez Durán",
    country: "México",
    city: "San Luis Potosí",
    email: "",
    occupation: "Gerente de Calidad en Cervecería Cielito Lindo. Ingeniera en Alimentos (UASLP), Maestra en Ciencias en Bioprocesos y Certified Beer Server Cicerone®. Ex-líder de I+D y Calidad en La Legendaria (certificación ISO 22000:2018). Ponente en Cerveza México y miembro de Adelitas Cerveceras Mexicanas.",
    company: "Cervecería Cielito Lindo",
    social: "",
    image: "/members/diana-juarez-duran.jpg",
    chapter: "México",
    roleBadge: "Gerente de Calidad & M. en C. Bioprocesos",
    bio: `Biografía  Diana    Soy  apasionada  de  la  cerveza  y  fermentaciones.  Ingeniera  en  Alimentos  por  la  FCQ  de  la  
UASLP
 
y
 
Maestra
 
en
 
Ciencias
 
en
 
Bioprocesos
 
por
 
la
 
misma
 
institución,
 
durante
 
la
 
maestría
 
realicé
 
estancia
 
en
 
CIATEJ,
 
donde
 
desarrollé
 
procesos
 
fermentativos
 
con
 
levaduras
 
sacharomyces
 
y
 
no
 
sacharomyces
 
de
 
maltas
 
innovadora.
 
  󰟾  Participé  en  el  programa  para  la  incorporación  de  maestros  y  doctores  en  la  industria  
para
 
fomentar
 
la
 
competitividad
 
e
 
innovación
 
en
 
el
 
estado
 
de
 
San
 
Luis
 
Potosí
 
CONACYT-COPOCYT
 
2016
 
en
 
Microcervecería
 
La
 
Legendaria
 
S.A.
 
de
 
C.V.,
 
fui
 
líder
 
de
 
I
  
+
 
D,
 
después
 
gerente
 
de
 
control
 
de
 
calidad
 
dónde
 
implementé
 
y
 
certifiqué
 
en
 
sistema
 
de
 
gestión
 
bajo
 
el
 
esquema
 
ISO
 
22000:
 
2018
 
con
 
el
 
fin
 
de
 
garantizar
 
la
 
calidad
 
e
 
inocuidad
 
de
 
la
 
cerveza,
 
dónde
 
estuve
 
colaborando
 
cerca
 
de
 
6
 
años.
  🥃  Después,  me  invitaron  a  echar  a  andar  una  planta  de  ron  en  la  gerencia  general  y  estuve  
aproximadamente
 
un
 
año.
  🍻  Actualmente,  estoy  de  regreso  en  el  mundo  cervecero  en  el  área  de  Calidad  en  Grupo  
Cielito
 
Lindo
 
en
 
la
 
Gerencia
 
de
 
Calidad.
  📚  También  soy  homebrewer  aunque  últimamente  no  he  podido  cocinar,  he  participado  
como
 
ponente
 
en
 
Cerveza
 
México
 
(2018
 
y
 
2023),
 
además
 
de
 
tomar
 
diversos
 
cursos
 
y
 
certificaciones
 
como:
  *  Certified  Beer  Server  |  Cicerone®  *  Beer:  The  Science  of  Brewing  |  KU  Leuven  *  HACCP  e  Interpretación  ISO  22000:2018  |  Vela  Consultores   *  Vida  de  anaquel  y  bebidas  |  CIATEJ  *  Formación  de  líderes  en  evaluación  sensorial  |  CIATEJ   Actualmente  soy  miembro  de  Adelitas  Cerveceras  Mexicanas  y  feliz  de  sumarme  a  Pink  
Boots
 
Society.
  ¡Salud!  😊🍻`,
  },
  {
    id: "m-43",
    name: "Jary Rocha",
    country: "Uruguay",
    city: "Montevideo",
    email: "",
    occupation: "Juez de cervezas BJCP y juez sensorial en competencias cerveceras internacionales de Latinoamérica (Copa Guaraní, Copa Latinoamericana, Copa Centroamericana, Los Andes). Especialista en evaluación sensorial y calidad.",
    company: "Juez Internacional de Cervezas",
    social: "",
    image: "/members/jary-rocha.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Juez Internacional BJCP",
  },
  {
    id: "m-44",
    name: "Dra. Lucía Álvarez",
    country: "Argentina",
    city: "Bariloche, Río Negro",
    email: "",
    occupation: "Microbióloga especializada en alimentos y bebidas fermentadas. Investigadora del CONICET en el Instituto Andino Patagónico de Tecnologías Biológicas y Geoambientales (IPATEC) y docente en la Universidad Nacional del Comahue. Directora de Fermenta Con Ciencia, asesora técnica cervecera y organizadora del FermenFest.",
    company: "IPATEC (CONICET - UNCOMA) / Fermenta Con Ciencia",
    social: "@fermentaconciencia https://www.fermentaconciencia.com",
    image: "/members/lucia-alvarez.jpg",
    chapter: "Argentina",
    roleBadge: "Microbióloga & Investigadora CONICET",
    bio: `Biografía profesional
Dra. Lucía  Álvarez es microbióloga  especializada  en alimentos fermentados, investigadora  del  
Consejo  Nacional  de  Investigaciones  Cinetíficas  y  Técnicas  (CONICET)  de  Argentina  en  el  
Instituto Andino Patagónico de Tecnologías Biológicas y Geoambientales (IPATEC, CONICET-
UNCo)  y  fundadora  de  Fermenta  Con  Ciencia,  una  plataforma  de  divulgación  científica  y  
formación técnica enfocada en fermentación y bebidas fermentadas en Latinoamérica.
Su trabajo integra investigación, educación y asesoramiento técnico aplicado a microbiología de  
fermentaciones, control de calidad, análisis sensorial y optimización de procesos fermentativos, con  
especial enfoque en kombucha y fermentaciones artesanales.
A lo  largo  de  su  trayectoria  profesional,  la  Dra.  Lucía  Álvarez  ha  brindado  conferencias  y  
capacitaciones  en  congresos,  seminarios  y  eventos  nacionales  e  internacionales  vinculados  a  
microbiología, alimentos fermentados y bebidas fermentadas. Es autora y coautora de publicaciones  
científicas  en  revistas  internacionales  de  alto  impacto  y  actualmente  dirige  su  equipo  de  
investigación enfocado en kombucha y panificados fermentados. 
A través de Fermenta Con Ciencia y con el apoyo de IPATEC y la Fundación CRELTEC desarrolla  
cursos,  talleres,  programas  de  capacitación  y  contenidos  educativos  dirigidos  a  productores,  
profesionales y consumidores interesados en comprender la fermentación desde una perspectiva  
científica, rigurosa y accesible.
Además de su actividad académica y de comunicación científica, brinda asesoramiento técnico a  
productores y emprendimientos del sector de bebidas fermentadas en áreas como:
• Control microbiológico y aseguramiento de calidad 
• Troubleshooting y resolución de desvíos fermentativos 
• Optimización de procesos de fermentación 
• Desarrollo y estabilidad de productos 
• Evaluación y análisis sensorial de kombucha 
• Capacitación técnica para productores y equipos de trabajo 
También impulsa y organiza iniciativas de divulgación y formación, entre ellas el FermenFest, un  
evento orientado a la ciencia, cultura y comunidad de los alimentos y bebidas fermentadas.
Instagram:@fermentaconciencia
Web: www.fermentaconciencia.com`,
  },
  {
    id: "m-45",
    name: "Noella Candanedo",
    country: "Panamá",
    city: "Ciudad de Panamá",
    email: "",
    occupation: "Brewer en Emperador Beer Pty. Especialista en finanzas y analista de datos, dedicada a la elaboración y crecimiento de cervezas de calidad en Panamá.",
    company: "Emperador Beer Pty",
    social: "",
    image: "/members/noella-candanedo.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Brewer & Analista Financiera",
    bio: `Mi nombre es Noella y s oy brewer de Emperador Beer Pty, una pequeña cervecería en 
Panamá con muchas ganas de seguir creciendo.  
Estudié finanzas y me sigo capacitando  en este rubro , sin embargo, también desempeño 
roles de analista de datos.   
Mi pasión por la cerveza inicia en medio de la pandemia . Con mucha curiosidad por 
aprender sobre el impacto de es ta en mi país, comencé a desarrollar mucho interés en la 
cerveza artesanal. Pero la llama la alimentó un querido familiar. Mi tío. Una persona vivaz y 
enérgica con muchos proyectos e ideas por delante.  
Me pesa su ausencia, pero, aquel interés jamás ces ó. Por eso, cuando se me present ó la 
oportunidad de unirme a Emperador, no requirió mucho tiempo convencerme de hacerlo. Y 
a pesar de los retos, el trabajo arduo y el tiempo y dedicación que conlleva elaborar buenas 
cervezas, me siento muy feliz de aprender cada día un poco más.  
Aunque aún estoy en la etapa inicial de mi desarrollo como cervecera, ser recibida en PBS 
me hace sentir que soy parte de algo mas grande que mis propios sueños. Los sueños de 
mujeres fuertes y decididas que también disfrutan de hacer buenas cervezas juntas.`,
  },
  {
    id: "m-46",
    name: "Rossemary Álvarez",
    country: "Bolivia",
    city: "La Paz",
    email: "",
    occupation: "Integrante activa de la red comunitaria de Pink Boots Society Latin America, apoyando la inclusión, difusión y aprendizaje cervecero femenino.",
    company: "Pink Boots Latam",
    social: "",
    image: "/members/rossemary-alvarez.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Comunidad Cervecera",
  },
  {
    id: "m-47",
    name: "Valeria Mena",
    country: "Chile",
    city: "Valparaíso / Santiago",
    email: "",
    occupation: "Ingeniera Civil Química (PUCV), Jueza de cervezas BJCP Certified, Beer Sommelier Doemens (4ta generación en Chile) y Juez Internacional de Kombucha (Recognized). Co-fundadora de la Asociación de Cerveceros Caseros de Chile (Chilebruers) y miembro activa de Mujeres Cerveceras Chile.",
    company: "Chilebruers / Mujeres Cerveceras Chile",
    social: "",
    image: "/members/valeria-mena.jpg",
    chapter: "Chile",
    roleBadge: "Ing. Civil Química & Juez BJCP",
    bio: `Biografía Valeria Mena
De la zona central de Chile, es Ingeniera Civil Química titulada de la Pontificia Universidad Católica de Valparaíso, con amplia experiencia en el suministro de equipos para el movimiento y tratamiento del agua en la industria de alimentos y bebidas.
Su trayectoria se ha enriquecido con una destacada participación en el mundo de las bebidas fermentadas: es Juez Internacional de Kombucha con grado Recognized, Juez de cervezas BJCP con rango Certified y Beer Sommelier Doemens de la cuarta generación en Chile. Además, se dedica a la producción casera de kombuchas, aportando conocimiento práctico y pasión por la innovación.
Ha participado en competencias nacionales e internacionales, evaluando muestras tanto caseras como profesionales, y cuenta con experiencia en la organización y dirección de estos certámenes. Es miembro y cofundadora de la Asociación de Cerveceros Caseros de Chile (Chilebruers) y miembro activa de Mujeres Cerveceras Chile.
Su compromiso con la comunidad se refleja en su constante disposición a colaborar y generar instancias que promuevan el desarrollo del consumo y la producción de kombuchas y cervezas en Chile, fortaleciendo así la cultura cervecera y fermentada del país.`,
  },
  {
    id: "m-48",
    name: "Vivian Janet López",
    country: "Puerto Rico",
    city: "San Juan",
    email: "",
    occupation: "Fundadora de Hops On Wheels PR, servicio de beer trailer y experiencias cerveceras para eventos privados. Enfermera de profesión con más de 8 años de experiencia, apasionada por la difusión de la cultura cervecera y el papel de las mujeres en la industria.",
    company: "Hops On Wheels PR",
    social: "Hops On Wheels PR",
    image: "/members/vivian-lopez-gonzales.jpg",
    chapter: "Pink Boots Latam / Puerto Rico",
    roleBadge: "Fundadora Hops On Wheels PR",
    bio: `Soy Vivian Janet López, enfermera de profesión con más de 8 años de experiencia y emprendedora apasionada por la cerveza artesanal. A través de mi negocio, Hops On Wheels PR, me dedico a crear experiencias cerveceras para eventos privados y actividades especiales mediante el servicio de beer trailer. Lo que comenzó como una curiosidad se ha convertido en una verdadera pasión. Me interesa aprender continuamente sobre estilos de cerveza, maltas, lúpulos y tendencias de la industria, además de colaborar con proyectos que promuevan la cultura cervecera en Puerto Rico. También me inspira conocer la historia de las mujeres en la cerveza y el importante papel que han desempeñado a lo largo del tiempo. Me entusiasma ver cómo cada vez más mujeres forman parte de esta industria y todo lo que podemos seguir aportando, creando y alcanzando juntas. 
🍻`,
  },
  {
    id: "m-49",
    name: "Zadkiela (Zadky)",
    country: "Venezuela",
    city: "Fremantle / Perth (Australia)",
    email: "",
    occupation: "Brewing Quality Analyst en Little Creatures (Australia). Ingeniera Química (UCV), Cicerone® Certified Beer Server, WSET Level 2 en vinos y especialista en control y manejo de levaduras. Fundadora de The Makers Project, The Passenger Distilling Co. y Cacao Nativo.",
    company: "Little Creatures Brewing / The Makers Project",
    social: "@zadky_beer_to_bar",
    image: "/members/zadkiela.jpg",
    chapter: "Pink Boots Latam",
    roleBadge: "Brewing Quality Analyst & Ing. Química",
    bio: `RESUMEN:@zadky_beer_to_bar es Ingeniera Química de la Universidad Central de Venezuela (UCV), con formación en Microcervecería (PUCV, Chile), Bebidas Destiladas (UNTBA, Argentina), Ciencia y Tecnología de Cacao y Chocolate (INTA, Venezuela) y Manejo y Control de Levaduras (en Levaduras Kayta y en Patagonian Yeast, Chile). Además, es Cicerone® Certified Beer Server y cuenta con formación WSET Level 2 en vinos.
Su trayectoria profesional, desarrollada entre Venezuela, Chile y Australia, integra ingeniería de procesos, cerveza, destilación, calidad, desarrollo de productos y análisis sensorial. En Chile trabajó en el diseño de equipos industriales para pequeños y medianos productores de vino y cerveza en Busa Inox; posteriormente fue Product Manager en Kairos Brewing, participando en el desarrollo de cervezas, gin, sangría y Bierbrand de la marca, y fundó la microdestilería artesanal The Passenger Distilling Co.
El cacao y el chocolate son también una parte importante de su perfil. Fue embajadora del Club Cacao Magno en Chile, desarrollando experiencias sensoriales y maridajes de chocolates bean-to-bar con cervezas artesanales. Su formación académica la llevó además a investigar el potencial del cacao en bebidas, trabajando en el desarrollo de bebidas fermentadas a partir del mucílago de cacao. Su labor en torno a la educación y cultura del chocolate se extendió hasta Australia, donde fundó Cacao Nativo, una iniciativa bean-to-bar que combina la elaboración artesanal de chocolate con experiencias de cata orientadas a descubrir el cacao desde su origen, sus características sensoriales y su potencial gastronómico.
Actualmente reside en Western Australia. Su experiencia en la industria cervecera australiana comenzó en Gage Roads, donde trabajó como Assistant Brewer, y actualmente se desempeña como Brewing Quality Analyst en Little Creatures, una de las cervecerías craft más reconocidas de Australia. Allí participa en el control de calidad a lo largo del proceso cervecero, integrando análisis de laboratorio, conocimiento de procesos y evaluación sensorial.
Paralelamente desarrolla The Makers Project, una iniciativa enfocada en acompañar a emprendedores y pequeños productores en el camino desde una idea hasta un producto viable, especialmente en bebidas, fermentaciones y productos gastronómicos.
Para Zadkiela, ser parte de Pink Boots Society significa pertenecer a una comunidad donde las mujeres pueden compartir conocimientos, apoyarse, inspirarse y crecer juntas. Desde su experiencia y perspectiva latinoamericana, espera contribuir a fortalecer esos espacios de colaboración y crear conexiones que abran nuevas oportunidades para todas dentro de la industria.
“Amo celebrar el trabajo y los logros de otras mujeres en esta industria, porque conozco de cerca la dedicación, la constancia y el esfuerzo que hay detrás de cada camino. Creo profundamente que compartir nuestras experiencias y lo que cada una ha aprendido es una de las formas más bonitas de inspirarnos, apoyarnos y crecer juntas.”`,
  },
];

export const allCountries = [
  "Todos",
  "Puerto Rico",
  "Panamá",
  "México",
  "Perú",
  "Chile",
  "Venezuela",
  "Argentina",
  "Brasil",
  "Costa Rica",
  "El Salvador",
  "Guatemala",
  "Ecuador",
  "Uruguay",
  "Bolivia",
] as const;

export function getMembersByCountry(country: string): Member[] {
  if (!country || country === "Todos") return members;
  return members.filter((m) => m.country.toLowerCase() === country.toLowerCase());
}

/**
 * Members that have a photo ready for the Community Collage
 */
export const collageMembers: Member[] = members.filter((m) => Boolean(m.image));
