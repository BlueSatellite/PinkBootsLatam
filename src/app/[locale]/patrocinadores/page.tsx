import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";
import { sponsors, mainSponsor, otherSponsors } from "@/lib/sponsors";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Patrocinadores",
    description: "Conoce a los aliados de Pink Boots Society Latin America: Costa Rica Beer School, Lallemand, White Labs, Yakima Chief y mas.",
  };
}

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
          <div className="mt-8 flex justify-center">
            <Image
              src={mainSponsor.logo}
              alt={mainSponsor.name}
              width={260}
              height={78}
              className="h-[60px] w-auto"
            />
          </div>
          <p className="mt-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Sponsor principal
          </p>

          <h2 className="mt-16 text-center font-display text-base font-bold uppercase tracking-[0.15em] text-[var(--color-pink-brand)]">
            {t("partnersTitle")}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {otherSponsors.map((sponsor) => (
              <Image
                key={sponsor.name}
                src={sponsor.logo}
                alt={sponsor.name}
                width={140}
                height={52}
                className="h-[40px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
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
