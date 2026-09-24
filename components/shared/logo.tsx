import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showTagline?: boolean;
}

export function Logo({ variant = "dark", className, showTagline = false }: LogoProps) {
  const textColor = variant === "dark" ? "text-brand-black" : "text-white";
  const taglineColor = variant === "dark" ? "text-neutral-gray" : "text-white/60";

  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="relative flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path d="M4 32 L4 8 L20 32 L36 8 L36 32" stroke="#1E5EFF" strokeWidth="4" strokeLinejoin="miter" />
          <circle cx="20" cy="20" r="1.6" fill="#1E5EFF" />
          <circle cx="10" cy="14" r="1.2" fill="#1E5EFF" />
          <circle cx="30" cy="26" r="1.2" fill="#1E5EFF" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold tracking-tight", textColor)}>
          NEXORA
        </span>
        <span className={cn("font-display text-[10px] font-medium tracking-[0.35em]", textColor)}>
          DIGITAL
        </span>
        {showTagline && (
          <span className={cn("mt-1 text-[9px] font-medium tracking-[0.25em]", taglineColor)}>
            DESIGN. MARKET. GROW.
          </span>
        )}
      </span>
    </Link>
  );
}