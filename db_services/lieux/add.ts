import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import * as logger from "https://deno.land/std@0.149.0/log/mod.ts";
import { ILieuInput } from "../../interfaces/interface.ts";

export async function createLieux(
  pool: postgres.Pool,
  categorie: ILieuInput,
) {
  const client = await pool.connect();
  const sqlText =       `
  INSERT INTO lieux
  (nom )
  VALUES  ( $nom )
  `
  try {
    await client.queryObject(sqlText,
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
