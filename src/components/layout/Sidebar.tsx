"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Settings,
  User,
  LogOut,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { id: "courses", icon: BookOpen, label: "My Courses", href: "#" },
  { id: "stats", icon: BarChart3, label: "Analytics", href: "#" },
  { id: "achievements", icon: Award, label: "Achievements", href: "#" },
  { id: "profile", icon: User, label: "Profile", href: "#" },
  { id: "settings", icon: Settings, label: "Settings", href: "#" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 90 : 280 }}
      className={cn(
        "relative hidden md:flex flex-col h-screen border-r border-white/[0.08] bg-[#050505] p-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-40"
      )}
    >
      <div className="flex items-center gap-4 mb-12 px-2 h-12">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] flex-shrink-0 ring-1 ring-white/20">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex flex-col"
            >
              <span className="font-black text-2xl tracking-tighter text-white leading-none">
                LUMINA
              </span>
              <span className="text-[10px] font-bold text-blue-500 tracking-[0.2em] mt-1 uppercase">
                Enterprise
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative flex items-center w-full h-12 px-4 rounded-2xl transition-all duration-300 group overflow-hidden",
                isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-white/[0.03] border border-white/[0.08] shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className={cn(
                "w-5 h-5 z-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110", 
                isActive ? "text-blue-400" : "group-hover:text-white"
              )} />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="ml-4 font-semibold text-sm z-10 whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {isActive && !isCollapsed && (
                <motion.div 
                  layoutId="active-dot"
                  className="absolute right-4 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" 
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/[0.08] space-y-4">
        <button className="flex items-center w-full h-12 px-4 rounded-2xl text-zinc-500 hover:text-white hover:bg-white/[0.03] transition-all group">
          <LogOut className="w-5 h-5 flex-shrink-0 group-hover:text-red-400 group-hover:-translate-x-1 transition-all" />
          {!isCollapsed && <span className="ml-4 font-semibold text-sm">Sign Out</span>}
        </button>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-white/[0.08] bg-[#050505] flex items-center justify-center text-zinc-500 hover:text-white transition-all z-50 shadow-2xl hover:scale-110 active:scale-90"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>
    </motion.aside>
  );
}
