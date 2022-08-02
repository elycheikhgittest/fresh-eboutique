import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IArticle } from "./interface.ts";

export async function createArticle(
  pool: postgres.Pool,
  article: IArticle,
): Promise<any> {
  const client = await pool.connect();
  try {
    const { categorie, subcategorie, lieu, prix, description, dateAdd } =
      article;
    const result = await client.queryObject(
      ` INSERT INTO articles
        (categorie, subcategorie, lieu, prix, description, dateAdd )
        VALUES ( $categorie, $subcategorie, $lieu, $prix, $description, $dateAdd)
        `,
      { categorie, subcategorie, lieu, prix, description, dateAdd },
    );
    return result;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
