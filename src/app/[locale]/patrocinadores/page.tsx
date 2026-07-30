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
            <a
              href={mainSponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-white px-12 py-10 shadow-sm ring-1 ring-[var(--color-pink-200)] transition-all hover:scale-105 hover:shadow-lg"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-pink-brand)] px-4 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                Sponsor principal
              </span>
              <Image
                src={mainSponsor.logo}
                alt={mainSponsor.name}
                width={400}
                height={130}
                className="h-[150px] w-auto"
                unoptimized
              />
            </a>
          </div>

          <h2 className="mt-16 text-center font-display text-base font-bold uppercase tracking-[0.15em] text-[var(--color-pink-brand)]">
            {t("partnersTitle")}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {otherSponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.website ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl bg-white px-6 py-8 shadow-sm ring-1 ring-gray-100 transition-all hover:scale-110 hover:shadow-md hover:ring-[var(--color-pink-200)]"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={80}
                  className="h-[100px] w-auto object-contain"
                  unoptimized
                />
              </a>
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
