import { useTranslations } from "next-intl";
import type { Metadata } from "next";

const scholarships = [
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

const sponsors = [
  { name: "Yuengling", desc: "America's Oldest Brewery — Since 1829" },
  { name: "Brew Pipeline", desc: "Patrocinador del programa de becas" },
  { name: "Yakima Chief Hops", desc: "Viaje experiencial de lupulo" },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Becas",
    description: "Becas educativas Pink Boots Society: Cicerone, White Labs, Siebel, UC Davis y mas para mujeres y personas no binarias en cerveza.",
  };
}

export default function ScholarshipsPage() {
  const t = useTranslations("scholarships");

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
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t("intro")}
          </p>

          <div className="mt-8 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-6">
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

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Becas disponibles
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {scholarships.map((s) => (
              <div key={s} className="rounded-lg border border-[var(--color-border-default)] p-4">
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm font-bold text-[var(--color-pink-brand)]">250+ socias han recibido una beca Pink Boots</p>
          </div>

          <h3 className="mt-12 font-display text-lg font-bold text-[var(--color-text-primary)]">
            Patrocinadores del programa
          </h3>
          <div className="mt-4 grid gap-3 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-5 sm:grid-cols-3">
            {sponsors.map((sp) => (
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
