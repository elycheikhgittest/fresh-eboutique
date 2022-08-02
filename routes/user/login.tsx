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

import Nav from "../../islands/Navbar.tsx";
import { IToken } from "../../db_services/tokens/interface.ts";
import { createToken } from "../../db_services/tokens/add.ts";
import { IMessage } from "../../interfaces/mod.ts";

export const handler: Handlers<IMessage> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const resp = await ctx.render({ message: "", isLogin: false });
    return resp;
  },
  async POST(req, ctx) {
    const url = new URL(req.url);
    let resp = await ctx.render({ message: "", isLogin: false });
    const data = await req.formData();
    const username = String(data.get("username"));
    console.log({ username });
    const password = String(data.get("password"));
    console.log({ password });
    const users = await getUserByName(username);
    if (!users) {
      console.log(" db connexion failed or other pb");
      resp = await ctx.render({ message: "", isLogin: false });
      deleteCookie(resp.headers, "token");
    }
    if (users && users.length != 1) {
      console.log("invalide username ");
      resp = await ctx.render({ message: "", isLogin: false });
      deleteCookie(resp.headers, "token");
    }

    if (users && users.length == 1) {
      const passwordInDb = users[0]["password"];
      const passwordHashed = hashPassword(password);
      if (passwordHashed == passwordInDb) {
        const tokenStr = crypto.randomUUID();
        const tokenObj: IToken = {
          userId: users[0].id,
          token: tokenStr,
          expire_date: 1,
          isActive: 1,
        };
        await createToken(tokenObj);
        resp = await ctx.render({ message: "", isLogin: true });
        setCookie(resp.headers, {
          name: "token",
          value: tokenStr,
          //expires: new Date("18 Dec 2025 12:00:00 UTC"),
          path: "/",
          httpOnly: true,
        });
      } else {
        console.log("invalid password");
      }
    }

    return resp;
  },
};

export default function Login(ctx: PageProps<IMessage>) {
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
              استمارة الدخول
            </h1>
          </div>
        </header>
        <RegisterForm isLogin={ctx.data.isLogin} />
      </body>
    </Fragment>
  );
}

// /** @jsx h */
// import { h } from "preact";
// import { Head } from "$fresh/src/runtime/head.ts";
// import { Fragment } from "preact";
// import Navbar from "../../islands/Navbar.tsx";
// import LoginForm from "../../islands/LoginForm.tsx";

// export default function Login() {
//   return (
//     <Fragment>
//       <Head>
//         <title>login</title>
//         <link rel="stylesheet" href="/styles.css" />
//       </Head>
//       <body dir="rtl">
//         <Navbar />
//         <header class="bg-white shadow">
//           <div>
//             <h1>
//               استمارة الدخول
//             </h1>
//           </div>
//         </header>

//         <LoginForm  isLogin={false} />
//       </body>
//     </Fragment>
//   );
// }
