import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--brand-red)]/30 bg-[var(--brand-red)]/8 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand-red)] ${className}`.trim()}
    >
      {children}
    </span>
  );
}
