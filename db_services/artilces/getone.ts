import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IArticleInDb } from "../../interfaces/interface.ts";

/*
id , userId  ,categorie, subcategorie, lieu,
description, prix, dateAdd

*/
export async function getArticleById(
  pool: postgres.Pool,
  id: number,
): Promise<IArticleInDb[] | void> {
  const client = await pool.connect();
  try {
    const articles = await client.queryObject<IArticleInDb>(
      `SELECT 
      a.id, categorie, subcategorie, lieu, description, prix, dateAdd, username
      FROM articles a
      LEFT JOIN users  u 
      ON u.id = a.userId
      WHERE a.id = $id `,
      { id },
    );
    return articles.rows;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
