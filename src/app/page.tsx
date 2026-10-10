import MainNews from "@/components/homepage/MainNews";
import MostRead from "@/components/homepage/MostRead";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const allNews = data.data;
  const mainNews = allNews[0].articles;

  return (
    <div className="  mx-auto min-h-screen w-full max-w-[80vw] pt-4 px-4 pt-1 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Left Side */}
        <div className="min-w-0 lg:col-span-2">
          <MainNews mainNews={mainNews} />
        </div>

        {/* Right Side */}
        <aside className="min-w-0 p-3 sm:p-4 lg:p-6  lg:col-span-1">
          <div className="lg:sticky lg:top-4">
            <MostRead />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
