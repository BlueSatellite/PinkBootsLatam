import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { posts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <section className="relative bg-[var(--color-text-primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
            Pink Boots Society Latin America
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-[var(--color-pink-brand)] px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
              {post.date}
            </span>
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-medium text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <div className="space-y-5">
            {post.content.split("\n\n").map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-[var(--color-border-light)] pt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-pink-brand)] hover:underline"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver al Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
