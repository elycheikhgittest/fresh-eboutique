import { pool } from "../config/pool.ts";
import { articlesToSave } from "./add_data.ts";
import { createArticle } from "./add_func.ts";

articlesToSave.forEach(
  async (article) => {
    await createArticle(pool, article);
  },
);
