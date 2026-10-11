import MainNewsSkeleton from "./MainNewsSkeleton";

const HomeSkeleton = () => {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-[92%] pt-4 pb-8 sm:w-[94%] lg:w-full lg:max-w-[80vw]"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Left side */}
        <div className="min-w-0 lg:col-span-2">
          <MainNewsSkeleton />

          {/* one section placeholder */}
          <div className="mt-8 animate-pulse sm:mt-10">
            <div className="h-6 w-40 rounded bg-gray-200 sm:h-7" />
            <div className="mt-2 h-0.5 w-full bg-red-200" />
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
                >
                  <div className="aspect-[16/9] w-full bg-gray-200" />
                  <div className="space-y-2 p-3 sm:p-4">
                    <div className="h-3 w-14 rounded bg-gray-200" />
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-2/3 rounded bg-gray-200" />
                    <div className="h-3 w-28 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side: Most Read */}
        <aside className="min-w-0 lg:col-span-1">
          <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="mb-4 h-5 w-28 rounded bg-gray-200 sm:h-6" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:gap-y-4 md:grid-cols-2 lg:grid-cols-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 shrink-0 rounded bg-rose-100 sm:h-7 sm:w-7" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-full rounded bg-gray-200" />
                    <div className="h-4 w-2/3 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomeSkeleton;
