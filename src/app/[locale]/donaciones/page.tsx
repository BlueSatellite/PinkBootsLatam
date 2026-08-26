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
