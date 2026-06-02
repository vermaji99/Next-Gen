import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { StaggerContainer } from "../motion/StaggerContainer";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <StaggerContainer>
      <section
        className={cn(
          "grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]",
          className
        )}
      >
        {children}
      </section>
    </StaggerContainer>
  );
}
