/** @jsx h */
import { h } from "preact";
import { Head } from "$fresh/src/runtime/head.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Fragment } from "preact";
import Navbar from "../../islands/Navbar.tsx";
import { ILoginState } from "../../interfaces/mod.ts";
import { isloginFromRequest } from "../../utiles/islogin.ts";

export const handler: Handlers<ILoginState> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const isLogin = await isloginFromRequest(req);
    if (!isLogin) {
      return Response.redirect(`${url.protocol}//${url.host}/user/login`);
    }
    return ctx.render({ isLogin });
  },
};

export default function MyList(pageProps: PageProps<ILoginState>) {
  return (
    <Fragment>
      <Head>
        <title>add article</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar isLogin={pageProps.data.isLogin} />
        <header>
          <div>
            <h1>
              اعلاناتي الخاصة
            </h1>
          </div>
        </header>
      </body>
    </Fragment>
  );
}
