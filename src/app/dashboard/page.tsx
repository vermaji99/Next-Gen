import { createClient } from "@/lib/supabase";
import { BentoGrid } from "@/components/dashboard/BentoGrid";
import { HeroCard } from "@/components/dashboard/HeroCard";
import { CourseCard } from "@/components/dashboard/CourseCard";
import { ActivityCard } from "@/components/dashboard/ActivityCard";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AchievementCard } from "@/components/dashboard/AchievementCard";
import { QuickActionsCard } from "@/components/dashboard/QuickActionsCard";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { Course } from "@/types/course";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import { AlertCircle, Database, Terminal } from "lucide-react";

async function getCourses(): Promise<{ data: Course[]; error: any }> {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  return { data: (data as Course[]) || [], error };
}

export default async function DashboardPage() {
  const { data: courses, error } = await getCourses();
  
  const isTableMissing = error?.code === 'PGRST205';

  return (
    <DashboardShell>
      <BentoGrid>
        {/* Hero Section */}
        <HeroCard />

        {/* Activity Section */}
        <ActivityCard />

        {/* Stats Section */}
        <StatsCard />

        {/* Achievement Section */}
        <AchievementCard />

        {/* Quick Actions */}
        <QuickActionsCard />

        {/* Dynamic Course Cards or Error State */}
        <Suspense fallback={<CourseGridSkeleton />}>
          {isTableMissing ? (
            <div className="col-span-1 md:col-span-4 lg:col-span-12" suppressHydrationWarning>
              <div className="p-8 rounded-3xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-xl flex flex-col items-center text-center" suppressHydrationWarning>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <Database className="text-amber-500" size={24} />
                </div>
                <h3 className="text-lg font-bold text-amber-500 mb-2">Supabase Table Missing</h3>
                <p className="text-zinc-400 max-w-lg mb-6 text-sm">
                  The <code className="text-zinc-200 bg-white/5 px-1.5 py-0.5 rounded">courses</code> table was not found in your database. 
                  Please run the SQL script provided in the README to set up your schema.
                </p>
                <div className="w-full max-w-md bg-black/40 rounded-xl p-4 text-left border border-white/5 font-mono text-xs text-zinc-500 overflow-x-auto">
                  <div className="flex items-center gap-2 mb-2 text-zinc-400">
                    <Terminal size={14} />
                    <span>SQL Preview</span>
                  </div>
                  <pre>{`create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer default 0,
  icon_name text default 'BookOpen',
  created_at timestamp with time zone default now()
);`}</pre>
                </div>
              </div>
            </div>
          ) : courses.length > 0 ? (
            courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))
          ) : (
            <div className="col-span-1 md:col-span-4 lg:col-span-12" suppressHydrationWarning>
              <div className="bento-card flex flex-col items-center justify-center text-center p-12 border-dashed border-white/10" suppressHydrationWarning>
                <Database className="w-12 h-12 text-zinc-700 mb-4" />
                <h3 className="text-lg font-semibold text-zinc-300">No courses found</h3>
                <p className="text-sm text-zinc-500">Your database is connected but the courses table is empty.</p>
              </div>
            </div>
          )}
        </Suspense>
      </BentoGrid>
    </DashboardShell>
  );
}

function CourseGridSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[260px]">
          <Skeleton className="h-full w-full rounded-3xl" />
        </div>
      ))}
    </>
  );
}
