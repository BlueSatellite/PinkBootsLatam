"use client";

import dynamic from "next/dynamic";

const ChaptersMap = dynamic(() => import("@/components/ui/ChaptersMap"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-5xl px-4 py-20 text-center text-sm text-[var(--color-text-muted)]">
      Cargando mapa...
    </div>
  ),
});

export default function ChaptersMapWrapper() {
  return <ChaptersMap />;
}
