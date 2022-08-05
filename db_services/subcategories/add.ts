import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { ISubCategorieInput } from "../../interfaces/interface.ts";

export async function createSubCategorie(
  pool: postgres.Pool,
  subCategorie: ISubCategorieInput,
) {
  const client = await pool.connect();
  try {
    await client.queryObject(
      `
        INSERT INTO subcategories
        (nom,categorie_id )
        VALUES  ( $nom, $categorie_id )
        `,
      {
        nom: subCategorie.nom,
        categorie_id: subCategorie.categorie_id,
      },
    );
  } catch (e) {
    logger.error(e);
  } finally {
    client.release();
  }
}
