import Link from "next/link";

export const metadata = {
  title: "পাতাটি পাওয়া যায়নি | Bangla Bulletin",
};

const NotFound = () => {
  return (
    <div className="mx-auto flex w-[92%] flex-col items-center justify-center py-16 text-center sm:w-[94%] sm:py-24 lg:max-w-[80vw]">
      <p className="text-7xl font-bold text-red-700 sm:text-9xl">৪০৪</p>

      <h1 className="mt-4 text-xl font-bold text-gray-900 sm:text-3xl">
        দুঃখিত, পাতাটি খুঁজে পাওয়া যায়নি
      </h1>

      <p className="mt-3 max-w-md text-sm text-gray-600 sm:text-base">
        আপনি যে পাতাটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন করা হয়েছে, অথবা
        লিংকটি ভুল।
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-md bg-red-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
        >
          হোমপেজে ফিরে যান
        </Link>
        <Link
          href="/category/politics"
          className="rounded-md border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-red-700 hover:text-red-700"
        >
          সর্বশেষ খবর দেখুন
        </Link>
      </div>
    </div>
  );
};

export default NotFound;