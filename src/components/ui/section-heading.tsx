import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-blue-500",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
