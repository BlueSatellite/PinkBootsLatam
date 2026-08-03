"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";

const categories = [
  { key: "tecnicas", label: "Preguntas tecnicas", emoji: "🔬" },
  { key: "eventos", label: "Eventos y encuentros", emoji: "🎉" },
  { key: "becas", label: "Becas y educacion", emoji: "🎓" },
  { key: "networking", label: "Networking y empleos", emoji: "🤝" },
  { key: "historias", label: "Historias y comunidad", emoji: "💬" },
  { key: "general", label: "General", emoji: "🍺" },
];

interface Post {
  id: number;
  authorName: string;
  category: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = category ? `/api/posts?category=${category}` : "/api/posts";
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
        else setPosts([]);
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, [category]);

  const catLabel = (key: string) => categories.find((c) => c.key === key)?.label ?? key;

  return (
    <>
      <section className="relative bg-[var(--color-text-primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
            Comunidad
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Foro
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/70">
            Pregunta, comparte, conecta. Un espacio para todas.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory("")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  !category ? "bg-[var(--color-pink-brand)] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Todas
              </button>
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCategory(c.key)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    category === c.key ? "bg-[var(--color-pink-brand)] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>
            <Link
              href="/foro/nuevo"
              className="rounded-full bg-[var(--color-pink-brand)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              Nueva publicacion
            </Link>
          </div>

          <div className="mt-8 space-y-3">
            {loading ? (
              <p className="py-16 text-center text-sm text-[var(--color-text-muted)]">Cargando...</p>
            ) : posts.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-sm text-[var(--color-text-muted)]">
                  No hay publicaciones todavia. ¡Se la primera!
                </p>
              </div>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/foro/${post.id}`}
                  className="block rounded-xl border border-[var(--color-border-default)] bg-white p-5 transition-all hover:border-[var(--color-pink-200)] hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[var(--color-pink-brand)]">
                      {catLabel(post.category)}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      {post.authorName} · {new Date(post.createdAt).toLocaleDateString("es")}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-bold text-[var(--color-text-primary)]">
                    {post.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-[var(--color-text-secondary)]">
                    {post.content}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
