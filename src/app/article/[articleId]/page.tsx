import { notFound } from "next/navigation";
import MostRead from "@/components/homepage/MostRead";
import { formatDate } from "@/components/homepage/NewsCard";

type Block =
  | { type: "text"; text: string }
  | { type: "subheading"; text: string }
  | {
      type: "image";
      url: string;
      caption?: string;
      altText?: string;
      copyrightHolder?: string;
    }
  | { type: string };

type ArticleData = {
  id: string;
  title: string;
  link: string;
  firstPublished: string | null;
  byline: { name: string; role?: string }[];
  topics: { id: string; name: string }[];
  tags: string[];
  imageUrl: string | null;
  body: Block[];
  source: string;
  sourceUrl: string;
};

const getArticle = async (id: string): Promise<ArticleData | null> => {
  try {
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${id}`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data ?? null;
  } catch {
    return null;
  }
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) => {
  const { articleId } = await params;
  const article = await getArticle(articleId);
  return { title: article ? `${article.title} | Bangla Bulletin` : "Bangla Bulletin" };
};

const ArticleDetailsPage = async ({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) => {
  const { articleId } = await params;
  const article = await getArticle(articleId);

  if (!article) notFound();

  const author = article.byline?.[0];

  return (
    <div className="mx-auto w-[92%] pt-4 pb-8 sm:w-[94%] lg:w-full lg:max-w-[80vw]">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {/* Article */}
        <article className="min-w-0 lg:col-span-2">
          {article.topics?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {article.topics.map((topic) => (
                <span
                  key={topic.id}
                  className="rounded bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-700"
                >
                  {topic.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
            {article.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-gray-200 pb-4 text-sm text-gray-600">
            {author && (
              <span className="font-medium text-gray-800">
                {author.name.trim()}
                {author.role ? `, ${author.role}` : ""}
              </span>
            )}
            {article.firstPublished && (
              <time dateTime={article.firstPublished}>
                {formatDate(article.firstPublished)}
              </time>
            )}
          </div>

          {/* Body */}
          <div className="mt-6 space-y-5">
            {article.body.map((block, index) => {
              if (block.type === "subheading" && "text" in block) {
                return (
                  <h2
                    key={index}
                    className="pt-2 text-xl font-bold leading-snug text-gray-900 sm:text-2xl"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "text" && "text" in block) {
                return block.text
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, i) => (
                    <p
                      key={`${index}-${i}`}
                      className="text-base leading-8 text-gray-800 sm:text-lg"
                    >
                      {line}
                    </p>
                  ));
              }

              if (block.type === "image" && "url" in block) {
                return (
                  <figure key={index} className="my-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={block.url}
                      alt={block.altText ?? block.caption ?? article.title}
                      loading="lazy"
                      className="w-full rounded-lg object-cover"
                    />
                    {(block.caption || block.copyrightHolder) && (
                      <figcaption className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                        {block.caption}
                        {block.copyrightHolder && (
                          <span className="block text-gray-400">
                            ছবির উৎস, {block.copyrightHolder}
                          </span>
                        )}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return null;
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-600">
            {article.tags?.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p>
              সূত্র:{" "}
              <a
                href={article.sourceUrl ?? article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-700 hover:underline"
              >
                {article.source}
              </a>
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="min-w-0 lg:col-span-1">
          <div className="lg:sticky lg:top-4">
            <MostRead />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ArticleDetailsPage;