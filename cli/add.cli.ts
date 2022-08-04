import { pool } from "../config/pool.ts";
import { createArticle } from "../db_services/artilces/add_func.ts";
import { articlesToSave } from "./add_data.ts";
//import { createArticle } from "./add_func.ts";

articlesToSave.forEach(
  async (article) => {
    await createArticle(pool, article, 1);
  },
);
