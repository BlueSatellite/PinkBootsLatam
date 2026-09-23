import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Membresía",
    description: "Únete a Pink Boots Society Latin America. Membresía Profesional, Aspirante y de Negocio en Planificación.",
  };
}

export default function MembershipPage() {
  const t = useTranslations("membership");

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/membresia.webp"
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
            La membresía de Pink Boots Society está abierta a mujeres y personas no binarias que estén activamente empleadas en algún aspecto de la industria de la cerveza y bebidas fermentadas, que estén en el proceso de abrir una cervecería o negocio relacionado, o que sean estudiantes inscritas en un programa enfocado en la industria.
          </p>

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Tipos de Membresía
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-5">
              <h3 className="font-display text-sm font-bold text-[var(--color-pink-brand)]">Membresía Profesional</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Profesionales actuales o jubiladas de la industria de bebidas fermentadas/alcohólicas que reciben el 25% o más de sus ingresos de la industria, o retiradas con mínimo 10 años en el rubro.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border-default)] p-5">
              <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">Aspirante</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Abierto a mujeres que actualmente estudian o se capacitan para ingresar a una carrera en la industria de bebidas fermentadas.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border-default)] p-5">
              <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">Negocio en Planificación</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Personas en proceso de abrir un negocio en la industria: cervecería, taberna, sala de degustación, bar, tienda o laboratorio.
              </p>
            </div>
          </div>

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Beneficios
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.raw("benefits").map((benefit: string) => (
              <li key={benefit} className="flex items-start gap-3 rounded-lg border border-[var(--color-border-default)] p-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-[var(--color-pink-brand)]" aria-hidden="true">
                  <path d="M12 2C9.5 2 7 3 5.5 5L4 7.5C2.5 10 2.5 13 4 15.5L5.5 18C7 20 9.5 21 12 21C14.5 21 17 20 18.5 18L20 15.5C21.5 13 21.5 10 20 7.5L18.5 5C17 3 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Directory Access Callout */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-pink-brand)] text-white">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                  Directorio de Integrantes
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  Conoce a las profesionales y entusiastas de nuestra red en toda Latinoamérica.
                </p>
              </div>
            </div>
            <Link
              href="/quienes-somos#directorio"
              className="shrink-0 self-start sm:self-auto inline-flex items-center rounded-full bg-[var(--color-pink-brand)] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              Ver Directorio
            </Link>
          </div>

          <div className="mt-10 rounded-xl border-2 border-[var(--color-pink-200)] bg-white p-6 shadow-xs">
            <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
              ¿Cómo afiliarse?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
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
