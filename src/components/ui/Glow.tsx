import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}

export function Glow({ className, color = "blue", size = "md" }: GlowProps) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  const colors = {
    blue: "bg-blue-500/20",
    indigo: "bg-indigo-500/20",
    purple: "bg-purple-500/20",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none rounded-full blur-[100px]",
        sizes[size],
        // @ts-ignore
        colors[color] || colors.blue,
        className
      )}
    />
  );
}
