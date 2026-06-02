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
  try {
    const isEnvConfigured = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && 
                             process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    
    if (!isEnvConfigured) {
      return { data: [], error: 'Missing environment variables' };
    }

    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: false });

    return { data: (data as Course[]) || [], error };
  } catch (err) {
    console.error("Critical error in getCourses:", err);
    return { data: [], error: err };
  }
}

export default async function DashboardPage() {
  const isEnvConfigured = !!(process.env.NEXT_PUBLIC_SUPABASE_URL && 
                           process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  if (!isEnvConfigured) {
    return (
      <DashboardShell>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">Missing Credentials</h2>
          <p className="text-zinc-400 max-w-md mb-8">
            You are seeing this error because the Supabase environment variables are not set in your Vercel project settings.
          </p>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-left w-full max-w-lg">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">How to fix:</h4>
            <ol className="list-decimal list-inside space-y-3 text-sm text-zinc-400">
              <li>Go to your <span className="text-blue-400">Vercel Dashboard</span></li>
              <li>Settings &gt; Environment Variables</li>
              <li>Add <code className="text-blue-300">NEXT_PUBLIC_SUPABASE_URL</code></li>
              <li>Add <code className="text-blue-300">NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>
              <li>Redeploy your project</li>
            </ol>
          </div>
        </div>
      </DashboardShell>
    );
  }

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
