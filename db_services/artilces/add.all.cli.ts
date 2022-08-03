import "https://deno.land/std@0.149.0/dotenv/load.ts";
import { pool } from "../../config/pool.ts";

import { articlesToSave } from "./add_data.ts";
import { createArticle } from "./add_func.ts";

const userId = 1;
articlesToSave.forEach(
  async (article) => {
    await createArticle(pool, article,userId);
  },
);
