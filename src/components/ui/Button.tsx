"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-pink-brand)] text-white hover:bg-[var(--color-pink-600)] shadow-sm",
  secondary:
    "border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)]",
  ghost:
    "text-[var(--color-text-secondary)] hover:text-[var(--color-pink-brand)] hover:bg-[var(--color-pink-50)]",
};

const base =
  "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-pink-brand)] disabled:opacity-50 disabled:pointer-events-none";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", href, external, className = "", ...props }, ref) => {
    const classes = `${base} ${variantStyles[variant]} ${className}`;
    const motionProps = {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
      className: "inline-block", // ensure the wrapper matches inline-flex/block behavior
    };

    if (href) {
      const externalProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

      return (
        <motion.div {...motionProps}>
          <Link href={href} className={classes} {...externalProps}>
            {props.children}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.div {...motionProps}>
        <button ref={ref} className={classes} {...props} />
      </motion.div>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
