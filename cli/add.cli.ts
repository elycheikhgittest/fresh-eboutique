import "https://deno.land/std@0.149.0/dotenv/load.ts";
import * as postgres from "https://deno.land/x/postgres@v0.16.1/mod.ts";

const databaseUrl = Deno.env.get("DATABASE_URL")!;
const pool = new postgres.Pool(databaseUrl, 3, true);

import { articlesToSave } from "./add_data.ts";
import { createArticle } from "./add_func.ts";

articlesToSave.forEach(
  async (article) => {
    await createArticle(pool, article);
  },
);
