/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";

import {
  Cookie,
  deleteCookie,
  setCookie,
} from "https://deno.land/std@0.149.0/http/cookie.ts";

import { Handlers, PageProps } from "$fresh/server.ts";

import { hashPassword } from "../../utiles/hash_passord.ts";
//import LoginForm from "../../islands/LoginForm.tsx";
import RegisterForm from "../../islands/LoginForm.tsx";
import { getUserByName } from "../../db_services/users/getone.ts";

import { createUser } from "../../db_services/users/add.ts";

import Nav from "../../islands/Navbar.tsx";
import { IToken } from "../../db_services/tokens/interface.ts";
import { createToken } from "../../db_services/tokens/add.ts";
import { IMessage } from "../../interfaces/mod.ts";
import { pool } from "../../config/pool.ts";

export const handler: Handlers<IMessage> = {
  async GET(_req, ctx) {
    const resp = await ctx.render({ message: "", isLogin: false });
    return resp;
  },
  async POST(req, ctx) {
    let resp: Response;
    let userId = -1;
    let tokenStr = "";
    const data = await req.formData();
    const username = String(data.get("username"));
    const password = String(data.get("password"));
    const passwordHashed = hashPassword(password);
    let isSaved = false; 
    try { 
      await createUser(pool, { username, password: passwordHashed });
      const users = await getUserByName(pool, username);
      if (users) {
        userId = users[0].id;
      }

      tokenStr = crypto.randomUUID();
      const tokenObj: IToken = {
        userId,
        token: tokenStr,
        expire_date: 1,
        isActive: 1,
      };

      await createToken(pool, tokenObj);
      isSaved = true;
    } catch (error) {
      console.log(error);
    }

    if (isSaved) {
      resp = await ctx.render({ message: "", isLogin: true });
      setCookie(resp.headers, {
        name: "token",
        value: tokenStr,
        //expires: new Date("18 Dec 2025 12:00:00 UTC"),
        path: "/",
        httpOnly: true,
      });
    } else {
      resp = await ctx.render({ message: "useralready exist", isLogin: false });
      deleteCookie(resp.headers, "token");
    }

    return resp;
  },
};

export default function Register(ctx: PageProps<IMessage>) {
  return (
    <Fragment>
      <Head>
        <title>Register</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Nav isLogin={ctx.data.isLogin} />
        <header class="bg-white shadow">
          <div>
            <h1>
              استمارة التسجيل
            </h1>
          </div>
        </header>
        <RegisterForm isLogin={ctx.data.isLogin} />
      </body>
    </Fragment>
  );
}
