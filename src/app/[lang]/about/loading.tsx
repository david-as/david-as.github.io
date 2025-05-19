import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 m-auto">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* Profile Section */}
          <div className="space-y-6">
            <Skeleton className="aspect-square w-full rounded-xl" />
            <div className="space-y-2 text-center">
              <Skeleton className="h-8 w-40 mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
            <div className="flex justify-center space-x-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 w-10 rounded-md" />
                ))}
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-24" />
              <div className="space-y-2">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-5 w-full" />
                  ))}
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-6 w-16" />
              <div className="space-y-4">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-8" />
                      </div>
                      <Skeleton className="h-2 w-full" />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-10 w-40" />
              <div className="space-y-4">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-20 w-full" />
                  ))}
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <div className="space-y-4">
                {Array(2)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border rounded-lg">
                      <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <Skeleton className="h-6 w-48" />
                            <Skeleton className="h-4 w-32" />
                          </div>
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="space-y-2">
                          {Array(4)
                            .fill(0)
                            .map((_, j) => (
                              <Skeleton key={j} className="h-4 w-full" />
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-8 w-40" />
              <Skeleton className="h-16 w-full" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
