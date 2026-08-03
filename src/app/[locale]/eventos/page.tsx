import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Eventos",
    description: "Collaboration Brew Day, webinars, networking y mas eventos de Pink Boots Society en Latinoamerica.",
  };
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

          <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Tipos de eventos
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.raw("types").map((type: { name: string; description: string }) => (
              <div key={type.name} className="rounded-xl border border-[var(--color-border-default)] p-5">
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                  {type.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
