import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IArticle } from "../../interfaces/interface.ts";
//import { IArticle } from "./interface.ts";

export async function createArticle(
  pool: postgres.Pool,
  article: IArticle,
  userId: number,
): Promise<any> {
  const client = await pool.connect();
  try {
    const { categorie, subcategorie, lieu, prix, description, dateadd } =
      article;
    const result = await client.queryObject(
      ` INSERT INTO articles
        (userId, categorie, subcategorie, lieu, prix, description, dateAdd )
        VALUES ( $userId, $categorie, $subcategorie, $lieu, $prix, $description, $dateadd)
        `,
      { userId, categorie, subcategorie, lieu, prix, description, dateadd },
    );
    return result;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
