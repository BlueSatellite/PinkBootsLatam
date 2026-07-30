import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[var(--color-surface-alt)] px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl font-extrabold tracking-tight text-[var(--color-pink-brand)] sm:text-8xl">
          404
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          Esta pagina no existe o fue movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--color-pink-brand)] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-pink-600)]"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
