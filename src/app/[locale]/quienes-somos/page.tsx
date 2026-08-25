import { useTranslations } from "next-intl";
import type { Metadata } from "next";

const introParagraphs = [
  "Pink Boots Society nacio en 2007 de la mano de la cervecera estadounidense Teri Fahrendorf, quien durante un viaje por Estados Unidos conocio a muchas mujeres cerveceras que se sentian solas dentro de una industria predominantemente masculina. Creo una lista para conectarlas y la llamo Pink Boots Society, inspirada en las botas rosadas que llevaba durante su recorrido. Es una organizacion sin fines de lucro conformada por mujeres vinculadas a la industria cervecera, con el objetivo de promover su crecimiento profesional a traves de la inspiracion, el conocimiento y la formacion.",
  "Pink Boots LATAM nace como una comunidad regional para conectar, apoyar y visibilizar a las mujeres de Latinoamerica vinculadas a la industria cervecera y de bebidas fermentadas. Creada en 2023 y liderada por Ericka Otero, busca impulsar la educacion, la colaboracion, el crecimiento profesional y la sororidad entre sus integrantes, creando oportunidades que fortalezcan el papel de la mujer latinoamericana dentro de la industria. Su objetivo: extender por toda la region una educacion de alto nivel en habla hispana.",
  "Somos un grupo de mujeres profesionales involucradas en la industria cervecera en cualquiera de sus aspectos: desde la creacion, elaboracion y supervision de una cerveza hasta funciones de distribucion, marketing, ventas y comunicaciones. Entre nuestras integrantes contamos con duenas de cervecerias, fundadoras de marcas y locales de cerveza, juezas BJCP, disenadoras, publicistas, marketeras, comunicadoras y especialistas en ventas y atencion al cliente.",
  "Parte de nuestro objetivo es recaudar fondos para que nuestras integrantes puedan obtener becas de estudio y seguir profesionalizandose en el rubro. Pero, sobre todo, queremos comunicar e inspirar a que mas mujeres se unan a nuestra industria: queremos que el mundo sepa que es una profesion que tambien fue hecha para mujeres, y crear una comunidad en la que compartamos conocimientos entre asociadas actuales y mujeres que inician o estan interesadas en iniciar una carrera en la industria de bebidas fermentadas.",
];

const leadership = [
  {
    name: "Ericka Otero",
    role: "Co-Fundadora & Chapter Leader",
    country: "Panama",
    bio: "Head Brewer y Quality Control Manager en Salsipuedes Brewing Co. Lidera Pink Boots Latin America desde su creacion en 2023. Seleccionada como jueza para el World Beer Cup 2026.",
    instagram: "@salsipuedesbrewingco",
  },
  {
    name: "Silvia De Tomas",
    role: "Co-Lider",
    country: "Peru",
    bio: "Two Brothers Brewing. Co-lider de Pink Boots Latinoamerica. Seleccionada como jueza para el World Beer Cup 2026.",
  },
  {
    name: "Keishla Torres",
    role: "Lider del sub-capitulo Puerto Rico",
    country: "Puerto Rico",
    bio: "Lidera Pink Boots Latam-Puerto Rico, el nuevo sub-capitulo de la organizacion, conformado por 21 integrantes.",
  },
  {
    name: "Viviana Lopez",
    role: "Miembro activo",
    country: "Mexico",
    bio: "Medalla de plata en Copa Guerreras del Lupulo. Lider de comunidad en Mexico.",
    instagram: "@tebana_laboratorio_cervecero",
  },
  {
    name: "Veronica Carrasco",
    role: "Miembro activo",
    country: "Chile",
    bio: "Fundadora de Cerveza Vericcio. Participante en Copa Capital y referente de la escena cervecera chilena.",
    instagram: "@cervezavericcio",
  },
  {
    name: "Cristina Saez",
    role: "Miembro activo",
    country: "Argentina",
    bio: "Maestra cervecera en Birra & Blues. Creadora de Iniquity West Coast IPA para Pink Boots Collaboration Brew.",
  },
  {
    name: "Amanda Henriques",
    role: "Coordinadora Brasil (RJ)",
    country: "Brasil",
    bio: "Periodista, sommelier y editora de Maria Cevada. Coordina el capitulo mas antiguo de Latinoamerica desde 2015.",
    instagram: "@achamanda",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Quienes Somos",
    description: "Conoce a Pink Boots Society Latin America: una comunidad de mujeres profesionales de la industria de bebidas fermentadas creada en 2023.",
  };
}

export default function TeamPage() {
  const t = useTranslations("team");

  return (
    <>
      <section className="relative bg-[var(--color-text-primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
            Pink Boots Society Latin America
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-xl px-4 -mt-6 relative z-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-black shadow-lg">
          <video
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
            poster="/sponsors/pink-boots-web.png"
          >
            <source src="/intro-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-4">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t("leadership")}
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-[var(--color-border-default)] bg-white p-6 transition-all hover:border-[var(--color-pink-200)] hover:shadow-sm"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-pink-100)] text-xl font-bold text-[var(--color-pink-brand)]">
                  {person.name.charAt(0)}
                </div>
                <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-[var(--color-pink-brand)]">{person.role}</p>
                <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{person.country}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {person.bio}
                </p>
                {person.instagram && (
                  <a
                    href={`https://www.instagram.com/${person.instagram.replace("@", "")}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-pink-brand)] hover:underline"
                  >
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    {person.instagram}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
