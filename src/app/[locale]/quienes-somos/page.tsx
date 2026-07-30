import { useTranslations } from "next-intl";
import type { Metadata } from "next";

const leadership = [
  {
    name: "Ericka Otero",
    role: "Co-Fundadora & Chapter Leader",
    country: "Panama",
    bio: "Head Brewer y Quality Control Manager en Salsipuedes Brewing Co. Lider del chapter padre de Pink Boots Latinoamerica. Seleccionada como jueza para el World Beer Cup 2026.",
    instagram: "@salsipuedesbrewingco",
  },
  {
    name: "Silvia De Tomas",
    role: "Co-Lider",
    country: "Peru",
    bio: "Two Brothers Brewing. Co-lider de Pink Boots Latinoamerica. Seleccionada como jueza para el World Beer Cup 2026.",
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
    description: "Conoce al equipo de Pink Boots Society Latin America, profesionales apasionadas por la industria de bebidas fermentadas.",
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

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
