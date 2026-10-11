const bars = [
  "w-28 sm:w-48",
  "w-40 sm:w-64",
  "w-32 sm:w-56",
  "w-36 sm:w-52",
  "w-28 sm:w-60",
];

const MarqueSkeleton = () => {
  return (
    <div aria-hidden="true" className="sticky top-0 z-10 mt-3 bg-gray-200">
      <div className="mx-auto flex w-[92%] items-center gap-2 py-1.5 sm:w-[94%] sm:gap-3 sm:py-2 lg:w-full lg:max-w-[80vw]">
        {/* label placeholder */}
        <div className="h-6 w-16 shrink-0 animate-pulse rounded bg-gray-300 sm:h-7 sm:w-20" />

        {/* ticker placeholder */}
        <div className="flex min-w-0 flex-1 animate-pulse items-center gap-4 overflow-hidden">
          {bars.map((size, index) => (
            <div
              key={index}
              className={`h-3.5 shrink-0 rounded bg-gray-300 sm:h-4 ${size}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueSkeleton;