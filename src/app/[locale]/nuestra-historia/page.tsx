import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

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
          <div className="space-y-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
            <p>{t("intro")}</p>
            <div className="rounded-xl border border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-6">
              <h2 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
                {t("missionLabel")}
              </h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                {t("mission")}
              </p>
            </div>
            <p>{t("latamIntro")}</p>
          </div>

          <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t("valuesTitle")}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.raw("values").map((value: { title: string; description: string }) => (
              <div
                key={value.title}
                className="rounded-xl border border-[var(--color-border-default)] p-5"
              >
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
