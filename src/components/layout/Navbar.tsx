"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

const navItems = [
  { key: "about", href: "/nuestra-historia" },
  { key: "chapters", href: "/capitulos" },
  { key: "membership", href: "/membresia" },
  { key: "events", href: "/eventos" },
  { key: "blog", href: "/blog" },
  { key: "sponsors", href: "/patrocinadores" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-light)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pink-brand)]"
            aria-label="Pink Boots Society Latin America - Inicio"
          >
            <img
              src="/sponsors/pink-boots-logo.png"
              alt="Pink Boots Society Latin America"
              className="h-12 w-auto"
            />
            <span className="font-display text-sm font-bold uppercase tracking-wider text-[#b58500]">
              Pink Boots Latam
            </span>
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-1" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-pink-50)] hover:text-[var(--color-pink-brand)]"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/donaciones"
              className="ml-3 rounded-full bg-[var(--color-pink-brand)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              {t("donate")}
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-muted)] lg:hidden focus-visible:outline-2 focus-visible:outline-[var(--color-pink-brand)]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            className="border-t border-[var(--color-border-light)] pb-4 pt-2 lg:hidden"
            aria-label="Menú móvil"
          >
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={close}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-pink-50)] hover:text-[var(--color-pink-brand)]"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/donaciones"
              onClick={close}
              className="mt-2 block rounded-full bg-[var(--color-pink-brand)] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t("donate")}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
