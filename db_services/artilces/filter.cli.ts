import { pool } from "../../config/pool.ts";
import { getAndFilterArticles } from "./filter.ts";

const rows = await getAndFilterArticles(pool, {
  categorie: undefined,
  lieu: 1,
});
console.log(rows);
