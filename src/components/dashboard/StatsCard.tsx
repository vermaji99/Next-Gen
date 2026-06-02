"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, BookOpen, Clock } from "lucide-react";
import { AnimatedCard } from "../motion/AnimatedCard";
import { Glow } from "../ui/Glow";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Courses", value: "14", icon: BookOpen, color: "blue", trend: "+2" },
  { label: "Hours", value: "124", icon: Clock, color: "indigo", trend: "+12%" },
  { label: "Average", value: "84%", icon: TrendingUp, color: "purple", trend: "+5%" },
];

export function StatsCard() {
  return (
    <AnimatedCard className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[180px]">
      <div className="relative p-6 flex flex-col justify-between h-full z-10">
        <div className="grid grid-cols-3 gap-4 h-full">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col justify-between p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center mb-4",
                stat.color === "blue" ? "bg-blue-500/10 text-blue-400" :
                stat.color === "indigo" ? "bg-indigo-500/10 text-indigo-400" :
                "bg-purple-500/10 text-purple-400"
              )}>
                <stat.icon size={18} />
              </div>
              <div>
                <span className="block text-2xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{stat.label}</span>
                <span className="block text-[10px] text-emerald-400 font-bold mt-1">{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
