import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { IArticleInDb } from "./interface.ts";

interface IArticleFilter {
  categorie: number | undefined;
  lieu: number | undefined;
}

// filter by
export async function getAndFilterArticles(
  pool: postgres.Pool,
  articleFilter: IArticleFilter,
): Promise<IArticleInDb[] | void> {
  const client = await pool.connect();
  let params = {};
  let isFirstCondition = -1;
  let sqlText = "SELECT * FROM articles";
  // WHERE categorie =
  if (articleFilter.categorie) {
    // add to params
    params = { ...params, categorie: articleFilter.categorie };
    // add to sqlText
    sqlText += ` WHERE categorie = $categorie `;

    isFirstCondition++;
  }

  if (articleFilter.lieu) {
    isFirstCondition++;
    // add to params
    params = { ...params, lieu: articleFilter.lieu };
    // add to sqlText
    if (isFirstCondition == 0) {
      sqlText += ` WHERE lieu = $lieu `;
    } else {
      sqlText += ` AND lieu = $lieu `;
    }
  }

  try {
    const articles = await client.queryObject<IArticleInDb>(
      sqlText,
      params,
    );
    return articles.rows;
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
