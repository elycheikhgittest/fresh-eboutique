/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import Navbar from "../islands/Navbar.tsx";

import { isloginFromRequest } from "../utiles/islogin.ts";
import { ILoginState } from "../interfaces/mod.ts";

export const handler: Handlers<ILoginState> = {
  async GET(req, ctx) {
    const isLogin = await isloginFromRequest(req);
    return ctx.render({ isLogin });
  },
};

export default function Search(pageProps: PageProps<ILoginState>) {
  return (
    <Fragment>
      <Head>
        <title>
          search
        </title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar isLogin={pageProps.data.isLogin} />
        <header>
          <div>
            <h1>
              البحث عن اعلان
            </h1>
          </div>
        </header>

        <div class="form_container">
          <form>
            <select>
              <option selected>
                اختر التصنيف
              </option>
              <option value="1">
                منازل
              </option>
              <option value="2">
                قطع ارضية
              </option>
              <option value="3">
                سيارات
              </option>
            </select>

            <select>
              <option selected>
                اختر المكان
              </option>
              <option value="1">
                نواكشوط-عرفات
              </option>
              <option value="2">
                يارتنواكشوط-ت
              </option>
              <option value="3">
                نواذيبو
              </option>
            </select>

            <label>
              السعر بالاوقية
            </label>
            <input type="number" />
            <input type="submit" value="بحث" />
          </form>
        </div>
      </body>
    </Fragment>
  );
}
