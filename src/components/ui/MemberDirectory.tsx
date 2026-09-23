"use client";

import { useState, useMemo } from "react";
import { members, allCountries, type Member } from "@/lib/members";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function parseSocialLink(social: string): { label: string; url: string } | null {
  if (!social) return null;
  const trimmed = social.trim();

  // If it's a full URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return { label: "Ver perfil", url: trimmed };
  }

  // If it contains instagram handle
  const handleMatch = trimmed.match(/@([a-zA-Z0-9_.-]+)/);
  if (handleMatch) {
    return { label: `@${handleMatch[1]}`, url: `https://www.instagram.com/${handleMatch[1]}/` };
  }

  // If it's a simple handle without @
  if (/^[a-zA-Z0-9_.-]+$/.test(trimmed)) {
    return { label: `@${trimmed}`, url: `https://www.instagram.com/${trimmed}/` };
  }

  return { label: trimmed, url: "#" };
}

export default function MemberDirectory() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const countryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todos: members.length };
    for (const m of members) {
      counts[m.country] = (counts[m.country] || 0) + 1;
    }
    return counts;
  }, []);

  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const matchesCountry =
        selectedCountry === "Todos" || m.country.toLowerCase() === selectedCountry.toLowerCase();

      if (!matchesCountry) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        m.name.toLowerCase().includes(q) ||
        m.occupation.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q) ||
        m.city.toLowerCase().includes(q) ||
        m.country.toLowerCase().includes(q) ||
        (m.bio ? m.bio.toLowerCase().includes(q) : false)
      );
    });
  }, [selectedCountry, searchQuery]);

  return (
    <section id="directorio" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full bg-[var(--color-pink-50)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
            Red Latinoamericana
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Directorio de Nuestra Comunidad
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            Conoce y conecta con las profesionales, maestras cerveceras, biólogas, juezas y aficionadas que forman la red activa de Pink Boots Society en Latinoamérica.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-10 space-y-5">
          <div className="mx-auto max-w-md">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, cervecería, especialidad o ciudad..."
                className="w-full rounded-full border border-[var(--color-border-default)] bg-white px-5 py-3 pl-11 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] shadow-sm transition-all focus:border-[var(--color-pink-brand)] focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-100)]"
              />
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-4 top-3.5 text-[var(--color-text-muted)]"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-3 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>

          {/* Country Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allCountries.map((c) => {
              const count = countryCounts[c] ?? 0;
              const isSelected = selectedCountry === c;
              return (
                <button
                  key={c}
                  onClick={() => setSelectedCountry(c)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[var(--color-pink-brand)] text-white shadow-sm"
                      : "bg-white text-[var(--color-text-secondary)] border border-[var(--color-border-light)] hover:border-[var(--color-pink-200)] hover:bg-[var(--color-pink-50)]"
                  }`}
                >
                  <span>{c}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-[var(--color-text-muted)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] px-2">
            <span>
              Mostrando <strong className="text-[var(--color-text-primary)]">{filteredMembers.length}</strong> de{" "}
              {members.length} integrantes
            </span>
            {selectedCountry !== "Todos" && (
              <button
                onClick={() => setSelectedCountry("Todos")}
                className="text-[var(--color-pink-brand)] hover:underline"
              >
                Ver todos los países
              </button>
            )}
          </div>
        </div>

        {/* Member Grid */}
        {filteredMembers.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-12 text-center">
            <p className="text-base font-semibold text-[var(--color-text-primary)]">
              No encontramos integrantes con ese criterio
            </p>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Intenta con otro término o limpia los filtros para ver a toda la comunidad.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCountry("Todos");
              }}
              className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-5 py-2 text-xs font-semibold text-white hover:bg-[var(--color-pink-600)]"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => {
              const socialInfo = parseSocialLink(member.social);
              const imageSrc =
                member.image ||
                (member.photoDriveId
                  ? `https://drive.google.com/thumbnail?id=${member.photoDriveId}&sz=w400`
                  : null);
              const hasImage = Boolean(imageSrc) && !imageErrors[member.id];

              return (
                <div
                  key={member.id}
                  className="group flex flex-col justify-between rounded-2xl border border-[var(--color-border-default)] bg-white p-6 shadow-xs transition-all hover:border-[var(--color-pink-200)] hover:shadow-md"
                >
                  <div>
                    {/* Header: Avatar + Badges */}
                    <div className="flex items-start gap-4">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--color-pink-100)] bg-gradient-to-br from-[var(--color-pink-400)] to-[var(--color-pink-brand)] flex items-center justify-center text-white font-bold text-base shadow-inner">
                        {hasImage && imageSrc ? (
                          <img
                            src={imageSrc}
                            alt={member.name}
                            onError={() => handleImageError(member.id)}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span>{getInitials(member.name)}</span>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {member.roleBadge && (
                            <span className="rounded-full bg-[var(--color-pink-50)] px-2 py-0.5 text-[10px] font-bold text-[var(--color-pink-brand)]">
                              {member.roleBadge}
                            </span>
                          )}
                          {member.isLeadership && (
                            <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                              ★ Liderazgo
                            </span>
                          )}
                        </div>

                        <h3 className="mt-1 font-display text-base font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-pink-brand)] transition-colors leading-snug">
                          {member.name}
                        </h3>

                        <p className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] mt-0.5">
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span>
                            {member.city ? `${member.city}, ` : ""}
                            <strong>{member.country}</strong>
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Company */}
                    {member.company && (
                      <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-md bg-[var(--color-surface-alt)] px-2.5 py-1 text-xs font-semibold text-[var(--color-text-primary)]">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--color-pink-brand)]">
                          <path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M16 11h2M16 15h2M10 21v-4h4v4M12 3l9 4H3l9-4z" />
                        </svg>
                        <span className="truncate">{member.company}</span>
                      </div>
                    )}

                    {/* Occupation */}
                    <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                      {member.occupation}
                    </p>
                  </div>

                  {/* Actions / Contact */}
                  <div className="mt-5 border-t border-[var(--color-border-light)] pt-3.5 flex items-center justify-between gap-2">
                    {/* Direct Contact Mailto */}
                    {member.email ? (
                      <a
                        href={`mailto:${member.email}?subject=Contacto%20Pink%20Boots%20Latam`}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border-default)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors"
                        title={`Escribir a ${member.name} (${member.email})`}
                      >
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span>Conectar</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-transparent px-2.5 py-1.5 text-xs font-medium text-[var(--color-text-muted)]">
                        Pink Boots Latam
                      </span>
                    )}

                    {/* Social Link */}
                    {socialInfo && socialInfo.url !== "#" ? (
                      <a
                        href={socialInfo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-pink-brand)] hover:underline truncate max-w-[150px]"
                        title={socialInfo.url}
                      >
                        <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                        <span className="truncate">{socialInfo.label}</span>
                      </a>
                    ) : (
                      <span className="text-[11px] text-[var(--color-text-muted)] italic">
                        Red interna
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
