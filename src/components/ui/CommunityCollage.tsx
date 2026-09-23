"use client";

import { useState, useEffect, useCallback } from "react";
import { collageMembers, type Member } from "@/lib/members";

export default function CommunityCollage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const openMember = (member: Member, index: number) => {
    setSelectedMember(member);
    setSelectedIndex(index);
  };

  const closeMember = useCallback(() => {
    setSelectedMember(null);
    setSelectedIndex(-1);
  }, []);

  const showNext = useCallback(() => {
    if (selectedIndex < 0) return;
    const nextIdx = (selectedIndex + 1) % collageMembers.length;
    setSelectedIndex(nextIdx);
    setSelectedMember(collageMembers[nextIdx]);
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex < 0) return;
    const prevIdx = (selectedIndex - 1 + collageMembers.length) % collageMembers.length;
    setSelectedIndex(prevIdx);
    setSelectedMember(collageMembers[prevIdx]);
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMember) return;
      if (e.key === "Escape") closeMember();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMember, closeMember, showNext, showPrev]);

  return (
    <section id="mosaico" className="scroll-mt-20 py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="rounded-full bg-[var(--color-pink-50)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
            Fuerza Colectiva
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            El Mosaico de Nuestra Comunidad
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-text-secondary)]">
            Primero la comunidad, después la individualidad. Sin separaciones ni distancias: cada rostro, cada proyecto y cada elaboración se unen en un solo tapiz que representa a las mujeres en las bebidas fermentadas de toda Latinoamérica.
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-pink-brand)] uppercase tracking-wider">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            Toca o haz clic en cualquier fotografía para conocerla
          </p>
        </div>

        {/* Seamless Photo Collage (Zero Separation) */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border-light)] shadow-xl bg-black">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-9 gap-0">
            {collageMembers.map((member, idx) => (
              <button
                key={member.id}
                type="button"
                onClick={() => openMember(member, idx)}
                aria-label={`Ver información de ${member.name}`}
                className="group relative aspect-square w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-brand)] focus:z-20 cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="pointer-events-none h-full w-full object-cover transition-all duration-300 group-hover:scale-115 group-hover:contrast-105 group-hover:brightness-110"
                />

                {/* Subtle Hover Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex flex-col justify-end p-1.5 sm:p-2 text-left">
                  <p className="text-[11px] font-bold text-white leading-tight truncate drop-shadow-sm">
                    {member.name}
                  </p>
                  <p className="text-[9px] text-pink-200 truncate drop-shadow-sm">
                    {member.country}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer caption */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-text-muted)] px-2">
          <span>
            <strong className="text-[var(--color-text-primary)]">{collageMembers.length}</strong> integrantes en este mosaico
          </span>
          <span className="italic">
            Una sola pasión: la cerveza y las bebidas fermentadas
          </span>
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={closeMember}
        >
          <div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl transition-all border border-[var(--color-border-light)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeMember}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform hover:scale-110 hover:bg-black/80 cursor-pointer"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Photo Section */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black sm:aspect-[16/10]">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded-full bg-[var(--color-pink-brand)] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                    {selectedMember.country}
                  </span>
                  {selectedMember.roleBadge && (
                    <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-[var(--color-text-primary)] backdrop-blur-sm">
                      {selectedMember.roleBadge}
                    </span>
                  )}
                  {selectedMember.isLeadership && (
                    <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-bold text-black shadow-sm">
                      ★ Liderazgo
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-white drop-shadow-sm">
                  {selectedMember.name}
                </h3>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-6">
              {/* Location & Company */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--color-pink-brand)]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {selectedMember.city ? `${selectedMember.city}, ` : ""}{selectedMember.country}
                </span>

                {selectedMember.company && (
                  <span className="flex items-center gap-1 font-medium text-[var(--color-text-primary)]">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[var(--color-pink-brand)]">
                      <path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M16 11h2M16 15h2M10 21v-4h4v4M12 3l9 4H3l9-4z" />
                    </svg>
                    {selectedMember.company}
                  </span>
                )}
              </div>

              {/* Bio / Occupation */}
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {selectedMember.occupation}
              </p>

              {/* Actions Footer */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border-light)] pt-4">
                <div className="flex items-center gap-2">
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}?subject=Contacto%20Pink%20Boots%20Latam`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-pink-brand)] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[var(--color-pink-600)] transition-colors"
                    >
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>Escribir por correo</span>
                    </a>
                  )}

                  {selectedMember.social && (
                    <a
                      href={
                        selectedMember.social.startsWith("http")
                          ? selectedMember.social
                          : `https://www.instagram.com/${selectedMember.social.replace("@", "").split(" ")[0]}/`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border-default)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text-secondary)] hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] transition-colors"
                    >
                      <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                      <span>Redes</span>
                    </a>
                  )}
                </div>

                {/* Prev / Next controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={showPrev}
                    aria-label="Integrante anterior"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[var(--color-text-primary)] cursor-pointer"
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <span className="text-[11px] text-[var(--color-text-muted)] px-1">
                    {selectedIndex + 1} / {collageMembers.length}
                  </span>
                  <button
                    onClick={showNext}
                    aria-label="Siguiente integrante"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[var(--color-text-primary)] cursor-pointer"
                  >
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
