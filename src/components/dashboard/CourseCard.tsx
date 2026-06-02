"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Course } from "@/types/course";
import { AnimatedCard } from "../motion/AnimatedCard";
import { ProgressBar } from "./ProgressBar";
import { Glow } from "../ui/Glow";
import { Calendar, Clock } from "lucide-react";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  // @ts-ignore
  const Icon = LucideIcons[course.icon_name] || LucideIcons.BookOpen;

  return (
    <AnimatedCard className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[280px] border-none bg-transparent">
      <div className="relative p-8 flex flex-col justify-between h-full z-10 group">
        <Glow color="blue" size="sm" className="-top-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div>
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-[1.25rem] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 group-hover:text-zinc-300 transition-colors">
                <Clock size={12} className="text-blue-500" />
                2.5h
              </span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1 tracking-tight">
            {course.title}
          </h3>
          <p className="text-zinc-500 text-sm mt-2 flex items-center gap-2 font-medium">
            <Calendar size={14} className="text-zinc-600" />
            {new Date(course.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </p>
        </div>

        <div className="mt-10">
          <ProgressBar value={course.progress} showValue />
        </div>
      </div>
      
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.1),transparent_50%)]" />
      </div>
    </AnimatedCard>
  );
}
