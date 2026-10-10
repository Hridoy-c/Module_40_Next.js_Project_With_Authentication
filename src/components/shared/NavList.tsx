import Link from "next/link";
import { getCategoriesApi } from "@/services/Categories";
import  ICategorieType  from "@/types/All-Types";

const NavList = async () => {
  const categoriesData = await getCategoriesApi();
  const categories = categoriesData.filter(
    (category) => category.scrapable === true,
  );

  if (!categories.length) return null;

  console.log(categoriesData);

  return (
    <nav aria-label="Categories" className="border-b border-gray-200 bg-white">
      <div className="mx-auto w-[92%] overflow-x-auto [scrollbar-width:none] sm:w-[94%] lg:w-full lg:max-w-[80vw] [&::-webkit-scrollbar]:hidden">
        <ul className="mx-auto flex w-max items-center gap-5 py-2.5 text-sm sm:gap-6 sm:py-3 sm:text-base">
          {categories.map((category: ICategorieType ) => (
            <li key={category.id}>
              <Link
                href={`/category/${category.slug}`}
                className="whitespace-nowrap font-medium text-gray-800 transition hover:text-red-700"
              >
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavList;