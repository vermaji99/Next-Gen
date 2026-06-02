"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Trophy, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedCard } from "../motion/AnimatedCard";
import { Glow } from "../ui/Glow";

export function HeroCard() {
  return (
    <AnimatedCard className="col-span-1 md:col-span-4 lg:col-span-8 row-span-2 overflow-hidden border-none bg-transparent">
      <div className="relative h-full p-10 md:p-14 flex flex-col justify-between z-10">
        <Glow color="blue" size="lg" className="-top-40 -left-20 opacity-30" />
        <Glow color="indigo" size="md" className="bottom-0 right-0 opacity-20" />
        
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-semibold tracking-wide uppercase"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Premium Learning Path</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Welcome back, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Alex</span>
              </h1>
              <p className="mt-4 text-zinc-400 text-xl max-w-md font-medium leading-relaxed">
                You've completed <span className="text-white">80%</span> of your weekly goals. <br />
                Keep pushing the boundaries.
              </p>
            </motion.div>
          </div>

          <div className="flex gap-6 self-start md:mt-4">
            <motion.div 
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="flex flex-col items-center justify-center w-28 h-32 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl"
            >
              <Flame className="w-9 h-9 text-orange-500 mb-2.5 filter drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
              <span className="text-3xl font-bold text-white">12</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Streak</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }}
              className="flex flex-col items-center justify-center w-28 h-32 rounded-[2rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl"
            >
              <Trophy className="w-9 h-9 text-yellow-500 mb-2.5 filter drop-shadow-[0_0_12px_rgba(234,179,8,0.5)]" />
              <span className="text-3xl font-bold text-white">850</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Points</span>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
          <button className="group relative flex items-center gap-4 px-10 py-5 bg-white text-black rounded-[1.5rem] font-bold transition-all hover:bg-zinc-200 active:scale-95">
            <span className="relative z-10 text-lg">Continue Learning</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform relative z-10" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-[3px] border-[#0B0B0F] bg-zinc-800 overflow-hidden ring-1 ring-white/10">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white font-bold tracking-tight">+1.2k students</span>
              <span className="text-xs text-zinc-500 font-medium">learning with you today</span>
            </div>
          </div>
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
