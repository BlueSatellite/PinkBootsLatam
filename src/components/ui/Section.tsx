interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}

export function Section({ children, className = "", id, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${muted ? "bg-[var(--color-surface-alt)]" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
