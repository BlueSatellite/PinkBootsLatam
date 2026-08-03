export interface Sponsor {
  name: string;
  logo: string;
  featured?: boolean;
  website?: string;
  label?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "Costa Rica Beer School",
    logo: "/sponsors/cr-beer-school.avif",
    featured: true,
    website: "https://costaricabeerfactory.com/beer-school",
  },
  {
    name: "Lallemand Brewing",
    logo: "/sponsors/lallemand.png",
    website: "https://www.lallemandbrewing.com/",
  },
  {
    name: "White Labs",
    logo: "/sponsors/white-labs.svg",
    website: "https://www.whitelabs.com/",
  },
  {
    name: "Yakima Chief Hops",
    logo: "/sponsors/yakima-chief.png",
    website: "https://www.yakimachief.com/",
  },
  {
    name: "Blue Entropy",
    logo: "/sponsors/blue-entropy.png",
    website: "https://www.instagram.com/blue_ntropy/",
    label: "Creador de la pagina web",
  },
  {
    name: "BJCP",
    logo: "/sponsors/bjcp.png",
    website: "https://www.bjcp.org/",
  },
  {
    name: "Cicerone",
    logo: "/sponsors/cicerone.jpg",
    website: "https://www.cicerone.org/",
  },
];

export const mainSponsor = sponsors.find((s) => s.featured) ?? sponsors[0];
export const otherSponsors = sponsors.filter((s) => !s.featured);
