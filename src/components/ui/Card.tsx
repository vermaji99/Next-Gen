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
          "relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#0B0B0F] group",
          glass && "glass-morphism",
          className
        )}
        {...props}
      >
        {/* Animated Inner Highlight */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[inherit]">
          <div className="absolute inset-px rounded-[inherit] border border-white/5 z-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Dynamic Glows */}
        <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
          <div className="absolute -top-[30%] -right-[30%] w-[80%] h-[80%] rounded-full bg-blue-500 blur-[100px]" />
          <div className="absolute -bottom-[30%] -left-[30%] w-[80%] h-[80%] rounded-full bg-indigo-500 blur-[100px]" />
        </div>
        
        <div className="grain-bg absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" />
        <div className="relative z-10 h-full w-full">{children}</div>
      </article>
    );
  }
);

Card.displayName = "Card";
