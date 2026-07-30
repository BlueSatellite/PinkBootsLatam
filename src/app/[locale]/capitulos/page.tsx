import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import ChaptersMapWrapper from "@/components/ui/ChaptersMapWrapper";

interface Chapter {
  country: string;
  city: string;
  role: string;
  contact: string;
  info: string;
  instagram?: string;
  facebook?: string;
  facebookGroup?: string;
  url?: string;
}

const chapters: Chapter[] = [
  {
    country: "Panama",
    city: "Ciudad de Panama",
    role: "Sede principal",
    contact: "Ericka Otero",
    info: "Co-Fundadora, Head Brewer en Salsipuedes Brewing Co.",
    instagram: "@salsipuedesbrewingco",
    url: "https://www.instagram.com/salsipuedesbrewingco/",
  },
  {
    country: "Peru",
    city: "Lima",
    role: "Capitulo fundador",
    contact: "Silvia De Tomas",
    info: "Two Brothers Brewing. Co-lider de Pink Boots Latinoamerica.",
    facebook: "PinkBootsPeru",
    url: "https://www.facebook.com/PinkBootsPeru/",
  },
  {
    country: "Puerto Rico",
    city: "Guaynabo",
    role: "Sub-capitulo (desde 2026)",
    contact: "Ocean Lab Brewing / Jevas Cerveceras",
    info: "Primer Collaboration Brew Day LATAM 2026. Becas otorgadas a Nikole Negron y Minelis Mendez.",
    instagram: "@jevascerveceras",
  },
  {
    country: "Mexico",
    city: "Cuernavaca",
    role: "Miembro activo",
    contact: "Viviana Lopez",
    info: "Medalla de plata en Copa Guerreras del Lupulo. @tebana_laboratorio_cervecero",
    instagram: "@tebana_laboratorio_cervecero",
    url: "https://www.instagram.com/tebana_laboratorio_cervecero/",
  },
  {
    country: "Chile",
    city: "Santiago",
    role: "Miembro activo",
    contact: "Veronica Carrasco",
    info: "Fundadora de Cerveza Vericcio. Participante en Copa Capital.",
    instagram: "@cervezavericcio",
  },
  {
    country: "Brasil",
    city: "Rio de Janeiro / Minas Gerais",
    role: "Pionero (desde 2015)",
    contact: "Amanda Henriques (RJ) / Priscilla Colares (MG)",
    info: "Capitulo mas antiguo de Latinoamerica, fundado por Alex Iunes.",
    facebookGroup: "Pink Boots Society - Rio de Janeiro",
    url: "https://www.facebook.com/groups/885771154845187",
  },
  {
    country: "Argentina",
    city: "Buenos Aires",
    role: "Miembro activo",
    contact: "Cristina Saez",
    info: "Maestra cervecera en Birra & Blues. Brewed 'Iniquity' West Coast IPA para PBS.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Capitulos",
    description: "Encuentra tu capitulo de Pink Boots Society en Latinoamerica. Red de mujeres y personas no binarias en la industria cervecera.",
  };
}

export default function ChaptersPage() {
  const t = useTranslations("chapters");

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
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            {t("hero")}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {chapters.map((chapter) => (
              <div
                key={chapter.country}
                className="rounded-xl border border-[var(--color-border-default)] bg-white p-6 transition-all hover:border-[var(--color-pink-200)] hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-pink-brand)]">
                      {chapter.role}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-[var(--color-text-primary)]">
                      {chapter.country}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{chapter.city}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-sm">
                  <p className="font-semibold text-[var(--color-text-primary)]">{chapter.contact}</p>
                  <p className="leading-relaxed text-[var(--color-text-secondary)]">{chapter.info}</p>
                  {chapter.instagram && (
                    <a
                      href={chapter.url ?? `https://www.instagram.com/${chapter.instagram.replace("@", "")}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline"
                    >
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      {chapter.instagram}
                    </a>
                  )}
                  {chapter.facebook && (
                    <a
                      href={chapter.url ?? `https://www.facebook.com/${chapter.facebook}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline"
                    >
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      Facebook
                    </a>
                  )}
                  {chapter.facebookGroup && (
                    <a
                      href={chapter.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline"
                    >
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      Grupo FB
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Mapa de capitulos
            </p>
            <ChaptersMapWrapper />
          </div>
        </div>
      </section>
    </>
  );
}
