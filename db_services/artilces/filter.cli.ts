import "https://deno.land/std@0.149.0/dotenv/load.ts";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import { getAndFilterArticles } from "./filter.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new postgres.Pool(databaseUrl, 3, true);

const rows = await getAndFilterArticles(pool, {
  categorie: undefined,
  lieu: 1,
});
console.log(rows);
