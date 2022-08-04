/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import AddForm from "../../islands/addForm.tsx";
import { convertToIntOrZero } from "../../utiles/convet_to_int_or_zero.ts";
import { articleValidationRules } from "../../utiles/article_validation_rules.ts";

import {
  firstMessages,
  flattenMessages,
  maxLength,
  minLength,
  numberBetween,
  required,
  validate,
} from "https://deno.land/x/validasaur@v0.15.0/mod.ts";

import {
  Cookie,
  getCookies,
  setCookie,
} from "https://deno.land/std@0.149.0/http/cookie.ts";
import { createArticle } from "../../db_services/artilces/add_func.ts";
import { pool } from "../../config/pool.ts";
import { isloginFromRequest } from "../../utiles/islogin.ts";

export const handler: Handlers<null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const { isLogin, userId } = await isloginFromRequest(req);
    console.log({ isLogin });
    if (!isLogin) {
      return Response.redirect(`${url.protocol}//${url.host}/user/login`);
    }
    return ctx.render(null);
  },
  async POST(req, ctx) {
    const url = new URL(req.url);
    const { isLogin, userId } = await isloginFromRequest(req);
    console.log({ isLogin });
    if (!isLogin) {
      return Response.redirect(`${url.protocol}//${url.host}/user/login`);
    }
    console.log({ isLogin, userId });
    const data = await req.formData();
    // validate that option is in some range
    // verify desc min 4 max 150

    let categorie = 0;
    categorie = convertToIntOrZero(String(data.get("categorie")));

    let subcategorie = 0;
    subcategorie = convertToIntOrZero(String(data.get("subcategorie")));

    let lieu = 0;
    lieu = convertToIntOrZero(String(data.get("lieu")));

    let description = "";
    description = String(data.get("description"));

    let prix = 0;
    prix = convertToIntOrZero(String(data.get("prix")));

    // verify incoming data aigainst some validations rules (later)
    const inputs = {
      categorie,
      subcategorie,
      lieu,
      description,
      prix,
    };

    console.log(inputs);
    const [passes, errors] = await validate(inputs, articleValidationRules);
    const firstErrors = firstMessages(errors);
    const flattenErrors = flattenMessages(errors);
    //
    console.log({ passes });
    console.log({ firstErrors });
    console.log({ flattenErrors });
    // qui ajoute cette article

    try {
      if (passes) {
        await createArticle(
          pool,
          {
            ...inputs,
            dateAdd: Date.now().toString(),
          },
          userId,
        );
      }

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
