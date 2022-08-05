import { IArticleInDb } from "./interface.ts";

export interface IArticlesItemAndPageNumber {
  articles: IArticleInDb[];
  pageN: number;
  isLogin: boolean;
}

export interface IUser {
  username: string;
  password: string;
}

export interface ILoginState {
  isLogin: boolean;
}

export interface IMessage {
  message: string;
  isLogin: boolean;
}
