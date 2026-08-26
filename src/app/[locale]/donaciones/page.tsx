import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Donaciones",
    description: "Apoya a Pink Boots Society Latin America. Tus donaciones impulsan becas, eventos y comunidad para mujeres cerveceras en Latinoamerica.",
  };
}

export default function DonatePage() {
  const t = useTranslations("donate");

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
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t("whyTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t("whyText")}
          </p>

          <div className="mt-8 rounded-2xl border-2 border-[var(--color-pink-200)] bg-white p-6 sm:p-8">
            <div className="text-center">
              <h3 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
                Aporte anual voluntario
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Un unico aporte al año que nos permite mantener la pagina actualizada, comprar el dominio, impulsar proyectos futuros y seguir creciendo. Cada una contribuye con lo que pueda.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--color-border-default)] p-5 text-center">
                <p className="font-display text-xs font-bold uppercase tracking-wide text-[var(--color-text-muted)]">Apoyo</p>
                <p className="mt-1 font-display text-2xl font-extrabold text-[var(--color-text-primary)]">$10<span className="text-xs font-medium text-[var(--color-text-muted)]">/año</span></p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-secondary)]">Cubre el dominio por un año</p>
              </div>

              <div className="relative rounded-xl border-2 border-[var(--color-pink-brand)] bg-[var(--color-pink-50)] p-5 text-center shadow-sm">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-pink-brand)] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  Recomendado
                </span>
                <p className="font-display text-xs font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">Sostener</p>
                <p className="mt-1 font-display text-2xl font-extrabold text-[var(--color-pink-brand)]">$25<span className="text-xs font-medium text-[var(--color-pink-brand)]/70">/año</span></p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-secondary)]">Dominio + actualizaciones de contenido</p>
              </div>

              <div className="rounded-xl border border-[var(--color-border-default)] p-5 text-center">
                <p className="font-display text-xs font-bold uppercase tracking-wide text-[var(--color-text-muted)]">Impulsar</p>
                <p className="mt-1 font-display text-2xl font-extrabold text-[var(--color-text-primary)]">$50<span className="text-xs font-medium text-[var(--color-text-muted)]">/año</span></p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-secondary)]">Sostiene el mantenimiento un trimestre</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <a
                href="https://ko-fi.com/bluentropy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-brand)] px-7 py-3 text-sm font-bold text-white transition-all hover:bg-[var(--color-pink-600)] hover:shadow-lg"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Apoyar la causa en Ko-fi
              </a>
              <p className="text-center text-xs leading-relaxed text-[var(--color-text-muted)]">
                ¿No puedes dar $10? Aporta lo que puedas, desde $6. ¿Quieres dar mas? Bienvenido.
              </p>
            </div>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t("waysTitle")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.raw("ways").map((way: { title: string; description: string }) => (
              <div
                key={way.title}
                className="rounded-xl border border-[var(--color-border-default)] p-5"
              >
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                  {way.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {way.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-6 text-center">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t("cta")}
            </p>
            <a
              href="https://www.instagram.com/pinkbootslatam/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              {t("button")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
