import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { posts } from "@/lib/posts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
    description: "Historias, noticias y recursos de la comunidad Pink Boots Society en Latinoamerica.",
  };
}

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 sm:py-16">
        <img
          src="/banners/blog.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4">
          <div className="rounded-2xl bg-black/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-pink-300)]">
              Pink Boots Society Latin America
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-white/85">
              {t("hero")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-[var(--color-border-default)] bg-white p-6 transition-all hover:border-[var(--color-pink-200)] hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[var(--color-pink-50)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-pink-brand)]">
                    {post.date}
                  </span>
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-surface-muted)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-3 font-display text-lg font-bold text-[var(--color-text-primary)]">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-[var(--color-pink-brand)]">
                  Leer mas
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-alt)] p-8 text-center">
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              Siguenos en Instagram para enterarte de todas las novedades.
            </p>
            <a
              href="https://www.instagram.com/pinkbootslatam/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
