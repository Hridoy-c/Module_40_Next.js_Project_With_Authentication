import Link from "next/link";


import { getCategoriesApi } from "@/services/Categories";
import ICategorieType from "@/types/All-Types";

const NavList = async () => {
  const categoriesData = await getCategoriesApi();
  const sortedCategories = categoriesData.filter((category)=> category.scrapable === true);


  return (
    <div>
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap px-3 pt-3 sm:gap-5 sm:px-4 sm:pt-3 md:justify-center">
        {sortedCategories.map((category: ICategorieType, index: number) => (
        <div key={index}>
          <h1>
            <Link href={`/category/${category.slug}`}>{category.title}</Link>
          </h1>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default NavList;
