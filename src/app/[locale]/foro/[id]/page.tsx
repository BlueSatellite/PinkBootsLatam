"use client";

import { useState, useEffect, use } from "react";
import { Link } from "@/i18n/routing";

interface Comment {
  id: number;
  authorName: string;
  content: string;
  createdAt: string;
}

interface Post {
  id: number;
  authorName: string;
  category: string;
  title: string;
  content: string;
  createdAt: string;
  comments: Comment[];
}

export default function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((r) => r.json())
      .then((data) => setPost(data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [id]);

  async function submitComment(e: React.FormEvent) {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    setSending(true);

    const res = await fetch(`/api/posts/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ authorName: commentName, content: commentText }),
    });

    if (res.ok) {
      const newComment = await res.json();
      if (post) {
        setPost({ ...post, comments: [...post.comments, newComment] });
      }
      setCommentText("");
    }
    setSending(false);
  }

  if (loading) return <div className="py-32 text-center text-sm text-[var(--color-text-muted)]">Cargando...</div>;
  if (!post) return <div className="py-32 text-center text-sm text-[var(--color-text-muted)]">Post no encontrado.</div>;

  return (
    <>
      <section className="relative bg-[var(--color-text-primary)] py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <Link href="/foro" className="text-sm text-[var(--color-pink-300)] hover:underline">← Volver al foro</Link>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4">
          <article>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[10px] font-semibold uppercase text-[var(--color-pink-brand)]">
                {post.category}
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">
                {post.authorName} · {new Date(post.createdAt).toLocaleDateString("es")}
              </span>
            </div>
            <h1 className="mt-4 font-display text-2xl font-extrabold text-[var(--color-text-primary)] sm:text-3xl">
              {post.title}
            </h1>
            <p className="mt-6 whitespace-pre-wrap text-base leading-relaxed text-[var(--color-text-secondary)]">
              {post.content}
            </p>
          </article>

          <hr className="my-10 border-[var(--color-border-default)]" />

          <h2 className="font-display text-lg font-bold text-[var(--color-text-primary)]">
            Comentarios ({post.comments.length})
          </h2>

          <div className="mt-6 space-y-4">
            {post.comments.length === 0 && (
              <p className="text-sm text-[var(--color-text-muted)]">Se la primera en comentar.</p>
            )}
            {post.comments.map((c) => (
              <div key={c.id} className="rounded-lg border border-[var(--color-border-default)] bg-white p-4">
                <p className="text-xs text-[var(--color-text-muted)]">
                  <span className="font-semibold text-[var(--color-text-primary)]">{c.authorName}</span> · {new Date(c.createdAt).toLocaleDateString("es")}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{c.content}</p>
              </div>
            ))}
          </div>

          <form onSubmit={submitComment} className="mt-8 space-y-3">
            <input
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              placeholder="Tu nombre"
              required
              className="w-full rounded-lg border border-[var(--color-border-default)] px-4 py-2.5 text-sm focus:border-[var(--color-pink-brand)] focus:outline-none"
            />
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Escribe un comentario..."
              required
              rows={3}
              className="w-full rounded-lg border border-[var(--color-border-default)] px-4 py-2.5 text-sm focus:border-[var(--color-pink-brand)] focus:outline-none"
            />
            <button type="submit" disabled={sending} className="rounded-full bg-[var(--color-pink-brand)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)] disabled:opacity-50">
              {sending ? "Enviando..." : "Comentar"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
