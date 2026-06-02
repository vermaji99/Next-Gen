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
    <AnimatedCard className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[180px]">
      <div className="relative p-6 h-full flex flex-col justify-between z-10">
        <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
        
        <div className="space-y-3">
          {actions.map((action, i) => (
            <button
              key={i}
              className={cn(
                "w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group",
                action.color === "blue" 
                  ? "bg-blue-600 border-blue-500 text-white hover:bg-blue-500" 
                  : "bg-white/[0.03] border-white/10 text-zinc-300 hover:bg-white/[0.08] hover:text-white"
              )}
            >
              <div className="flex items-center gap-3">
                <action.icon size={18} className={cn(
                  action.color === "blue" ? "text-blue-100" : "text-zinc-500 group-hover:text-blue-400"
                )} />
                <span className="text-sm font-semibold">{action.label}</span>
              </div>
              <Plus size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
