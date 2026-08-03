import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Membresia",
    description: "Unete a Pink Boots Society Latin America. Membresia Profesional, Aspirante y de Negocio en Planificacion.",
  };
}

export default function MembershipPage() {
  const t = useTranslations("membership");

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
            Tipos de Membresia
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-5">
              <h3 className="font-display text-sm font-bold text-[var(--color-pink-brand)]">Membresia Profesional</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Profesionales actuales o jubilados de la industria de bebidas fermentadas/alcoholicas que reciben el 25% o mas de sus ingresos de la industria, o retirados con minimo 10 anos en el rubro.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border-default)] p-5">
              <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">Aspirante</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Abierto a mujeres que actualmente estudian o se capacitan para ingresar a una carrera en la industria de bebidas.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border-default)] p-5">
              <h3 className="font-display text-sm font-bold text-[var(--color-text-primary)]">Negocio en Planificacion</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Personas en proceso de abrir un negocio en la industria: cerveceria, taberna, sala de degustacion, bar, tienda de botellas u otro proveedor.
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

          <div className="mt-10 rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-6">
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
