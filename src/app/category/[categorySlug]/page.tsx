import Link from "next/link";
import { notFound } from "next/navigation";
import NewsCard, { Article } from "@/components/homepage/NewsCard";

type CategoryResponse = {
  title: string;
  slug: string;
  page: number;
  pageCount: number;
  data: Article[];
};

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ categorySlug: string }>;
  searchParams: Promise<{ page?: string }>;
}) => {
  const { categorySlug } = await params;
  const { page } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categorySlug}?page=${currentPage}`,
    { next: { revalidate: 300 } },
  );

  if (!res.ok) notFound();

  const category: CategoryResponse = await res.json();
  const articles = category.data.filter((a) => a.type !== "link");

  return (
    <div className="mx-auto w-[92%] pt-4 pb-8 sm:w-[94%] lg:w-full lg:max-w-[80vw]">
      <h1 className="border-b-2 border-red-700 pb-2 text-xl font-bold text-gray-900 sm:text-2xl">
        {category.title}
      </h1>

      {articles.length === 0 ? (
        <p className="mt-6 text-gray-600">এই বিভাগে কোনো খবর পাওয়া যায়নি।</p>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* pagination */}
      {category.pageCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-3 text-sm">
          {currentPage > 1 && (
            <Link
              href={`/category/${categorySlug}?page=${currentPage - 1}`}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 hover:border-red-700 hover:text-red-700"
            >
              আগের পাতা
            </Link>
          )}
          <span className="text-gray-600">
            {currentPage.toLocaleString("bn-BD")} /{" "}
            {category.pageCount.toLocaleString("bn-BD")}
          </span>
          {currentPage < category.pageCount && (
            <Link
              href={`/category/${categorySlug}?page=${currentPage + 1}`}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 hover:border-red-700 hover:text-red-700"
            >
              পরের পাতা
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;