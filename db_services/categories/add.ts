import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { ICategorieInput } from "../../interfaces/interface.ts";

export async function createCategorie(
  pool: postgres.Pool,
  categorie: ICategorieInput,
) {
  const client = await pool.connect();
  try {
    await client.queryObject(
      `
        INSERT INTO categories
        (nom )
        VALUES  ( $nom )
        `,
      {
        nom: categorie.nom,
      },
    );
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
