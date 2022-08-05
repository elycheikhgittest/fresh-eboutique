import { pool } from "../../config/pool.ts";
import { createLieux } from "../../db_services/lieux/add.ts";

async function createLieuxCli() {
  // recive categorie name from cli
  if (Deno.args.length > 0) {
    const nom = Deno.args[0];
    await createLieux(pool, { nom });
  } else {
    console.log("this command syntax is ");
    console.log(
      "deno run --allow-read --allow-env --allow-net db_services/lieux/add.cli.ts {nom}",
    );
  }
}

await createLieuxCli();
