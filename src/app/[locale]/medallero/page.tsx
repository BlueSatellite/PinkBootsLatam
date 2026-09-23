import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import {
  organizationMedals,
  specialRecognitions,
  groupMedalsByCountry,
  competitionMedals,
} from "@/lib/medals";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Medallero y Galardones",
    description:
      "Medallas obtenidas en competencias cerveceras internacionales por cervezas colaborativas oficiales de Pink Boots Society Latin America y reconocimientos de la red.",
  };
}

export default function MedalsPage() {
  const byCountry = groupMedalsByCountry(competitionMedals);

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 border-b border-[var(--color-border-light)]">
        <img
          src="/banners/medallero.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/70" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-pink-brand)]/20 border border-[var(--color-pink-brand)]/40 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-pink-200)] backdrop-blur-md">
              Excelencia y Sororidad Cervecera
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Medallero de la Red
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90">
              Celebrando las medallas obtenidas en competencias internacionales por las cervezas colaborativas oficiales de <strong>Pink Boots Society Latin America</strong> y los reconocimientos a nuestras socias en los certámenes más prestigiosos del mundo.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-md shadow-xs">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-xl text-amber-300 mb-2">
                🥉
              </span>
              <p className="font-display text-3xl font-black text-white">3</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/75">
                Medallas de Organización
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-md shadow-xs">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/20 text-xl text-pink-300 mb-2">
                🌎
              </span>
              <p className="font-display text-3xl font-black text-white">3</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/75">
                Copas Internacionales
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-md shadow-xs">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-xl text-indigo-300 mb-2">
                ⭐
              </span>
              <p className="font-display text-3xl font-black text-white">2</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/75">
                Juezas World Beer Cup
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="bg-[var(--color-surface-alt)] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-20">

          {/* SECTION 1: MEDALLAS CON ORGANIZACIÓN */}
          <section id="medallas-organizacion" className="scroll-mt-24">
            <div className="border-b border-[var(--color-border-light)] pb-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                    Cervezas Colaborativas Oficiales
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                    MEDALLAS CON ORGANIZACIÓN
                  </h2>
                </div>
                <span className="rounded-full bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  🥉 3 Galardones de Bronce
                </span>
              </div>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                Cervezas creadas, formuladas y cocinadas en colaboración oficial con la organización <strong>Pink Boots Society Latin America</strong> y cervecerías aliadas, demostrando el calibre técnico y la creatividad sensorial de las mujeres cerveceras de nuestra región.
              </p>
            </div>

            <div className="mt-8 grid gap-8">
              {organizationMedals.map((medal) => (
                <div
                  key={medal.id}
                  className="group relative overflow-hidden rounded-3xl border-2 border-[var(--color-border-default)] bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-[var(--color-pink-brand)] hover:shadow-lg"
                >
                  {/* Subtle top decoration badge */}
                  <div className="absolute top-0 right-0 rounded-bl-2xl bg-amber-600 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <span>🥉</span>
                    <span>{medal.recognition}</span>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="space-y-4 max-w-2xl">
                      {/* Sub-header meta */}
                      <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-0">
                        <span className="rounded-full bg-[var(--color-pink-50)] border border-[var(--color-pink-100)] px-3 py-0.5 text-xs font-bold text-[var(--color-pink-brand)]">
                          {medal.competition} {medal.year && `· ${medal.year}`}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-0.5 text-xs font-semibold text-gray-700">
                          📍 {medal.country} {medal.hostCountry && `(Sede: ${medal.hostCountry})`}
                        </span>
                        {medal.style && (
                          <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-xs font-semibold text-amber-800">
                            Estilo: {medal.style}
                          </span>
                        )}
                      </div>

                      {/* Beer Name */}
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-black text-[var(--color-text-primary)] group-hover:text-[var(--color-pink-brand)] transition-colors">
                          {medal.beerName}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-[var(--color-pink-brand)] flex items-center gap-1.5">
                          <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>{medal.memberName}</span>
                        </p>
                      </div>

                      {/* Technical specifications */}
                      {(medal.abv || medal.ibu || medal.breweryCollaboration) && (
                        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--color-text-secondary)] border-y border-gray-100 py-2.5">
                          {medal.breweryCollaboration && (
                            <p>
                              <strong className="text-[var(--color-text-primary)]">Cervecerías Aliadas:</strong>{" "}
                              {medal.breweryCollaboration}
                            </p>
                          )}
                          {medal.abv && (
                            <p>
                              <strong className="text-[var(--color-text-primary)]">ABV:</strong> {medal.abv}
                            </p>
                          )}
                          {medal.ibu && (
                            <p>
                              <strong className="text-[var(--color-text-primary)]">IBU:</strong> {medal.ibu}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {medal.description}
                      </p>
                    </div>

                    {/* Competition Badge Card */}
                    <div className="shrink-0 w-full lg:w-64 rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-white p-5 text-center shadow-xs">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 text-3xl shadow-inner">
                        🥉
                      </div>
                      <p className="mt-3 font-display text-sm font-bold text-amber-900 uppercase tracking-wide">
                        {medal.recognition}
                      </p>
                      <p className="mt-1 font-display text-base font-extrabold text-[var(--color-text-primary)]">
                        {medal.competition}
                      </p>
                      {medal.edition && (
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{medal.edition}</p>
                      )}
                      <div className="mt-3.5 pt-3 border-t border-amber-200/50 text-[11px] font-semibold text-amber-800">
                        Categoría: {medal.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: RECONOCIMIENTOS DE LA RED */}
          <section id="reconocimientos-red" className="scroll-mt-24">
            <div className="border-b border-[var(--color-border-light)] pb-5">
              <span className="rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                Liderazgo y Juzgamiento Global
              </span>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                Reconocimientos Oficiales de la Red
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                Distinciones de máximo nivel técnico otorgadas por entidades cerveceras internacionales a las líderes de Pink Boots Society Latin America.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {specialRecognitions.map((recognition) => (
                <div
                  key={recognition.id}
                  className="rounded-2xl border border-[var(--color-border-default)] bg-white p-6 shadow-xs hover:border-[var(--color-pink-200)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 text-xl font-bold shadow-inner">
                      ⭐
                    </div>
                    <span className="rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 text-xs font-bold text-indigo-700">
                      {recognition.competition} {recognition.year}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-[var(--color-text-primary)]">
                    {recognition.memberName}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-pink-brand)] mt-0.5">
                    {recognition.country} · {recognition.recognition}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                    {recognition.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: ORGANIZADO POR PAÍS */}
          <section id="por-pais" className="scroll-mt-24">
            <div className="border-b border-[var(--color-border-light)] pb-5">
              <span className="rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                Impacto Territorial
              </span>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                Medallero por País
              </h2>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                Registro de las medallas ganadas por país de origen y desarrollo colaborativo.
              </p>
            </div>

            <div className="mt-8 space-y-8">
              {byCountry.map(({ country, medals: countryMedals }) => (
                <div key={country} className="rounded-2xl border border-[var(--color-border-default)] bg-white p-6 shadow-xs">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📍</span>
                      <h3 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
                        {country}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold text-[var(--color-pink-brand)]">
                      {countryMedals.length} {countryMedals.length === 1 ? "medalla" : "medallas"}
                    </span>
                  </div>

                  <div className="mt-4 divide-y divide-gray-100">
                    {countryMedals.map((medal) => (
                      <div key={medal.id} className="py-3.5 first:pt-0 last:pb-0 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-display text-base font-bold text-[var(--color-text-primary)]">
                            {medal.beerName ? `${medal.beerName} — ` : ""}{medal.memberName}
                          </p>
                          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                            {medal.competition} ({medal.year}) · {medal.category}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900">
                          🥉 {medal.recognition}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Collaboration CTA */}
          <div className="rounded-3xl border-2 border-[var(--color-pink-200)] bg-gradient-to-br from-white via-[var(--color-pink-50)] to-pink-100/40 p-8 sm:p-10 shadow-sm text-center">
            <span className="rounded-full bg-[var(--color-pink-brand)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Suma tu cervecería
            </span>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
              ¿Quieres cocinar una cerveza colaborativa con Pink Boots?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Participa en el <strong>Pink Boots Collaboration Brew Day</strong> o planifica una cocción con nuestras socias en tu país. Desarrollamos recetas, compartimos insumos y donamos un porcentaje a becas de formación técnica para mujeres.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contacto"
                className="rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-bold text-white shadow-xs transition-colors hover:bg-[var(--color-pink-600)]"
              >
                Proponer una Colaboración
              </Link>
              <Link
                href="/eventos"
                className="rounded-full border border-[var(--color-border-default)] bg-white px-6 py-2.5 text-sm font-bold text-[var(--color-text-secondary)] transition-colors hover:bg-gray-50"
              >
                Ver Próximos Eventos
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
