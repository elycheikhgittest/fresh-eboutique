/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import AddForm from "../../islands/addForm.tsx";

import {
  Cookie,
  getCookies,
  setCookie,
} from "https://deno.land/std@0.149.0/http/cookie.ts";
import { createArticle } from "../../db_services/artilces/add_func.ts";
import { pool } from "../../config/pool.ts";

export const handler: Handlers<null> = {
  async POST(req, ctx) {
    const data = await req.formData();
    const username = String(data.get("username"));
    const password = String(data.get("password"));
    // verify incoming data aigainst some validations rules (later)
    // try to save in db
    console.log({ username, password });

    try {
      //await createArticle(pool,{categorie:1,subcategorie:1,lieu:1,})
      const cookies = getCookies(req.headers);
      console.log({ cookies });

      return ctx.render(null);
    } catch (error) {
      console.log("user already in db");
    }
    return ctx.render(null);
  },
};

export default function DetailsPublic() {
  return (
    <Fragment>
      <Head>
        <title>add article</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar isLogin={true} />
        <header>
          <div>
            <h1>
              اضافة اعلان
            </h1>
          </div>
        </header>
        <AddForm />
      </body>
    </Fragment>
  );
}
