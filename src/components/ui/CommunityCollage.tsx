"use client";

import { useState, useEffect, useCallback } from "react";
import { collageMembers, type Member } from "@/lib/members";

interface SocialItem {
  platform: "instagram" | "tiktok" | "web";
  label: string;
  url: string;
}

function parseAllSocials(socialStr: string): SocialItem[] {
  if (!socialStr) return [];
  const results: SocialItem[] = [];

  // Match full URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = socialStr.match(urlRegex) || [];
  for (const url of urls) {
    if (url.includes("instagram.com")) {
      const match = url.match(/instagram\.com\/([^/?#]+)/);
      results.push({
        platform: "instagram",
        label: match ? `@${match[1]}` : "Instagram",
        url,
      });
    } else if (url.includes("tiktok.com")) {
      results.push({ platform: "tiktok", label: "TikTok", url });
    } else {
      results.push({ platform: "web", label: "Web", url });
    }
  }

  // Remove URLs to parse handles
  let remaining = socialStr.replace(urlRegex, " ");

  // Match TikTok if specified like "TikTok: @_beerme"
  const tiktokMatch = remaining.match(/TikTok:\s*@?([a-zA-Z0-9_.-]+)/i);
  if (tiktokMatch) {
    results.push({
      platform: "tiktok",
      label: `@${tiktokMatch[1]}`,
      url: `https://www.tiktok.com/@${tiktokMatch[1]}`,
    });
    remaining = remaining.replace(tiktokMatch[0], " ");
  }

  // Match Instagram handles (@handle)
  const handleMatches = remaining.match(/@([a-zA-Z0-9_.-]+)/g);
  if (handleMatches) {
    for (const h of handleMatches) {
      const handleClean = h.replace("@", "");
      if (!results.some((r) => r.label.toLowerCase() === `@${handleClean.toLowerCase()}`)) {
        results.push({
          platform: "instagram",
          label: `@${handleClean}`,
          url: `https://www.instagram.com/${handleClean}/`,
        });
      }
    }
  } else if (results.length === 0 && remaining.trim()) {
    const clean = remaining.trim().replace(/^Instagram:\s*/i, "");
    if (/^[a-zA-Z0-9_.-]+$/.test(clean)) {
      results.push({
        platform: "instagram",
        label: `@${clean}`,
        url: `https://www.instagram.com/${clean}/`,
      });
    }
  }

  return results;
}

export default function CommunityCollage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const openMember = (member: Member, index: number) => {
    setSelectedMember(member);
    setSelectedIndex(index);
    setCopiedEmail(false);
  };

  const closeMember = useCallback(() => {
    setSelectedMember(null);
    setSelectedIndex(-1);
    setCopiedEmail(false);
  }, []);

  const showNext = useCallback(() => {
    if (selectedIndex < 0) return;
    const nextIdx = (selectedIndex + 1) % collageMembers.length;
    setSelectedIndex(nextIdx);
    setSelectedMember(collageMembers[nextIdx]);
    setCopiedEmail(false);
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex < 0) return;
    const prevIdx = (selectedIndex - 1 + collageMembers.length) % collageMembers.length;
    setSelectedIndex(prevIdx);
    setSelectedMember(collageMembers[prevIdx]);
    setCopiedEmail(false);
  }, [selectedIndex]);

  const handleCopyEmail = (email: string) => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

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
            Toca o haz clic en cualquier fotografía para conocer su perfil completo
          </p>
        </div>

        {/* Seamless Photo Collage (Zero Separation, Exact 7x7 = 49 Members) */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border-light)] shadow-xl bg-white">
          <div className="grid grid-cols-7 gap-0">
            {collageMembers.map((member, idx) => (
              <button
                key={member.id}
                type="button"
                onClick={() => openMember(member, idx)}
                aria-label={`Ver información completa de ${member.name}`}
                className="group relative aspect-square w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-brand)] focus:z-20 cursor-pointer"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="pointer-events-none h-full w-full object-cover object-top transition-all duration-300 group-hover:scale-110 group-hover:contrast-105 group-hover:brightness-105"
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

      {/* Modal Dialog with Massive Uncropped Centered Photo and Complete Information */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          onClick={closeMember}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all border border-gray-200 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Close Button */}
            <button
              onClick={closeMember}
              aria-label="Cerrar modal"
              className="absolute right-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-transform hover:scale-110 hover:bg-black/95 cursor-pointer shadow-lg"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Body: Two Columns on Desktop (Large Photo Left + Rich Info Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 overflow-y-auto max-h-[82vh] md:max-h-[84vh]">
              {/* Left Column: Big Centered Uncropped Photo */}
              <div className="md:col-span-6 lg:col-span-7 relative flex items-center justify-center min-h-[340px] sm:min-h-[440px] md:min-h-[580px] bg-neutral-950 overflow-hidden select-none p-4 sm:p-6">
                {/* Ambient blurred backdrop so any aspect ratio fills organically */}
                <img
                  src={selectedMember.image}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-3xl opacity-40 scale-120"
                />

                {/* Main uncropped photo: Centered, large, object-contain guarantees 0% cropping */}
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="relative z-10 max-h-[380px] sm:max-h-[460px] md:max-h-[540px] w-auto max-w-full rounded-2xl object-contain mx-auto shadow-2xl drop-shadow-xl"
                />
              </div>

              {/* Right Column: Complete Member Information Panel */}
              <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-white border-t md:border-t-0 md:border-l border-gray-100">
                <div className="space-y-4">
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="rounded-full bg-[var(--color-pink-brand)] px-3 py-1 text-xs font-bold text-white uppercase tracking-wider shadow-xs">
                      {selectedMember.country}
                    </span>
                    {selectedMember.roleBadge && (
                      <span className="rounded-full bg-[var(--color-pink-50)] border border-[var(--color-pink-200)] px-3 py-1 text-xs font-bold text-[var(--color-pink-brand)]">
                        {selectedMember.roleBadge}
                      </span>
                    )}

                    {selectedMember.chapter && selectedMember.chapter !== selectedMember.country && (
                      <span className="rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">
                        {selectedMember.chapter}
                      </span>
                    )}
                  </div>

                  {/* Member Name */}
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] leading-tight">
                    {selectedMember.name}
                  </h3>

                  {/* Location & Company Cards */}
                  <div className="space-y-2 pt-1">
                    {/* Location */}
                    <div className="flex items-center gap-2.5 rounded-xl border border-[var(--color-border-light)] bg-gray-50/70 px-3.5 py-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-pink-100)] text-[var(--color-pink-brand)]">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          Ubicación
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-[var(--color-text-primary)] truncate">
                          {selectedMember.city ? `${selectedMember.city}, ` : ""}{selectedMember.country}
                        </p>
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-2.5 rounded-xl border border-[var(--color-border-light)] bg-gray-50/70 px-3.5 py-2.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-pink-100)] text-[var(--color-pink-brand)]">
                        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M3 21h18M3 7v14M21 7v14M6 11h2M6 15h2M16 11h2M16 15h2M10 21v-4h4v4M12 3l9 4H3l9-4z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          Empresa / Proyecto
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-[var(--color-text-primary)] truncate">
                          {selectedMember.company || "Independiente / Red cervecera"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Occupation / Dedication */}
                  <div className="rounded-xl border border-pink-100 bg-pink-50/50 p-3.5 sm:p-4">
                    <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      ¿A qué se dedica en el rubro?
                    </p>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[var(--color-text-primary)] font-medium">
                      {selectedMember.occupation}
                    </p>
                  </div>

                  {/* Biography / Story */}
                  {selectedMember.bio && (
                    <div className="rounded-xl border border-[var(--color-border-light)] bg-white p-3.5 sm:p-4 shadow-2xs">
                      <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-pink-brand)]">
                        <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Biografía y Trayectoria
                      </p>
                      <div className="mt-2 max-h-52 overflow-y-auto pr-1 text-xs leading-relaxed text-[var(--color-text-secondary)] whitespace-pre-line">
                        {selectedMember.bio}
                      </div>
                    </div>
                  )}

                  {/* Email Section */}
                  {selectedMember.email && (
                    <div className="rounded-xl border border-[var(--color-border-light)] bg-white p-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                        Correo de Contacto
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-[var(--color-text-primary)] select-all break-all">
                          {selectedMember.email}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleCopyEmail(selectedMember.email)}
                            className="inline-flex items-center gap-1 rounded-md border border-[var(--color-border-default)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-text-secondary)] hover:bg-gray-50 hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
                          >
                            {copiedEmail ? (
                              <>
                                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-emerald-600">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-emerald-600">Copiado</span>
                              </>
                            ) : (
                              <>
                                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                                <span>Copiar</span>
                              </>
                            )}
                          </button>
                          <a
                            href={`mailto:${selectedMember.email}?subject=Contacto%20Pink%20Boots%20Latam`}
                            className="inline-flex items-center gap-1 rounded-md bg-[var(--color-pink-brand)] px-2.5 py-1 text-[11px] font-semibold text-white shadow-xs hover:bg-[var(--color-pink-600)] transition-colors"
                          >
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>Escribir</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Social Networks */}
                  {selectedMember.social && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-1.5">
                        Redes Sociales
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {parseAllSocials(selectedMember.social).map((item) => (
                          <a
                            key={item.label}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-default)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-text-secondary)] hover:border-[var(--color-pink-brand)] hover:text-[var(--color-pink-brand)] hover:bg-pink-50/50 transition-all shadow-2xs"
                          >
                            {item.platform === "instagram" && (
                              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                              </svg>
                            )}
                            {item.platform === "tiktok" && (
                              <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                              </svg>
                            )}
                            {item.platform === "web" && (
                              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                              </svg>
                            )}
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls inside Right Column */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={showPrev}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-default)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
                  >
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    <span>Anterior</span>
                  </button>

                  <span className="text-xs font-bold text-[var(--color-text-secondary)]">
                    {selectedIndex + 1} de {collageMembers.length} socias
                  </span>

                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-default)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:bg-gray-100 hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
                  >
                    <span>Siguiente</span>
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
