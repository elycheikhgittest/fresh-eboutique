import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
//import { IArticleInDb } from "./interface.ts";
import { itemPerPage } from "../../config/config.ts";
import { IArticleInDb } from "../../interfaces/interface.ts";

export async function getArticles(
  pool: postgres.Pool,
  skip: number,
): Promise<IArticleInDb[] | void> {
  const client = await pool.connect();
  //const itemPerPage = 3;
  //const skip = 0 ;
  try {
    const articles = await client.queryObject<IArticleInDb>(
      `SELECT * FROM articles LIMIT $itemPerPage OFFSET $skip `,
      { itemPerPage, skip },
    );
    return articles.rows;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
