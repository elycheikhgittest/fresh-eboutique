import { getArticles } from "./list.ts";

import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts"; 
const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new postgres.Pool(databaseUrl, 3, true);


const rows = await getArticles(pool,5);
console.log(rows);
