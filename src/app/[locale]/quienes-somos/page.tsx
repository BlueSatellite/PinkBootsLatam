import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import MemberDirectory from "@/components/ui/MemberDirectory";
import CommunityCollage from "@/components/ui/CommunityCollage";
import ChaptersMapWrapper from "@/components/ui/ChaptersMapWrapper";
import { officialChapters, regionNetwork } from "@/lib/chapters";

const introParagraphs = [
  "Pink Boots Society nació en 2007 de la mano de la cervecera estadounidense Teri Fahrendorf, quien durante un viaje por Estados Unidos conoció a muchas mujeres cerveceras que se sentían solas dentro de una industria predominantemente masculina. Creó una lista para conectarlas y la llamó Pink Boots Society, inspirada en las botas rosadas que llevaba durante su recorrido. Es una organización sin fines de lucro conformada por mujeres vinculadas a la industria cervecera, con el objetivo de promover su crecimiento profesional a través de la inspiración, el conocimiento y la formación.",
  "Pink Boots LATAM nace como una comunidad regional para conectar, apoyar y visibilizar a las mujeres de Latinoamérica vinculadas a la industria cervecera y de bebidas fermentadas. Creada en 2023 y liderada por Ericka Otero, busca impulsar la educación, la colaboración, el crecimiento profesional y la sororidad entre sus integrantes, creando oportunidades que fortalezcan el papel de la mujer latinoamericana dentro de la industria. Su objetivo: extender por toda la región una educación de alto nivel en habla hispana.",
  "Somos un grupo de mujeres profesionales involucradas en la industria cervecera en cualquiera de sus aspectos: desde la creación, elaboración y supervisión de una cerveza hasta funciones de distribución, marketing, ventas y comunicaciones. Entre nuestras integrantes contamos con dueñas de cervecerías, fundadoras de marcas y locales de cerveza, juezas BJCP, diseñadoras, publicistas, marketeras, comunicadoras y especialistas en ventas y atención al cliente.",
  "Parte de nuestro objetivo es recaudar fondos para que nuestras integrantes puedan obtener becas de estudio y seguir profesionalizándose en el rubro. Pero, sobre todo, queremos comunicar e inspirar a que más mujeres se unan a nuestra industria: queremos que el mundo sepa que es una profesión que también fue hecha para mujeres, y crear una comunidad en la que compartamos conocimientos entre asociadas actuales y mujeres que inician o están interesadas en iniciar una carrera en la industria de bebidas fermentadas.",
];

const leadership = [
  {
    name: "Ericka Otero",
    role: "Co-Fundadora & Regional Leader",
    country: "Panamá",
    bio: "Head Brewer y Quality Control Manager en Salsipuedes Brewing Co. Lidera Pink Boots Latin America desde su creación en 2023. Seleccionada como jueza para el World Beer Cup 2026.",
    instagram: "@salsipuedesbrewingco",
  },
  {
    name: "Silvia De Tomas Ayllon",
    role: "Co-Líder Latam & Head Brewer",
    country: "Perú",
    bio: "Head Brewer en Two Broders y Biersommelier. Co-líder de Pink Boots Latinoamérica. Seleccionada como jueza para el World Beer Cup 2026.",
    instagram: "@Silviadetomas",
  },
  {
    name: "Keishla Torres",
    role: "Líder del sub-capítulo Puerto Rico",
    country: "Puerto Rico",
    bio: "Fundadora de Jevas Cerveceras y líder de Pink Boots Latam / Puerto Rico, el sub-capítulo de la organización conformado por más de 20 integrantes activas.",
    instagram: "@jevascerveceras",
  },
  {
    name: "Viviana López Gutiérrez",
    role: "Líder de comunidad México",
    country: "México",
    bio: "Control de Calidad, Marketing e investigación histórica cervecera en Tebana Laboratorio Cervecero (Cuernavaca). Medalla de plata en Copa Guerreras del Lúpulo.",
    instagram: "@tebana_laboratorio_cervecero",
  },
  {
    name: "Verónica Carrasco",
    country: "Chile",
    role: "Maestra Cervecera",
    bio: "Fundadora y Maestra Cervecera en Cervezas Vericcio. Participante en Copa Capital y referente de la escena cervecera chilena.",
    instagram: "@cervezavericcio",
  },
  {
    name: "Fernanda Santos da Costa",
    country: "Brasil",
    role: "Sommelier & Referente Brasil",
    countryDisplay: "Brasil - Curitiba",
    bio: "Sommelier de cerveza, educadora y creadora de Cerviajona en Curitiba. Promotora del turismo y la cultura cervecera.",
    instagram: "@cerviajona",
  },
  {
    name: "Cristina Sáez",
    role: "Miembro activo",
    country: "Argentina",
    bio: "Maestra cervecera en Birra & Blues. Creadora de Iniquity West Coast IPA para Pink Boots Collaboration Brew.",
  },
  {
    name: "Amanda Henriques",
    role: "Coordinadora Brasil (RJ)",
    country: "Brasil",
    bio: "Periodista, sommelier y editora de Maria Cevada. Coordina el capítulo más antiguo de Latinoamérica desde 2015.",
    instagram: "@achamanda",
  },
];

const instagramIcon = (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const facebookIcon = (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

function ChapterCard({ chapter, featured = false }: { chapter: (typeof officialChapters)[number]; featured?: boolean }) {
  return (
    <div
      className={`rounded-xl border bg-white p-6 transition-all hover:shadow-sm ${
        featured ? "border-2 border-[var(--color-pink-200)] shadow-xs" : "border-[var(--color-border-default)] hover:border-[var(--color-pink-200)]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-pink-brand)]">
            {chapter.role}
          </span>
          <h3 className="mt-2 font-display text-lg font-bold text-[var(--color-text-primary)]">
            {chapter.name}
          </h3>
          {(chapter.city || chapter.country) && (
            <p className="text-sm text-[var(--color-text-muted)]">
              {chapter.city && chapter.country
                ? `${chapter.city}, ${chapter.country}`
                : chapter.city || chapter.country}
            </p>
          )}
        </div>
      </div>

      {chapter.foundedYear && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
          Año de creación: {chapter.foundedYear}
        </p>
      )}

      <div className="mt-4 space-y-2 text-sm">
        {chapter.representatives.map((rep) => (
          <p key={rep.name} className="leading-relaxed">
            <span className="font-semibold text-[var(--color-text-primary)]">{rep.name}</span>
            {rep.role && (
              <span className="text-[var(--color-text-secondary)]"> — {rep.role}</span>
            )}
          </p>
        ))}
        {chapter.info && (
          <p className="leading-relaxed text-[var(--color-text-secondary)] pt-1 border-t border-gray-100">{chapter.info}</p>
        )}
      </div>

      {(chapter.instagram || chapter.facebook || chapter.facebookGroup || chapter.website) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {chapter.instagram && (
            <a
              href={chapter.website ?? `https://www.instagram.com/${chapter.instagram.replace("@", "")}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline text-xs font-medium"
            >
              {instagramIcon}
              {chapter.instagram}
            </a>
          )}
          {chapter.facebook && (
            <a
              href={`https://www.facebook.com/${chapter.facebook}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline text-xs font-medium"
            >
              {facebookIcon}
              Facebook
            </a>
          )}
          {chapter.facebookGroup && (
            <a
              href={chapter.website ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline text-xs font-medium"
            >
              {facebookIcon}
              Grupo FB
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Quiénes Somos",
    description: "Conoce a Pink Boots Society Latin America: misión, comunidad, capítulos oficiales, presencia regional y directorio de integrantes.",
  };
}

export default function TeamPage() {
  const t = useTranslations("team");

  return (
    <>
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/quienes-somos.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="rounded-2xl bg-black/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
              Pink Boots Society Latin America
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h1>
          </div>
        </div>
      </section>

      {/* Video Presentation */}
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

      {/* Quick Anchor Navigation Bar */}
      <div className="sticky top-16 z-30 border-y border-[var(--color-border-light)] bg-white/95 backdrop-blur-md py-3 shadow-xs">
        <div className="mx-auto max-w-5xl px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
          <a
            href="#mosaico"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-pink-200)] bg-[var(--color-pink-50)]/70 px-3.5 py-1.5 text-[var(--color-pink-brand)] transition-all hover:bg-[var(--color-pink-brand)] hover:text-white hover:shadow-xs"
          >
            <span>✨</span> Mosaico de la Comunidad
          </a>
          <a
            href="#capitulos"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-pink-200)] bg-[var(--color-pink-50)]/70 px-3.5 py-1.5 text-[var(--color-pink-brand)] transition-all hover:bg-[var(--color-pink-brand)] hover:text-white hover:shadow-xs"
          >
            <span>🗺️</span> Capítulos y Presencia
          </a>
          <a
            href="#liderazgo"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-pink-200)] bg-[var(--color-pink-50)]/70 px-3.5 py-1.5 text-[var(--color-pink-brand)] transition-all hover:bg-[var(--color-pink-brand)] hover:text-white hover:shadow-xs"
          >
            <span>👩‍💼</span> Liderazgo
          </a>
          <a
            href="#directorio"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-pink-200)] bg-[var(--color-pink-50)]/70 px-3.5 py-1.5 text-[var(--color-pink-brand)] transition-all hover:bg-[var(--color-pink-brand)] hover:text-white hover:shadow-xs"
          >
            <span>📋</span> Directorio de Integrantes
          </a>
        </div>
      </div>

      {/* Intro Narrative */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Community Mosaic (Collage sin separación, prime la comunidad) */}
      <section id="mosaico" className="scroll-mt-28 border-y border-[var(--color-border-light)] bg-white">
        <CommunityCollage />
      </section>

      {/* 2. Capítulos y Presencia Regional */}
      <section id="capitulos" className="scroll-mt-28 py-16 sm:py-20 bg-[var(--color-surface-alt)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
              Presencia Territorial
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              Capítulos Oficiales y Red Regional
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-secondary)]">
              Conectamos a profesionales de bebidas fermentadas a lo largo de toda Latinoamérica a través de capítulos oficiales y una red activa en 11 países.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mt-12 rounded-2xl border border-[var(--color-border-light)] bg-white p-4 sm:p-6 shadow-xs">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-100 pb-3">
              <div>
                <h3 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
                  Mapa de Presencia en Latinoamérica
                </h3>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Haz clic en los marcadores para ver las sedes y ciudades con integrantes
                </p>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-[var(--color-pink-100)] px-3 py-1 text-xs font-semibold text-[var(--color-pink-brand)]">
                11 Países Conectados
              </span>
            </div>
            <ChaptersMapWrapper />
          </div>

          {/* Official Chapters */}
          <div className="mt-14">
            <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
              Capítulos Oficiales
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Estructuras reconocidas formalmente ante la Junta Directiva de Pink Boots Society
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {officialChapters.map((chapter) => (
                <ChapterCard key={chapter.name} chapter={chapter} featured={chapter.name === "Pink Boots Latam"} />
              ))}
            </div>
          </div>

          {/* Regional Network */}
          <div className="mt-14">
            <h3 className="font-display text-xl font-bold text-[var(--color-text-primary)]">
              Red Regional de Integrantes
            </h3>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Países con integrantes activas de Pink Boots Latam colaborando en proyectos, cocciones y educación
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {regionNetwork.map((chapter) => (
                <ChapterCard key={chapter.name} chapter={chapter} />
              ))}
            </div>
          </div>

          {/* How Chapters Work Container */}
          <div className="mt-12 rounded-xl border border-[var(--color-border-light)] bg-white p-6 shadow-xs sm:p-8">
            <h3 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
              ¿Cómo funcionan los capítulos y cómo abrir uno en tu país?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Pink Boots Society tiene requisitos oficiales para formalizar un capítulo: se necesita un mínimo de <strong>15 integrantes activas</strong> provenientes de al menos <strong>dos cervecerías o negocios cerveceros</strong> distintos, realizar un mínimo de <strong>2 reuniones al año con enfoque educativo</strong> y constituirse como <strong>entidad sin fines de lucro</strong>. La Junta Directiva revisa y aprueba nuevos capítulos de forma trimestral.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              En países donde aún estamos en camino a cumplir los requisitos, nuestras socias forman parte activa de la red regional <strong>Pink Boots Latam</strong>, con pleno acceso a becas internacionales, eventos y colaboración.
            </p>
            <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[var(--color-text-muted)]">
                ¿Te gustaría liderar o impulsar un capítulo en tu ciudad?
              </p>
              <a
                href="https://www.instagram.com/pinkbootslatam/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[var(--color-pink-brand)] px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-[var(--color-pink-600)]"
              >
                Escríbenos en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership */}
      <section id="liderazgo" className="scroll-mt-28 py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
              Organización
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              {t("leadership")}
            </h2>
          </div>

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
                    {instagramIcon}
                    {person.instagram}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Member Directory */}
      <section id="directorio" className="scroll-mt-28 border-t border-[var(--color-border-light)] bg-white">
        <MemberDirectory />
      </section>
    </>
  );
}
