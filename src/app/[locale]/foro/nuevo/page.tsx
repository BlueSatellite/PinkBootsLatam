"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";

const categories = [
  { key: "tecnicas", label: "Preguntas tecnicas" },
  { key: "eventos", label: "Eventos y encuentros" },
  { key: "becas", label: "Becas y educacion" },
  { key: "networking", label: "Networking y empleos" },
  { key: "historias", label: "Historias y comunidad" },
  { key: "general", label: "General" },
];

export default function NewPostPage() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const data = {
      authorName: form.get("authorName") as string,
      authorEmail: form.get("authorEmail") as string,
      category: form.get("category") as string,
      title: form.get("title") as string,
      content: form.get("content") as string,
    };

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const post = await res.json();
      router.push(`/foro/${post.id}`);
    } else {
      setError("Error al publicar. Revisa que todos los campos esten completos.");
      setSending(false);
    }
  }

  return (
    <>
      <section className="relative bg-[var(--color-text-primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
            Comunidad
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Nueva publicacion
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="rounded-xl border border-[var(--color-pink-200)] bg-[var(--color-pink-50)] p-4 text-sm text-[var(--color-text-secondary)]">
            Pink Boots Latam promueve un espacio respetuoso e inclusivo. Nos reservamos el derecho de eliminar contenido inapropiado.
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)]">Nombre</label>
                <input name="authorName" required className="mt-1.5 w-full rounded-lg border border-[var(--color-border-default)] px-4 py-2.5 text-sm focus:border-[var(--color-pink-brand)] focus:outline-none" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-text-primary)]">Correo</label>
                <input name="authorEmail" type="email" required className="mt-1.5 w-full rounded-lg border border-[var(--color-border-default)] px-4 py-2.5 text-sm focus:border-[var(--color-pink-brand)] focus:outline-none" placeholder="tu@correo.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-text-primary)]">Categoria</label>
              <select name="category" required className="mt-1.5 w-full rounded-lg border border-[var(--color-border-default)] px-4 py-2.5 text-sm focus:border-[var(--color-pink-brand)] focus:outline-none">
                <option value="">Selecciona una categoria</option>
                {categories.map((c) => (
                  <option key={c.key} value={c.key}>{c.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-text-primary)]">Titulo</label>
              <input name="title" required className="mt-1.5 w-full rounded-lg border border-[var(--color-border-default)] px-4 py-2.5 text-sm focus:border-[var(--color-pink-brand)] focus:outline-none" placeholder="¿De que trata tu publicacion?" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-text-primary)]">Mensaje</label>
              <textarea name="content" required rows={6} className="mt-1.5 w-full rounded-lg border border-[var(--color-border-default)] px-4 py-2.5 text-sm focus:border-[var(--color-pink-brand)] focus:outline-none" placeholder="Escribe tu mensaje aqui..." />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex gap-3">
              <button type="submit" disabled={sending} className="rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)] disabled:opacity-50">
                {sending ? "Publicando..." : "Publicar"}
              </button>
              <button type="button" onClick={() => router.back()} className="rounded-full border border-[var(--color-border-default)] px-6 py-2.5 text-sm font-semibold text-[var(--color-text-secondary)] hover:bg-gray-50">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
