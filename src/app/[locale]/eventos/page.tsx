import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { events, eventCategoryLabels, eventCategoryOrder, type EventCategory } from "@/lib/events";
import { specialRecognitions } from "@/lib/medals";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Eventos",
    description: "Cocciones, colaboraciones, ponencias, webinars, competencias BAP y eventos especiales de Pink Boots Society en Latinoamerica.",
  };
}

function eventsForCategory(category: EventCategory) {
  return events.filter((event) => event.category === category);
}

export default function EventsPage() {
  const t = useTranslations("events");

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
          <div className="rounded-2xl border-2 border-[var(--color-pink-200)] bg-gradient-to-br from-[var(--color-pink-50)] to-white p-8 sm:p-10">
            <span className="rounded-full bg-[var(--color-pink-brand)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
              Evento principal
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              Pink Boots Collaboration Brew Day
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Es una celebracion internacional de mujeres en la industria de bebidas fermentadas y alcoholicas. Un movimiento para reconocer el impacto que tienen en nuestra industria. Es nuestro evento anual de recaudacion de fondos <strong>mas importante</strong>.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="font-display text-2xl font-extrabold text-[var(--color-pink-brand)]">$235K+</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Recaudados en 2022 por cervecerias participantes</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="font-display text-2xl font-extrabold text-[var(--color-pink-brand)]">Global</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Capitulos de todo el mundo elaboran el mismo dia</p>
              </div>
              <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                <p className="font-display text-2xl font-extrabold text-[var(--color-pink-brand)]">Becas</p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">Las ganancias financian becas educativas</p>
              </div>
            </div>
            <p className="mt-5 text-sm font-medium text-[var(--color-text-secondary)]">
              Los equipos registrados elaboran cerveza y donan parte de las ganancias de sus ventas. Cada ano, mas cervecerias se suman a esta revolucion.
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
                    <span className="font-semibold text-[var(--color-text-primary)]">Categoria:</span>{" "}
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
            Consulta las principales actividades realizadas por Pink Boots en Latinoamerica.
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
                      Aun no hay actividades registradas en esta categoria. Vuelve pronto o siguenos en Instagram para enterarte de las proximas.
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
                              {event.media.externalLabel ?? "Ver mas"}
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
