import { useTranslations } from "next-intl";

const mainSponsor = "Costa Rica Beer School";

const partners = [
  "Lallemand",
  "White Labs",
  "Yakima Chief",
  "Fermenta Cociencia",
  "BJCP",
  "Cicerone",
];

export default function SponsorsPage() {
  const t = useTranslations("sponsors");

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
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-base font-bold uppercase tracking-[0.15em] text-[var(--color-pink-brand)]">
            {t("mainTitle")}
          </h2>
          <div className="mt-6 flex justify-center">
            <div className="rounded-xl border-2 border-[var(--color-pink-brand)] bg-white px-12 py-10 text-center">
              <span className="text-xl font-bold tracking-tight text-[var(--color-pink-brand)]">
                {mainSponsor}
              </span>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
                Sponsor principal
              </p>
            </div>
          </div>

          <h2 className="mt-16 text-center font-display text-base font-bold uppercase tracking-[0.15em] text-[var(--color-pink-brand)]">
            {t("partnersTitle")}
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-lg border border-[var(--color-border-default)] bg-white px-4 py-6"
              >
                <span className="text-center text-sm font-medium text-[var(--color-text-muted)]">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-8 text-center">
            <h2 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
              {t("becomeTitle")}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {t("becomeText")}
            </p>
            <a
              href="https://www.instagram.com/pinkbootslatam/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              {t("becomeCta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
