import { useTranslations } from "next-intl";

export default function TeamPage() {
  const t = useTranslations("team");

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
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t("intro")}
          </p>

          <h2 className="mt-12 font-display text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t("leadership")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
            {t("comingSoon")}
          </p>
        </div>
      </section>
    </>
  );
}
