/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import ArticleComponent from "../../component/articleDetails.tsx";
import NotFound from "../../component/notFound2.jsx";
// http://localhost:3000/api/private/objects/objectname/list/g_.ts
import { Handlers, PageProps } from "$fresh/server.ts";
import { IArticleInDb } from "../../db_services/artilces/interface.ts";
import { getArticleById } from "../../db_services/artilces/getone.ts";
import { pool } from "../../config/pool.ts";

export const handler: Handlers<IArticleInDb | null> = {
  async GET(req, ctx) {
    //console.log(req);
    const { id } = ctx.params;

    const idNumber = parseInt(id);
    const articles = await getArticleById(pool, idNumber);
    console.log({ articles });
    if (!articles) {
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
  console.log({ data });
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
          <ArticleComponent
            desc={data.description}
            prix={data.prix}
            dateAdd={data.dateAdd}
          />
        </div>
      </body>
    </Fragment>
  );
}
