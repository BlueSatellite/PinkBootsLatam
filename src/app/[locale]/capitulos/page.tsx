import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { officialChapters, regionNetwork } from "@/lib/chapters";
import ChaptersMapWrapper from "@/components/ui/ChaptersMapWrapper";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Capitulos",
    description: "Conoce los capitulos oficiales de Pink Boots Society en Latinoamerica y la red de integrantes en la region.",
  };
}

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
        featured ? "border-2 border-[var(--color-pink-200)]" : "border-[var(--color-border-default)] hover:border-[var(--color-pink-200)]"
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
          <p className="text-sm text-[var(--color-text-muted)]">
            {chapter.city}, {chapter.country}
          </p>
        </div>
      </div>

      {chapter.foundedYear && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
          Año de creacion: {chapter.foundedYear}
        </p>
      )}

      <div className="mt-4 space-y-1.5 text-sm">
        {chapter.representatives.map((rep) => (
          <p key={rep.name} className="leading-relaxed">
            <span className="font-semibold text-[var(--color-text-primary)]">{rep.name}</span>
            {rep.role && (
              <span className="text-[var(--color-text-secondary)]"> — {rep.role}</span>
            )}
          </p>
        ))}
        <p className="leading-relaxed text-[var(--color-text-secondary)]">{chapter.info}</p>
      </div>

      {(chapter.instagram || chapter.facebook || chapter.facebookGroup) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {chapter.instagram && (
            <a
              href={chapter.website ?? `https://www.instagram.com/${chapter.instagram.replace("@", "")}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline"
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
              className="inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline"
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
              className="inline-flex items-center gap-1 text-[var(--color-pink-brand)] hover:underline"
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

export default function ChaptersPage() {
  const t = useTranslations("chapters");

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/capitulos.webp"
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
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-white/85">
              {t("hero")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Nuestros capitulos
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {officialChapters.map((chapter) => (
              <ChapterCard key={chapter.name} chapter={chapter} featured={chapter.role === "Chapter padre"} />
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Integrantes en la region
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Paises con integrantes activas de Pink Boots Latam que aun no cuentan con un capitulo oficial.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {regionNetwork.map((chapter) => (
              <ChapterCard key={chapter.name} chapter={chapter} />
            ))}
          </div>

          <div className="mt-12 mx-auto max-w-3xl">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Mapa de presencia
            </p>
            <ChaptersMapWrapper />
          </div>

          <div className="mt-12 rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-6 text-center">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t("cta")}
            </p>
            <a
              href="https://www.instagram.com/pinkbootslatam/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              Escribenos en Instagram
            </a>
          </div>

          <div className="mt-12 mx-auto max-w-3xl rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-6">
            <h2 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
              Como funcionan los capitulos
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Pink Boots Society tiene requisitos oficiales para abrir un capitulo: se necesita un minimo de <strong>15 integrantes activas</strong> provenientes de al menos <strong>dos cervecerias o negocios cerveceros</strong> distintos, realizar un minimo de <strong>2 reuniones al año con enfoque educativo</strong> y constituirse como <strong>entidad sin fines de lucro</strong>. La Junta Directiva revisa y aprueba los nuevos capitulos de forma trimestral.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Por eso, en Latinoamerica actualmente existen dos estructuras oficiales: el chapter padre <strong>Pink Boots Latam</strong> y el sub-capitulo <strong>Pink Boots Latam / Puerto Rico</strong>, conformado por 21 integrantes. En otros paises de la region contamos con integrantes activas que todavia no cumplen con los requisitos para formar un capitulo propio, pero que forman parte de nuestra red.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
