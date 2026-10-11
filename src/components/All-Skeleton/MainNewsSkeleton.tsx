const Line = ({ className }: { className: string }) => (
  <div className={`rounded bg-gray-200 ${className}`} />
);

const MainNewsSkeleton = () => {
  return (
    <section aria-hidden="true" className="grid animate-pulse gap-5 lg:grid-cols-4">
      {/* main card */}
      <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm lg:col-span-2">
        <div className="aspect-[16/9] w-full bg-gray-200" />
        <div className="space-y-3 p-4 sm:p-5">
          <Line className="h-3 w-16 sm:h-4" />
          <div className="space-y-2">
            <Line className="h-6 w-full sm:h-7 lg:h-8" />
            <Line className="h-6 w-3/4 sm:h-7 lg:h-8" />
          </div>
          <div className="space-y-2">
            <Line className="h-4 w-full" />
            <Line className="h-4 w-full" />
            <Line className="h-4 w-2/3" />
          </div>
          <Line className="h-3 w-32 sm:h-4" />
        </div>
      </article>

      {/* side cards */}
      <div className="flex flex-col gap-4 lg:col-span-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="px-3 pt-3">
              <Line className="h-3 w-14 sm:h-4" />
            </div>
            <div className="flex gap-3 p-3">
              <div className="h-20 w-28 shrink-0 rounded-lg bg-gray-200 sm:h-24 sm:w-32" />
              <div className="min-w-0 flex-1 space-y-2">
                <Line className="h-4 w-full" />
                <Line className="h-4 w-full" />
                <Line className="h-4 w-2/3" />
                <Line className="h-3 w-24" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MainNewsSkeleton;