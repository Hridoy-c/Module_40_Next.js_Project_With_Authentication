import Link from "next/link";

export type Article = {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string | null;
};

export  const formatDate = (iso: string) => {
  const d = new Date(iso);
  const date = d.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });
  const time = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Asia/Dhaka",
  });
  return `${date} এ ${time}`;
};

const NewsCard = ({ article }: { article: Article }) => {
  return (
    <Link
      href={`/article/${article.id}`}
      
     
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
    >
      {article.imageUrl && (
        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.imageUrl}
            alt={article.imageAlt ?? article.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-red-700">
            {article.category}
          </span>
          {article.isLive && (
            <span className="rounded bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
              লাইভ
            </span>
          )}
        </div>

        <h3 className="line-clamp-3 text-base font-bold leading-snug text-gray-900 group-hover:text-red-700">
          {article.title}
        </h3>

        {article.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
            {article.description}
          </p>
        )}

        {article.firstPublished && (
          <p className="mt-auto pt-1 text-xs text-gray-400">
            {formatDate(article.firstPublished)}
          </p>
        )}
      </div>
    </Link>
  );
};

export default NewsCard;