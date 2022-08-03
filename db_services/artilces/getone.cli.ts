import { getArticleById } from "./getone.ts";

import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts"; 
const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new postgres.Pool(databaseUrl, 3, true);


const id = 2;
const results = await getArticleById(pool,id);
if (results && results.length > 0) console.log(results[0]);
if (results && results.length == 0) {
  console.log(`no article with id : ${id} ${JSON.stringify(results.length)} `);
}
