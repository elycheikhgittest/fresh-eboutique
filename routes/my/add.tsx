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
    // verify integer value are not alphanumerique

    let categorie = 0;
    if ( data.get("categorie")) {
      categorie = parseInt(String(data.get("categorie")));
    }

    let subcategorie = 0;
    if (data.get("subcategorie")) {
      subcategorie = parseInt(String(data.get("subcategorie")));
    }

    let lieu = 0;
    if ( data.get("lieu")) {
      lieu = parseInt(String(data.get("lieu")));
    }
    let description = "";
    if (data.get("description")) {
      description = String(data.get("description"));
    }
    let prix = 0;
    if ( data.get("prix")) {
      prix = parseInt(String(data.get("prix")));
    }

    // verify incoming data aigainst some validations rules (later)

    console.log({
      categorie,
      subcategorie,
      lieu,
      description,
      prix,
    });

    try {
      await createArticle(
        pool,
        {
          categorie: 1,
          subcategorie: 1,
          lieu: 1,
          description: "from routes",
          prix: 5000,
          dateAdd: "3-8-2022",
        },
      );
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
