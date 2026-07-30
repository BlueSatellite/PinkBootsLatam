import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Capitulos",
    description: "Encuentra tu capitulo de Pink Boots Society en Latinoamerica. Red de mujeres y personas no binarias en la industria cervecera.",
  };
}

export default function ChaptersPage() {
  const t = useTranslations("chapters");

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

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-10">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              className="mx-auto text-[var(--color-pink-brand)]"
              aria-hidden="true"
            >
              <path
                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {t("comingSoon")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              {t("cta")}
            </p>
            <a
              href="https://www.instagram.com/pinkbootslatam/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              Instagram @pinkbootslatam
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
