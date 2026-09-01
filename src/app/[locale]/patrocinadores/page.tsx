import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { sponsors } from "@/lib/sponsors";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Patrocinadores",
    description: "Conoce a los aliados de Pink Boots Society Latin America: semblanzas, videos y colaboraciones.",
  };
}

const instagramIcon = (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const chevronIcon = (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function SponsorsPage() {
  const t = useTranslations("sponsors");
  const orderedSponsors = [...sponsors].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/patrocinadores.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="rounded-2xl bg-black/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
              Pink Boots Society Latin America
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-white/85">
              {t("hero")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Semblanzas de nuestros aliados
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-[var(--color-text-muted)]">
            Haz clic en cada patrocinador para conocer su historia, su colaboracion con Pink Boots y su material grafico.
          </p>

          <div className="mt-10 space-y-4">
            {orderedSponsors.map((sponsor) => (
              <details
                key={sponsor.name}
                className="group rounded-xl border border-[var(--color-border-default)] bg-white open:border-[var(--color-pink-200)] open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-auto shrink-0 object-contain"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                        {sponsor.name}
                      </h3>
                      {sponsor.featured && (
                        <span className="rounded-full bg-[var(--color-pink-brand)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                          Sponsor principal
                        </span>
                      )}
                      {sponsor.label && (
                        <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-pink-brand)]">
                          {sponsor.label}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
                      Click para ver la semblanza
                    </p>
                  </div>
                  <span className="shrink-0 text-[var(--color-text-muted)] transition-transform group-open:rotate-180">
                    {chevronIcon}
                  </span>
                </summary>

                <div className="border-t border-[var(--color-border-light)] p-5">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                    Sobre la empresa
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {sponsor.description}
                  </p>

                  <h4 className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                    Relacion con Pink Boots
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {sponsor.relationship}
                  </p>

                  {sponsor.featuredProduct && (
                    <div className="mt-5 rounded-xl border-2 border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-5">
                      <h4 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-pink-brand)]">
                        {sponsor.featuredProduct.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {sponsor.featuredProduct.description}
                      </p>
                      <a
                        href={sponsor.featuredProduct.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex rounded-full bg-[var(--color-pink-brand)] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
                      >
                        {sponsor.featuredProduct.linkLabel}
                      </a>
                    </div>
                  )}

                  {(sponsor.website || sponsor.socials?.length) && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {sponsor.website && (
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-pink-brand)] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
                        >
                          Sitio web
                        </a>
                      )}
                      {sponsor.socials?.map((social) => (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-default)] px-4 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-pink-200)] hover:text-[var(--color-pink-brand)]"
                        >
                          {social.label === "Instagram" && instagramIcon}
                          {social.label}
                        </a>
                      ))}
                    </div>
                  )}

                  {sponsor.videos?.length && (
                    <div className="mt-5 space-y-4">
                      {sponsor.videos.map((video) => (
                        <div key={video.src}>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                            {video.title}
                          </p>
                          <div className="overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-black">
                            <video
                              controls
                              playsInline
                              preload="metadata"
                              className="max-h-[480px] w-full"
                            >
                              <source src={video.src} type="video/mp4" />
                            </video>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </details>
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
