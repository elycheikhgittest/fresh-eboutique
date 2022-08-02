/** @jsx h */
import { h } from "preact";

import { Head } from "$fresh/src/runtime/head.ts";
import { Fragment } from "preact";
import { UnknownPageProps } from "$fresh/server.ts";

import Navbar from "../islands/Navbar.tsx";
//<p>404 not found: {url.pathname}</p>;
export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Fragment>
      <Head>
        <title>home in head</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body dir="rtl">
        <Navbar isLogin={false} />
        <header>
          <h1>
            لائحة اﻹعلانات
          </h1>
        </header>

        <div class="card-container">
          الصفحة المطلوبة غير موجودة
          <br />
          ربما كتبتم الرابط بطريقة او ان الرابط يحيل الي محتوي لم يعد موجود
        </div>
      </body>
    </Fragment>
  );
}
