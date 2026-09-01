import type { Metadata } from "next";
import { competitionMedals, groupMedalsByCountry } from "@/lib/medals";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Medallero",
    description: "Las medallas ganadas por las integrantes de Pink Boots Society Latin America en competencias cerveceras, organizadas por pais.",
  };
}

export default function MedalsPage() {
  const byCountry = groupMedalsByCountry(competitionMedals);

  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <img
          src="/banners/medallero.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-brand)]">
            Pink Boots Society Latin America
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Medallero
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[var(--color-text-secondary)]">
            Las medallas ganadas por nuestras integrantes en competencias cerveceras, organizadas por pais.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          {byCountry.length === 0 ? (
            <p className="rounded-lg border border-dashed border-[var(--color-border-default)] p-8 text-center text-sm text-[var(--color-text-muted)]">
              Aun no hay medallas registradas. Vuelve pronto o siguenos en Instagram para enterarte de los proximos logros.
            </p>
          ) : (
            <div className="space-y-12">
              {byCountry.map(({ country, medals: countryMedals }) => (
                <div key={country}>
                  <div className="flex items-center gap-3">
                    <h2 className="font-display text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                      {country}
                    </h2>
                    <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-pink-brand)]">
                      {countryMedals.length} {countryMedals.length === 1 ? "medalla" : "medallas"}
                    </span>
                  </div>

                  <div className="mt-4 space-y-4">
                    {countryMedals.map((medal) => (
                      <div
                        key={`${medal.memberName}-${medal.competition}-${medal.recognition}`}
                        className="rounded-xl border border-[var(--color-border-default)] bg-white p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-display text-base font-bold text-[var(--color-text-primary)]">
                            {medal.memberName}
                          </h3>
                          <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-pink-brand)]">
                            {medal.recognition}
                          </span>
                        </div>
                        <div className="mt-2 grid gap-x-6 gap-y-1 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2">
                          <p>
                            <span className="font-semibold text-[var(--color-text-primary)]">Competencia:</span>{" "}
                            {medal.competition}
                          </p>
                          <p>
                            <span className="font-semibold text-[var(--color-text-primary)]">Año:</span>{" "}
                            {medal.year ?? "Por confirmar"}
                          </p>
                          <p>
                            <span className="font-semibold text-[var(--color-text-primary)]">Categoria o estilo:</span>{" "}
                            {medal.category}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
