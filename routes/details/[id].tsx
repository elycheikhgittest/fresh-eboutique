/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import ArticleComponent from "../../component/articleDetails.tsx";
import NotFound from "../../component/notFound2.jsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { IArticleInDb } from "../../interfaces/interface.ts";
import { getArticleById } from "../../db_services/artilces/getone.ts";
import { pool } from "../../config/pool.ts";
/*
       id={data.id}
            categorie={data.categorie}
            subcategorie={data.subcategorie}
            lieu={data.lieu}
            description={data.description}
            prix={data.prix}
            dateadd={data.dateadd}
            username={data.username}

*/

export const handler: Handlers<IArticleInDb | null> = {
  async GET(req, ctx) {
    const { id } = ctx.params;

    const idNumber = parseInt(id);
    const articles = await getArticleById(pool, idNumber);
    if (!articles || articles.length == 0) {
      return ctx.render(null);
    } else {
      return ctx.render(articles[0]);
    }
  },
};

export default function DetailsPublic(
  { data }: PageProps<IArticleInDb | null>,
  pageProps: PageProps,
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
        <Navbar isLogin={false} />
        <header>
          <div>
            <h1>
              تفاصيل الاعلان
            </h1>
          </div>
        </header>

        <div class="card-container">
          <ArticleComponent {...data} />
        </div>
      </body>
    </Fragment>
  );
}
