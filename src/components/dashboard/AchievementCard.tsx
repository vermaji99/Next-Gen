"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Zap, Target } from "lucide-react";
import { AnimatedCard } from "../motion/AnimatedCard";
import { cn } from "@/lib/utils";

const achievements = [
  { icon: Star, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { icon: Zap, color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Target, color: "text-red-500", bg: "bg-red-500/10" },
];

export function AchievementCard() {
  return (
    <AnimatedCard className="col-span-1 md:col-span-4 lg:col-span-4 min-h-[220px]">
      <div className="relative p-8 flex flex-col justify-between h-full z-10">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Milestones</h3>
          <p className="text-sm text-zinc-500 font-medium">3 badges unlocked this month</p>
        </div>

        <div className="flex gap-6 mt-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              whileHover={{ y: -8, rotate: 5, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className={cn(
                "w-16 h-16 rounded-[1.25rem] flex items-center justify-center border border-white/[0.08] shadow-2xl relative group/badge",
                item.bg
              )}
            >
              <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/badge:opacity-100 transition-opacity" />
              <item.icon className={cn("w-8 h-8 relative z-10", item.color)} />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0B0B0F] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>
            </motion.div>
          ))}
          <div className="w-16 h-16 rounded-[1.25rem] border-2 border-dashed border-white/5 flex items-center justify-center text-zinc-700 hover:text-zinc-500 transition-colors cursor-pointer group/more">
            <Award size={28} className="transition-transform group-hover/more:scale-110" />
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}
