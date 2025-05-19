import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoading() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 m-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <Skeleton className="h-12 w-48 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="mb-8">
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="mb-8">
            <Skeleton className="h-10 w-full mb-6" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-full overflow-hidden border rounded-lg"
                  >
                    <Skeleton className="h-48 w-full" />
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <Skeleton className="h-5 w-16" />
                          <Skeleton className="h-5 w-16" />
                        </div>
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                    <div className="p-4 pt-0 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Skeleton className="h-8 w-8 rounded-full" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/4 space-y-6">
          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16" />
                  ))}
              </div>
            </div>
          </div>

          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="p-4 grid gap-4">
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex gap-2">
                    <Skeleton className="h-16 w-16 rounded-md" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="border rounded-lg">
            <div className="p-4 border-b">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-48 mt-2" />
            </div>
            <div className="p-4">
              <div className="grid gap-2">
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
