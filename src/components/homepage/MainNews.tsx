import Link from "next/link";
import { Article, formatDate } from "@/components/homepage/NewsCard";

interface MainNewsTypeProps {
  mainNews: Article[];
}

const MainNewsCard = ({ mainNews }: MainNewsTypeProps) => {
  const [firstNews, ...othersNews] = mainNews;

  return (
    <div>
      <section className="grid gap-5 lg:grid-cols-4">
        {/* main card */}
        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md lg:col-span-2">
          <Link href={`/article/${firstNews?.id}`} className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={firstNews?.imageUrl ?? undefined}
              alt={firstNews?.imageAlt ?? firstNews?.title}
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="space-y-2 p-4 sm:p-5">
              <span className="text-xs font-bold text-red-700 sm:text-sm">
                {firstNews?.category}
              </span>
              <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-900 sm:text-2xl lg:text-3xl">
                {firstNews?.title}
              </h2>
              <p className="line-clamp-3 text-sm text-gray-600 sm:text-base">
                {firstNews?.description}
              </p>
              <time className="block text-xs text-gray-400 sm:text-sm">
                {firstNews?.firstPublished &&
                  formatDate(firstNews.firstPublished)}
              </time>
            </div>
          </Link>
        </article>

        {/* side cards */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          {othersNews.slice(0, 4).map((news) => (
            <article
              key={news.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <h1 className="pl-3 pt-3 text-xs font-bold text-red-700 sm:text-sm">
                {news.category}
              </h1>
              <Link href={`/article/${news.id}`} className="flex gap-3 p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={news.imageUrl ?? undefined}
                  alt={news.imageAlt ?? news.title}
                  className="h-20 w-28 shrink-0 rounded-lg object-cover sm:h-24 sm:w-32"
                />
                <div className="min-w-0">
                  <h3 className="line-clamp-3 text-sm font-bold leading-snug text-gray-900 sm:text-base">
                    {news.title}
                  </h3>
                  <time className="mt-1 block text-xs text-gray-400">
                    {news.firstPublished && formatDate(news.firstPublished)}
                  </time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainNewsCard;