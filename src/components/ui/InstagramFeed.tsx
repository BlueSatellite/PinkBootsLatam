"use client";

const highlights = [
  { label: "Collab Brew Day", emoji: "🍺", color: "from-amber-400 to-orange-500" },
  { label: "Comunidad", emoji: "👯", color: "from-pink-400 to-rose-500" },
  { label: "Eventos", emoji: "🎉", color: "from-purple-400 to-violet-500" },
  { label: "Cerveza", emoji: "🍻", color: "from-yellow-400 to-amber-600" },
  { label: "Becas", emoji: "🎓", color: "from-emerald-400 to-teal-500" },
  { label: "Mujeres", emoji: "💪", color: "from-cyan-400 to-blue-500" },
];

export default function InstagramFeed() {
  return (
    <section className="bg-[var(--color-surface-alt)] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
          Seguinos en Instagram
        </h2>
        <p className="mt-2 text-base text-[var(--color-text-secondary)]">
          <a
            href="https://www.instagram.com/pinkbootslatam/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--color-pink-brand)] hover:underline"
          >
            @pinkbootslatam
          </a>
          {" "}&mdash; 301 publicaciones · 2.500+ seguidoras
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {highlights.map((item) => (
            <a
              key={item.label}
              href="https://www.instagram.com/pinkbootslatam/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br ${item.color} transition-transform hover:scale-105`}
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 text-white">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider opacity-90">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--color-text-muted)]">
          <span>Ayudamos, alentamos e inspiramos a las profesionales de la industria.</span>
        </div>
        <a
          href="https://www.instagram.com/pinkbootslatam/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Ver Instagram
        </a>
      </div>
    </section>
  );
}
