import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
import { IArticle } from "./interface.ts";
import { createArticle } from "./add_func.ts";
import {
  create_table_articles,
  create_table_users,
} from "../../tables/create_tables.ts";
import {
  drop_table_articles,
  drop_table_users,
} from "../../tables/drop_tables.ts";
import { pool } from "./pool.ts";

const a: IArticle = {
  categorie: 0,
  subcategorie: 0,
  lieu: 0,
  description: `
    منزل من خمسة غرف بمقاطعة دار النعيم غير بعيد من فيراج ول ابادو ومساحة القطعة:300 م2
    `,
  prix: 320000,
  dateAdd: "23-4-2022",
};

Deno.test({
  name: "add article",
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
    const result = await createArticle(pool, a);
    pool.end();
    //console.log(result)
    // test
    assertEquals(result.rowCount, 1);
    //  rowCount
  },
});
