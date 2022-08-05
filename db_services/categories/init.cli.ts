import { readCSVObjects } from "https://deno.land/x/csv@v0.7.5/mod.ts";

import { pool } from "../../config/pool.ts";
import { createCategorie } from "../../db_services/categories/add.ts";

async function initCli() {
  const f = await Deno.open(`./db_services/categories/categories.csv`);

  for await (const obj of readCSVObjects(f)) {
    console.log(obj);
    await createCategorie(pool, { nom: obj["categorie"] });
  }

  f.close();
}

await initCli();
//  deno run --allow-read --allow-env --allow-net  db_services/categories/init.cli.ts 
