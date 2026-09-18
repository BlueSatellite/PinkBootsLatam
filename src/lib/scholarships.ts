export interface AwardedScholarship {
  memberName: string;
  year?: string;
  institution: string;
  type: string;
  place: string;
  objective: string;
  experience: string;
}

export interface UpcomingScholarship {
  name: string;
  institution: string;
  period?: string;
  requirements: string[];
  deadline?: string;
  link: string;
}

export const awardedScholarships: AwardedScholarship[] = [
  {
    memberName: "Megan Garrity",
    institution: "Por confirmar",
    type: "Beca internacional — viaje por cervecerías de Europa",
    place: "Europa",
    objective:
      "Recorrido de formación por cervecerías europeas junto a otras integrantes de Pink Boots Perú.",
    experience: "Por confirmar",
  },
  {
    memberName: "Sara Lefevre",
    institution: "Por confirmar",
    type: "Beca internacional — viaje por cervecerías de Europa",
    place: "Europa",
    objective:
      "Recorrido de formación por cervecerías europeas junto a otras integrantes de Pink Boots Perú.",
    experience: "Por confirmar",
  },
  {
    memberName: "Ximena Gloria",
    institution: "Por confirmar",
    type: "Beca internacional — viaje por cervecerías de Europa",
    place: "Europa",
    objective:
      "Recorrido de formación por cervecerías europeas junto a otras integrantes de Pink Boots Perú.",
    experience: "Por confirmar",
  },
  {
    memberName: "Nikole Negrón",
    institution: "Por confirmar",
    type: "Beca educativa Pink Boots",
    place: "Puerto Rico",
    objective: "Beca otorgada en el marco del sub-capítulo Puerto Rico.",
    experience: "Por confirmar",
  },
  {
    memberName: "Minelis Méndez",
    institution: "Por confirmar",
    type: "Beca educativa Pink Boots",
    place: "Puerto Rico",
    objective: "Beca otorgada en el marco del sub-capítulo Puerto Rico.",
    experience: "Por confirmar",
  },
];

export const upcomingScholarships: UpcomingScholarship[] = [
  {
    name: "Programa de becas Pink Boots Society",
    institution: "Pink Boots Society (EE.UU.)",
    period: "Convocatoria trimestral",
    requirements: [
      "Ser mujer o persona no binaria",
      "Trabajar en la industria de bebidas fermentadas y/o alcohólicas",
      "Contar con membresía activa de Pink Boots Society",
      "Carta de recomendación de una persona de la industria",
    ],
    deadline: "Consultar en el sitio oficial",
    link: "https://www.pinkbootssociety.org/scholarships",
  },
];
