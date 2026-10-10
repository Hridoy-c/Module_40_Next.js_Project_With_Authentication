import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const getLatestNewsApi = async () => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news");
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

  return (
    <div className="bg-gray-200 mt-3">
      <div className=" py-2   max-w-[80vw] mx-auto">
      <div className="flex">
        <div className="">সর্বশেষ</div>
        <MarqueeText direction="right" duration={20}>
          <div className="">
            {latestNews.map((newsItem: any, index: number) => (
              <Link
                key={index}
                href={`/news/${newsItem.id}`}
                className="px-2 py-1 text-sm font-semibold text-gray-800 hover:text-blue-600"
              >
                <span className="mr-2 text-gray-600">•</span> {newsItem.title}
              </Link>
            ))}
          </div>
        </MarqueeText>
      </div>
    </div>
    </div>
  );
};

export default Marque;
