const Line = ({ className }: { className: string }) => (
  <div className={`rounded bg-gray-200 ${className}`} />
);

const Paragraph = () => (
  <div className="space-y-3">
    <Line className="h-4 w-full sm:h-5" />
    <Line className="h-4 w-full sm:h-5" />
    <Line className="h-4 w-full sm:h-5" />
    <Line className="h-4 w-3/4 sm:h-5" />
  </div>
);

const ArticleLoading = () => {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-[92%] pt-4 pb-8 sm:w-[94%] lg:w-full lg:max-w-[80vw]"
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Article */}
        <div className="min-w-0 animate-pulse lg:col-span-2">
          {/* back button */}
          <div className="mb-4 h-8 w-28 rounded-md bg-gray-200" />

          {/* topics */}
          <div className="mb-3 flex gap-2">
            <Line className="h-5 w-14" />
            <Line className="h-5 w-12" />
            <Line className="h-5 w-16" />
          </div>

          {/* title */}
          <div className="space-y-3">
            <Line className="h-7 w-full sm:h-9 lg:h-10" />
            <Line className="h-7 w-2/3 sm:h-9 lg:h-10" />
          </div>

          {/* byline */}
          <div className="mt-3 flex flex-wrap gap-3 border-b border-gray-200 pb-4">
            <Line className="h-4 w-44" />
            <Line className="h-4 w-36" />
          </div>

          {/* body */}
          <div className="mt-6 space-y-6">
            <div className="aspect-[16/9] w-full rounded-lg bg-gray-200" />
            <Line className="h-3 w-2/3 sm:h-4" />
            <Paragraph />
            <Paragraph />
            <Line className="h-6 w-1/2 sm:h-7" />
            <Paragraph />
            <Paragraph />
          </div>
        </div>

        {/* Sidebar: Most Read */}
        <aside className="min-w-0 lg:col-span-1">
          <div className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5 lg:sticky lg:top-13">
            <div className="mb-4 h-5 w-28 rounded bg-gray-200 sm:h-6" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:gap-y-4 md:grid-cols-2 lg:grid-cols-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 shrink-0 rounded bg-rose-100 sm:h-7 sm:w-7" />
                  <div className="flex-1 space-y-2">
                    <Line className="h-4 w-full" />
                    <Line className="h-4 w-2/3" />
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

export default ArticleLoading;