"use client";

import React from "react";
import { Play, Search, BarChart2, Plus } from "lucide-react";
import { AnimatedCard } from "../motion/AnimatedCard";
import { cn } from "@/lib/utils";

const actions = [
  { label: "Resume Study", icon: Play, color: "blue" },
  { label: "Find Courses", icon: Search, color: "zinc" },
  { label: "Full Analytics", icon: BarChart2, color: "zinc" },
];

export function QuickActionsCard() {
  return (
    <AnimatedCard className="col-span-1 md:col-span-4 lg:col-span-4 min-h-[220px]">
      <div className="relative p-8 h-full flex flex-col justify-between z-10">
        <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Quick Terminal</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, i) => (
            <button
              key={i}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 group/btn",
                action.color === "blue" 
                  ? "bg-blue-600 border-blue-500 text-white hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                  : "bg-white/[0.03] border-white/[0.08] text-zinc-300 hover:bg-white/[0.06] hover:text-white"
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-2 rounded-lg transition-colors",
                  action.color === "blue" ? "bg-white/20" : "bg-white/5 group-hover/btn:bg-blue-500/20"
                )}>
                  <action.icon size={18} className={cn(
                    action.color === "blue" ? "text-white" : "text-zinc-500 group-hover/btn:text-blue-400"
                  )} />
                </div>
                <span className="text-sm font-bold tracking-tight">{action.label}</span>
              </div>
              <Plus size={16} className="opacity-0 group-hover/btn:opacity-100 transition-all duration-300 group-hover/btn:rotate-90 text-blue-400" />
            </button>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
