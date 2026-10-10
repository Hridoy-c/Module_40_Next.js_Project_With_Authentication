export interface ICategorieType {
  id: string;
  slug: string;
  title: string;
  topicId?: string;
  url?: string;
  scrapable: boolean;
}

export interface IMainNewsType {
  id: string;
  title: string;
  titleAlt: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface IMostReadNewsType {
  id: string;
  title: string;
  link: string;
  rank: number;
}