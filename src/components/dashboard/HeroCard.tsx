"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Trophy, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedCard } from "../motion/AnimatedCard";
import { Glow } from "../ui/Glow";

export function HeroCard() {
  return (
    <AnimatedCard className="col-span-1 md:col-span-4 lg:col-span-8 row-span-2 overflow-hidden">
      <div className="relative h-full p-8 md:p-10 flex flex-col justify-between z-10">
        <Glow color="blue" size="lg" className="-top-20 -left-20" />
        <Glow color="indigo" size="md" className="bottom-0 right-0 opacity-50" />
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium"
            >
              <Sparkles size={14} />
              <span>Premium Learning Path</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Alex</span>
              </h1>
              <p className="mt-4 text-zinc-400 text-lg max-w-md">
                You've completed 80% of your weekly goals. Your consistency is paying off!
              </p>
            </motion.div>
          </div>

          <div className="flex gap-4 self-start">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center w-24 h-28 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
            >
              <Flame className="w-8 h-8 text-orange-500 mb-2 filter drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
              <span className="text-2xl font-bold">12</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Streak</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center w-24 h-28 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
            >
              <Trophy className="w-8 h-8 text-yellow-500 mb-2 filter drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
              <span className="text-2xl font-bold">850</span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Points</span>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
          <button className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold transition-all hover:bg-zinc-200 overflow-hidden">
            <span className="relative z-10">Continue Learning</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
          
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0B0F] bg-zinc-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-[#0B0B0F] bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400">
              +12
            </div>
          </div>
          <span className="text-sm text-zinc-500 font-medium">Joined by 1.2k students today</span>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>
    </AnimatedCard>
  );
}
