import "https://deno.land/std@0.149.0/dotenv/load.ts";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IArticleInDb } from "./interface.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new postgres.Pool(databaseUrl, 3, true);
const client = await pool.connect();

export async function getArticleById(
  id: number,
): Promise<IArticleInDb[] | void> {
  try {
    const articles = await client.queryObject<IArticleInDb>(
      `SELECT * FROM articles WHERE id = $id `,
      { id },
    );
    return articles.rows;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
