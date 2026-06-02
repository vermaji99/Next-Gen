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
    <AnimatedCard className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[180px]">
      <div className="relative p-6 flex flex-col justify-between h-full z-10">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Recent Achievements</h3>
          <p className="text-sm text-zinc-500 mb-6">3 badges earned this month</p>
        </div>

        <div className="flex gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              whileHover={{ y: -5, rotate: 5 }}
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl",
                item.bg
              )}
            >
              <item.icon className={cn("w-7 h-7", item.color)} />
            </motion.div>
          ))}
          <div className="w-14 h-14 rounded-2xl border-2 border-dashed border-white/5 flex items-center justify-center text-zinc-600">
            <Award size={24} />
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}
