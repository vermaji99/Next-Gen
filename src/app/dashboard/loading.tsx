import { DashboardShell } from "@/components/layout/DashboardShell";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <DashboardShell>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Hero Skeleton */}
        <div className="col-span-1 md:col-span-4 lg:col-span-8 row-span-2">
          <Skeleton className="h-full w-full rounded-3xl" />
        </div>

        {/* Activity Skeleton */}
        <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2">
          <Skeleton className="h-full w-full rounded-3xl" />
        </div>

        {/* Other Skeletons */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="col-span-1 md:col-span-2 lg:col-span-4 min-h-[180px]">
            <Skeleton className="h-full w-full rounded-3xl" />
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
