"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, BookOpen, Clock } from "lucide-react";
import { AnimatedCard } from "../motion/AnimatedCard";
import { Glow } from "../ui/Glow";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Active Courses", value: "14", icon: BookOpen, color: "blue", trend: "+2 this week" },
  { label: "Learning Hours", value: "124.5", icon: Clock, color: "indigo", trend: "+12% vs last month" },
  { label: "Completion Rate", value: "84%", icon: TrendingUp, color: "purple", trend: "Top 5% of students" },
];

export function StatsCard() {
  return (
    <AnimatedCard className="col-span-1 md:col-span-4 lg:col-span-4 min-h-[220px]">
      <div className="relative p-8 flex flex-col justify-between h-full z-10">
        <div className="space-y-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center justify-between group/stat">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                  stat.color === "blue" ? "bg-blue-500/10 text-blue-400 group-hover/stat:bg-blue-500/20" :
                  stat.color === "indigo" ? "bg-indigo-500/10 text-indigo-400 group-hover/stat:bg-indigo-500/20" :
                  "bg-purple-500/10 text-purple-400 group-hover/stat:bg-purple-500/20"
                )}>
                  <stat.icon size={22} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white tracking-tighter">{stat.value}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">{stat.trend}</span>
                  </div>
                </div>
              </div>
              <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                <div className={cn(
                  "h-full rounded-full transition-all duration-1000",
                  stat.color === "blue" ? "bg-blue-500 w-2/3" :
                  stat.color === "indigo" ? "bg-indigo-500 w-1/2" :
                  "bg-purple-500 w-4/5"
                )} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
