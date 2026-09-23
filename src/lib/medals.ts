export type AwardType = "Medalla" | "Reconocimiento";
export type MetalType = "Bronce" | "Plata" | "Oro" | "Reconocimiento";

export interface Medal {
  id: string;
  isOrganizationMedal: boolean;
  beerName?: string;
  memberName: string;
  breweryCollaboration?: string;
  competition: string;
  edition?: string;
  year?: string;
  category: string;
  recognition: string;
  award: AwardType;
  metal?: MetalType;
  country: string;
  hostCountry?: string;
  description: string;
  style?: string;
  abv?: string;
  ibu?: string;
}

export const medals: Medal[] = [
  // --- MEDALLAS CON ORGANIZACIÓN (Cervezas colaborativas oficiales de Pink Boots Latam) ---
  {
    id: "org-med-1",
    isOrganizationMedal: true,
    beerName: "Chica de Humo",
    memberName: "Pink Boots Latam x Barranco Beer Company",
    breweryCollaboration: "Barranco Beer Company (Lima, Perú)",
    competition: "Indie Beer Cup",
    year: "2024",
    category: "Specialty Smoked Beer",
    style: "Smoked Porter",
    abv: "6.2%",
    ibu: "30",
    recognition: "Medalla de Bronce",
    award: "Medalla",
    metal: "Bronce",
    country: "Perú",
    hostCountry: "Panamá y Costa Rica",
    description:
      "Cerveza colaborativa de estilo Smoked Porter cocinada entre socias de Pink Boots Society Latin America y Barranco Beer Company. Elaborada con una cuidadosa selección de maltas y una mezcla autóctona de ajíes peruanos ahumados artesanalmente (ají amarillo, ají panca y sutiles notas de ají limo), logrando un balance gastronómico y aromático distintivo galardonado en la Indie Beer Cup.",
  },
  {
    id: "org-med-2",
    isOrganizationMedal: true,
    beerName: "SMASH Q’ una Chela",
    memberName: "Pink Boots Latam x Bruer Cervecería Artesanal",
    breweryCollaboration: "Bruer Cervecería Artesanal, Salsipuedes Brewing Co., White Labs & BeerMex",
    competition: "Copa Aro Rojo",
    edition: "Copa Internacional Aro Rojo 2025",
    year: "2025",
    category: "Session IPA / SMASH",
    style: "SMASH (Single Malt & Single Hop)",
    recognition: "Medalla de Bronce",
    award: "Medalla",
    metal: "Bronce",
    country: "México",
    hostCountry: "Tampico, México",
    description:
      "Colaboración regional desarrollada en Ensenada, Baja California, uniendo a socias de Pink Boots Society con Bruer Cervecería Artesanal, Salsipuedes Brewing Co., White Labs y BeerMex. Galardonada con Medalla de Bronce en la prestigiosa Copa Aro Rojo 2025 en México, en una edición donde Cervecería Bruer fue consagrada además como Mejor Cervecería Mexicana.",
  },
  {
    id: "org-med-3",
    isOrganizationMedal: true,
    beerName: "“Viajera” Petit Saison",
    memberName: "Pink Boots LATAM (Colaboración Regional)",
    breweryCollaboration: "Red Regional Pink Boots LATAM en Guatemala",
    competition: "Copa Quetzal",
    edition: "VII Edición Copa Quetzal 2026",
    year: "2026",
    category: "Saison / Petit Saison",
    style: "Petit Saison",
    recognition: "Medalla de Bronce",
    award: "Medalla",
    metal: "Bronce",
    country: "Guatemala",
    hostCountry: "Antigua Guatemala",
    description:
      "Petit Saison fresca, especiada y de alta tomabilidad elaborada en cocción comunitaria por la red de Pink Boots LATAM en Guatemala. Concebida para celebrar el espíritu itinerante, fraterno y formativo de las mujeres en la industria de bebidas fermentadas, obteniendo la Medalla de Bronce en la Copa Quetzal 2026, la competencia cervecera internacional más longeva de Centroamérica.",
  },

  // --- RECONOCIMIENTOS DE LA RED (Juzgamientos y distinciones internacionales) ---
  {
    id: "rec-1",
    isOrganizationMedal: false,
    memberName: "Ericka Otero",
    competition: "World Beer Cup",
    year: "2026",
    category: "Juzgamiento Internacional",
    recognition: "Seleccionada como Jueza Oficial",
    award: "Reconocimiento",
    metal: "Reconocimiento",
    country: "Panamá",
    hostCountry: "Estados Unidos",
    description:
      "Seleccionada por la Brewers Association como jueza oficial para la World Beer Cup 2026, el certamen cervecero profesional de mayor prestigio e impacto a nivel mundial.",
  },
  {
    id: "rec-2",
    isOrganizationMedal: false,
    memberName: "Silvia De Tomás Ayllón",
    competition: "World Beer Cup",
    year: "2026",
    category: "Juzgamiento Internacional",
    recognition: "Seleccionada como Jueza Oficial",
    award: "Reconocimiento",
    metal: "Reconocimiento",
    country: "Perú",
    hostCountry: "Estados Unidos",
    description:
      "Seleccionada por la Brewers Association como jueza oficial para la World Beer Cup 2026, representando la excelencia técnica y sensorial de la red cervecera latinoamericana.",
  },
];

export function sortMedalsChronologically(medalList: Medal[]): Medal[] {
  return [...medalList].sort((a, b) => {
    const yearA = a.year ?? "";
    const yearB = b.year ?? "";
    if (yearA && yearB && yearA !== yearB) return yearB.localeCompare(yearA);
    if (yearA && !yearB) return -1;
    if (!yearA && yearB) return 1;
    return 0;
  });
}

/**
 * Medallas oficiales de cervezas colaborativas cocinadas con la organización Pink Boots Latam
 */
export const organizationMedals: Medal[] = sortMedalsChronologically(
  medals.filter((m) => m.isOrganizationMedal)
);

export const competitionMedals: Medal[] = sortMedalsChronologically(
  medals.filter((medal) => medal.award === "Medalla")
);

export const specialRecognitions: Medal[] = sortMedalsChronologically(
  medals.filter((medal) => medal.award === "Reconocimiento")
);

export interface CountryMedals {
  country: string;
  medals: Medal[];
}

export function groupMedalsByCountry(medalList: Medal[]): CountryMedals[] {
  const groups = new Map<string, Medal[]>();
  for (const medal of medalList) {
    const country = medal.country ?? "Otros";
    const existing = groups.get(country);
    if (existing) {
      existing.push(medal);
    } else {
      groups.set(country, [medal]);
    }
  }
  return [...groups.entries()].map(([country, countryMedals]) => ({
    country,
    medals: sortMedalsChronologically(countryMedals),
  }));
}
