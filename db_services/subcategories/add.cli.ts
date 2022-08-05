import { pool } from "../../config/pool.ts";
import { createSubCategorie } from "../../db_services/subcategories/add.ts";

async function createSubCategorieCli() {
  // recive categorie name from cli
  if (Deno.args.length > 1) {
    const categorie_id = parseInt(Deno.args[0]);
    const nom = Deno.args[1];
    console.log({ nom, categorie_id });
    await createSubCategorie(pool, { nom, categorie_id });
  } else {
    console.log("this command syntax is ");
    console.log(
      "deno run --allow-read --allow-env --allow-net db_services/subcategories/add.ts {categorie_id} {nom}",
    );
  }
}

await createSubCategorieCli();
