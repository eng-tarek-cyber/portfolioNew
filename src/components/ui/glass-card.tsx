import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-xl",
        hover &&
          "transition-all duration-300 hover:border-violet-500/30 hover:shadow-violet-500/10 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
