"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function InstallAppPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // 1. Check if already running in standalone mode (already installed)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // 2. Register Service Worker for PWA capability
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch((err) => console.debug("SW registration info:", err));
    }

    // 3. Check dismissal memory in localStorage (3 days snooze)
    const dismissedUntil = localStorage.getItem("pwa_install_dismissed_until");
    if (dismissedUntil && Date.now() < Number(dismissedUntil)) {
      return;
    }

    // 4. Detect iOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(userAgent) &&
      !(window as unknown as { MSStream?: boolean }).MSStream;

    if (isIosDevice) {
      setIsIOS(true);
      // Show prompt after a short delay on iOS
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      return () => clearTimeout(timer);
    }

    // 5. Detect Chromium / Android / Desktop browsers via beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Wait a moment so the initial page transition is pleasant
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // 6. Listen for installed event
    const handleAppInstalled = () => {
      setIsVisible(false);
      setIsInstalled(true);
      setDeferredPrompt(null);
    };
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }

    if (!deferredPrompt) {
      // Fallback if prompt was somehow cleared or browser needs manual trigger
      setIsVisible(false);
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setIsVisible(false);
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } catch (err) {
      console.error("Error triggering install prompt:", err);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    // Snooze for 4 days
    const snoozeTime = Date.now() + 4 * 24 * 60 * 60 * 1000;
    try {
      localStorage.setItem("pwa_install_dismissed_until", snoozeTime.toString());
    } catch {
      // Ignore storage errors in private browsing
    }
  };

  if (!isVisible || isInstalled) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-labelledby="pwa-prompt-title"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md sm:bottom-6 sm:right-6 sm:left-auto"
    >
      <div className="relative overflow-hidden rounded-3xl border border-[var(--color-pink-brand)]/30 bg-white/95 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:border-pink-500/30 dark:bg-neutral-900/95">
        {/* Subtle decorative gradient glow */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[var(--color-pink-brand)]/15 blur-2xl" />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Cerrar aviso de instalación"
          className="absolute top-3.5 right-3.5 inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors dark:text-neutral-400 dark:hover:bg-neutral-800"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-start gap-3.5">
          {/* App Icon */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 p-1.5 shadow-inner border border-pink-200">
            <Image
              src="/sponsors/pinkbootslatam.png"
              alt="Pink Boots Latam Logo"
              width={44}
              height={44}
              className="object-contain"
            />
          </div>

          {/* Texts */}
          <div className="pr-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--color-pink-brand)]">
              📱 Aplicación Oficial
            </span>
            <h3 id="pwa-prompt-title" className="mt-1 font-display text-base font-extrabold text-[var(--color-text-primary)]">
              Instalar Pink Boots Latam
            </h3>
            <p className="mt-1 text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Instala la app en tu pantalla de inicio para una experiencia más rápida, fluida y con acceso directo.
            </p>
          </div>
        </div>

        {/* iOS Step-by-Step Instructions Drawer */}
        {isIOS && showIOSInstructions && (
          <div className="mt-4 rounded-2xl bg-pink-50/70 border border-pink-200/80 p-3.5 text-xs text-neutral-800 space-y-2 dark:bg-pink-950/30 dark:border-pink-800/40 dark:text-neutral-200 animate-in fade-in duration-200">
            <p className="font-bold text-[var(--color-pink-brand)] flex items-center gap-1.5">
              <span>📲</span> Pasos para instalar en Safari iOS:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-neutral-700 dark:text-neutral-300 font-medium">
              <li className="leading-snug">
                Toca el botón <strong>Compartir</strong>{" "}
                <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-white border border-gray-200 text-neutral-900 font-bold text-[11px] shadow-2xs">
                  <svg className="w-3 h-3 inline mr-1 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  Compartir
                </span>{" "}
                en la barra inferior de Safari.
              </li>
              <li className="leading-snug">
                Desplaza hacia abajo y selecciona{" "}
                <strong className="text-[var(--color-pink-brand)]">«Agregar a pantalla de inicio»</strong> ➕.
              </li>
              <li className="leading-snug">
                Toca <strong>«Agregar»</strong> en la esquina superior derecha. ¡Listo!
              </li>
            </ol>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-4 flex items-center justify-end gap-2.5">
          <button
            onClick={handleDismiss}
            className="rounded-full px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors dark:text-neutral-400 dark:hover:text-neutral-200"
          >
            Ahora no
          </button>

          <button
            onClick={handleInstallClick}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-pink-brand)] px-4 py-2 text-xs font-bold text-white shadow-md shadow-pink-500/25 transition-all hover:bg-[var(--color-pink-600)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{isIOS ? (showIOSInstructions ? "Entendido" : "Ver cómo instalar") : "Instalar aplicación"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
