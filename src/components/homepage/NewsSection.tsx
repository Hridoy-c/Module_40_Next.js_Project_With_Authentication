import NewsCard, { Article } from "./NewsCard";

const NewsSection = ({ title, articles }: { title: string; articles: Article[] }) => {
  if (!articles?.length) return null;

  

  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="border-b-2 border-red-700 pb-2 text-lg font-bold text-gray-900 sm:text-xl">
        {title}
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;