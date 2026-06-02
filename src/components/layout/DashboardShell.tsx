import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { ReactNode } from "react";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden" suppressHydrationWarning>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 relative" suppressHydrationWarning>
        <header className="h-16 flex items-center justify-between px-8 md:px-12 z-30 border-b border-white/[0.05] bg-[#050505]/50 backdrop-blur-md" suppressHydrationWarning>
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium text-zinc-400">Student Workspace</h2>
            <span className="text-zinc-700">/</span>
            <h1 className="text-sm font-semibold text-white">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 border border-white/20 shadow-lg" />
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar" suppressHydrationWarning>
          <div className="p-6 md:p-8 lg:p-12 max-w-[1600px] mx-auto" suppressHydrationWarning>
            {children}
          </div>
        </main>
        
        <MobileNav />
      </div>
    </div>
  );
}
