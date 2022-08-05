import { pool } from "../config/pool.ts";

import { create_all_tables } from "./create_tables.ts";

const paths = [
  "users.sql",
  "tokens.sql",
  "categories.sql",
  "subcategories.sql",
  "articles.sql",
  "lieux.sql",
];
await create_all_tables(pool, paths);
