const CategoryLoading = () => {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-[92%] animate-pulse pt-4 pb-8 sm:w-[94%] lg:w-full lg:max-w-[80vw]"
    >
      {/* title */}
      <div className="border-b-2 border-red-200 pb-2">
        <div className="h-6 w-32 rounded bg-gray-200 sm:h-8 sm:w-40" />
      </div>

      {/* cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="aspect-[16/9] w-full bg-gray-200" />
            <div className="space-y-2.5 p-3 sm:p-4">
              <div className="h-3 w-14 rounded bg-gray-200" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-gray-200 sm:h-[18px]" />
                <div className="h-4 w-full rounded bg-gray-200 sm:h-[18px]" />
                <div className="h-4 w-2/3 rounded bg-gray-200 sm:h-[18px]" />
              </div>
              <div className="space-y-2">
                <div className="h-3.5 w-full rounded bg-gray-200" />
                <div className="h-3.5 w-3/4 rounded bg-gray-200" />
              </div>
              <div className="h-3 w-28 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="h-9 w-24 rounded-md bg-gray-200" />
        <div className="h-4 w-12 rounded bg-gray-200" />
        <div className="h-9 w-24 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default CategoryLoading;