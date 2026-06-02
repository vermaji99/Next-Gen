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
      animate={{ width: isCollapsed ? 80 : 260 }}
      className={cn(
        "relative hidden md:flex flex-col h-screen border-r border-white/10 bg-[#0B0B0F]/50 backdrop-blur-xl p-4 transition-all duration-300 ease-in-out z-40"
      )}
    >
      <div className="flex items-center gap-3 mb-10 px-2 h-10">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] flex-shrink-0">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-bold text-xl tracking-tight whitespace-nowrap text-white"
            >
              Lumina
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative flex items-center w-full p-3 rounded-xl transition-all duration-200 group",
                isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-white/[0.05] rounded-xl border border-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon className={cn("w-6 h-6 z-10 flex-shrink-0", isActive && "text-blue-400")} />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="ml-3 font-medium z-10 whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-white/10 space-y-2">
        <button className="flex items-center w-full p-3 rounded-xl text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors group">
          <LogOut className="w-6 h-6 flex-shrink-0 group-hover:text-red-400 transition-colors" />
          {!isCollapsed && <span className="ml-3 font-medium">Logout</span>}
        </button>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 rounded-full border border-white/10 bg-[#0B0B0F] flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-50 shadow-xl"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>
    </motion.aside>
  );
}
