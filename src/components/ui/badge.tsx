import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "primary" | "outline";
  className?: string;
}

const variants = {
  default: "bg-white/10 text-white/80 border-white/10",
  success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  primary: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  outline: "bg-transparent text-muted border-white/15",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
