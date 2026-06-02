"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
  showValue?: boolean;
}

export function ProgressBar({ value, className, showValue = false }: ProgressBarProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-end mb-2">
        {showValue && (
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Progress</span>
        )}
        {showValue && (
          <span className="text-sm font-bold text-blue-400">{value}%</span>
        )}
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5 
          }}
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"
        />
      </div>
    </div>
  );
}
