/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers } from "$fresh/server.ts";

import Navbar from "../islands/Navbar.tsx";

import {
  deleteCookie,
  getCookies,
} from "https://deno.land/std@0.149.0/http/cookie.ts";
import { removeToken } from "../db_services/tokens/remove.ts";
import LogoutForm from "../islands/LogoutForm.tsx";
import { pool } from "../config/pool.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render(null);
  },
  async POST(req, ctx) {
    const url = new URL(req.url);
    const resp = await ctx.render(null);
    const cookies = getCookies(req.headers);
    const token = cookies["token"];
    if (token) {
      // I must verify token is valid v4/uuid befor trying to remove it from db
      await removeToken(pool, token);
    }
    deleteCookie(resp.headers, "token", { path: "/" });
    return Response.redirect(`${url.protocol}//${url.host}`);
  },
};

export default function Logout() {
  return (
    <Fragment>
      <Head>
        <title>
          خروج
        </title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar isLogin={true} />
        <header>
          <h1>
            خروج
          </h1>
        </header>

        <div class="card-container">
          <LogoutForm />
        </div>
      </body>
    </Fragment>
  );
}
