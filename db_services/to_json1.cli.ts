import { readCSVObjects } from "https://deno.land/x/csv@v0.7.5/mod.ts";
import { join } from "https://deno.land/std@0.148.0/path/mod.ts";

async function readCategorieCsv() {
  const categories = [];
  const f = await Deno.open(`./db_services/categories/categories.csv`);
  let id = 1;

  for await (const obj of readCSVObjects(f)) {
    console.log(obj);
    categories.push({ id, nom: String(obj["categorie"]) });
    id++;
  }
  f.close();
  return categories;
}

async function readSubcategorieCsv() {
  const subcategories = [];
  const f = await Deno.open(`./db_services/subcategories/subcategories.csv`);
  let id = 1;
  for await (const obj of readCSVObjects(f)) {
    console.log(obj);
    subcategories.push({
      id,
      nom: String(obj["nom"]),
      categorie_id: String(obj["categories_id"]),
    });
    id++;
  }
  f.close();
  return subcategories;
}
async function readLieuxCsv() {
  const lieux = [];
  const f = await Deno.open(`./db_services/lieux/lieux.csv`);

  for await (const obj of readCSVObjects(f)) {
    console.log(obj);
    let id = 1;
    lieux.push({
      id,
      nom: String(obj["nom"]),
    });
    id++;
  }
  f.close();
  return lieux;
}

async function initCli() {
  const categories = await readCategorieCsv();
  const subcategories = await readSubcategorieCsv();

  const lieux = await readLieuxCsv();

  const data = {
    categories,
    subcategories,
    lieux,
  };

  const dataJson = JSON.stringify(data);
  const p = join(Deno.cwd(), "db_services/to_json.json");
  console.log(p);
  Deno.writeTextFileSync(p, dataJson);
}

await initCli();
//  deno run --allow-read --allow-write  db_services/to_json1.cli.ts
