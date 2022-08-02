/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
//
import { isloginFromRequest } from "../utiles/islogin.ts";
import Navbar from "../islands/Navbar.tsx";

import ArticleComponent from "../component/articleComponent.tsx";
import { IArticlesItemAndPageNumber } from "../interfaces/mod.ts";

import NotFound from "../component/notFound2.jsx";
import PaginationCompo from "../islands/pagination.tsx";
import { getArticles } from "../db_services/artilces/list.ts";
import { itemPerPage } from "../config/config.ts";

export const handler: Handlers<IArticlesItemAndPageNumber | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const pageN = parseInt(url.searchParams.get("_page") || "1");
    const toRender: IArticlesItemAndPageNumber = {
      pageN,
      articles: [],
      isLogin: false,
    };

    try {
      const skip = (pageN - 1) * itemPerPage;
      const articles = await getArticles(skip);
      console.log({ articles });
      if (articles) {
        toRender.articles = articles;
      }

      toRender.isLogin = await isloginFromRequest(req);

      return ctx.render(toRender);
    } catch (error) {
      console.log({ error });
      return ctx.render(null);
    }
  },
};
export default function Home(
  { data }: PageProps<IArticlesItemAndPageNumber | null>,
) {
  if (!data) {
    return <NotFound />;
  }

  return (
    <Fragment>
      <Head>
        <title>home in head</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar isLogin={data.isLogin} />
        <header>
          <h1>
            لائحة اﻹعلانات
          </h1>
        </header>
        <div>
          <PaginationCompo id={data.pageN} />
        </div>

        <div class="card-container">
          {data.articles.map((item) => <ArticleComponent {...item} />)}
        </div>
      </body>
    </Fragment>
  );
}
