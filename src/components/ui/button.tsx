import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  download?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5",
  secondary:
    "bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:-translate-y-0.5",
  outline:
    "border border-white/20 text-white bg-transparent hover:border-violet-400/50 hover:bg-violet-500/10 hover:-translate-y-0.5",
  ghost: "text-muted hover:text-white hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  download,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          target={download ? undefined : "_blank"}
          rel={download ? undefined : "noopener noreferrer"}
          download={download || undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
