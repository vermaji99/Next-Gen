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
    <AnimatedCard className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[260px]">
      <div className="relative p-6 flex flex-col justify-between h-full z-10 group">
        <Glow color="blue" size="sm" className="-top-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/30 transition-all duration-300">
              <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="flex gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-zinc-800/50 border border-white/5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                <Clock size={10} />
                2.5h left
              </span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {course.title}
          </h3>
          <p className="text-zinc-500 text-sm mt-1 flex items-center gap-1">
            <Calendar size={12} />
            Started {new Date(course.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="mt-8">
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
