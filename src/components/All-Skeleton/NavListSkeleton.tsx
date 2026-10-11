// 7 bars, because the nav has 7 scrapable categories
const bars = [
  "w-12 sm:w-16",
  "w-8 sm:w-10",
  "w-14 sm:w-[4.5rem]",
  "w-12 sm:w-14",
  "w-9 sm:w-12",
  "w-14 sm:w-16",
  "w-10 sm:w-12",
];

const NavListSkeleton = () => {
  return (
    <nav aria-hidden="true" className="border-b border-gray-200 bg-white">
      <div className="mx-auto w-[92%] overflow-hidden sm:w-[94%] lg:w-full lg:max-w-[80vw]">
        <ul className="mx-auto flex w-max animate-pulse items-center gap-5 py-3 sm:gap-6 sm:py-[14px]">
          {bars.map((size, index) => (
            <li key={index}>
              <div className={`h-4 rounded bg-gray-200 sm:h-5 ${size}`} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavListSkeleton;