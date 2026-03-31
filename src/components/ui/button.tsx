import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "sm";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[linear-gradient(135deg,var(--brand-red),var(--brand-red-deep))] text-white shadow-[0_14px_30px_-18px_var(--brand-glow)] hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "border border-[#0f141c] bg-[linear-gradient(180deg,#2b323d,#181d25)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-[linear-gradient(180deg,#363f4c,#1d232d)] hover:-translate-y-0.5",
  ghost:
    "border border-[var(--border-subtle)] bg-white/50 text-[var(--text-main)] hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] hover:bg-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-xs uppercase tracking-[0.08em]",
};

export function Button({
  href,
  children,
  className = "",
  variant = "primary",
  size = "default",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md font-semibold tracking-[0.02em] transition-all duration-200 ease-out active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-red)]/55 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
