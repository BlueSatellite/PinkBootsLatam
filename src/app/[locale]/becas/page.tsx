import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { awardedScholarships, upcomingScholarships } from "@/lib/scholarships";

const globalScholarships = [
  "Cicerone certifications",
  "White Labs courses and programs",
  "Barth Haas Hops Academy",
  "Briess Malt & Barley",
  "Siebel Institute courses and programs",
  "eCornell certificates",
  "UC Davis Extension — Intensive Brewing Science",
  "University of Vermont — Business of Craft Beer Certificate",
  "PSU Business of Craft Brewing Certificate",
  "OSU Beer Quality & Analysis Series",
  "Yakima Chief Hops Experiential Trip",
  "Crafting a Strategy program",
  "Sheehan Family Companies SkillPath Training",
  "New Mexico State University",
];

const programSponsors = [
  { name: "Yuengling", desc: "America's Oldest Brewery — Since 1829" },
  { name: "Brew Pipeline", desc: "Patrocinador del programa de becas" },
  { name: "Yakima Chief Hops", desc: "Viaje experiencial de lupulo" },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Becas",
    description: "Becas obtenidas por integrantes de Pink Boots Latam, proximas convocatorias y el programa global de becas Pink Boots Society.",
  };
}

export default function ScholarshipsPage() {
  const t = useTranslations("scholarships");

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/becas.webp"
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
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t("intro")}
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Becas obtenidas por nuestras integrantes
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            El historial de apoyos educativos obtenidos por integrantes de Pink Boots Society Latin America.
          </p>

          <div className="mt-6 space-y-4">
            {awardedScholarships.map((scholarship) => (
              <div
                key={scholarship.memberName}
                className="rounded-xl border border-[var(--color-border-default)] bg-white p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                    {scholarship.memberName}
                  </h3>
                  {scholarship.year && (
                    <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-pink-brand)]">
                      {scholarship.year}
                    </span>
                  )}
                </div>
                <div className="mt-2 grid gap-x-6 gap-y-1 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Institucion:</span>{" "}
                    {scholarship.institution}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Tipo de beca:</span>{" "}
                    {scholarship.type}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Lugar:</span>{" "}
                    {scholarship.place}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text-primary)]">Objetivo: </span>
                  {scholarship.objective}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text-primary)]">Experiencia: </span>
                  {scholarship.experience}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Proximas becas y oportunidades
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Convocatorias abiertas para capacitacion y desarrollo profesional.
          </p>

          <div className="mt-6 space-y-4">
            {upcomingScholarships.map((opportunity) => (
              <div
                key={opportunity.name}
                className="rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-5"
              >
                <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                  {opportunity.name}
                </h3>
                <div className="mt-2 grid gap-x-6 gap-y-1 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Institucion:</span>{" "}
                    {opportunity.institution}
                  </p>
                  {opportunity.period && (
                    <p>
                      <span className="font-semibold text-[var(--color-text-primary)]">Convocatoria:</span>{" "}
                      {opportunity.period}
                    </p>
                  )}
                  {opportunity.deadline && (
                    <p>
                      <span className="font-semibold text-[var(--color-text-primary)]">Fecha limite:</span>{" "}
                      {opportunity.deadline}
                    </p>
                  )}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {opportunity.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                      {requirement}
                    </li>
                  ))}
                </ul>
                <a
                  href={opportunity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
                >
                  Consultar convocatoria
                </a>
              </div>
            ))}
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Programa global Pink Boots Society
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            Becas disponibles a traves del programa internacional de Pink Boots Society.
          </p>

          <div className="mt-6 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">Como funciona el proceso</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                Ciclo de solicitud <strong>trimestral</strong> — tres meses para preparar tu aplicacion
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                Las solicitudes se pueden guardar en progreso y finalizar en cualquier momento
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                <strong>Solicita multiples becas con una sola aplicacion</strong>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                Carta de recomendacion: solicitala desde la pagina de aplicacion. Se agrega automaticamente
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                Resultados: aproximadamente <strong>8 semanas</strong> despues del cierre de cada ciclo
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                Al aceptar una beca, no sos elegible para otra durante <strong>un ano</strong>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                <span className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]">&#9642;</span>
                Requisito <strong>Pay it Forward</strong>: completado en el Foro Abierto
              </li>
            </ul>
          </div>

          <h3 className="mt-10 font-display text-lg font-bold text-[var(--color-text-primary)]">
            Becas disponibles
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {globalScholarships.map((s) => (
              <div key={s} className="rounded-lg border border-[var(--color-border-default)] p-4">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-[var(--color-pink-brand)]">250+ socias han recibido una beca Pink Boots</p>
          </div>

          <h3 className="mt-10 font-display text-lg font-bold text-[var(--color-text-primary)]">
            Patrocinadores del programa
          </h3>
          <div className="mt-4 grid gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-5 sm:grid-cols-3">
            {programSponsors.map((sp) => (
              <div key={sp.name} className="text-center">
                <p className="font-semibold text-sm text-[var(--color-text-primary)]">{sp.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{sp.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-6 text-center">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t("howTo")}
            </p>
            <a href={t("ctaUrl")} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]">
              {t("cta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
