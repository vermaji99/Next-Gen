"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "../motion/AnimatedCard";
import { Info } from "lucide-react";

export function ActivityCard() {
  const [mounted, setMounted] = useState(false);
  const [activityData, setActivityData] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate 84 days of mock data (12 weeks)
    setActivityData(Array.from({ length: 84 }, () => Math.floor(Math.random() * 5)));
  }, []);

  if (!mounted) {
    return (
      <AnimatedCard className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2">
        <div className="p-6 h-full flex flex-col justify-center items-center">
          <div className="w-full h-40 animate-pulse bg-white/5 rounded-xl" />
        </div>
      </AnimatedCard>
    );
  }

  return (
    <AnimatedCard className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2">
      <div className="relative p-6 h-full flex flex-col z-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h3 className="text-lg font-bold text-white">Learning Activity</h3>
            <p className="text-sm text-zinc-500">Your consistency over 12 weeks</p>
          </div>
          <Info size={16} className="text-zinc-600 cursor-help" />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-12 gap-1.5 w-full">
            {activityData.map((level, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.005 }}
                whileHover={{ scale: 1.2, zIndex: 20 }}
                className={cn(
                  "aspect-square rounded-[2px] transition-colors duration-300 cursor-pointer",
                  level === 0 ? "bg-white/[0.03]" :
                  level === 1 ? "bg-blue-900/30" :
                  level === 2 ? "bg-blue-700/50" :
                  level === 3 ? "bg-blue-600/70" :
                  "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                )}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-6 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
            <span>Last 12 Weeks</span>
            <div className="flex gap-2 items-center">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((l) => (
                  <div 
                    key={l} 
                    className={cn(
                      "w-2.5 h-2.5 rounded-[1px]",
                      l === 0 ? "bg-white/[0.03]" :
                      l === 1 ? "bg-blue-900/30" :
                      l === 2 ? "bg-blue-700/50" :
                      l === 3 ? "bg-blue-600/70" :
                      "bg-blue-500"
                    )} 
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex justify-between items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5">
            <div>
              <span className="block text-xs text-zinc-500 font-bold uppercase tracking-tighter">Current Goal</span>
              <span className="text-sm font-bold text-white">18 / 20 hours</span>
            </div>
            <div className="text-right">
              <span className="block text-xs text-zinc-500 font-bold uppercase tracking-tighter">Status</span>
              <span className="text-sm font-bold text-emerald-400">On Track</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}
