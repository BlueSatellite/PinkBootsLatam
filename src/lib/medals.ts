export interface Medal {
  memberName: string;
  competition: string;
  year?: string;
  category: string;
  recognition: string;
  award: string;
  country?: string;
}

export const medals: Medal[] = [
  {
    memberName: "Ericka Otero",
    competition: "World Beer Cup",
    year: "2026",
    category: "Juzgamiento",
    recognition: "Seleccionada como jueza",
    award: "Reconocimiento",
    country: "Panama",
  },
  {
    memberName: "Silvia De Tomas",
    competition: "World Beer Cup",
    year: "2026",
    category: "Juzgamiento",
    recognition: "Seleccionada como jueza",
    award: "Reconocimiento",
    country: "Peru",
  },
  {
    memberName: "Silvia De Tomas",
    competition: "Competencia por confirmar",
    category: "Chica de Humo — Barranco Beer Co",
    recognition: "Medalla de Bronce",
    award: "Medalla",
    country: "Peru",
  },
  {
    memberName: "Viviana Lopez",
    competition: "Copa Guerreras del Lupulo",
    category: "Por confirmar",
    recognition: "Medalla de Plata",
    award: "Medalla",
    country: "Mexico",
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
