import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, children, ...props }, ref) => {
    return (
      <article
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0F]",
          glass && "backdrop-blur-xl bg-white/[0.02]",
          className
        )}
        {...props}
      >
        {/* Subtle abstract mesh gradient background */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <div className="absolute -top-[20%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-500 blur-[80px]" />
          <div className="absolute -bottom-[20%] -left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-500 blur-[80px]" />
        </div>
        
        <div className="grain-bg absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" />
        <div className="relative z-10 h-full">{children}</div>
      </article>
    );
  }
);

Card.displayName = "Card";
