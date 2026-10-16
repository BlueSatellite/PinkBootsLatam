import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { events, eventCategoryLabels, eventCategoryOrder, type EventCategory } from "@/lib/events";
import { specialRecognitions } from "@/lib/medals";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Eventos",
    description: "Cocciones, colaboraciones, ponencias, webinars, competencias BAP y eventos especiales de Pink Boots Society en Latinoamérica.",
  };
}

function eventsForCategory(category: EventCategory) {
  return events.filter((event) => event.category === category);
}

export default function EventsPage() {
  const t = useTranslations("events");

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/eventos.webp"
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
          <div className="rounded-2xl border-2 border-[var(--color-pink-200)] bg-gradient-to-br from-[var(--color-pink-50)] to-white p-8 sm:p-10">
            <span className="rounded-full bg-[var(--color-pink-brand)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
              Evento principal
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              Pink Boots Collaboration Brew Day
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Es una celebración internacional de mujeres en la industria de bebidas fermentadas y alcohólicas. Un movimiento para reconocer el impacto que tienen en nuestra industria. Es nuestro evento anual de recaudación de fondos <strong>más importante</strong>.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="font-display text-2xl font-extrabold text-[var(--color-pink-brand)]">$235K+</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Recaudados en 2022 por cervecerías participantes</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="font-display text-2xl font-extrabold text-[var(--color-pink-brand)]">Global</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Capítulos de todo el mundo elaboran el mismo día</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="font-display text-2xl font-extrabold text-[var(--color-pink-brand)]">Becas</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Las ganancias financian becas educativas</p>
              </div>
            </div>
            <p className="mt-5 text-sm font-medium text-[var(--color-text-secondary)]">
              Los equipos registrados elaboran cerveza y donan parte de las ganancias de sus ventas. Cada año, más cervecerías se suman a esta revolución.
            </p>
            <div className="mt-6 flex justify-center">
              <img
                src="/sponsors/collab-brew.png"
                alt="Pink Boots Collaboration Brew Day"
                className="h-36 w-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beer Awards Platform (BAP) Competitions Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[var(--color-surface-alt)] border-t border-[var(--color-border-light)]">
        <div className="mx-auto max-w-3xl px-4">
          <div className="overflow-hidden rounded-3xl border-2 border-[var(--color-pink-200)] bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Circuito de Competencias
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                beerawardsplatform.com
              </span>
            </div>

            <div className="mt-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                  Competencias en BAP
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  ¿Quieres inscribir tus cervezas en copas cerveceras o postularte como jueza BJCP o stewarding? En <strong>Beer Awards Platform (BAP)</strong> puedes consultar el calendario oficial de competencias activas en Latinoamérica y el mundo.
                </p>
              </div>

              <div className="mt-5 shrink-0 sm:mt-0">
                <a
                  href="https://beerawardsplatform.com/competitions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-brand)] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[var(--color-pink-600)] hover:scale-105"
                >
                  Ver Competencias BAP
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-4 text-left">
                <p className="text-xl" aria-hidden="true">🍺</p>
                <h3 className="mt-2 font-display text-sm font-bold text-[var(--color-text-primary)]">
                  Inscripción de Cervezas
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                  Inscribe tus cervezas colaborativas o de fábrica, revisa fechas de recepción y recibe hojas de cata.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-4 text-left">
                <p className="text-xl" aria-hidden="true">👩‍⚖️</p>
                <h3 className="mt-2 font-display text-sm font-bold text-[var(--color-text-primary)]">
                  Juezas de Cata BJCP
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                  Postúlate en convocatorias de cata en certámenes de la región y evalúa de forma digital.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-4 text-left">
                <p className="text-xl" aria-hidden="true">📋</p>
                <h3 className="mt-2 font-display text-sm font-bold text-[var(--color-text-primary)]">
                  Stewarding
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                  Participa como voluntaria o comisaria de mesa para aprender de cerca sobre organización y cata técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Reconocimientos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-[var(--color-text-muted)]">
            Distinciones y selecciones especiales obtenidas por nuestras integrantes. Las medallas ganadas en competencias pueden consultarse en el medallero.
          </p>

          <div className="mt-10 space-y-4">
            {specialRecognitions.map((recognition) => (
              <div
                key={`${recognition.memberName}-${recognition.competition}-${recognition.recognition}`}
                className="rounded-xl border border-[var(--color-border-default)] bg-white p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                    {recognition.memberName}
                  </h3>
                  <span className="rounded-full bg-[var(--color-surface-muted)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                    {recognition.recognition}
                  </span>
                </div>
                <div className="mt-2 grid gap-x-6 gap-y-1 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Competencia o evento:</span>{" "}
                    {recognition.competition}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Año:</span>{" "}
                    {recognition.year ?? "Por confirmar"}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-text-primary)]">Categoría:</span>{" "}
                    {recognition.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/medallero"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              Ver el Medallero
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Eventos y actividades por tipo
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Consulta las principales actividades realizadas por Pink Boots en Latinoamérica.
          </p>

          <div className="mt-10 space-y-10">
            {eventCategoryOrder.map((category) => {
              const categoryEvents = eventsForCategory(category);
              return (
                <div key={category}>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                    {eventCategoryLabels[category]}
                  </h3>
                  {categoryEvents.length === 0 ? (
                    <p className="mt-3 rounded-lg border border-dashed border-[var(--color-border-default)] p-4 text-sm text-[var(--color-text-muted)]">
                      Aún no hay actividades registradas en esta categoría. Vuelve pronto o síguenos en Instagram para enterarte de las próximas.
                    </p>
                  ) : (
                    <div className="mt-3 space-y-3">
                      {categoryEvents.map((event) => (
                        <div
                          key={event.title}
                          className="rounded-xl border border-[var(--color-border-default)] bg-white p-5"
                        >
                          <h4 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                            {event.title}
                          </h4>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
                            {event.place} · {event.date}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                            {event.description}
                          </p>
                          {event.media?.externalLink && (
                            <a
                              href={event.media.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex text-sm font-medium text-[var(--color-pink-brand)] hover:underline"
                            >
                              {event.media.externalLabel ?? "Ver más"}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
