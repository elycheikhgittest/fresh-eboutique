export interface IArticle {
  categorie: number;
  subcategorie: number;
  lieu: number;
  prix: number;
  description: string;
  dateadd: string;
}

export interface IArticleInDb extends IArticle {
  id: number;
}
