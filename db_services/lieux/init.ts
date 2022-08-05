import { readCSVObjects } from "https://deno.land/x/csv@v0.7.5/mod.ts";
import { pool } from "../../config/pool.ts";
import { createLieux } from "../../db_services/lieux/add.ts";

async function initCli() {
  const f = await Deno.open(`./db_services/lieux/lieux.csv`);

  for await (const obj of readCSVObjects(f)) {
    console.log(obj);
    await createLieux(pool, { nom: obj["nom"] });
  }

  f.close();
}

await initCli();
//  deno run --allow-read --allow-env --allow-net  db_services/lieux/init.ts
