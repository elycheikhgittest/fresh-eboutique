import { pool } from "../../config/pool.ts";
import { createCategorie } from "../../db_services/categories/add.ts";

async function createCategorieCli() {
  // recive categorie name from cli
  if (Deno.args.length > 0) {
    const nom = Deno.args[0];
    await createCategorie(pool, { nom });
  } else {
    console.log("this command syntax is ");
    console.log(
      "deno run --allow-read --allow-env --allow-net  db_services/categories/add.cli.ts {nom}",
    );
  }
}

await createCategorieCli();
