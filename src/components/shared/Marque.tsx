import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

type LatestNews = {
  id: string;
  title: string;
};

const getLatestNewsApi = async (): Promise<LatestNews[]> => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news", {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    return [];
  }
};

const Marque = async () => {
  const latestNews = await getLatestNewsApi();

  if (!latestNews.length) return null;

  return (
    <div className="sticky top-0 z-10 mt-3 bg-gray-200">
      <div className="mx-auto flex w-[92%] items-center gap-2 py-1.5 sm:w-[94%] sm:gap-3 sm:py-2 lg:w-full lg:max-w-[80vw]">
        {/* label */}
        <div className="shrink-0 rounded bg-red-700 px-2 py-1 text-xs font-bold text-white sm:px-3 sm:text-sm">
          সর্বশেষ
        </div>

        {/* ticker */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <MarqueeText direction="right" duration={20}>
            {latestNews.map((newsItem, index) => (
              <Link
                key={newsItem.id ?? index}
                href={`/news/${newsItem.id}`}
                className="whitespace-nowrap px-2 text-xs font-semibold text-gray-800 hover:text-red-700 sm:text-sm"
              >
                <span className="mr-2 text-gray-500">•</span>
                {newsItem.title}
              </Link>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marque;