import { readCSVObjects } from "https://deno.land/x/csv@v0.7.5/mod.ts";

import { pool } from "../../config/pool.ts";
import { createSubCategorie } from "../../db_services/subcategories/add.ts";

async function initCli() {
  const f = await Deno.open(`./db_services/subcategories/subcategories.csv`);

  for await (const obj of readCSVObjects(f)) {
    console.log(obj);
    await createSubCategorie(pool, {
      nom: obj["nom"],
      categorie_id: parseInt(obj["categories_id"]),
    });
  }

  f.close();
}

await initCli();
//  deno run --allow-read --allow-env --allow-net  db_services/subcategories/init.cli.ts
