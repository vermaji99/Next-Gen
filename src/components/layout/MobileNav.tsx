"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart3, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "Dash", href: "/dashboard" },
  { id: "courses", icon: BookOpen, label: "Learn", href: "#" },
  { id: "stats", icon: BarChart3, label: "Stats", href: "#" },
  { id: "profile", icon: User, label: "You", href: "#" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-16 bg-[#0B0B0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-around px-4 z-50 shadow-2xl">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              "relative flex flex-col items-center justify-center gap-1 transition-colors",
              isActive ? "text-blue-500" : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="mobile-nav-pill"
                className="absolute -top-1 w-1 h-1 bg-blue-500 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase tracking-tighter">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
