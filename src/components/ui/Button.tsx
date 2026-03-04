"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "white";
type ButtonSize = "default" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white font-heading font-medium rounded-full hover:bg-accent-hover hover:translate-y-[-1px] hover:shadow-[0_0_20px_rgba(69,121,144,0.3)] active:scale-[0.98] transition-all duration-200",
  secondary:
    "border border-accent text-accent font-heading font-medium rounded-full hover:bg-accent-light hover:translate-y-[-1px] active:scale-[0.98] transition-all duration-200",
  ghost:
    "text-text-secondary font-body hover:text-text-primary active:scale-[0.98] transition-all duration-200",
  white:
    "bg-white text-accent font-heading font-medium rounded-full hover:bg-white/90 hover:translate-y-[-1px] active:scale-[0.98] transition-all duration-200",
};

const sizeStyles: Record<ButtonSize, Record<string, string>> = {
  default: {
    primary: "px-7 py-3",
    secondary: "px-7 py-3",
    ghost: "px-0 py-0",
    white: "px-7 py-3",
  },
  lg: {
    primary: "px-9 py-4 text-lg",
    secondary: "px-9 py-4 text-lg",
    ghost: "px-0 py-0 text-lg",
    white: "px-9 py-4 text-lg",
  },
};

export default function Button({
  variant = "primary",
  size = "default",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    variantStyles[variant],
    sizeStyles[size][variant],
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2",
    className
  );

  if (href) {
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
