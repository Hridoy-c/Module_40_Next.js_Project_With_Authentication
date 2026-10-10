import MainNews from "@/components/homepage/MainNews";
import MostRead from "@/components/homepage/MostRead";
import { Article } from "@/components/homepage/NewsCard";
import NewsSection from "@/components/homepage/NewsSection";

type Section = {
  title: string;
  articles: Article[];
};

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 300 },
  });
  const data = await res.json();

  const allNews: Section[] = (data.data as Section[])
    .map((section) => ({
      ...section,
      articles: section.articles.filter((a) => a.type !== "link"),
    }))
    .filter((section) => section.articles.length > 0);

  const mainNews = allNews[0].articles;

  return (
    <div className="mx-auto w-[92%] pt-4 pb-8 sm:w-[94%] lg:w-full lg:max-w-[80vw]">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Left Side */}
        <div className="min-w-0 lg:col-span-2">
          <MainNews mainNews={mainNews} />

          {allNews.slice(1).map((section, index) => (
            <NewsSection
              key={index}
              title={section.title}
              articles={section.articles}
            />
          ))}
        </div>

        {/* Right Side */}
        <aside className="min-w-0 lg:col-span-1">
          <div className="lg:sticky lg:top-4">
            <MostRead />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;