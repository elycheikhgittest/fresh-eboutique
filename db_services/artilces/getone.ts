import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IArticleInDb } from "../../interfaces/interface.ts";
//import { IArticleInDb } from "./interface.ts";

export async function getArticleById(
  pool: postgres.Pool,
  id: number,
): Promise<IArticleInDb[] | void> {
  const client = await pool.connect();
  try {
    const articles = await client.queryObject<IArticleInDb>(
      `SELECT * FROM articles WHERE id = $id `,
      { id },
    );
    console.log(articles.rows);
    return articles.rows;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
