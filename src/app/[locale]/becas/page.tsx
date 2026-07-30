import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Becas",
    description: "Becas educativas para mujeres y personas no binarias en cerveza: Cicerone, BJCP, educacion continua a traves de Pink Boots Society.",
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

          <h2 className="mt-12 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t("availableTitle")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {t.raw("available").map((item: { name: string; description: string }) => (
              <div
                key={item.name}
                className="rounded-xl border border-[var(--color-border-default)] p-5"
              >
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-6 text-center">
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t("howTo")}
            </p>
            <a
              href={t("ctaUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
