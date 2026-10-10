import ICategorieType from "@/types/All-Types";

export const getCategoriesApi = async (): Promise<ICategorieType[]>  => {
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    if (!res.ok) return [];
    const data = await res.json();
    return data.data;
  } catch {
    return [];
  }
};