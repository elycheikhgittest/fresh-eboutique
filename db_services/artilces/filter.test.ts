//  give some filter and inspect row sise

import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { createArticle } from "./add_func.ts";
import {
  create_table_articles,
  create_table_users,
} from "../../tables/create_tables.ts";
import {
  drop_table_articles,
  drop_table_users,
} from "../../tables/drop_tables.ts";

import { articlesToSave } from "./add_data.ts";
import { getAndFilterArticles } from "./filter.ts";
import { pool } from "./pool.ts";

Deno.test({
  name: "filter articles",
  // permissions:{read:true,env:true,net:true},
  //only: true,
  fn: async () => {
    // create tables
    await create_table_users(pool);
    await create_table_articles(pool);
    // drop tables
    await drop_table_articles(pool);
    await drop_table_users(pool);
    // create tables
    await create_table_users(pool);
    await create_table_articles(pool);
    // add articles
    articlesToSave.forEach(
      async (article) => {
        await createArticle(pool, article);
      },
    );

    const rows = await getAndFilterArticles(pool, {
      categorie: undefined,
      lieu: 1,
    });
    // console.log('==============================')
    // console.log({rows})
    // console.log('==============================')
    pool.end();
    if (rows) assertEquals(rows.length, 5);
    else assertEquals("long list", "void");
  },
});
