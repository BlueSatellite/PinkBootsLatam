"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { mainSponsor, otherSponsors } from "@/lib/sponsors";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <>
      <section className="relative flex min-h-[70vh] items-center bg-[var(--color-text-primary)] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
            Pink Boots Society Latin America
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80">
            {t("heroSubtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/membresia"
              className="inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-pink-600)] hover:shadow-lg"
            >
              {t("joinCTA")}
            </Link>
            <Link
              href="/donaciones"
              className="inline-flex rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              {t("donateCTA")}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
            {t("missionTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
            {t("missionText")}
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
            {t("sponsorsTitle")}
          </h2>

          <div className="mt-12 flex justify-center">
            <Image
              src={mainSponsor.logo}
              alt={mainSponsor.name}
              width={280}
              height={84}
              className="h-[70px] w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-pink-brand)]">
            Sponsor principal
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {otherSponsors.map((sponsor) => (
              <Image
                key={sponsor.name}
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={60}
                className="h-[48px] w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/capitulos"
              className="group rounded-xl border border-[var(--color-border-default)] bg-white p-6 transition-colors hover:border-[var(--color-pink-200)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-pink-50)] text-[var(--color-pink-brand)] group-hover:bg-[var(--color-pink-brand)] group-hover:text-white transition-colors" aria-hidden="true">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-pink-brand)] transition-colors">
                {t("chaptersCTA")}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Conecta con capítulos locales en toda Latinoamérica.
              </p>
            </Link>

            <Link
              href="/eventos"
              className="group rounded-xl border border-[var(--color-border-default)] bg-white p-6 transition-colors hover:border-[var(--color-pink-200)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-pink-50)] text-[var(--color-pink-brand)] group-hover:bg-[var(--color-pink-brand)] group-hover:text-white transition-colors" aria-hidden="true">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-pink-brand)] transition-colors">
                {t("eventsTitle")}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Descubre webinars y Collaboration Brew Days.
              </p>
            </Link>

            <Link
              href="/becas"
              className="group rounded-xl border border-[var(--color-border-default)] bg-white p-6 transition-colors hover:border-[var(--color-pink-200)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-pink-50)] text-[var(--color-pink-brand)] group-hover:bg-[var(--color-pink-brand)] group-hover:text-white transition-colors" aria-hidden="true">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-pink-brand)] transition-colors">
                {t("scholarships")}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Accede a oportunidades educativas para tu carrera.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
