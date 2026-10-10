export default interface ICategorieType {
  id: string;
  slug: string;
  title: string;
  topicId?: string;
  url?: string;
  scrapable: boolean;
}

export default interface IMainNewsType {
  id: string;
  title: string;
  titleAlt: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export default interface IMostReadNewsType {
  id: string;
  title: string;
  link: string;
  rank: number;
}